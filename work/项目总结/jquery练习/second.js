var titleArr = [
    '1分， 哈哈哈哈',
    '2分 ，换个卡代课教师',
    '3分 ,jjkklsgkdhhgf',
    '4分,发哈科技化工',
    '5分，fhklsjf.规范'
]
// 1、给所有的星星添加点击事件
$('div>div').click(function(){
    //2、<=当前星星的 都变亮;
    // 获取当前星星的索引
    var index = $(this).index();
    $('div>div:lt('+(index+1)+')').css('background-position','0 -28px');
    //3、>当前星星的 都变暗;
    $('div>div:gt('+index+')').css('background-position','0 0');

    // 4、文本描述
    $('div>p').text(titleArr[index]);
})