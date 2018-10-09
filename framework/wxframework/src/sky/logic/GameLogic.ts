class GameLogic extends egret.EventDispatcher {
	public constructor() {
		super();
	}

	private static _instance: GameLogic;
	public static getInstance(): GameLogic {
		if (this._instance == null) {
			this._instance = new GameLogic();
		}
		return this._instance;
	}


	public GameStage: egret.Stage;
	public main: eui.UILayer;


	public init(){
		
		this.openStart();
	}

	public openStart(){
		this.main.removeChildren();
		this.main.addChild(new StartUI());
	}

	public startGame(){
		this.main.removeChildren();
		this.main.addChild(new GameUI());
	}
}