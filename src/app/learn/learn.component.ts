import { Component } from '@angular/core';
import { QuestionService } from '../services/question.service';
import { QuestionMc } from '../share/question-mc';

@Component({
  selector: 'ae-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent {

  questionsmc: QuestionMc[] = []

  constructor(
    private qs: QuestionService,
  ) { }

  ngOnInit() {
    this.getAllMc()
  }

  getAllMc(): void {
    this.qs.getAllMc().subscribe(
      mcs => this.questionsmc = mcs
    )
  }

}
