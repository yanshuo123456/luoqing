// 全局变量:在全局范围内声明的变量;任意地方均可使用;
var name = 'lucy';
// 1、【0,1000】被5整除的数的和;

// var 关键字可以一次声明多个变量,中间用逗号隔开;
// 当if大括号中只有一句代码,大括号可以省略不写；
for (var sum = 0, i = 0; i <= 1000; i += 5) {
    sum += i;
}
console.log(sum);

// 2、数组数字的平均值

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

// 函数：计算两数和;
function calcSum(a, b) {
    // 局部变量:函数内部声明的变量;仅在函数内部使用（函数作用域）;出了函数，该变量不可使用;
    var total = a + b;
    console.log(total);
    // return:返回;
    // 返回值:反馈给函数外面的一个值,也就是函数调用的结果;
    // return意味着方法的结束，其后的代码不会被执行;
    return total;
    // console.log('=======');
}
var sum12 = calcSum(12, 23);
var sum34 = calcSum(11, 11);

var sum1234 = calcSum(sum12, sum34);
console.log('sum1234=' + sum1234);

//函数参数的数目 >=0;
//函数返回值数目 0,1;

// 3、判断一个数是不是质数;
var num = 1011;
var a = 0;
for (var i = 2; i <= num - 1; i++) {
    if (num % i == 0) {
        a++;
    }
}

if (a == 0) {
    console.log(num + '是质数');
} else {
    console.log(num + '不是质数');
}

// 4、统计字符串中某个字符出现的频率;
var str = 'hello world';
var lCount = 0;
for (var i = 0; i < str.length; i++) {
    if (str[i] == 'l') {
        lCount++;
    }
}
console.log('l出现的数目是:' + lCount);

//5、剔除数组中重复数据;
var array = [1, 2, 4, 54, 6, 7, 2, 4, 4, 6, 7, 1, 1, 2, 3, 56, 7];

//把第n个数字和后面每一个数字比较，如果有重复的，就把重复的数字删除;
for (var j = 0; j < array.length - 1; j++) {
    var first = array[j];
    for (var i = j+1; i < array.length; i++) {
        if (first == array[i]) {
            // 删除array[i];
            array.splice(i, 1);
            // 删除元素之后，后续元素索引都会减少1;
            i--;
        }
    }
}
console.log(array);






