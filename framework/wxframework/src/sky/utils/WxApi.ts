declare const wx: any
class WxApi extends egret.EventDispatcher {
	public constructor() {
		super();
	}

	private static _instance: WxApi;
	public static getInstance(): WxApi {
		if (this._instance == null) {
			this._instance = new WxApi();
		}
		return this._instance;
	}

	private rewardAd;

	/**登录 code */
	public logincode: string;
	public userInfo: any;

	public init() {
		if(GameConst.web == 1){
			GameLogic.getInstance().init();
		}
		else{
			this.login();
		}
	}

	/**登录 */
	public login() {
		let wx = window["wx"];
		if (wx == null) {
			return;
		}
		wx.login({
			success: (res) => {
				console.log("wxloginsuccess:",res);
				this.logincode = res['code'];
				GameLogic.getInstance().init();
			},
			fail: () => {

			},
			complete: () => {

			},
		});
	}

    /**主动转发 
	 * @param query 转发携带参数 必须是 key1=val1&key2=val2 的格式 用于区分其他用户点开这个分享链接时是否打开排行榜等操作
	*/
	public share(query: string = null) {
		let wx = window["wx"];
		if (wx == null) {
			return;
		}
		this.updateShareMenu(true);
		wx.shareAppMessage({
			title: WxApi.getInstance().shareInfo.share_game_title,
			imageUrl: WxApi.getInstance().shareInfo.share_game_img,
			query: WxApi.getInstance().shareInfo.query
		})
	}
	/**炫耀 */
	public showoff() {
		let wx = window["wx"];
		if (wx == null) {
			return;
		}
		this.updateShareMenu(true);
		wx.shareAppMessage({
			title: PlayerConst.highestScore + "分，不服来战！", //WxApi.getInstance().shareInfo.title,
			imageUrl: WxApi.getInstance().shareInfo.share_group_img,
			query: WxApi.getInstance().shareInfo.query
		})
	}

	public drawBMP(): egret.Bitmap {
		let con = new egret.DisplayObjectContainer();

		var result: egret.Bitmap = new egret.Bitmap();
		var texture: egret.Texture = RES.getRes("over_json.game_over_share");
		result.texture = texture;
		con.addChild(result);

		// let img_head = new eui.Image();
		// img_head.source = WxApi.getInstance().userInfo.avatarUrl;
		// img_head.smoothing = true;
		// img_head.width = img_head.height = 50;
		// img_head.x = (con.width - 50) >> 1;
		// img_head.y = 260;
		// con.addChild(img_head);
		// let circle: egret.Shape = new egret.Shape();
		// circle.graphics.beginFill(0x000000);
		// circle.graphics.drawCircle(0, 0, 25);
		// circle.graphics.endFill();
		// circle.x = (con.width - circle.width) >> 1;
		// circle.y = img_head.y;
		// con.addChild(circle);
		// img_head.mask = circle;

		let lbl_name = new egret.TextField();
		lbl_name.text = WxApi.getInstance().userInfo.nickName;
		lbl_name.width = 200;
		lbl_name.height = 24;
		lbl_name.size = 24;
		lbl_name.textAlign = "center";
		lbl_name.fontFamily = "SimHei";
		lbl_name.x = (con.width - lbl_name.width) >> 1;
		lbl_name.y = 310;
		con.addChild(lbl_name);

		let tf_score = new egret.TextField();
		tf_score.text = PlayerConst.highestScore + "分";
		tf_score.width = 300;
		tf_score.height = 24;
		tf_score.size = 40;
		tf_score.textAlign = "center";
		tf_score.fontFamily = "SimHei";
		tf_score.x = (con.width - tf_score.width) >> 1;
		tf_score.y = 352;
		con.addChild(tf_score);

		let trrrr = new egret.RenderTexture();
		trrrr.drawToTexture(con);

		return new egret.Bitmap(trrrr);
	}

	/**点击别人转发进来的 ，获取shareTicket*/
	private checkShareInfo() {
		console.log("checkShareInfo");

		let wx = window["wx"];
		if (wx == null) {
			return;
		}
		let info = wx.getLaunchOptionsSync();
		console.log("info:", info);

		//如果是从群里点开的
		if (info != null && info.shareTicket != null && info.shareTicket != "") {
			//查看群排行
			if (info.query != null && info.query.grouprank == "1") {
				wx.getShareInfo({
					shareTicket: info.shareTicket,
					success: res => {
						console.log("getShareInfo:success:", res);
						// GameLogic.getInstance().openGroupdRank(info.shareTicket);
					},
					fail: res => {
						console.log("getShareInfo:fail:", res);
					},
					complete: () => {
						console.log("getShareInfo:complete:");
					}
				})
			}
		}

	}

	// 	let shareinfo = {
	// 	share_game_img: setting.share_game_img,
	// 	share_game_title: setting.share_game_title,
	// 	share_group_img: setting.share_group_img,
	// 	share_group_title: setting.share_group_title,
	// 	share_show_img: setting.share_show_img,
	// 	share_show_title: setting.share_show_title,
	// 	query: "",
	// };
	public shareInfo: any;
	/**右上角转发 */
	public showShareMenu(info: any = null) {
		console.log("showShareMenu:", info);

		if (info == null) {
			info = { title: "让你抓耳挠腮，虐你不留情面，来挑战啊", imageUrl: "resource/assets/share.png", query: "" };
		}
		else {
			this.shareInfo = info;
		}
		let wx = window["wx"];
		if (wx == null) {
			return;
		}

		wx.showShareMenu();
		this.onShare();
		this.initRewardVideoAd();
		this.checkShareInfo();
	}

    /**监听用户点击右上角菜单的“转发”按钮时触发的事件
	 * @param query 转发携带参数 必须是 key1=val1&key2=val2 的格式 用于区分其他用户点开这个分享链接时是否打开排行榜等操作
	 */
	private onShare(query: string = "rightup=1") {
		let wx = window["wx"];
		if (wx == null) {
			return;
		}
		this.updateShareMenu(true);

		console.log("onShareAppMessage:", this.shareInfo);
		wx.onShareAppMessage(function () {
			return {
				title: WxApi.getInstance().shareInfo.share_game_title,
				imageUrl: WxApi.getInstance().shareInfo.share_game_img,
				query: WxApi.getInstance().shareInfo.query
			}
		})
	}

	/**转发参数 */
	public updateShareMenu(withShareTicket: boolean) {
		let wx = window["wx"];
		if (wx == null) {
			return;
		}
		console.log("updateShareMenu:withShareTicket:", withShareTicket);

		wx.updateShareMenu({
			withShareTicket: withShareTicket,
			success: res => {
				console.log("updateShareMenu:success:", res);

			},
			fail: res => {
				console.log("updateShareMenu:fail:", res);
			},
			complete: () => {
				console.log("updateShareMenu:complete:");
			}
		})
	}

	/**联系客服 */
	public feedBack() {
		let wx = window["wx"];
		if (wx == null) {
			return;
		}
		wx.openCustomerServiceConversation({
			success: (res) => {
				console.log("success:", res);

			},
			fail: (res) => {
				console.log("fail:", res);

			},
			complete: (res) => {
				console.log("complete:", res);

			}
		});
	}

    /** 对用户托管数据进行写数据操作，允许同时写多组 KV 数据
	 * @param	KVDataList	要修改的 KV 数据列表	
	*/
	public setHigherScore(v: number) {
		//0不计入
		if (v <= 0) {
			return;
		}
		let wx = window["wx"];
		if (wx == null) {
			return;
		}

		let n = PlayerConst.highestScore;
		if (v <= n) {
			return;
		}
		PlayerConst.highestScore = v;
		let KVDataList = [];

		wx.setUserCloudStorage({
			KVDataList: [
				{ key: "newscore", value: v + "" }
			],
			success: res => {
				console.log("setUserCloudStorage:res:", res);
			},
			fail: err => {
				console.log("setUserCloudStorage:error:", err);
			},
			complete: () => {
				console.log("setUserCloudStorage:complete:");
			}
		});


	}

	private bannerAd: any;
	/**banner广告 */
	public showBanner() {
		console.log("系统信息：", wx.getSystemInfoSync())
		if (this.bannerAd == null) {
			let phoneWidth = wx.getSystemInfoSync().screenWidth;    //手机屏幕宽度
			let phoneHeight = wx.getSystemInfoSync().screenHeight;  //手机屏幕高度
			this.bannerAd = wx.createBannerAd({
				adUnitId: 'adunit-465b0f38397b8e3f',
				style: {
					left: 10,
					top: phoneHeight - 100,
					width: phoneWidth - 20,
				}
			})
		}
		if (this.bannerAd != null) {
			this.bannerAd.onLoad(() => {
				console.log('banner 广告加载成功');
			})
			this.bannerAd.show();
		}
	}

	public hideBanner() {
		if (this.bannerAd != null) {
			this.bannerAd.hide();
		}
	}

	/** 预加载激励视频 */
	public initRewardVideoAd() {
		let wx = window["wx"];
		if (wx == null) {
			return;
		}
		this.rewardAd = wx.createRewardedVideoAd({ adUnitId: "adunit-dbf18bd3a9ac0892" })


		this.rewardAd.onLoad(() => {
			console.log('激励视频 广告加载成功')
		})

		this.rewardAd.onError(err => {
			console.log("rewardAderror:", err)
		})

		this.rewardAd.onClose(res => {
			// 用户点击了【关闭广告】按钮
			let state: number;
			// 小于 2.1.0 的基础库版本，res 是一个 undefined
			if (res && res.isEnded || res === undefined) {
				// 正常播放结束，可以下发游戏奖励
				state = 0;
			}
			else {
				// 播放中途退出，不下发游戏奖励
				state = 1;
			}
			this.dispatchGameEvent(GameEvent.REWARDAD_CLOSE_EVENT, state);
		})

	}


	private adtype: number;
	public showRewardAd(type: number) {
		this.adtype = type;

		if (this.rewardAd != null) {
			try {
				this.rewardAd.show()
					.catch(err => {
						console.log("showRewardAd:", err);

						this.dispatchGameEvent(GameEvent.REWARDAD_CLOSE_EVENT, 2);
					})
			}
			catch (e) {
				this.dispatchGameEvent(GameEvent.REWARDAD_CLOSE_EVENT, 2);
			}
		}
		else {
			this.dispatchGameEvent(GameEvent.REWARDAD_CLOSE_EVENT, 2);
		}
	}

	private dispatchGameEvent(eventname: string, data: any) {
		console.log("dispatchGameEvent:", eventname, this.adtype, data);

		let event = new GameEvent(eventname);
		event.data = { type: this.adtype, data: data };
		this.dispatchEvent(event);
	}


	/** --------------------------------------- 本地缓存 ------------------------------------------------------- */

	/**删除存档 */
	public clearSave() {
		wx.removeStorage({
			key: "savegame",
			success: res => {
				console.log("removeStorage:res:", res);
			},
			fail: err => {
				console.log("removeStorage:error:", err);
			},
			complete: () => {
				console.log("removeStorage:complete:");
			}
		})
	}

	/**存档 */
	public save(data) {
		let str: string = JSON.stringify(data);
		console.log("save:", str);

		wx.setStorage({
			key: "savegame",
			data: data,
			success: res => {
				console.log("setStorage:res:", res);
			},
			fail: err => {
				console.log("setStorage:error:", err);
			},
			complete: () => {
				console.log("setStorage:complete:");
			}
		})
	}

	/**读档 */
	public getFile() {
		wx.getStorage({
			key: 'savegame',
			success: function (res) {
				console.log("getStorage:", res, res.data)
			},
			fail: err => {
				console.log("setStorage:error:", err);
			},
			complete: () => {
				console.log("setStorage:complete:");
			}
		});
	}

	/**跳转到其他小程序 */
	public skipToProgram() {
		try {
			wx.navigateToMiniProgram({
				appId: "wx5ccf73a5edb50795",
				extraData: "qiuqiu",
				success: function (res) {
					console.log("navigateToMiniProgram:", res)
				},
				fail: err => {
					console.log("navigateToMiniProgram:error:", err);
				},
				complete: () => {
					console.log("navigateToMiniProgram:complete:");
				}
			});
		}
		catch (e) {
			wx.showToast({
				title: '该功能暂未开放',
				icon: 'none',
				duration: 2000
			})
		}
	}

	/**给开放域发消息 */
	public postToDataContext(data: any) {
		if (wx == null) {
			return;
		}
		wx.getOpenDataContext().postMessage(data);
	}
}