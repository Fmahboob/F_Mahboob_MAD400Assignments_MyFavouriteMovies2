import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {
  border: String;
  @Input() affect? : string
  @Input() firstOrLast?: boolean;


  constructor(private element: ElementRef) { 
    this.border = this.element.nativeElement.style.border;
  }
@HostListener ("mouseenter") somethingelse(){
  if (this.affect == "textDecoration") { // operating on type
    this.element.nativeElement.style.fontSize = "20px";
}else if (this.affect == "fontWeight") { // operating on tags
  this.element.nativeElement.style.fontWeight = "bold";
}
else if (this.affect == "border" && this.firstOrLast) { //operating on card
  this.element.nativeElement.style.border = "2px solid #0000FF";
}
}

@HostListener ("mouseleave") onMouseLeave() {
  if (this.affect == "textDecoration") { // operating on type
    this.element.nativeElement.style.textDecoration = "initial";
  }
  else if (this.affect == "fontWeight") { // operating on tags
    this.element.nativeElement.style.fontWeight = "normal";
  }
  else if (this.affect == "border" && this.firstOrLast) { //operating on card
    this.element.nativeElement.style.border = this.border;
  }
}
}