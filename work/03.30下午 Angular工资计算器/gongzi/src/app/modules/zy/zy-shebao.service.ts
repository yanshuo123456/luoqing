// zy-shebao.service.ts
import {Injectable} from '@angular/core'

// 社保费率/社保计算结果的结构
export interface ISheBao {
    yangLao: number;
    yiLiao: number;
    shiYe: number;
    gongShang: number;
    shengYu: number;
    gongJiJin: number;
    tongChou: number;
}

// 如果创建的服务不依赖于其它对象，可以不使用Injectable类装饰器
// 但是在服务的构造函数中注入了依赖对象时，就需要使用Injectable装饰器
// 推荐的做法：不管服务中是否有依赖对象，在创建服务时都使用Injectable类装饰器
@Injectable()
export class ZySheBaoService {
    // 社保的基本费率
    // 它的属性是public，表示可以在类外部访问这个属性
    // private：私有属性，表示只能在类的内部访问
    // protected：在类的内部及子类中可以访问
    public rate: ISheBao = {
        yangLao: 0.08,
        yiLiao: 0.02,
        shiYe: 0.005,
        gongShang: 0,
        shengYu: 0,
        gongJiJin: 0.08,
        tongChou: 20
    }
}