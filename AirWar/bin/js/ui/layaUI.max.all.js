var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var GameInfoUI = (function (_super) {
        __extends(GameInfoUI, _super);
        function GameInfoUI() {
            _super.call(this);
        }
        GameInfoUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.GameInfoUI.uiView);
        };
        GameInfoUI.uiView = { "type": "View", "props": { "width": 480, "height": 852 }, "child": [{ "type": "Button", "props": { "y": 30, "x": 381, "var": "pauseBtn", "stateNum": "1", "skin": "war/btn_pause.png" } }, { "type": "Label", "props": { "y": 50, "x": 25, "var": "hpLabel", "text": "Hp: 10", "color": "#0fec18" } }, { "type": "Label", "props": { "y": 50, "x": 150, "width": 50, "var": "levelLabel", "text": "Level: 50", "height": 12, "color": "#ece6e5" } }, { "type": "Label", "props": { "y": 50, "x": 270, "var": "scoreLabel", "text": "Score: 100", "color": "#e8e00f" } }, { "type": "Label", "props": { "y": 376.5, "x": 140, "width": 200, "var": "infoLabel", "text": "战斗结束", "height": 99, "fontSize": 30, "color": "#eadede", "align": "center" } }] };
        return GameInfoUI;
    }(View));
    ui.GameInfoUI = GameInfoUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map