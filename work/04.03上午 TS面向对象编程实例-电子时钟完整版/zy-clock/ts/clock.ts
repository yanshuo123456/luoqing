// 
class Clock implements Zhiyou.IControl{
    private children: Array<Zhiyou.IControl>
    constructor(){
        this.children = []
    }

    public show(){
        this.render()
        this.children.forEach(v => v.show())
    }
    public render(){
        // 添加样式表
        let style = document.createElement('style')
        document.head.appendChild(style)
        style.sheet.insertRule(`
            *{
                box-sizing: border-box
            }
        `)
        style.sheet.insertRule(`
            @keyframes rotate{
                from{transform: rotate(0);}
                to{transform: rotate(360deg);}
            }
        `)
        let dot = new Zhiyou.Dot()
        let second = new Zhiyou.Second()
        let minute = new Zhiyou.Minute('blue')
        let hour = new Zhiyou.Hour('green')
        
        this.children.push(dot,second,minute,hour)

        for (let i = 0; i < 60; i++) {
            // 如果i是5的倍数，sizeRadio = 0.02
            // 如果i不是5的倍数，sizeRadio = 0
            let sizeRadio = i % 5 == 0 ? 0.02 : 0
            this.children.push(new Zhiyou.Diamond(i,sizeRadio))
        }

        // 窗口大小改变时
        window.onresize = ()=>{
            Zhiyou.Control.windowResized()
            this.layout()
        }
    }
    public layout(){
        console.log('Clock.layout()')
        this.children.forEach(v => v.layout())
    }
}