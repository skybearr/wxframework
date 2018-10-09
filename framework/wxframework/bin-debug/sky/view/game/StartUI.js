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
var StartUI = (function (_super) {
    __extends(StartUI, _super);
    function StartUI() {
        return _super.call(this, "StartSkin") || this;
    }
    /**适配处理 */
    StartUI.prototype.checkFit = function () {
        this.img_bg.height = GameLogic.getInstance().GameStage.stageHeight;
    };
    /**初始化数据 */
    StartUI.prototype.initData = function () {
    };
    /**初始化界面 */
    StartUI.prototype.initView = function () {
    };
    /**初始化事件 */
    StartUI.prototype.initEvent = function () {
        this.btn_start.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickStart, this);
        this.btn_gm.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickGM, this);
        this.btn_more.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickMore, this);
        this.btn_rank.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickRank, this);
        this.btn_grouprank.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickGroupRank, this);
        this.btn_share.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickShare, this);
    };
    StartUI.prototype.clickStart = function () {
        GameLogic.getInstance().startGame();
    };
    StartUI.prototype.clickGM = function () {
        WxApi.getInstance();
    };
    StartUI.prototype.clickMore = function () {
    };
    StartUI.prototype.clickRank = function () {
    };
    StartUI.prototype.clickGroupRank = function () {
    };
    StartUI.prototype.clickShare = function () {
    };
    StartUI.prototype.clear = function () {
        _super.prototype.clear.call(this);
        this.btn_start.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickStart, this);
        this.btn_gm.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickGM, this);
        this.btn_more.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickMore, this);
        this.btn_rank.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickRank, this);
        this.btn_grouprank.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickGroupRank, this);
        this.btn_share.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickShare, this);
    };
    return StartUI;
}(BaseUI));
__reflect(StartUI.prototype, "StartUI");
//# sourceMappingURL=StartUI.js.map