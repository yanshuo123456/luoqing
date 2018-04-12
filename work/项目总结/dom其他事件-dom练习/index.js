var lefts = document.querySelectorAll('.left');
var cells = document.querySelectorAll('.cell');
console.log(lefts);
//for循环给lefts中所有的left添加事件;
for(var i = 0 ; i < lefts.length ; i++){
    lefts[i].onmouseenter = function(){
        console.log('鼠标进来左侧了');
        // 显示右侧;
        console.log(this);
        // next:下一个,element:标签;sibling:邻居；
        // 后面的相邻平级标签
        this.nextElementSibling.style.display = 'block';
    }
    cells[i].onmouseleave = function(){
        console.log('鼠标从cell出去了');
        console.log(this);
        this.children[1].style.display = 'none';
    }
}