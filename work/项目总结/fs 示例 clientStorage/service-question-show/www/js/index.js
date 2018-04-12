//发请求，获取数据 /questions get
$.get('/questions',function(res){
    console.log(res);
    const html = template('questions',{data:res});
    $('#container').append(html);

})

// 给未来的标签添加点击事件
$('#container').on('click','.cell',function(){
    console.log('=====');
})


/*
排错步骤：
1）看浏览器控制台，看服务器终端;
    有报错提示，就提着提示改错;
2）第一步无报错提示;
        先看浏览器，代码是否执行;
            比如，监听事件，要去确定回调函数是否执行; 没执行，可能是监听标签选择器写错了，也可能js没导入;
            发请求,要去浏览器网络中，看请求到底发没发出去;服务器到底有没有响应;
            请求没发出去，就是浏览器发请求的代码没执行；
            没响应，就是服务器处理请求的代码没执行;


勤写输出;
勤运行;
*/

// const let var 
// const：常量;
// let，var:变量;
// let：块级作用域变量;在{}中定义，出了{}就销毁了;

// 存储：浏览器端存储         服务端存储
        //存储少量数据       存储大量数据
        //storage,cookie     fs,db

//浏览器端数据存储:
    //storage:
            //localStorage(本地存储), sesstionStorage(会话存储);
    //cookie:

//用户名、密码
// const username = 'lucy';
// const password = '12345678';

//存数据
// localStorage.setItem('username',username);
// localStorage.setItem('password',password);

// 取数据
// const username = localStorage.getItem('username');
// console.log(username);

// 删除数据
// localStorage.removeItem('username');

// 清空数据
// localStorage.clear();

// 不能存储对象，需要转化为字符串再进行存储;
// const obj = {name:'小明',fontSize:'30'};
// localStorage.setItem('user',JSON.stringify(obj));


// sessionStorage与localStorage的API一模一样；
// 不同点：localStorage没有过期时间;sessionStorage是会话结束就清除;
//浏览器端存储只能用于存储少量数据，大概5M左右;


// cookie原生API
// 存
// document.cookie = 'name=lucy';
// document.cookie = 'age=23';
// 取 name=lucy; age=23 
// const cookie = document.cookie;
// console.log(cookie);

// cookie第三方API
// jquery.cookie.js是jquery的一个插件，提供了cookie的读写删操作;

//存;不设置有限期，存储的就是sesstioncookie,
// 浏览器窗口关闭就清除;
// $.cookie('username','lucy');
// $.cookie('password','121212');
// // 设置有效期，持久化cookie;时间单位是天;
// $.cookie('age',23,{expires:7});


// 取一个
// const age = $.cookie('age');
// console.log(age);

// //取所有
// const all = $.cookie();
// console.log(all);

// 删除
// $.removeCookie('age');

// cookie:可以进行持久化存储，也可以进行会话存储;
// 最多只能存储4K;
// cookie会随着请求和响应在浏览器和服务器间传递;
// cookie不要存储敏感数据;

// art-template
// 服务器操作 fs









