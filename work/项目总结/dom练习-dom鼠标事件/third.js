// 监听娱乐span上的mouseover事件

// 记录已经点过的上一次span
var lastSpan = document.querySelector('p>span:nth-of-type(1)');
var lastSection = document.querySelector('div>section:nth-of-type(1)');

for (var i = 1; i <= 4; i++) {
    var span = document.querySelector('p>span:nth-of-type('+i+')');
    span.onmouseover = function () {
        console.log('span mouseover');
        // 上次选中的span文本颜色改为黑色;
        lastSpan.style.color = 'black';

        // 自己文本颜色改为红色;
        // this:在事件的触发函数中，指的是当前标签;
        this.style.color = 'red';

        // 隐藏上一次显示的section;
        lastSection.style.display = 'none';

        // 显示对应的section;
        // 获取span的编号data-index;
        var index = this.getAttribute('data-index');
        var section = document.querySelector('div>section:nth-of-type('+index+')');
        
        section.style.display = 'block';

        // 修改lastSpan,lastSection;
        lastSpan = this;
        lastSection = section;
    }
}
console.log('for循环结束了');






// var span1 = document.querySelector('p>span:nth-of-type(1)');
// span1.onmouseover = function(){
//     // 上次选中的span文本颜色改为黑色;
//     lastSpan.style.color = 'black';

//     // 自己文本颜色改为红色;
//     // this:在事件的触发函数中，指的是当前标签;
//     this.style.color = 'red';


//     // 隐藏上一次显示的section;
//     lastSection.style.display = 'none';

//     // 显示对应的section;
//     var section2 = document.querySelector('div>section:nth-of-type(1)');
//     section2.style.display = 'block';

//     // 修改lastSpan,lastSection;
//     lastSpan = this;
//     lastSection = section2;
// }


// var span3 = document.querySelector('p>span:nth-of-type(3)');
// span3.onmouseover = function(){
//     // 上次选中的span文本颜色改为黑色;
//     lastSpan.style.color = 'black';

//     // 自己文本颜色改为红色;
//     // this:在事件的触发函数中，指的是当前标签;
//     this.style.color = 'red';


//     // 隐藏上一次显示的section;
//     lastSection.style.display = 'none';

//     // 显示对应的section;
//     var section2 = document.querySelector('div>section:nth-of-type(3)');
//     section2.style.display = 'block';

//     // 修改lastSpan,lastSection;
//     lastSpan = this;
//     lastSection = section2;
// }


// var span4 = document.querySelector('p>span:nth-of-type(4)');
// span4.onmouseover = function(){
//     // 上次选中的span文本颜色改为黑色;
//     lastSpan.style.color = 'black';

//     // 自己文本颜色改为红色;
//     // this:在事件的触发函数中，指的是当前标签;
//     this.style.color = 'red';


//     // 隐藏上一次显示的section;
//     lastSection.style.display = 'none';

//     // 显示对应的section;
//     var section2 = document.querySelector('div>section:nth-of-type(4)');
//     section2.style.display = 'block';

//     // 修改lastSpan,lastSection;
//     lastSpan = this;
//     lastSection = section2;
// }



