var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
* name;
*/
var GameStart = (function (_super) {
    __extends(GameStart, _super);
    function GameStart() {
        _super.call(this);
        this.startBtn.on(Laya.Event.CLICK, this, this.startGame);
    }
    GameStart.prototype.startGame = function () {
        this.removeSelf();
        if (!GameMain.gameView) {
            GameMain.gameView = new GameView();
        }
        GameMain.gameView.gameStart();
        Laya.stage.addChild(GameMain.gameView);
    };
    return GameStart;
}(ui.GameStartUI));
//# sourceMappingURL=GameStart.js.map