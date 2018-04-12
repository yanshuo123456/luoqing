// 
var Clock = /** @class */ (function () {
    function Clock() {
        this.children = [];
    }
    Clock.prototype.show = function () {
        this.render();
        this.children.forEach(function (v) { return v.show(); });
    };
    Clock.prototype.render = function () {
        var _this = this;
        // 添加样式表
        var style = document.createElement('style');
        document.head.appendChild(style);
        style.sheet.insertRule("\n            *{\n                box-sizing: border-box\n            }\n        ");
        style.sheet.insertRule("\n            @keyframes rotate{\n                from{transform: rotate(0);}\n                to{transform: rotate(360deg);}\n            }\n        ");
        var dot = new Zhiyou.Dot();
        var second = new Zhiyou.Second();
        var minute = new Zhiyou.Minute('blue');
        var hour = new Zhiyou.Hour('green');
        this.children.push(dot, second, minute, hour);
        for (var i = 0; i < 60; i++) {
            // 如果i是5的倍数，sizeRadio = 0.02
            // 如果i不是5的倍数，sizeRadio = 0
            var sizeRadio = i % 5 == 0 ? 0.02 : 0;
            this.children.push(new Zhiyou.Diamond(i, sizeRadio));
        }
        // 窗口大小改变时
        window.onresize = function () {
            Zhiyou.Control.windowResized();
            _this.layout();
        };
    };
    Clock.prototype.layout = function () {
        console.log('Clock.layout()');
        this.children.forEach(function (v) { return v.layout(); });
    };
    return Clock;
}());
//# sourceMappingURL=clock.js.map