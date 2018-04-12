import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = '工资计算器';
  isShow = false;
  count = {}
  feilv = {}
  constructor(private heroService: HeroService) { }
  getFeilv(): void {
    this.feilv = this.heroService.feilv
  }
  getCount(): void {
    this.count = this.heroService.count
  }
  ngOnInit() {
    this.getFeilv();
    this.getCount();
  }
  // 将创建的两个对象，赋值
  dian(): void {
    this.heroService.dian()
    this.isShow = true
  }
  inputChange(): void {
    this.isShow = false;
   }

}
