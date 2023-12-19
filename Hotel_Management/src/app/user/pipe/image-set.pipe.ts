import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageSet'
})
export class ImageSetPipe implements PipeTransform {

  transform(value: any): any {
    if(value){
    console.log(value);
    let change=value.slice(12,);
    console.log(change);
    
    return change;
    }
  }
}