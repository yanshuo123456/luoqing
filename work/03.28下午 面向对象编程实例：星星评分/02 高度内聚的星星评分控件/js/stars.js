// stars.js
function Stars(name,count,size) {
    this.count = count || 5
    this.size = size || 30
    this.name = name
    this.box = document.querySelector('[data-star=' + name + ']')
    console.log(this.box)
    // 在构造函数内部直接调用show方法
    // 使用Stars对象的开发者就不需要再调用show方法了
    this.show()
}

Stars.prototype.show = function(){
    for (let i = 0; i < this.count; i++) {
        var star = document.createElement('img')
        star.src = 'img/star-yellow.png'
        star.style.width = this.size + 'px'
        star.style.marginRight = this.size * 0.5 + 'px'
        star.dataset.score = i + 1
        star.dataset.index = i
        star.onclick = this.onStarClick.bind(this)

        this.box.appendChild(star)
    }

    var score = document.createElement('span')
    score.style.display = 'inline-block'
    score.style.height = this.size + 'px'
    score.style.lineHeight = this.size * 1.1 + 'px'
    score.style.verticalAlign = 'top'
    score.style.fontSize = this.size * 0.6 + 'px'
    score.style.color = '#666'
    this.box.appendChild(score)

    // type=hidden的文本框在页面上是隐藏的
    // 它可以保存页面数据
    // 这些数据会随表单一起提交到服务端
    var input = document.createElement('input')
    input.value = 0
    input.type = 'hidden'
    input.name = this.name + '-score'
    this.box.appendChild(input)
}

Stars.prototype.onStarClick = function(ev){
    var stars = this.box.querySelectorAll('img')
    var score = ev.currentTarget.dataset.score

    // 将已经变成红色的星星恢复为金色星星
    for (let i = 0; i < stars.length; i++) {
        if (stars[i].src.endsWith('red.png')) {
            stars[i].src = 'img/star-yellow.png'
        }       
    }

    // 将被点击的星星以及它左侧的星星变成红色
    for (let i = 0; i < score; i++) {
        stars[i].src = 'img/star-red.png'        
    }

    // 显示评分
    var scoreSpan = this.box.querySelector('span')
    scoreSpan.innerText = score + '分'

    // 修改input的value值
    var input = this.box.querySelector('input')
    input.value = score
}

// 把某个对象转成数组
// console.log(document.querySelectorAll('[data-star]'))
Array.prototype.slice.call(document.querySelectorAll('[data-star]')).forEach(function(star){
    // console.log('===' + star.dataset.star)
    new Stars(star.dataset.star)
})