class GameUI extends BaseUI{
	public constructor() {
		super("GameSkin");
	}

	private rect_bg:eui.Rect;

	/**适配处理 */
	protected checkFit(){
		this.rect_bg.height = GameLogic.getInstance().GameStage.stageHeight;
	}

	/**初始化数据 */
	protected initData(){
		HttpCommand.getInstance().testGet();
		HttpCommand.getInstance().testPost();
	}

	/**初始化界面 */
	protected initView(){
		
	}

	/**初始化事件 */
	protected initEvent(){
		
	}

	protected clear(){
		super.clear();
	}
}