import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { QuestionMc } from "../share/question-mc";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  assetsMc = 'assets/lpi102mc.json'

  constructor(
    private http: HttpClient
  ) { }

  getAllMc(): Observable<QuestionMc[]> {
    return this.http.get<QuestionMc[]>(this.assetsMc)
  }




}
