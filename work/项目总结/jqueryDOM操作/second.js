
var images = ['imagesBig/0-0.jpg', 'imagesBig/1-1.jpg', 'imagesBig/2-2.jpg', 'imagesBig/3-3.jpg', 'imagesBig/4-4.jpg'];
var last = null;
var index = 0;
function changeImage() {
    if (last) {
        $(last).css('border', 'none');
    }
    $(this).css('border', '2px solid black');

    var i = $(this).index();
    index = i;
    $('.container>img').attr('src', images[i])

    last = this;
}
function hide() {
    console.log('隐藏');
    $('.big').css('display', 'none');
    $('.select').css('display', 'none');
}
$('div>.small>img').click(changeImage).mouseover(changeImage);

$('.container').mousemove(function (event) {
    var offsetTop = this.offsetTop;
    var offsetLeft = this.offsetLeft;
    var clientX = event.originalEvent.clientX;
    var clientY = event.originalEvent.clientY;
    var left = clientX - offsetLeft;
    var top = clientY - offsetTop;
    var imgWidth = $('.container>img').width();
    var imgHeight = $('.container>img').height();
    if (left > imgWidth || top > imgHeight) {
        hide();
        return;
    }

    var width = $('.select').width();
    var height = $('.select').height();
    var selectLeft = left - width / 2;
    var selectTop = top - height / 2;
    if (selectLeft <= 0) {
        selectLeft = 0;
    }
    if (selectLeft >= imgWidth - width) {
        selectLeft = imgWidth - width;
    }
    if (selectTop <= 0) {
        selectTop = 0;
    }
    if (selectTop >= imgHeight - height) {
        selectTop = imgHeight - height;
    }

    $('.select').css({
        display: 'block',
        left: selectLeft + 'px',
        top: selectTop + 'px'
    });


    var bigWidth = 2 * $('.big').width();
    var bigHeight = 2 * $('.big').height();
    var moveX = selectLeft * bigWidth / imgWidth;
    var moveY = selectTop * bigHeight / imgHeight;
    if (moveX > bigWidth / 2) {
        moveX = bigWidth / 2;
    }
    if (moveY > bigHeight / 2) {
        moveY = bigHeight / 2;
    }
    $('.big').css({
        display: 'block',
        backgroundImage: 'url(' + images[index] + ')',
        backgroundPosition: moveX * (-1) + 'px ' + moveY * (-1) + 'px'
    })
})

$('.container').mouseleave(hide);
