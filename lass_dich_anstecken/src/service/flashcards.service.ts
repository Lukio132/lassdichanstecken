import { Injectable } from '@angular/core';

export interface Flashcard {
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class FlashcardService {
  private flashcards: Flashcard[] = [];

  getFlashcards(): Flashcard[] {
    return this.flashcards;
  }

  addFlashcard(flashcard: Flashcard) {
    this.flashcards.push(flashcard);
  }
}