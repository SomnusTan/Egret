class MyVideo {
    private static _instance: MyVideo;

    private _video: HTMLElement;

    private _src: string;

    private _completeHandler: any;

    public constructor() {
        this._video = document.getElementById("myVideo");
    }

    public init(src: string, poster: string = "", autoPlay: boolean = true, completeHandler: any = null): void {
        this.pause();
        if (poster != "") {
            this._video["poster"] = poster;
        }
        this._src = src;
        this._video["src"] = src;
        this._video["autoplay"] = autoPlay;
        this._video["onended"] = this.onPlayerComplete;
        this._completeHandler = completeHandler;
        Config.stage.addEventListener(egret.Event.RESIZE, this.onResize, this);
        this.onResize();
    }

    public play(): void {
        if (this._video["paused"] == true) {
            this._video["play"]();
        }
    }

    public pause(): void {
        if (this._video["paused"] == false) {
            this._video["pause"]();
        }
    }

    public dispose(): void {
        this.pause();
        this._src = null;
        this._video["src"] = "";
        this._completeHandler = null;
        Config.stage.removeEventListener(egret.Event.RESIZE, this.onResize, this);
    }

    public get muted(): boolean {
        return this._video["muted"];
    }

    public set muted(value: boolean) {
        this._video["muted"] = value;
    }

    public get src(): string {
        return this._src;
    }

    public get paused(): boolean {
        return this._video["paused"];
    }

    private onResize(e: egret.Event = null): void {
        var clientW: number = document.body.clientWidth;
        var clientH: number = document.body.clientHeight;
        this._video["width"] = clientW;
        this._video["height"] = clientH;
    }

    /**
     * 播放完成
     */
    private onPlayerComplete(): void {
        if (this._completeHandler) {
            this._completeHandler.exec();
        }
    }

    public static instance(): MyVideo {
        if (this._instance == null) {
            this._instance = new MyVideo();
        }
        return this._instance;
    }
}
