// second.ts
// 秒针

module Zhiyou {
    export interface CalcArgs {
        duration: number
        zIndex: string
        delay: number
    }
    export class Second extends Control {
        // span标签
        public el: HTMLSpanElement
        // 在该类的构造函数中调用super
        constructor(protected fillColor: string = 'red') { super() }

        public calcArgs(): CalcArgs {
            let args: CalcArgs
            // 创建2个元素
            args.duration = 60
            args.zIndex = '9'

            // 现实时间赋值
            let time = new Date()
            // 获取当前时间，秒数
            let s = time.getSeconds() * -1

            args.delay = s - 15

            return args
        }

        public calcLayoutArgs() {
            let args : calcLayoutArgs

            args.radius=Control.radius*0.9
        }

        public render() {
            super.render()

        }

        public layout() {
            super.layout()
        }
    }
}