// 引入control.ts
import { Control } from './Control'

export interface IClosable {
    isShowing(): boolean

    show(): void

    close(): void
}

export abstract class ShowCloseControl extends Control implements IClosable {
    private _isShowing = false

    isShowing(): boolean {
        return this._isShowing
    }

    show() {
        this._isShowing = true
    }
    close() {
        this._isShowing = false
    }

}