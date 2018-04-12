// diamond.ts
module Zhiyou{
    export class Diamond extends Control{
        protected arc: number

        constructor(protected minute:number,protected sizeRadio:number){
            super()
            this.sizeRadio = this.sizeRadio || 0.01
            // arc表示两点之间的夹角
            this.arc = 6 * (this.minute - 15) * 2 * Math.PI / 360
        }

        public render(){
            super.render()
            this.ele.style.borderRadius = '50%'
            this.ele.style.zIndex = '5'
        }

        public layout(){
            let size = Diamond.radius * this.sizeRadio
            this.ele.style.width = size * 2 + Diamond.pxSuffix
            this.ele.style.height = size * 2 + Diamond.pxSuffix

            let radius = Diamond.radius * 0.9
            let top = radius * Math.sin(this.arc)
            let left = radius * Math.cos(this.arc)

            this.ele.style.top = Diamond.clientHeight / 2 + top - size + Diamond.pxSuffix
            this.ele.style.left = Diamond.clientWidth / 2 + left - size + Diamond.pxSuffix
        }
    }
}