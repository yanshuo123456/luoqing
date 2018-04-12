var body = document.body;
body.addEventListener('click',function(){
    console.log('body 被点击了 捕获');
},true);
body.addEventListener('click',function(){
    console.log('body 被点击了 冒泡');
},false);



var div = document.querySelector('body>div');
div.addEventListener('click',function(){
    console.log('div 被点击了 捕获');
},true);
div.addEventListener('click',function(){
    console.log('div 被点击了 冒泡');
},false);

var div2 = document.querySelector('body>div>div');
div2.addEventListener('click',function(){
    console.log('div2 被点击了 捕获');
},true);
div2.addEventListener('click',function(){
    console.log('div2 被点击了 冒泡');
},false);

var div3 = document.querySelector('body>div>div>div');
div3.addEventListener('click',function(){
    console.log('div3 被点击了 捕获');
},true);
div3.addEventListener('click',function(){
    console.log('div3 被点击了 冒泡');
},false);

// 事件的传播过程:
// 捕获阶段(挖洞):最不精准的标签----->最精准的标签;
// 冒泡阶段:最精准的标签----->最不精准的标签;

// 一般监听的是哪个阶段的事件呢? 冒泡;
div2.onclick = function(){
    console.log('div2 被点击了 ');
}

// 设置定时器； interval:一段时间、时间间隔
// 每隔一定的时间做什么事情;时间单位是毫秒ms;

var count = 0 ;
setInterval(function(){
    console.log('-----');
    count ++ ;
    if(count == 6) count = 0 ;
    // div.style.baima = ''
 
},1000);

// timeout:超时;
// 设置延迟一段时间做什么;
setTimeout(function(){
    console.log('======');
},10000);

/**
 *  html 
 *  css样式 选择器 页面布局
 *  js基本语法
 *  DOM操作、DOM事件;
 */ 



