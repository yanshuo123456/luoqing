// control.ts
var Zhiyou;
(function (Zhiyou) {
    // 创建基类(父类):Control
    var Control = /** @class */ (function () {
        function Control() {
            this.fillColor = 'black';
        }
        Control.prototype.show = function () {
            this.render();
            this.layout();
        };
        Control.prototype.render = function () {
            this.ele = document.createElement('div');
            this.ele.style.backgroundColor = this.fillColor;
            this.ele.style.position = 'absolute';
            document.body.appendChild(this.ele);
        };
        Control.prototype.layout = function () { };
        Control.windowResized = function () {
            // 静态成员通过类名调用
            Control.clientWidth = document.documentElement.clientWidth;
            Control.clientHeight = document.documentElement.clientHeight;
            Control.radius = Math.min(Control.clientWidth, Control.clientHeight) / 2;
        };
        Control.pxSuffix = 'px';
        return Control;
    }());
    Zhiyou.Control = Control;
})(Zhiyou || (Zhiyou = {}));
Zhiyou.Control.windowResized();
//# sourceMappingURL=control.js.map