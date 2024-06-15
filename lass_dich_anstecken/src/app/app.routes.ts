import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { TablesComponent } from './pages/tables/tables.component';
import { FlashcardsComponent } from './pages/flashcards/flashcards.component';

export const routes: Routes = [
  { path: 'home', component: HomepageComponent }, // ścieżka dla strony głównej
  { path: 'tables', component: TablesComponent }, // ścieżka dla komponentu tabel
  { path: 'flashcards', component: FlashcardsComponent } // ścieżka dla komponentu tabel
];
