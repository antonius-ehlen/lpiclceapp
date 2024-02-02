import { Component } from '@angular/core';
import { Question } from '../share/question';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'ae-learn-all',
  templateUrl: './learn-all.component.html',
  styleUrls: ['./learn-all.component.css']
})
export class LearnAllComponent {

  questions: Question[] = []
  toggleAnswer: boolean = false;
  currentq: number = -1

  constructor(
    private qs: QuestionService,
  ) { }

  ngOnInit() {
    this.getAll()
  }

  getAll(): void {
    this.qs.getAll().subscribe(
      all => {
        this.questions = all;
        this.questions.map(q => {
          if (q.qtyp === "fi") {
            q.qanswers.map(a => a.correct = true)
          } else { }
        });
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
