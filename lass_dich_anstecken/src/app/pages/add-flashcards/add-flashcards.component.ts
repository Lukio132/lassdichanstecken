import { Component } from '@angular/core';
import { Flashcard, FlashcardService } from '../../../service/flashcards.service';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-add-flashcards',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-flashcards.component.html',
  styleUrl: './add-flashcards.component.css'
})
export class AddFlashcardsComponent {

  flashcard: Flashcard = { title: '', content: '' };

  constructor(private flashcardService: FlashcardService) {}

  onSubmit() {
    if (this.flashcard.title && this.flashcard.content) {
      this.flashcardService.addFlashcard(this.flashcard);
      this.flashcard = { title: '', content: '' };
    }
  }
}
