import { Injectable } from '@angular/core';
import { Skill,Second } from './skill';

@Injectable()
export class HeroService {

  constructor() { }

    // 费用
  count: Skill = {
    jiben: 0, jixiao: 0, jiangjin: 0, all: 0,

    yanglao: 0, yiliao: 0, shiye: 0, gongshang: 0, shengyu: 0, gongjijin: 0, shebaojin: 0, jishui: 0, grsds: 0, sfgz: 0
  }
  // 费率
  feilv: Second = {
    yanglaofeilv: 8,
    yiliaofeilv: 2,
    shiyefeilv: 0.5,
    gongshangfeilv: 0,
    shengyufeilv: 0,
    gongjijinfeilv: 0.8,
    shebaofeilv: 0,
  }
  // isShow = false

  dian(): void {
    this.count.all = this.count.jiben + this.count.jixiao + this.count.jiangjin
    if (this.count.all < 3500) {
      alert('你是穷鬼,不纳税!')
      return
    }
    if (this.count.all > 3500) {
      this.count.yanglao = this.count.all * this.feilv.yanglaofeilv / 100
      this.count.yiliao = this.count.all * this.feilv.yiliaofeilv / 100
      this.count.shiye = this.count.all * this.feilv.shiyefeilv / 100
      this.count.gongshang = this.count.all * this.feilv.gongshangfeilv / 100
      this.count.shengyu = this.count.all * this.feilv.shengyufeilv / 100
      this.count.gongjijin = this.count.all * this.feilv.gongjijinfeilv / 100
      this.count.shebaojin = this.count.all * this.feilv.shebaofeilv / 100
      // 下三项
      this.count.jishui = this.count.all - 3500

      this.count.grsds = (this.count.all - 3500) * 0.08

      this.count.sfgz = this.count.all - (this.count.yanglao + this.count.yiliao + this.count.shiye + this.count.gongshang + this.count.shengyu + this.count.gongjijin + this.count.shebaojin)

      // this.isShow = true
    }

  }
  chang(): void {
    this.count.all = 0
  }



}
