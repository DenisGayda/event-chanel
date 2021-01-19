import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleThreeComponent } from './module-three.component';

@NgModule({
  declarations: [ModuleThreeComponent],
  exports: [
    ModuleThreeComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class ModuleThreeModule { }
