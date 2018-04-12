// second.ts
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Zhiyou;
(function (Zhiyou) {
    var Second = /** @class */ (function (_super) {
        __extends(Second, _super);
        // 在该类的构造函数中调用super
        function Second(fillColor) {
            if (fillColor === void 0) { fillColor = 'red'; }
            var _this = _super.call(this) || this;
            _this.fillColor = fillColor;
            return _this;
        }
        Second.prototype.calcArgs = function () {
            var args = {};
            args.duration = 60;
            args.zIndex = '9';
            var time = new Date();
            var s = time.getSeconds() * -1;
            args.delay = s - 15;
            return args;
        };
        Second.prototype.calcLayoutArgs = function () {
            var radius = Second.radius * 0.9;
            var width = radius * 1.15;
            var height = radius * 0.01;
            return [radius, width, height];
        };
        Second.prototype.render = function () {
            _super.prototype.render.call(this);
            var args = this.calcArgs();
            console.log(args);
            this.ele.style.backgroundColor = 'initial';
            this.ele.style.animationName = 'rotate';
            this.ele.style.animationTimingFunction = 'linear';
            this.ele.style.animationIterationCount = 'infinite';
            this.ele.style.animationDuration = args.duration + 's';
            this.ele.style.animationDelay = args.delay + 's';
            this.ele.style.zIndex = args.zIndex;
            this.el = document.createElement('span');
            this.el.style.display = 'block';
            this.el.style.backgroundColor = this.fillColor;
            this.ele.appendChild(this.el);
        };
        Second.prototype.layout = function () {
            var args = this.calcLayoutArgs();
            // 设置秒针外层div的宽、高、顶部和左侧距离
            this.ele.style.width = args[0] * 2 + Second.pxSuffix;
            this.ele.style.height = 10 + Second.pxSuffix;
            this.ele.style.top = Second.clientHeight / 2 - 5 + Second.pxSuffix;
            this.ele.style.left = Second.clientWidth / 2 - args[0] + Second.pxSuffix;
            // 设置秒针的width、height、marginTop、borderRadius
            this.el.style.width = args[1] + Second.pxSuffix;
            this.el.style.height = args[2] + Second.pxSuffix;
            this.el.style.marginTop = 5 - args[2] / 2 + Second.pxSuffix;
            this.el.style.borderRadius = args[2] / 2 + Second.pxSuffix;
        };
        return Second;
    }(Zhiyou.Control));
    Zhiyou.Second = Second;
})(Zhiyou || (Zhiyou = {}));
//# sourceMappingURL=second.js.map