import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRepeat]'
})
export class RepeatDirective implements OnChanges {
  @Input() appRepeat: number;

  constructor(
    // tslint:disable-next-line:no-any
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if ('appRepeat' in changes) {
      this.render();
    }
  }

  private render(): void {
    for (let i = 0; i < this.appRepeat; i++) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }

}
