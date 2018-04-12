// control.ts
var Zhiyou;
(function (Zhiyou) {
    // 创建基类(父类):Control，加入IControl接口中去
    var Control = /** @class */ (function () {
        function Control() {
            // 创建一个保护元素:黑色(black)
            this.fillColor = 'black';
        }
        // 调用render layout方法
        Control.prototype.show = function () {
            this.render();
            this.layout();
        };
        Control.prototype.render = function () {
            // 创建一个div
            this.ele = document.createElement('div');
            // 背景颜色设为黑色
            this.ele.style.backgroundColor = this.fillColor;
            // 绝对定位
            this.ele.style.position = 'absolute';
            // 加入body中
            document.body.appendChild(this.ele);
        };
        Control.prototype.layout = function () { };
        Control.windowResized = function () {
            // 静态成员通过类名调用
            Control.clientWidth = document.documentElement.clientWidth;
            Control.clientHeight = document.documentElement.clientHeight;
            // 以下代码的效果是圆心居中
            Control.radius = Math.min(Control.clientWidth, Control.clientHeight) / 2;
        };
        Control.pxSuffix = 'px';
        return Control;
    }());
    Zhiyou.Control = Control;
})(Zhiyou || (Zhiyou = {}));
// 调用windows
Zhiyou.Control.windowResized();
//# sourceMappingURL=control.js.map