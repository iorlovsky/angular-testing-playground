import { ElementRef } from '@angular/core';

import { SvgAttributesDirective } from './svg-attributes.directive';

describe('SvgLineDirective', () => {
  it('should create an instance', () => {
    // TODO: Create a mock for ElementRef.
    const directive = new SvgAttributesDirective(<ElementRef>{});
    expect(directive).toBeTruthy();
  });
});
