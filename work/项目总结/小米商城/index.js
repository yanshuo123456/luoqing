// 字体大小随着窗口的宽度变化而变化;
function resetFontSize() {
    // 获取屏幕可视区域的宽度
    var width = document.documentElement.offsetWidth;
    var size = width / 40;
    // 设置html标签的字体大小
    document.documentElement.style.fontSize = size + 'px';
    console.log(size);
}

// 调用方法
resetFontSize();

//监听窗口尺寸变化事件,修改字体大小
window.onresize = function(){
    resetFontSize();
}

