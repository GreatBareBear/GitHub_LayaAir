/*
* name;
*/
class Mole {
    private normalState: Laya.Image;
    private hitState: Laya.Image;
    private downY: number;
    private upY: number;
    private scoreImg: Laya.Image;
    private scoreY: number;

    private isActive: boolean;
    private isShow: boolean;
    private isHit: boolean;
    private type: number;
    private hitCallbackHandler: Laya.Handler;

    constructor(normalState: Laya.Image, hitState: Laya.Image, scoreImg: Laya.Image, downY: number, hitCallbackHandler: Laya.Handler) {
        this.normalState = normalState;
        this.hitState = hitState;
        this.downY = downY;
        this.upY = this.normalState.y;
        this.scoreImg = scoreImg;
        this.scoreY = this.scoreImg.y;
        this.hitCallbackHandler = hitCallbackHandler;
        this.reset();
        this.normalState.on(Laya.Event.MOUSE_DOWN, this, this.hit);
    }

    // 重置
    reset(): void {
        this.normalState.visible = false;
        this.hitState.visible = false;
        this.scoreImg.visible = false;
        this.isActive = false;
        this.isShow = false;
        this.isHit = false
    }

    // 显示
    show(): void {
        if (this.isActive) {
            return;
        }
        this.isActive = true;
        this.isShow = true;
        this.type = Math.floor(Math.random() < 0.3 ? 1 : 2);
        this.normalState.skin = "ui/mouse_normal_" + this.type + ".png";
        this.hitState.skin = "ui/mouse_hit_" + this.type + ".png";
        this.scoreImg.skin = "ui/score_" + this.type + ".png";
        this.normalState.y = this.downY;
        this.normalState.visible = true;
        // 缓慢显示
        Laya.Tween.to(this.normalState, { y: this.upY }, 500, Laya.Ease.backOut, Laya.Handler.create(this, this.showComplete));
    }

    // 停留
    showComplete(): void {
        if (this.isShow && !this.isHit) {
            Laya.timer.once(2000, this, this.hide);
        }
    }

    // 消失
    hide(): void {
        if (this.isShow && !this.isHit) { }
        this.isShow = false;
        Laya.Tween.to(this.normalState, { y: this.downY }, 300, Laya.Ease.backIn, Laya.Handler.create(this, this.reset));
    }

    // 受击
    hit(): void {
        if (this.isShow && !this.isHit) {
            this.hitCallbackHandler.runWith(this.type);
            this.isHit = true;
            this.isShow = false;
            Laya.timer.clear(this, this.hide);
            this.normalState.visible = false;
            this.hitState.visible = true;
            Laya.timer.once(500, this, this.reset);
            this.showScore();
        }
    }

    // 显示得分漂字
    showScore(): void {
        this.scoreImg.visible = true;
        this.scoreImg.y = this.scoreY + 30;
        this.scoreImg.scale(0, 0);
        Laya.Tween.to(this.scoreImg, { y: this.scoreY, scaleX: 1, scaleY: 1 }, 300, Laya.Ease.backOut);
    }
}