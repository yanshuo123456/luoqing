import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// 引入路由
import { RouterModule, Routes } from '@angular/router';
// 写出要引入的component
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { JieshaoComponent } from './jieshao/jieshao.component';


const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'jieshao', component: JieshaoComponent }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
