import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AuthorDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class AuthorModule { }
