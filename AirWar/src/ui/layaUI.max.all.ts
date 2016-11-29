
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class GameInfoUI extends View {
		public pauseBtn:Laya.Button;
		public hpLabel:Laya.Label;
		public levelLabel:Laya.Label;
		public scoreLabel:Laya.Label;
		public infoLabel:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":480,"height":852},"child":[{"type":"Button","props":{"y":30,"x":381,"var":"pauseBtn","stateNum":"1","skin":"war/btn_pause.png"}},{"type":"Label","props":{"y":50,"x":25,"var":"hpLabel","text":"Hp: 10","color":"#0fec18"}},{"type":"Label","props":{"y":50,"x":150,"width":50,"var":"levelLabel","text":"Level: 50","height":12,"color":"#ece6e5"}},{"type":"Label","props":{"y":50,"x":270,"var":"scoreLabel","text":"Score: 100","color":"#e8e00f"}},{"type":"Label","props":{"y":376.5,"x":140,"width":200,"var":"infoLabel","text":"战斗结束","height":99,"fontSize":30,"color":"#eadede","align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameInfoUI.uiView);
        }
    }
}
