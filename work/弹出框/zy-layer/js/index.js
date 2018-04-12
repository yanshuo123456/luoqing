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
// export type RadiusWidthHeight = [
//     number,
//     number,
//     number
// ]
define("Controls/Control", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    // abstract关键字用于定义抽象类和在抽象类内部定义抽象方法
    // 抽象类做为其它派生类的基类使用
    // 它一般不会被实例化
    // 不同于接口的是：抽象类可以包含成员的实现细节
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
        // constructor(parameters) {}
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
        // showMask()：显示遮罩层
        MaskControl.showMask = function () {
            MaskControl.overflow = document.documentElement.style.overflow;
            document.documentElement.style.overflow = 'hidden';
            if (!MaskControl.mask) {
                MaskControl.mask = document.createElement('div');
                MaskControl.mask.className = 'modal-mask';
                document.body.appendChild(MaskControl.mask);
            }
            MaskControl.mask.style.display = 'block';
        };
        // hideMask()：隐藏遮罩层
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
            var box = document.createElement('div');
            box.className = 'modal-box';
            document.body.appendChild(box);
            // 保留box
            this.ele = box;
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
                // 关闭遮罩层
                _this.close();
                // 
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
define("Controls/Confirm", ["require", "exports", "Controls/Alert"], function (require, exports, Alert_1) {
    "use strict";
    exports.__esModule = true;
    var Confirm = /** @class */ (function (_super) {
        __extends(Confirm, _super);
        function Confirm(message, yesAction, noAction) {
            var _this = _super.call(this, message, yesAction) || this;
            _this.noAction = noAction;
            return _this;
        }
        Confirm.prototype.renderButton = function () {
            var _this = this;
            var btnBox = document.querySelector('.modal-button-box');
            var separator = document.createElement('span');
            separator.className = 'modal-separator';
            btnBox.appendChild(separator);
            var actionYes = document.createElement('span');
            actionYes.innerText = Alert_1["default"].yesText;
            actionYes.className = 'modal-left-button';
            btnBox.appendChild(actionYes);
            var actionNo = document.createElement('span');
            actionNo.innerText = Alert_1["default"].noText;
            actionNo.className = 'modal-right-button';
            btnBox.appendChild(actionNo);
            actionYes.onclick = function () {
                _this.close();
                _this.yesAction();
            };
            actionNo.onclick = function () {
                _this.close();
                _this.noAction();
            };
        };
        return Confirm;
    }(Alert_1["default"]));
    exports["default"] = Confirm;
});
define("Controls/Prompt", ["require", "exports", "Controls/Confirm"], function (require, exports, Confirm_1) {
    "use strict";
    exports.__esModule = true;
    var Prompt = /** @class */ (function (_super) {
        __extends(Prompt, _super);
        function Prompt(message, placeholder, yesAction, noAction) {
            var _this = _super.call(this, message, yesAction, noAction) || this;
            _this.placeholder = placeholder;
            return _this;
        }
        Prompt.prototype.renderContent = function (box) {
            box.classList.add('modal-prompt');
            var div = document.createElement('div');
            div.className = 'modal-content';
            box.appendChild(div);
            var input = document.createElement('input');
            input.type = 'text';
            input.placeholder = this.placeholder;
            div.appendChild(input);
            input.focus();
        };
        Prompt.prototype.text = function () {
            var input = this.ele.querySelector('input');
            return input.value;
        };
        return Prompt;
    }(Confirm_1["default"]));
    exports["default"] = Prompt;
});
define("index", ["require", "exports", "Controls/Alert", "Controls/Confirm", "Controls/Prompt"], function (require, exports, Alert_2, Confirm_2, Prompt_1) {
    "use strict";
    exports.__esModule = true;
    document.getElementById('testAlert').onclick = function () {
        new Alert_2["default"]('网络请求失败！', function () {
            console.log('你点了确定！');
        }).show();
    };
    document.getElementById('testConfirm').onclick = function () {
        new Confirm_2["default"]('确定要删除吗？', function () {
            console.log('你点了确定！');
        }, function () {
            console.log('你点了取消！');
        }).show();
    };
    document.getElementById('testPrompt').onclick = function () {
        new Prompt_1["default"]('请填写你的手机号：', '手机号', function () {
            console.log('你点了确定！你输入的是：' + this.text());
        }, function () {
            console.log('你点了取消！');
        }).show();
    };
});
//# sourceMappingURL=index.js.map