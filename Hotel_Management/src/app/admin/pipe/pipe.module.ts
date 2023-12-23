import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from './search.pipe';
import { ImgPipe } from './img.pipe';



@NgModule({
  declarations: [
    SearchPipe,
    ImgPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipeModule { }
