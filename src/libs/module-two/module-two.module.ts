import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleTwoComponent } from './module-two.component';

@NgModule({
  declarations: [ModuleTwoComponent],
  exports: [
    ModuleTwoComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class ModuleTwoModule { }
