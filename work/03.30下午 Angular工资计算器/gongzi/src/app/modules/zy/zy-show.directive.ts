// zy-show.directive.ts
import {Directive,ElementRef,Input} from '@angular/core'

@Directive({
    selector: '[zyShow]'
})

export class ZyShowDirective{
    constructor(private el:ElementRef){}

    @Input()
    set zyShow(isShow:boolean){
        this.el.nativeElement.style.display = isShow ? '' : 'none'
    }
}