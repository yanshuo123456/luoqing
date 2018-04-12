import { Injectable } from '@angular/core';
import { Skill, Feilv } from './skill'

@Injectable()
export class OneService {

  constructor() { }


  skill: Skill = {
    one: 0,
    two: 0,
    three: 0,
    total: 0,

    yanglaojin: 0,
    yiliaojin: 0,
    shiyejin: 0,
    gongshangjin: 0,
    shengyufei: 0,
    gongjijin: 0,
    shebaojin: 0,
    shifa: 0,
    shui: 0
  }
  feilv: Feilv = {
    yanglaojinfeilv: 9,
    yiliaojinfeilv: 2,
    shiyejinfeilv: 0.5,
    gongshangjinfeilv: 0,
    shengyufeifeilv: 0,
    gongjijinfeilv: 8,
    shebaojinfeilv: 20,
  }

  isShow = false;

  dian(): void {
    this.skill.total = this.skill.one + this.skill.two + this.skill.three
    if (this.skill.total < 3500) {
      alert('你是穷鬼，不收税!')
    }
    if (this.skill.total > 3500) {
      this.skill.yanglaojin = this.feilv.yanglaojinfeilv * this.skill.total / 100
      this.skill.yiliaojin = this.feilv.yiliaojinfeilv * this.skill.total / 100
      this.skill.shiyejin = this.feilv.shiyejinfeilv * this.skill.total / 100
      this.skill.gongshangjin = this.feilv.gongshangjinfeilv * this.skill.total / 100
      this.skill.shengyufei = this.feilv.shengyufeifeilv * this.skill.total / 100
      this.skill.gongjijin = this.feilv.gongjijinfeilv * this.skill.total / 100
      this.skill.shebaojin = this.feilv.shebaojinfeilv * this.skill.total / 100

      this.skill.shifa = this.skill.total - this.skill.yanglaojin - this.skill.yiliaojin - this.skill.shiyejin - this.skill.gongshangjin - this.skill.shengyufei - this.skill.gongjijin - this.skill.shebaojin

      this.skill.shui = (this.skill.total - 3500) * 8 / 100

      this.isShow = true;
    }
  }

}
