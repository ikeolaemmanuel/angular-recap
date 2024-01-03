import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-quiz-answer-decision',
  templateUrl: './quiz-answer-decision.component.html',
  styleUrls: ['./quiz-answer-decision.component.scss']
})
export class QuizAnswerDecisionComponent {
  modalData: any;
  constructor(
    private _mdr: MatDialogRef<QuizAnswerDecisionComponent>,
    @Inject(MAT_DIALOG_DATA) data: string
  ) {
    this.modalData = data;
    console.log(this.modalData)
  }
  CloseDialog() {
    this._mdr.close(false)
  }
}
