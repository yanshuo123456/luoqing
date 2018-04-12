// 1、 全选 操作
// 监听 全选 的点击事件
$('.all>input').click(function () {
    //其他10复选框 与 全选 状态保持一致
    var isChecked = $(this).prop('checked');
    $('.items>input').prop('checked', isChecked);
})

// 2、监听10个复选框的点击事件
$('.items>input').click(function () {
    // 判断是否 10个 全部选中， 是，全选选中
    // 否则，全选取消；

    // each：每一个(类似for)
    // 遍历jquery对象中每一个标签对象，执行操作函数;
    // 记录选中的数目
    var count = 0 ;
    $('.items>input').each(function () {
        console.log(this);
        var isChecked = $(this).prop('checked');
        if (isChecked == false) {
            // 没选中 ； 取消全选,结束;
            $('.all>input').prop('checked', false);
            return;
        }
        count++;
    })

    // // 判断选中的数目是否是10
    if (count == 10) {
        $('.all>input').prop('checked', true);
    }
    isCheckedAll();

})

function isCheckedAll() {
    if ($('.items>input:checked').length == 10) {
        $('.all>input').prop('checked', true);
    } else {
        $('.all>input').prop('checked', false);
    }
}

// 3、点击反选的操作
$('.all>span').click(function () {
    // 10个选择框取反
    $('.items>input').each(function () {
        var isChecked = $(this).prop('checked');
        $(this).prop('checked', !isChecked);
    })
    isCheckedAll();
})

/**
 * 4个练习中用到的新知识点:
 * 1、时间展示，<10前补0----条件运算符?:
 * 2、清除定时器----clearInterval(id);
 * 3、绑定一次性事件------.one();
 * 4、获取input的值---input.val();
 * 
 * 5、获取标签的索引---$(标签).index();
 * 6、:lt() < ; :gt() >;
 * 
 * 7、jquery链式调用----方法会返回this;
 * 8、.hover()---鼠标悬浮事件;
 * 
 * 9、遍历jquery对象中每一个标签------ .each();
 * 10、获取属性值true/false --- .prop();
 * 11、:checked ;
 * 
 */

