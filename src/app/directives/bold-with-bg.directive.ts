import {Directive, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appBoldWithBg]'
})
export class BoldWithBgDirective implements OnInit, OnChanges{
  @Input()
  appBoldWithBg: string;
  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, 'background', this.appBoldWithBg);
    this.renderer.setStyle(this.element.nativeElement, 'font-weight', 'bold');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.renderer.setStyle(this.element.nativeElement, 'background', this.appBoldWithBg);
  }
}
