import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyExchangeComponent } from './currency-exchange/currency-exchange.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  {path: 'quiz', component: QuizComponent},
  {path: 'currency-exchange', component: CurrencyExchangeComponent},
  {path: '', redirectTo: '/currency-exchange', pathMatch: 'full'},
  // {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
