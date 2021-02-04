import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBoldWithBg]'
})
export class BoldWithBgDirective implements OnInit{
  @Input()
  appBoldWithBg: string;
  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, 'background', this.appBoldWithBg);
    this.renderer.setStyle(this.element.nativeElement, 'font-weight', 'bold');
  }

}
