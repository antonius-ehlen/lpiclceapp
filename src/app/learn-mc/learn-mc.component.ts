import { Component } from '@angular/core';
import { QuestionMc } from '../share/question';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'ae-learn-mc',
  templateUrl: './learn-mc.component.html',
  styleUrls: ['./learn-mc.component.css']
})
export class LearnMcComponent {

  questionsmc: QuestionMc[] = []
  toggleAnswer: boolean = false;
  currentq: number = -1

  constructor(
    private qs: QuestionService,
  ) { this.getAllMc()}

  ngOnInit() {
    this.getAllMc()
  }

  getAllMc(): void {
    this.qs.getAllMc().subscribe(
      mcs => this.questionsmc = mcs
    )
  }

  toggleCorrectAns(qid: number) {
    if (qid == this.currentq) {
      this.toggleAnswer = !this.toggleAnswer;
      this.currentq = qid
    } else {
      if (this.toggleAnswer) {
        this.currentq = qid
      } else {
        this.toggleAnswer = !this.toggleAnswer;
        this.currentq = qid
      }
    }
  }

}
