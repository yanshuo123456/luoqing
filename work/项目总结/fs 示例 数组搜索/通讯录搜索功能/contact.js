const  contacts =  [
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

const html = template('contact',{data:contacts});
console.log(html);
$('.contact').append(html);

// 监听input事件
$('input').on('input',function(){
    // 获取输入
    const value = $(this).val();
    // 过滤数组
    const result = contacts.filter((item,index,arr)=>{
        return item.name.includes(value) || item
        .phone.includes(value);
    });
    // 把结果数组展示到页面上
    const htmlStr = template('contact',{data:result});
    $('.contact').html(htmlStr);
})