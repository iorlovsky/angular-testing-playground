import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { RepeatDirective } from './directives/repeat/repeat.directive';
import { SvgAttributesDirective } from './directives/svg-attributes/svg-attributes.directive';

@NgModule({
  declarations: [SvgAttributesDirective, RepeatDirective],
  imports: [
    CommonModule
  ],
  exports: [
    ReactiveFormsModule,
    SvgAttributesDirective,
    RepeatDirective
  ]
})
export class SharedModule { }
