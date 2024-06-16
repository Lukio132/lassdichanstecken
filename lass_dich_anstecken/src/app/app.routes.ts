import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { TablesComponent } from './pages/tables/tables.component';
import { FlashcardsComponent } from './pages/flashcards/flashcards.component';
import { NgModule } from '@angular/core';
import { SelfcardsComponent } from './pages/selfcards/selfcards.component';
import { WorkcardsComponent } from './pages/workcards/workcards.component';
import { AddFlashcardsComponent } from './pages/add-flashcards/add-flashcards.component';




export const routes: Routes = [
  { path: 'home', component: HomepageComponent }, // ścieżka dla strony głównej
  { path: 'tables', component: TablesComponent }, // ścieżka dla komponentu tabel
  { path: 'flashcards', component: FlashcardsComponent }, // ścieżka dla komponentu tabel
  { path: 'flashcards/self', component: SelfcardsComponent },
  { path: 'flashcards/work', component: WorkcardsComponent },
  { path: 'flashcards/add', component: AddFlashcardsComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }