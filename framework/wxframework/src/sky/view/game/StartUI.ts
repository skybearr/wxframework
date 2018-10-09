class StartUI extends BaseUI{
	public constructor() {
		super("StartSkin");
	}

	private img_bg:eui.Image;
	private btn_start:eui.Button;
	private btn_gm:eui.Label;
	private btn_more:eui.Label;
	private btn_rank:eui.Label;
	private btn_grouprank:eui.Label;
	private btn_share:eui.Label;

	/**适配处理 */
	protected checkFit(){
		this.img_bg.height = GameLogic.getInstance().GameStage.stageHeight;
	}

	/**初始化数据 */
	protected initData(){

	}

	/**初始化界面 */
	protected initView(){
		
	}

	/**初始化事件 */
	protected initEvent(){
		this.btn_start.addEventListener(egret.TouchEvent.TOUCH_TAP,this.clickStart,this);
		this.btn_gm.addEventListener(egret.TouchEvent.TOUCH_TAP,this.clickGM,this);
		this.btn_more.addEventListener(egret.TouchEvent.TOUCH_TAP,this.clickMore,this);
		this.btn_rank.addEventListener(egret.TouchEvent.TOUCH_TAP,this.clickRank,this);
		this.btn_grouprank.addEventListener(egret.TouchEvent.TOUCH_TAP,this.clickGroupRank,this);
		this.btn_share.addEventListener(egret.TouchEvent.TOUCH_TAP,this.clickShare,this);
	}

	private clickStart(){
		GameLogic.getInstance().startGame();
	}

	private clickGM(){
		WxApi.getInstance();
	}

	private clickMore(){
		
	}

	private clickRank(){
		
	}

	private clickGroupRank(){
		
	}

	private clickShare(){
		
	}

	protected clear(){
		super.clear();

		this.btn_start.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.clickStart,this);
		this.btn_gm.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.clickGM,this);
		this.btn_more.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.clickMore,this);
		this.btn_rank.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.clickRank,this);
		this.btn_grouprank.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.clickGroupRank,this);
		this.btn_share.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.clickShare,this);
	}
}