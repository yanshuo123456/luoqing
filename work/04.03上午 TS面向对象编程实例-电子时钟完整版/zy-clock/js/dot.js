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
// dot.ts
var Zhiyou;
(function (Zhiyou) {
    var Dot = /** @class */ (function (_super) {
        __extends(Dot, _super);
        function Dot() {
            return _super.call(this) || this;
        }
        Dot.prototype.render = function () {
            _super.prototype.render.call(this);
            this.ele.style.borderRadius = '50%';
            this.ele.style.zIndex = '10';
        };
        Dot.prototype.layout = function () {
            var radius = Dot.radius * 0.04;
            this.ele.style.width = radius * 2 + Dot.pxSuffix;
            this.ele.style.height = radius * 2 + Dot.pxSuffix;
            this.ele.style.top = Dot.clientHeight / 2 - radius + Dot.pxSuffix;
            this.ele.style.left = Dot.clientWidth / 2 - radius + Dot.pxSuffix;
        };
        return Dot;
    }(Zhiyou.Control));
    Zhiyou.Dot = Dot;
})(Zhiyou || (Zhiyou = {}));
//# sourceMappingURL=dot.js.map