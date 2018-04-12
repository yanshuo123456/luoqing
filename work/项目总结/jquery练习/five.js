// innerWidth/Height:窗口可以布局网页的部分的宽/高
console.log(window.innerWidth);
console.log(window.innerHeight);
// outerWidth/Height:窗口总宽/高
console.log(window.outerWidth);
console.log(window.outerHeight)

// window:浏览器窗口；screen:显示屏
// screenX/Y:浏览器窗口左上角与显示屏左上角的x/y方向距离;
console.log(window.screenX);
console.log(window.screenY);

//screenLeft/Top:浏览器窗口左边界(上边界)与显示屏左边界(上边界)的距离;----同上（FF不支持）; 
console.log(window.screenLeft);
console.log(window.screenTop);

var div = document.querySelector('body>div');

// client:顾客,可视区域
// offset:偏移量;
// scroll：滚动;

// clientWidth/clientHeight:标签的宽/高
// 内边距+内容;
console.log(div.clientWidth);
console.log(div.clientHeight);

// offsetWidth/Height:标签的宽/高
// 边框+内边距+内容;
console.log(div.offsetWidth);
console.log(div.offsetHeight);

//scrollWidth/Height: 标签的宽/高;
// 内容产生滚动时,内容+内边距的真实宽/高(内边距会被滚动条覆盖一部分)
console.log(div.scrollWidth);
console.log(div.scrollHeight);

// clientLeft/Top:左(上)边框的值;
console.log(div.clientLeft);
console.log(div.clientTop);

// offsetLeft/Top:标签左边界(上边界) 与 浏览器窗口左边界(上边界)的距离;
console.log(div.offsetLeft);
console.log(div.offsetTop);

//scrollLeft/Top:向右(下)滚动的距离;
console.log(div.scrollLeft);
console.log(div.scrollTop);

console.log(div);

// 鼠标移动；
div.onmousemove = function(event){
    //光标位置
    console.log(event);
    // event.clientX/Y:光标与浏览器窗口可视区域的X/Y方向的距离
    console.log(event.clientX);
    console.log(event.clientY);
    // pageX;pageY
    // layerX;layerY
    // x/y;
    // offsetX;offsetY；
}

// $('div').scroll(function(){
//     console.log('滚动....');
// })
// div.onscroll = function () {
//     console.log('----');
//     console.log(div.scrollLeft);
//     console.log(div.scrollTop);
// }




