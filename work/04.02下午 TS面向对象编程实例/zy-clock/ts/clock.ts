// 
class Clock implements Zhiyou.IControl {
    private children: Array<Zhiyou.IControl>
    constructor() {
        this.children = []
    }

    public show() {
        console.log('Clock.show()')
        this.render()
        this.children.forEach(v => v.show())
    }
    public render() {
        console.log('Clock.render()')
        let dot = new Zhiyou.Dot()
        let second = new Zhiyou.Second()

        this.children.push(dot, second)

        // 窗口大小改变时
        window.onresize = () => {
            Zhiyou.Control.windowResized()
            this.layout()
        }
    }
    public layout() {
        console.log('Clock.layout()')
        this.children.forEach(v => v.layout())
    }
}