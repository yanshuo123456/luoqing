// control.ts

module Zhiyou {
    // 导出接口
    export interface IControl {
        show(): void
        render(): void
        layout(): void
    }

    // 创建基类(父类):Control，加入IControl接口中去
    export class Control implements IControl {
        // 创建一个保护元素:黑色(black)
        protected fillColor = 'black'
        // 创建div元素
        // 原生js创建
        // document.createElement('div')
        // protected:表示受保护元素，无法赋值
        // 创建一个在HTML中的div
        protected ele: HTMLDivElement

        // 写出四个静态元素，宽 高 px 圆角半径
        protected static clientWidth: number
        protected static clientHeight: number
        protected static radius: number
        protected static pxSuffix = 'px'

        constructor() { }

        // 调用render layout方法
        public show() {
            this.render()
            this.layout()
        }

        public render() {
            // 创建一个div
            this.ele = document.createElement('div')
            // 背景颜色设为黑色
            this.ele.style.backgroundColor = this.fillColor
            // 绝对定位
            this.ele.style.position = 'absolute'
            // 加入body中
            document.body.appendChild(this.ele)
        }
        public layout() { }

        public static windowResized() {
            // 静态成员通过类名调用
            Control.clientWidth = document.documentElement.clientWidth
            Control.clientHeight = document.documentElement.clientHeight

            Control.radius = Math.min(Control.clientWidth, Control.clientHeight) / 2
        }
    }
}
// 调用windows
Zhiyou.Control.windowResized()