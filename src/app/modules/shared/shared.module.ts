import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SvgLineDirective } from './directives/svg-line/svg-line.directive';

@NgModule({
  declarations: [SvgLineDirective],
  imports: [
    CommonModule
  ],
  exports: [
    ReactiveFormsModule,
    SvgLineDirective
  ]
})
export class SharedModule { }
