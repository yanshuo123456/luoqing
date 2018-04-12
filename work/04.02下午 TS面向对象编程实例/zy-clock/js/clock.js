// 
var Clock = /** @class */ (function () {
    function Clock() {
        this.children = [];
    }
    Clock.prototype.show = function () {
        console.log('Clock.show()');
        this.render();
        this.children.forEach(function (v) { return v.show(); });
    };
    Clock.prototype.render = function () {
        var _this = this;
        console.log('Clock.render()');
        var dot = new Zhiyou.Dot();
        var second = new Zhiyou.Second();
        this.children.push(dot, second);
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