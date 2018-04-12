// Alert.ts
import {Action} from './Control'
import {MaskControl} from './MaskControl'

export default class Alert extends MaskControl{
    protected static yesText = '确定'
    protected static noText = '取消'

    constructor(
        protected message: string,
        protected yesAction: Action
    ){super()}

    protected renderBody(){
        let box = document.createElement('div')
        box.className = 'modal-box'
        document.body.appendChild(box)

        // 保留box
        this.ele = box

        let msg = document.createElement('div')
        msg.className = 'modal-message'
        msg.innerText = this.message
        box.appendChild(msg)

        this.renderContent(box)

        let btnBox = document.createElement('div')
        btnBox.className = 'modal-button-box'
        box.appendChild(btnBox)
    }

    protected renderContent(box:HTMLDivElement){}

    protected renderButton(){
        let btn = document.createElement('div')
        btn.innerText = Alert.yesText
        document.querySelector('.modal-button-box').appendChild(btn)

        btn.onclick = (ev) => {
            // 关闭遮罩层
            this.close()
            // 
            this.yesAction()
        }
    }

    protected unRender(){
        document.body.removeChild(this.ele)
    }

    render (){
        this.renderBody()
        this.renderButton()
    }
    close(){
        super.close()
        this.unRender()
    }
    show(){
        super.show()
        this.render()
    }
}