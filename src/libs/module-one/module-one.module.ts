import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleOneComponent } from './module-one.component';

@NgModule({
  declarations: [ModuleOneComponent],
  exports: [
    ModuleOneComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class ModuleOneModule { }
