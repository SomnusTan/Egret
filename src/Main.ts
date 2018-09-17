//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends eui.UILayer {


    protected createChildren(): void {
        super.createChildren();
        if (DeviceUtil.IsWeb) {
            if (DeviceUtil.isMobile) {
                this.stage.orientation = egret.OrientationMode.PORTRAIT;
            } else {
                this.stage.orientation = egret.OrientationMode.AUTO;
            }
        }

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        //inject the custom material parser
        //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());

        this.runGame().catch(e => {
            console.log(e);
        })
    }

    private async runGame() {
        await this.loadResource()
        this.createGameScene();
    }

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            await this.loadTheme();
        }
        catch (e) {
            console.error(e);
        }
    }

    private loadTheme() {
        return new Promise((resolve, reject) => {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            let theme = new eui.Theme("resource/default.thm.json", this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, () => {
                resolve();
            }, this);

        })
    }

    private textfield: egret.TextField;
    private textfield1: egret.TextField;
    private textfield2: egret.TextField;
    /**
     * 创建场景界面
     * Create scene interface
     */
    protected createGameScene(): void {
        Config.stage = this.stage;
        this.textfield = new egret.TextField();
        this.textfield.touchEnabled = true;
        this.textfield.stroke = 1;
        this.textfield.text = "点击播放视频";
        this.addChild(this.textfield);
        this.textfield.once(egret.TouchEvent.TOUCH_TAP, this.onTouchTxt, this);

        this.textfield1 = new egret.TextField();
        this.textfield1.y = 50;
        this.textfield1.touchEnabled = true;
        this.textfield1.stroke = 1;
        this.textfield1.text = "点击横屏播放视频";
        this.addChild(this.textfield1);
        this.textfield1.once(egret.TouchEvent.TOUCH_TAP, this.onTouchTxt1, this);
        // this.stage.once(egret.TouchEvent.TOUCH_TAP, this.onPlayVideo, this);
        this.stage.addEventListener(egret.Event.RESIZE, this.onResizeScreen, this)

        this.textfield2 = new egret.TextField();
        this.textfield2.width = 720;
        this.textfield2.wordWrap = true;
        this.textfield2.multiline = true;
        this.textfield2.y = 100;
        this.textfield2.touchEnabled = true;
        this.textfield2.stroke = 1;
        this.textfield2.text = window.navigator.userAgent;
        this.addChild(this.textfield2);
        // this.stage.once(egret.TouchEvent.TOUCH_TAP, this.onPlayVideo, this);
    }

    private onResizeScreen(e: egret.Event): void {
        console.log("尺寸变换了");
        console.log(this.stage.orientation);
        console.log(window.orientation)
    }

    private onTouchTxt(e: egret.TouchEvent): void {
        Config.txt = this.textfield;
        Video.instance().init("resource/videos/V1.mp4", null, true)
    }

    private onTouchTxt1(e: egret.TouchEvent): void {
        Config.txt = this.textfield1;
        this.textfield1.text = "已经点击了" + DeviceUtil.IsWeb + DeviceUtil.isMobile;
        if (DeviceUtil.IsWeb) {
            if (DeviceUtil.isMobile) {
                this.stage.orientation = egret.OrientationMode.LANDSCAPE;
                this.stage.setContentSize(1280, 720);
            }
            else {
                this.stage.setContentSize(1280, 720);
            }
        }
        e.stopPropagation();
        this.stage.once(egret.TouchEvent.TOUCH_TAP, this.onPlayVideo, this);
    }

    /**
     * 点击按钮
     * Click the button
     */
    private onPlayVideo(e: egret.TouchEvent) {
        Video.instance().init("resource/videos/V0.mp4", null, true)
    }

    private onPlayerComplete(): void {
        console.log("播放完成");
    }
}
