import { Component } from '@angular/core';
import { QuestionService } from '../services/question.service';
import { Question } from '../share/question';

@Component({
  selector: 'ae-learn-sc',
  templateUrl: './learn-sc.component.html',
  styleUrls: ['./learn-sc.component.css']
})
export class LearnScComponent {

  questions: Question[] = []
  toggleAnswer: boolean = false;
  currentq: number = -1

  constructor(
    private qs: QuestionService,
  ) {this.getAllSc() }

  ngOnInit() {
    this.getAllSc()
  }

  getAllSc(): void {
    this.qs.getAllSc().subscribe(
      scs => this.questions = scs
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
