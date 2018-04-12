import { Component, OnInit } from '@angular/core';
import { OneService } from '../one.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isShow = false;
  
  constructor(private oneService: OneService) { }

  ngOnInit() {
    this.getSkill()
    this.getFeilv()
  }

  Skill: {}
  Feilv: {}

  getSkill(): void {
    this.Skill = this.oneService.skill
  }
  getFeilv(): void {
    this.Feilv = this.oneService.feilv
  }
  dian(): void {
    this.oneService.dian()
    this.isShow = true;
  }

}
