class DeviceUtil {

    /**
     * runtimeType 运行在web上
     */
    public static get IsWeb() {
        return (egret.Capabilities.runtimeType == egret.RuntimeType.WEB);
    }

    /**runtimeType 运行在native上*/
    public static get IsNative() {
        return (egret.Capabilities.runtimeType == egret.RuntimeType.NATIVE);
    }

    /**是否移动端 */
    public static get isMobile() {
        return egret.Capabilities.isMobile;
    }

    /**是否ios系统 */
    public static get IsIos() {
        return (egret.Capabilities.os == "iOS")
    }
    /**是否android系统 */
    public static get IsAndroid() {
        return (egret.Capabilities.os == "Android")
    }

    /**是否UC浏览器 */
    public static get IsUCBrowser() {
        if (this.IsWeb && navigator.userAgent.indexOf('UCBrowser') > -1) {
            return true;
        }
        return false;
    }

    /**是否QQ浏览器 */
    public static get ISQQBrower() {
        if (this.IsWeb && navigator.userAgent.indexOf('qq') > -1) {
            return true;
        }
        return false;
    }

    /**是否ipad */
    public static get IsIpad() {
        if (navigator.userAgent.indexOf("iPad") != -1) {
            return true;
        }
        return false;
    }

    //是否iphoneX
    public static get isIPhoneX() {
        let rate = egret.Capabilities.boundingClientWidth / egret.Capabilities.boundingClientHeight;
        if (rate >= 2) {
            return true;
        }
        return false;
    }
}