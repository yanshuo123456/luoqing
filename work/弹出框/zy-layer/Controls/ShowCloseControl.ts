// ShowCloseControl.ts
import {Control} from './Control'

export interface IClosable{
    // 是否处于显示状态
    isShowing(): boolean

    show(): void

    close(): void
}

export abstract class ShowCloseControl extends Control implements IClosable {
    private _isShowing = false
    // constructor(parameters) {}

    isShowing():boolean{
        return this._isShowing
    }
    show(){
        this._isShowing = true
    }
    close(){
        this._isShowing = false
    }
}