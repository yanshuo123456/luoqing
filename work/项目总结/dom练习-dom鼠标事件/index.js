/**
 * div
 *    img
 *    p
 *    p
 *      span
 *      span
 */

// 1、获取容器标签;
var container = document.getElementById('container');
// 240*5 + 10*5 + 10*5 = 1300
container.style.width = '1300px';
container.style.margin = '0 auto';
container.style.backgroundColor = '#f5f5f5';

var dataArray =[
    {
        intro:'[热销]爱果乐学习桌儿童书桌可升降学习桌椅套装学生写字桌小孩课桌',
        price:2199.0,
        sale:'4990人已买',
        image:'images/table.jpg'
    },
    {
        intro:'[热销]苏泊尔电火火锅锅家用多功能电热煮锅宿舍烧烤炒锅',
        price:399.0,
        sale:'14990人已买',
        image:'images/span.jpg'
    },
    {
        intro:'[热销]Haier/海尔 EC6002-MC3电热水器家用60升速热储水式壁挂式',
        price:3199.0,
        sale:'190人已买',
        image:'images/3.jpg'
    },
    {
        intro:'[热销]【骏德】澳洲家庭儿童牛排套餐团购10片单片新鲜进口牛',
        price:108.0,
        sale:'90人已买',
        image:'images/4.jpg'
    },
    {
        intro:'[热销]爱果乐学习桌儿童书桌可升降学习桌椅套装学生写字桌小孩课桌',
        price:2199.0,
        sale:'4990人已买',
        image:'images/table.jpg'
    },
    {
        intro:'[热销]爱果乐学习桌儿童书桌可升降学习桌椅套装学生写字桌小孩课桌',
        price:2199.0,
        sale:'4990人已买',
        image:'images/table.jpg'
    },
    {
        intro:'[热销]爱果乐学习桌儿童书桌可升降学习桌椅套装学生写字桌小孩课桌',
        price:2199.0,
        sale:'4990人已买',
        image:'images/table.jpg'
    },
    {
        intro:'[热销]爱果乐学习桌儿童书桌可升降学习桌椅套装学生写字桌小孩课桌',
        price:2199.0,
        sale:'4990人已买',
        image:'images/table.jpg'
    },
    {
        intro:'[热销]爱果乐学习桌儿童书桌可升降学习桌椅套装学生写字桌小孩课桌',
        price:2199.0,
        sale:'4990人已买',
        image:'images/table.jpg'
    },
    {
        intro:'[热销]苏泊尔电火火锅锅家用多功能电热煮锅宿舍烧烤炒锅',
        price:399.0,
        sale:'14990人已买',
        image:'images/span.jpg'
    }
]



for (var i = 0; i < 10; i++) {
    //2、向容器中添加div;
    // 2.1 创建一个div
    var cell = document.createElement('div');
    // 2.2 添加到容器container中
    container.appendChild(cell);
    // 2.3设置cell的样式
    cell.style.width = '240px';
    cell.style.cssFloat = 'left';
    cell.style.margin = '10px';
    cell.style.backgroundColor = 'white';

    // 3、向cell中添加子标签

    var img = document.createElement('img');
    cell.appendChild(img);
    // img.setAttribute('src','images/1.jpg');
    // 设置img的src属性
    img.src = dataArray[i].image;
    img.style.width = '100%';

    var introP = document.createElement('p');
    cell.appendChild(introP);
    introP.innerText = dataArray[i].intro;
    introP.style.fontSize = '14px';
    introP.style.padding = '0 10px';

    var priceSaleP = document.createElement('p');
    cell.appendChild(priceSaleP);
    priceSaleP.style.padding = '0 10px';

    var priceSpan = document.createElement('span');
    priceSaleP.appendChild(priceSpan);
    priceSpan.innerText = dataArray[i].price;
    priceSpan.style.color = 'red';
    priceSpan.style.fontSize = '25px';

    var saleSpan = document.createElement('span');
    priceSaleP.appendChild(saleSpan);
    saleSpan.innerText = dataArray[i].sale;
    saleSpan.style.color = 'gray';
    saleSpan.style.fontSize = '14px';
    saleSpan.style.cssFloat = 'right';
    saleSpan.style.paddingTop = '5px';
}

