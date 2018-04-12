//时钟中央的圆点
function Dot(){
	Control.call(this)
}

Dot.prototype = Object.create(Control.prototype)
Dot.prototype.constructor = Dot

Dot.prototype.render = function(){
	Control.prototype.render.call(this)
	this.ele.style.borderRadius = '50%' 
	this.ele.style.zIndex = 10
}
Dot.prototype.layout = function(){
	var radius = Control.radius * 0.04
	this.ele.style.width = radius * 2 + 'px'
	this.ele.style.height = radius * 2 + 'px'
	this.ele.style.top = Control.clientHeight / 2 - radius + 'px'
	this.ele.style.left = Control.clientWidth / 2 - radius + 'px'
}
