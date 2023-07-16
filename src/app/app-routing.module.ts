import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorDetailsComponent } from './author/author-details/author-details.component';

const routes: Routes = [
  {path:'book-details',component:AuthorDetailsComponent},
  { path: '**', redirectTo: 'book-details', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
