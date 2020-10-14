import { TemplateRef, ViewContainerRef } from '@angular/core';

import { RepeatDirective } from './repeat.directive';

describe('RepeatDirective', () => {
  it('should create an instance', () => {
    const directive = new RepeatDirective(<TemplateRef<void>>{}, <ViewContainerRef>{});
    expect(directive).toBeTruthy();
  });
});
