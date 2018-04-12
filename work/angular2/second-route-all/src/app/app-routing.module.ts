import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// 引入三个文件夹路径
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],



})
export class AppRoutingModule { }
