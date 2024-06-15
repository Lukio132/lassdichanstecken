import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { StatisticsComponent } from '../../components/statistics/statistics.component';
import { TableComponent } from '../../components/table/table.component';
import { FlashcardsComponent } from '../flashcards/flashcards.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NavComponent, FooterComponent, StatisticsComponent, TableComponent, FlashcardsComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
