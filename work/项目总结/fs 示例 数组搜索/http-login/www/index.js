// 发请求，提交登录数据
$('form').submit(function(event){
    event.preventDefault();
    
    //获取数据
    const value = $(this).serialize();

    // 发请求
    // get\post区别：
    // get请求数据在url中,post请求数据在请求体中;
    // 浏览器对url的长度有限制，所以get请求发送的数据量是有限的;
    $.post('/login',value,function(res){
        console.log(res);
        if(res.success  == 0){
            // 登录失败
            alert(res.message);
            $('input[type!=submit]').val('');
        }else{
            // 登录成功
            // 页面跳转;
            location.href = 'home.html';
        }
    })
})