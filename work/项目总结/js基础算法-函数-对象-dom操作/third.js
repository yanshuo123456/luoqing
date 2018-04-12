//1、 查找标签;
console.log(document);
// document:文档;指的是整个html文件对象;
// get:获取；element:元素、标签；by：通过...
// 根据id获取标签;
var ele = document.getElementById('container');
console.log(ele);
// 根据classname找标签;
var ele2 = document.getElementsByClassName('left');
console.log(ele2);
//根据标签名找标签; 
var ele3 = document.getElementsByTagName('p');
console.log(ele3);

// query:查询；selector:选择器;
// 根据选择器找标签,只能找到满足选择器的第一个标签
var ele4 = document.querySelector('p');
console.log(ele4);

// 根据选择器找到满足选择器的所有标签;
var ele5 = document.querySelectorAll('p');
console.log(ele5);

// 2、操作标签内容;
//inner：...的里面;

// 获取标签的内容;
console.log(ele4.innerHTML);
console.log(ele4.innerText);
// 修改标签的内容;
ele4.innerHTML = '修改后的p标签,<a href="http://www.baidu.com">百度</a>';
// ele4.innerText = '修改后的p标签,<a href="http://www.baidu.com">百度</a>';

// 关于input的操作

// 根据name属性找标签;
var input = document.getElementsByName('username')[0];
console.log(input);
// 给input填值;
input.value = 'hahaha';
// 获取input的值;
console.log(input.value);

// 3、修改标签样式 css;
ele4.style.fontSize = '40px';
ele4.style.border = '1px solid red';

// 4、标签属性操作
// 获取标签属性 attribute:属性;
console.log(input.getAttribute('name'));
// 设置属性值;
input.setAttribute('name','nickname');

// 
var span = document.querySelector('span');
//classList:以类数组的方式获取所有的class;
console.log(span.classList);
// 添加class;
span.classList.add('animated');
// 删除一个class;
span.classList.remove('fa');


//5、创建标签，插入某个位置;
// create:创建;

// 创建一个标签
var sp = document.createElement('span');
sp.innerHTML = '这是一个span';
sp.style.color = 'pink';
// 添加标签
// append:扩展、追加；child:儿子;
ele4.appendChild(sp);




