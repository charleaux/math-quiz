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

  ngOnInit(): void {
    this.onNextQuestion();
    this.questionNumber = 1;
  }

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
    const maxGuess = this.maxNumber * 2 < 4 ? 4 : this.maxNumber * 2;
    this.first = Math.round(Math.random() * this.maxNumber);
    this.second = Math.round(Math.random() * this.maxNumber);
    const correctAnswer = this.first - this.second;

    let answers = [];
    while (answers.length <= 3) {
      const sign = Math.round(Math.random() * 2) === 1 ? 1 : -1;
      const answer = Math.round(Math.random() * maxGuess) * sign;

      if (answer !== correctAnswer) {
        answers = [...answers, answer];
        answers = [...new Set([...answers])];
      }
    }

    this.answer1 = answers[0];
    this.answer2 = answers[1];
    this.answer3 = answers[2];
    this.answer4 = answers[3];

    const rightAnswer = Math.floor(Math.random() * 4);

    console.log({ rightAnswer });

    switch (rightAnswer) {
      case 0:
        this.answer1 = correctAnswer;
        break;
      case 1:
        this.answer2 = correctAnswer;
        break;
      case 2:
        this.answer3 = correctAnswer;
        break;
      case 3:
        this.answer4 = correctAnswer;
        break;
      default:
        break;
    }
  }
}
