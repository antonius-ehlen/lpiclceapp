import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Question, QuestionMc } from "../share/question";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  assetsMc = 'assets/lpi102mc.json'
  assetsSc = 'assets/lpi102sc.json'
  assetsFi = 'assets/lpi102fi.json'
  assetsAll = 'assets/lpi102all.json'

  constructor(
    private http: HttpClient
  ) { }

  getAllMc(): Observable<Question[]> {
    return this.http.get<Question[]>(this.assetsMc)
  }

  getAllSc(): Observable<Question[]> {
    return this.http.get<Question[]>(this.assetsSc)
  }

  getAllFi(): Observable<Question[]> {
    return this.http.get<Question[]>(this.assetsFi)
  }

  getAll(): Observable<Question[]> {
    return this.http.get<Question[]>(this.assetsAll)
  }




}
