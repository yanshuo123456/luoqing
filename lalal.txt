/**
 * 1、html\css
 * 标签{
 * 行标签：(span、a、span、strong)不独占一行，不可以修改宽高
 * 块标签：(p、nav、h1~h6)独占一行
 * 行内块标签：不独占一行，可以设宽高
 * diaplay:inline,inline-block;
 * css布局方式:默认流式布局
 *            定位布局(绝对、相对、固定)
 *            弹性布局:flex;
 *            (justify-content)主轴方向的对齐方式(space-around,space-between,flex-start(从起点开始布局),flex-end(从结尾开始布局)，上对齐，下对齐，中心线对齐)
 *            align-items:交叉轴方向对齐;flex-wrap;
 *            浮动布局:float:left right(加空标签，清浮动)
 *            响应式布局:媒体查询;@media;
 * 
 * css选择器:(! important)>id>class>标签 优先级关系
 * css sprite 图片精灵:优缺点:改一个图其他的都要改、减少请求次数;
 * css 动画  过渡效果:transation:all 2s linear
 *           关键帧动画:animation使用动画;@keyframes定义动画;
 * css 图形变化:
 *              transform:scale(缩放) rotate(旋转) translate(平移) skew(倾斜)
 * css常用单位: px % em rem vw vh 
 * css盒模型:margin/border/padding/content
 *           box-sizing:border-box/content-box;(边框加内边距加内容)
 * css动画第三方: animate.css font-awesome(字体图标库) 
 * }
 * 
 *
 * 2、js
 * Number\String\Boolean\function\undefined\Object\Array\Date\Math\RegexJSON
 * Number:passint(换成整数) passfloat(化成小数)
 * 
 * parselent();parseFloat();
 * num.toFixed();
 * 字符串:  长度拼接:length;+;
 *          子串操作:str.substr()/substring()/slice();
 *          包含操作:str.indexOf/startsWith()/endsWith()/includes();
 *          str.split();
 *          裁剪:str.trim();
 * 布尔: 逻辑判断
 *       && || == != === !==(恒不等于)
 * 
 * 数组:
 *      length:arr[i];
 *      arr.push()/unshift();
 *      arr.pop()/shift()/splice();
 *      arr.concat();arr.sort();arr.map();arr.reduce();arr.forEach();arr.filter();arr.splice();
 * 
 * 日期:new Date()
 *      date.getFullYear()/getMonth()/getDate();
 *      date.getHours()/getminutes()/getSeconds();
 *      date.getDay();Date.now();
 * 
 * 数学:
 *    Math.random();随机数(获取一个0-1的随机数，包含1 不包含0)
 *    Math.ceil()/floor();向上(下)取整;
 *    Math.round();四舍五入;
 *    Math.abs();四舍五入;
 *    Math.abs();绝对值;
 *    Math.pow();次方运算；
 *    Math.max();最大值;
 *    Mat.min();最小值;
 * 
 * JSON:
 *      JSON.parse();
 *      JSON.stringify();
 * 流程控制语句:if-else;for;
 *        break:跳出当前循环;
 * 
 * 循环例子

let i=10;
while(i>0){
    console.log(i);
    i--;
}

let j = -10;
do {
    console.log(j);
    j--
} while (j > 0);
do-whlie,while:循环,类似for；
区别:形式上;功能上;
while:先判断在执行,所以条件不满足则一次都不执行;
do-while:先执行后判断,所以至少执行一次;
 * 
 * 
 * 定义类:创建对象；??
 * class Car {
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
    }
    description(){
        console.log('---')
    }
}
 *
 * 3、DOM操作原生API(偶尔会使用,不想使用就用jquery)
 * 查找标签:querySelector()/querySelectorAll();
 * 提取标签内容:innerHtml,innerText,value;
 * 添加标签:appenChild();
 * 删除标签removeChild();;
 * 创建标签:creatElement();
 * 属性操作:setAttribute()/getAttribute();
 * css操作:el.style.cssName;
 * class操作:className,classList;
 * DOM是树形结构.(沿着这棵树能够找到的标签都可以操作)
 * 
 * 4、DOM事件
 * 鼠标事件:click\mouseover\mouseenter\mouseleave\mousedown\mouseup\wheel
 * 键盘事件:keydown\keypress\keyup
 * form事件:submit\focus\input\change\reset\blur\
 * 滚动事件:scroll
 * 页面加载事件:load:html页面以及引入的所有资源加载完成触发; 
 *             DOMContentLoaded:html页面加载解析完成触发;
 *             (两者同时监听的话，先触发第二个)
 * 窗口大小变化事件:resize;(window.onresize())
 * 
 * 事件监听的两种方式：on,addEventListener;(后者可以重复写多个)
 * 事件传播过程:捕获阶段、冒泡阶段;
 * 事件的默认行为:阻止默认行为;(event.preventDefault())
 * 
 * 
 * 5、jquery操作
 * 修改标签
 * $('选择器').html()/text()/val();
 * 
 * $('选择器').attr()/prop();
 * $('选择器').css();
 * $('选择器').addClass()/removeClass();
 * $('选择器').append()...;
 * $('选择器').parent()/siblings()...;
 * $('选择器').width()/height()/innerHeight()/innerWidth()/outerWidth()/outerHeight();
 * $('选择器').offset()/position();
 * jquery事件操作
 * $('选择器').eventname(function(){});
 * $('选择器').on('eventname',function(){});
 * $('选择器').on('eventname','子选择器',function(){});
 * $('选择器').one('eventname',function(){});
 * 解除事件绑定
 * $('选择器').off('eventname',要解绑定函数的名字);缺省第二个参数，就click的所有函数全部解除绑定；
 * 
 * jquery动画操作
 * $('选择器').animate();
 * $('选择器').delay();
 * $('选择器').show()/hide();
 * 动画停止
 * $('选择器').finish()/stop();
 * 
 * js动画第三方 velocity.js;
 * 
 * jquery a jax 操作
 * $.get()/post();
 * $.ajax();请求的通用写法;
 * 
 * 
 * 6、art-template 视图模板
 * 1)浏览器端模板
 * <script id='templated' type='text/html'>
 * {{变量 | 过滤器名称}} 
 * {{if}} {{/if}} {{each arr item}}{{/each}} {{表达式? '' : '' }}
 * let html=template('id',jsonData) (jsonData,例子=>{data:res})
 * 2)定义过滤器
 * template.defaults.imports.过滤器名称=function(oldValue){return newValue}
 * 
 * 7、NodeJs基本操作
 * http、url、querystring:{ 创建服务器:createServer()  
 *        监听request事件:server.on('request',('req,res')=>{}) 
 *        监听端口:server.listen(3000) 
 *        get请求在数据url中,进行url.parse就可以得到数据对象；
 *        post请求数据在请求体中,需要监听request的data事件和end事件,才能获取完整的          数据，然后进行querystring.parse;}
 * fs:writeFile/readFile/creatReadStream();
 * 
 * 8、浏览器端存储
 * localStorage:没有过期时间，不删除就一直在(长时间存储)
 * sessionStroage:会话窗口关闭之后数据就没了(临时存储)
 * cookie:(既可以持久化也可以临时存储):jquery.cookie.js
 * 
 * 9、bootstrap
 * 响应式前端框架:xs/sm/md/lg;
 * 栅格系统:{
 * 1)要有一个容器: .container/.container-fluid;
 * 2)行: .row
 * 3)一行分为12列;
 * }
 * 
 * 10、less
 * css的预处理语言
 * 增加了变量、函数、mixin、extend、@import、when、支持条件语句ahen,支持循环操作、迭代;
 * 
 * 11、git
 * git init 
 * git add 添加文件
 * git commit -m '说明'
 * git log 查看提交命令历史
 * git reflog 查看命令历史
 * git ststus 查看工作状态
 * rm filename删除工作区文件 
 * git rm filename 删除仓库文件
 * git reset --hard commitid 回退到过去的某个版本 
 * git checkout --filename 用仓库里面的文件覆盖本地文件
 * 
 * git clone 地址 第一次获取数据
 * git push origin master 推送内容
 * git pull 从远端拉取内容 
 * 
 * 
 * 
 * DOM:document object model  文档对象模型()
 * BOM:browser object model  文档对象模型() 
 * 
 * /





