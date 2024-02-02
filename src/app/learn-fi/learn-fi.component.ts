import { Component } from '@angular/core';
import { Question } from '../share/question';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'ae-learn-fi',
  templateUrl: './learn-fi.component.html',
  styleUrls: ['./learn-fi.component.css']
})
export class LearnFiComponent {

  questions: Question[] = []
  toggleAnswer: boolean = false;
  currentq: number = -1

  constructor(
    private qs: QuestionService,
  ) { this.getAllFi()}

  ngOnInit() {
    this.getAllFi()
  }

  getAllFi(): void {
    this.qs.getAllFi().subscribe(
      scs => {this.questions = scs;
              this.questions.map(q => q.qanswers.map(a => a.correct = true));
      }
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
