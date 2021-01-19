import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModuleTwoModule } from '../libs/module-two/module-two.module';
import { ModuleOneModule } from '../libs/module-one/module-one.module';
import { ModuleThreeModule } from '../libs/module-three/module-three.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ModuleOneModule,
    ModuleTwoModule,
    ModuleThreeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
