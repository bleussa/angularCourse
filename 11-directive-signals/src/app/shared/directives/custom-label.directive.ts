import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[customLabel]',
})
export class CustomLabelDirective implements OnInit {

  private htmlElement?: ElementRef<HTMLElement>;
  private colorGenerated: string = '';

  @Input() set color(value: string) {
    this.colorGenerated = value;
    this.setStyle();
  }

  constructor(
    private element: ElementRef<HTMLElement>
  ) {
    this.htmlElement = element;
  }

  ngOnInit(): void {

  }

  public setStyle() {
    if (!this.htmlElement) return
    this.htmlElement!.nativeElement.style.color = this.colorGenerated
  }

}
