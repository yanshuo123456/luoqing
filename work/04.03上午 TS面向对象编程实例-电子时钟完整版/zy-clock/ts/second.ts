// second.ts

module Zhiyou{
    export interface CalcArgs{
        duration?: number
        zIndex?: string
        delay?: number
    }
    export type RadiusWidthHeight = [
        number,
        number,
        number
    ]

    export class Second extends Control{
        // span标签
        public el: HTMLSpanElement
        // 在该类的构造函数中调用super
        constructor(protected fillColor:string = 'red'){super()}

        public calcArgs():CalcArgs{
            let args: CalcArgs = {}
            args.duration = 60
            args.zIndex = '9'

            let time = new Date()
            let s = time.getSeconds() * -1
            args.delay = s - 15

            return args
        }

        public calcLayoutArgs():RadiusWidthHeight{
            let radius = Second.radius * 0.9
            let width = radius * 1.15
            let height = radius * 0.01

            return [radius,width,height]
        }

        public render(){
            super.render()

            let args = this.calcArgs()
            console.log(args)
            this.ele.style.backgroundColor = 'initial'
            this.ele.style.animationName = 'rotate'
            this.ele.style.animationTimingFunction = 'linear'
            this.ele.style.animationIterationCount = 'infinite'
            this.ele.style.animationDuration = args.duration + 's'
            this.ele.style.animationDelay = args.delay + 's'
            this.ele.style.zIndex = args.zIndex

            this.el = document.createElement('span')
            this.el.style.display = 'block'
            this.el.style.backgroundColor = this.fillColor
            this.ele.appendChild(this.el)
        }

        public layout(){
            let args = this.calcLayoutArgs()
            // 设置秒针外层div的宽、高、顶部和左侧距离
            this.ele.style.width = args[0] * 2 + Second.pxSuffix
            this.ele.style.height = 10 + Second.pxSuffix
            this.ele.style.top = Second.clientHeight / 2 - 5 + Second.pxSuffix
            this.ele.style.left = Second.clientWidth / 2 - args[0] + Second.pxSuffix

            // 设置秒针的width、height、marginTop、borderRadius
            this.el.style.width = args[1] + Second.pxSuffix
            this.el.style.height = args[2] + Second.pxSuffix
            this.el.style.marginTop = 5 - args[2] / 2 + Second.pxSuffix
            this.el.style.borderRadius = args[2] / 2 + Second.pxSuffix
        }
    }
}