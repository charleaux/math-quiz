import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdditionComponent } from './addition/addition.component';
import { SubtractionComponent } from './subtraction/subtraction.component';
import { SubjectsComponent } from './subjects/subjects.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: SubjectsComponent },
  { path: 'addition', component: AdditionComponent },
  { path: 'subtraction', component: SubtractionComponent },
  { path: '**', component: SubjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
