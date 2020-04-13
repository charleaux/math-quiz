import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subtraction',
  templateUrl: './subtraction.component.html',
  styleUrls: ['./subtraction.component.css'],
})
export class SubtractionComponent implements OnInit {
  score = 0;
  questionNumber = 1;
  maxNumber = 1;
  correctBonus = 40;
  incorrectPenalty = 20;
  first = 1;
  second = 1;

  answer1 = 0;
  answer2 = 1;
  answer3 = 2;
  answer4 = 3;
  isCorrect = null;
  constructor() {}

  ngOnInit(): void {}

  onAnswer(answerNumber: number) {
    this.isCorrect = this.first - this.second === answerNumber;

    if (this.isCorrect) {
      this.onNextQuestion();
      this.score += this.correctBonus;
    } else {
      this.score = this.score > 0 ? this.score - this.incorrectPenalty : 0;
    }

    if (this.score >= 100) {
      setTimeout(() => {
        this.maxNumber += 1;
        this.score = 0;
        this.questionNumber = 1;
      }, 2000);
    }

    setTimeout(() => {
      this.isCorrect = null;
    }, 1000);
  }

  onNextQuestion() {
    this.questionNumber += 1;
    const maxGuess = this.maxNumber * 2;
    this.first = Math.floor(Math.random() * this.maxNumber);
    this.second = Math.floor(Math.random() * this.maxNumber);

    this.answer1 = Math.floor(Math.random() * maxGuess);
    this.answer2 = Math.floor(Math.random() * maxGuess);
    this.answer3 = Math.floor(Math.random() * maxGuess);
    this.answer4 = Math.floor(Math.random() * maxGuess);
    const rightAnswer = Math.floor(Math.random() * 4);

    console.log({ rightAnswer });

    switch (rightAnswer) {
      case 0:
        this.answer1 = this.first - this.second;
        break;
      case 1:
        this.answer2 = this.first - this.second;
        break;
      case 2:
        this.answer3 = this.first - this.second;
        break;
      case 3:
        this.answer4 = this.first - this.second;
        break;
      default:
        break;
    }
  }
}
