import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyExchangeComponent } from './currency-exchange/currency-exchange.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators, } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { QuizComponent } from './quiz/quiz.component';
import { CurrencyFormatPipe } from './pipes/currency-format.pipe';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { QuizAnswerDecisionComponent } from './quiz-answer-decision/quiz-answer-decision.component';
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    CurrencyExchangeComponent,
    QuizComponent,
    CurrencyFormatPipe,
    QuizAnswerDecisionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    HttpClientModule,
    MatButtonModule,
    MatListModule,
    MatStepperModule,
    MatRadioModule,
    MatCardModule,
    MatDialogModule
  ],
  providers: [],
  entryComponents: [QuizAnswerDecisionComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
