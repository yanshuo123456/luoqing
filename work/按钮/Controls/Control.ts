
export type Action = () => void

export abstract class Control {
    protected ele: HTMLDivElement

    abstract render(): void
}