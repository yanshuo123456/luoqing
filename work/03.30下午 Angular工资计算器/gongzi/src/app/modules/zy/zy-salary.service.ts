// zy-salary.service.ts
import {Injectable} from '@angular/core'
import {ISheBao,ZySheBaoService} from './zy-shebao.service'

// 定义接口：工资计算的结果
export interface ISalaryResult {
    total: number;
    sheBao: ISheBao,
    jiShui: number;
    shui: number;
    shiFa: number;
}
@Injectable()
export class ZySalaryService {
    // 添加构造函数
    constructor(private sheBaoService:ZySheBaoService){}

    // 在该服务中添加计算工资的方法
    public doCalc(jiBen:number,jiXiao:number,jiangJin:number):ISalaryResult{
        // 总额
        let total = jiBen + jiXiao + jiangJin
        // 计税工资
        let jiShui = total - jiBen * (
            this.sheBaoService.rate.yangLao +
            this.sheBaoService.rate.yiLiao + 
            this.sheBaoService.rate.shiYe +
            this.sheBaoService.rate.gongJiJin
        ) - this.sheBaoService.rate.tongChou

        // 计算人个所得税
        let shui = this.calcShui(jiShui)

        // 计算实发工资
        let shiFa = jiShui - shui

        return {
            total: total,
            sheBao: {
                yangLao: jiBen * this.sheBaoService.rate.yangLao,
                yiLiao: jiBen * this.sheBaoService.rate.yiLiao,
                shiYe: jiBen * this.sheBaoService.rate.shiYe,
                gongShang: jiBen * this.sheBaoService.rate.gongShang,
                shengYu: jiBen * this.sheBaoService.rate.shengYu,
                gongJiJin: jiBen * this.sheBaoService.rate.gongJiJin,
                tongChou: this.sheBaoService.rate.tongChou
            },
            jiShui: jiShui,
            shui: shui,
            shiFa: shiFa
        }
    }

    // 个税计算的方法
    private calcShui(jiShui:number):number{
        let base = jiShui > 3500 ? jiShui - 3500 : 0
        let tax = 0

        if (base <= 0) {
            tax = 0
        }else if (base <= 1500) {
            tax = base * 0.03
        }else if (base <= 4500) {
            tax = base * 0.1 - 105
        }else if (base <= 9000) {
            tax = base * 0.2 - 555
        }else if (base <= 35000) {
            tax = base * 0.25 - 1005
        }else if (base <= 55000) {
            tax = base * 0.3 - 2775
        }else if (base <= 80000) {
            tax = base * 0.35 - 5505
        }else tax = base * 0.45 - 13505

        return tax
    }  
}
