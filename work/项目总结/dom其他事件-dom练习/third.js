// 轮播图(carousel)
// 记录显示图片的序号;
var count = 0;
// 数组，保存所有的图片;
var imagesArr = ['images/31.jpg', 'images/32.jpg', 'images/33.jpg', 'images/34.jpg', 'images/35.jpg', 'images/36.jpg', 'images/37.jpg', 'images/38.jpg'];


// 点击右侧按钮，实现切换图片;
var right = document.querySelector('.fa-angle-right');
right.onclick = function () {
    resetLastDot();
    count++;
    // 边界问题;
    if (count == imagesArr.length) count = 0;
    setCurrentImageAndDot();
}

var left = document.querySelector('.fa-angle-left');
left.onclick = function () {
    resetLastDot();
    count--;
    // 边界问题;
    if (count == -1) count = imagesArr.length - 1;
    setCurrentImageAndDot();
}

// 还原上一个点
function resetLastDot() {
    var lastDot = document.querySelector('.page>span:nth-of-type(' + (count + 1) + ')');
    lastDot.style.backgroundColor = 'white';
    lastDot.style.transform = 'scale(1)';
}

// 设置当前显示的图片以及点
function setCurrentImageAndDot() {
    // 切换图片
    var div = document.querySelector('div');
    div.style.backgroundImage = 'url(' + imagesArr[count] + ')';

    // 对应的点 变蓝、变大;
    var span = document.querySelector('.page>span:nth-of-type(' + (count + 1) + ')');
    span.style.backgroundColor = 'skyblue';
    span.style.transform = 'scale(1.5)';
}