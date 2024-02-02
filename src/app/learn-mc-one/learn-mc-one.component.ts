import { Component } from '@angular/core';
import { QuestionMc } from '../share/question';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'ae-learn-mc-one',
  templateUrl: './learn-mc-one.component.html',
  styleUrls: ['./learn-mc-one.component.css']
})
export class LearnMcOneComponent {
  questionsmc: QuestionMc[] = []
  toggleAnswer: boolean = false;
  currentqnr: number = 0
  q: QuestionMc = {
    "qid": -1,
    "qtyp": "mc",
    "qtxt": ["nix"],
    "qanswers": [],
    "qcorrect": "nix",
    "qinfo": []
  }


  constructor(
    private qs: QuestionService,
  ) {
    this.getAllMc()
  }

  ngOnInit() {
    this.getAllMc()
  }

  getAllMc(): void {
    this.qs.getAllMc().subscribe(
      mcs => {
        this.questionsmc = mcs;
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
