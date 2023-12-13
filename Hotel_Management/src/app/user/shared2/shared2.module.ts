import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatRadioModule } from '@angular/material/radio';




  @NgModule({
    declarations: [],
    imports: [
      CommonModule,
      MatInputModule,
      MatButtonModule,
      MatFormFieldModule,
      MatNativeDateModule,
      MatSelectModule,
      MatIconModule,
      MatCardModule,
      MatRadioModule,
      MatGridListModule,
      ReactiveFormsModule,
      HttpClientModule,
      FormsModule,
    
     
      
     
    ],
  
    exports:[
      MatInputModule,
      MatButtonModule,
      MatFormFieldModule,
      MatNativeDateModule,
      MatSelectModule,
      MatIconModule,
      MatCardModule,
      MatRadioModule,
      MatGridListModule,
      ReactiveFormsModule,
      HttpClientModule,
      FormsModule,
    
      
      
    ]
})
export class Shared2Module { }
