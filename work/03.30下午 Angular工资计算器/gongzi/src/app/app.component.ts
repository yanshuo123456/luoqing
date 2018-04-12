import { Component,ViewEncapsulation,ViewChild } from '@angular/core';
import {CalcComponent} from './component/calc/calc.component'
// 定义接口
interface ITabItem{
  title: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  // 设置视图包装属性设置为None，即不包装样式
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // 绑定第一个子视图
  @ViewChild(CalcComponent)
  private zyCalc:CalcComponent

  public tabItems: ITabItem[] = [
    {
      title: '计算',
      icon: 'fa fa-calculator'
    },
    {
      title: '设置',
      icon: 'fa fa-cog'
    },
    {
      title: '关于',
      icon: 'fa fa-tasks'
    }
  ]

  public tabIndex: number = 0

  // 计算工资的方法
  public settingChange(){
    this.zyCalc.calc()
  }
}