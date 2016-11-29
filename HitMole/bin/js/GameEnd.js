var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
* name;
*/
var GameEnd = (function (_super) {
    __extends(GameEnd, _super);
    function GameEnd() {
        _super.call(this);
        this.restartBtn.on(Laya.Event.CLICK, this, this.restartGame);
    }
    GameEnd.prototype.restartGame = function () {
        this.removeSelf();
        GameMain.gameView.removeSelf();
        Laya.stage.addChild(GameMain.gameStart);
    };
    GameEnd.prototype.setScore = function (score) {
        var data = {};
        var temp = score;
        for (var i = 9; i >= 0; i--) {
            data["item" + i] = { index: Math.floor(temp % 10) };
            temp /= 10;
        }
        this.scoreNums.dataSource = data;
    };
    return GameEnd;
}(ui.GameEndUI));
//# sourceMappingURL=GameEnd.js.map