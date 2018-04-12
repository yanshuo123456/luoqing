// 数组常见操作
const arr = [1,12,113,4,5,1];
// 1、判断一个变量是不是数组;
// 返回值true:是；false:不是
// console.log(Array.isArray(arr));
//instanceof:判断某个变量是不是某个类的一个实例(对象);
// console.log(arr instanceof Array);

// 2、获取数组的长度
// console.log(arr.length);

// 3、从数组中获取一个元素
// console.log(arr[3]);

//4、向数组中添加元素

// push:推；向数组结尾添加一个元素
arr.push(100);

// unshift:不移动；向数组的开头插入一个元素;
arr.unshift(-100);

// 5、从数组中删除元素

//pop:出去; 从数组结尾删除一个元素;
arr.pop();
// shift:移动；从数组开头删除一个元素;
arr.shift();
// console.log(arr);

// 6、从数组中删除一些元素，并添加一些元素
// console.log(arr);

// para1:start；从哪个开始；
// para2:deleteCount；删除几个;
// para3...：在删除的位置插入元素;
arr.splice(0,0,200,300,4000);
// console.log(arr);

// 7、判断数组中是否包含某个元素

// 返回元素的索引，不存在返回-1；
const index = arr.indexOf(31);
// console.log(index);

// 数组中最后一个相同元素的索引;
const lastIndex = arr.lastIndexOf(1);
// console.log(lastIndex);

//8、获取一个子数组
// para1:start;
// para2:end; 【start,end);
const subArr = arr.slice(1,3);
console.log(subArr);

// 9、数组拼接
// concat:拼接、连接，合并

// 数组拼接，返回一个新数组，原数组不变；
const concatArr = arr.concat([12,14]);
console.log(concatArr);
console.log(arr);

// 10、数组中元素用分隔符连接，得到一个字符串；
const value = arr.join('|');
console.log(value);
console.log(value.split('|'));
console.log(arr);

// 11、数组排序
console.log(arr);
// 数组中元素排序，按照ascii码排序
const sorted = arr.sort();
console.log(sorted);
console.log(arr);


// 自定义排序规则;
const numArr = [1,234,32,45,12,13]; 
const resArr = numArr.sort((a,b)=>{
    console.log('一次比较，a='+a + ',b='+b);
    return a<b;
})
console.log(resArr);
console.log(numArr);

// 按照对象的某个字段排序
const stuGrades = [
    {name:'张三',grade:50},
    {name:'李四',grade:80},
    {name:'王五',grade:67},
    {name:'麻六',grade:70},
    {name:'沈七',grade:30},
    {name:'王八',grade:89}
]
const resArr2 = stuGrades.sort((a,b)=>{
    return a.grade<b.grade;
})
console.log(resArr2);

// 12、数组过滤
const contactArr = [
    {name:'张三',phone:'15634524547'},
    {name:'李四',phone:'17734524566'},
    {name:'王五',phone:'16531224567'},
    {name:'马六',phone:'15634556767'},
    {name:'小白',phone:'18934534587'},
    {name:'小兰',phone:'18634589675'},
    {name:'张四',phone:'16531224567'},
    {name:'李明',phone:'17867556767'},
    {name:'小王',phone:'15567534587'},
    {name:'小红',phone:'16678589675'}
]

// callback :回调函数
    //para1:元素；
    //para2:索引；
    //para3:数组
        // 返回值为true,说明该元素满足过滤条件，添加到结果数组中；
        // false,说明该元素不满足过滤条件，不要;
const resArr3 = contactArr.filter((item,index,arr)=>{
    return item.name.includes('小');
})

console.log(resArr3);

// 13、数组遍历
const names = ['张三','lucy','lily','李四'];
// 遍历数组,对于数组中每一个元素，操作函数会被调用一次
names.forEach((item,index,arr)=>{
    console.log(item);
})

// 14、数组映射
const nums = [1,2,3,4];
//map:映射,一一对应;原数组的元素通过某种映射关系得到一个新元素，进而形成一个新数组;
// 新数组与原数组 元素数目一致，一一对应;
const resArr4 = nums.map((item,index,arr)=>{
    return item*5;
})
console.log(resArr4);

// 15、数组聚合
// reduce:减少，缩小，归纳为；
// 根据某种规则运算数组中的元素，最终得到一个结果；
// para1:操作函数   
        // para1:上一次运算的结果
        // para2:元素
        // para3:索引
        // para4:数组
// para2:运算初值;
const result = nums.reduce((preValue,item,index,arr)=>{
    console.log(preValue + '---' + item);
    return preValue + item;
},0)
console.log(result);

// 16、数组反序
// 元素倒序
const reverse = nums.reverse();
console.log(reverse);


// //字符串转化为数字
// const str = '12.1';
// // parseInt:把字符串化为整数;
// const num = parseInt(str);
// console.log(num);
// // parseFloat:把字符串化为小数
// const num1 = parseFloat(str);
// console.log(num1);
