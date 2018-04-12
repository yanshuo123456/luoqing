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
    /**
     * Minute分针
     */
    var Minute = /** @class */ (function (_super) {
        __extends(Minute, _super);
        function Minute(color) {
            if (color === void 0) { color = 'black'; }
            return _super.call(this, color) || this;
        }
        Minute.prototype.calcArgs = function () {
            var args = {};
            args.duration = 3600;
            args.zIndex = '8';
            var time = new Date();
            var s = time.getSeconds() * -1;
            var m = time.getMinutes() * -1;
            args.delay = (m * 60) - (15 * 60) + s;
            return args;
        };
        Minute.prototype.calcLayoutArgs = function () {
            var radius = Minute.radius * 0.8;
            var width = radius * 1.12;
            var height = radius * 0.03;
            return [radius, width, height];
        };
        return Minute;
    }(Zhiyou.Second));
    Zhiyou.Minute = Minute;
})(Zhiyou || (Zhiyou = {}));
//# sourceMappingURL=minute.js.map