// 1、查找标签
// $('选择器'):查找标签;返回值是一个jquery对象;
var divs = $('div');
console.log(divs);

// jQuery中特有的选择器

// :first，根据选择器找到所有满足条件的标签，取第一个
// :last,根据选择器找到所有满足条件的标签，取最后一个
var first =  $('div:first');
console.log(first);
// :eq(n):根据选择器找到所有满足条件的标签，取n;
// :even:根据选择器找到所有满足条件的标签,取偶数
// :odd:根据选择器找到所有满足条件的标签，取奇数;
// :gt(n):根据选择器找到所有满足条件的标签，取>n的;
// :lt(n):根据选择器找到所有满足条件的标签，取<n的;

// equal：相等；even:偶数；odd：奇数；
// gt:greater than ,大于；
// lt:less than，小于；

var equal =  $('body>div:eq(2)');
console.log(equal);

// :has():包含什么子标签的父标签，
// has也就是里面有什么...
var  has = $('div:has(div)');
console.log(has);
// :parent:找里面有子标签或者文本的标签;
var parent = $('div:parent');
console.log(parent);
//  :empty:找空标签
var empty = $('div:empty');
console.log(empty);

// :hidden，找到的是display:none的标签
var hidden = $('div:hidden');
console.log(hidden);

// :visible，找到的是可见标签,opacity:0,也认为是可见;
var visible = $('div:visible');
console.log(visible);

// 属性（同css）
// [attribute]:有attribute属性
// [attribute=value]:属性存在，值为value
// [attribute!=value]:属性存在，值不是value
// [attribute^=value]:属性存在，值以value开头
// [attribute$=value]:属性存在，值以value结尾
// [attribute*=value]:属性存在，值包含value
// [attrSel1][attrSel2][attrSelN]:同时满足多个属性选择器
var ele = $('div[id$=name][class=six]');
console.log(ele);


// 子标签（同css）
//A>B:nth-child(n):从A中找第n个子标签,是B，要，否则不要;标签排序号时，不区分标签类型，全部参与;

//A>B:nth-of-type(n):从A中找第n个B这种类型的子标签;标签排序号时，区分标签类型，只对B类型排序号，其他忽略;

var firstChild = $('body>div:first-child');
console.log(firstChild);
var firstOfType = $('body>div:first-of-type');
console.log(firstOfType);


// 表单对象属性

// 找有disabled属性的元素;
var disable = $(':disabled');
console.log(disable);

// 2、关于属性的操作；

// 可以使用标签对象调用原生API操作DOM;
// 也可以使用jquery对象调用jquery方法操作DOM;
console.log($('input'));
console.log($('input')[0]);

// jquery中赋值、取值通常是一个方法;
// .attr(key):取值；获取jquery中第一个标签的属性值;
// .attr(key,value):赋值;jquery中每一个标签均赋值;

// var value = $('input').attr('type');
// console.log(value);
// $('input').attr('type','password');
// // 删除属性值
// $('input').removeAttr('type');

// 类似diabled,checked,selected..使用prop可以返回true、false，便于操作；
var isChecked = $(':checkbox').attr('checked');
console.log(isChecked);
var isChecked2 = $(':checkbox').prop('checked');
console.log(isChecked2);

// class属性的操作
// addClass()：添加class
// removeClass():删除class；
// toggleClass():存在就删除，不存在就添加;

// 3、关于css操作
// .css(name,value);
// .css({
//     name:value,
//     name:value
// })
// $('p').css('color','red');
// $('p').css({
//     'font-size':'40px',
//     backgroundColor:'blue'
// });

// 当需要修改大量的css的时候，一般不会在js中直接添加css，而是添加class，把样式基于这个class在css中实现
// $('p').addClass('red');

// 4、关于标签内容的操作

// 赋值
$('p').html('<big>啊哈哈哈哈</big>');
$('div').text('<a></a>');
$(':text').val('黎明');

// 取值
var html = $('p').html();
var text = $('div').text();
var val = $(':text').val();
console.log(html);
console.log(text);
console.log(val);

// 5、标签的事件操作

// 给所有满足该选择器的标签都添加了click事件
$('div').click(function(){
    console.log('div被点击了');
    // this.style.color = 'green';
    // this：指代标签
    // $(标签对象):可以把标签对象包装成jquery对象;
    $(this).css('color','pink');
    // 获取标签的编号
    var index = $(this).index();
    console.log(index);
})

