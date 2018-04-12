// 1、添加点击事件
$('body>div>img').click(function () {
    // 2、图片向左平移
    $(this).css({
        transform: 'translate(-100%,0)',
        transition: 'transform 1s'
    })
    // 3、详情向右移动
    $('.detail').css({
        left: '0',
        transition: 'left 1s 1s'
    })
});



// 1、close 鼠标悬浮效果
// para1:function,鼠标进入的操作
// para2:function，鼠标离开的操作
$('body>div>div>div:eq(2)>span').hover(function () {
    $(this).css({
        transform: 'rotate(180deg)'
    })
}, function () {
    $(this).css({
        transform: 'rotate(0deg)'
    })
})




// $('body>div>div>div:eq(2)>span').mouseover(function(){
//     $(this).css({
//         transform:'rotate(180deg)'
//     })
// })
// .mouseout(function(){
//     $(this).css({
//         transform:'rotate(0deg)'
//     })
// })

// jquery链式调用是怎么实现的？？
//链式调用: 首先执行第一个方法，然后拿执行结果也就是第一个方法的返回值调用第二个方法...;
// 必须保证 第一个方法有返回值,这个返回值对象有第二个方法才行;

// jquery中每一个方法都会返回当前jquery对象，所以支持链式调用;
var stu = {
    name: '小明',
    age: 21,
    play: function () {
        console.log('我在打篮球');
        return this;
    },
    study: function () {
        console.log('接下来，我要去写代码了');
    }
}

//stu.play().study();
var result = stu.play();
result.study();


// 3、点击close的操作
$('body>div>div>div:eq(2)>span').click(function () {
    // 详情信息 left:-100%;
    $('.detail').css({
        left: '-100%',
        transition: 'left 1s'
    })

    // 图片出现
    $('body>div>img').css({
        transform: 'translate(0,0)',
        transition: 'transform 1s 1s'
    })
})


var MyJQ = function () {
}
MyJQ.prototype = {
    css: function () {
        console.log("设置css样式");
        return this;
    },
    show: function () {
        console.log("将元素显示");
        return this;
    },
    hide: function () {
        console.log("将元素隐藏");
    }
};
var myjq = new MyJQ();
myjq.css().css().show().hide();