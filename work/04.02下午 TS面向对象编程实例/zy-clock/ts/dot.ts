// dot.ts(点)
module Zhiyou {
    // Dot继承Control
    export class Dot extends Control {
        constructor() {
            // 只要是继承就必须有super()
            super()
        }
        public render() {
            super.render()
            // 将从父类继承过来的div的圆角半径改为50%，优先级为最高(10)
            this.ele.style.borderRadius = '50%'
            this.ele.style.zIndex = '10'
        }
        public layout() {
            let radius = Dot.radius * 0.04
            // 宽高是圆角半径的两倍
            this.ele.style.width = radius * 2 + Dot.pxSuffix
            this.ele.style.height = radius * 2 + Dot.pxSuffix
            // 上下边距是窗口上下高度除以2再减去直角半径
            this.ele.style.top = Dot.clientHeight / 2 - radius + Dot.pxSuffix
            this.ele.style.left = Dot.clientWidth / 2 - radius + Dot.pxSuffix
        }
    }
}