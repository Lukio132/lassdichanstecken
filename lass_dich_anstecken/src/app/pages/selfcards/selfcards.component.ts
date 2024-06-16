import { Component } from '@angular/core';
import { Flashcard, FlashcardService } from '../../../service/flashcards.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-selfcards',
  standalone: true,
  imports: [NgFor],
  templateUrl: './selfcards.component.html',
  styleUrl: './selfcards.component.css'
})
export class SelfcardsComponent {

  flashcards: Flashcard[] = [];

  constructor(private flashcardService: FlashcardService) {}

  ngOnInit() {
    this.flashcards = this.flashcardService.getFlashcards();
  }}