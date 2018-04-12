import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  titles = '设置'
 
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
  }

}
