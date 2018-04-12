// calc.component.ts
import {Component,OnInit} from '@angular/core'

// 引入社保部分的格式以及费率
import {ISheBao,ZySheBaoService} from '../../modules/zy/zy-shebao.service'
// 引入工资结果以及计算时的方法调用
import {ISalaryResult,ZySalaryService} from '../../modules/zy/zy-salary.service'

@Component({
    selector: 'zy-calc',
    templateUrl: './calc.component.html'
})

export class CalcComponent implements OnInit{
    public jiBen: number
    public jiXiao: number
    public jiangJin: number

    public showResult: boolean = false

    public result: ISalaryResult
    public settings: ISheBao

    public constructor(
        private sheBaoService:ZySheBaoService,
        private salaryService:ZySalaryService
    ){}

    // 组件的初始化方法
    // 在该方法内通过服务获取社保的初始值
    ngOnInit(){
        this.settings = this.sheBaoService.rate
    }

    public calc(){
        this.jiBen = this.jiBen || 0
        this.jiXiao = this.jiXiao || 0
        this.jiangJin = this.jiangJin || 0
        // 调用ZySalaryService服务中的方法计算工资
        this.result = this.salaryService.doCalc(this.jiBen,this.jiXiao,this.jiangJin)
        this.showResult = true
    }
}