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
            var args;
            args.duration = 60;
            args.zIndex = '9';
            var time = new Date();
            var s = time.getSeconds() * -1;
            args.delay = s - 15;
            return args;
        };
        return Second;
    }(Zhiyou.Control));
    Zhiyou.Second = Second;
})(Zhiyou || (Zhiyou = {}));
//# sourceMappingURL=second.js.map