import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizAnswerDecisionComponent } from './quiz-answer-decision.component';

describe('QuizAnswerDecisionComponent', () => {
  let component: QuizAnswerDecisionComponent;
  let fixture: ComponentFixture<QuizAnswerDecisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizAnswerDecisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizAnswerDecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
