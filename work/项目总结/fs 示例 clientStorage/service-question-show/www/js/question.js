// /ask  post  question:问题
$('form').submit(function(event){
    event.preventDefault();
    const value = $(this).serialize();
    $.post('/ask',value,function(res){
        console.log(res);
        if(res.success == 0){
            alert(res.message);
        }else{
            location.href = 'index.html';
        }
    })  
})