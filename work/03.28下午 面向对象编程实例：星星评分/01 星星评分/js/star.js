// star.js

function Stars(count, size) {
    this.box = document.querySelector('.input-stars')
    this.count = count || 5
    this.size = size || 30
}

Stars.prototype.show = function(){
    for (let i = 0; i < this.count; i++) {
        var star = document.createElement('img')
        star.src = 'img/star-yellow.png'
        star.style.width = this.size + 'px'
        star.style.height = this.size + 'px'
        star.style.marginRight = this.size / 2 + 'px'
        star.dataset.index = i
        star.onclick = this.onStarClick.bind(this)

        this.box.appendChild(star)
    }
    var score = document.createElement('span')
    score.className = 'input-stars-score'
    score.style.display = 'inline-block'
    score.style.height = this.size + 'px'
    score.style.lineHeight = this.size * 1.1 + 'px'
    score.style.verticalAlign = 'top'
    score.style.fontSize = this.size * 0.6 + 'px'
    score.style.color = '#666'
    this.box.appendChild(score)
}

Stars.prototype.onStarClick = function(ev){
    console.log('调用了onStarClick')
    var stars = this.box.querySelectorAll('img')
    var score = this.box.querySelector('.input-stars-score')
    var index = ev.currentTarget.dataset.index
    console.log(index)

    for (let i = 0; i < stars.length; i++) {
        if (stars[i].src.endsWith('red.png')) {
            stars[i].src = 'img/star-yellow.png'
        }       
    }

    for (let i = 0; i <= index; i++) {
        stars[i].src = 'img/star-red.png'        
    }
    score.innerText = Number.parseInt(index) + 1 + '分'
}