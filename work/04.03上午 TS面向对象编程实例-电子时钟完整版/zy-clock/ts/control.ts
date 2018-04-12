// control.ts

module Zhiyou {
    export interface IControl{
        show():void
        render():void
        layout():void
    }
    
    // 创建基类(父类):Control
    export class Control implements IControl{
        protected fillColor = 'black'
        // 创建div元素
        // 原生js创建
        // document.createElement('div')
        protected ele: HTMLDivElement
    
        protected static clientWidth: number
        protected static clientHeight: number
        protected static radius: number
        protected static pxSuffix = 'px'
    
        constructor(){}
    
        public show(){
            this.render()
            this.layout()
        }
    
        public render(){
            this.ele = document.createElement('div')
            this.ele.style.backgroundColor = this.fillColor
            this.ele.style.position = 'absolute'
            document.body.appendChild(this.ele)
        }
        public layout(){}
    
        public static windowResized(){
            // 静态成员通过类名调用
            Control.clientWidth = document.documentElement.clientWidth
            Control.clientHeight = document.documentElement.clientHeight
            Control.radius = Math.min(Control.clientWidth,Control.clientHeight)/2
        } 
    }
}
Zhiyou.Control.windowResized()