import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiKey = '2d69aa84c41d47b0a3a69ed90ea0dd78';
  private apiUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.min.json';
  benzSecret = '342bbd94-57d3-4349-b622-d15d30b3e40f';

  private quizApiUrl = 'https://quizapi.io/api/v1/questions';
  quizApiKey = '05aonVo0gTKGKGAHZaWZKeHW6Vj16VQjmQxyCPEL'; // Replace with your actual API key

  constructor(private http: HttpClient) { }

  getCurrencies(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  convertCurrency(defaultCurrency: string, wantedCurrency: string): Observable<any> {
    return this.http.get<any>(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${defaultCurrency}/${wantedCurrency}.json`);
  }

  getQuizQuestions(category: string, difficulty: string): Observable<any> {
    const params = new HttpParams()
      .set('apiKey', this.quizApiKey)
      .set('category', category)
      .set('limit', 5)
      .set('difficulty', difficulty);

    return this.http.get(this.quizApiUrl, { params });
  }
}
