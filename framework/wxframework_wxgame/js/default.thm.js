var egret = window.egret;
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/skins/BaseButtonSkin.exml'] = window.BaseButtonSkin = (function (_super) {
	__extends(BaseButtonSkin, _super);
	function BaseButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.height = 158;
		this.width = 400;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image2","visible",false)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","visible",false),
					new eui.SetProperty("_Image2","source","yong_8_png"),
					new eui.SetProperty("labelDisplay","left",30),
					new eui.SetProperty("labelDisplay","right",30),
					new eui.SetProperty("labelDisplay","top",6),
					new eui.SetProperty("labelDisplay","bottom",9),
					new eui.SetProperty("labelDisplay","textColor",0xc4c4c4)
				])
		];
	}
	var _proto = BaseButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(103,0,165,159);
		t.source = "yong_7_png";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(103,0,165,159);
		t.source = "yong_7_png";
		t.top = 0;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.bottom = 12;
		t.fontFamily = "Microsoft JhengHei";
		t.left = 30;
		t.right = 30;
		t.size = 54;
		t.text = "开始游戏";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.top = 3;
		t.verticalAlign = "middle";
		return t;
	};
	return BaseButtonSkin;
})(eui.Skin);generateEUI.paths['resource/skins/GameSkin.exml'] = window.GameSkin = (function (_super) {
	__extends(GameSkin, _super);
	function GameSkin() {
		_super.call(this);
		this.skinParts = ["rect_bg"];
		
		this.width = 750;
		this.elementsContent = [this.rect_bg_i(),this._Label1_i()];
	}
	var _proto = GameSkin.prototype;

	_proto.rect_bg_i = function () {
		var t = new eui.Rect();
		this.rect_bg = t;
		t.fillColor = 0x868e8d;
		t.height = 1334;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 750;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 88;
		t.text = "这里是游戏界面";
		t.verticalAlign = "bottom";
		t.verticalCenter = 0;
		return t;
	};
	return GameSkin;
})(eui.Skin);generateEUI.paths['resource/skins/RankSkin.exml'] = window.RankSkin = (function (_super) {
	__extends(RankSkin, _super);
	function RankSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Image2_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Image3_i(),this._Image4_i(),this._Image5_i()];
	}
	var _proto = RankSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x868e8d;
		t.percentHeight = 100;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 700;
		t.scale9Grid = new egret.Rectangle(43,14,259,90);
		t.source = "game_json.img_5";
		t.width = 600;
		t.x = 20;
		t.y = 160;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 140;
		t.scale9Grid = new egret.Rectangle(43,14,259,90);
		t.source = "game_json.img_5";
		t.width = 600;
		t.x = 20;
		t.y = 878.79;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimSun";
		t.height = 30.61;
		t.multiline = false;
		t.size = 22;
		t.text = "微信名字最长一二三四五六七八九十";
		t.textAlign = "left";
		t.textColor = 0xffffff;
		t.width = 166.15;
		t.x = 138.98;
		t.y = 193.35;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.text = "99";
		t.textColor = 0xed1515;
		t.width = 40;
		t.x = 40;
		t.y = 191.81;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.size = 24;
		t.text = "1234567890123456";
		t.textAlign = "right";
		t.textColor = 0xffffff;
		t.width = 250;
		t.x = 349.64;
		t.y = 192.13;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.text = "好友排行榜";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.width = 228;
		t.y = 95.33;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "game_json.qua_0";
		t.x = 80;
		t.y = 182.81;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.bottom = 40;
		t.source = "game_json.qua_0";
		t.x = 20;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scale9Grid = new egret.Rectangle(6,6,36,36);
		t.source = "game_json.qua_0";
		t.width = 258.61;
		t.x = 361.39;
		t.y = 1049.58;
		return t;
	};
	return RankSkin;
})(eui.Skin);generateEUI.paths['resource/skins/StartSkin.exml'] = window.StartSkin = (function (_super) {
	__extends(StartSkin, _super);
	function StartSkin() {
		_super.call(this);
		this.skinParts = ["img_bg","btn_start","btn_gm","btn_more","btn_rank","btn_grouprank","btn_share"];
		
		this.width = 750;
		this.elementsContent = [this.img_bg_i(),this._Image1_i(),this._Image2_i(),this.btn_start_i(),this._Group1_i(),this._Label1_i(),this._Label2_i()];
	}
	var _proto = StartSkin.prototype;

	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.height = 1334;
		t.scale9Grid = new egret.Rectangle(51,47,43,32);
		t.source = "yong_3_png";
		t.verticalCenter = 0;
		t.width = 750;
		t.x = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 160;
		t.horizontalCenter = 1;
		t.scale9Grid = new egret.Rectangle(68,0,17,94);
		t.source = "yong_11_png";
		t.verticalCenter = -427;
		t.width = 578;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 437.33;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(68,66,50,25);
		t.source = "yong_11_png";
		t.verticalCenter = -77.5;
		t.width = 578;
		return t;
	};
	_proto.btn_start_i = function () {
		var t = new eui.Button();
		this.btn_start = t;
		t.horizontalCenter = 0;
		t.label = "开始游戏";
		t.skinName = "BaseButtonSkin";
		t.verticalCenter = 337;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 513;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.btn_gm_i(),this.btn_more_i(),this.btn_rank_i(),this.btn_grouprank_i(),this.btn_share_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 15;
		return t;
	};
	_proto.btn_gm_i = function () {
		var t = new eui.Label();
		this.btn_gm = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = true;
		t.bold = true;
		t.height = 66;
		t.text = "联系客服";
		t.textColor = 0x000000;
		t.width = 66;
		t.x = 0;
		t.y = 10.32;
		return t;
	};
	_proto.btn_more_i = function () {
		var t = new eui.Label();
		this.btn_more = t;
		t.background = true;
		t.bold = true;
		t.height = 66;
		t.text = "更多游戏";
		t.textColor = 0x000000;
		t.width = 66;
		t.x = 87;
		t.y = 3.67;
		return t;
	};
	_proto.btn_rank_i = function () {
		var t = new eui.Label();
		this.btn_rank = t;
		t.anchorOffsetX = 0;
		t.background = true;
		t.bold = true;
		t.height = 66;
		t.text = "排行榜";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 110;
		t.x = 276;
		t.y = 1.33;
		return t;
	};
	_proto.btn_grouprank_i = function () {
		var t = new eui.Label();
		this.btn_grouprank = t;
		t.anchorOffsetX = 0;
		t.background = true;
		t.bold = true;
		t.height = 66;
		t.text = "群排行";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 112.67;
		t.x = 361;
		t.y = 3.67;
		return t;
	};
	_proto.btn_share_i = function () {
		var t = new eui.Label();
		this.btn_share = t;
		t.background = true;
		t.bold = true;
		t.height = 66;
		t.text = "分享";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 66;
		t.x = 471;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.bold = true;
		t.horizontalCenter = 0;
		t.italic = true;
		t.size = 66;
		t.text = "游戏LOGO";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -427;
		t.width = 383;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 55;
		t.text = "游戏介绍及其他";
		t.verticalCenter = -202.5;
		return t;
	};
	return StartSkin;
})(eui.Skin);