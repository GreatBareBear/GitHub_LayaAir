var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
* GameView;
*/
var GameView = (function (_super) {
    __extends(GameView, _super);
    function GameView() {
        _super.call(this);
        this.moleNum = 9;
        this.moles = new Array();
        var hitCallbackHandler = Laya.Handler.create(this, this.setScore, null, false);
        for (var i = 0; i < this.moleNum; i++) {
            var box = this.getChildByName("item" + i);
            var mole = new Mole(box.getChildByName("normal"), box.getChildByName("hit"), box.getChildByName("scoreImg"), 22, hitCallbackHandler);
            this.moles.push(mole);
        }
        this.hammer = new Hammer();
        this.hammer.visible = false;
        this.addChild(this.hammer);
    }
    GameView.prototype.onLoop = function () {
        this.timeBar.value -= (1 / 90);
        if (this.timeBar.value <= 0) {
            this.gameOver();
            return;
        }
        var index = Math.floor(Math.random() * this.moleNum);
        this.moles[index].show();
    };
    GameView.prototype.gameStart = function () {
        this.timeBar.value = 1;
        this.score = 0;
        this.updateScoreUI();
        this.hammer.visible = true;
        this.hammer.start();
        Laya.timer.loop(1000, this, this.onLoop);
    };
    GameView.prototype.gameOver = function () {
        Laya.timer.clear(this, this.onLoop);
        this.hammer.visible = false;
        this.hammer.end();
        if (!GameMain.gameEnd) {
            GameMain.gameEnd = new GameEnd();
        }
        GameMain.gameEnd.centerX = 0;
        GameMain.gameEnd.centerY = 40;
        GameMain.gameEnd.setScore(this.score);
        Laya.stage.addChild(GameMain.gameEnd);
        console.log("游戏结束！");
    };
    GameView.prototype.setScore = function (type) {
        this.score += (type == 1 ? -100 : +100);
        if (this.score < 0) {
            this.score = 0;
        }
        this.updateScoreUI();
    };
    GameView.prototype.updateScoreUI = function () {
        var data = {};
        var temp = this.score;
        for (var i = 9; i >= 0; i--) {
            data["item" + i] = { index: Math.floor(temp % 10) };
            temp /= 10;
        }
        this.scoreNums.dataSource = data;
    };
    return GameView;
}(ui.GameUI));
//# sourceMappingURL=GameView.js.map