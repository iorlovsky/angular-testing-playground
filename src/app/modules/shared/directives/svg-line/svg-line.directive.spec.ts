import { ElementRef } from '@angular/core';

import { SvgLineDirective } from './svg-line.directive';

describe('SvgLineDirective', () => {
  it('should create an instance', () => {
    // TODO: Create a mock for ElementRef.
    const directive = new SvgLineDirective(<ElementRef>{});
    expect(directive).toBeTruthy();
  });
});
