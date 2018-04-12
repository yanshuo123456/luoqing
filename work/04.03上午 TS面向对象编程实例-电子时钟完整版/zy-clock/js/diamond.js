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
// diamond.ts
var Zhiyou;
(function (Zhiyou) {
    var Diamond = /** @class */ (function (_super) {
        __extends(Diamond, _super);
        function Diamond(minute, sizeRadio) {
            var _this = _super.call(this) || this;
            _this.minute = minute;
            _this.sizeRadio = sizeRadio;
            _this.sizeRadio = _this.sizeRadio || 0.01;
            // arc表示两点之间的夹角
            _this.arc = 6 * (_this.minute - 15) * 2 * Math.PI / 360;
            return _this;
        }
        Diamond.prototype.render = function () {
            _super.prototype.render.call(this);
            this.ele.style.borderRadius = '50%';
            this.ele.style.zIndex = '5';
        };
        Diamond.prototype.layout = function () {
            var size = Diamond.radius * this.sizeRadio;
            this.ele.style.width = size * 2 + Diamond.pxSuffix;
            this.ele.style.height = size * 2 + Diamond.pxSuffix;
            var radius = Diamond.radius * 0.9;
            var top = radius * Math.sin(this.arc);
            var left = radius * Math.cos(this.arc);
            this.ele.style.top = Diamond.clientHeight / 2 + top - size + Diamond.pxSuffix;
            this.ele.style.left = Diamond.clientWidth / 2 + left - size + Diamond.pxSuffix;
        };
        return Diamond;
    }(Zhiyou.Control));
    Zhiyou.Diamond = Diamond;
})(Zhiyou || (Zhiyou = {}));
//# sourceMappingURL=diamond.js.map