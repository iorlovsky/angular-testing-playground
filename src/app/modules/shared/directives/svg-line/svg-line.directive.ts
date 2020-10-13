import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appSvgLine]'
})
export class SvgLineDirective implements OnChanges {
  @Input() x1: number;
  @Input() x2: number;
  @Input() y1: number;
  @Input() y2: number;

  constructor(
    private elementRef: ElementRef<SVGLineElement>
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('x1' in changes) {
      this.elementRef.nativeElement.setAttributeNS(null, 'x1', this.x1.toString());
    }
    if ('x2' in changes) {
      this.elementRef.nativeElement.setAttributeNS(null, 'x2', this.x2.toString());
    }
    if ('y1' in changes) {
      this.elementRef.nativeElement.setAttributeNS(null, 'y1', this.y1.toString());
    }
    if ('y2' in changes) {
      this.elementRef.nativeElement.setAttributeNS(null, 'y2', this.y2.toString());
    }
  }

}
