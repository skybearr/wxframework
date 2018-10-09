var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var GameUI = (function (_super) {
    __extends(GameUI, _super);
    function GameUI() {
        return _super.call(this, "GameSkin") || this;
    }
    /**适配处理 */
    GameUI.prototype.checkFit = function () {
        this.rect_bg.height = GameLogic.getInstance().GameStage.stageHeight;
    };
    /**初始化数据 */
    GameUI.prototype.initData = function () {
        HttpCommand.getInstance().testGet();
        HttpCommand.getInstance().testPost();
    };
    /**初始化界面 */
    GameUI.prototype.initView = function () {
    };
    /**初始化事件 */
    GameUI.prototype.initEvent = function () {
    };
    GameUI.prototype.clear = function () {
        _super.prototype.clear.call(this);
    };
    return GameUI;
}(BaseUI));
__reflect(GameUI.prototype, "GameUI");
//# sourceMappingURL=GameUI.js.map