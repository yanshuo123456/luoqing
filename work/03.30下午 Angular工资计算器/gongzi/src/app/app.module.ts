import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// 提供服务和指令
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {ZyModule} from './modules/zy/zy.module';
import { AppComponent } from './app.component';
import {CalcComponent} from './component/calc/calc.component';
import {SetupComponent} from './component/setup/setup.component';
import {AboutComponent} from './component/about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    SetupComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ZyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
