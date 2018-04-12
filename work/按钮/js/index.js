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
define("Controls/Control", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var Control = /** @class */ (function () {
        function Control() {
        }
        return Control;
    }());
    exports.Control = Control;
});
define("Controls/ShowCloseControl", ["require", "exports", "Controls/Control"], function (require, exports, Control_1) {
    "use strict";
    exports.__esModule = true;
    var ShowCloseControl = /** @class */ (function (_super) {
        __extends(ShowCloseControl, _super);
        function ShowCloseControl() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._isShowing = false;
            return _this;
        }
        ShowCloseControl.prototype.isShowing = function () {
            return this._isShowing;
        };
        ShowCloseControl.prototype.show = function () {
            this._isShowing = true;
        };
        ShowCloseControl.prototype.close = function () {
            this._isShowing = false;
        };
        return ShowCloseControl;
    }(Control_1.Control));
    exports.ShowCloseControl = ShowCloseControl;
});
define("Controls/MaskControl", ["require", "exports", "Controls/ShowCloseControl"], function (require, exports, ShowCloseControl_1) {
    "use strict";
    exports.__esModule = true;
    var MaskControl = /** @class */ (function (_super) {
        __extends(MaskControl, _super);
        function MaskControl() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // 两种类型的遮罩层显示
        MaskControl.showMask = function () {
            MaskControl.overflow = document.documentElement.style.overflow;
            document.documentElement.style.overflow = 'hidden';
            // 如果MaskControl.mask不存在则创建
            if (!MaskControl.mask) {
                MaskControl.mask = document.createElement('div');
                MaskControl.mask.className = 'modal-mask';
                document.body.appendChild(MaskControl.mask);
            }
            MaskControl.mask.style.display = 'blcok';
        };
        MaskControl.hideMask = function () {
            MaskControl.mask.style.display = 'none';
            document.documentElement.style.overflow = MaskControl.overflow;
        };
        MaskControl.prototype.show = function () {
            _super.prototype.show.call(this);
            MaskControl.showMask();
        };
        MaskControl.prototype.close = function () {
            _super.prototype.close.call(this);
            MaskControl.hideMask();
        };
        return MaskControl;
    }(ShowCloseControl_1.ShowCloseControl));
    exports.MaskControl = MaskControl;
});
define("Controls/Alert", ["require", "exports", "Controls/MaskControl"], function (require, exports, MaskControl_1) {
    "use strict";
    exports.__esModule = true;
    var Alert = /** @class */ (function (_super) {
        __extends(Alert, _super);
        function Alert(message, yesAction) {
            var _this = _super.call(this) || this;
            _this.message = message;
            _this.yesAction = yesAction;
            return _this;
        }
        Alert.prototype.renderBody = function () {
            // 创建一个div
            var box = document.createElement('div');
            box.className = 'modal-box';
            document.body.appendChild(box);
            this.ele = box;
            // 创建一个div
            var msg = document.createElement('div');
            msg.className = 'modal-message';
            msg.innerText = this.message;
            box.appendChild(msg);
            this.renderContent(box);
            var btnBox = document.createElement('div');
            btnBox.className = 'modal-button-box';
            box.appendChild(btnBox);
        };
        Alert.prototype.renderContent = function (box) { };
        Alert.prototype.renderButton = function () {
            var _this = this;
            var btn = document.createElement('div');
            btn.innerText = Alert.yesText;
            document.querySelector('.modal-button-box').appendChild(btn);
            btn.onclick = function (ev) {
                _this.close();
                _this.yesAction();
            };
        };
        Alert.prototype.unRender = function () {
            document.body.removeChild(this.ele);
        };
        Alert.prototype.render = function () {
            this.renderBody();
            this.renderButton();
        };
        Alert.prototype.close = function () {
            _super.prototype.close.call(this);
            this.unRender();
        };
        Alert.prototype.show = function () {
            _super.prototype.show.call(this);
            this.render();
        };
        Alert.yesText = '确定';
        Alert.noText = '取消';
        return Alert;
    }(MaskControl_1.MaskControl));
    exports["default"] = Alert;
});
define("Controls/Alerts", ["require", "exports", "Controls/MaskControl"], function (require, exports, MaskControl_2) {
    "use strict";
    exports.__esModule = true;
    var Alerts = /** @class */ (function (_super) {
        __extends(Alerts, _super);
        function Alerts(message, yesAction) {
            var _this = _super.call(this) || this;
            _this.message = message;
            _this.yesAction = yesAction;
            return _this;
        }
        Alerts.prototype.renderBody = function () {
            // 创建一个div
            var box = document.createElement('div');
            box.className = 'modal-box';
            document.body.appendChild(box);
            this.ele = box;
            // 创建一个div
            var msg = document.createElement('div');
            msg.className = 'modal-message';
            msg.innerText = this.message;
            box.appendChild(msg);
            this.renderContent(box);
            var btnBox = document.createElement('div');
            btnBox.className = 'modal-button-box';
            box.appendChild(btnBox);
        };
        Alerts.prototype.renderContent = function (box) { };
        Alerts.prototype.renderButton = function () {
            var _this = this;
            var btn = document.createElement('div');
            btn.innerText = Alerts.yesText;
            document.querySelector('.modal-button-box').appendChild(btn);
            btn.onclick = function (ev) {
                _this.close();
                _this.yesAction();
            };
        };
        Alerts.prototype.unRender = function () {
            document.body.removeChild(this.ele);
        };
        Alerts.prototype.render = function () {
            this.renderBody();
            this.renderButton();
        };
        Alerts.prototype.close = function () {
            _super.prototype.close.call(this);
            this.unRender();
        };
        Alerts.prototype.show = function () {
            _super.prototype.show.call(this);
            this.render();
        };
        Alerts.yesText = '确定';
        Alerts.noText = '取消';
        return Alerts;
    }(MaskControl_2.MaskControl));
    exports["default"] = Alerts;
});
define("Controls/Alerte", ["require", "exports", "Controls/MaskControl"], function (require, exports, MaskControl_3) {
    "use strict";
    exports.__esModule = true;
    var Alerte = /** @class */ (function (_super) {
        __extends(Alerte, _super);
        function Alerte(message, yesAction) {
            var _this = _super.call(this) || this;
            _this.message = message;
            _this.yesAction = yesAction;
            return _this;
        }
        Alerte.prototype.renderBody = function () {
            // 创建一个div
            var box = document.createElement('div');
            box.className = 'modal-box';
            document.body.appendChild(box);
            this.ele = box;
            // 创建一个div
            var msg = document.createElement('div');
            msg.className = 'modal-message';
            msg.innerText = this.message;
            box.appendChild(msg);
            this.renderContent(box);
            var btnBox = document.createElement('div');
            btnBox.className = 'modal-button-boxs';
            var inp = document.createElement('input');
            inp.style.width = '90%';
            inp.style.margin = '10px 5%';
            inp.style.lineHeight = '20px';
            btnBox.appendChild(inp);
            box.appendChild(btnBox);
        };
        Alerte.prototype.renderContent = function (box) { };
        Alerte.prototype.renderButton = function () {
            var _this = this;
            var btn = document.createElement('div');
            btn.innerText = Alerte.yesText;
            btn.style.textAlign = 'center';
            document.querySelector('.modal-button-boxs').appendChild(btn);
            btn.onclick = function (ev) {
                _this.close();
                _this.yesAction();
            };
        };
        Alerte.prototype.unRender = function () {
            document.body.removeChild(this.ele);
        };
        Alerte.prototype.render = function () {
            this.renderBody();
            this.renderButton();
        };
        Alerte.prototype.close = function () {
            _super.prototype.close.call(this);
            this.unRender();
        };
        Alerte.prototype.show = function () {
            _super.prototype.show.call(this);
            this.render();
        };
        Alerte.yesText = '确定';
        Alerte.noText = '取消';
        return Alerte;
    }(MaskControl_3.MaskControl));
    exports["default"] = Alerte;
});
define("index", ["require", "exports", "Controls/Alert", "Controls/Alerts", "Controls/Alerte"], function (require, exports, Alert_1, Alerts_1, Alerte_1) {
    "use strict";
    exports.__esModule = true;
    document.getElementById('testAlert').onclick = function () {
        new Alert_1["default"]('网络请求失败!', function () {
            console.log('确定');
        }).show();
    };
    document.getElementById('testConfirm').onclick = function () {
        new Alerts_1["default"]('第二页!', function () {
            console.log('第二页');
        }).show();
    };
    document.getElementById('testPrompt').onclick = function () {
        new Alerte_1["default"]('第三页!', function () {
            console.log('第三页');
        }).show();
    };
});
//# sourceMappingURL=index.js.map