import { Component } from '@angular/core';
import { Question } from '../share/question';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'ae-learn-sc-one',
  templateUrl: './learn-sc-one.component.html',
  styleUrls: ['./learn-sc-one.component.css']
})
export class LearnScOneComponent {
  questionsmc: Question[] = []
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
    this.getAllSc()
  }

  ngOnInit() {
    this.getAllSc()
  }

  getAllSc(): void {
    this.qs.getAllSc().subscribe(
      scs => {
        this.questionsmc = scs;
        this.currentqnr = 0;
        this.q = this.questionsmc[this.currentqnr];
      })
  }

  firstQuestion(): void {
    this.currentqnr = 0;
    this.q = this.questionsmc[this.currentqnr]
    console.log('first:', this.currentqnr)
    this.toggleAnswer = false
  }

  lastQuestion(): void {
    this.currentqnr = this.questionsmc.length - 1;
    this.q = this.questionsmc[this.currentqnr]
    console.log('last:', this.currentqnr)
    this.toggleAnswer = false
  }

  nextQuestion(): void {
    if (this.currentqnr < this.questionsmc.length - 1) {
      this.currentqnr++;
      console.log('next:', this.currentqnr)
      this.q = this.questionsmc[this.currentqnr]
    }
    this.toggleAnswer = false
  }

  prevQuestion(): void {
    if (this.currentqnr > 0) {
      this.currentqnr--;
      console.log('prev:', this.currentqnr)
      this.q = this.questionsmc[this.currentqnr]
    }
    this.toggleAnswer = false
  }

}
