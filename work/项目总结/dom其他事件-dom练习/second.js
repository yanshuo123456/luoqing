var p = document.querySelector('p');
// 1,3,5。。。。展开
// 2,4,6.....隐藏

// 记录p的点击次数;
var count = 0;
var div = document.querySelector('div');
var angle = document.querySelector('p>span:nth-of-type(2)');
p.onclick = function () {
    count++;
    if (count % 2 == 0) {
        // 隐藏
        // div.style.display = 'none';
        div.style.height = '0';
        angle.className = 'fa fa-angle-up';
    } else {
        // 显示
        // div.style.display = 'block';
        div.style.height = '400px';
        // 修改class，换箭头
        angle.className = 'fa fa-angle-down';
    }
}