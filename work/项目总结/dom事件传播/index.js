var div = document.querySelector('div');

// //给标签添加事件监听的第一种方式
// div.onclick = function () {
//     console.log('点击 div了');
// }

// div.onclick = function () {
//     // console.log('点击 div了2222');
// }


// 给标签添加事件监听的第二种方式
// 在开始标签中添加 onclick="divClick()";
function divClick() {
    console.log('div 被点击了');
}

// 给标签添加事件监听的第三种方式
// para1:事件名称;
// para2:事件回调函数callback;
div.addEventListener('click', divClick);
div.addEventListener('click', function () {
    console.log('div 被点击了');
});

div.addEventListener('click', function () {
    console.log('div 被点击了22222');
});

// addEventListener 可以同时添加多个事件监听
// on事件名:只能添加一个事件监听;

