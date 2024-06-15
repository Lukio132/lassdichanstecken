import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


interface Flashcard {
  question: string;
  answer: string;
  learned: boolean;
}


@Component({
  selector: 'app-flashcards',
  standalone: true,
  imports: [NgIf],
  templateUrl: './flashcards.component.html',
  styleUrl: './flashcards.component.css'
})
export class FlashcardsComponent implements OnInit {


  flashcards: Flashcard[] = [];
  currentFlashcard: Flashcard | null = null;
  showAnswer: boolean = false;
  learnedCount: number = 0; // Licznik nauczonych fiszek

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadFlashcards();
  }

  loadFlashcards() {
    this.http.get<Flashcard[]>('assets/flashcards.json')
      .subscribe(data => {
        this.flashcards = data;
        this.nextFlashcard();
      });
  }

  nextFlashcard() {
    const unlearnedFlashcards = this.flashcards.filter(card => !card.learned);
    
    if (unlearnedFlashcards.length === 0) {
      this.currentFlashcard = null;
      this.showAnswer = false;
      alert('Wszystkie fiszki zostały nauczone!');
      return;
    }

    const randomIndex = Math.floor(Math.random() * unlearnedFlashcards.length);
    this.currentFlashcard = unlearnedFlashcards[randomIndex];
    this.showAnswer = false;
  }

  toggleAnswer() {
    this.showAnswer = !this.showAnswer;
  }

  markAsLearned() {
    if (this.currentFlashcard && !this.currentFlashcard.learned) {
      this.currentFlashcard.learned = true;
      this.learnedCount++; // Inkrementacja licznika nauczonych fiszek
      this.nextFlashcard();
    }
  }
}