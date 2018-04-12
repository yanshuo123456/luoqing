// 给art-template添加过滤器;
// 过滤器(filter)：对数据进行过滤操作
// 当服务器返回的数据 与 页面展示的数据 中间有差异的时候,可以使用过滤器过滤数据;
// default：默认；import:进口、导入
template.defaults.imports.dateFormat = function (value) {
    // 20171012
    // 2017年10月12日
    var year = value.substr(0, 4);
    var month = value.substr(4, 2);
    var date = value.substr(6, 2);
    var newStr = year + '年' + month + '月' + date + '日';

    return newStr;
}

template.defaults.imports.numFix = function (value, count) {
    return value > 10000 ? (value / 10000).toFixed(count) + '万' : value;
}






// 发请求，获取数据
// 1000
// 0-29; 30-59;
// offset：偏移量;
// limit：限制一次获取数据数目；每次获取30
$.get('http://open.douyucdn.cn/api/RoomApi/live?offset=0&limit=30', function (response) {
    // console.log(response);

    // art-template使用：
    // 1）获取数据
    // 2）根据数据以及效果图，书写html模板
    // 3）把数据和html模板结合，生成html字符串
    // 4）把html填入容器标签,展示到页面上

    // para1:模板id
    // para2:json数据
    var html = template('video', response);
    $('.container').append(html);
    // console.log(html);
})



//字符串常见操作
var str = 'hello world';
//1、获取字符串的长度
console.log(str.length);
//2、根据索引从字符串中获取一个字符
var character = str.charAt(1);
console.log(character);
// 3、判断字符串是否以某个字符串结尾
var res = str.endsWith('ld');
console.log(res);
//判断字符串是否以某个字符串开头
var res2 = str.startsWith('$');
console.log(res2);
//判断一个字符串是否包含另一个字符串;
var res3 = str.includes('ello');
console.log(res3);

// 4、字符串大小写转化
// 把字符串转化为大写 uppercase大写
var upper = str.toUpperCase();
console.log(upper);
// 把字符串转化为小写 lowercase小写
var lower = upper.toLowerCase();
console.log(lower);

// 5、获取第一个子字符串的索引，不存在返回-1;
var i = str.indexOf('word');
console.log(i);
// 获取最后一个子串的索引，不存在返回-1
var j = str.lastIndexOf('l');
console.log(j);

//6、获取子串
// 获取子串
// para1:from,从哪个字符开始
// para2:length,子串的长度;缺省，表示到结尾;
var sub = str.substr(3, 6);
console.log(sub);

// 获取子串
// para1:start,
// para2:end, 【start,end)
var sub2 = str.substring(3, 6);
console.log(sub2);

//获取子串
// para1:start;
//para2:end; [start,end);
var slice = str.slice(1, 4);
console.log(slice);

// 7、字符串分割
var str2 = '李明|张三|王五';
// 根据分隔符将字符串分为多个部分,返回子串构成的数组;
var names = str2.split('|');
console.log(names);

// 8、字符串裁剪
var str3 = '  hello world!  ';
// 删除字符串开头结尾的空白字符;
var res4 = str3.trim();
console.log(res4);


// Array,Number,Object,Date,Math.....

// //日期常见操作 // 时间戳
// 创建一个日期对象,获取当前时间
var date = new Date();
console.log(date);

// 获取年月日
var year = date.getFullYear();
console.log(year);
// 月份默认从0开始，需要加1 
var month = date.getMonth() + 1;
console.log(month);
var day = date.getDate();
console.log(day);

//获取时分秒
var hours = date.getHours();
console.log(hours);
var minutes = date.getMinutes();
console.log(minutes);
var seconds = date.getSeconds();
console.log(seconds);

// 获取星期
// 0,1,2,3,4,5,6  周日，周一.....
var week = date.getDay();
console.log(week);

// 把日期转化为字符串
var str = date.toString();
console.log(str);

//获取当前时间到时间戳的毫秒数 1 5141 9027 2613
var milliseconds = Date.now();
console.log(milliseconds);

// 类、对象
// 类：对于一类事物的统称;
// 对象：类中一个具体个体;

// 定义一个类;
// 类名：每个单词的首字母均大写;
class People {
    //构造函数:初始化对象;
    constructor(name, age, sex) {
        console.log('构造函数被调用了');
        // this:指的是正在构建的对象;
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    sayHello() {
        console.log('你好，我是' + this.name);
    }
}
// 新建一个对象;
// new:运算符,分配内存空间,创建对象;
// 然后调用构造函数进行对象的初始化;
var p1 = new People('小明', 23, 'male');
console.log(p1);
var p2 = new People('小兰', 22, 'female');
console.log(p2);


// 字面量对象
var p = {
    name: '战三',
    age: 22,
    sex: 'male',
    sayHello: function () {
        console.log('你好,我是' + this.name);
    }
}

/**
 * 今天的知识点：
 * 1、art-template模板
 * script标签中写模板,添加id,type
 * {{}},if-else if-else,each,?:
 * template(id,data)，返回HTML字符串;
 * 
 * 2、art-template 添加过滤器;
 * template.defaults.imports.过滤器名称 = function(value,...){
 *  .....
 *  return newValue;
 * }
 * 
 * 原数据 | 过滤器名称 参数2....
 * 
 * 3、字符串操作
 * str.length;str.charAt();                
 * str.startsWith/endsWith/includes();
 * str.toUppercase/toLowercase();
 * str.indexOf/lastIndexOf();
 * str.substr/substring/slice();
 * str.trim();
 * str.split();
 * 
 * 4、日期操作
 * date.getFullYear/Month/Date();
 * date.getHours/Minutes/Seconds();
 * date.getDay();
 * Date.now();
 */

$.getJSON('https://toutiao.eastday.com/toutiao_h5/NextJP?htps=1&type=toutiao&startkey=9223370522665369160%7C1207%7C%7C%7C%7C%7C&newsnum=20&zdnews=&qid=null&readhistory=&idx=40&recgid=15141921352896860&pgnum=3&os=iOS+10_2&_=1514192178439&jsonpcallback=?',
    function (res) {
        console.log(res);



        // // console.log('---====');
        // var data = res.split('(')[1].split(')')[0];
        // // 把json格式的字符串转化为JSON对象;
        // // JSON:javascript object notation js对象表示法
        // // parse:解析
        // var obj = JSON.parse(data);
        // console.log(obj);

    })

