
import { ShowCloseControl } from './ShowCloseControl'

export abstract class MaskControl extends ShowCloseControl {

    // 创建一个div
    private static mask: HTMLDivElement
    private static overflow: string

    // 两种类型的遮罩层显示
    private static showMask() {
        MaskControl.overflow = document.documentElement.style.overflow
        document.documentElement.style.overflow = 'hidden'
        // 如果MaskControl.mask不存在则创建
        if (!MaskControl.mask) {
            MaskControl.mask = document.createElement('div')
            MaskControl.mask.className = 'modal-mask'
            document.body.appendChild(MaskControl.mask)
        }
        MaskControl.mask.style.display='blcok'
    }
    
    private static hideMask(){
        MaskControl.mask.style.display='none'
        document.documentElement.style.overflow=MaskControl.overflow
    }

    show(){
        super.show()
        MaskControl.showMask()
    }

    close(){
        super.close()
        MaskControl.hideMask()
    }

}