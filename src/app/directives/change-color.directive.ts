import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {
  // @Input() pColor!:string;
  constructor(el:ElementRef) { 
    el.nativeElement.style['color'] = 'white';
    el.nativeElement.style['background-color']='red';
  }

}
