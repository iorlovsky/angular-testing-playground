import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appSvgAttributes]'
})
export class SvgAttributesDirective implements OnChanges {
  // tslint:disable-next-line:no-any
  @Input() svgAttributes: { [key: string]: any };

  constructor(
    private elementRef: ElementRef<Element>
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('svgAttributes' in changes) {
      Object.entries(this.svgAttributes)
        .forEach(([attribute, value]) => {
          this.elementRef.nativeElement.setAttributeNS(null, attribute, value);
        });
    }
  }

}
