//控件类，页面所有可见元素都从这里继承
//提供了创建元素功能（render方法）和布局功能（layout方法）
function Control(){
	this.render()
	this.layout()
}
//填充颜色
Control.prototype.fillColor = 'black'
//添加到页面上
Control.prototype.render = function(){
	this.ele = document.createElement('div')
	this.ele.style.backgroundColor = this.fillColor
	this.ele.style.position = 'absolute'
	document.body.appendChild(this.ele)
}
//调整大小及在页面上的位置
Control.prototype.layout = function(){}


//添加窗口工作区宽高数据到Control，以便子对象使用
Control.windowResized = function(){
	Control.clientWidth = document.documentElement.clientWidth
	Control.clientHeight = document.documentElement.clientHeight
	Control.radius = Math.min(Control.clientWidth, Control.clientHeight) / 2
	console.log('窗口工作区宽高：%d, %d', Control.clientWidth, Control.clientHeight)
}
Control.windowResized()

