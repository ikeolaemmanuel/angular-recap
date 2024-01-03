import { Component } from '@angular/core';

import { ApiService } from '../services/api-service.service';
import { QuizAnswerDecisionComponent } from '../quiz-answer-decision/quiz-answer-decision.component';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

import { Location } from '@angular/common';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})

export class QuizComponent {
  Questions: any;
  questionIndex = -1;
  totalCorrectAnswers: number = 0;
  currentAnswersList: any;
  start: boolean = true;
  currentAnswer: any;
  category = 'None';
  difficulty = 'None';
  quizStatusFinished: boolean = false;

  matDialogRef!: MatDialogRef<QuizAnswerDecisionComponent>;

  constructor(private apiService: ApiService, private matDialog: MatDialog, private location: Location) { }

  ngOnInit() {
  }

  loadQuestions(): void {
    if (this.category === 'None' || this.difficulty === 'None') {
      alert('Please select Category and difficulty');
    } else {
      // Make the API call when the component is initialized
      this.apiService.getQuizQuestions(this.difficulty, this.category).subscribe(
        (data) => {
          // Handle successful API response
          console.log(data)
          this.Questions = data;
          this.loadNextQuestions();
        },
        (error) => {
          // Handle API error
          console.error('Error fetching data from API:', error);
        }
      );
    }
  }

  loadNextQuestions(): void {
    this.questionIndex++;
    if (this.start === true) {
      this.start = false
    }

    if (this.questionIndex < 5) {
      this.currentAnswersList = Object.keys(this.Questions[this.questionIndex].answers).map((key) => [key, this.Questions[this.questionIndex].answers[key]]);
    }
  }

  setAnswer(answer: string): void {
    this.currentAnswer = answer;
    if (answer === this.Questions[this.questionIndex].correct_answer) {
      this.OpenModal(true);
      this.totalCorrectAnswers++;
    } else {
      this.OpenModal(false);
    }
  }

  OpenModal(status: boolean) {
    this.matDialogRef = this.matDialog.open(QuizAnswerDecisionComponent, {
      data: {
        isAnswerCorrect: status,
        correctAnswer: this.Questions[this.questionIndex].correct_answer,
        explanation: this.Questions[this.questionIndex].explanation,
        isQuizFinished: this.questionIndex
      },
      disableClose: true
    });

    this.matDialogRef.afterClosed().subscribe(res => {
      console.log(this.totalCorrectAnswers);
      this.loadNextQuestions();
    });
  }

  setCategory(cat: string) {
    this.category = cat;
  }

  setDifficulty(diff: string) {
    this.difficulty = diff;
  }

  playAgain() {
    window.location.reload();
  }

}
