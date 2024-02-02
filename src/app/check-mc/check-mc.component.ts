import { Component } from '@angular/core';
import { Question } from '../share/question';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'ae-check-mc',
  templateUrl: './check-mc.component.html',
  styleUrls: ['./check-mc.component.css']
})
export class CheckMcComponent {
  questions: Question[] = []
  toggleAnswer: boolean = false;
  currentqnr: number = 0
  q: Question = {
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
        this.questions = mcs;
        this.currentqnr = 0;
        this.q = this.questions[this.currentqnr];
        // set selected property (which is optional) to false to declare and define it
        this.questions.map(q => q.qanswers.map(a => a.selected = false))
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
    // check current question
    // if correct

    // select next question
    if (this.currentqnr < this.questions.length - 1) {
      this.currentqnr++;
      console.log('next:', this.currentqnr)
      this.q = this.questions[this.currentqnr]
    }
    this.toggleAnswer = false

    // if not correct
    // warning popup, reset current question, reset prev question
    //   and select prev question

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
