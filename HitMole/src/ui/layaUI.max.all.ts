
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class GameUI extends View {
		public timeBar:Laya.ProgressBar;
		public scoreNums:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":25,"x":25,"skin":"ui/back.png"}},{"type":"Box","props":{"y":189,"x":153,"name":"item0"},"child":[{"type":"Image","props":{"x":7,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":13,"x":8,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":83,"skin":"ui/mask-01.png"}},{"type":"Image","props":{"y":22,"x":64,"width":86,"skin":"ui/score_2.png","name":"scoreImg","height":30,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":190,"x":340,"name":"item1"},"child":[{"type":"Image","props":{"x":7,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":13,"x":8,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":83,"skin":"ui/mask-02.png"}},{"type":"Image","props":{"y":22,"x":64,"width":86,"skin":"ui/score_2.png","name":"scoreImg","height":30,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":193,"x":539,"name":"item2"},"child":[{"type":"Image","props":{"x":7,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":13,"x":8,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":88,"x":1,"skin":"ui/mask-03.png"}},{"type":"Image","props":{"y":22,"x":64,"width":86,"skin":"ui/score_2.png","name":"scoreImg","height":30,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":285,"x":127,"name":"item3"},"child":[{"type":"Image","props":{"x":7,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":13,"x":8,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":82,"x":1,"skin":"ui/mask-04.png"}},{"type":"Image","props":{"y":22,"x":64,"width":86,"skin":"ui/score_2.png","name":"scoreImg","height":30,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":286,"x":346,"name":"item4"},"child":[{"type":"Image","props":{"x":7,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":13,"x":8,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"x":0,"skin":"ui/mask-05.png"}},{"type":"Image","props":{"y":22,"x":64,"width":86,"skin":"ui/score_2.png","name":"scoreImg","height":30,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":285,"x":543,"name":"item5"},"child":[{"type":"Image","props":{"x":7,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":13,"x":8,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":83,"skin":"ui/mask-06.png"}},{"type":"Image","props":{"y":22,"x":64,"width":86,"skin":"ui/score_2.png","name":"scoreImg","height":30,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":382,"x":122,"name":"item6"},"child":[{"type":"Image","props":{"x":7,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":13,"x":8,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":83,"skin":"ui/mask-07.png"}},{"type":"Image","props":{"y":22,"x":64,"width":86,"skin":"ui/score_2.png","name":"scoreImg","height":30,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":388,"x":345,"name":"item7"},"child":[{"type":"Image","props":{"x":7,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":13,"x":8,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":83,"skin":"ui/mask-08.png"}},{"type":"Image","props":{"y":22,"x":64,"width":86,"skin":"ui/score_2.png","name":"scoreImg","height":30,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":388,"x":566,"name":"item8"},"child":[{"type":"Image","props":{"x":7,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":13,"x":8,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"x":0,"skin":"ui/mask-09.png"}},{"type":"Image","props":{"y":22,"x":64,"width":86,"skin":"ui/score_2.png","name":"scoreImg","height":30,"anchorY":0.5,"anchorX":0.5}}]},{"type":"ProgressBar","props":{"y":7,"x":6,"var":"timeBar","value":1,"skin":"ui/progress_time.png"}},{"type":"Box","props":{"y":36,"x":9,"var":"scoreNums"},"child":[{"type":"Clip","props":{"skin":"ui/clip_number.png","name":"item0","clipY":1,"clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":18,"skin":"ui/clip_number.png","name":"item1","clipY":1,"clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":36,"skin":"ui/clip_number.png","name":"item2","clipY":1,"clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":54,"skin":"ui/clip_number.png","name":"item3","clipY":1,"clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":72,"skin":"ui/clip_number.png","name":"item4","clipY":1,"clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":90,"skin":"ui/clip_number.png","name":"item5","clipY":1,"clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":108,"skin":"ui/clip_number.png","name":"item6","clipY":1,"clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":126,"skin":"ui/clip_number.png","name":"item7","clipY":1,"clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":144,"skin":"ui/clip_number.png","name":"item8","clipY":1,"clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":162,"skin":"ui/clip_number.png","name":"item9","clipY":1,"clipX":10,"autoPlay":false}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameUI.uiView);
        }
    }
}

module ui {
    export class GameEndUI extends View {
		public restartBtn:Laya.Button;
		public scoreNums:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":500,"height":400},"child":[{"type":"Image","props":{"y":0,"x":0,"width":500,"skin":"ui/overBg.png","sizeGrid":"11,13,11,11","height":400}},{"type":"Image","props":{"y":30,"x":28,"skin":"ui/total Score.png"}},{"type":"Button","props":{"y":300,"x":161,"var":"restartBtn","stateNum":"2","skin":"ui/btn_restart.png"}},{"type":"Box","props":{"y":188,"x":160,"var":"scoreNums"},"child":[{"type":"Clip","props":{"skin":"ui/clip_number.png","name":"item0","clipY":1,"clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":18,"skin":"ui/clip_number.png","name":"item1","clipY":1,"clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":36,"skin":"ui/clip_number.png","name":"item2","clipY":1,"clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":54,"skin":"ui/clip_number.png","name":"item3","clipY":1,"clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":72,"skin":"ui/clip_number.png","name":"item4","clipY":1,"clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":90,"skin":"ui/clip_number.png","name":"item5","clipY":1,"clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":108,"skin":"ui/clip_number.png","name":"item6","clipY":1,"clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":126,"skin":"ui/clip_number.png","name":"item7","clipY":1,"clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":144,"skin":"ui/clip_number.png","name":"item8","clipY":1,"clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":162,"skin":"ui/clip_number.png","name":"item9","clipY":1,"clipX":10,"autoPlay":false}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameEndUI.uiView);
        }
    }
}

module ui {
    export class GameStartUI extends View {
		public startBtn:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":55.5,"x":38.5,"skin":"ui/help.png"}},{"type":"Button","props":{"y":444,"x":311,"var":"startBtn","stateNum":"2","skin":"ui/btn_start.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameStartUI.uiView);
        }
    }
}

module ui {
    export class HammerUI extends View {
		public hit:Laya.FrameClip;

        public static  uiView:any ={"type":"View","props":{"width":100,"height":100},"child":[{"type":"Image","props":{"y":63,"x":61,"width":98,"skin":"ui/hammer.png","rotation":20,"pivotY":50,"pivotX":56,"height":77},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"y":[{"value":60,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":0}],"x":[{"value":64,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0},{"value":62,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":1},{"value":64,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":5}],"rotation":[{"value":20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":0},{"value":-20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":1},{"value":20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":5}]}}],"name":"hit","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.HammerUI.uiView);
        }
    }
}
