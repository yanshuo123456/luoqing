// dot.ts
module Zhiyou{
    export class Dot extends Control{
        constructor(){
            super()
        }
        public render(){
            super.render()
            this.ele.style.borderRadius = '50%'
            this.ele.style.zIndex = '10'
        }
        public layout(){
            let radius = Dot.radius * 0.04
            this.ele.style.width = radius * 2 + Dot.pxSuffix
            this.ele.style.height = radius * 2 + Dot.pxSuffix
            this.ele.style.top = Dot.clientHeight/2 - radius + Dot.pxSuffix
            this.ele.style.left = Dot.clientWidth/2 - radius + Dot.pxSuffix            
        }
    }
}