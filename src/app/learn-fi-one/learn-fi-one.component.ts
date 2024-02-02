import { Component } from '@angular/core';
import { QuestionService } from '../services/question.service';
import { Question } from '../share/question';

@Component({
  selector: 'ae-learn-fi-one',
  templateUrl: './learn-fi-one.component.html',
  styleUrls: ['./learn-fi-one.component.css']
})
export class LearnFiOneComponent {
  questions: Question[] = []
  toggleAnswer: boolean = false;
  currentqnr: number = 0
  q: Question = {
    "qid": -1,
    "qtyp": "sc",
    "qtxt": ["nix"],
    "qanswers": [],
    "qcorrect": "nix",
    "qinfo": []
  }


  constructor(
    private qs: QuestionService,
  ) {
    this.getAllFi()
  }

  ngOnInit() {
    this.getAllFi()
  }

  getAllFi(): void {
    this.qs.getAllFi().subscribe(
      fis => {
        this.questions = fis;
        this.questions.map(q => {
          q.qanswers.map(a => a.correct = true);
          this.currentqnr = 0;
          this.q = this.questions[this.currentqnr];
        }
        );
      })
  }

  firstQuestion(): void {
    this.currentqnr = 0;
    this.q = this.questions[this.currentqnr]
    console.log('first:', this.currentqnr)
    this.toggleAnswer = false
  }

  lastQuestion(): void {
    this.currentqnr = this.questions.length - 1;
    this.q = this.questions[this.currentqnr]
    console.log('last:', this.currentqnr)
    this.toggleAnswer = false
  }

  nextQuestion(): void {
    if (this.currentqnr < this.questions.length - 1) {
      this.currentqnr++;
      console.log('next:', this.currentqnr)
      this.q = this.questions[this.currentqnr]
    }
    this.toggleAnswer = false
  }

  prevQuestion(): void {
    if (this.currentqnr > 0) {
      this.currentqnr--;
      console.log('prev:', this.currentqnr)
      this.q = this.questions[this.currentqnr]
    }
    this.toggleAnswer = false
  }

}
