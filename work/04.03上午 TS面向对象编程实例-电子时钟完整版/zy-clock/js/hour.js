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
/// <reference path="second.ts" />
var Zhiyou;
(function (Zhiyou) {
    /**
     * Hour时针
     */
    var Hour = /** @class */ (function (_super) {
        __extends(Hour, _super);
        function Hour(color) {
            if (color === void 0) { color = 'black'; }
            return _super.call(this, color) || this;
        }
        Hour.prototype.calcArgs = function () {
            var args = {};
            args.duration = 43200;
            args.zIndex = '8';
            var time = new Date();
            var s = time.getSeconds() * -1;
            var m = time.getMinutes() * -1;
            var h = time.getHours();
            h = h > 12 ? h - 12 : h;
            h = h * -1;
            args.delay = (h * 60 * 60) - (3 * 60 * 60) + (m * 60) + s;
            return args;
        };
        Hour.prototype.calcLayoutArgs = function () {
            var radius = Hour.radius * 0.6;
            var width = radius * 1.13;
            var height = radius * 0.05;
            return [radius, width, height];
        };
        return Hour;
    }(Zhiyou.Second));
    Zhiyou.Hour = Hour;
})(Zhiyou || (Zhiyou = {}));
//# sourceMappingURL=hour.js.map