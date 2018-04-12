// MaskControl.ts
import {ShowCloseControl} from './ShowCloseControl'

export abstract class MaskControl extends ShowCloseControl {
    // 静态私有成员
    private static mask: HTMLDivElement
    private static overflow: string
    // showMask()：显示遮罩层
    protected static showMask(){
        MaskControl.overflow = document.documentElement.style.overflow
        document.documentElement.style.overflow = 'hidden'

        if (!MaskControl.mask) {
            MaskControl.mask = document.createElement('div')
            MaskControl.mask.className = 'modal-mask'
            document.body.appendChild(MaskControl.mask)
        }
        MaskControl.mask.style.display = 'block'
    }

    // hideMask()：隐藏遮罩层
    protected static hideMask(){
        MaskControl.mask.style.display = 'none'
        document.documentElement.style.overflow = MaskControl.overflow
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