/**
 * 视频类
 * 使用Html原生Video标签播放视频
 */
class Video {

    private static _instance: Video;

    private _video: HTMLElement;
    private _src: string;
    private _completeHandler: any;

    private _isInit: boolean;

    private _maskSp: egret.Shape;
    /**自动播放 */
    private _autoPlay: boolean;

    public static BOTTOM: string = "bottom";
    public static TOP: string = "top";

    public constructor() {
        this._video = document.getElementById("myVideo");
        this._video["obj"] = this;
        this._video.style.visibility = "hidden";
    }

    public init(src: string, poster: string = "", autoPlay: boolean = true, completeHandler: any = null, layerType: string = ""): void {
        if (this._src)
            this.pause();
        console.log('播放视频:' + src);
        this._video.style.visibility = "visible";
        // if (poster == "") {
        //     poster = ResPathUtil.getCommonImageRes("imgAlpha");
        // }

        // if (this._maskSp == null) {
        //     this._maskSp = new egret.Shape();
        // }
        // this._maskSp.alpha = 1;
        // Config.stage.addChild(this._maskSp);

        // if (layerType == Video.TOP) {
        //     App.layer.showVideoLayer(true);
        // }
        this._isInit = false;
        // this._video["poster"] = poster;
        this._src = src;
        this._video["src"] = src;
        this._autoPlay = autoPlay;
        this._video.addEventListener("canplaythrough", this.onCanPlayVideo);
        if (completeHandler) {
            this._video.addEventListener("ended", this.onPlayerComplete);
        }
        // this._completeHandler = completeHandler;
        Config.stage.addEventListener(egret.Event.RESIZE, this.onResize, this);
        this.onResize();
    }

    public play(): void {
        if (this.paused == true) {
            this._video["play"]();
        }
    }

    public pause(): void {
        if (this.paused == false) {
            this._video["pause"]();
        }
    }
    /** 是否正在播放 */
    public isPlaying(): boolean {
        return !this.paused;
    }

    public dispose(): void {
        this._video.style.visibility = "hidden";
        // App.layer.showVideoLayer(false);
        // PanelOpenManager.removePanel(EnumPanelID.VIDEO_BUTTON);
        this._video.removeEventListener("ended", this.onPlayerComplete);
        this._video.removeEventListener("canplaythrough", this.onCanPlayVideo);
        this.pause();
        // if (this._maskSp)
        // this._maskSp.remove();
        this._isInit = false;
        this._src = null;
        this._video["src"] = "";
        this._video["poster"] = "";
        this.loop = false;
        this.muted = false;
        // this._completeHandler = null;
        Config.stage.removeEventListener(egret.Event.RESIZE, this.onResize, this);
    }

    /**
     * 是否循环播放
     */
    public get loop(): boolean {
        return this._video["loop"];
    }

    public set loop(value: boolean) {
        this._video["loop"] = value;
    }
    /** 
     * 是否静音
     */
    public get muted(): boolean {
        return this._video["muted"];
    }

    public set muted(value: boolean) {
        this._video["muted"] = value;
    }

    /**
     * 视频流是否初始化好,可播放
     */
    public get isInit(): boolean {
        return this._isInit;
    }

    public get src(): string {
        return this._src;
    }

    public get paused(): boolean {
        return this._video["paused"];
    }

    /**播放完成回调 */
    public get completeHandler(): any {
        return this._completeHandler;
    }

    private hideMaskSp(): void {
        // egret.Tween.get(this._maskSp).to({ alpha: 0 }, 500).call(() => {
        //     this._maskSp.remove();
        // })
    }

    private onResize(e: egret.Event = null): void {

        if (DeviceUtil.IsWeb) {
            var clientW: number = document.body.clientWidth;
            var clientH: number = document.body.clientHeight;
            if (DeviceUtil.isMobile && Config.stage.orientation == egret.OrientationMode.LANDSCAPE) {
                // this._video.style.transform = "scale("+window.innerWidth/window.innerHeight+")"
                this._video.style.transform = "rotate(90deg) translate(" + ((clientH - clientW) / 2) + "px," + ((clientH - clientW) / 2) + "px)";
                this._video.style.webkitTransform = "rotate(90deg) translate(" + ((clientH - clientW) / 2) + "px," + ((clientH - clientW) / 2) + "px)";
                this._video.style.width = clientH + "px";
                this._video.style.height = clientW + "px";
                this._video.style.transformOrigin = "center center";
                this._video.style.webkitTransformOrigin = "center center";
                // this._video["width"] = clientH;
                // this._video["height"] = clientW;
                Config.txt.text = clientW + "," + clientH + "  " + window.innerWidth + "," + window.innerHeight;
            }
            else {
                this._video["width"] = clientW;
                this._video["height"] = clientH;
            }
        }
        // if (Config.orientation == egret.OrientationMode.AUTO) {
        //     this._video.style.transform = "";
        // }
        // else {
        //     var tempW: number = 1280 / 720 * clientH;
        //     var videoScale: number = clientW / tempW;
        //     var scale: number = tempW / clientH * videoScale;
        //     this._video.style.transform = "rotate(-90deg) scale(" + scale + ")";
        // }
        // if (this._maskSp.parent && (this._maskSp.width != Config.SCREEN_WIDTH || this._maskSp.height != Config.SCREEN_HEIGHT)) {
        //     this._maskSp.graphics.clear();
        //     this._maskSp.graphics.beginFill(0);
        //     this._maskSp.graphics.drawRect(0, 0, Config.SCREEN_WIDTH, Config.SCREEN_HEIGHT);
        //     this._maskSp.graphics.endFill();
        // }
        // GameLog.log(clientW,clientH);
    }

    private onCanPlayVideo(): void {
        var temp: any = this["obj"];
        if (temp) {
            if (temp._autoPlay)
                temp.play();
            temp._isInit = true;
            temp.hideMaskSp();
        }
    }

    /**
    * 播放完成
    */
    private onPlayerComplete(): void {
        var temp: any = this["obj"];
        if (temp && temp._completeHandler) {
            temp._completeHandler.exec();
        }
    }

    public static instance(): Video {
        if (this._instance == null) {
            this._instance = new Video();
        }
        return this._instance;
    }
}