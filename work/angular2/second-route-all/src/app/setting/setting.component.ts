import { Component, OnInit } from '@angular/core';
import { OneService } from '../one.service'
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  constructor(private oneService: OneService) { }

  ngOnInit() {
    this.getFeilv()
  }

  feilv: {}

  getFeilv(): void {
    this.feilv = this.oneService.feilv
  }

}
