// js:javascript;

// 控制台输出语句
// console:控制台;log:日志;
// js编程语言，语句结束分号可有可无;建议添加;
console.log('hello world');

//变量;常量;

//var:variable，变量;
// var：关键字;声明（定义）一个变量,起名为count;
// =:赋值符号;
// 变量的命名规则:不能用中文，不能纯数字;一般都是有意义的英语单词;多个单词,遵循驼峰命名法,首字母小写,其后每个单词的首字母大写;
var count = 0;
console.log(count);
count = 100;
console.log(count);

var studentsNumber = 35;

// 变量不允许重名;

// const：常量;一经赋值，不许改变;
const area = 960;
// area = 1000;

// 数据类型：number 、string 、boolean 、
// number:数字；string:字符串;boolean:布尔;

// 字符串需要放在引号中;js中不区分单双引号;
var name = '小明';

// 逻辑判断; true：真；false:假;
var isMale = true;


// 编程中常用的运算符
//数字：  + - * / %  加 减 乘 除 取余  
//       ++ -- += -= *= /= 
//字符串： + 字符串拼接
//逻辑判断： ==   ===   !=     &&   || ! 
// 等于 恒等于 不等于 且(与) 或 非 
//  ? :  条件运算符;
var str1 = 'hello ';
var str2 = 'world';
var str3 = str1 + str2;
console.log(str3);

var value = 1 + 2 + '123' + 45 + '111';
// 312345111 ;
console.log(value);
// == 等于：转化后相等即可;
// ===恒等于：类型一致,值一致;
console.log(1 == '1'); // true 
console.log(1 === '1'); //false

console.log(1 != 2); // true
// &&：且(与); 都真才为真,否则为假;
console.log(1 > 2 && 1 < 3); //false 
// ||:或;都假才为假，否则为真;
console.log(1 > 2 || 1 < 3); //true 
// !:非（取反）;
console.log(!(1 > 2)); // true

// 1<x<5  错误写法 ;
// 1<x && x<5 正确写法 ;

var num = 1;
//  ++ ：自增1 ; --:自减1 ;
// num++;
// num--; 
// num = num + 2 ;
//  +=：自增n; -=:自减n; *=:自乘n; /=:自除n;
// num += 2 ;
// num -= 3 ;
// num *= 4 ;
num /= 4;
console.log(num);

var aAge = 10;
var bAge = 12;
// ?前面的表达式为真，结果为:前面的，否则结果为:后面的
var result = aAge > bAge ? 'a是兄长' : 'b是兄长';
console.log(result);

// 从参与运算的表达式的数目可以分为如下几类:
// 单目运算符: ++ , -- , ! 
// 双目运算符: + ， - , * , / , && ,|| ....
// 多目运算符: ?: ,



// 数据类型： array(数组);
// 数组中元素都有编号，从0开始,依次类推；这个编号叫做索引(下标);
var nameArray = ['李四', 'lucy', 'lily', '小明'];
console.log(nameArray);
var array = [12, false, '小明', [1, 2]];
console.log(array);

var i = nameArray[2];
console.log(i);
console.log(array[3][0]);


// js 流程控制语句

// 条件语句
/*
if：如果; else：否则;
if(条件){
    条件成立，执行的代码
}else{
    条件不成立，执行的代码
}
 */
var isLogin = true;
if (isLogin == true) {
    console.log('跳转到主页');
} else {
    console.log('跳转到登录页');
}

var age = 56;
// 婴儿期（0～3岁）、幼儿期（3～6岁）、儿童期（6～11、12岁）、少年期（11、12～14、15岁）、青年期（16-28岁，有的认为应该到35岁）、中年期（35-60岁左右）、60—79岁为老年期，80—89岁 为高龄期，90岁以上为长寿期
if (age <= 3) {
    console.log('处于 婴儿期');
} else if (age <= 6) {
    // 3<age<=6
    console.log('处于 幼儿期');
} else if (age <= 12) {
    // 6<age<=12
    console.log('处于 儿童期');
} else if (age <= 15) {
    // 12<age<=15
    console.log('处于 少年');
} else {
    // age>15
    console.log('处于 青年或者中年或者老年');
}

//循环语句
// 
for (var i = 0; i < 10; i++) {
    // document:文档,write:写; 
    // 向html文档中插入内容;插入在html的body中;
    document.write('<p>1111</p>');

    if (i == 6) {
        // break：打断;跳出当前循环;
        break;
    }
}

//1、 倒序输出【0,100】能被三整除的数字
for (var x = 100; x >= 0; x--) {
    if (x % 3 == 0) {
        // document.write：展示到前端页面上
        document.write(x + '<br>');
        console.log(x)
    }
}

for (var x = 99; x >= 0; x -= 3) {
    document.write(x + '<br>');
}

//2、输出 1024 的 所有 因子;
for (var y = 1; y <= 1024; y++) {
    if (1024 % y == 0) {
        console.log(y);
    }
}


//3、 [0,100]累加和;
//  var sum = 0 ;
// sum += 0 ;
// sum +=1 ;
// sum += 2 ；
// ...
// sum += 100 ;
var sum = 0 ;
for(var z = 0 ;z <= 100 ; z++){
    sum += z ;
}
document.write(sum);

//4、 计算20的阶乘;
var total = 1 ;
for (var k = 1 ; k <= 20 ;k++){
    total *= k ;
}
document.write( '<br>' + total);

//5、 获取数组中最大的数字
var numArray = [1,23,-45,56757,-56,56756,213];
// 假设数组中0号元素是最大的,赋值给变量max;
var max = numArray[0];
// for循环，拿出数组中每一个元素arr[i]与max比较；
for(var index = 1 ; index < numArray.length ; index++ ){
    //如果 max<arr[i],就max=arr[i];
    if(max < numArray[index]){
        max = numArray[index];
    }
}
console.log(max);

//6、获取数组中的最小值;


//作业
// 1、计算[0,1000]所有能被5整除的数字的和;
// 2、计算数组中数字的平均值;
// 3、判断一个数字是不是质数;
// 4、统计字符串中某个字符出现的频率;'hello world welcome to China'; 'l' ;
// 5、剔除数组中重复的数字;
// 6、数组元素排序;

var str4 = 'hello';
console.log(str4[0]);

console.log(numArray);
// splice:从数组中删除某些元素
// para1:从哪个元素开始删除
// para2：删除元素的数目;
numArray.splice(2,1);
console.log(numArray);



























