// export type RadiusWidthHeight = [
//     number,
//     number,
//     number
// ]

// Action表示一个动作
// 用户操作后要执行的代码
export type Action = () => void

// abstract关键字用于定义抽象类和在抽象类内部定义抽象方法
// 抽象类做为其它派生类的基类使用
// 它一般不会被实例化
// 不同于接口的是：抽象类可以包含成员的实现细节
export abstract class Control{
    protected ele: HTMLDivElement

    // 抽象方法：不包含具体实现并且必须在派生类中实现
    abstract render(): void
}