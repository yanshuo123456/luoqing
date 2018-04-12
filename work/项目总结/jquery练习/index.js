// 1、添加点击事件
// .one():事件监听只执行一次;
$('div>div:eq(1)').one('click',function(){
    console.log('点击了');
    // 2、获取时间初始值
    // .val()：输入框赋值、取值
    var minutes = $('input:eq(0)').val();
    var seconds = $('input:eq(1)').val();
    
    // 3、创建一个定时器，开始倒计时;
    // 返回值是一个数字，唯一标示当前的定时器
   var timer =  setInterval(function(){
       console.log(seconds);
        // 4、时间减1秒,把新时间写入输入框
        seconds--;
        // 5、注意 秒没有了，怎么办？
        if(seconds == -1){
            if(minutes > 0){
                seconds = 59 ;
                minutes-- ;
                $('input:eq(0)').val(minutes<10?'0'+minutes:minutes);
            }else{
                // 时间没有了,结束计时。
                // 清除定时器。
                // 参数是需要清除的定时器的标识符
                clearInterval(timer);
                return ;
            }
        }
        $('input:eq(1)').val(seconds<10?'0'+seconds : seconds);
    },1000);
});

