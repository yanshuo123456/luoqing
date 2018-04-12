// 1、 计算20的阶乘;(1*2*3*4....*20)
var total = 1;
for (var k = 1; k <= 20; k++) {
    total *= k;
    console.log('<br>' + total)
}
document.write('<br>' + total);

//2、 获取数组中最大的数字
var numArray = [1, 23, -45, 56757, -56, 56756, 213];
// 假设数组中0号元素是最大的,赋值给变量max;
var max = numArray[0];
// for循环，拿出数组中每一个元素arr[i]与max比较；
for (var index = 1; index < numArray.length; index++) {
    //如果 max<arr[i],就max=arr[i];
    if (max < numArray[index]) {
        max = numArray[index];
    }
}
console.log(max);

// 3、
var numArray = [1, 23, -45, 56757, -56, 56756, 213];
numArray.splice(2, 1);//从第2个开始删除,删两个
console.log(numArray)


// 4、
// 数组数字的平均值
// total：总计 
// 函数(方法)function:将实现某个具体功能的代码片段进行封装; 优点：实现代码重用,减少代码冗余;
// 需要调用函数，才会执行函数中的代码;
// 参数(parameter,argument):函数执行的时候，需要传入的数据;
function calcAverage(numArray) {
    var total = 0;
    for (var i = 0; i < numArray.length; i++) {
        total += numArray[i];
    }
    var average = total / numArray.length;
    console.log(total);
    console.log(average);
}

// 调用函数;
calcAverage([1, 2, 3, 4, 5, 6, 7]);
calcAverage([1, 1, 1, 1, 1]);

// 5.判断x是否为质数
var x = 1012;
var a = 0;
for (var i = 2; i < x - 1; i++) {
    if (x % i == 0) {
        a++
    }
}
if (a == 0) {
    console.log(x + '是质数')
} else {
    console.log(x + '不是质数')
}

// 6、删除数组中重复的数字元素
var num = [1, 5, 33, 5, 88, 5, 4, 6, 44545, 45, 544]
for (i = 0; i < num.length - 1; i++) {
    var first = num[i];
    for (j = i + 1; j < num.length; j++) {
        if (first == num[j]) {
            num.splice(j, 1);
            i--;
        }
    }

}
console.log(num)

// 7、统计字符串中某个字符出现的频率;
var str = 'laozizuishuai';
var Icount = 0;
for (i = 0; i < str.length; i++) {
    if (str[i] == 'i') {
        Icount++
    }
}
console.log(Icount)


// 8、记住下方的步骤
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



// 9、
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