// 监听标签上的触发事件;
var div = document.querySelector('div');
// 添加事件监听;
// click：点击
div.onclick = function(){
    console.log('div被点击了');
}
// mousedown:鼠标按下
div.onmousedown = function(){
    console.log('div 鼠标按下');
}
// mouseup:鼠标松开
div.onmouseup = function(){
    console.log('鼠标松开了');
}
// mouseenter:鼠标进入
div.onmouseenter = function(){
    console.log('鼠标进入 div了');
}
// mouseleave:鼠标离开
div.onmouseleave = function(){
    console.log('鼠标离开 div了');
}
// mousemove:鼠标移动
div.onmousemove = function(){
    console.log('鼠标移动');
}
// mouseover:鼠标上方
div.onmouseover = function(){
    console.log('鼠标上方');
}
// mouseout:鼠标出去
div.onmouseout = function(){
    console.log('鼠标出去');
}

//wheel：鼠标滚轮滚动
div.onwheel = function(){
    console.log('鼠标上滚轮滚动');
}
// dblclick:double click双击
div.ondblclick = function(){
    console.log('双击');
}
console.log(div);

// 键盘事件;
// keydown:键按下
window.onkeydown = function(){
    // console.log('键按下了');
}

window.onkeypress = function(){
    // console.log('键 压');
}

window.onkeyup = function(event){
    // console.log('键 松开');

    //判断按键是哪个;

    // event:事件对象，包含了关于事件的各种信息;
    // console.log(event);
    // // 按键的字符
    // console.log(event.key);
    // // 按键的字符代码 （ASCII）;
    // console.log(event.keyCode);
}


//输入框事件;
var input = document.querySelector('input');

input.onfocus = function(){
    console.log('获取焦点');
}
// 输入的时候
input.oninput = function(){
    console.log('输入');
}
//内容变化并且失去焦点
input.onchange = function(){
    console.log('改变');
}
// blur:使...模糊;
input.onblur = function(){
    console.log('失去焦点');
}

// form表单事件
var form = document.querySelector('form');
// submit:提交；默认行为是刷新页面,提交数据;
form.onsubmit = function(event){
    console.log('要提交数据了');
    // 阻止默认行为; prevent:阻止；default:默认
    event.preventDefault();
}
// reset：重置；默认行为是清空数据
form.onreset = function(){
    console.log('要清空数据了');
}




