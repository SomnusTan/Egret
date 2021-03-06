window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml"};generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/assets/base/module/activies/GameActivitiesViewSkin.exml'] = window.GameActivitiesViewSkin = (function (_super) {
	__extends(GameActivitiesViewSkin, _super);
	function GameActivitiesViewSkin() {
		_super.call(this);
		this.skinParts = ["boxItem"];
		
		this.height = 300;
		this.width = 582;
		this.elementsContent = [this._Scroller1_i()];
	}
	var _proto = GameActivitiesViewSkin.prototype;

	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.percentHeight = 100;
		t.skinName = "skins.ScrollerSkin";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.viewport = this.boxItem_i();
		return t;
	};
	_proto.boxItem_i = function () {
		var t = new eui.Group();
		this.boxItem = t;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 25;
		return t;
	};
	return GameActivitiesViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay","textTemp"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i(),this.textTemp_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0x000000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",2,"textTemp")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",2,"textTemp")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.bottom = "8";
		t.fontFamily = "fzyc";
		t.left = "10";
		t.right = "10";
		t.size = 26;
		t.textColor = 0x000000;
		t.top = "8";
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.bottom = 8;
		t.fontFamily = "fzyc";
		t.left = 10;
		t.right = 10;
		t.size = 26;
		t.textColor = 0x9aa7c5;
		t.top = 8;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		return t;
	};
	_proto.textTemp_i = function () {
		var t = new eui.Label();
		this.textTemp = t;
		t.bottom = 8;
		t.fontFamily = "fzyc";
		t.left = 10;
		t.right = 10;
		t.size = 26;
		t.textColor = 0x000000;
		t.top = 8;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.visible = false;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/assets/base/module/login/button/Button5Skin.exml'] = window.Button5Skin = (function (_super) {
	__extends(Button5Skin, _super);
	function Button5Skin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
	}
	var _proto = Button5Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(107,8,30,46);
		t.source = "common_v1_button4_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "fzyc";
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "绑定手机";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -1;
		return t;
	};
	return Button5Skin;
})(eui.Skin);generateEUI.paths['resource/assets/base/module/activies/GameGiftKeyViewSkin.exml'] = window.GameGiftKeyViewSkin = (function (_super) {
	__extends(GameGiftKeyViewSkin, _super);
	function GameGiftKeyViewSkin() {
		_super.call(this);
		this.skinParts = ["imgShareBg","txtKey","btnOK"];
		
		this.width = 641;
		this.elementsContent = [this.imgShareBg_i(),this._Label1_i(),this._Group1_i(),this.btnOK_i()];
	}
	var _proto = GameGiftKeyViewSkin.prototype;

	_proto.imgShareBg_i = function () {
		var t = new eui.Image();
		this.imgShareBg = t;
		t.height = 315;
		t.scale9Grid = new egret.Rectangle(79,85,480,114);
		t.source = "gameshare_border_png";
		t.width = 641;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 26;
		t.text = "填写兑换码：";
		t.textColor = 0x666666;
		t.x = 51;
		t.y = 96;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 51;
		t.y = 134.5;
		t.elementsContent = [this._Image1_i(),this.txtKey_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 66;
		t.scale9Grid = new egret.Rectangle(16,14,65,49);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "common_v1_json.common_v1_bg2_png";
		t.width = 547;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.txtKey_i = function () {
		var t = new eui.TextInput();
		this.txtKey = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 51;
		t.prompt = "请输入兑换码";
		t.skinName = "skins.TextInputSkin";
		t.verticalCenter = 0.5;
		t.width = 527;
		t.x = 10;
		return t;
	};
	_proto.btnOK_i = function () {
		var t = new eui.Button();
		this.btnOK = t;
		t.label = "兑换";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "Button5Skin";
		t.x = 224;
		t.y = 331;
		return t;
	};
	return GameGiftKeyViewSkin;
})(eui.Skin);generateEUI.paths['resource/assets/base/module/login/button/Button2Skin.exml'] = window.Button2Skin = (function (_super) {
	__extends(Button2Skin, _super);
	function Button2Skin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
	}
	var _proto = Button2Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(34,13,90,35);
		t.source = "common_v1_json.common_v1_button1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "fzyc";
		t.horizontalCenter = 0.5;
		t.size = 22;
		t.text = "绑定手机";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -2.5;
		return t;
	};
	return Button2Skin;
})(eui.Skin);generateEUI.paths['resource/assets/base/module/activies/GameInviteViewSkin.exml'] = window.GameInviteViewSkin = (function (_super) {
	__extends(GameInviteViewSkin, _super);
	function GameInviteViewSkin() {
		_super.call(this);
		this.skinParts = ["txtTotalCoin","txtPeopleCount","txtMyInviteCode","btnCopy","txtInviteCode","btnBind","boxInvite","boxInputInvite","boxHasBinded","txtCoin0","txtCoin1","txtCoin2","btnOK"];
		
		this.elementsContent = [this._Group1_i(),this._Group2_i(),this.boxInputInvite_i(),this.boxHasBinded_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this.btnOK_i()];
	}
	var _proto = GameInviteViewSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 30;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Label1_i(),this.txtTotalCoin_i(),this._Label2_i(),this.txtPeopleCount_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "charge_coin";
		t.x = 176;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 26;
		t.text = "已收益心动币：";
		t.textColor = 0x666666;
		t.x = 0;
		t.y = 4;
		return t;
	};
	_proto.txtTotalCoin_i = function () {
		var t = new eui.Label();
		this.txtTotalCoin = t;
		t.size = 26;
		t.text = "x0";
		t.textColor = 0xff2876;
		t.x = 211;
		t.y = 4;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 26;
		t.text = "已邀请人数：";
		t.textColor = 0x666666;
		t.x = 369.2;
		t.y = 4;
		return t;
	};
	_proto.txtPeopleCount_i = function () {
		var t = new eui.Label();
		this.txtPeopleCount = t;
		t.size = 26;
		t.text = "0";
		t.textColor = 0xFF2876;
		t.x = 520.2;
		t.y = 4;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 30;
		t.y = 50;
		t.elementsContent = [this.txtMyInviteCode_i(),this.btnCopy_i(),this._Label3_i()];
		return t;
	};
	_proto.txtMyInviteCode_i = function () {
		var t = new eui.Label();
		this.txtMyInviteCode = t;
		t.size = 26;
		t.text = "0000-0000-0000";
		t.textColor = 0x333333;
		t.verticalCenter = 0;
		t.x = 151;
		return t;
	};
	_proto.btnCopy_i = function () {
		var t = new eui.Button();
		this.btnCopy = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.label = "复制";
		t.skinName = "Button2Skin";
		t.width = 120;
		t.x = 444;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "我的招待码：";
		t.textColor = 0x666666;
		t.y = 21;
		return t;
	};
	_proto.boxInputInvite_i = function () {
		var t = new eui.Group();
		this.boxInputInvite = t;
		t.x = 30;
		t.y = 151;
		t.elementsContent = [this._Label4_i(),this.boxInvite_i()];
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.size = 26;
		t.text = "填写招待人：";
		t.textColor = 0x666666;
		t.x = 0;
		t.y = 21;
		return t;
	};
	_proto.boxInvite_i = function () {
		var t = new eui.Group();
		this.boxInvite = t;
		t.x = 149;
		t.y = 0;
		t.elementsContent = [this._Image2_i(),this.txtInviteCode_i(),this.btnBind_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 66;
		t.scale9Grid = new egret.Rectangle(16,14,65,49);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "common_v1_json.common_v1_bg2_png";
		t.width = 241;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.txtInviteCode_i = function () {
		var t = new eui.TextInput();
		this.txtInviteCode = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 51;
		t.prompt = "请输入招待码";
		t.skinName = "skins.TextInputSkin";
		t.verticalCenter = 0.5;
		t.width = 222;
		t.x = 10;
		return t;
	};
	_proto.btnBind_i = function () {
		var t = new eui.Button();
		this.btnBind = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.label = "绑定";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "Button2Skin";
		t.width = 120;
		t.x = 295;
		return t;
	};
	_proto.boxHasBinded_i = function () {
		var t = new eui.Group();
		this.boxHasBinded = t;
		t.x = 230;
		t.y = 120;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "activities_img_gift";
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "activities_img_word";
		t.x = 258;
		t.y = 22;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 30;
		t.y = 257;
		t.elementsContent = [this._Image5_i(),this.txtCoin0_i(),this._Label5_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "charge_coin";
		t.x = 215;
		t.y = 0;
		return t;
	};
	_proto.txtCoin0_i = function () {
		var t = new eui.Label();
		this.txtCoin0 = t;
		t.size = 26;
		t.text = "x500";
		t.textColor = 0xFF2876;
		t.x = 250;
		t.y = 3;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.size = 26;
		t.text = "接受招待立即获得";
		t.textColor = 0x666666;
		t.x = 0;
		t.y = 3;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.x = 30;
		t.y = 294;
		t.elementsContent = [this._Image6_i(),this.txtCoin1_i(),this._Label6_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "charge_coin";
		t.x = 318;
		t.y = 0;
		return t;
	};
	_proto.txtCoin1_i = function () {
		var t = new eui.Label();
		this.txtCoin1 = t;
		t.size = 26;
		t.text = "x50";
		t.textColor = 0xFF2876;
		t.x = 353;
		t.y = 2;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.size = 26;
		t.text = "每成功招待一个新玩家获得";
		t.textColor = 0x666666;
		t.x = 0;
		t.y = 2;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.x = 30;
		t.y = 330;
		t.elementsContent = [this._Label7_i(),this._Image7_i(),this.txtCoin2_i()];
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.lineSpacing = 5;
		t.size = 26;
		t.text = "每成功招待一个在《纯情房东俏房客》中至少打出两个不同结局的玩家，可获得";
		t.textColor = 0x666666;
		t.width = 579;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "charge_coin";
		t.x = 350;
		t.y = 30;
		return t;
	};
	_proto.txtCoin2_i = function () {
		var t = new eui.Label();
		this.txtCoin2 = t;
		t.size = 26;
		t.text = "x500";
		t.textColor = 0xFF2876;
		t.x = 385;
		t.y = 32;
		return t;
	};
	_proto.btnOK_i = function () {
		var t = new eui.Button();
		this.btnOK = t;
		t.label = "确定";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "Button5Skin";
		t.x = 224;
		t.y = 414;
		return t;
	};
	return GameInviteViewSkin;
})(eui.Skin);generateEUI.paths['resource/assets/base/module/component/BaseButtonSkin.exml'] = window.BaseButtonSkin = (function (_super) {
	__extends(BaseButtonSkin, _super);
	function BaseButtonSkin() {
		_super.call(this);
		this.skinParts = ["img_disabled","img_down","img_up","labelDisplay"];
		
		this.elementsContent = [this.labelDisplay_i()];
		this.img_disabled_i();
		
		this.img_down_i();
		
		this.img_up_i();
		
		this.states = [
			new eui.State ("up",
				[
					new eui.AddItems("img_up","",2,"labelDisplay")
				])
			,
			new eui.State ("down",
				[
					new eui.AddItems("img_down","",2,"labelDisplay"),
					new eui.SetProperty("labelDisplay","textColor",0xFFFF00)
				])
			,
			new eui.State ("disabled",
				[
					new eui.AddItems("img_disabled","",0,"")
				])
		];
	}
	var _proto = BaseButtonSkin.prototype;

	_proto.img_disabled_i = function () {
		var t = new eui.Image();
		this.img_disabled = t;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		return t;
	};
	_proto.img_down_i = function () {
		var t = new eui.Image();
		this.img_down = t;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		return t;
	};
	_proto.img_up_i = function () {
		var t = new eui.Image();
		this.img_up = t;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 28;
		t.text = "1";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return BaseButtonSkin;
})(eui.Skin);generateEUI.paths['resource/assets/base/module/bename/BenameSkin.exml'] = window.BenameSkin = (function (_super) {
	__extends(BenameSkin, _super);
	function BenameSkin() {
		_super.call(this);
		this.skinParts = ["btnName","imgBg","txtName","btnRandom"];
		
		this.height = 270;
		this.width = 561;
		this.elementsContent = [this.btnName_i(),this._Group1_i()];
	}
	var _proto = BenameSkin.prototype;

	_proto.btnName_i = function () {
		var t = new eui.Button();
		this.btnName = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.label = "确定";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "BaseButtonSkin";
		t.y = 225;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.imgBg_i(),this.txtName_i(),this.btnRandom_i()];
		return t;
	};
	_proto.imgBg_i = function () {
		var t = new eui.Image();
		this.imgBg = t;
		t.source = "";
		t.x = 0;
		t.y = 35;
		return t;
	};
	_proto.txtName_i = function () {
		var t = new eui.TextInput();
		this.txtName = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 83;
		t.maxChars = 5;
		t.prompt = "请输入文字";
		t.skinName = "skins.TextInputSkin";
		t.textColor = 0xffffff;
		t.width = 369;
		t.x = 115.5;
		t.y = 44;
		return t;
	};
	_proto.btnRandom_i = function () {
		var t = new eui.Button();
		this.btnRandom = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "BaseButtonSkin";
		t.x = 476;
		t.y = 60;
		return t;
	};
	return BenameSkin;
})(eui.Skin);generateEUI.paths['resource/assets/base/module/charge/GameChargeItemSkin.exml'] = window.GameChargeItemSkin = (function (_super) {
	__extends(GameChargeItemSkin, _super);
	function GameChargeItemSkin() {
		_super.call(this);
		this.skinParts = ["imgItem","txtItem","txtPrice"];
		
		this.height = 214;
		this.width = 184;
		this.elementsContent = [this._Image1_i(),this.imgItem_i(),this._Image2_i(),this.txtItem_i(),this.txtPrice_i()];
	}
	var _proto = GameChargeItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "charge_bg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.imgItem_i = function () {
		var t = new eui.Image();
		this.imgItem = t;
		t.source = "charge_item_0";
		t.x = 4;
		t.y = 4;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "charge_coin";
		t.x = 51;
		t.y = 139;
		return t;
	};
	_proto.txtItem_i = function () {
		var t = new eui.Label();
		this.txtItem = t;
		t.size = 22;
		t.stroke = 2;
		t.strokeColor = 0x6fa5f3;
		t.text = "x600";
		t.x = 86;
		t.y = 144;
		return t;
	};
	_proto.txtPrice_i = function () {
		var t = new eui.Label();
		this.txtPrice = t;
		t.horizontalCenter = 0;
		t.size = 26;
		t.strokeColor = 0x000000;
		t.text = "￥ 6";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.y = 177;
		return t;
	};
	return GameChargeItemSkin;
})(eui.Skin);generateEUI.paths['resource/assets/base/module/charge/GameChargeViewSkin.exml'] = window.GameChargeViewSkin = (function (_super) {
	__extends(GameChargeViewSkin, _super);
	var GameChargeViewSkin$Skin1 = 	(function (_super) {
		__extends(GameChargeViewSkin$Skin1, _super);
		function GameChargeViewSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameChargeViewSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "common_v1_button4_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameChargeViewSkin$Skin1;
	})(eui.Skin);

	function GameChargeViewSkin() {
		_super.call(this);
		this.skinParts = ["boxItem","imgSelected","btnBuy"];
		
		this.width = 646;
		this.elementsContent = [this.boxItem_i(),this.imgSelected_i(),this.btnBuy_i()];
	}
	var _proto = GameChargeViewSkin.prototype;

	_proto.boxItem_i = function () {
		var t = new eui.Group();
		this.boxItem = t;
		t.touchChildren = true;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalAlign = "left";
		t.horizontalGap = 20;
		t.orientation = "rows";
		t.requestedColumnCount = 3;
		t.verticalAlign = "top";
		t.verticalGap = 15;
		return t;
	};
	_proto.imgSelected_i = function () {
		var t = new eui.Image();
		this.imgSelected = t;
		t.source = "charge_img_selected";
		return t;
	};
	_proto.btnBuy_i = function () {
		var t = new eui.Button();
		this.btnBuy = t;
		t.label = "购买";
		t.x = 198;
		t.y = 464;
		t.skinName = GameChargeViewSkin$Skin1;
		return t;
	};
	return GameChargeViewSkin;
})(eui.Skin);generateEUI.paths['resource/assets/base/module/charge/GameCoinSkin.exml'] = window.GameCoinSkin = (function (_super) {
	__extends(GameCoinSkin, _super);
	var GameCoinSkin$Skin2 = 	(function (_super) {
		__extends(GameCoinSkin$Skin2, _super);
		function GameCoinSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameCoinSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "gamehall_coin";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameCoinSkin$Skin2;
	})(eui.Skin);

	function GameCoinSkin() {
		_super.call(this);
		this.skinParts = ["fontCoin","btnCoin"];
		
		this.elementsContent = [this._Image1_i(),this.fontCoin_i(),this.btnCoin_i()];
	}
	var _proto = GameCoinSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(39,8,146,55);
		t.source = "gamehall_coinBg";
		t.percentWidth = 100;
		t.x = 0;
		return t;
	};
	_proto.fontCoin_i = function () {
		var t = new eui.BitmapLabel();
		this.fontCoin = t;
		t.font = "font_coin_fnt";
		t.letterSpacing = -2;
		t.right = 19;
		t.text = "0";
		t.x = 96;
		t.y = 18;
		return t;
	};
	_proto.btnCoin_i = function () {
		var t = new eui.Button();
		this.btnCoin = t;
		t.anchorOffsetX = 37;
		t.anchorOffsetY = 35;
		t.label = "";
		t.left = 19;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.x = 19;
		t.y = 32;
		t.skinName = GameCoinSkin$Skin2;
		return t;
	};
	return GameCoinSkin;
})(eui.Skin);generateEUI.paths['resource/assets/base/module/choosepay/ChoosePaySkin.exml'] = window.ChoosePaySkin = (function (_super) {
	__extends(ChoosePaySkin, _super);
	var ChoosePaySkin$Skin3 = 	(function (_super) {
		__extends(ChoosePaySkin$Skin3, _super);
		function ChoosePaySkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ChoosePaySkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "choosepay_weixin_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ChoosePaySkin$Skin3;
	})(eui.Skin);

	var ChoosePaySkin$Skin4 = 	(function (_super) {
		__extends(ChoosePaySkin$Skin4, _super);
		function ChoosePaySkin$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ChoosePaySkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "choosepay_zhifubao_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ChoosePaySkin$Skin4;
	})(eui.Skin);

	var ChoosePaySkin$Skin5 = 	(function (_super) {
		__extends(ChoosePaySkin$Skin5, _super);
		function ChoosePaySkin$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ChoosePaySkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "choosepay_close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ChoosePaySkin$Skin5;
	})(eui.Skin);

	function ChoosePaySkin() {
		_super.call(this);
		this.skinParts = ["txtTitle","txt_money","btn_wx","btn_zfb","btn_close"];
		
		this.elementsContent = [this._Image1_i(),this.txtTitle_i(),this._Label1_i(),this.txt_money_i(),this._Label2_i(),this.btn_wx_i(),this.btn_zfb_i(),this.btn_close_i()];
	}
	var _proto = ChoosePaySkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 480;
		t.scale9Grid = new egret.Rectangle(82,84,494,31);
		t.source = "choosepay_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.txtTitle_i = function () {
		var t = new eui.Label();
		this.txtTitle = t;
		t.fontFamily = "fzyc";
		t.horizontalCenter = 0;
		t.size = 34;
		t.text = "订单支付";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 21;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.size = 46;
		t.text = "￥:";
		t.textAlign = "center";
		t.textColor = 0x333333;
		t.verticalAlign = "middle";
		t.x = 264;
		t.y = 140;
		return t;
	};
	_proto.txt_money_i = function () {
		var t = new eui.Label();
		this.txt_money = t;
		t.bold = true;
		t.fontFamily = "fzyc";
		t.size = 40;
		t.text = "52.0";
		t.textAlign = "center";
		t.textColor = 0xff7d4a;
		t.verticalAlign = "middle";
		t.x = 333;
		t.y = 146;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "确认无误后，请选择支付方式进入";
		t.textAlign = "center";
		t.textColor = 0xb1b1b1;
		t.verticalAlign = "middle";
		t.y = 250;
		return t;
	};
	_proto.btn_wx_i = function () {
		var t = new eui.Button();
		this.btn_wx = t;
		t.label = "";
		t.left = 30;
		t.y = 310;
		t.skinName = ChoosePaySkin$Skin3;
		return t;
	};
	_proto.btn_zfb_i = function () {
		var t = new eui.Button();
		this.btn_zfb = t;
		t.label = "";
		t.right = 30;
		t.y = 310;
		t.skinName = ChoosePaySkin$Skin4;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Button();
		this.btn_close = t;
		t.label = "";
		t.x = 606;
		t.y = 23;
		t.skinName = ChoosePaySkin$Skin5;
		return t;
	};
	return ChoosePaySkin;
})(eui.Skin);generateEUI.paths['resource/assets/base/module/common/Alert2Skin.exml'] = window.Alert2Skin = (function (_super) {
	__extends(Alert2Skin, _super);
	var Alert2Skin$Skin6 = 	(function (_super) {
		__extends(Alert2Skin$Skin6, _super);
		function Alert2Skin$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Alert2Skin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bag2_lvseanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "bag2_quxiao_png";
			t.y = 21;
			return t;
		};
		return Alert2Skin$Skin6;
	})(eui.Skin);

	var Alert2Skin$Skin7 = 	(function (_super) {
		__extends(Alert2Skin$Skin7, _super);
		function Alert2Skin$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Alert2Skin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "work2_anniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0.5;
			t.source = "bag2_queding_png";
			t.y = 20;
			return t;
		};
		return Alert2Skin$Skin7;
	})(eui.Skin);

	function Alert2Skin() {
		_super.call(this);
		this.skinParts = ["txtDesc","btnCancel","btnConfirm","txtTitle"];
		
		this.width = 565;
		this.elementsContent = [this._Image1_i(),this.txtDesc_i(),this.btnCancel_i(),this.btnConfirm_i(),this.txtTitle_i()];
	}
	var _proto = Alert2Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "youjian_biaoti_png";
		t.y = 0;
		return t;
	};
	_proto.txtDesc_i = function () {
		var t = new eui.Label();
		this.txtDesc = t;
		t.horizontalCenter = 0;
		t.lineSpacing = 5;
		t.size = 35;
		t.text = "提示提示提示提示提示提示提示";
		t.textAlign = "center";
		t.textColor = 0x070000;
		t.verticalCenter = -12;
		t.width = 490;
		return t;
	};
	_proto.btnCancel_i = function () {
		var t = new eui.Button();
		this.btnCancel = t;
		t.label = "";
		t.left = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 284;
		t.skinName = Alert2Skin$Skin6;
		return t;
	};
	_proto.btnConfirm_i = function () {
		var t = new eui.Button();
		this.btnConfirm = t;
		t.height = 86;
		t.horizontalCenter = 127;
		t.label = "";
		t.width = 191;
		t.y = 284;
		t.skinName = Alert2Skin$Skin7;
		return t;
	};
	_proto.txtTitle_i = function () {
		var t = new eui.Label();
		this.txtTitle = t;
		t.fontFamily = "fzyc";
		t.horizontalCenter = 1;
		t.size = 50;
		t.text = "提 示";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 6.9;
		return t;
	};
	return Alert2Skin;
})(eui.Skin);generateEUI.paths['resource/assets/base/module/common/AlertSkin.exml'] = window.AlertSkin = (function (_super) {
	__extends(AlertSkin, _super);
	function AlertSkin() {
		_super.call(this);
		this.skinParts = ["imgShareBg","txtDesc","btnConfirm","btnCancel"];
		
		this.width = 638;
		this.elementsContent = [this.imgShareBg_i(),this.txtDesc_i(),this.btnConfirm_i(),this.btnCancel_i()];
	}
	var _proto = AlertSkin.prototype;

	_proto.imgShareBg_i = function () {
		var t = new eui.Image();
		this.imgShareBg = t;
		t.horizontalCenter = 0;
		t.source = "gameshare_border_png";
		t.y = 0;
		return t;
	};
	_proto.txtDesc_i = function () {
		var t = new eui.Label();
		this.txtDesc = t;
		t.horizontalCenter = 0;
		t.lineSpacing = 25;
		t.size = 26;
		t.text = "提示提示提示提示提示提示提示";
		t.textAlign = "center";
		t.textColor = 0x666666;
		t.top = 90;
		t.width = 510;
		return t;
	};
	_proto.btnConfirm_i = function () {
		var t = new eui.Button();
		this.btnConfirm = t;
		t.horizontalCenter = -134;
		t.label = "确定";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "Button5Skin";
		t.y = 301;
		return t;
	};
	_proto.btnCancel_i = function () {
		var t = new eui.Button();
		this.btnCancel = t;
		t.label = "取消";
		t.right = 90;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "Button5Skin";
		t.y = 301;
		return t;
	};
	return AlertSkin;
})(eui.Skin);generateEUI.paths['resource/assets/base/module/common/GameShare2Skin.exml'] = window.GameShare2Skin = (function (_super) {
	__extends(GameShare2Skin, _super);
	var GameShare2Skin$Skin8 = 	(function (_super) {
		__extends(GameShare2Skin$Skin8, _super);
		function GameShare2Skin$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameShare2Skin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gameshare2_json.gameshare2_qq_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameShare2Skin$Skin8;
	})(eui.Skin);

	var GameShare2Skin$Skin9 = 	(function (_super) {
		__extends(GameShare2Skin$Skin9, _super);
		function GameShare2Skin$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameShare2Skin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gameshare2_json.gameshare2_qzone_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameShare2Skin$Skin9;
	})(eui.Skin);

	var GameShare2Skin$Skin10 = 	(function (_super) {
		__extends(GameShare2Skin$Skin10, _super);
		function GameShare2Skin$Skin10() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameShare2Skin$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gameshare2_json.gameshare2_weixin_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameShare2Skin$Skin10;
	})(eui.Skin);

	var GameShare2Skin$Skin11 = 	(function (_super) {
		__extends(GameShare2Skin$Skin11, _super);
		function GameShare2Skin$Skin11() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameShare2Skin$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gameshare2_json.gameshare2_weixinquan_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameShare2Skin$Skin11;
	})(eui.Skin);

	var GameShare2Skin$Skin12 = 	(function (_super) {
		__extends(GameShare2Skin$Skin12, _super);
		function GameShare2Skin$Skin12() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameShare2Skin$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gameshare2_json.gameshare2_xinlang_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameShare2Skin$Skin12;
	})(eui.Skin);

	function GameShare2Skin() {
		_super.call(this);
		this.skinParts = ["imgWhite","bg","groupShareQQ","groupShareQZone","groupShareWx","groupShareWxquan","groupShareWb","groupShare"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.imgWhite_i(),this.bg_i(),this.groupShare_i()];
	}
	var _proto = GameShare2Skin.prototype;

	_proto.imgWhite_i = function () {
		var t = new eui.Rect();
		this.imgWhite = t;
		t.fillColor = 0xffffff;
		t.height = 1280;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.source = "";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.groupShare_i = function () {
		var t = new eui.Group();
		this.groupShare = t;
		t.height = 235;
		t.x = 0;
		t.y = 1045;
		t.elementsContent = [this._Image1_i(),this._Label1_i(),this.groupShareQQ_i(),this.groupShareQZone_i(),this.groupShareWx_i(),this.groupShareWxquan_i(),this.groupShareWb_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 235;
		t.scale9Grid = new egret.Rectangle(12,32,76,194);
		t.source = "gameshare2_json.gameshare2_bg_png";
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 26;
		t.text = "分享至";
		t.textColor = 0x666666;
		t.x = 321;
		t.y = 18;
		return t;
	};
	_proto.groupShareQQ_i = function () {
		var t = new eui.Group();
		this.groupShareQQ = t;
		t.width = 110;
		t.x = 30;
		t.y = 71;
		t.elementsContent = [this._Button1_i(),this._Label2_i()];
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 0;
		t.skinName = GameShare2Skin$Skin8;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "QQ好友";
		t.textColor = 0x333333;
		t.y = 110;
		return t;
	};
	_proto.groupShareQZone_i = function () {
		var t = new eui.Group();
		this.groupShareQZone = t;
		t.width = 110;
		t.x = 168;
		t.y = 71;
		t.elementsContent = [this._Button2_i(),this._Label3_i()];
		return t;
	};
	_proto._Button2_i = function () {
		var t = new eui.Button();
		t.horizontalCenter = 0;
		t.label = "";
		t.top = 0;
		t.skinName = GameShare2Skin$Skin9;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "QQ空间";
		t.textColor = 0x333333;
		t.y = 110;
		return t;
	};
	_proto.groupShareWx_i = function () {
		var t = new eui.Group();
		this.groupShareWx = t;
		t.width = 110;
		t.x = 305;
		t.y = 71;
		t.elementsContent = [this._Button3_i(),this._Label4_i()];
		return t;
	};
	_proto._Button3_i = function () {
		var t = new eui.Button();
		t.horizontalCenter = 0;
		t.label = "";
		t.top = 0;
		t.skinName = GameShare2Skin$Skin10;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "微信好友";
		t.textColor = 0x333333;
		t.y = 110;
		return t;
	};
	_proto.groupShareWxquan_i = function () {
		var t = new eui.Group();
		this.groupShareWxquan = t;
		t.width = 110;
		t.x = 443;
		t.y = 71;
		t.elementsContent = [this._Button4_i(),this._Label5_i()];
		return t;
	};
	_proto._Button4_i = function () {
		var t = new eui.Button();
		t.horizontalCenter = 0;
		t.label = "";
		t.top = 0;
		t.skinName = GameShare2Skin$Skin11;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "微信朋友圈";
		t.textColor = 0x333333;
		t.y = 110;
		return t;
	};
	_proto.groupShareWb_i = function () {
		var t = new eui.Group();
		this.groupShareWb = t;
		t.width = 110;
		t.x = 580;
		t.y = 71;
		t.elementsContent = [this._Button5_i(),this._Label6_i()];
		return t;
	};
	_proto._Button5_i = function () {
		var t = new eui.Button();
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 0;
		t.skinName = GameShare2Skin$Skin12;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "新浪微博";
		t.textColor = 0x333333;
		t.y = 110;
		return t;
	};
	return GameShare2Skin;
})(eui.Skin);generateEUI.paths['resource/assets/base/module/common/GameShareSkin.exml'] = window.GameShareSkin = (function (_super) {
	__extends(GameShareSkin, _super);
	var GameShareSkin$Skin13 = 	(function (_super) {
		__extends(GameShareSkin$Skin13, _super);
		function GameShareSkin$Skin13() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameShareSkin$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gameshare_json.gameshare_qq_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameShareSkin$Skin13;
	})(eui.Skin);

	var GameShareSkin$Skin14 = 	(function (_super) {
		__extends(GameShareSkin$Skin14, _super);
		function GameShareSkin$Skin14() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameShareSkin$Skin14.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gameshare_json.gameshare_qzone_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameShareSkin$Skin14;
	})(eui.Skin);

	var GameShareSkin$Skin15 = 	(function (_super) {
		__extends(GameShareSkin$Skin15, _super);
		function GameShareSkin$Skin15() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameShareSkin$Skin15.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gameshare_json.gameshare_weixin_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameShareSkin$Skin15;
	})(eui.Skin);

	var GameShareSkin$Skin16 = 	(function (_super) {
		__extends(GameShareSkin$Skin16, _super);
		function GameShareSkin$Skin16() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameShareSkin$Skin16.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gameshare_json.gameshare_weixinquan_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameShareSkin$Skin16;
	})(eui.Skin);

	var GameShareSkin$Skin17 = 	(function (_super) {
		__extends(GameShareSkin$Skin17, _super);
		function GameShareSkin$Skin17() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameShareSkin$Skin17.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gameshare_json.gameshare_xinlang_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameShareSkin$Skin17;
	})(eui.Skin);

	function GameShareSkin() {
		_super.call(this);
		this.skinParts = ["groupShareQQ","groupShareQZone","groupShareWx","groupShareWxquan","groupShareWb"];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i(),this.groupShareQQ_i(),this.groupShareQZone_i(),this.groupShareWx_i(),this.groupShareWxquan_i(),this.groupShareWb_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i()];
	}
	var _proto = GameShareSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "gameshare_json.gameshare_woo_png";
		t.x = 259;
		t.y = 30;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "gameshare_json.gameshare_border_png";
		t.x = 0;
		t.y = 135;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 30;
		t.text = "分享到：";
		t.textColor = 0x666666;
		t.x = 19;
		t.y = 107;
		return t;
	};
	_proto.groupShareQQ_i = function () {
		var t = new eui.Group();
		this.groupShareQQ = t;
		t.x = 24;
		t.y = 197;
		t.elementsContent = [this._Button1_i(),this._Label2_i()];
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 0;
		t.skinName = GameShareSkin$Skin13;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "QQ好友";
		t.textColor = 0x666666;
		t.y = 125;
		return t;
	};
	_proto.groupShareQZone_i = function () {
		var t = new eui.Group();
		this.groupShareQZone = t;
		t.x = 144;
		t.y = 197;
		t.elementsContent = [this._Button2_i(),this._Label3_i()];
		return t;
	};
	_proto._Button2_i = function () {
		var t = new eui.Button();
		t.horizontalCenter = 0;
		t.label = "";
		t.top = 0;
		t.skinName = GameShareSkin$Skin14;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "QQ空间";
		t.textColor = 0x666666;
		t.y = 125;
		return t;
	};
	_proto.groupShareWx_i = function () {
		var t = new eui.Group();
		this.groupShareWx = t;
		t.x = 262;
		t.y = 197;
		t.elementsContent = [this._Button3_i(),this._Label4_i()];
		return t;
	};
	_proto._Button3_i = function () {
		var t = new eui.Button();
		t.horizontalCenter = 0;
		t.label = "";
		t.top = 0;
		t.skinName = GameShareSkin$Skin15;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "微信好友";
		t.textColor = 0x666666;
		t.y = 125;
		return t;
	};
	_proto.groupShareWxquan_i = function () {
		var t = new eui.Group();
		this.groupShareWxquan = t;
		t.x = 384;
		t.y = 197;
		t.elementsContent = [this._Button4_i(),this._Label5_i()];
		return t;
	};
	_proto._Button4_i = function () {
		var t = new eui.Button();
		t.horizontalCenter = 0;
		t.label = "";
		t.top = 0;
		t.skinName = GameShareSkin$Skin16;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "微信朋友圈";
		t.textColor = 0x666666;
		t.y = 125;
		return t;
	};
	_proto.groupShareWb_i = function () {
		var t = new eui.Group();
		this.groupShareWb = t;
		t.x = 503;
		t.y = 197;
		t.elementsContent = [this._Button5_i(),this._Label6_i()];
		return t;
	};
	_proto._Button5_i = function () {
		var t = new eui.Button();
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 0;
		t.skinName = GameShareSkin$Skin17;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "新浪微博";
		t.textColor = 0x666666;
		t.y = 125;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "gameshare_json.gameshare_xin0_png";
		t.x = 240;
		t.y = 76;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "gameshare_json.gameshare_xin1_png";
		t.x = 253;
		t.y = 23;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "gameshare_json.gameshare_xin2_png";
		t.x = 308;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "gameshare_json.gameshare_xin3_png";
		t.x = 216;
		t.y = 45;
		return t;
	};
	return GameShareSkin;
})(eui.Skin);generateEUI.paths['resource/assets/base/module/common/GameTipsSkin.exml'] = window.GameTipsSkin = (function (_super) {
	__extends(GameTipsSkin, _super);
	function GameTipsSkin() {
		_super.call(this);
		this.skinParts = ["imgBg","txtContent"];
		
		this.elementsContent = [this.imgBg_i(),this.txtContent_i()];
	}
	var _proto = GameTipsSkin.prototype;

	_proto.imgBg_i = function () {
		var t = new eui.Image();
		this.imgBg = t;
		t.height = 200;
		t.scale9Grid = new egret.Rectangle(16,13,102,76);
		t.source = "common_v1_bg1_png";
		t.width = 400;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.txtContent_i = function () {
		var t = new eui.Label();
		this.txtContent = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.lineSpacing = 15;
		t.multiline = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大";
		t.textColor = 0x333333;
		t.verticalCenter = -2;
		t.width = 370;
		t.wordWrap = true;
		return t;
	};
	return GameTipsSkin;
})(eui.Skin);generateEUI.paths['resource/assets/base/module/common/RetryConnectSkin.exml'] = window.RetryConnectSkin = (function (_super) {
	__extends(RetryConnectSkin, _super);
	var RetryConnectSkin$Skin18 = 	(function (_super) {
		__extends(RetryConnectSkin$Skin18, _super);
		function RetryConnectSkin$Skin18() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RetryConnectSkin$Skin18.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "common_v1_button5_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RetryConnectSkin$Skin18;
	})(eui.Skin);

	function RetryConnectSkin() {
		_super.call(this);
		this.skinParts = ["txtDesc","btnRetry"];
		
		this.height = 220;
		this.width = 512;
		this.elementsContent = [this.txtDesc_i(),this.btnRetry_i()];
	}
	var _proto = RetryConnectSkin.prototype;

	_proto.txtDesc_i = function () {
		var t = new eui.Label();
		this.txtDesc = t;
		t.fontFamily = "fzyc";
		t.horizontalCenter = 1;
		t.lineSpacing = 5;
		t.size = 26;
		t.text = "网络连接中断，请检查移动网络或WIFI设置";
		t.textColor = 0x000000;
		t.verticalCenter = -43;
		t.width = 502;
		return t;
	};
	_proto.btnRetry_i = function () {
		var t = new eui.Button();
		this.btnRetry = t;
		t.horizontalCenter = 0;
		t.label = "重试";
		t.y = 151;
		t.skinName = RetryConnectSkin$Skin18;
		return t;
	};
	return RetryConnectSkin;
})(eui.Skin);generateEUI.paths['resource/assets/base/module/component/ComboxSkin.exml'] = window.ComboxSkin = (function (_super) {
	__extends(ComboxSkin, _super);
	function ComboxSkin() {
		_super.call(this);
		this.skinParts = ["itemBg","groupItems","imgBg","btnDown","txtSelected","groupBox"];
		
		this.width = 150;
		this.elementsContent = [this.groupItems_i(),this.groupBox_i()];
	}
	var _proto = ComboxSkin.prototype;

	_proto.groupItems_i = function () {
		var t = new eui.Group();
		this.groupItems = t;
		t.percentWidth = 100;
		t.elementsContent = [this.itemBg_i()];
		return t;
	};
	_proto.itemBg_i = function () {
		var t = new eui.Image();
		this.itemBg = t;
		t.alpha = 0.8;
		t.bottom = 0;
		t.height = 40;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(22,5,133,37);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "componet_json.border_png";
		t.top = 0;
		t.x = 0;
		t.y = -53;
		return t;
	};
	_proto.groupBox_i = function () {
		var t = new eui.Group();
		this.groupBox = t;
		t.height = 40;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.imgBg_i(),this.btnDown_i(),this.txtSelected_i()];
		return t;
	};
	_proto.imgBg_i = function () {
		var t = new eui.Image();
		this.imgBg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(22,5,133,37);
		t.source = "componet_json.border_png";
		t.top = 0;
		return t;
	};
	_proto.btnDown_i = function () {
		var t = new eui.Button();
		this.btnDown = t;
		t.label = "▽";
		t.right = 0;
		t.top = 1;
		t.width = 38;
		return t;
	};
	_proto.txtSelected_i = function () {
		var t = new eui.Label();
		this.txtSelected = t;
		t.text = "请选择";
		t.textColor = 0x000000;
		t.x = 7;
		t.y = 5;
		return t;
	};
	return ComboxSkin;
})(eui.Skin);generateEUI.paths['resource/assets/base/module/component/GmAvgAttriSkin.exml'] = window.GmAvgAttriSkin = (function (_super) {
	__extends(GmAvgAttriSkin, _super);
	function GmAvgAttriSkin() {
		_super.call(this);
		this.skinParts = ["txtKey","inputValue"];
		
		this.elementsContent = [this.txtKey_i(),this._Image1_i(),this.inputValue_i()];
	}
	var _proto = GmAvgAttriSkin.prototype;

	_proto.txtKey_i = function () {
		var t = new eui.Label();
		this.txtKey = t;
		t.anchorOffsetX = 0;
		t.text = "f.卓双双key2开关";
		t.textAlign = "right";
		t.textColor = 0x000000;
		t.width = 320;
		t.x = 0;
		t.y = 5;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.scale9Grid = new egret.Rectangle(22,5,133,37);
		t.source = "componet_json.border_png";
		t.width = 300;
		t.x = 345;
		t.y = 0;
		return t;
	};
	_proto.inputValue_i = function () {
		var t = new eui.TextInput();
		this.inputValue = t;
		t.x = 345;
		t.y = 0;
		return t;
	};
	return GmAvgAttriSkin;
})(eui.Skin);generateEUI.paths['resource/assets/base/module/component/IconButtonSkin.exml'] = window.IconButtonSkin = (function (_super) {
	__extends(IconButtonSkin, _super);
	function IconButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.height = 87;
		this.minHeight = 30;
		this.minWidth = 60;
		this.width = 536;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = IconButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(134,22,26,30);
		t.source = "s1_btn_menu_base_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "fzyc";
		t.left = 8;
		t.right = 8;
		t.size = 28;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.left = 118;
		t.verticalCenter = 0;
		return t;
	};
	return IconButtonSkin;
})(eui.Skin);generateEUI.paths['resource/assets/base/module/component/ImageButtonSkin.exml'] = window.ImageButtonSkin = (function (_super) {
	__extends(ImageButtonSkin, _super);
	function ImageButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 30;
		this.minWidth = 60;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ImageButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 30;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ImageButtonSkin;
})(eui.Skin);generateEUI.paths['resource/assets/base/module/login/button/Button4Skin.exml'] = window.Button4Skin = (function (_super) {
	__extends(Button4Skin, _super);
	function Button4Skin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
	}
	var _proto = Button4Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(129,20,24,34);
		t.source = "common_v1_button3_png";
		t.top = 0;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 0;
		t.fontFamily = "fzyc";
		t.left = 0;
		t.right = 0;
		t.size = 28;
		t.text = "绑定手机";
		t.textAlign = "center";
		t.top = 0;
		t.verticalAlign = "middle";
		return t;
	};
	return Button4Skin;
})(eui.Skin);generateEUI.paths['resource/assets/base/module/ending/EndingViewSkin.exml'] = window.EndingViewSkin = (function (_super) {
	__extends(EndingViewSkin, _super);
	function EndingViewSkin() {
		_super.call(this);
		this.skinParts = ["bg","imgWordBg","txtEndZw","txtEndYw","groupEndWord","btnHome","groupHome","btnMore","groupMore","btnShare","groupShare","groupBtns"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.bg_i(),this.groupEndWord_i(),this.groupBtns_i()];
	}
	var _proto = EndingViewSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.groupEndWord_i = function () {
		var t = new eui.Group();
		this.groupEndWord = t;
		t.horizontalCenter = 0;
		t.top = 65;
		t.elementsContent = [this.imgWordBg_i(),this.txtEndZw_i(),this.txtEndYw_i()];
		return t;
	};
	_proto.imgWordBg_i = function () {
		var t = new eui.Image();
		this.imgWordBg = t;
		t.source = "ending_json.ending_wordbg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.txtEndZw_i = function () {
		var t = new eui.Label();
		this.txtEndZw = t;
		t.horizontalCenter = 0;
		t.size = 46;
		t.strokeColor = 0xFF0000;
		t.text = "形同陌路";
		t.textColor = 0x44bef0;
		t.y = 17;
		return t;
	};
	_proto.txtEndYw_i = function () {
		var t = new eui.Label();
		this.txtEndYw = t;
		t.horizontalCenter = 0;
		t.size = 24;
		t.strokeColor = 0xFF0000;
		t.text = "结  局";
		t.textColor = 0x44BEF0;
		t.y = 77;
		return t;
	};
	_proto.groupBtns_i = function () {
		var t = new eui.Group();
		this.groupBtns = t;
		t.bottom = 63;
		t.horizontalCenter = 0;
		t.width = 538;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.groupHome_i(),this.groupMore_i(),this.groupShare_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 13;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.groupHome_i = function () {
		var t = new eui.Group();
		this.groupHome = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.btnHome_i(),this._Image1_i()];
		return t;
	};
	_proto.btnHome_i = function () {
		var t = new eui.Button();
		this.btnHome = t;
		t.anchorOffsetX = 0;
		t.label = "回到首页";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "Button4Skin";
		t.width = 538;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "ending_json.ending_home_png";
		t.touchEnabled = false;
		t.x = 116;
		t.y = 21;
		return t;
	};
	_proto.groupMore_i = function () {
		var t = new eui.Group();
		this.groupMore = t;
		t.x = 0;
		t.y = 100;
		t.elementsContent = [this.btnMore_i(),this._Image2_i()];
		return t;
	};
	_proto.btnMore_i = function () {
		var t = new eui.Button();
		this.btnMore = t;
		t.anchorOffsetX = 0;
		t.label = "读取存档";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "Button4Skin";
		t.width = 538;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "ending_json.ending_moreend_png";
		t.touchEnabled = false;
		t.x = 113;
		t.y = 28;
		return t;
	};
	_proto.groupShare_i = function () {
		var t = new eui.Group();
		this.groupShare = t;
		t.x = 0;
		t.y = 200;
		t.elementsContent = [this.btnShare_i(),this._Image3_i()];
		return t;
	};
	_proto.btnShare_i = function () {
		var t = new eui.Button();
		this.btnShare = t;
		t.anchorOffsetX = 0;
		t.label = "分享";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "Button4Skin";
		t.width = 538;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "ending_json.ending_share_png";
		t.touchEnabled = false;
		t.x = 114;
		t.y = 22;
		return t;
	};
	return EndingViewSkin;
})(eui.Skin);generateEUI.paths['resource/assets/base/module/login/button/Button3Skin.exml'] = window.Button3Skin = (function (_super) {
	__extends(Button3Skin, _super);
	function Button3Skin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
	}
	var _proto = Button3Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(122,8,57,46);
		t.source = "common_v1_button2_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "fzyc";
		t.horizontalCenter = 0.5;
		t.size = 28;
		t.text = "绑定手机";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -1.5;
		return t;
	};
	return Button3Skin;
})(eui.Skin);generateEUI.paths['resource/assets/base/module/gamehall/GameHallChangePasswordSkin.exml'] = window.GameHallChangePasswordSkin = (function (_super) {
	__extends(GameHallChangePasswordSkin, _super);
	function GameHallChangePasswordSkin() {
		_super.call(this);
		this.skinParts = ["telephoneNumber","verificationCode","getVerificationCode","bindNewNumber","cancelEdit"];
		
		this.elementsContent = [this._Group3_i()];
	}
	var _proto = GameHallChangePasswordSkin.prototype;

	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.y = 0;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this.getVerificationCode_i(),this.bindNewNumber_i(),this.cancelEdit_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Label1_i(),this.telephoneNumber_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(16,14,65,49);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "common_v1_json.common_v1_bg2_png";
		t.width = 376;
		t.x = 104;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "手机号：";
		t.textColor = 0x666666;
		t.x = 0;
		t.y = 25;
		return t;
	};
	_proto.telephoneNumber_i = function () {
		var t = new eui.TextInput();
		this.telephoneNumber = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 51;
		t.maxChars = 11;
		t.prompt = "请输入手机号";
		t.restrict = "0-9";
		t.skinName = "skins.TextInputSkin";
		t.width = 350;
		t.x = 114;
		t.y = 13;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 127;
		t.elementsContent = [this._Image2_i(),this._Label2_i(),this.verificationCode_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(18,12,62,50);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "common_v1_json.common_v1_bg2_png";
		t.width = 206;
		t.x = 104;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "验证码：";
		t.textColor = 0x666666;
		t.x = 0;
		t.y = 25;
		return t;
	};
	_proto.verificationCode_i = function () {
		var t = new eui.TextInput();
		this.verificationCode = t;
		t.anchorOffsetX = 0;
		t.height = 51;
		t.maxChars = 6;
		t.prompt = "请输入验证码";
		t.restrict = "0-9";
		t.skinName = "skins.TextInputSkin";
		t.width = 184;
		t.x = 114;
		t.y = 13;
		return t;
	};
	_proto.getVerificationCode_i = function () {
		var t = new eui.Button();
		this.getVerificationCode = t;
		t.anchorOffsetX = 0;
		t.label = "获取验证码";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "Button2Skin";
		t.x = 325;
		t.y = 133;
		return t;
	};
	_proto.bindNewNumber_i = function () {
		var t = new eui.Button();
		this.bindNewNumber = t;
		t.anchorOffsetX = 0;
		t.label = "绑定新号码";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "Button3Skin";
		t.x = 107;
		t.y = 324;
		return t;
	};
	_proto.cancelEdit_i = function () {
		var t = new eui.Label();
		this.cancelEdit = t;
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "取消修改";
		t.textColor = 0x666666;
		t.x = 414;
		t.y = 396;
		return t;
	};
	return GameHallChangePasswordSkin;
})(eui.Skin);generateEUI.paths['resource/assets/base/module/gamehall/GameHallItemSkin.exml'] = window.GameHallItemSkin = (function (_super) {
	__extends(GameHallItemSkin, _super);
	function GameHallItemSkin() {
		_super.call(this);
		this.skinParts = ["imgBg","img_state","txtDesc","txtName","boxNew","groupInfo","img_new","img_new_mask","img_guang","group_new"];
		
		this.elementsContent = [this.imgBg_i(),this.groupInfo_i(),this.group_new_i()];
	}
	var _proto = GameHallItemSkin.prototype;

	_proto.imgBg_i = function () {
		var t = new eui.Image();
		this.imgBg = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.y = 0;
		return t;
	};
	_proto.groupInfo_i = function () {
		var t = new eui.Group();
		this.groupInfo = t;
		t.bottom = 43;
		t.left = 26;
		t.elementsContent = [this.img_state_i(),this.txtDesc_i(),this.txtName_i(),this.boxNew_i()];
		return t;
	};
	_proto.img_state_i = function () {
		var t = new eui.Image();
		this.img_state = t;
		t.source = "gamehall_json.gamehall_relianzhong";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.txtDesc_i = function () {
		var t = new eui.Label();
		this.txtDesc = t;
		t.bold = true;
		t.fontFamily = "fzyc";
		t.lineSpacing = 5;
		t.size = 28;
		t.text = "新的故事";
		t.textColor = 0x406ddb;
		t.x = 138;
		t.y = 41;
		return t;
	};
	_proto.txtName_i = function () {
		var t = new eui.Label();
		this.txtName = t;
		t.fontFamily = "fzyc";
		t.lineSpacing = 5;
		t.size = 22;
		t.text = "新的";
		t.textColor = 0x406ddb;
		t.x = 277;
		t.y = 47;
		return t;
	};
	_proto.boxNew_i = function () {
		var t = new eui.Group();
		this.boxNew = t;
		t.x = 525;
		t.y = 37;
		t.elementsContent = [this._Rect1_i(),this._Label1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillAlpha = 0.8;
		t.fillColor = 0x6dcc55;
		t.height = 36;
		t.width = 110;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.size = 28;
		t.strokeColor = 0xff0000;
		t.text = "新内容";
		t.textColor = 0xffffff;
		t.x = 13;
		t.y = 4;
		return t;
	};
	_proto.group_new_i = function () {
		var t = new eui.Group();
		this.group_new = t;
		t.left = 33;
		t.top = 27;
		t.visible = false;
		t.elementsContent = [this.img_new_i(),this.img_new_mask_i(),this.img_guang_i()];
		return t;
	};
	_proto.img_new_i = function () {
		var t = new eui.Image();
		this.img_new = t;
		t.source = "gamehall_new";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img_new_mask_i = function () {
		var t = new eui.Image();
		this.img_new_mask = t;
		t.source = "gamehall_new";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img_guang_i = function () {
		var t = new eui.Image();
		this.img_guang = t;
		t.alpha = 0.6;
		t.anchorOffsetX = 46;
		t.anchorOffsetY = 84;
		t.rotation = 45;
		t.source = "gamehall_guang";
		t.x = -40;
		t.y = -35;
		return t;
	};
	return GameHallItemSkin;
})(eui.Skin);generateEUI.paths['resource/assets/base/module/gamehall/GameHallSettingSkin.exml'] = window.GameHallSettingSkin = (function (_super) {
	__extends(GameHallSettingSkin, _super);
	var GameHallSettingSkin$Skin19 = 	(function (_super) {
		__extends(GameHallSettingSkin$Skin19, _super);
		function GameHallSettingSkin$Skin19() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","on_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameHallSettingSkin$Skin19.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "off_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameHallSettingSkin$Skin19;
	})(eui.Skin);

	var GameHallSettingSkin$Skin20 = 	(function (_super) {
		__extends(GameHallSettingSkin$Skin20, _super);
		function GameHallSettingSkin$Skin20() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","on_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameHallSettingSkin$Skin20.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "off_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameHallSettingSkin$Skin20;
	})(eui.Skin);

	function GameHallSettingSkin() {
		_super.call(this);
		this.skinParts = ["TouristAccount","modifyPhone","UserId","btnGiftKey","Music_btn","SoundEffect","signOut","UserAgreement_btn","txtVersion","rectVersion"];
		
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Label1_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this.signOut_i(),this.UserAgreement_btn_i(),this._Group4_i()];
	}
	var _proto = GameHallSettingSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "ghsetting_json.ghsetting_rail_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.size = 28;
		t.text = "账号信息";
		t.textColor = 0xffffff;
		t.x = 62;
		t.y = 14;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 62;
		t.y = 83;
		t.elementsContent = [this.TouristAccount_i(),this.modifyPhone_i()];
		return t;
	};
	_proto.TouristAccount_i = function () {
		var t = new eui.Label();
		this.TouristAccount = t;
		t.fontFamily = "fzyc";
		t.left = 0;
		t.size = 28;
		t.text = "游客账号";
		t.textColor = 0x666666;
		t.verticalCenter = 0;
		return t;
	};
	_proto.modifyPhone_i = function () {
		var t = new eui.Button();
		this.modifyPhone = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.label = "修改手机";
		t.skinName = "Button2Skin";
		t.x = 365;
		t.y = 2;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.x = 62;
		t.y = 180;
		t.elementsContent = [this._Label2_i(),this.UserId_i(),this.btnGiftKey_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.size = 28;
		t.text = "用户ID:";
		t.textColor = 0x666666;
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.UserId_i = function () {
		var t = new eui.Label();
		this.UserId = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "fzyc";
		t.size = 28;
		t.text = "0000000";
		t.textColor = 0x666666;
		t.verticalCenter = 0;
		t.width = 160;
		t.x = 99;
		return t;
	};
	_proto.btnGiftKey_i = function () {
		var t = new eui.Button();
		this.btnGiftKey = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.label = "兑换码";
		t.skinName = "Button2Skin";
		t.x = 365;
		t.y = 2;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 62;
		t.y = 302;
		t.elementsContent = [this._Image2_i(),this._Label3_i(),this.Music_btn_i(),this._Image3_i(),this._Label4_i(),this.SoundEffect_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "ghsetting_json.ghsetting_music_png";
		t.x = 0;
		t.y = 9;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.size = 26;
		t.text = "音  乐:";
		t.textColor = 0x666666;
		t.x = 28;
		t.y = 9;
		return t;
	};
	_proto.Music_btn_i = function () {
		var t = new eui.ToggleButton();
		this.Music_btn = t;
		t.label = "";
		t.x = 120;
		t.y = 0;
		t.skinName = GameHallSettingSkin$Skin19;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "ghsetting_json.ghsetting_sound_png";
		t.x = 280;
		t.y = 9;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.size = 26;
		t.text = "音  效:";
		t.textColor = 0x666666;
		t.x = 308;
		t.y = 9;
		return t;
	};
	_proto.SoundEffect_i = function () {
		var t = new eui.ToggleButton();
		this.SoundEffect = t;
		t.label = "";
		t.x = 400;
		t.y = 0;
		t.skinName = GameHallSettingSkin$Skin20;
		return t;
	};
	_proto.signOut_i = function () {
		var t = new eui.Button();
		this.signOut = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.label = "绑定手机";
		t.skinName = "Button5Skin";
		t.x = 49;
		t.y = 431;
		return t;
	};
	_proto.UserAgreement_btn_i = function () {
		var t = new eui.Button();
		this.UserAgreement_btn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.label = "用户协议";
		t.skinName = "Button5Skin";
		t.x = 352;
		t.y = 431;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.right = 30;
		t.y = 521;
		t.elementsContent = [this.txtVersion_i(),this.rectVersion_i()];
		return t;
	};
	_proto.txtVersion_i = function () {
		var t = new eui.Label();
		this.txtVersion = t;
		t.fontFamily = "fzyc";
		t.size = 22;
		t.text = "版本号:V1.0";
		t.textAlign = "right";
		t.textColor = 0xb3b3b3;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.rectVersion_i = function () {
		var t = new eui.Rect();
		this.rectVersion = t;
		t.fillAlpha = 0;
		t.percentHeight = 100;
		t.strokeAlpha = 0;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return GameHallSettingSkin;
})(eui.Skin);generateEUI.paths['resource/assets/base/module/gamehall/GameHallSkin.exml'] = window.GameHallSkin = (function (_super) {
	__extends(GameHallSkin, _super);
	var GameHallSkin$Skin21 = 	(function (_super) {
		__extends(GameHallSkin$Skin21, _super);
		function GameHallSkin$Skin21() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameHallSkin$Skin21.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "common_v1_json.common_v1_set_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameHallSkin$Skin21;
	})(eui.Skin);

	var GameHallSkin$Skin22 = 	(function (_super) {
		__extends(GameHallSkin$Skin22, _super);
		function GameHallSkin$Skin22() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameHallSkin$Skin22.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "gamehall_btn_activies";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameHallSkin$Skin22;
	})(eui.Skin);

	function GameHallSkin() {
		_super.call(this);
		this.skinParts = ["imgBg","img_shezhi","boxCoin","btnActivies"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = GameHallSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Rect1_i(),this.imgBg_i(),this._Image1_i(),this._Image2_i(),this._Group1_i(),this.boxCoin_i(),this.btnActivies_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.fillColor = 0xc3e4fb;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.imgBg_i = function () {
		var t = new eui.Image();
		this.imgBg = t;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(33,13,201,84);
		t.source = "";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 137;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(341,17,42,103);
		t.source = "gamehall_biaotou";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.left = 16;
		t.source = "common_v1_logo_png";
		t.top = 16;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 120;
		t.right = 0;
		t.top = 4;
		t.width = 120;
		t.elementsContent = [this.img_shezhi_i()];
		return t;
	};
	_proto.img_shezhi_i = function () {
		var t = new eui.Button();
		this.img_shezhi = t;
		t.anchorOffsetX = 42;
		t.anchorOffsetY = 42;
		t.label = "";
		t.rotation = 19;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 60;
		t.y = 60;
		t.skinName = GameHallSkin$Skin21;
		return t;
	};
	_proto.boxCoin_i = function () {
		var t = new GameCoinComponentUI();
		this.boxCoin = t;
		t.horizontalCenter = 21;
		t.skinName = "GameCoinSkin";
		t.y = 32;
		return t;
	};
	_proto.btnActivies_i = function () {
		var t = new eui.Button();
		this.btnActivies = t;
		t.horizontalCenter = 195;
		t.label = "";
		t.verticalCenter = -574;
		t.skinName = GameHallSkin$Skin22;
		return t;
	};
	return GameHallSkin;
})(eui.Skin);generateEUI.paths['resource/assets/base/module/gm/GmSkin.exml'] = window.GmSkin = (function (_super) {
	__extends(GmSkin, _super);
	function GmSkin() {
		_super.call(this);
		this.skinParts = ["imgBg","txtChatId","txtCenterTitle","btnClose","btnGo","groupAttri","comboxChapter","comboxSection"];
		
		this.elementsContent = [this.imgBg_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Image1_i(),this.txtChatId_i(),this.txtCenterTitle_i(),this.btnClose_i(),this.btnGo_i(),this.groupAttri_i(),this.comboxChapter_i(),this.comboxSection_i()];
	}
	var _proto = GmSkin.prototype;

	_proto.imgBg_i = function () {
		var t = new eui.Image();
		this.imgBg = t;
		t.anchorOffsetY = 0;
		t.height = 1280;
		t.scale9Grid = new egret.Rectangle(16,13,102,85);
		t.source = "skyblue_bg_jpg";
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.text = "章：";
		t.textColor = 0x000000;
		t.x = 8;
		t.y = 77;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.text = "节：";
		t.textColor = 0x000000;
		t.x = 223;
		t.y = 79;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.text = "节点：";
		t.textColor = 0x000000;
		t.x = 440;
		t.y = 77;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.8;
		t.height = 40;
		t.scale9Grid = new egret.Rectangle(22,5,133,37);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "componet_json.border_png";
		t.width = 80;
		t.x = 520;
		t.y = 73;
		return t;
	};
	_proto.txtChatId_i = function () {
		var t = new eui.TextInput();
		this.txtChatId = t;
		t.restrict = "0-9";
		t.width = 80;
		t.x = 520;
		t.y = 73;
		return t;
	};
	_proto.txtCenterTitle_i = function () {
		var t = new eui.Label();
		this.txtCenterTitle = t;
		t.bold = true;
		t.horizontalCenter = 0.5;
		t.lineSpacing = 5;
		t.size = 30;
		t.text = "GM";
		t.textColor = 0x053eff;
		t.y = 16;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Button();
		this.btnClose = t;
		t.height = 55;
		t.label = "关闭";
		t.right = 5;
		t.top = 5;
		t.width = 90;
		return t;
	};
	_proto.btnGo_i = function () {
		var t = new eui.Button();
		this.btnGo = t;
		t.height = 55;
		t.label = "跳转";
		t.right = 5;
		t.top = 65;
		t.width = 90;
		return t;
	};
	_proto.groupAttri_i = function () {
		var t = new eui.Group();
		this.groupAttri = t;
		t.x = 20;
		t.y = 150;
		return t;
	};
	_proto.comboxChapter_i = function () {
		var t = new Combox();
		this.comboxChapter = t;
		t.skinName = "ComboxSkin";
		t.x = 68;
		t.y = 73;
		return t;
	};
	_proto.comboxSection_i = function () {
		var t = new Combox();
		this.comboxSection = t;
		t.skinName = "ComboxSkin";
		t.x = 283;
		t.y = 73;
		return t;
	};
	return GmSkin;
})(eui.Skin);generateEUI.paths['resource/assets/base/module/loading/LoadingResSkin.exml'] = window.LoadingResSkin = (function (_super) {
	__extends(LoadingResSkin, _super);
	function LoadingResSkin() {
		_super.call(this);
		this.skinParts = ["loading_bg","imgProgress","boxProgress","txtLabel"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Group1_i(),this._Group3_i()];
	}
	var _proto = LoadingResSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.loading_bg_i()];
		return t;
	};
	_proto.loading_bg_i = function () {
		var t = new eui.Image();
		this.loading_bg = t;
		t.horizontalCenter = 0;
		t.source = "loading_res_bg_jpg";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.bottom = 50;
		t.horizontalCenter = 0;
		t.elementsContent = [this.boxProgress_i(),this._Group2_i()];
		return t;
	};
	_proto.boxProgress_i = function () {
		var t = new eui.Group();
		this.boxProgress = t;
		t.horizontalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.imgProgress_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "common_v1_jindutiao1_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.imgProgress_i = function () {
		var t = new eui.Image();
		this.imgProgress = t;
		t.anchorOffsetX = 0;
		t.source = "common_v1_jindutiao2_png";
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentWidth = 100;
		t.y = 65;
		t.elementsContent = [this.txtLabel_i()];
		return t;
	};
	_proto.txtLabel_i = function () {
		var t = new eui.Label();
		this.txtLabel = t;
		t.fontFamily = "fzyc";
		t.horizontalCenter = 0;
		t.size = 30;
		t.stroke = 2;
		t.text = "资源加载中";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return LoadingResSkin;
})(eui.Skin);generateEUI.paths['resource/assets/base/module/loading/LoadingSkin.exml'] = window.LoadingSkin = (function (_super) {
	__extends(LoadingSkin, _super);
	function LoadingSkin() {
		_super.call(this);
		this.skinParts = ["loading_bg","imgProgress","boxProgress","txtLabel"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Group1_i(),this._Group3_i()];
	}
	var _proto = LoadingSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = -79;
		t.elementsContent = [this.loading_bg_i()];
		return t;
	};
	_proto.loading_bg_i = function () {
		var t = new eui.Image();
		this.loading_bg = t;
		t.height = 178;
		t.horizontalCenter = 0;
		t.source = "common_v1_logo_png";
		t.verticalCenter = 0;
		t.width = 359;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.bottom = 50;
		t.horizontalCenter = 0;
		t.elementsContent = [this.boxProgress_i(),this._Group2_i()];
		return t;
	};
	_proto.boxProgress_i = function () {
		var t = new eui.Group();
		this.boxProgress = t;
		t.horizontalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.imgProgress_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "common_v1_jindutiao1_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.imgProgress_i = function () {
		var t = new eui.Image();
		this.imgProgress = t;
		t.anchorOffsetX = 0;
		t.source = "common_v1_jindutiao2_png";
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentWidth = 100;
		t.y = 65;
		t.elementsContent = [this.txtLabel_i()];
		return t;
	};
	_proto.txtLabel_i = function () {
		var t = new eui.Label();
		this.txtLabel = t;
		t.fontFamily = "fzyc";
		t.horizontalCenter = 0;
		t.size = 30;
		t.stroke = 2;
		t.text = "资源加载中";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return LoadingSkin;
})(eui.Skin);generateEUI.paths['resource/assets/base/module/login/LoginSkin.exml'] = window.LoginSkin = (function (_super) {
	__extends(LoginSkin, _super);
	var LoginSkin$Skin23 = 	(function (_super) {
		__extends(LoginSkin$Skin23, _super);
		function LoginSkin$Skin23() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image2","visible",false)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginSkin$Skin23.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.scale9Grid = new egret.Rectangle(14,15,2,3);
			t.source = "common_v1_json.common_v1_check0_png";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			t.visible = false;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.horizontalCenter = 5;
			t.source = "common_v1_json.common_v1_check1_png";
			t.verticalCenter = -2;
			return t;
		};
		return LoginSkin$Skin23;
	})(eui.Skin);

	function LoginSkin() {
		_super.call(this);
		this.skinParts = ["checkBoxUserAgreement","txtUserAgreement","boxCheckBox","txtPhoneNum","txtCode","btnGetCode","btnLogin","txtTouristlogin","groupYk","panelLogin"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this.panelLogin_i()];
	}
	var _proto = LoginSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.left = 19;
		t.source = "common_v1_json.common_v1_logo_png";
		t.top = 16;
		return t;
	};
	_proto.panelLogin_i = function () {
		var t = new eui.Group();
		this.panelLogin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.y = 799;
		t.elementsContent = [this._Image2_i(),this.boxCheckBox_i(),this._Group1_i(),this._Group2_i(),this.btnGetCode_i(),this.btnLogin_i(),this.groupYk_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 471;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(47,38,285,228);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "common_v1_json.common_v1_loginkuang_png";
		t.width = 698;
		t.y = 0;
		return t;
	};
	_proto.boxCheckBox_i = function () {
		var t = new eui.Group();
		this.boxCheckBox = t;
		t.x = 361;
		t.y = 27;
		t.elementsContent = [this.checkBoxUserAgreement_i(),this._Label1_i(),this.txtUserAgreement_i()];
		return t;
	};
	_proto.checkBoxUserAgreement_i = function () {
		var t = new eui.CheckBox();
		this.checkBoxUserAgreement = t;
		t.height = 30;
		t.label = "CheckBox";
		t.selected = false;
		t.width = 30;
		t.x = 0;
		t.y = 0;
		t.skinName = LoginSkin$Skin23;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.size = 26;
		t.text = "我已查看并同意";
		t.textColor = 0x666666;
		t.x = 38;
		t.y = 2;
		return t;
	};
	_proto.txtUserAgreement_i = function () {
		var t = new eui.Label();
		this.txtUserAgreement = t;
		t.fontFamily = "fzyc";
		t.size = 26;
		t.text = "用户协议";
		t.textColor = 0x20a116;
		t.x = 220;
		t.y = 2;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.x = 53;
		t.y = 119;
		t.elementsContent = [this._Image3_i(),this._Label2_i(),this.txtPhoneNum_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(16,14,65,49);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "common_v1_json.common_v1_bg2_png";
		t.width = 456;
		t.x = 130;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "手机号：";
		t.textColor = 0x666666;
		t.verticalCenter = 0;
		t.x = 26;
		return t;
	};
	_proto.txtPhoneNum_i = function () {
		var t = new eui.TextInput();
		this.txtPhoneNum = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 51;
		t.maxChars = 11;
		t.prompt = "请输入手机号";
		t.restrict = "0-9　";
		t.skinName = "skins.TextInputSkin";
		t.verticalCenter = 0.5;
		t.width = 436;
		t.x = 140;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 53;
		t.y = 224;
		t.elementsContent = [this._Image4_i(),this._Label3_i(),this.txtCode_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(18,12,62,50);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "common_v1_json.common_v1_bg2_png";
		t.width = 286;
		t.x = 130;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "验证码：";
		t.textColor = 0x666666;
		t.verticalCenter = 0;
		t.x = 26;
		return t;
	};
	_proto.txtCode_i = function () {
		var t = new eui.TextInput();
		this.txtCode = t;
		t.anchorOffsetX = 0;
		t.height = 51;
		t.maxChars = 6;
		t.prompt = "请输入验证码";
		t.restrict = "0-9";
		t.skinName = "skins.TextInputSkin";
		t.verticalCenter = 0.5;
		t.width = 267;
		t.x = 140;
		return t;
	};
	_proto.btnGetCode_i = function () {
		var t = new eui.Button();
		this.btnGetCode = t;
		t.anchorOffsetX = 0;
		t.label = "获取验证码";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "Button2Skin";
		t.x = 484;
		t.y = 230;
		return t;
	};
	_proto.btnLogin_i = function () {
		var t = new eui.Button();
		this.btnLogin = t;
		t.anchorOffsetX = 0;
		t.label = "快速登录";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "Button4Skin";
		t.x = 187;
		t.y = 358;
		return t;
	};
	_proto.groupYk_i = function () {
		var t = new eui.Group();
		this.groupYk = t;
		t.x = 524;
		t.y = 420;
		t.elementsContent = [this._Image5_i(),this.txtTouristlogin_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "common_v1_json.common_v1_wordbg_png";
		t.x = 1;
		t.y = 0;
		return t;
	};
	_proto.txtTouristlogin_i = function () {
		var t = new eui.Label();
		this.txtTouristlogin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "fzyc";
		t.height = 32;
		t.size = 22;
		t.text = "游客登录";
		t.textAlign = "center";
		t.textColor = 0x666666;
		t.verticalAlign = "middle";
		t.width = 174;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return LoginSkin;
})(eui.Skin);generateEUI.paths['resource/assets/base/module/login/OtherLoginSkin.exml'] = window.OtherLoginSkin = (function (_super) {
	__extends(OtherLoginSkin, _super);
	var OtherLoginSkin$Skin24 = 	(function (_super) {
		__extends(OtherLoginSkin$Skin24, _super);
		function OtherLoginSkin$Skin24() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = OtherLoginSkin$Skin24.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "common_v1_button6_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return OtherLoginSkin$Skin24;
	})(eui.Skin);

	function OtherLoginSkin() {
		_super.call(this);
		this.skinParts = ["imgBg","btnLogin"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.imgBg_i(),this.btnLogin_i()];
	}
	var _proto = OtherLoginSkin.prototype;

	_proto.imgBg_i = function () {
		var t = new eui.Image();
		this.imgBg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "";
		t.top = 0;
		return t;
	};
	_proto.btnLogin_i = function () {
		var t = new eui.Button();
		this.btnLogin = t;
		t.bottom = 212;
		t.horizontalCenter = 0;
		t.label = "开    始";
		t.skinName = OtherLoginSkin$Skin24;
		return t;
	};
	return OtherLoginSkin;
})(eui.Skin);generateEUI.paths['resource/assets/base/module/login/TouristloginSkin.exml'] = window.TouristloginSkin = (function (_super) {
	__extends(TouristloginSkin, _super);
	var TouristloginSkin$Skin25 = 	(function (_super) {
		__extends(TouristloginSkin$Skin25, _super);
		function TouristloginSkin$Skin25() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = TouristloginSkin$Skin25.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "common_v1_button1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return TouristloginSkin$Skin25;
	})(eui.Skin);

	function TouristloginSkin() {
		_super.call(this);
		this.skinParts = ["btn_BindingPhone","txt_Notlogging"];
		
		this.height = 280;
		this.width = 500;
		this.elementsContent = [this._Label1_i(),this._Label2_i(),this.btn_BindingPhone_i(),this.txt_Notlogging_i()];
	}
	var _proto = TouristloginSkin.prototype;

	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.horizontalCenter = 14;
		t.lineSpacing = 10;
		t.size = 24;
		t.text = "游客账户无法在清除缓存或更换设备时保留已购买的内容及游戏进度，账号风险较高，请绑定手机！";
		t.textColor = 0x666666;
		t.width = 420;
		t.y = 74;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 36;
		t.text = "注意！";
		t.textColor = 0x666666;
		t.x = 20;
		t.y = 22;
		return t;
	};
	_proto.btn_BindingPhone_i = function () {
		var t = new eui.Button();
		this.btn_BindingPhone = t;
		t.label = "绑定手机";
		t.x = 172;
		t.y = 190;
		t.skinName = TouristloginSkin$Skin25;
		return t;
	};
	_proto.txt_Notlogging_i = function () {
		var t = new eui.Label();
		this.txt_Notlogging = t;
		t.size = 28;
		t.text = "暂不绑定";
		t.textColor = 0x999999;
		t.x = 374;
		t.y = 230;
		return t;
	};
	return TouristloginSkin;
})(eui.Skin);generateEUI.paths['resource/assets/base/module/login/UserAgreementSkin.exml'] = window.UserAgreementSkin = (function (_super) {
	__extends(UserAgreementSkin, _super);
	function UserAgreementSkin() {
		_super.call(this);
		this.skinParts = ["dataList","scroller","userAgreement_btn"];
		
		this.elementsContent = [this.scroller_i(),this.userAgreement_btn_i()];
	}
	var _proto = UserAgreementSkin.prototype;

	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.height = 400;
		t.skinName = "skins.ScrollerSkin";
		t.width = 560;
		t.x = 0;
		t.y = 0;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.dataList_i()];
		return t;
	};
	_proto.dataList_i = function () {
		var t = new eui.List();
		this.dataList = t;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.userAgreement_btn_i = function () {
		var t = new eui.Button();
		this.userAgreement_btn = t;
		t.horizontalCenter = 0.5;
		t.label = "确定";
		t.skinName = "Button3Skin";
		t.y = 433;
		return t;
	};
	return UserAgreementSkin;
})(eui.Skin);generateEUI.paths['resource/assets/base/module/memory/MemoryVideoSkin.exml'] = window.MemoryVideoSkin = (function (_super) {
	__extends(MemoryVideoSkin, _super);
	function MemoryVideoSkin() {
		_super.call(this);
		this.skinParts = ["groupBg","imgShow","imgMask","imgText","txtTitle","imgSign","groupUse","imgPlay"];
		
		this.elementsContent = [this.groupBg_i(),this.imgShow_i(),this.imgMask_i(),this.imgText_i(),this.txtTitle_i(),this.groupUse_i(),this.imgPlay_i()];
	}
	var _proto = MemoryVideoSkin.prototype;

	_proto.groupBg_i = function () {
		var t = new eui.Group();
		this.groupBg = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(18,9,113,82);
		t.source = "memory_json.memory_iconbg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.imgShow_i = function () {
		var t = new eui.Image();
		this.imgShow = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.imgMask_i = function () {
		var t = new eui.Rect();
		this.imgMask = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 324;
		t.width = 330;
		t.x = 10;
		t.y = 8;
		return t;
	};
	_proto.imgText_i = function () {
		var t = new eui.Image();
		this.imgText = t;
		t.source = "common_v1_rail_png";
		t.x = 12;
		t.y = 272;
		return t;
	};
	_proto.txtTitle_i = function () {
		var t = new eui.Label();
		this.txtTitle = t;
		t.horizontalCenter = 0;
		t.size = 22;
		t.stroke = 2;
		t.strokeColor = 0x6073ff;
		t.text = "我的女主";
		t.textColor = 0xffffff;
		t.y = 286;
		return t;
	};
	_proto.groupUse_i = function () {
		var t = new eui.Group();
		this.groupUse = t;
		t.x = 212;
		t.y = 18;
		t.elementsContent = [this.imgSign_i()];
		return t;
	};
	_proto.imgSign_i = function () {
		var t = new eui.Image();
		this.imgSign = t;
		t.source = "memory_json.memory_using_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.imgPlay_i = function () {
		var t = new eui.Image();
		this.imgPlay = t;
		t.source = "memory_json.memory_bofang_png";
		t.x = 65;
		t.y = 276;
		return t;
	};
	return MemoryVideoSkin;
})(eui.Skin);generateEUI.paths['resource/assets/base/module/memory/MemoryViewSkin.exml'] = window.MemoryViewSkin = (function (_super) {
	__extends(MemoryViewSkin, _super);
	var MemoryViewSkin$Skin26 = 	(function (_super) {
		__extends(MemoryViewSkin$Skin26, _super);
		function MemoryViewSkin$Skin26() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MemoryViewSkin$Skin26.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "memory_json.memory_bizhi_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MemoryViewSkin$Skin26;
	})(eui.Skin);

	var MemoryViewSkin$Skin27 = 	(function (_super) {
		__extends(MemoryViewSkin$Skin27, _super);
		function MemoryViewSkin$Skin27() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MemoryViewSkin$Skin27.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "memory_json.memory_shipin_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MemoryViewSkin$Skin27;
	})(eui.Skin);

	var MemoryViewSkin$Skin28 = 	(function (_super) {
		__extends(MemoryViewSkin$Skin28, _super);
		function MemoryViewSkin$Skin28() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MemoryViewSkin$Skin28.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "memory_json.memory_jieju_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MemoryViewSkin$Skin28;
	})(eui.Skin);

	var MemoryViewSkin$Skin29 = 	(function (_super) {
		__extends(MemoryViewSkin$Skin29, _super);
		function MemoryViewSkin$Skin29() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MemoryViewSkin$Skin29.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "memory_json.memory_btn0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MemoryViewSkin$Skin29;
	})(eui.Skin);

	function MemoryViewSkin() {
		_super.call(this);
		this.skinParts = ["txtTitle","txtNumber","txtNew","btnBack","viewStack","btnBizhi","btnShipin","btnJieju","btnChange"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.txtTitle_i(),this.txtNumber_i(),this.txtNew_i(),this.btnBack_i(),this.viewStack_i(),this._Image3_i(),this.btnBizhi_i(),this.btnShipin_i(),this.btnJieju_i(),this.btnChange_i()];
	}
	var _proto = MemoryViewSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "skyblue_bg_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "memory_json.memory_titlebg_png";
		t.x = 147;
		t.y = 0;
		return t;
	};
	_proto.txtTitle_i = function () {
		var t = new eui.Label();
		this.txtTitle = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "动态壁纸";
		t.y = 49;
		return t;
	};
	_proto.txtNumber_i = function () {
		var t = new eui.Label();
		this.txtNumber = t;
		t.right = 41;
		t.size = 30;
		t.stroke = 3;
		t.strokeColor = 0x4fb7fb;
		t.text = "（1/10）";
		t.y = 49;
		return t;
	};
	_proto.txtNew_i = function () {
		var t = new eui.Label();
		this.txtNew = t;
		t.size = 20;
		t.stroke = 3;
		t.strokeColor = 0x4FB7FB;
		t.text = "新增";
		t.x = 648;
		t.y = 36;
		return t;
	};
	_proto.btnBack_i = function () {
		var t = new eui.Image();
		this.btnBack = t;
		t.source = "common_v1_fanhui_png";
		t.x = 36;
		t.y = 22;
		return t;
	};
	_proto.viewStack_i = function () {
		var t = new eui.ViewStack();
		this.viewStack = t;
		t.anchorOffsetY = 0;
		t.bottom = 103;
		t.selectedIndex = 1;
		t.top = 170;
		t.width = 720;
		t.x = 0;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.name = "Group";
		t.percentWidth = 100;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.name = "视图";
		t.percentWidth = 100;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.name = "Group";
		t.percentWidth = 100;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.scale9Grid = new egret.Rectangle(14,12,86,79);
		t.source = "memory_json.memory_downbg_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.btnBizhi_i = function () {
		var t = new eui.Button();
		this.btnBizhi = t;
		t.label = "";
		t.x = 90;
		t.y = 1201;
		t.skinName = MemoryViewSkin$Skin26;
		return t;
	};
	_proto.btnShipin_i = function () {
		var t = new eui.Button();
		this.btnShipin = t;
		t.label = "";
		t.x = 314;
		t.y = 1201;
		t.skinName = MemoryViewSkin$Skin27;
		return t;
	};
	_proto.btnJieju_i = function () {
		var t = new eui.Button();
		this.btnJieju = t;
		t.label = "";
		t.x = 536;
		t.y = 1201;
		t.skinName = MemoryViewSkin$Skin28;
		return t;
	};
	_proto.btnChange_i = function () {
		var t = new eui.Button();
		this.btnChange = t;
		t.label = "";
		t.touchChildren = false;
		t.touchEnabled = false;
		t.x = 90;
		t.y = 1189;
		t.skinName = MemoryViewSkin$Skin29;
		return t;
	};
	return MemoryViewSkin;
})(eui.Skin);generateEUI.paths['resource/assets/base/module/notice/GameNoticeViewSkin.exml'] = window.GameNoticeViewSkin = (function (_super) {
	__extends(GameNoticeViewSkin, _super);
	function GameNoticeViewSkin() {
		_super.call(this);
		this.skinParts = ["txtNotice","scrollBar","btnOK"];
		
		this.height = 420;
		this.width = 510;
		this.elementsContent = [this.scrollBar_i(),this.btnOK_i()];
	}
	var _proto = GameNoticeViewSkin.prototype;

	_proto.scrollBar_i = function () {
		var t = new eui.Scroller();
		this.scrollBar = t;
		t.height = 200;
		t.skinName = "skins.ScrollerSkin";
		t.width = 510;
		t.y = 8;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.txtNotice_i()];
		return t;
	};
	_proto.txtNotice_i = function () {
		var t = new eui.Label();
		this.txtNotice = t;
		t.anchorOffsetX = 0;
		t.lineSpacing = 15;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "";
		t.textColor = 0x333333;
		t.width = 510;
		t.x = 0;
		t.y = 2;
		return t;
	};
	_proto.btnOK_i = function () {
		var t = new eui.Button();
		this.btnOK = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 2;
		t.horizontalCenter = 0;
		t.label = "确 定";
		t.skinName = "Button5Skin";
		return t;
	};
	return GameNoticeViewSkin;
})(eui.Skin);generateEUI.paths['resource/assets/base/module/record/RecordItemSkin.exml'] = window.RecordItemSkin = (function (_super) {
	__extends(RecordItemSkin, _super);
	function RecordItemSkin() {
		_super.call(this);
		this.skinParts = ["imgBg","txtNull","imgNocontent","imgRecord","imgMask","imgText","txtDesc"];
		
		this.height = 606;
		this.width = 350;
		this.elementsContent = [this.imgBg_i(),this.txtNull_i(),this.imgNocontent_i(),this.imgRecord_i(),this.imgMask_i(),this.imgText_i(),this.txtDesc_i()];
	}
	var _proto = RecordItemSkin.prototype;

	_proto.imgBg_i = function () {
		var t = new eui.Image();
		this.imgBg = t;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(16,10,101,70);
		t.source = "record_json.record_itembg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.txtNull_i = function () {
		var t = new eui.Label();
		this.txtNull = t;
		t.horizontalCenter = 0;
		t.size = 22;
		t.strokeColor = 0x000000;
		t.text = "暂时木有内容呀 ~";
		t.textColor = 0x0a92c9;
		t.verticalCenter = 130;
		return t;
	};
	_proto.imgNocontent_i = function () {
		var t = new eui.Image();
		this.imgNocontent = t;
		t.horizontalCenter = 0;
		t.source = "record_json.record_nocontent_png";
		t.verticalCenter = -30;
		return t;
	};
	_proto.imgRecord_i = function () {
		var t = new eui.Image();
		this.imgRecord = t;
		t.bottom = 17;
		t.left = 10;
		t.right = 10;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "";
		return t;
	};
	_proto.imgMask_i = function () {
		var t = new eui.Rect();
		this.imgMask = t;
		t.bottom = 17;
		t.left = 12;
		t.right = 12;
		t.top = 10;
		return t;
	};
	_proto.imgText_i = function () {
		var t = new eui.Image();
		this.imgText = t;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(34,11,48,21);
		t.source = "common_v1_rail_png";
		t.y = 16;
		return t;
	};
	_proto.txtDesc_i = function () {
		var t = new eui.Label();
		this.txtDesc = t;
		t.fontFamily = "fzyc";
		t.horizontalCenter = 0;
		t.size = 22;
		t.stroke = 2;
		t.strokeColor = 0x6073ff;
		t.text = "9月12日 18点30分";
		t.textColor = 0xffffff;
		t.y = 30;
		return t;
	};
	return RecordItemSkin;
})(eui.Skin);generateEUI.paths['resource/assets/base/module/record/RecordSkin.exml'] = window.RecordSkin = (function (_super) {
	__extends(RecordSkin, _super);
	var RecordSkin$Skin30 = 	(function (_super) {
		__extends(RecordSkin$Skin30, _super);
		function RecordSkin$Skin30() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RecordSkin$Skin30.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "record_json.record_begin_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RecordSkin$Skin30;
	})(eui.Skin);

	function RecordSkin() {
		_super.call(this);
		this.skinParts = ["btnBack","btnReplay","groupItem"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this.btnBack_i(),this.btnReplay_i(),this.groupItem_i()];
	}
	var _proto = RecordSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "skyblue_bg_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btnBack_i = function () {
		var t = new eui.Image();
		this.btnBack = t;
		t.source = "common_v1_fanhui_png";
		t.x = 36;
		t.y = 22;
		return t;
	};
	_proto.btnReplay_i = function () {
		var t = new eui.Button();
		this.btnReplay = t;
		t.label = "";
		t.x = 489;
		t.y = 28;
		t.skinName = RecordSkin$Skin30;
		return t;
	};
	_proto.groupItem_i = function () {
		var t = new eui.Group();
		this.groupItem = t;
		t.anchorOffsetY = 0;
		t.height = 1110;
		t.top = 170;
		t.width = 720;
		t.x = 0;
		return t;
	};
	return RecordSkin;
})(eui.Skin);generateEUI.paths['resource/assets/base/module/roledetail/ChaoZhiZuHeSkin.exml'] = window.ChaoZhiZuHeSkin = (function (_super) {
	__extends(ChaoZhiZuHeSkin, _super);
	var ChaoZhiZuHeSkin$Skin31 = 	(function (_super) {
		__extends(ChaoZhiZuHeSkin$Skin31, _super);
		function ChaoZhiZuHeSkin$Skin31() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ChaoZhiZuHeSkin$Skin31.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "common_v1_json.common_v1_buy_zuhe_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ChaoZhiZuHeSkin$Skin31;
	})(eui.Skin);

	var ChaoZhiZuHeSkin$Skin32 = 	(function (_super) {
		__extends(ChaoZhiZuHeSkin$Skin32, _super);
		function ChaoZhiZuHeSkin$Skin32() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ChaoZhiZuHeSkin$Skin32.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "s1_btn_close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "fzyc";
			t.horizontalCenter = 0;
			t.size = 22;
			t.textColor = 0x5f78e0;
			t.verticalCenter = 0;
			return t;
		};
		return ChaoZhiZuHeSkin$Skin32;
	})(eui.Skin);

	function ChaoZhiZuHeSkin() {
		_super.call(this);
		this.skinParts = ["rectBg","bg","txtPrice","txtTime","btnBuy","btn_quit"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.rectBg_i(),this.bg_i(),this.txtPrice_i(),this.txtTime_i(),this.btnBuy_i(),this.btn_quit_i()];
	}
	var _proto = ChaoZhiZuHeSkin.prototype;

	_proto.rectBg_i = function () {
		var t = new eui.Rect();
		this.rectBg = t;
		t.height = 1280;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.top = 360;
		return t;
	};
	_proto.txtPrice_i = function () {
		var t = new eui.Label();
		this.txtPrice = t;
		t.fontFamily = "fzyc";
		t.italic = true;
		t.left = 425;
		t.size = 28;
		t.stroke = 2;
		t.strokeColor = 0xd55735;
		t.text = "100";
		t.textColor = 0xfff488;
		t.top = 762;
		t.touchEnabled = false;
		return t;
	};
	_proto.txtTime_i = function () {
		var t = new eui.Label();
		this.txtTime = t;
		t.fontFamily = "fzyc";
		t.height = 22;
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "活动时间";
		t.textAlign = "center";
		t.textColor = 0xA4B6FF;
		t.top = 835;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.btnBuy_i = function () {
		var t = new eui.Button();
		this.btnBuy = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.top = 938;
		t.skinName = ChaoZhiZuHeSkin$Skin31;
		return t;
	};
	_proto.btn_quit_i = function () {
		var t = new eui.Button();
		this.btn_quit = t;
		t.label = "";
		t.right = 76;
		t.top = 412;
		t.skinName = ChaoZhiZuHeSkin$Skin32;
		return t;
	};
	return ChaoZhiZuHeSkin;
})(eui.Skin);generateEUI.paths['resource/assets/base/module/roledetail/HeroniesDetailSkin.exml'] = window.HeroniesDetailSkin = (function (_super) {
	__extends(HeroniesDetailSkin, _super);
	var HeroniesDetailSkin$Skin33 = 	(function (_super) {
		__extends(HeroniesDetailSkin$Skin33, _super);
		function HeroniesDetailSkin$Skin33() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HeroniesDetailSkin$Skin33.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "common_v1_json.common_v1_set_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HeroniesDetailSkin$Skin33;
	})(eui.Skin);

	var HeroniesDetailSkin$Skin34 = 	(function (_super) {
		__extends(HeroniesDetailSkin$Skin34, _super);
		function HeroniesDetailSkin$Skin34() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HeroniesDetailSkin$Skin34.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "roledetail_json.roledetail_juese";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HeroniesDetailSkin$Skin34;
	})(eui.Skin);

	var HeroniesDetailSkin$Skin35 = 	(function (_super) {
		__extends(HeroniesDetailSkin$Skin35, _super);
		function HeroniesDetailSkin$Skin35() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HeroniesDetailSkin$Skin35.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "roledetail_json.roledetail_anniu";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HeroniesDetailSkin$Skin35;
	})(eui.Skin);

	var HeroniesDetailSkin$Skin36 = 	(function (_super) {
		__extends(HeroniesDetailSkin$Skin36, _super);
		function HeroniesDetailSkin$Skin36() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HeroniesDetailSkin$Skin36.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "roledetail_json.roledetail_duqu";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HeroniesDetailSkin$Skin36;
	})(eui.Skin);

	var HeroniesDetailSkin$Skin37 = 	(function (_super) {
		__extends(HeroniesDetailSkin$Skin37, _super);
		function HeroniesDetailSkin$Skin37() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HeroniesDetailSkin$Skin37.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "roledetail_json.roledetail_huiyi";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HeroniesDetailSkin$Skin37;
	})(eui.Skin);

	function HeroniesDetailSkin() {
		_super.call(this);
		this.skinParts = ["groupVideo","btnBack","img_shezhi","boxSet","btnOtherStory","boxStory","imgStory","txtStory","groupNew","btnDuqu","groupDuqu","btnHuiyi","groupHuiyi","txtDesc","txtHeroniesName","txtHeroniesLabel"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.groupVideo_i(),this.btnBack_i(),this.boxSet_i(),this.boxStory_i(),this._Image1_i(),this.groupNew_i(),this.groupDuqu_i(),this.groupHuiyi_i(),this._Image5_i(),this.txtDesc_i(),this.txtHeroniesName_i(),this.txtHeroniesLabel_i()];
	}
	var _proto = HeroniesDetailSkin.prototype;

	_proto.groupVideo_i = function () {
		var t = new eui.Group();
		this.groupVideo = t;
		t.anchorOffsetY = 0;
		t.height = 1280;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btnBack_i = function () {
		var t = new eui.Image();
		this.btnBack = t;
		t.source = "common_v1_fanhui_png";
		t.x = 48;
		t.y = 49;
		return t;
	};
	_proto.boxSet_i = function () {
		var t = new eui.Group();
		this.boxSet = t;
		t.height = 120;
		t.width = 120;
		t.x = 562;
		t.y = 30;
		t.elementsContent = [this.img_shezhi_i()];
		return t;
	};
	_proto.img_shezhi_i = function () {
		var t = new eui.Button();
		this.img_shezhi = t;
		t.anchorOffsetX = 42;
		t.anchorOffsetY = 42;
		t.label = "";
		t.rotation = 19;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 60;
		t.y = 60;
		t.skinName = HeroniesDetailSkin$Skin33;
		return t;
	};
	_proto.boxStory_i = function () {
		var t = new eui.Group();
		this.boxStory = t;
		t.x = 570;
		t.y = 48;
		t.elementsContent = [this.btnOtherStory_i()];
		return t;
	};
	_proto.btnOtherStory_i = function () {
		var t = new eui.Button();
		this.btnOtherStory = t;
		t.label = "";
		t.x = 0;
		t.y = 0;
		t.skinName = HeroniesDetailSkin$Skin34;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 312;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(88,46,534,41);
		t.source = "roledetail_json.roledetail_mask";
		t.y = 963;
		return t;
	};
	_proto.groupNew_i = function () {
		var t = new eui.Group();
		this.groupNew = t;
		t.x = 501;
		t.y = 859;
		t.elementsContent = [this.imgStory_i(),this.txtStory_i(),this._Image2_i(),this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto.imgStory_i = function () {
		var t = new eui.Button();
		this.imgStory = t;
		t.label = "";
		t.left = 0;
		t.top = 0;
		t.skinName = HeroniesDetailSkin$Skin35;
		return t;
	};
	_proto.txtStory_i = function () {
		var t = new eui.Label();
		this.txtStory = t;
		t.bold = true;
		t.fontFamily = "fzyc";
		t.horizontalCenter = 0;
		t.size = 34;
		t.stroke = 2;
		t.strokeColor = 0xf23655;
		t.text = "邂逅她";
		t.touchEnabled = false;
		t.y = 68.89;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "roledetail_json.roledetail_xin1";
		t.visible = false;
		t.x = 99;
		t.y = -85;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "roledetail_json.roledetail_xin2";
		t.visible = false;
		t.x = 49;
		t.y = -43;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "roledetail_json.roledetail_xin3";
		t.visible = false;
		t.x = 90;
		t.y = -131;
		return t;
	};
	_proto.groupDuqu_i = function () {
		var t = new eui.Group();
		this.groupDuqu = t;
		t.x = 533;
		t.y = 1068;
		t.elementsContent = [this.btnDuqu_i()];
		return t;
	};
	_proto.btnDuqu_i = function () {
		var t = new eui.Button();
		this.btnDuqu = t;
		t.label = "";
		t.left = 0;
		t.top = 0;
		t.skinName = HeroniesDetailSkin$Skin36;
		return t;
	};
	_proto.groupHuiyi_i = function () {
		var t = new eui.Group();
		this.groupHuiyi = t;
		t.x = 533;
		t.y = 1148;
		t.elementsContent = [this.btnHuiyi_i()];
		return t;
	};
	_proto.btnHuiyi_i = function () {
		var t = new eui.Button();
		this.btnHuiyi = t;
		t.label = "";
		t.left = 0;
		t.top = 0;
		t.skinName = HeroniesDetailSkin$Skin37;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "roledetail_json.roledetail_zhezhao";
		t.x = 0;
		t.y = 929;
		return t;
	};
	_proto.txtDesc_i = function () {
		var t = new eui.Label();
		this.txtDesc = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "fzyc";
		t.lineSpacing = 10;
		t.size = 26;
		t.text = "新的故事新？的故事新的故事新的故事新的故事新的故事";
		t.textColor = 0xb57575;
		t.width = 472;
		t.x = 42;
		t.y = 1067;
		return t;
	};
	_proto.txtHeroniesName_i = function () {
		var t = new eui.Label();
		this.txtHeroniesName = t;
		t.bold = true;
		t.lineSpacing = 5;
		t.size = 30;
		t.text = "新的故事新的故";
		t.x = 42;
		t.y = 983;
		return t;
	};
	_proto.txtHeroniesLabel_i = function () {
		var t = new eui.Label();
		this.txtHeroniesLabel = t;
		t.fontFamily = "fzyc";
		t.lineSpacing = 5;
		t.size = 22;
		t.text = "新的故事 | 新的故事";
		t.x = 276;
		t.y = 989;
		return t;
	};
	return HeroniesDetailSkin;
})(eui.Skin);generateEUI.paths['resource/assets/base/module/roledetail/HeroniesLabelSkin.exml'] = window.HeroniesLabelSkin = (function (_super) {
	__extends(HeroniesLabelSkin, _super);
	function HeroniesLabelSkin() {
		_super.call(this);
		this.skinParts = ["txtSign"];
		
		this.elementsContent = [this._Image1_i(),this.txtSign_i()];
	}
	var _proto = HeroniesLabelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "roledetail_json.roledetail_biaoqian";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.txtSign_i = function () {
		var t = new eui.Label();
		this.txtSign = t;
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "新的故事";
		t.verticalCenter = 0;
		return t;
	};
	return HeroniesLabelSkin;
})(eui.Skin);generateEUI.paths['resource/assets/base/module/roledetail/HeroniesOtherStorySkin.exml'] = window.HeroniesOtherStorySkin = (function (_super) {
	__extends(HeroniesOtherStorySkin, _super);
	var HeroniesOtherStorySkin$Skin38 = 	(function (_super) {
		__extends(HeroniesOtherStorySkin$Skin38, _super);
		function HeroniesOtherStorySkin$Skin38() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
						new eui.SetProperty("_Image1","scaleY",0.77)
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",1.1),
						new eui.SetProperty("_Image1","scaleY",0.85),
						new eui.SetProperty("labelDisplay","scaleX",1.1),
						new eui.SetProperty("labelDisplay","scaleY",1.1)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HeroniesOtherStorySkin$Skin38.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "common_v1_json.common_v1_button6_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HeroniesOtherStorySkin$Skin38;
	})(eui.Skin);

	function HeroniesOtherStorySkin() {
		_super.call(this);
		this.skinParts = ["imgBg","txtDetail","btnStart"];
		
		this.width = 589;
		this.elementsContent = [this.imgBg_i(),this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Label1_i(),this.txtDetail_i(),this.btnStart_i()];
	}
	var _proto = HeroniesOtherStorySkin.prototype;

	_proto.imgBg_i = function () {
		var t = new eui.Image();
		this.imgBg = t;
		t.height = 502;
		t.source = "";
		t.width = 589;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "roledetail_json.roledetail_title_flag";
		t.x = 31;
		t.y = 535;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "roledetail_json.roledetail_line";
		t.x = 28;
		t.y = 782.33;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "roledetail_json.roledetail_bottom";
		t.x = 0;
		t.y = 910;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.lineSpacing = 5;
		t.size = 24;
		t.text = "简介:";
		t.textColor = 0x666666;
		t.x = 68;
		t.y = 535;
		return t;
	};
	_proto.txtDetail_i = function () {
		var t = new eui.Label();
		this.txtDetail = t;
		t.anchorOffsetY = 0;
		t.fontFamily = "fzyc";
		t.height = 187;
		t.lineSpacing = 15;
		t.size = 24;
		t.text = "前男友前男友前男友前男友前男友前男友前男友前男友前男友前男友前男友前男友前男友前男友前男友前男友前男友前男友前男友前男友前男友前男友前男友前男友前男友前男友";
		t.textColor = 0x333333;
		t.width = 530;
		t.wordWrap = true;
		t.x = 31;
		t.y = 589;
		return t;
	};
	_proto.btnStart_i = function () {
		var t = new eui.Button();
		this.btnStart = t;
		t.horizontalCenter = 0;
		t.label = "开始故事";
		t.verticalCenter = 380;
		t.skinName = HeroniesOtherStorySkin$Skin38;
		return t;
	};
	return HeroniesOtherStorySkin;
})(eui.Skin);generateEUI.paths['resource/assets/base/module/roledetail/HeroniesSettingSkin.exml'] = window.HeroniesSettingSkin = (function (_super) {
	__extends(HeroniesSettingSkin, _super);
	var HeroniesSettingSkin$Skin39 = 	(function (_super) {
		__extends(HeroniesSettingSkin$Skin39, _super);
		function HeroniesSettingSkin$Skin39() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","on_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HeroniesSettingSkin$Skin39.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "off_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HeroniesSettingSkin$Skin39;
	})(eui.Skin);

	var HeroniesSettingSkin$Skin40 = 	(function (_super) {
		__extends(HeroniesSettingSkin$Skin40, _super);
		function HeroniesSettingSkin$Skin40() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","on_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HeroniesSettingSkin$Skin40.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "off_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HeroniesSettingSkin$Skin40;
	})(eui.Skin);

	var HeroniesSettingSkin$Skin41 = 	(function (_super) {
		__extends(HeroniesSettingSkin$Skin41, _super);
		function HeroniesSettingSkin$Skin41() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","on_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HeroniesSettingSkin$Skin41.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "off_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HeroniesSettingSkin$Skin41;
	})(eui.Skin);

	var HeroniesSettingSkin$Skin42 = 	(function (_super) {
		__extends(HeroniesSettingSkin$Skin42, _super);
		function HeroniesSettingSkin$Skin42() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","on_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HeroniesSettingSkin$Skin42.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "off_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HeroniesSettingSkin$Skin42;
	})(eui.Skin);

	function HeroniesSettingSkin() {
		_super.call(this);
		this.skinParts = ["btn_bgm","btn_effect","btn_rolesound","btn_autoplay","txtSpeed1","txtSpeed2","txtSpeed3","imgSlideBg","imgSlide","groupSlider","btn_sure"];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this.btn_bgm_i(),this.btn_effect_i(),this.btn_rolesound_i(),this.btn_autoplay_i(),this._Label5_i(),this.groupSlider_i(),this.btn_sure_i()];
	}
	var _proto = HeroniesSettingSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "ghsetting_json.ghsetting_music_png";
		t.x = 0;
		t.y = 10;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "ghsetting_json.ghsetting_sound_png";
		t.x = 4;
		t.y = 98;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "ghsetting_json.ghsetting_play_png";
		t.x = 272;
		t.y = 98;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "ghsetting_json.ghsetting_voice_png";
		t.x = 272;
		t.y = 9;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 26;
		t.text = "音乐 ：";
		t.textColor = 0x666666;
		t.x = 30;
		t.y = 10;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 26;
		t.text = "音效：";
		t.textColor = 0x666666;
		t.x = 35;
		t.y = 98;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 26;
		t.text = "角色语音 ：";
		t.textColor = 0x666666;
		t.x = 302;
		t.y = 10;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.size = 26;
		t.text = "自动播放：";
		t.textColor = 0x666666;
		t.x = 302;
		t.y = 98;
		return t;
	};
	_proto.btn_bgm_i = function () {
		var t = new eui.ToggleButton();
		this.btn_bgm = t;
		t.label = "";
		t.x = 122;
		t.y = 0;
		t.skinName = HeroniesSettingSkin$Skin39;
		return t;
	};
	_proto.btn_effect_i = function () {
		var t = new eui.ToggleButton();
		this.btn_effect = t;
		t.label = "";
		t.x = 122;
		t.y = 88;
		t.skinName = HeroniesSettingSkin$Skin40;
		return t;
	};
	_proto.btn_rolesound_i = function () {
		var t = new eui.ToggleButton();
		this.btn_rolesound = t;
		t.label = "";
		t.x = 432;
		t.y = 0;
		t.skinName = HeroniesSettingSkin$Skin41;
		return t;
	};
	_proto.btn_autoplay_i = function () {
		var t = new eui.ToggleButton();
		this.btn_autoplay = t;
		t.label = "";
		t.x = 432;
		t.y = 88;
		t.skinName = HeroniesSettingSkin$Skin42;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.size = 28;
		t.text = "文字速度 ：";
		t.textColor = 0x666666;
		t.x = 45;
		t.y = 221;
		return t;
	};
	_proto.groupSlider_i = function () {
		var t = new eui.Group();
		this.groupSlider = t;
		t.width = 335;
		t.x = 194;
		t.y = 219;
		t.elementsContent = [this.txtSpeed1_i(),this.txtSpeed2_i(),this.txtSpeed3_i(),this.imgSlideBg_i(),this.imgSlide_i()];
		return t;
	};
	_proto.txtSpeed1_i = function () {
		var t = new eui.Label();
		this.txtSpeed1 = t;
		t.size = 22;
		t.text = "慢";
		t.textColor = 0x666666;
		t.x = 10;
		t.y = 40;
		return t;
	};
	_proto.txtSpeed2_i = function () {
		var t = new eui.Label();
		this.txtSpeed2 = t;
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "中";
		t.textColor = 0x666666;
		t.y = 40;
		return t;
	};
	_proto.txtSpeed3_i = function () {
		var t = new eui.Label();
		this.txtSpeed3 = t;
		t.size = 22;
		t.text = "快";
		t.textColor = 0x666666;
		t.x = 303;
		t.y = 40;
		return t;
	};
	_proto.imgSlideBg_i = function () {
		var t = new eui.Image();
		this.imgSlideBg = t;
		t.source = "ghsetting_json.ghsetting_bg_png";
		t.x = 5;
		t.y = 0;
		return t;
	};
	_proto.imgSlide_i = function () {
		var t = new eui.Image();
		this.imgSlide = t;
		t.source = "ghsetting_json.ghsetting_select_png";
		t.x = 147;
		t.y = -3;
		return t;
	};
	_proto.btn_sure_i = function () {
		var t = new eui.Button();
		this.btn_sure = t;
		t.label = "确定";
		t.skinName = "Button3Skin";
		t.x = 139;
		t.y = 354;
		return t;
	};
	return HeroniesSettingSkin;
})(eui.Skin);generateEUI.paths['resource/assets/base/module/roledetail/WeChatQRCodeSkin.exml'] = window.WeChatQRCodeSkin = (function (_super) {
	__extends(WeChatQRCodeSkin, _super);
	var WeChatQRCodeSkin$Skin43 = 	(function (_super) {
		__extends(WeChatQRCodeSkin$Skin43, _super);
		function WeChatQRCodeSkin$Skin43() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = WeChatQRCodeSkin$Skin43.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "choosepay_close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return WeChatQRCodeSkin$Skin43;
	})(eui.Skin);

	function WeChatQRCodeSkin() {
		_super.call(this);
		this.skinParts = ["txtTitle","txt_money","txtTishi","imgPayType","btn_close"];
		
		this.elementsContent = [this._Image1_i(),this.txtTitle_i(),this._Label1_i(),this.txt_money_i(),this.txtTishi_i(),this.imgPayType_i(),this.btn_close_i()];
	}
	var _proto = WeChatQRCodeSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 500;
		t.scale9Grid = new egret.Rectangle(82,84,494,31);
		t.source = "choosepay_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.txtTitle_i = function () {
		var t = new eui.Label();
		this.txtTitle = t;
		t.fontFamily = "fzyc";
		t.horizontalCenter = 0;
		t.size = 34;
		t.text = "订单支付";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 21;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.size = 46;
		t.text = "￥:";
		t.textAlign = "center";
		t.textColor = 0x333333;
		t.verticalAlign = "middle";
		t.x = 264;
		t.y = 105;
		return t;
	};
	_proto.txt_money_i = function () {
		var t = new eui.Label();
		this.txt_money = t;
		t.bold = true;
		t.fontFamily = "fzyc";
		t.size = 40;
		t.text = "000";
		t.textAlign = "center";
		t.textColor = 0xFF7D4A;
		t.verticalAlign = "middle";
		t.x = 333;
		t.y = 111;
		return t;
	};
	_proto.txtTishi_i = function () {
		var t = new eui.Label();
		this.txtTishi = t;
		t.fontFamily = "fzyc";
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "确认无误后，请扫描二维码支付购买";
		t.textAlign = "center";
		t.textColor = 0xB1B1B1;
		t.verticalAlign = "middle";
		t.y = 447;
		return t;
	};
	_proto.imgPayType_i = function () {
		var t = new eui.Image();
		this.imgPayType = t;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0.5;
		t.scale9Grid = new egret.Rectangle(82,84,494,31);
		t.source = "";
		t.y = 387;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Button();
		this.btn_close = t;
		t.label = "";
		t.x = 606;
		t.y = 23;
		t.skinName = WeChatQRCodeSkin$Skin43;
		return t;
	};
	return WeChatQRCodeSkin;
})(eui.Skin);generateEUI.paths['resource/assets/base/module/video/VideoButtonSkin.exml'] = window.VideoButtonSkin = (function (_super) {
	__extends(VideoButtonSkin, _super);
	var VideoButtonSkin$Skin44 = 	(function (_super) {
		__extends(VideoButtonSkin$Skin44, _super);
		function VideoButtonSkin$Skin44() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = VideoButtonSkin$Skin44.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "common_v1_button4_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return VideoButtonSkin$Skin44;
	})(eui.Skin);

	var VideoButtonSkin$Skin45 = 	(function (_super) {
		__extends(VideoButtonSkin$Skin45, _super);
		function VideoButtonSkin$Skin45() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = VideoButtonSkin$Skin45.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "common_v1_button5_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return VideoButtonSkin$Skin45;
	})(eui.Skin);

	function VideoButtonSkin() {
		_super.call(this);
		this.skinParts = ["bgRect","btnBack","btnPlay","btnUse","btnShare","groupSkip"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.bgRect_i(),this.btnBack_i(),this.btnPlay_i(),this.btnUse_i(),this.btnShare_i(),this.groupSkip_i()];
	}
	var _proto = VideoButtonSkin.prototype;

	_proto.bgRect_i = function () {
		var t = new eui.Rect();
		this.bgRect = t;
		t.alpha = 0;
		t.bottom = 0;
		t.fillColor = 0x000000;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = true;
		return t;
	};
	_proto.btnBack_i = function () {
		var t = new eui.Image();
		this.btnBack = t;
		t.source = "common_v1_json.common_v1_fanhui_png";
		t.x = 36;
		t.y = 22;
		return t;
	};
	_proto.btnPlay_i = function () {
		var t = new eui.Image();
		this.btnPlay = t;
		t.horizontalCenter = 0;
		t.source = "video_json.video_bofang_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.btnUse_i = function () {
		var t = new eui.Button();
		this.btnUse = t;
		t.bottom = 25;
		t.horizontalCenter = -130;
		t.label = "使用中";
		t.skinName = VideoButtonSkin$Skin44;
		return t;
	};
	_proto.btnShare_i = function () {
		var t = new eui.Button();
		this.btnShare = t;
		t.bottom = 25;
		t.horizontalCenter = 130;
		t.label = "分享";
		t.skinName = VideoButtonSkin$Skin45;
		return t;
	};
	_proto.groupSkip_i = function () {
		var t = new eui.Group();
		this.groupSkip = t;
		t.bottom = 26;
		t.right = 20;
		t.elementsContent = [this._Label1_i(),this._Rect1_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 32;
		t.stroke = 1;
		t.text = "跳过";
		t.textColor = 0xFFFFFF;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.01;
		t.bottom = 0;
		t.height = 32;
		t.right = 0;
		t.touchEnabled = true;
		t.width = 66;
		return t;
	};
	return VideoButtonSkin;
})(eui.Skin);generateEUI.paths['resource/assets/base/module/window/WindowView2Skin.exml'] = window.WindowView2Skin = (function (_super) {
	__extends(WindowView2Skin, _super);
	function WindowView2Skin() {
		_super.call(this);
		this.skinParts = ["imgBg","groupView"];
		
		this.elementsContent = [this.imgBg_i(),this.groupView_i()];
	}
	var _proto = WindowView2Skin.prototype;

	_proto.imgBg_i = function () {
		var t = new eui.Image();
		this.imgBg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(80,76,689,358);
		t.source = "set2_ditu_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.groupView_i = function () {
		var t = new eui.Group();
		this.groupView = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 200;
		t.width = 100;
		t.x = 30;
		t.y = 30;
		return t;
	};
	return WindowView2Skin;
})(eui.Skin);generateEUI.paths['resource/assets/base/module/window/WindowView3Skin.exml'] = window.WindowView3Skin = (function (_super) {
	__extends(WindowView3Skin, _super);
	function WindowView3Skin() {
		_super.call(this);
		this.skinParts = ["imgBg","txtTitle","container"];
		
		this.height = 300;
		this.width = 400;
		this.elementsContent = [this.imgBg_i(),this.txtTitle_i(),this.container_i()];
	}
	var _proto = WindowView3Skin.prototype;

	_proto.imgBg_i = function () {
		var t = new eui.Image();
		this.imgBg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(29,80,599,47);
		t.source = "common_v1_rail4_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.txtTitle_i = function () {
		var t = new eui.Label();
		this.txtTitle = t;
		t.horizontalCenter = 0;
		t.lineSpacing = 5;
		t.size = 30;
		t.text = "标题标题";
		t.y = 20;
		return t;
	};
	_proto.container_i = function () {
		var t = new eui.Group();
		this.container = t;
		t.x = 22;
		t.y = 84;
		return t;
	};
	return WindowView3Skin;
})(eui.Skin);generateEUI.paths['resource/assets/base/module/window/WindowViewSkin.exml'] = window.WindowViewSkin = (function (_super) {
	__extends(WindowViewSkin, _super);
	function WindowViewSkin() {
		_super.call(this);
		this.skinParts = ["imgBg0","imgBg","txtRightTitle","groupRightTitle","txtCenterTitle","groupCenterTitle","groupView","txtTopTitle","groupTopTitle"];
		
		this.elementsContent = [this.imgBg0_i(),this.imgBg_i(),this._Image1_i(),this.groupRightTitle_i(),this.groupCenterTitle_i(),this.groupView_i(),this.groupTopTitle_i()];
	}
	var _proto = WindowViewSkin.prototype;

	_proto.imgBg0_i = function () {
		var t = new eui.Image();
		this.imgBg0 = t;
		t.height = 667;
		t.rotation = 358;
		t.scale9Grid = new egret.Rectangle(14,11,107,88);
		t.smoothing = true;
		t.source = "common_v1_bg1_png";
		t.width = 646;
		t.x = -10;
		t.y = 12;
		return t;
	};
	_proto.imgBg_i = function () {
		var t = new eui.Image();
		this.imgBg = t;
		t.height = 667;
		t.scale9Grid = new egret.Rectangle(16,13,102,85);
		t.source = "common_v1_bg1_png";
		t.width = 646;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 22;
		t.source = "common_v1_json.common_v1_border_png";
		t.x = 2;
		return t;
	};
	_proto.groupRightTitle_i = function () {
		var t = new eui.Group();
		this.groupRightTitle = t;
		t.x = 308;
		t.y = 2;
		t.elementsContent = [this._Image2_i(),this.txtRightTitle_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "common_v1_json.common_v1_triangle_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.txtRightTitle_i = function () {
		var t = new eui.Label();
		this.txtRightTitle = t;
		t.bold = true;
		t.horizontalCenter = 77.5;
		t.lineSpacing = 5;
		t.size = 30;
		t.text = "标题标题";
		t.y = 37;
		return t;
	};
	_proto.groupCenterTitle_i = function () {
		var t = new eui.Group();
		this.groupCenterTitle = t;
		t.horizontalCenter = 0;
		t.y = 26;
		t.elementsContent = [this._Image3_i(),this.txtCenterTitle_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "common_v1_rail1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.txtCenterTitle_i = function () {
		var t = new eui.Label();
		this.txtCenterTitle = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.lineSpacing = 5;
		t.size = 30;
		t.text = "标题标题";
		t.verticalCenter = 0;
		return t;
	};
	_proto.groupView_i = function () {
		var t = new eui.Group();
		this.groupView = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = -5;
		t.y = 105;
		return t;
	};
	_proto.groupTopTitle_i = function () {
		var t = new eui.Group();
		this.groupTopTitle = t;
		t.horizontalCenter = 0;
		t.y = -52;
		t.elementsContent = [this._Image4_i(),this.txtTopTitle_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "common_v1_rail2_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.txtTopTitle_i = function () {
		var t = new eui.Label();
		this.txtTopTitle = t;
		t.horizontalCenter = 0;
		t.lineSpacing = 5;
		t.size = 30;
		t.text = "标题标题";
		t.verticalCenter = 8.5;
		return t;
	};
	return WindowViewSkin;
})(eui.Skin);generateEUI.paths['resource/assets/fangDong/module/GameFangDongBuySkin.exml'] = window.GameFangDongBuySkin = (function (_super) {
	__extends(GameFangDongBuySkin, _super);
	var GameFangDongBuySkin$Skin46 = 	(function (_super) {
		__extends(GameFangDongBuySkin$Skin46, _super);
		function GameFangDongBuySkin$Skin46() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameFangDongBuySkin$Skin46.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "s1_btn_close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "fzyc";
			t.horizontalCenter = 0;
			t.size = 22;
			t.textColor = 0x5f78e0;
			t.verticalCenter = 0;
			return t;
		};
		return GameFangDongBuySkin$Skin46;
	})(eui.Skin);

	var GameFangDongBuySkin$Skin47 = 	(function (_super) {
		__extends(GameFangDongBuySkin$Skin47, _super);
		function GameFangDongBuySkin$Skin47() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","alpha",0.8)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameFangDongBuySkin$Skin47.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "s1_btn_buy_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "fzyc";
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameFangDongBuySkin$Skin47;
	})(eui.Skin);

	function GameFangDongBuySkin() {
		_super.call(this);
		this.skinParts = ["imgLight","btn_quit","img_payword","btn_unlock","txt_oldprice","group_old","txt_btnLabel","groupBtnLabel","txt_price","boxButton","txt_actTime","groupTime"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this._Group1_i(),this.boxButton_i(),this._Group2_i(),this.groupTime_i()];
	}
	var _proto = GameFangDongBuySkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.9;
		t.height = 1280;
		t.strokeColor = 0x444444;
		t.width = 720;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 289;
		t.x = 0;
		t.elementsContent = [this._Image1_i(),this.imgLight_i(),this.btn_quit_i(),this.img_payword_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "s1_img_buy_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.imgLight_i = function () {
		var t = new eui.Image();
		this.imgLight = t;
		t.source = "s1_img_buy_circle_png";
		t.x = 0;
		t.y = 67;
		return t;
	};
	_proto.btn_quit_i = function () {
		var t = new eui.Button();
		this.btn_quit = t;
		t.label = "";
		t.x = 600;
		t.y = 41;
		t.skinName = GameFangDongBuySkin$Skin46;
		return t;
	};
	_proto.img_payword_i = function () {
		var t = new eui.Image();
		this.img_payword = t;
		t.horizontalCenter = 0;
		t.source = "game1_buy_json.s1_img_pay_word_png";
		t.y = 670;
		return t;
	};
	_proto.boxButton_i = function () {
		var t = new eui.Group();
		this.boxButton = t;
		t.anchorOffsetX = 190;
		t.anchorOffsetY = 76;
		t.horizontalCenter = 0.5;
		t.y = 1052;
		t.elementsContent = [this.btn_unlock_i(),this.groupBtnLabel_i(),this.txt_price_i()];
		return t;
	};
	_proto.btn_unlock_i = function () {
		var t = new eui.Button();
		this.btn_unlock = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = GameFangDongBuySkin$Skin47;
		return t;
	};
	_proto.groupBtnLabel_i = function () {
		var t = new eui.Group();
		this.groupBtnLabel = t;
		t.horizontalCenter = 4.5;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = -28;
		t.elementsContent = [this.group_old_i(),this.txt_btnLabel_i()];
		return t;
	};
	_proto.group_old_i = function () {
		var t = new eui.Group();
		this.group_old = t;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.x = 140;
		t.y = 0;
		t.elementsContent = [this.txt_oldprice_i(),this._Rect2_i()];
		return t;
	};
	_proto.txt_oldprice_i = function () {
		var t = new eui.Label();
		this.txt_oldprice = t;
		t.bold = true;
		t.fontFamily = "fzyc";
		t.left = 3;
		t.right = 8;
		t.size = 34;
		t.text = "￥52.0";
		t.textColor = 0xf1edfd;
		t.touchEnabled = false;
		t.y = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.9;
		t.fillColor = 0xff0000;
		t.height = 4;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 14;
		return t;
	};
	_proto.txt_btnLabel_i = function () {
		var t = new eui.Label();
		this.txt_btnLabel = t;
		t.bold = true;
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 34;
		t.text = "用爱发电";
		t.textColor = 0xF1EDFD;
		t.touchEnabled = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.txt_price_i = function () {
		var t = new eui.Label();
		this.txt_price = t;
		t.bold = true;
		t.fontFamily = "fzyc";
		t.horizontalCenter = 1;
		t.size = 40;
		t.text = "￥20.00";
		t.textColor = 0xf1edfd;
		t.touchEnabled = false;
		t.y = 80;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.touchChildren = false;
		t.touchEnabled = false;
		t.visible = false;
		t.x = 130;
		t.y = 1050;
		t.elementsContent = [this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "game1_buy_json.s1_img_buy_electric_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "game1_buy_json.s1_img_buy_electric_png";
		t.width = 94;
		t.x = 460;
		t.y = 0;
		return t;
	};
	_proto.groupTime_i = function () {
		var t = new eui.Group();
		this.groupTime = t;
		t.horizontalCenter = 0.5;
		t.y = 1155;
		t.elementsContent = [this._Image4_i(),this.txt_actTime_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "s1_img_buy_heart_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.txt_actTime_i = function () {
		var t = new eui.Label();
		this.txt_actTime = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.bottom = 0;
		t.fontFamily = "fzyc";
		t.left = 55;
		t.lineSpacing = 5;
		t.size = 26;
		t.strokeColor = 0x196DCB;
		t.text = "时间";
		t.textAlign = "center";
		t.textColor = 0xf1edfd;
		return t;
	};
	return GameFangDongBuySkin;
})(eui.Skin);generateEUI.paths['resource/assets/fangDong/module/GameFangDongChatSkin.exml'] = window.GameFangDongChatSkin = (function (_super) {
	__extends(GameFangDongChatSkin, _super);
	function GameFangDongChatSkin() {
		_super.call(this);
		this.skinParts = ["imgBg","boxChat","scrollBar","btnBack","btnSend","txtSend"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.imgBg_i(),this.scrollBar_i(),this.btnBack_i(),this.btnSend_i(),this.txtSend_i()];
	}
	var _proto = GameFangDongChatSkin.prototype;

	_proto.imgBg_i = function () {
		var t = new eui.Image();
		this.imgBg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "s1_img_chat_app_bg_png";
		t.top = 0;
		return t;
	};
	_proto.scrollBar_i = function () {
		var t = new eui.Scroller();
		this.scrollBar = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1057;
		t.skinName = "skins.ScrollerSkin";
		t.width = 720;
		t.x = 0;
		t.y = 110;
		t.viewport = this.boxChat_i();
		return t;
	};
	_proto.boxChat_i = function () {
		var t = new eui.Group();
		this.boxChat = t;
		t.width = 720;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 20;
		return t;
	};
	_proto.btnBack_i = function () {
		var t = new eui.Rect();
		this.btnBack = t;
		t.fillAlpha = 0;
		t.height = 95;
		t.strokeAlpha = 0;
		t.width = 95;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btnSend_i = function () {
		var t = new eui.Rect();
		this.btnSend = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 70;
		t.strokeAlpha = 0;
		t.width = 133;
		t.x = 579;
		t.y = 1197;
		return t;
	};
	_proto.txtSend_i = function () {
		var t = new eui.Label();
		this.txtSend = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.size = 30;
		t.text = "";
		t.textColor = 0x333333;
		t.verticalAlign = "middle";
		t.width = 469;
		t.x = 90;
		t.y = 1203;
		return t;
	};
	return GameFangDongChatSkin;
})(eui.Skin);generateEUI.paths['resource/assets/fangDong/module/GameFangDongMenuSkin.exml'] = window.GameFangDongMenuSkin = (function (_super) {
	__extends(GameFangDongMenuSkin, _super);
	var GameFangDongMenuSkin$Skin48 = 	(function (_super) {
		__extends(GameFangDongMenuSkin$Skin48, _super);
		function GameFangDongMenuSkin$Skin48() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameFangDongMenuSkin$Skin48.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "common_v1_set_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameFangDongMenuSkin$Skin48;
	})(eui.Skin);

	function GameFangDongMenuSkin() {
		_super.call(this);
		this.skinParts = ["btnSave","btnRead","btnContinue","boxButton","btnSetting","btnBack","btnGm"];
		
		this.height = 450;
		this.width = 544;
		this.elementsContent = [this.boxButton_i(),this.btnSetting_i(),this.btnBack_i(),this.btnGm_i()];
	}
	var _proto = GameFangDongMenuSkin.prototype;

	_proto.boxButton_i = function () {
		var t = new eui.Group();
		this.boxButton = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.btnSave_i(),this.btnRead_i(),this.btnContinue_i()];
		return t;
	};
	_proto.btnSave_i = function () {
		var t = new eui.Button();
		this.btnSave = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.label = "保存进度";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "IconButtonSkin";
		t.y = 0;
		return t;
	};
	_proto.btnRead_i = function () {
		var t = new eui.Button();
		this.btnRead = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.label = "读取进度";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "IconButtonSkin";
		t.y = 102;
		return t;
	};
	_proto.btnContinue_i = function () {
		var t = new eui.Button();
		this.btnContinue = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.label = "继续游戏";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "IconButtonSkin";
		t.y = 204;
		return t;
	};
	_proto.btnSetting_i = function () {
		var t = new eui.Button();
		this.btnSetting = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.label = "";
		t.right = 41;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 22;
		t.skinName = GameFangDongMenuSkin$Skin48;
		return t;
	};
	_proto.btnBack_i = function () {
		var t = new eui.Button();
		this.btnBack = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "BaseButtonSkin";
		t.x = 41;
		t.y = 22;
		return t;
	};
	_proto.btnGm_i = function () {
		var t = new eui.Button();
		this.btnGm = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.label = "GM";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "Button4Skin";
		t.width = 120;
		t.y = 10;
		return t;
	};
	return GameFangDongMenuSkin;
})(eui.Skin);generateEUI.paths['resource/assets/fangDong/module/GameFangDongReviewSkin.exml'] = window.GameFangDongReviewSkin = (function (_super) {
	__extends(GameFangDongReviewSkin, _super);
	function GameFangDongReviewSkin() {
		_super.call(this);
		this.skinParts = ["boxTxt"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Label1_i(),this.boxTxt_i()];
	}
	var _proto = GameFangDongReviewSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 868;
		t.rotation = -2;
		t.scale9Grid = new egret.Rectangle(27,22,88,68);
		t.source = "common_v1_bg1_png";
		t.width = 646;
		t.x = 22;
		t.y = 219;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 868;
		t.scale9Grid = new egret.Rectangle(27,22,88,68);
		t.source = "common_v1_bg1_png";
		t.width = 646;
		t.x = 37;
		t.y = 206;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(27,22,88,68);
		t.source = "common_v1_border_png";
		t.x = 40;
		t.y = 854;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "common_v1_rail1_png";
		t.x = 123;
		t.y = 217;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "fzyc";
		t.size = 30;
		t.text = "回放";
		t.x = 330;
		t.y = 230;
		return t;
	};
	_proto.boxTxt_i = function () {
		var t = new eui.Group();
		this.boxTxt = t;
		t.x = 77;
		t.y = 304;
		return t;
	};
	return GameFangDongReviewSkin;
})(eui.Skin);generateEUI.paths['resource/assets/fangDong/module/GameFangDongSelectViewSkin.exml'] = window.GameFangDongSelectViewSkin = (function (_super) {
	__extends(GameFangDongSelectViewSkin, _super);
	function GameFangDongSelectViewSkin() {
		_super.call(this);
		this.skinParts = ["boxBtn"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.boxBtn_i()];
	}
	var _proto = GameFangDongSelectViewSkin.prototype;

	_proto.boxBtn_i = function () {
		var t = new eui.Group();
		this.boxBtn = t;
		t.bottom = 0;
		t.height = 340;
		t.x = 360;
		return t;
	};
	return GameFangDongSelectViewSkin;
})(eui.Skin);generateEUI.paths['resource/assets/fangDong/module/GameFangDongSkin.exml'] = window.GameFangDongSkin = (function (_super) {
	__extends(GameFangDongSkin, _super);
	var GameFangDongSkin$Skin49 = 	(function (_super) {
		__extends(GameFangDongSkin$Skin49, _super);
		function GameFangDongSkin$Skin49() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","s1_btn_review_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameFangDongSkin$Skin49.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "s1_btn_review_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameFangDongSkin$Skin49;
	})(eui.Skin);

	var GameFangDongSkin$Skin50 = 	(function (_super) {
		__extends(GameFangDongSkin$Skin50, _super);
		function GameFangDongSkin$Skin50() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","s1_btn_menu_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameFangDongSkin$Skin50.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "s1_btn_menu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameFangDongSkin$Skin50;
	})(eui.Skin);

	var GameFangDongSkin$Skin51 = 	(function (_super) {
		__extends(GameFangDongSkin$Skin51, _super);
		function GameFangDongSkin$Skin51() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","s1_btn_share_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameFangDongSkin$Skin51.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "s1_btn_share_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameFangDongSkin$Skin51;
	})(eui.Skin);

	function GameFangDongSkin() {
		_super.call(this);
		this.skinParts = ["boxBg","boxRole","btnReview","btnMenu","btnShare","imgGuang","groupShare","boxButton","boxWeChat","imgDialogBox","txtDialog","boxDialog","imgName","txtName","boxName","imgNext","boxNext","boxEffect","boxCoin"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this.boxBg_i(),this.boxRole_i(),this.boxButton_i(),this.boxWeChat_i(),this.boxDialog_i(),this.boxName_i(),this.boxNext_i(),this.boxEffect_i(),this.boxCoin_i()];
	}
	var _proto = GameFangDongSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.boxBg_i = function () {
		var t = new eui.Group();
		this.boxBg = t;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.boxRole_i = function () {
		var t = new eui.Group();
		this.boxRole = t;
		return t;
	};
	_proto.boxButton_i = function () {
		var t = new eui.Group();
		this.boxButton = t;
		t.height = 87;
		t.touchEnabled = false;
		t.width = 322;
		t.x = 378;
		t.y = 866;
		t.elementsContent = [this.btnReview_i(),this.btnMenu_i(),this.groupShare_i()];
		return t;
	};
	_proto.btnReview_i = function () {
		var t = new eui.Button();
		this.btnReview = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.skinName = GameFangDongSkin$Skin49;
		return t;
	};
	_proto.btnMenu_i = function () {
		var t = new eui.Button();
		this.btnMenu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 170;
		t.y = 0;
		t.skinName = GameFangDongSkin$Skin50;
		return t;
	};
	_proto.groupShare_i = function () {
		var t = new eui.Group();
		this.groupShare = t;
		t.height = 111;
		t.touchEnabled = false;
		t.width = 110;
		t.x = 212;
		t.y = -150;
		t.elementsContent = [this.btnShare_i(),this.imgGuang_i()];
		return t;
	};
	_proto.btnShare_i = function () {
		var t = new eui.Button();
		this.btnShare = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.skinName = GameFangDongSkin$Skin51;
		return t;
	};
	_proto.imgGuang_i = function () {
		var t = new eui.Image();
		this.imgGuang = t;
		t.source = "s1_img_shareguang_png";
		t.touchEnabled = false;
		t.x = -110;
		t.y = 0;
		return t;
	};
	_proto.boxWeChat_i = function () {
		var t = new eui.Group();
		this.boxWeChat = t;
		return t;
	};
	_proto.boxDialog_i = function () {
		var t = new eui.Group();
		this.boxDialog = t;
		t.height = 309;
		t.width = 702;
		t.x = 9;
		t.y = 963;
		t.elementsContent = [this.imgDialogBox_i(),this.txtDialog_i()];
		return t;
	};
	_proto.imgDialogBox_i = function () {
		var t = new eui.Image();
		this.imgDialogBox = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.source = "";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.txtDialog_i = function () {
		var t = new eui.Label();
		this.txtDialog = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "fzyc";
		t.height = 185;
		t.horizontalCenter = 0;
		t.lineSpacing = 5;
		t.multiline = true;
		t.size = 28;
		t.text = "生活在这个城市的人们，每天都在努力的赚钱。";
		t.textColor = 0x333332;
		t.width = 620;
		t.wordWrap = false;
		t.y = 67;
		return t;
	};
	_proto.boxName_i = function () {
		var t = new eui.Group();
		this.boxName = t;
		t.x = 35;
		t.y = 916;
		t.elementsContent = [this.imgName_i(),this.txtName_i()];
		return t;
	};
	_proto.imgName_i = function () {
		var t = new eui.Image();
		this.imgName = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.source = "";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.txtName_i = function () {
		var t = new eui.Label();
		this.txtName = t;
		t.fontFamily = "fzyc";
		t.horizontalCenter = 4;
		t.multiline = true;
		t.size = 28;
		t.text = "名字";
		t.verticalCenter = 8;
		t.wordWrap = true;
		return t;
	};
	_proto.boxNext_i = function () {
		var t = new eui.Group();
		this.boxNext = t;
		t.right = 30;
		t.y = 1213;
		t.elementsContent = [this.imgNext_i(),this._Rect2_i()];
		return t;
	};
	_proto.imgNext_i = function () {
		var t = new eui.Image();
		this.imgNext = t;
		t.horizontalCenter = 0;
		t.source = "s1_img_next_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0;
		t.height = 40;
		t.strokeAlpha = 0;
		t.width = 160;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.boxEffect_i = function () {
		var t = new eui.Group();
		this.boxEffect = t;
		return t;
	};
	_proto.boxCoin_i = function () {
		var t = new GameCoinComponentUI();
		this.boxCoin = t;
		t.right = 65;
		t.skinName = "GameCoinSkin";
		t.top = 15;
		return t;
	};
	return GameFangDongSkin;
})(eui.Skin);generateEUI.paths['resource/assets/fangDong/module/GameFangDongUnlockSkin.exml'] = window.GameFangDongUnlockSkin = (function (_super) {
	__extends(GameFangDongUnlockSkin, _super);
	var GameFangDongUnlockSkin$Skin52 = 	(function (_super) {
		__extends(GameFangDongUnlockSkin$Skin52, _super);
		function GameFangDongUnlockSkin$Skin52() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image2","visible",false)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameFangDongUnlockSkin$Skin52.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.scale9Grid = new egret.Rectangle(14,15,2,3);
			t.source = "common_v1_json.common_v1_check0_png";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			t.visible = false;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.horizontalCenter = 5;
			t.source = "common_v1_json.common_v1_check1_png";
			t.verticalCenter = -2;
			return t;
		};
		return GameFangDongUnlockSkin$Skin52;
	})(eui.Skin);

	function GameFangDongUnlockSkin() {
		_super.call(this);
		this.skinParts = ["imgShareBg","btnOK","txtDesc","btnExit","checkBoxAutoBuy","boxCheckBox"];
		
		this.elementsContent = [this.imgShareBg_i(),this.btnOK_i(),this.txtDesc_i(),this._Group1_i(),this.boxCheckBox_i()];
	}
	var _proto = GameFangDongUnlockSkin.prototype;

	_proto.imgShareBg_i = function () {
		var t = new eui.Image();
		this.imgShareBg = t;
		t.anchorOffsetX = 0;
		t.source = "gameshare_border_png";
		t.width = 470;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btnOK_i = function () {
		var t = new eui.Button();
		this.btnOK = t;
		t.label = "确定";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "Button5Skin";
		t.x = 129.4;
		t.y = 252;
		return t;
	};
	_proto.txtDesc_i = function () {
		var t = new eui.Label();
		this.txtDesc = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.lineSpacing = 10;
		t.size = 26;
		t.text = "您是否使用{0}心动币解锁当前视频？";
		t.textAlign = "center";
		t.textColor = 0x666666;
		t.width = 365;
		t.y = 73;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 2;
		t.right = 0;
		t.elementsContent = [this._Label1_i(),this.btnExit_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "fzyc";
		t.size = 22;
		t.text = "退出";
		t.textAlign = "center";
		t.textColor = 0x666666;
		t.verticalAlign = "middle";
		t.x = 29;
		t.y = 5.2;
		return t;
	};
	_proto.btnExit_i = function () {
		var t = new eui.Rect();
		this.btnExit = t;
		t.fillAlpha = 0;
		t.height = 30;
		t.strokeAlpha = 0;
		t.width = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.boxCheckBox_i = function () {
		var t = new eui.Group();
		this.boxCheckBox = t;
		t.x = 54;
		t.y = 149;
		t.elementsContent = [this.checkBoxAutoBuy_i(),this._Label2_i(),this._Label3_i()];
		return t;
	};
	_proto.checkBoxAutoBuy_i = function () {
		var t = new eui.CheckBox();
		this.checkBoxAutoBuy = t;
		t.height = 30;
		t.label = "CheckBox";
		t.selected = true;
		t.width = 30;
		t.x = 0;
		t.y = 0;
		t.skinName = GameFangDongUnlockSkin$Skin52;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "fzyc";
		t.lineSpacing = 5;
		t.size = 20;
		t.text = "为了流畅的游戏体验，之后不再弹出提示，自动消耗心动币";
		t.textColor = 0x666666;
		t.width = 324;
		t.x = 38;
		t.y = 2;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "可在设置中取消";
		t.textColor = 0x999999;
		t.x = 38;
		t.y = 55;
		return t;
	};
	return GameFangDongUnlockSkin;
})(eui.Skin);generateEUI.paths['resource/assets/fangDong/module/GameStatusViewSkin.exml'] = window.GameStatusViewSkin = (function (_super) {
	__extends(GameStatusViewSkin, _super);
	function GameStatusViewSkin() {
		_super.call(this);
		this.skinParts = ["imgBg","imgRole","imgStatus","imgFlag","txtInfo"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.imgBg_i(),this.imgRole_i(),this.imgStatus_i(),this.imgFlag_i(),this.txtInfo_i()];
	}
	var _proto = GameStatusViewSkin.prototype;

	_proto.imgBg_i = function () {
		var t = new eui.Image();
		this.imgBg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "s1_img_status_bg_jpg";
		t.top = 0;
		return t;
	};
	_proto.imgRole_i = function () {
		var t = new eui.Image();
		this.imgRole = t;
		t.source = "";
		t.x = 24;
		t.y = 143;
		return t;
	};
	_proto.imgStatus_i = function () {
		var t = new eui.Image();
		this.imgStatus = t;
		t.source = "";
		t.x = 102;
		t.y = 734;
		return t;
	};
	_proto.imgFlag_i = function () {
		var t = new eui.Image();
		this.imgFlag = t;
		t.source = "s1_img_status_contine_png";
		t.x = 215;
		t.y = 1176;
		return t;
	};
	_proto.txtInfo_i = function () {
		var t = new eui.Label();
		this.txtInfo = t;
		t.anchorOffsetX = 0;
		t.lineSpacing = 41;
		t.multiline = true;
		t.size = 24;
		t.text = "　　这段日子以来，我和寇雅从相识时的水火不容的两个人，渐渐转变为能和谐相处的普通朋友。我有点喜欢上她了，而她对我的态度，好像还是平平淡淡。";
		t.textColor = 0x3c3c3c;
		t.width = 648;
		t.wordWrap = true;
		t.x = 38;
		t.y = 891;
		return t;
	};
	return GameStatusViewSkin;
})(eui.Skin);generateEUI.paths['resource/assets/fangDong/module/item/GameFangDongChatItemSkin.exml'] = window.GameFangDongChatItemSkin = (function (_super) {
	__extends(GameFangDongChatItemSkin, _super);
	function GameFangDongChatItemSkin() {
		_super.call(this);
		this.skinParts = ["imgHead","imgLabelBg","txtLabel"];
		
		this.height = 78;
		this.width = 720;
		this.elementsContent = [this.imgHead_i(),this.imgLabelBg_i(),this.txtLabel_i()];
	}
	var _proto = GameFangDongChatItemSkin.prototype;

	_proto.imgHead_i = function () {
		var t = new eui.Image();
		this.imgHead = t;
		t.right = 12;
		t.source = "s1_img_chat_app_boy_head_png";
		t.y = 1;
		return t;
	};
	_proto.imgLabelBg_i = function () {
		var t = new eui.Image();
		this.imgLabelBg = t;
		t.right = 96;
		t.source = "s1_img_chat_app_txt_bg_png";
		t.y = 1;
		return t;
	};
	_proto.txtLabel_i = function () {
		var t = new eui.Label();
		this.txtLabel = t;
		t.lineSpacing = 4;
		t.multiline = true;
		t.right = 123;
		t.text = "文字";
		t.textAlign = "right";
		t.textColor = 0x000000;
		t.wordWrap = true;
		t.y = 24;
		return t;
	};
	return GameFangDongChatItemSkin;
})(eui.Skin);generateEUI.paths['resource/assets/fangDong/module/item/GameFangDongChatTimeItemSkin.exml'] = window.GameFangDongChatTimeItemSkin = (function (_super) {
	__extends(GameFangDongChatTimeItemSkin, _super);
	function GameFangDongChatTimeItemSkin() {
		_super.call(this);
		this.skinParts = ["txtTime"];
		
		this.height = 40;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this.txtTime_i()];
	}
	var _proto = GameFangDongChatTimeItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "s1_img_chat_app_time_bg_png";
		t.y = 1;
		return t;
	};
	_proto.txtTime_i = function () {
		var t = new eui.Label();
		this.txtTime = t;
		t.horizontalCenter = 0;
		t.multiline = true;
		t.text = "11:30";
		t.textColor = 0x000000;
		t.wordWrap = true;
		t.y = 5.5;
		return t;
	};
	return GameFangDongChatTimeItemSkin;
})(eui.Skin);generateEUI.paths['resource/assets/fangDong/module/item/GameFangDongChatVoiceItemSkin.exml'] = window.GameFangDongChatVoiceItemSkin = (function (_super) {
	__extends(GameFangDongChatVoiceItemSkin, _super);
	function GameFangDongChatVoiceItemSkin() {
		_super.call(this);
		this.skinParts = ["imgHead","imgVoice","imgRed","txtTime"];
		
		this.height = 78;
		this.width = 720;
		this.elementsContent = [this.imgHead_i(),this.imgVoice_i(),this.imgRed_i(),this.txtTime_i()];
	}
	var _proto = GameFangDongChatVoiceItemSkin.prototype;

	_proto.imgHead_i = function () {
		var t = new eui.Image();
		this.imgHead = t;
		t.source = "s1_img_chat_app_girl_head_png";
		t.x = 12;
		t.y = 1;
		return t;
	};
	_proto.imgVoice_i = function () {
		var t = new eui.Image();
		this.imgVoice = t;
		t.source = "s1_img_chat_app_voice_bg_png";
		t.x = 96;
		return t;
	};
	_proto.imgRed_i = function () {
		var t = new eui.Image();
		this.imgRed = t;
		t.source = "s1_img_chat_app_red_point_png";
		t.x = 403;
		t.y = 35;
		return t;
	};
	_proto.txtTime_i = function () {
		var t = new eui.Label();
		this.txtTime = t;
		t.text = "7\"";
		t.textColor = 0x666666;
		t.x = 368;
		t.y = 25;
		return t;
	};
	return GameFangDongChatVoiceItemSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/common/LoadingLockSkin.exml'] = window.LoadingLockSkin = (function (_super) {
	__extends(LoadingLockSkin, _super);
	function LoadingLockSkin() {
		_super.call(this);
		this.skinParts = ["rect","loadingLabel","mcGroup"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this.rect_i(),this._Group1_i()];
	}
	var _proto = LoadingLockSkin.prototype;

	_proto.rect_i = function () {
		var t = new eui.Rect();
		this.rect = t;
		t.bottom = 0;
		t.fillAlpha = 1;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = true;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 720;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1280;
		t.elementsContent = [this.loadingLabel_i(),this.mcGroup_i()];
		return t;
	};
	_proto.loadingLabel_i = function () {
		var t = new eui.Label();
		this.loadingLabel = t;
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.text = "加载中...";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 565;
		t.y = 414.34;
		return t;
	};
	_proto.mcGroup_i = function () {
		var t = new eui.Group();
		this.mcGroup = t;
		t.height = 160;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 166;
		t.x = 557;
		t.y = 229.37;
		return t;
	};
	return LoadingLockSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/common/Message2ListSkin.exml'] = window.Message2ListSkin = (function (_super) {
	__extends(Message2ListSkin, _super);
	function Message2ListSkin() {
		_super.call(this);
		this.skinParts = ["bgImg","msg1","msg2"];
		
		this.height = 230;
		this.width = 700;
		this.elementsContent = [this.bgImg_i(),this._Image1_i(),this.msg1_i(),this.msg2_i()];
	}
	var _proto = Message2ListSkin.prototype;

	_proto.bgImg_i = function () {
		var t = new eui.Image();
		this.bgImg = t;
		t.anchorOffsetY = 0;
		t.height = 230;
		t.scale9Grid = new egret.Rectangle(179,111,370,73);
		t.source = "weixin2_xuanzeliaotian2_png";
		t.width = 696;
		t.x = 2;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "weixin2_fengexian_png";
		t.verticalCenter = 0;
		t.width = 630;
		t.x = 35;
		return t;
	};
	_proto.msg1_i = function () {
		var t = new eui.Label();
		this.msg1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "fzyc";
		t.height = 100;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "Label2Label2Label2Label2Label2Label2Label2Label2Label2Label2Label2Label";
		t.textAlign = "left";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.width = 600;
		t.y = 14.25;
		return t;
	};
	_proto.msg2_i = function () {
		var t = new eui.Label();
		this.msg2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "fzyc";
		t.height = 100;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "Label";
		t.textAlign = "left";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.width = 600;
		t.y = 115.96;
		return t;
	};
	return Message2ListSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/common/Message3ListSkin.exml'] = window.Message3ListSkin = (function (_super) {
	__extends(Message3ListSkin, _super);
	function Message3ListSkin() {
		_super.call(this);
		this.skinParts = ["bgImg","msg1","msg2","msg3"];
		
		this.height = 345;
		this.width = 700;
		this.elementsContent = [this.bgImg_i(),this._Image1_i(),this._Image2_i(),this.msg1_i(),this.msg2_i(),this.msg3_i()];
	}
	var _proto = Message3ListSkin.prototype;

	_proto.bgImg_i = function () {
		var t = new eui.Image();
		this.bgImg = t;
		t.height = 345;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(190,103,194,94);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "weixin2_xuanzeliaotian2_png";
		t.verticalCenter = 0;
		t.width = 696;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "weixin2_fengexian_png";
		t.width = 630;
		t.x = 35;
		t.y = 120;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "weixin2_fengexian_png";
		t.width = 630;
		t.x = 35;
		t.y = 225;
		return t;
	};
	_proto.msg1_i = function () {
		var t = new eui.Label();
		this.msg1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "fzyc";
		t.height = 100;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "第一次写简历都会这样的，你可以列举一些在学校从事的活动，获得的奖项，这些都是加分项。";
		t.textAlign = "left";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.width = 600;
		t.y = 21.64;
		return t;
	};
	_proto.msg2_i = function () {
		var t = new eui.Label();
		this.msg2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "fzyc";
		t.height = 100;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "Label";
		t.textAlign = "left";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.width = 600;
		t.y = 123.85;
		return t;
	};
	_proto.msg3_i = function () {
		var t = new eui.Label();
		this.msg3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "fzyc";
		t.height = 100;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "Label";
		t.textAlign = "left";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.width = 600;
		t.y = 229.28;
		return t;
	};
	return Message3ListSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/common/Message4ListSkin.exml'] = window.Message4ListSkin = (function (_super) {
	__extends(Message4ListSkin, _super);
	function Message4ListSkin() {
		_super.call(this);
		this.skinParts = ["bgImg","msg1","msg2","msg3","msg4"];
		
		this.height = 460;
		this.width = 700;
		this.elementsContent = [this.bgImg_i(),this._Image1_i(),this._Image2_i(),this._Image3_i(),this.msg1_i(),this.msg2_i(),this.msg3_i(),this.msg4_i()];
	}
	var _proto = Message4ListSkin.prototype;

	_proto.bgImg_i = function () {
		var t = new eui.Image();
		this.bgImg = t;
		t.anchorOffsetY = 0;
		t.height = 460;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(127,119,479,49);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "weixin2_xuanzeliaotian2_png";
		t.verticalCenter = 0;
		t.width = 696;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "weixin2_fengexian_png";
		t.width = 630;
		t.x = 35;
		t.y = 124;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "weixin2_fengexian_png";
		t.width = 630;
		t.x = 35;
		t.y = 230;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "weixin2_fengexian_png";
		t.width = 630;
		t.x = 35;
		t.y = 336;
		return t;
	};
	_proto.msg1_i = function () {
		var t = new eui.Label();
		this.msg1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "fzyc";
		t.height = 100;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "LabelLabelLabelLabelLabelLabelLabelLabelLabelLabelLabel";
		t.textAlign = "left";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.width = 600;
		t.y = 23.72;
		return t;
	};
	_proto.msg2_i = function () {
		var t = new eui.Label();
		this.msg2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "fzyc";
		t.height = 100;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "Label";
		t.textAlign = "left";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.width = 600;
		t.y = 127.61;
		return t;
	};
	_proto.msg3_i = function () {
		var t = new eui.Label();
		this.msg3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "fzyc";
		t.height = 100;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "Label";
		t.textAlign = "left";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.width = 600;
		t.y = 233.48;
		return t;
	};
	_proto.msg4_i = function () {
		var t = new eui.Label();
		this.msg4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "fzyc";
		t.height = 100;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "Label";
		t.textAlign = "left";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.width = 600;
		t.y = 338.89;
		return t;
	};
	return Message4ListSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/dialog/ConfirmDialogSkin.exml'] = window.ConfirmDialogSkin = (function (_super) {
	__extends(ConfirmDialogSkin, _super);
	var ConfirmDialogSkin$Skin53 = 	(function (_super) {
		__extends(ConfirmDialogSkin$Skin53, _super);
		function ConfirmDialogSkin$Skin53() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ConfirmDialogSkin$Skin53.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bag2_lvseanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "bag2_quxiao_png";
			t.y = 21;
			return t;
		};
		return ConfirmDialogSkin$Skin53;
	})(eui.Skin);

	var ConfirmDialogSkin$Skin54 = 	(function (_super) {
		__extends(ConfirmDialogSkin$Skin54, _super);
		function ConfirmDialogSkin$Skin54() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ConfirmDialogSkin$Skin54.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "work2_anniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0.5;
			t.source = "bag2_queding_png";
			t.y = 20;
			return t;
		};
		return ConfirmDialogSkin$Skin54;
	})(eui.Skin);

	function ConfirmDialogSkin() {
		_super.call(this);
		this.skinParts = ["cancelBtn","okBtn","titleLabel","contentLabel","contentGroup"];
		
		this.elementsContent = [this.contentGroup_i()];
	}
	var _proto = ConfirmDialogSkin.prototype;

	_proto.contentGroup_i = function () {
		var t = new eui.Group();
		this.contentGroup = t;
		t.anchorOffsetX = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.cancelBtn_i(),this.okBtn_i(),this.titleLabel_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 453;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(105,62,632,376);
		t.source = "set2_ditu_png";
		t.verticalCenter = 0;
		t.width = 716;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "youjian_biaoti_png";
		t.y = 23.9;
		return t;
	};
	_proto.cancelBtn_i = function () {
		var t = new eui.Button();
		this.cancelBtn = t;
		t.label = "";
		t.left = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 190;
		t.y = 337;
		t.skinName = ConfirmDialogSkin$Skin53;
		return t;
	};
	_proto.okBtn_i = function () {
		var t = new eui.Button();
		this.okBtn = t;
		t.height = 86;
		t.label = "";
		t.right = 90;
		t.width = 191;
		t.y = 337;
		t.skinName = ConfirmDialogSkin$Skin54;
		return t;
	};
	_proto.titleLabel_i = function () {
		var t = new eui.Label();
		this.titleLabel = t;
		t.fontFamily = "fzyc";
		t.horizontalCenter = 0.5;
		t.size = 50;
		t.text = "提 示";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 29.9;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 231;
		t.horizontalCenter = 0;
		t.skinName = "skins.ScrollerSkin";
		t.width = 598;
		t.y = 97;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.contentLabel_i()];
		return t;
	};
	_proto.contentLabel_i = function () {
		var t = new eui.Label();
		this.contentLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 35;
		t.text = "         解锁心动之旅需要50个碎片。你的碎片数为N";
		t.textAlign = "left";
		t.textColor = 0x070000;
		t.verticalAlign = "top";
		t.width = 597;
		return t;
	};
	return ConfirmDialogSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/dialog/DlcConfirmDialogSkin.exml'] = window.DlcConfirmDialogSkin = (function (_super) {
	__extends(DlcConfirmDialogSkin, _super);
	var DlcConfirmDialogSkin$Skin55 = 	(function (_super) {
		__extends(DlcConfirmDialogSkin$Skin55, _super);
		function DlcConfirmDialogSkin$Skin55() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DlcConfirmDialogSkin$Skin55.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "secretShop_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 20;
			t.verticalCenter = -3;
			return t;
		};
		return DlcConfirmDialogSkin$Skin55;
	})(eui.Skin);

	var DlcConfirmDialogSkin$Skin56 = 	(function (_super) {
		__extends(DlcConfirmDialogSkin$Skin56, _super);
		function DlcConfirmDialogSkin$Skin56() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DlcConfirmDialogSkin$Skin56.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "slianai_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 20;
			t.verticalCenter = -3;
			return t;
		};
		return DlcConfirmDialogSkin$Skin56;
	})(eui.Skin);

	var DlcConfirmDialogSkin$Skin57 = 	(function (_super) {
		__extends(DlcConfirmDialogSkin$Skin57, _super);
		function DlcConfirmDialogSkin$Skin57() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DlcConfirmDialogSkin$Skin57.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xiehoukouya_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 20;
			t.verticalCenter = -3;
			return t;
		};
		return DlcConfirmDialogSkin$Skin57;
	})(eui.Skin);

	function DlcConfirmDialogSkin() {
		_super.call(this);
		this.skinParts = ["exitRect","titleLabel","contentLabel","shopBtn","loveBtn","kouyaBtn","contentGroup"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this.exitRect_i(),this.contentGroup_i()];
	}
	var _proto = DlcConfirmDialogSkin.prototype;

	_proto.exitRect_i = function () {
		var t = new eui.Rect();
		this.exitRect = t;
		t.bottom = 0;
		t.fillAlpha = 0.7;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.contentGroup_i = function () {
		var t = new eui.Group();
		this.contentGroup = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.titleLabel_i(),this.contentLabel_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this.shopBtn_i(),this.loveBtn_i(),this.kouyaBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 428;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(105,62,632,376);
		t.source = "set2_ditu_png";
		t.top = 0;
		t.width = 655;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "youjian_biaoti_png";
		t.top = 24;
		return t;
	};
	_proto.titleLabel_i = function () {
		var t = new eui.Label();
		this.titleLabel = t;
		t.fontFamily = "fzyc";
		t.horizontalCenter = 0.5;
		t.size = 50;
		t.text = "提 示";
		t.textAlign = "center";
		t.top = 30;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.contentLabel_i = function () {
		var t = new eui.Label();
		this.contentLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "fzyc";
		t.left = 35;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "解锁心动之旅需要50个碎片";
		t.textAlign = "left";
		t.textColor = 0x070000;
		t.top = 107;
		t.verticalAlign = "middle";
		t.width = 601;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "fzyc";
		t.left = 35;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 32;
		t.text = "获取碎片：";
		t.textAlign = "left";
		t.textColor = 0x070000;
		t.top = 155;
		t.verticalAlign = "middle";
		t.width = 592;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "fzyc";
		t.left = 35;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "*神秘商店";
		t.textAlign = "left";
		t.textColor = 0x070000;
		t.top = 210;
		t.verticalAlign = "middle";
		t.width = 273;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "fzyc";
		t.left = 35;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "*恋爱场景：运动、逗猫、游乐园";
		t.textAlign = "left";
		t.textColor = 0x070000;
		t.top = 280;
		t.verticalAlign = "middle";
		t.width = 432;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "fzyc";
		t.left = 35;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "*解锁《纯情房东俏房客》任意结局";
		t.textAlign = "left";
		t.textColor = 0x070000;
		t.top = 350;
		t.verticalAlign = "middle";
		t.width = 439;
		return t;
	};
	_proto.shopBtn_i = function () {
		var t = new eui.Button();
		this.shopBtn = t;
		t.anchorOffsetX = 0;
		t.label = "神秘商店";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 515;
		t.y = 197;
		t.skinName = DlcConfirmDialogSkin$Skin55;
		return t;
	};
	_proto.loveBtn_i = function () {
		var t = new eui.Button();
		this.loveBtn = t;
		t.label = "恋爱";
		t.x = 515;
		t.y = 267;
		t.skinName = DlcConfirmDialogSkin$Skin56;
		return t;
	};
	_proto.kouyaBtn_i = function () {
		var t = new eui.Button();
		this.kouyaBtn = t;
		t.label = "邂逅寇雅";
		t.x = 515;
		t.y = 337;
		t.skinName = DlcConfirmDialogSkin$Skin57;
		return t;
	};
	return DlcConfirmDialogSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/dialog/GameOverDialogSkin.exml'] = window.GameOverDialogSkin = (function (_super) {
	__extends(GameOverDialogSkin, _super);
	var GameOverDialogSkin$Skin58 = 	(function (_super) {
		__extends(GameOverDialogSkin$Skin58, _super);
		function GameOverDialogSkin$Skin58() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameOverDialogSkin$Skin58.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "work2_anniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.text = "确定";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0.5;
			t.source = "bag2_queding_png";
			t.y = 20;
			return t;
		};
		return GameOverDialogSkin$Skin58;
	})(eui.Skin);

	function GameOverDialogSkin() {
		_super.call(this);
		this.skinParts = ["blackBg","okBtn","qqLabel","closeBtn","contentGroup"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Group1_i(),this.blackBg_i(),this.contentGroup_i()];
	}
	var _proto = GameOverDialogSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.blackBg_i = function () {
		var t = new eui.Rect();
		this.blackBg = t;
		t.bottom = 0;
		t.fillAlpha = 0.8;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.contentGroup_i = function () {
		var t = new eui.Group();
		this.contentGroup = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.touchEnabled = true;
		t.verticalCenter = 0;
		t.width = 649;
		t.elementsContent = [this._Image1_i(),this.okBtn_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this.qqLabel_i(),this.closeBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 429;
		t.scale9Grid = new egret.Rectangle(105,62,632,376);
		t.source = "set2_ditu_png";
		t.width = 656;
		t.x = -3;
		t.y = 0;
		return t;
	};
	_proto.okBtn_i = function () {
		var t = new eui.Button();
		this.okBtn = t;
		t.height = 86;
		t.horizontalCenter = -164;
		t.label = "";
		t.visible = false;
		t.width = 191;
		t.y = 313.91;
		t.skinName = GameOverDialogSkin$Skin58;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "fzyc";
		t.height = 63.52;
		t.lineSpacing = 10;
		t.size = 40;
		t.text = "亲爱的：";
		t.textAlign = "left";
		t.textColor = 0x6d4b49;
		t.verticalAlign = "middle";
		t.width = 570;
		t.x = 44;
		t.y = 21.21;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "fzyc";
		t.height = 174.13;
		t.lineSpacing = 10;
		t.size = 40;
		t.text = "    故事到这里暂告一段落，与你甜蜜相恋的这些天里，是我最开心的日子";
		t.textAlign = "left";
		t.textColor = 0x6d4b49;
		t.verticalAlign = "middle";
		t.width = 570;
		t.x = 44;
		t.y = 75.14;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "fzyc";
		t.height = 55.95;
		t.lineSpacing = 10;
		t.size = 28;
		t.text = "最新剧情已开拍，详情请关注";
		t.textAlign = "right";
		t.textColor = 0x6d4b49;
		t.verticalAlign = "middle";
		t.width = 570;
		t.x = 44;
		t.y = 218.09;
		return t;
	};
	_proto.qqLabel_i = function () {
		var t = new eui.Label();
		this.qqLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "fzyc";
		t.height = 55.95;
		t.lineSpacing = 10;
		t.size = 28;
		t.text = "公众号:《心动女生手游》  玩家群:545937961";
		t.textAlign = "right";
		t.textColor = 0x6d4b49;
		t.verticalAlign = "middle";
		t.width = 595.33;
		t.x = 18.67;
		t.y = 258.39;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.right = -1;
		t.source = "gift_X_png";
		t.top = -4;
		return t;
	};
	return GameOverDialogSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/dialog/GetItemNoticeSkin.exml'] = window.GetItemNoticeSkin = (function (_super) {
	__extends(GetItemNoticeSkin, _super);
	var GetItemNoticeSkin$Skin59 = 	(function (_super) {
		__extends(GetItemNoticeSkin$Skin59, _super);
		function GetItemNoticeSkin$Skin59() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GetItemNoticeSkin$Skin59.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "work2_anniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0.5;
			t.source = "bag2_queding_png";
			t.y = 20;
			return t;
		};
		return GetItemNoticeSkin$Skin59;
	})(eui.Skin);

	function GetItemNoticeSkin() {
		_super.call(this);
		this.skinParts = ["imgIcon","titleLabel","contentLabel1","contentLabel","okBtn","contentGroup"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Rect1_i(),this.contentGroup_i()];
	}
	var _proto = GetItemNoticeSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.8;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.contentGroup_i = function () {
		var t = new eui.Group();
		this.contentGroup = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Group1_i(),this.titleLabel_i(),this.contentLabel1_i(),this.contentLabel_i(),this.okBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 440;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(105,62,632,376);
		t.source = "set2_ditu_png";
		t.verticalCenter = 0;
		t.width = 656;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "youjian_biaoti_png";
		t.y = 22;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = -20;
		t.elementsContent = [this._Image3_i(),this.imgIcon_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "shop2_xind_spbg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.imgIcon_i = function () {
		var t = new eui.Image();
		this.imgIcon = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.titleLabel_i = function () {
		var t = new eui.Label();
		this.titleLabel = t;
		t.fontFamily = "fzyc";
		t.horizontalCenter = 0.5;
		t.size = 50;
		t.text = "奖励";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 29.9;
		return t;
	};
	_proto.contentLabel1_i = function () {
		var t = new eui.Label();
		this.contentLabel1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "已开启心动之旅，将获得的心动碎片 x 10 兑换为";
		t.textAlign = "center";
		t.textColor = 0x070000;
		t.verticalAlign = "middle";
		t.y = 87;
		return t;
	};
	_proto.contentLabel_i = function () {
		var t = new eui.Label();
		this.contentLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.horizontalCenter = 0;
		t.size = 36;
		t.text = "心动碎片 x ";
		t.textAlign = "center";
		t.textColor = 0x070000;
		t.verticalAlign = "middle";
		t.width = 584;
		t.y = 252;
		return t;
	};
	_proto.okBtn_i = function () {
		var t = new eui.Button();
		this.okBtn = t;
		t.height = 86;
		t.label = "";
		t.width = 191;
		t.x = 229;
		t.y = 323;
		t.skinName = GetItemNoticeSkin$Skin59;
		return t;
	};
	return GetItemNoticeSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/dialog/NoticeDialogSkin.exml'] = window.NoticeDialogSkin = (function (_super) {
	__extends(NoticeDialogSkin, _super);
	var NoticeDialogSkin$Skin60 = 	(function (_super) {
		__extends(NoticeDialogSkin$Skin60, _super);
		function NoticeDialogSkin$Skin60() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NoticeDialogSkin$Skin60.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "work2_anniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.text = "确定";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0.5;
			t.source = "bag2_queding_png";
			t.y = 20;
			return t;
		};
		return NoticeDialogSkin$Skin60;
	})(eui.Skin);

	function NoticeDialogSkin() {
		_super.call(this);
		this.skinParts = ["titleLabel","okBtn","noticeLabel","wxLabel","contentLabel","contentGroup"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Rect1_i(),this.contentGroup_i()];
	}
	var _proto = NoticeDialogSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.8;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.contentGroup_i = function () {
		var t = new eui.Group();
		this.contentGroup = t;
		t.anchorOffsetX = 0;
		t.height = 720;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1280;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.titleLabel_i(),this.okBtn_i(),this._Image4_i(),this.noticeLabel_i(),this.wxLabel_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 500;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(105,62,632,376);
		t.source = "set2_ditu_png";
		t.verticalCenter = 0;
		t.width = 700;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 260;
		t.scale9Grid = new egret.Rectangle(38,59,21,43);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "act_btn_bg2_png";
		t.width = 640;
		t.x = 320;
		t.y = 230;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "youjian_biaoti_png";
		t.y = 120.84;
		return t;
	};
	_proto.titleLabel_i = function () {
		var t = new eui.Label();
		this.titleLabel = t;
		t.fontFamily = "fzyc";
		t.horizontalCenter = 1;
		t.size = 50;
		t.text = "公告";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 126.84;
		return t;
	};
	_proto.okBtn_i = function () {
		var t = new eui.Button();
		this.okBtn = t;
		t.height = 86;
		t.horizontalCenter = 0.5;
		t.label = "";
		t.width = 191;
		t.y = 559.99;
		t.skinName = NoticeDialogSkin$Skin60;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "laba_png";
		t.x = 322;
		t.y = 184.84;
		return t;
	};
	_proto.noticeLabel_i = function () {
		var t = new eui.Label();
		this.noticeLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "fzyc";
		t.height = 39.09;
		t.text = "关于暖心视频无法播放";
		t.textAlign = "left";
		t.textColor = 0x9d8281;
		t.verticalAlign = "middle";
		t.width = 574.24;
		t.x = 381.33;
		t.y = 187.88;
		return t;
	};
	_proto.wxLabel_i = function () {
		var t = new eui.Label();
		this.wxLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "fzyc";
		t.height = 39.09;
		t.size = 26;
		t.text = "微信公众号:  《心动女生手游》 客服QQ:202963048";
		t.textAlign = "left";
		t.textColor = 0x9D8281;
		t.verticalAlign = "middle";
		t.width = 619.69;
		t.x = 330.73;
		t.y = 500.91;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 215.15;
		t.scrollPolicyH = "off";
		t.skinName = "skins.ScrollerSkin";
		t.width = 617;
		t.x = 332;
		t.y = 258;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.contentLabel_i()];
		return t;
	};
	_proto.contentLabel_i = function () {
		var t = new eui.Label();
		this.contentLabel = t;
		t.anchorOffsetY = 0;
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "不好意思，宝宝们";
		t.width = 617;
		t.x = 1.420000000000016;
		return t;
	};
	return NoticeDialogSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/dialog/PlayVideoDialogSkin.exml'] = window.PlayVideoDialogSkin = (function (_super) {
	__extends(PlayVideoDialogSkin, _super);
	var PlayVideoDialogSkin$Skin61 = 	(function (_super) {
		__extends(PlayVideoDialogSkin$Skin61, _super);
		function PlayVideoDialogSkin$Skin61() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = PlayVideoDialogSkin$Skin61.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "work2_anniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0.5;
			t.source = "bag2_queding_png";
			t.y = 20;
			return t;
		};
		return PlayVideoDialogSkin$Skin61;
	})(eui.Skin);

	function PlayVideoDialogSkin() {
		_super.call(this);
		this.skinParts = ["blackBg","okBtn","contentLabel","contentGroup"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Group1_i(),this.blackBg_i(),this.contentGroup_i()];
	}
	var _proto = PlayVideoDialogSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.blackBg_i = function () {
		var t = new eui.Rect();
		this.blackBg = t;
		t.bottom = 0;
		t.fillAlpha = 1;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.contentGroup_i = function () {
		var t = new eui.Group();
		this.contentGroup = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.touchEnabled = true;
		t.verticalCenter = 0;
		t.width = 649;
		t.elementsContent = [this._Image1_i(),this.okBtn_i(),this.contentLabel_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 428.79;
		t.source = "set2_ditu_png";
		t.width = 655.63;
		t.x = -3;
		t.y = 0;
		return t;
	};
	_proto.okBtn_i = function () {
		var t = new eui.Button();
		this.okBtn = t;
		t.height = 86;
		t.label = "";
		t.width = 191;
		t.x = 229;
		t.y = 307;
		t.skinName = PlayVideoDialogSkin$Skin61;
		return t;
	};
	_proto.contentLabel_i = function () {
		var t = new eui.Label();
		this.contentLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "fzyc";
		t.height = 262;
		t.lineSpacing = 10;
		t.size = 40;
		t.text = "观看视频";
		t.textAlign = "center";
		t.textColor = 0x474646;
		t.verticalAlign = "middle";
		t.width = 584;
		t.x = 33;
		t.y = 36.36;
		return t;
	};
	return PlayVideoDialogSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/dialog/ShareGainDialogSkin.exml'] = window.ShareGainDialogSkin = (function (_super) {
	__extends(ShareGainDialogSkin, _super);
	var ShareGainDialogSkin$Skin62 = 	(function (_super) {
		__extends(ShareGainDialogSkin$Skin62, _super);
		function ShareGainDialogSkin$Skin62() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShareGainDialogSkin$Skin62.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "work2_anniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0.5;
			t.source = "bag2_queding_png";
			t.y = 20;
			return t;
		};
		return ShareGainDialogSkin$Skin62;
	})(eui.Skin);

	function ShareGainDialogSkin() {
		_super.call(this);
		this.skinParts = ["okBtn","gainLabel","noGainLabel","diamondIcon","contentGroup"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Rect1_i(),this.contentGroup_i()];
	}
	var _proto = ShareGainDialogSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.8;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.contentGroup_i = function () {
		var t = new eui.Group();
		this.contentGroup = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 649;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.okBtn_i(),this.gainLabel_i(),this.noGainLabel_i(),this._Image3_i(),this.diamondIcon_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 428.79;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(105,62,632,376);
		t.source = "set2_ditu_png";
		t.verticalCenter = 0;
		t.width = 655.63;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "youjian_biaoti_png";
		t.y = 23.9;
		return t;
	};
	_proto.okBtn_i = function () {
		var t = new eui.Button();
		this.okBtn = t;
		t.height = 86;
		t.label = "";
		t.width = 191;
		t.x = 229;
		t.y = 307;
		t.skinName = ShareGainDialogSkin$Skin62;
		return t;
	};
	_proto.gainLabel_i = function () {
		var t = new eui.Label();
		this.gainLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 112;
		t.size = 40;
		t.text = "获得5钻石";
		t.textAlign = "right";
		t.textColor = 0x846060;
		t.verticalAlign = "middle";
		t.x = 193.61;
		t.y = 150;
		return t;
	};
	_proto.noGainLabel_i = function () {
		var t = new eui.Label();
		this.noGainLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "获得5钻石";
		t.textAlign = "center";
		t.textColor = 0x846060;
		t.verticalAlign = "middle";
		t.verticalCenter = -19.5;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "share_title_png";
		t.x = 246;
		t.y = 35.4;
		return t;
	};
	_proto.diamondIcon_i = function () {
		var t = new eui.Image();
		this.diamondIcon = t;
		t.rotation = 24.7;
		t.source = "main2_zuanshi_png";
		t.x = 395.56;
		t.y = 165.3;
		return t;
	};
	return ShareGainDialogSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/dialog/SureDialogSkin.exml'] = window.SureDialogSkin = (function (_super) {
	__extends(SureDialogSkin, _super);
	var SureDialogSkin$Skin63 = 	(function (_super) {
		__extends(SureDialogSkin$Skin63, _super);
		function SureDialogSkin$Skin63() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SureDialogSkin$Skin63.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "work2_anniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0.5;
			t.source = "bag2_queding_png";
			t.y = 20;
			return t;
		};
		return SureDialogSkin$Skin63;
	})(eui.Skin);

	function SureDialogSkin() {
		_super.call(this);
		this.skinParts = ["okBtn","contentLabel","titleLabel","contentGroup"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Rect1_i(),this.contentGroup_i()];
	}
	var _proto = SureDialogSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.8;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.contentGroup_i = function () {
		var t = new eui.Group();
		this.contentGroup = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 649;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.okBtn_i(),this.contentLabel_i(),this.titleLabel_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 428.79;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(105,62,632,376);
		t.source = "set2_ditu_png";
		t.verticalCenter = 0;
		t.width = 655.63;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "youjian_biaoti_png";
		t.y = 23.9;
		return t;
	};
	_proto.okBtn_i = function () {
		var t = new eui.Button();
		this.okBtn = t;
		t.height = 86;
		t.label = "";
		t.width = 191;
		t.x = 229;
		t.y = 307;
		t.skinName = SureDialogSkin$Skin63;
		return t;
	};
	_proto.contentLabel_i = function () {
		var t = new eui.Label();
		this.contentLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 112;
		t.size = 40;
		t.text = "您确定花费9999钻石购买？";
		t.textAlign = "center";
		t.textColor = 0x070000;
		t.verticalAlign = "middle";
		t.width = 584;
		t.x = 33;
		t.y = 150;
		return t;
	};
	_proto.titleLabel_i = function () {
		var t = new eui.Label();
		this.titleLabel = t;
		t.fontFamily = "fzyc";
		t.horizontalCenter = 0.5;
		t.size = 50;
		t.text = "提 示";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 29.9;
		return t;
	};
	return SureDialogSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/dlc/DlcMainDocSkin.exml'] = window.DlcMainDocSkin = (function (_super) {
	__extends(DlcMainDocSkin, _super);
	var DlcMainDocSkin$Skin64 = 	(function (_super) {
		__extends(DlcMainDocSkin$Skin64, _super);
		function DlcMainDocSkin$Skin64() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DlcMainDocSkin$Skin64.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "login2_yuanxinganniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "login2_fanhui_png";
			t.verticalCenter = 0;
			return t;
		};
		return DlcMainDocSkin$Skin64;
	})(eui.Skin);

	var DlcMainDocSkin$Skin65 = 	(function (_super) {
		__extends(DlcMainDocSkin$Skin65, _super);
		function DlcMainDocSkin$Skin65() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",1.1),
						new eui.SetProperty("_Image1","scaleY",1.1)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DlcMainDocSkin$Skin65.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "login2_hongseanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.fontFamily = "fzyc";
			t.horizontalCenter = 0;
			t.verticalCenter = -5;
			return t;
		};
		return DlcMainDocSkin$Skin65;
	})(eui.Skin);

	function DlcMainDocSkin() {
		_super.call(this);
		this.skinParts = ["finditemGrp","showScroller","showIndexGrp","dlc_title","dlc_doc","backBtn","gotoShop"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = DlcMainDocSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this.showScroller_i(),this.showIndexGrp_i(),this._Group1_i(),this.backBtn_i(),this.gotoShop_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "dlc_bg_jpg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.showScroller_i = function () {
		var t = new eui.Scroller();
		this.showScroller = t;
		t.bounces = false;
		t.height = 720;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.scrollPolicyH = "on";
		t.scrollPolicyV = "off";
		t.throwSpeed = 1;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 1280;
		t.viewport = this.finditemGrp_i();
		return t;
	};
	_proto.finditemGrp_i = function () {
		var t = new eui.Group();
		this.finditemGrp = t;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bag2_BG_jpg";
		t.top = 0;
		t.width = 1280;
		t.x = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bag2_dangao_png";
		t.top = 0;
		t.width = 1280;
		t.x = 1280;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.source = "bag2_tiantianquan_png";
		t.top = 0;
		t.width = 1280;
		t.x = 2560;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.source = "bag2_zhishibing_png";
		t.top = 0;
		t.width = 1280;
		t.x = 3840;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.source = "beibao-dangao_png";
		t.top = 0;
		t.width = 1280;
		t.x = 5120;
		return t;
	};
	_proto.showIndexGrp_i = function () {
		var t = new eui.Group();
		this.showIndexGrp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 96;
		t.height = 38;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 262;
		t.x = 509;
		t.y = 586;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 36;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "dlc_unselect_icon_png";
		t.x = 159;
		t.y = 6;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "dlc_unselect_icon_png";
		t.x = 169;
		t.y = 16;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "dlc_unselect_icon_png";
		t.x = 179;
		t.y = 26;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "dlc_unselect_icon_png";
		t.x = 189;
		t.y = 36;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "dlc_unselect_icon_png";
		t.x = 199;
		t.y = 46;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 466;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 441;
		t.x = 839;
		t.y = 127.00000000000001;
		t.elementsContent = [this._Image12_i(),this.dlc_title_i(),this.dlc_doc_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "dlc_panel_1_png";
		t.top = 22;
		return t;
	};
	_proto.dlc_title_i = function () {
		var t = new eui.Label();
		this.dlc_title = t;
		t.fontFamily = "fzyc";
		t.left = 90;
		t.size = 28;
		t.text = "心动之旅";
		t.textColor = 0xd84587;
		t.top = 42;
		return t;
	};
	_proto.dlc_doc_i = function () {
		var t = new eui.Label();
		this.dlc_doc = t;
		t.fontFamily = "fzyc";
		t.left = 32;
		t.lineSpacing = 12;
		t.size = 26;
		t.text = "        在你向小野告白前，你们之间发生过哪些暧昧往事？\n        快用你的超能力集齐50个心动碎片，回味你与小野的心动之旅……";
		t.textColor = 0x682168;
		t.top = 100;
		t.verticalAlign = "top";
		t.width = 375;
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Button();
		this.backBtn = t;
		t.height = 103;
		t.label = "";
		t.right = 19;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 20;
		t.width = 104;
		t.skinName = DlcMainDocSkin$Skin64;
		return t;
	};
	_proto.gotoShop_i = function () {
		var t = new eui.Button();
		this.gotoShop = t;
		t.horizontalCenter = 425;
		t.label = "开启";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 280;
		t.skinName = DlcMainDocSkin$Skin65;
		return t;
	};
	return DlcMainDocSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/dlc/DlcMainGameOverSkin.exml'] = window.DlcMainGameOverSkin = (function (_super) {
	__extends(DlcMainGameOverSkin, _super);
	var DlcMainGameOverSkin$Skin66 = 	(function (_super) {
		__extends(DlcMainGameOverSkin$Skin66, _super);
		function DlcMainGameOverSkin$Skin66() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DlcMainGameOverSkin$Skin66.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bag2_lvseanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "dlc_text_back_png";
			t.y = 21;
			return t;
		};
		return DlcMainGameOverSkin$Skin66;
	})(eui.Skin);

	var DlcMainGameOverSkin$Skin67 = 	(function (_super) {
		__extends(DlcMainGameOverSkin$Skin67, _super);
		function DlcMainGameOverSkin$Skin67() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DlcMainGameOverSkin$Skin67.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "act_btn0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "dlc_text_next_png";
			t.y = 21;
			return t;
		};
		return DlcMainGameOverSkin$Skin67;
	})(eui.Skin);

	function DlcMainGameOverSkin() {
		_super.call(this);
		this.skinParts = ["bg","startGrp","backBtn","nextBtn"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Rect1_i(),this._Group2_i()];
	}
	var _proto = DlcMainGameOverSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.65;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 581;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 881;
		t.elementsContent = [this.bg_i(),this._Image1_i(),this._Group1_i(),this.backBtn_i(),this.nextBtn_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 458;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(69,49,87,64);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "set2_ditu_png";
		t.verticalCenter = 0;
		t.width = 723;
		t.x = 7;
		t.y = 60;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "dlc_panel_over_png";
		t.top = -39;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 193;
		t.horizontalCenter = 0;
		t.verticalCenter = -29;
		t.width = 550;
		t.elementsContent = [this._Image2_i(),this.startGrp_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(21,22,132,136);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "dlc_text_kuang_10_png";
		t.top = 0;
		return t;
	};
	_proto.startGrp_i = function () {
		var t = new eui.Group();
		this.startGrp = t;
		t.height = 77;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 398;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 50;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "dlc_big_start_1_png";
		t.x = 190;
		t.y = 136;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "dlc_big_start_1_png";
		t.x = 200;
		t.y = 146;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "dlc_big_start_1_png";
		t.x = 210;
		t.y = 156;
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Button();
		this.backBtn = t;
		t.bottom = 100;
		t.horizontalCenter = -150;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = DlcMainGameOverSkin$Skin66;
		return t;
	};
	_proto.nextBtn_i = function () {
		var t = new eui.Button();
		this.nextBtn = t;
		t.bottom = 100;
		t.height = 86;
		t.horizontalCenter = 150;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 191;
		t.y = 445.53000000000003;
		t.skinName = DlcMainGameOverSkin$Skin67;
		return t;
	};
	return DlcMainGameOverSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/dlc/DlcMainGameSkin.exml'] = window.DlcMainGameSkin = (function (_super) {
	__extends(DlcMainGameSkin, _super);
	var DlcMainGameSkin$Skin68 = 	(function (_super) {
		__extends(DlcMainGameSkin$Skin68, _super);
		function DlcMainGameSkin$Skin68() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","dlc_button_select_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DlcMainGameSkin$Skin68.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dlc_button_unSelect_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.textColor = 0x000000;
			t.verticalCenter = 0;
			return t;
		};
		return DlcMainGameSkin$Skin68;
	})(eui.Skin);

	var DlcMainGameSkin$Skin69 = 	(function (_super) {
		__extends(DlcMainGameSkin$Skin69, _super);
		function DlcMainGameSkin$Skin69() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","dlc_button_select_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DlcMainGameSkin$Skin69.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dlc_button_unSelect_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.textColor = 0x000000;
			t.verticalCenter = 0;
			return t;
		};
		return DlcMainGameSkin$Skin69;
	})(eui.Skin);

	var DlcMainGameSkin$Skin70 = 	(function (_super) {
		__extends(DlcMainGameSkin$Skin70, _super);
		function DlcMainGameSkin$Skin70() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","dlc_button_select_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DlcMainGameSkin$Skin70.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dlc_button_unSelect_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.textColor = 0x000000;
			t.verticalCenter = 0;
			return t;
		};
		return DlcMainGameSkin$Skin70;
	})(eui.Skin);

	var DlcMainGameSkin$Skin71 = 	(function (_super) {
		__extends(DlcMainGameSkin$Skin71, _super);
		function DlcMainGameSkin$Skin71() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","dlc_icon_4_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DlcMainGameSkin$Skin71.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dlc_icon_4_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DlcMainGameSkin$Skin71;
	})(eui.Skin);

	function DlcMainGameSkin() {
		_super.call(this);
		this.skinParts = ["otherImg","nextImg1","textInfoMe","nameMe","meGrp","nextImg0","nameOther","textInfoOther","otherGrp","titleSelect","startGrp","select_0","select_1","select_2","showSelectGrp","selectGrp","nextImg2","namePang","textInfoPang","pangGrp","contentGroup","upBtn"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Rect1_i(),this.contentGroup_i(),this.upBtn_i()];
	}
	var _proto = DlcMainGameSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.65;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.contentGroup_i = function () {
		var t = new eui.Group();
		this.contentGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = false;
		t.elementsContent = [this.otherImg_i(),this.meGrp_i(),this.otherGrp_i(),this.selectGrp_i(),this.pangGrp_i()];
		return t;
	};
	_proto.otherImg_i = function () {
		var t = new eui.Image();
		this.otherImg = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.meGrp_i = function () {
		var t = new eui.Group();
		this.meGrp = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.touchEnabled = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.nextImg1_i(),this._Image2_i(),this.textInfoMe_i(),this.nameMe_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 3;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "dlc_icon_5_png";
		t.touchEnabled = false;
		t.visible = false;
		t.x = 309;
		t.y = 14;
		return t;
	};
	_proto.nextImg1_i = function () {
		var t = new eui.Image();
		this.nextImg1 = t;
		t.bottom = 23;
		t.horizontalCenter = 0;
		t.source = "dlc_kuang_6_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 87;
		t.source = "dlc_icon_2_png";
		t.touchEnabled = false;
		t.x = 925;
		return t;
	};
	_proto.textInfoMe_i = function () {
		var t = new eui.Label();
		this.textInfoMe = t;
		t.bottom = 33;
		t.fontFamily = "fzyc";
		t.height = 82;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "你昨天打电话有事吗，我好像记不清楚了...";
		t.textColor = 0x96155D;
		t.touchEnabled = false;
		t.width = 557;
		return t;
	};
	_proto.nameMe_i = function () {
		var t = new eui.Label();
		this.nameMe = t;
		t.bottom = 132;
		t.fontFamily = "fzyc";
		t.size = 28;
		t.text = "我";
		t.x = 368;
		return t;
	};
	_proto.otherGrp_i = function () {
		var t = new eui.Group();
		this.otherGrp = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.touchEnabled = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.nextImg0_i(),this._Image3_i(),this.nameOther_i(),this.textInfoOther_i()];
		return t;
	};
	_proto.nextImg0_i = function () {
		var t = new eui.Image();
		this.nextImg0 = t;
		t.bottom = 23;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "dlc_kuang_7_png";
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 86;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "dlc_icon_3_png";
		t.touchEnabled = false;
		t.x = 932;
		return t;
	};
	_proto.nameOther_i = function () {
		var t = new eui.Label();
		this.nameOther = t;
		t.bottom = 135;
		t.fontFamily = "fzyc";
		t.size = 28;
		t.text = "赵小野";
		t.x = 336;
		return t;
	};
	_proto.textInfoOther_i = function () {
		var t = new eui.Label();
		this.textInfoOther = t;
		t.bottom = 33;
		t.fontFamily = "fzyc";
		t.height = 82;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "你昨天打电话有事吗，我好像记不清楚了...";
		t.textColor = 0x96155d;
		t.touchEnabled = false;
		t.width = 557;
		return t;
	};
	_proto.selectGrp_i = function () {
		var t = new eui.Group();
		this.selectGrp = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.touchEnabled = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect2_i(),this.titleSelect_i(),this.startGrp_i(),this.showSelectGrp_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.7;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.titleSelect_i = function () {
		var t = new eui.Label();
		this.titleSelect = t;
		t.fontFamily = "fzyc";
		t.height = 90;
		t.horizontalCenter = 0;
		t.size = 33;
		t.text = "我是数的撒我是数的撒我是数的撒我是数的撒我是数的撒我是数的撒";
		t.textAlign = "center";
		t.width = 635;
		t.y = 167;
		return t;
	};
	_proto.startGrp_i = function () {
		var t = new eui.Group();
		this.startGrp = t;
		t.height = 63;
		t.right = 19;
		t.top = 25;
		t.visible = false;
		t.width = 200;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 14;
		t.horizontalAlign = "right";
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "dlc_big_start_1_png";
		t.x = 6;
		t.y = 55;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "dlc_big_start_1_png";
		t.x = 16;
		t.y = 65;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "dlc_big_start_1_png";
		t.x = 26;
		t.y = 75;
		return t;
	};
	_proto.showSelectGrp_i = function () {
		var t = new eui.Group();
		this.showSelectGrp = t;
		t.anchorOffsetX = 0;
		t.height = 365;
		t.horizontalCenter = 0;
		t.width = 686.55;
		t.y = 278;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.select_0_i(),this.select_1_i(),this.select_2_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 24;
		t.horizontalAlign = "center";
		t.paddingTop = 0;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.select_0_i = function () {
		var t = new eui.RadioButton();
		this.select_0 = t;
		t.groupName = "showSelectGrp";
		t.label = "选项1";
		t.x = 263;
		t.y = 57;
		t.skinName = DlcMainGameSkin$Skin68;
		return t;
	};
	_proto.select_1_i = function () {
		var t = new eui.RadioButton();
		this.select_1 = t;
		t.groupName = "showSelectGrp";
		t.label = "选项1";
		t.x = 273;
		t.y = 67;
		t.skinName = DlcMainGameSkin$Skin69;
		return t;
	};
	_proto.select_2_i = function () {
		var t = new eui.RadioButton();
		this.select_2 = t;
		t.groupName = "showSelectGrp";
		t.label = "选项1";
		t.x = 283;
		t.y = 77;
		t.skinName = DlcMainGameSkin$Skin70;
		return t;
	};
	_proto.pangGrp_i = function () {
		var t = new eui.Group();
		this.pangGrp = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.nextImg2_i(),this.namePang_i(),this.textInfoPang_i()];
		return t;
	};
	_proto.nextImg2_i = function () {
		var t = new eui.Image();
		this.nextImg2 = t;
		t.bottom = 23;
		t.left = 50;
		t.right = 50;
		t.scale9Grid = new egret.Rectangle(287,122,21,13);
		t.source = "dlc_kuang_9_png";
		return t;
	};
	_proto.namePang_i = function () {
		var t = new eui.Label();
		this.namePang = t;
		t.bottom = 190;
		t.fontFamily = "fzyc";
		t.left = 154;
		t.size = 28;
		t.text = "旁白";
		return t;
	};
	_proto.textInfoPang_i = function () {
		var t = new eui.Label();
		this.textInfoPang = t;
		t.bottom = 43;
		t.fontFamily = "fzyc";
		t.height = 102;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "你昨天打电话有事吗，我好像记不清楚了...";
		t.textAlign = "left";
		t.textColor = 0x96155D;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 1016;
		return t;
	};
	_proto.upBtn_i = function () {
		var t = new eui.Button();
		this.upBtn = t;
		t.label = "";
		t.right = 52;
		t.top = 43;
		t.skinName = DlcMainGameSkin$Skin71;
		return t;
	};
	return DlcMainGameSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/dlc/DlcMainPanelInfoItemSkin.exml'] = window.DlcMainPanelInfoItemSkin = (function (_super) {
	__extends(DlcMainPanelInfoItemSkin, _super);
	function DlcMainPanelInfoItemSkin() {
		_super.call(this);
		this.skinParts = ["bgImg","title","showOffImg","rectMarsk","showBg","rectMa","showInfoImg"];
		
		this.height = 235;
		this.width = 177;
		this.elementsContent = [this.showOffImg_i(),this.showInfoImg_i()];
	}
	var _proto = DlcMainPanelInfoItemSkin.prototype;

	_proto.showOffImg_i = function () {
		var t = new eui.Group();
		this.showOffImg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.elementsContent = [this.bgImg_i(),this.title_i()];
		return t;
	};
	_proto.bgImg_i = function () {
		var t = new eui.Image();
		this.bgImg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "dlc_panel_2_png";
		t.top = 0;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Label();
		this.title = t;
		t.bottom = 8;
		t.fontFamily = "fzyc";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.text = "章节1星解锁";
		t.x = 20;
		t.y = 202;
		return t;
	};
	_proto.showInfoImg_i = function () {
		var t = new eui.Group();
		this.showInfoImg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.elementsContent = [this.rectMarsk_i(),this.showBg_i(),this.rectMa_i()];
		return t;
	};
	_proto.rectMarsk_i = function () {
		var t = new eui.Image();
		this.rectMarsk = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(13,14,80,90);
		t.source = "dlc_kuang_8_png";
		t.top = 0;
		return t;
	};
	_proto.showBg_i = function () {
		var t = new eui.Image();
		this.showBg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bag2_BG_jpg";
		t.top = 0;
		return t;
	};
	_proto.rectMa_i = function () {
		var t = new eui.Rect();
		this.rectMa = t;
		t.bottom = 1;
		t.ellipseWidth = 30;
		t.left = 1;
		t.right = 1;
		t.top = 1;
		return t;
	};
	return DlcMainPanelInfoItemSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/dlc/DlcMainPanelItemSkin.exml'] = window.DlcMainPanelItemSkin = (function (_super) {
	__extends(DlcMainPanelItemSkin, _super);
	function DlcMainPanelItemSkin() {
		_super.call(this);
		this.skinParts = ["bgPanel","titleShow","startGrp","lockImg"];
		
		this.height = 78;
		this.width = 320;
		this.elementsContent = [this.bgPanel_i(),this.titleShow_i(),this.startGrp_i(),this.lockImg_i()];
	}
	var _proto = DlcMainPanelItemSkin.prototype;

	_proto.bgPanel_i = function () {
		var t = new eui.Image();
		this.bgPanel = t;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(36,26,222,24);
		t.source = "dlc_kuang_1_png";
		t.verticalCenter = 0;
		t.width = 317;
		return t;
	};
	_proto.titleShow_i = function () {
		var t = new eui.Label();
		this.titleShow = t;
		t.fontFamily = "fzyc";
		t.text = "第一章";
		t.textColor = 0x2d2727;
		t.verticalCenter = 0;
		t.x = 22;
		return t;
	};
	_proto.startGrp_i = function () {
		var t = new eui.Group();
		this.startGrp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53;
		t.verticalCenter = 0;
		t.width = 150;
		t.x = 164;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "dlc_big_start_1_png";
		t.x = 27;
		t.y = 20;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "dlc_big_start_1_png";
		t.x = 37;
		t.y = 30;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "dlc_big_start_1_png";
		t.x = 47;
		t.y = 40;
		return t;
	};
	_proto.lockImg_i = function () {
		var t = new eui.Image();
		this.lockImg = t;
		t.source = "dlc_icon_1_png";
		t.verticalCenter = 0;
		t.x = 219;
		return t;
	};
	return DlcMainPanelItemSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/dlc/DlcMainPanelSkin.exml'] = window.DlcMainPanelSkin = (function (_super) {
	__extends(DlcMainPanelSkin, _super);
	var DlcMainPanelSkin$Skin72 = 	(function (_super) {
		__extends(DlcMainPanelSkin$Skin72, _super);
		function DlcMainPanelSkin$Skin72() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DlcMainPanelSkin$Skin72.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bag2_lvseanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "dlc_startButton_text_png";
			t.y = 21;
			return t;
		};
		return DlcMainPanelSkin$Skin72;
	})(eui.Skin);

	function DlcMainPanelSkin() {
		_super.call(this);
		this.skinParts = ["bg","titleBg","title","panelChapterList","showGrpImgInfos","startBtn","closeBtn","showImgInfo","showLabel","showLoading","showImggrp"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Image1_i(),this._Group5_i(),this.showImggrp_i()];
	}
	var _proto = DlcMainPanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "dlc_panel_main_bj_jpg";
		t.top = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 720;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1280;
		t.x = 10;
		t.y = 10;
		t.elementsContent = [this.bg_i(),this._Image2_i(),this.titleBg_i(),this.title_i(),this._Group1_i(),this._Group4_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this.closeBtn_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 660;
		t.scale9Grid = new egret.Rectangle(69,49,87,64);
		t.source = "set2_ditu_png";
		t.width = 970;
		t.x = 155;
		t.y = 30;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 536;
		t.source = "dlc_kuang_5_png";
		t.width = 940;
		t.x = 170;
		t.y = 113;
		return t;
	};
	_proto.titleBg_i = function () {
		var t = new eui.Image();
		this.titleBg = t;
		t.source = "act_title_png";
		t.x = 345;
		t.y = 40.69;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Label();
		this.title = t;
		t.fontFamily = "fzyc";
		t.horizontalCenter = 0;
		t.size = 50;
		t.text = "额外剧情";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 45.88;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 521;
		t.width = 322;
		t.x = 170;
		t.y = 117;
		t.elementsContent = [this._Scroller1_i()];
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "on";
		t.skinName = "skins.ScrollerSkin";
		t.top = 0;
		t.viewport = this.panelChapterList_i();
		return t;
	};
	_proto.panelChapterList_i = function () {
		var t = new eui.List();
		this.panelChapterList = t;
		t.itemRendererSkinName = DlcMainPanelItemSkin;
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i(),this._Object3_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.阿萨德 = "null";
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		t.阿萨德 = "null";
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		t.阿萨德 = "null";
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 545;
		t.width = 609;
		t.x = 493.82;
		t.y = 117.47;
		t.elementsContent = [this._Image3_i(),this._Group3_i(),this.startBtn_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 521;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(38,47,21,16);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "dlc_kuang_4_png";
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this._Group2_i(),this.showGrpImgInfos_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "dlc_panel_3_png";
		t.top = 10;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "dlc_panel_4_png";
		t.x = 427;
		t.y = 20;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 38;
		t.left = 10;
		t.right = 10;
		t.y = 139;
		t.elementsContent = [this._Rect1_i(),this._Label1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.ellipseWidth = 26;
		t.fillAlpha = 0.1;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "可获得写真";
		t.textColor = 0x5e5151;
		t.verticalCenter = 0;
		return t;
	};
	_proto.showGrpImgInfos_i = function () {
		var t = new eui.Group();
		this.showGrpImgInfos = t;
		t.bottom = 123;
		t.height = 241;
		t.left = 0;
		t.right = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._DlcMainPanelInfoItem1_i(),this._DlcMainPanelInfoItem2_i(),this._DlcMainPanelInfoItem3_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 20;
		t.horizontalAlign = "center";
		return t;
	};
	_proto._DlcMainPanelInfoItem1_i = function () {
		var t = new DlcMainPanelInfoItem();
		t.height = 235;
		t.skinName = "DlcMainPanelInfoItemSkin";
		t.width = 179;
		t.x = 227;
		t.y = 132;
		return t;
	};
	_proto._DlcMainPanelInfoItem2_i = function () {
		var t = new DlcMainPanelInfoItem();
		t.height = 235;
		t.skinName = "DlcMainPanelInfoItemSkin";
		t.width = 179;
		t.x = 237;
		t.y = 142;
		return t;
	};
	_proto._DlcMainPanelInfoItem3_i = function () {
		var t = new DlcMainPanelInfoItem();
		t.height = 235;
		t.skinName = "DlcMainPanelInfoItemSkin";
		t.width = 179;
		t.x = 247;
		t.y = 152;
		return t;
	};
	_proto.startBtn_i = function () {
		var t = new eui.Button();
		this.startBtn = t;
		t.bottom = 34;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 72.18;
		t.y = 435.53000000000003;
		t.skinName = DlcMainPanelSkin$Skin72;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.rotation = -30;
		t.scaleX = 1.8;
		t.scaleY = 1.8;
		t.source = "dacheng_1_png";
		t.x = 103;
		t.y = 637;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.rotation = 25;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "dacheng_1_png";
		t.x = 150;
		t.y = 535;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.rotation = 30;
		t.scaleX = 1.8;
		t.scaleY = 1.8;
		t.source = "dacheng_1_png";
		t.x = 1096;
		t.y = 588;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.rotation = -30;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "dacheng_1_png";
		t.x = 1092;
		t.y = 545;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.rotation = -30;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.source = "dacheng_1_png";
		t.x = 1106;
		t.y = 485;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.source = "gift_X_png";
		t.x = 1018.98;
		t.y = 29.32;
		return t;
	};
	_proto.showImggrp_i = function () {
		var t = new eui.Group();
		this.showImggrp = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.elementsContent = [this.showImgInfo_i(),this.showLoading_i()];
		return t;
	};
	_proto.showImgInfo_i = function () {
		var t = new eui.Image();
		this.showImgInfo = t;
		t.height = 720;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bag2_dangao_png";
		t.width = 1280;
		return t;
	};
	_proto.showLoading_i = function () {
		var t = new eui.Group();
		this.showLoading = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Rect2_i(),this.showLabel_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.7;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.showLabel_i = function () {
		var t = new eui.Label();
		this.showLabel = t;
		t.fontFamily = "fzyc";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 77;
		t.text = "加载中...";
		t.textAlign = "left";
		t.textColor = 0xe2d0d0;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 400;
		t.x = 440;
		t.y = 322;
		return t;
	};
	return DlcMainPanelSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/act/ActPage0UISkin.exml'] = window.ActPage0UISkin = (function (_super) {
	__extends(ActPage0UISkin, _super);
	function ActPage0UISkin() {
		_super.call(this);
		this.skinParts = ["scrollerGroup","scroller"];
		
		this.height = 525;
		this.width = 648;
		this.elementsContent = [this.scroller_i()];
	}
	var _proto = ActPage0UISkin.prototype;

	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.skinName = "skins.ScrollerSkin";
		t.top = 0;
		t.viewport = this.scrollerGroup_i();
		return t;
	};
	_proto.scrollerGroup_i = function () {
		var t = new eui.Group();
		this.scrollerGroup = t;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "top";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "act_page0_title_01_png";
		t.x = -26;
		t.y = 74;
		return t;
	};
	return ActPage0UISkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/act/ActPage1UISkin.exml'] = window.ActPage1UISkin = (function (_super) {
	__extends(ActPage1UISkin, _super);
	var ActPage1UISkin$Skin73 = 	(function (_super) {
		__extends(ActPage1UISkin$Skin73, _super);
		function ActPage1UISkin$Skin73() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ActPage1UISkin$Skin73.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "act_btn2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "fzyc";
			t.horizontalCenter = 0;
			t.size = 40;
			t.textAlign = "center";
			t.verticalAlign = "middle";
			t.verticalCenter = -2;
			return t;
		};
		return ActPage1UISkin$Skin73;
	})(eui.Skin);

	function ActPage1UISkin() {
		_super.call(this);
		this.skinParts = ["chongzhiBtn","dateLabel"];
		
		this.elementsContent = [this._Image1_i(),this.chongzhiBtn_i(),this._Image2_i(),this.dateLabel_i()];
	}
	var _proto = ActPage1UISkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "act_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chongzhiBtn_i = function () {
		var t = new eui.Button();
		this.chongzhiBtn = t;
		t.label = "去兑换";
		t.x = 211;
		t.y = 405;
		t.skinName = ActPage1UISkin$Skin73;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 10;
		t.source = "act_page1_content_png";
		t.verticalCenter = -53;
		return t;
	};
	_proto.dateLabel_i = function () {
		var t = new eui.Label();
		this.dateLabel = t;
		t.fontFamily = "fzyc";
		t.horizontalCenter = 1;
		t.size = 25;
		t.text = "活动时间11.11-11.18";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 364;
		return t;
	};
	return ActPage1UISkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/act/ActPage2UISkin.exml'] = window.ActPage2UISkin = (function (_super) {
	__extends(ActPage2UISkin, _super);
	var ActPage2UISkin$Skin74 = 	(function (_super) {
		__extends(ActPage2UISkin$Skin74, _super);
		function ActPage2UISkin$Skin74() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ActPage2UISkin$Skin74.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "act_btn2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "fzyc";
			t.horizontalCenter = 0;
			t.size = 40;
			t.textAlign = "center";
			t.verticalAlign = "middle";
			t.verticalCenter = -2;
			return t;
		};
		return ActPage2UISkin$Skin74;
	})(eui.Skin);

	var ActPage2UISkin$Skin75 = 	(function (_super) {
		__extends(ActPage2UISkin$Skin75, _super);
		function ActPage2UISkin$Skin75() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image2","source","weixin2_huiseanniu_png")
					])
			];
		}
		var _proto = ActPage2UISkin$Skin75.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bag2_lvseanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.height = 86;
			t.width = 191;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "fzyc";
			t.horizontalCenter = 0;
			t.size = 40;
			t.textAlign = "center";
			t.verticalAlign = "middle";
			t.verticalCenter = -2;
			return t;
		};
		return ActPage2UISkin$Skin75;
	})(eui.Skin);

	function ActPage2UISkin() {
		_super.call(this);
		this.skinParts = ["chongzhiBtn","lingquBtn","priceLabel","rewardImg0","rewardImg1","rewardImg2","rewardLabel0","rewardLabel1","rewardLabel2"];
		
		this.elementsContent = [this._Image1_i(),this.chongzhiBtn_i(),this.lingquBtn_i(),this._Image2_i(),this.priceLabel_i(),this.rewardImg0_i(),this.rewardImg1_i(),this.rewardImg2_i(),this.rewardLabel0_i(),this.rewardLabel1_i(),this.rewardLabel2_i()];
	}
	var _proto = ActPage2UISkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "act_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chongzhiBtn_i = function () {
		var t = new eui.Button();
		this.chongzhiBtn = t;
		t.label = "去兑换";
		t.x = 211;
		t.y = 405;
		t.skinName = ActPage2UISkin$Skin74;
		return t;
	};
	_proto.lingquBtn_i = function () {
		var t = new eui.Button();
		this.lingquBtn = t;
		t.horizontalCenter = 0;
		t.label = "领取";
		t.verticalCenter = 180;
		t.skinName = ActPage2UISkin$Skin75;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "act_page2_content_png";
		t.x = 63;
		t.y = 38;
		return t;
	};
	_proto.priceLabel_i = function () {
		var t = new eui.Label();
		this.priceLabel = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "fzyc";
		t.horizontalCenter = -66;
		t.size = 45;
		t.text = "999";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 101;
		t.y = 115;
		return t;
	};
	_proto.rewardImg0_i = function () {
		var t = new eui.Image();
		this.rewardImg0 = t;
		t.height = 100;
		t.source = "act_yilingqu_png";
		t.width = 100;
		t.x = 114;
		t.y = 202;
		return t;
	};
	_proto.rewardImg1_i = function () {
		var t = new eui.Image();
		this.rewardImg1 = t;
		t.height = 100;
		t.source = "act_yilingqu_png";
		t.width = 100;
		t.x = 267;
		t.y = 202;
		return t;
	};
	_proto.rewardImg2_i = function () {
		var t = new eui.Image();
		this.rewardImg2 = t;
		t.height = 100;
		t.source = "act_yilingqu_png";
		t.width = 100;
		t.x = 414;
		t.y = 202;
		return t;
	};
	_proto.rewardLabel0_i = function () {
		var t = new eui.Label();
		this.rewardLabel0 = t;
		t.fontFamily = "fzyc";
		t.size = 24;
		t.text = "香水x1";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 150;
		t.x = 90;
		t.y = 323;
		return t;
	};
	_proto.rewardLabel1_i = function () {
		var t = new eui.Label();
		this.rewardLabel1 = t;
		t.fontFamily = "fzyc";
		t.size = 24;
		t.text = "香水x1123";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 150;
		t.x = 245;
		t.y = 323;
		return t;
	};
	_proto.rewardLabel2_i = function () {
		var t = new eui.Label();
		this.rewardLabel2 = t;
		t.fontFamily = "fzyc";
		t.size = 24;
		t.text = "香水x1";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 150;
		t.x = 393;
		t.y = 323;
		return t;
	};
	return ActPage2UISkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/act/ui/ActKeLingQuBtnSkin.exml'] = window.ActKeLingQuBtnSkin = (function (_super) {
	__extends(ActKeLingQuBtnSkin, _super);
	var ActKeLingQuBtnSkin$Skin76 = 	(function (_super) {
		__extends(ActKeLingQuBtnSkin$Skin76, _super);
		function ActKeLingQuBtnSkin$Skin76() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","act_btn2_png")
					])
			];
		}
		var _proto = ActKeLingQuBtnSkin$Skin76.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "act_btn2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "fzyc";
			t.horizontalCenter = 0;
			t.size = 40;
			t.textAlign = "center";
			t.verticalAlign = "middle";
			t.verticalCenter = -3;
			return t;
		};
		return ActKeLingQuBtnSkin$Skin76;
	})(eui.Skin);

	function ActKeLingQuBtnSkin() {
		_super.call(this);
		this.skinParts = ["lingquBtn","redTip"];
		
		this.height = 100;
		this.width = 220;
		this.elementsContent = [this.lingquBtn_i(),this.redTip_i()];
	}
	var _proto = ActKeLingQuBtnSkin.prototype;

	_proto.lingquBtn_i = function () {
		var t = new eui.Button();
		this.lingquBtn = t;
		t.horizontalCenter = 0;
		t.label = "可领取";
		t.verticalCenter = 0;
		t.skinName = ActKeLingQuBtnSkin$Skin76;
		return t;
	};
	_proto.redTip_i = function () {
		var t = new eui.Image();
		this.redTip = t;
		t.source = "act_red_tip_png";
		t.x = 185;
		t.y = 4;
		return t;
	};
	return ActKeLingQuBtnSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/act/ActPage3UISkin.exml'] = window.ActPage3UISkin = (function (_super) {
	__extends(ActPage3UISkin, _super);
	function ActPage3UISkin() {
		_super.call(this);
		this.skinParts = ["lingquBtn"];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.lingquBtn_i()];
	}
	var _proto = ActPage3UISkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "act_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "tili_title_png";
		t.x = 11;
		t.y = 7;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "tili_text_png";
		t.x = 45;
		t.y = 99;
		return t;
	};
	_proto.lingquBtn_i = function () {
		var t = new ActKeLingQuBtn();
		this.lingquBtn = t;
		t.skinName = "ActKeLingQuBtnSkin";
		t.x = 207;
		t.y = 399;
		return t;
	};
	return ActPage3UISkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/act/ActPage4UISkin.exml'] = window.ActPage4UISkin = (function (_super) {
	__extends(ActPage4UISkin, _super);
	var ActPage4UISkin$Skin77 = 	(function (_super) {
		__extends(ActPage4UISkin$Skin77, _super);
		function ActPage4UISkin$Skin77() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ActPage4UISkin$Skin77.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "act_btn2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "fzyc";
			t.horizontalCenter = 0;
			t.size = 40;
			t.textAlign = "center";
			t.verticalAlign = "middle";
			t.verticalCenter = -2;
			return t;
		};
		return ActPage4UISkin$Skin77;
	})(eui.Skin);

	function ActPage4UISkin() {
		_super.call(this);
		this.skinParts = ["okBtn","inputLabel"];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.okBtn_i(),this._Image3_i(),this.inputLabel_i()];
	}
	var _proto = ActPage4UISkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "act_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "act_page4_title_png";
		t.x = 59;
		t.y = 90;
		return t;
	};
	_proto.okBtn_i = function () {
		var t = new eui.Button();
		this.okBtn = t;
		t.label = "确定";
		t.x = 211;
		t.y = 365;
		t.skinName = ActPage4UISkin$Skin77;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "act_page4_inputbg_png";
		t.x = 51;
		t.y = 203;
		return t;
	};
	_proto.inputLabel_i = function () {
		var t = new eui.TextInput();
		this.inputLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 68;
		t.text = "3KDB";
		t.width = 495;
		t.x = 70;
		t.y = 211;
		return t;
	};
	return ActPage4UISkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/act/ActPage5UISkin.exml'] = window.ActPage5UISkin = (function (_super) {
	__extends(ActPage5UISkin, _super);
	function ActPage5UISkin() {
		_super.call(this);
		this.skinParts = ["contentLabel","scrollerGroup","scroller"];
		
		this.height = 525;
		this.width = 648;
		this.elementsContent = [this._Image1_i(),this.scroller_i()];
	}
	var _proto = ActPage5UISkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "act_bg_png";
		t.top = 0;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 15;
		t.left = 0;
		t.right = 0;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "auto";
		t.skinName = "skins.ScrollerSkin";
		t.top = 12;
		t.viewport = this.scrollerGroup_i();
		return t;
	};
	_proto.scrollerGroup_i = function () {
		var t = new eui.Group();
		this.scrollerGroup = t;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.contentLabel_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.horizontalAlign = "center";
		t.paddingTop = 6;
		t.verticalAlign = "top";
		return t;
	};
	_proto.contentLabel_i = function () {
		var t = new eui.Label();
		this.contentLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "fzyc";
		t.text = "奖励叠加（例如充值1288元可领取所有档位奖励）更有小野签名海报可领。";
		t.width = 600;
		t.x = 44.58;
		t.y = 9.91;
		return t;
	};
	return ActPage5UISkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/act/ActPage6UISkin.exml'] = window.ActPage6UISkin = (function (_super) {
	__extends(ActPage6UISkin, _super);
	var ActPage6UISkin$Skin78 = 	(function (_super) {
		__extends(ActPage6UISkin$Skin78, _super);
		function ActPage6UISkin$Skin78() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image2","source","act_receive_black_png")
					])
			];
		}
		var _proto = ActPage6UISkin$Skin78.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "act_btn2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.percentHeight = 100;
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "fzyc";
			t.horizontalCenter = 0;
			t.size = 40;
			t.verticalCenter = -5;
			return t;
		};
		return ActPage6UISkin$Skin78;
	})(eui.Skin);

	function ActPage6UISkin() {
		_super.call(this);
		this.skinParts = ["btn","imgCoin","redTip","receiveGrp","dayLab"];
		
		this.height = 536;
		this.width = 633;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.receiveGrp_i(),this.dayLab_i()];
	}
	var _proto = ActPage6UISkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "act_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 18;
		t.source = "act_page6_content_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.receiveGrp_i = function () {
		var t = new eui.Group();
		this.receiveGrp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 47;
		t.height = 86;
		t.horizontalCenter = 20.5;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.width = 216;
		t.elementsContent = [this.btn_i(),this.imgCoin_i(),this.redTip_i()];
		return t;
	};
	_proto.btn_i = function () {
		var t = new eui.Button();
		this.btn = t;
		t.horizontalCenter = 0;
		t.label = "30 元";
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.verticalCenter = 0;
		t.x = -18;
		t.y = -178;
		t.skinName = ActPage6UISkin$Skin78;
		return t;
	};
	_proto.imgCoin_i = function () {
		var t = new eui.Image();
		this.imgCoin = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "charge_coin_big";
		t.touchEnabled = false;
		t.x = 134;
		t.y = 5.5;
		return t;
	};
	_proto.redTip_i = function () {
		var t = new eui.Image();
		this.redTip = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "act_red_tip_png";
		t.visible = false;
		t.x = 177;
		t.y = 0;
		return t;
	};
	_proto.dayLab_i = function () {
		var t = new eui.Label();
		this.dayLab = t;
		t.bottom = 37;
		t.fontFamily = "fzyc";
		t.right = 32;
		t.size = 30;
		t.text = "剩余30天";
		return t;
	};
	return ActPage6UISkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/act/ActPage7UISkin.exml'] = window.ActPage7UISkin = (function (_super) {
	__extends(ActPage7UISkin, _super);
	var ActPage7UISkin$Skin79 = 	(function (_super) {
		__extends(ActPage7UISkin$Skin79, _super);
		function ActPage7UISkin$Skin79() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ActPage7UISkin$Skin79.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "work2_anniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ActPage7UISkin$Skin79;
	})(eui.Skin);

	function ActPage7UISkin() {
		_super.call(this);
		this.skinParts = ["imgBg","txtPrice","btnBuy","txtTime","txtBaught"];
		
		this.height = 536;
		this.width = 633;
		this.elementsContent = [this.imgBg_i(),this.txtPrice_i(),this.btnBuy_i(),this.txtTime_i(),this.txtBaught_i()];
	}
	var _proto = ActPage7UISkin.prototype;

	_proto.imgBg_i = function () {
		var t = new eui.Image();
		this.imgBg = t;
		t.source = "";
		return t;
	};
	_proto.txtPrice_i = function () {
		var t = new eui.Label();
		this.txtPrice = t;
		t.fontFamily = "fzyc";
		t.italic = true;
		t.left = 403;
		t.size = 28;
		t.stroke = 2;
		t.strokeColor = 0xD55735;
		t.text = "100";
		t.textColor = 0xFFF488;
		t.top = 351;
		t.touchEnabled = false;
		return t;
	};
	_proto.btnBuy_i = function () {
		var t = new eui.Button();
		this.btnBuy = t;
		t.bottom = 73;
		t.label = "立刻购买";
		t.right = 131;
		t.skinName = ActPage7UISkin$Skin79;
		return t;
	};
	_proto.txtTime_i = function () {
		var t = new eui.Label();
		this.txtTime = t;
		t.bottom = 30;
		t.fontFamily = "fzyc";
		t.horizontalCenter = 0.5;
		t.size = 22;
		t.text = "活动时间";
		t.textAlign = "center";
		t.textColor = 0xA4B6FF;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.txtBaught_i = function () {
		var t = new eui.Label();
		this.txtBaught = t;
		t.bottom = 96;
		t.fontFamily = "fzyc";
		t.horizontalCenter = 100.5;
		t.size = 36;
		t.text = "已购买";
		t.textAlign = "center";
		t.textColor = 0xa6a6a6;
		t.verticalAlign = "middle";
		return t;
	};
	return ActPage7UISkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/act/ActPage8UISkin.exml'] = window.ActPage8UISkin = (function (_super) {
	__extends(ActPage8UISkin, _super);
	function ActPage8UISkin() {
		_super.call(this);
		this.skinParts = ["contentLabel"];
		
		this.elementsContent = [this._Image1_i(),this.contentLabel_i()];
	}
	var _proto = ActPage8UISkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "act_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.contentLabel_i = function () {
		var t = new eui.Label();
		this.contentLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "fzyc";
		t.horizontalCenter = 1;
		t.text = "        解锁《纯情房东俏房客》结局即送心动碎片x 5，解锁更多结局，多重心动碎片等你拿！ 活动永久有效";
		t.width = 585;
		t.y = 41.91;
		return t;
	};
	return ActPage8UISkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/act/ActPanelSkin.exml'] = window.ActPanelSkin = (function (_super) {
	__extends(ActPanelSkin, _super);
	var ActPanelSkin$Skin80 = 	(function (_super) {
		__extends(ActPanelSkin$Skin80, _super);
		function ActPanelSkin$Skin80() {
			_super.call(this);
			this.skinParts = ["red","labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.red_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","act_btn1_png"),
						new eui.SetProperty("red","source","act_red_tip_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ActPanelSkin$Skin80.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.source = "act_btn0_png";
			return t;
		};
		_proto.red_i = function () {
			var t = new eui.Image();
			this.red = t;
			t.source = "act_red_tip_png";
			t.visible = false;
			t.x = 190;
			t.y = -10;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "fzyc";
			t.horizontalCenter = 0;
			t.size = 40;
			t.textAlign = "center";
			t.verticalAlign = "middle";
			t.verticalCenter = -3;
			return t;
		};
		return ActPanelSkin$Skin80;
	})(eui.Skin);

	var ActPanelSkin$Skin81 = 	(function (_super) {
		__extends(ActPanelSkin$Skin81, _super);
		function ActPanelSkin$Skin81() {
			_super.call(this);
			this.skinParts = ["red","labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.red_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","act_btn1_png"),
						new eui.SetProperty("red","source","act_red_tip_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ActPanelSkin$Skin81.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.source = "act_btn0_png";
			return t;
		};
		_proto.red_i = function () {
			var t = new eui.Image();
			this.red = t;
			t.source = "act_red_tip_png";
			t.visible = false;
			t.x = 190;
			t.y = -10;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "fzyc";
			t.horizontalCenter = 0;
			t.size = 40;
			t.textAlign = "center";
			t.verticalAlign = "middle";
			t.verticalCenter = -3;
			return t;
		};
		return ActPanelSkin$Skin81;
	})(eui.Skin);

	var ActPanelSkin$Skin82 = 	(function (_super) {
		__extends(ActPanelSkin$Skin82, _super);
		function ActPanelSkin$Skin82() {
			_super.call(this);
			this.skinParts = ["red","labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.red_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","act_btn1_png"),
						new eui.SetProperty("red","source","act_red_tip_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ActPanelSkin$Skin82.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.source = "act_btn0_png";
			return t;
		};
		_proto.red_i = function () {
			var t = new eui.Image();
			this.red = t;
			t.source = "act_red_tip_png";
			t.visible = false;
			t.x = 190;
			t.y = -10;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "fzyc";
			t.horizontalCenter = 0;
			t.size = 40;
			t.textAlign = "center";
			t.verticalAlign = "middle";
			t.verticalCenter = -3;
			return t;
		};
		return ActPanelSkin$Skin82;
	})(eui.Skin);

	var ActPanelSkin$Skin83 = 	(function (_super) {
		__extends(ActPanelSkin$Skin83, _super);
		function ActPanelSkin$Skin83() {
			_super.call(this);
			this.skinParts = ["red","labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.red_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","act_btn1_png"),
						new eui.SetProperty("red","source","act_red_tip_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ActPanelSkin$Skin83.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.source = "act_btn0_png";
			return t;
		};
		_proto.red_i = function () {
			var t = new eui.Image();
			this.red = t;
			t.source = "act_red_tip_png";
			t.visible = false;
			t.x = 190;
			t.y = -10;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "fzyc";
			t.horizontalCenter = 0;
			t.size = 40;
			t.textAlign = "center";
			t.verticalAlign = "middle";
			t.verticalCenter = -3;
			return t;
		};
		return ActPanelSkin$Skin83;
	})(eui.Skin);

	var ActPanelSkin$Skin84 = 	(function (_super) {
		__extends(ActPanelSkin$Skin84, _super);
		function ActPanelSkin$Skin84() {
			_super.call(this);
			this.skinParts = ["red","labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.red_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","act_btn1_png"),
						new eui.SetProperty("red","source","act_red_tip_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ActPanelSkin$Skin84.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.source = "act_btn0_png";
			return t;
		};
		_proto.red_i = function () {
			var t = new eui.Image();
			this.red = t;
			t.source = "act_red_tip_png";
			t.visible = false;
			t.x = 190;
			t.y = -10;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "fzyc";
			t.horizontalCenter = 0;
			t.size = 40;
			t.textAlign = "center";
			t.verticalAlign = "middle";
			t.verticalCenter = -3;
			return t;
		};
		return ActPanelSkin$Skin84;
	})(eui.Skin);

	var ActPanelSkin$Skin85 = 	(function (_super) {
		__extends(ActPanelSkin$Skin85, _super);
		function ActPanelSkin$Skin85() {
			_super.call(this);
			this.skinParts = ["red","labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.red_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","act_btn1_png"),
						new eui.SetProperty("red","source","act_red_tip_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ActPanelSkin$Skin85.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.source = "act_btn0_png";
			return t;
		};
		_proto.red_i = function () {
			var t = new eui.Image();
			this.red = t;
			t.source = "act_red_tip_png";
			t.visible = false;
			t.x = 190;
			t.y = -10;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "fzyc";
			t.horizontalCenter = 0;
			t.size = 40;
			t.textAlign = "center";
			t.verticalAlign = "middle";
			t.verticalCenter = -3;
			return t;
		};
		return ActPanelSkin$Skin85;
	})(eui.Skin);

	var ActPanelSkin$Skin86 = 	(function (_super) {
		__extends(ActPanelSkin$Skin86, _super);
		function ActPanelSkin$Skin86() {
			_super.call(this);
			this.skinParts = ["red","labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.red_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","act_btn1_png"),
						new eui.SetProperty("red","source","act_red_tip_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ActPanelSkin$Skin86.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.source = "act_btn0_png";
			return t;
		};
		_proto.red_i = function () {
			var t = new eui.Image();
			this.red = t;
			t.source = "act_red_tip_png";
			t.visible = false;
			t.x = 190;
			t.y = -10;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "fzyc";
			t.horizontalCenter = 0;
			t.size = 40;
			t.textAlign = "center";
			t.verticalAlign = "middle";
			t.verticalCenter = -3;
			return t;
		};
		return ActPanelSkin$Skin86;
	})(eui.Skin);

	var ActPanelSkin$Skin87 = 	(function (_super) {
		__extends(ActPanelSkin$Skin87, _super);
		function ActPanelSkin$Skin87() {
			_super.call(this);
			this.skinParts = ["red","labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.red_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","act_btn1_png"),
						new eui.SetProperty("red","source","act_red_tip_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ActPanelSkin$Skin87.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.source = "act_btn0_png";
			return t;
		};
		_proto.red_i = function () {
			var t = new eui.Image();
			this.red = t;
			t.source = "act_red_tip_png";
			t.visible = false;
			t.x = 190;
			t.y = -10;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "fzyc";
			t.horizontalCenter = 0;
			t.size = 40;
			t.textAlign = "center";
			t.verticalAlign = "middle";
			t.verticalCenter = -3;
			return t;
		};
		return ActPanelSkin$Skin87;
	})(eui.Skin);

	var ActPanelSkin$Skin88 = 	(function (_super) {
		__extends(ActPanelSkin$Skin88, _super);
		function ActPanelSkin$Skin88() {
			_super.call(this);
			this.skinParts = ["red","labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.red_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","act_btn1_png"),
						new eui.SetProperty("red","source","act_red_tip_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ActPanelSkin$Skin88.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.source = "act_btn0_png";
			return t;
		};
		_proto.red_i = function () {
			var t = new eui.Image();
			this.red = t;
			t.source = "act_red_tip_png";
			t.visible = false;
			t.x = 190;
			t.y = -10;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "fzyc";
			t.horizontalCenter = 0;
			t.size = 40;
			t.textAlign = "center";
			t.verticalAlign = "middle";
			t.verticalCenter = -3;
			return t;
		};
		return ActPanelSkin$Skin88;
	})(eui.Skin);

	function ActPanelSkin() {
		_super.call(this);
		this.skinParts = ["bg","titleBg","title","menuBg","radioBtn8","radioBtn7","radioBtn6","radioBtn5","radioBtn0","radioBtn1","radioBtn2","radioBtn3","radioBtn4","radioScroller","page0","page1","page2","page3","page4","page5","page6","page7","page8","viewStack","closeBtn"];
		
		this.elementsContent = [this.bg_i(),this.titleBg_i(),this.title_i(),this.menuBg_i(),this.radioScroller_i(),this._Group11_i(),this.closeBtn_i()];
	}
	var _proto = ActPanelSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 660;
		t.scale9Grid = new egret.Rectangle(69,49,87,64);
		t.source = "set2_ditu_png";
		t.width = 970;
		t.x = 0;
		t.y = 0.68;
		return t;
	};
	_proto.titleBg_i = function () {
		var t = new eui.Image();
		this.titleBg = t;
		t.source = "act_title_png";
		t.x = 190;
		t.y = 11.37;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Label();
		this.title = t;
		t.fontFamily = "fzyc";
		t.size = 50;
		t.text = "活动中心";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 385;
		t.y = 17;
		return t;
	};
	_proto.menuBg_i = function () {
		var t = new eui.Image();
		this.menuBg = t;
		t.height = 545;
		t.source = "act_btn_bg_png";
		t.x = 26.82;
		t.y = 84.33;
		return t;
	};
	_proto.radioScroller_i = function () {
		var t = new eui.Scroller();
		this.radioScroller = t;
		t.anchorOffsetY = 0;
		t.height = 495.61;
		t.skinName = "skins.ScrollerSkin";
		t.width = 256.06;
		t.x = 25.42;
		t.y = 112.8;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.radioBtn8_i(),this.radioBtn7_i(),this.radioBtn6_i(),this.radioBtn5_i(),this.radioBtn0_i(),this.radioBtn1_i(),this.radioBtn2_i(),this.radioBtn3_i(),this.radioBtn4_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 10;
		t.horizontalAlign = "center";
		t.paddingTop = 20;
		t.verticalAlign = "top";
		return t;
	};
	_proto.radioBtn8_i = function () {
		var t = new eui.RadioButton();
		this.radioBtn8 = t;
		t.label = "联动活动";
		t.scaleX = 1;
		t.scaleY = 1;
		t.value = "8";
		t.x = -124.41999999999999;
		t.y = 351;
		t.skinName = ActPanelSkin$Skin80;
		return t;
	};
	_proto.radioBtn7_i = function () {
		var t = new eui.RadioButton();
		this.radioBtn7 = t;
		t.label = "最新优惠";
		t.scaleX = 1;
		t.scaleY = 1;
		t.value = "7";
		t.x = -134.42;
		t.y = 341;
		t.skinName = ActPanelSkin$Skin81;
		return t;
	};
	_proto.radioBtn6_i = function () {
		var t = new eui.RadioButton();
		this.radioBtn6 = t;
		t.label = "月 卡";
		t.scaleX = 1;
		t.scaleY = 1;
		t.value = "6";
		t.x = -144.42;
		t.y = 331;
		t.skinName = ActPanelSkin$Skin82;
		return t;
	};
	_proto.radioBtn5_i = function () {
		var t = new eui.RadioButton();
		this.radioBtn5 = t;
		t.label = "累计充值";
		t.scaleX = 1;
		t.scaleY = 1;
		t.value = "5";
		t.x = -154.42;
		t.y = 321;
		t.skinName = ActPanelSkin$Skin83;
		return t;
	};
	_proto.radioBtn0_i = function () {
		var t = new eui.RadioButton();
		this.radioBtn0 = t;
		t.label = "登录有奖";
		t.scaleX = 1;
		t.scaleY = 1;
		t.selected = true;
		t.value = "0";
		t.x = -164.42;
		t.y = -83;
		t.skinName = ActPanelSkin$Skin84;
		return t;
	};
	_proto.radioBtn1_i = function () {
		var t = new eui.RadioButton();
		this.radioBtn1 = t;
		t.label = "首兑双倍";
		t.scaleX = 1;
		t.scaleY = 1;
		t.value = "1";
		t.x = -164.42;
		t.y = 16;
		t.skinName = ActPanelSkin$Skin85;
		return t;
	};
	_proto.radioBtn2_i = function () {
		var t = new eui.RadioButton();
		this.radioBtn2 = t;
		t.label = "首兑礼包";
		t.scaleX = 1;
		t.scaleY = 1;
		t.value = "2";
		t.x = -164.42;
		t.y = 114;
		t.skinName = ActPanelSkin$Skin86;
		return t;
	};
	_proto.radioBtn3_i = function () {
		var t = new eui.RadioButton();
		this.radioBtn3 = t;
		t.label = "免费体力";
		t.scaleX = 1;
		t.scaleY = 1;
		t.value = "3";
		t.x = -164.42;
		t.y = 213;
		t.skinName = ActPanelSkin$Skin87;
		return t;
	};
	_proto.radioBtn4_i = function () {
		var t = new eui.RadioButton();
		this.radioBtn4 = t;
		t.label = "礼包兑换";
		t.scaleX = 1;
		t.scaleY = 1;
		t.value = "4";
		t.x = -25.42;
		t.y = 230.5;
		t.skinName = ActPanelSkin$Skin88;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 545;
		t.width = 648;
		t.x = 296.82;
		t.y = 88.15;
		t.elementsContent = [this._Image1_i(),this.viewStack_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 545;
		t.scale9Grid = new egret.Rectangle(38,59,21,43);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "act_btn_bg2_png";
		t.width = 648;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.viewStack_i = function () {
		var t = new eui.ViewStack();
		this.viewStack = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 545;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.selectedIndex = 0;
		t.verticalCenter = -8.5;
		t.width = 648;
		t.elementsContent = [this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Group6_i(),this._Group7_i(),this._Group8_i(),this._Group9_i(),this._Group10_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this.page0_i()];
		return t;
	};
	_proto.page0_i = function () {
		var t = new ActPage0UI();
		this.page0 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "ActPage0UISkin";
		t.x = 0;
		t.y = 19.12;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		t.elementsContent = [this.page1_i()];
		return t;
	};
	_proto.page1_i = function () {
		var t = new ActPage1UI();
		this.page1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "ActPage1UISkin";
		t.x = 7.48;
		t.y = 14.64;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		t.elementsContent = [this.page2_i()];
		return t;
	};
	_proto.page2_i = function () {
		var t = new ActPage2UI();
		this.page2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "ActPage2UISkin";
		t.x = 7.48;
		t.y = 14.64;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		t.elementsContent = [this.page3_i()];
		return t;
	};
	_proto.page3_i = function () {
		var t = new ActPage3UI();
		this.page3 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "ActPage3UISkin";
		t.x = 7.48;
		t.y = 14.64;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		t.elementsContent = [this.page4_i()];
		return t;
	};
	_proto.page4_i = function () {
		var t = new ActPage4UI();
		this.page4 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "ActPage4UISkin";
		t.x = 7.48;
		t.y = 14.64;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		t.elementsContent = [this.page5_i()];
		return t;
	};
	_proto.page5_i = function () {
		var t = new ActPage5UI();
		this.page5 = t;
		t.skinName = "ActPage5UISkin";
		t.x = 0;
		t.y = 19.12;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.height = 551;
		t.visible = false;
		t.width = 643;
		t.elementsContent = [this.page6_i()];
		return t;
	};
	_proto.page6_i = function () {
		var t = new ActPage6UI();
		this.page6 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "ActPage6UISkin";
		t.x = 10;
		t.y = 15;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.elementsContent = [this.page7_i()];
		return t;
	};
	_proto.page7_i = function () {
		var t = new ActPage7UI();
		this.page7 = t;
		t.skinName = "ActPage7UISkin";
		t.y = 19.12;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 10;
		t.y = 10;
		t.elementsContent = [this.page8_i()];
		return t;
	};
	_proto.page8_i = function () {
		var t = new ActPage8UI();
		this.page8 = t;
		t.skinName = "ActPage8UISkin";
		t.x = 0;
		t.y = 19.12;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.source = "gift_X_png";
		t.x = 863.98;
		t.y = 0;
		return t;
	};
	return ActPanelSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/act/ui/ActAwardBtnSkin.exml'] = window.ActAwardBtnSkin = (function (_super) {
	__extends(ActAwardBtnSkin, _super);
	var ActAwardBtnSkin$Skin89 = 	(function (_super) {
		__extends(ActAwardBtnSkin$Skin89, _super);
		function ActAwardBtnSkin$Skin89() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image2","source","act_receive_btn_black_png")
					])
			];
		}
		var _proto = ActAwardBtnSkin$Skin89.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "act_receive_btn0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.height = 50;
			t.width = 108;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ActAwardBtnSkin$Skin89;
	})(eui.Skin);

	function ActAwardBtnSkin() {
		_super.call(this);
		this.skinParts = ["btn","redTip"];
		
		this.elementsContent = [this.btn_i(),this.redTip_i()];
	}
	var _proto = ActAwardBtnSkin.prototype;

	_proto.btn_i = function () {
		var t = new eui.Button();
		this.btn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.label = "";
		t.skinName = ActAwardBtnSkin$Skin89;
		return t;
	};
	_proto.redTip_i = function () {
		var t = new eui.Image();
		this.redTip = t;
		t.right = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "act_red_tip_png";
		t.y = 0;
		return t;
	};
	return ActAwardBtnSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/act/ui/ActAccumulativeRechargeSkin.exml'] = window.ActAccumulativeRechargeSkin = (function (_super) {
	__extends(ActAccumulativeRechargeSkin, _super);
	var ActAccumulativeRechargeSkin$Skin90 = 	(function (_super) {
		__extends(ActAccumulativeRechargeSkin$Skin90, _super);
		function ActAccumulativeRechargeSkin$Skin90() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","act_receive_btn1_png")
					])
			];
		}
		var _proto = ActAccumulativeRechargeSkin$Skin90.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "act_receive_btn1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ActAccumulativeRechargeSkin$Skin90;
	})(eui.Skin);

	function ActAccumulativeRechargeSkin() {
		_super.call(this);
		this.skinParts = ["contentLabel","yiLingquBtn","lingquBtn"];
		
		this.height = 80;
		this.width = 600;
		this.elementsContent = [this._Image1_i(),this.contentLabel_i(),this.yiLingquBtn_i(),this.lingquBtn_i()];
	}
	var _proto = ActAccumulativeRechargeSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(44,24,4,12);
		t.source = "act_gift_inputbg_png";
		t.top = 0;
		return t;
	};
	_proto.contentLabel_i = function () {
		var t = new eui.Label();
		this.contentLabel = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "fzyc";
		t.left = 13;
		t.size = 24;
		t.text = "10元 50钻石";
		t.textAlign = "left";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 432;
		return t;
	};
	_proto.yiLingquBtn_i = function () {
		var t = new eui.Button();
		this.yiLingquBtn = t;
		t.label = "";
		t.right = 33;
		t.verticalCenter = -3.5;
		t.skinName = ActAccumulativeRechargeSkin$Skin90;
		return t;
	};
	_proto.lingquBtn_i = function () {
		var t = new ActLingQuBtn();
		this.lingquBtn = t;
		t.right = 5;
		t.skinName = "ActAwardBtnSkin";
		t.verticalCenter = 0;
		return t;
	};
	return ActAccumulativeRechargeSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/act/ui/ActLingQuBtnSkin.exml'] = window.ActLingQuBtnSkin = (function (_super) {
	__extends(ActLingQuBtnSkin, _super);
	var ActLingQuBtnSkin$Skin91 = 	(function (_super) {
		__extends(ActLingQuBtnSkin$Skin91, _super);
		function ActLingQuBtnSkin$Skin91() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image2","source","weixin2_huiseanniu_png")
					])
			];
		}
		var _proto = ActLingQuBtnSkin$Skin91.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bag2_lvseanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.height = 86;
			t.width = 191;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "fzyc";
			t.horizontalCenter = 0;
			t.size = 40;
			t.textAlign = "center";
			t.verticalAlign = "middle";
			t.verticalCenter = -3;
			return t;
		};
		return ActLingQuBtnSkin$Skin91;
	})(eui.Skin);

	function ActLingQuBtnSkin() {
		_super.call(this);
		this.skinParts = ["btn","redTip"];
		
		this.height = 100;
		this.width = 220;
		this.elementsContent = [this.btn_i(),this.redTip_i()];
	}
	var _proto = ActLingQuBtnSkin.prototype;

	_proto.btn_i = function () {
		var t = new eui.Button();
		this.btn = t;
		t.horizontalCenter = 0;
		t.label = "领取";
		t.verticalCenter = 0;
		t.skinName = ActLingQuBtnSkin$Skin91;
		return t;
	};
	_proto.redTip_i = function () {
		var t = new eui.Image();
		this.redTip = t;
		t.source = "act_red_tip_png";
		t.x = 171;
		t.y = 5;
		return t;
	};
	return ActLingQuBtnSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/act/ui/DayRewardUISkin.exml'] = window.DayRewardUISkin = (function (_super) {
	__extends(DayRewardUISkin, _super);
	var DayRewardUISkin$Skin92 = 	(function (_super) {
		__extends(DayRewardUISkin$Skin92, _super);
		function DayRewardUISkin$Skin92() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","act_yilingqu_png")
					])
			];
		}
		var _proto = DayRewardUISkin$Skin92.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "act_yilingqu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DayRewardUISkin$Skin92;
	})(eui.Skin);

	function DayRewardUISkin() {
		_super.call(this);
		this.skinParts = ["dayLabel","rewardImg0","rewardImg1","rewardImg2","rewardLabel0","rewardLabel1","rewardLabel2","yiLingquBtn","lingquBtn"];
		
		this.height = 118;
		this.width = 648;
		this.elementsContent = [this._Image1_i(),this.dayLabel_i(),this.rewardImg0_i(),this.rewardImg1_i(),this.rewardImg2_i(),this.rewardLabel0_i(),this.rewardLabel1_i(),this.rewardLabel2_i(),this.yiLingquBtn_i(),this.lingquBtn_i()];
	}
	var _proto = DayRewardUISkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "act_day_bg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.dayLabel_i = function () {
		var t = new eui.Label();
		this.dayLabel = t;
		t.fontFamily = "fzyc";
		t.size = 30;
		t.text = "第一天";
		t.textAlign = "center";
		t.textColor = 0x352121;
		t.verticalAlign = "middle";
		t.x = 22;
		t.y = 44;
		return t;
	};
	_proto.rewardImg0_i = function () {
		var t = new eui.Image();
		this.rewardImg0 = t;
		t.height = 60;
		t.source = "shop2_zhuanshi_png";
		t.width = 60;
		t.x = 133;
		t.y = 10;
		return t;
	};
	_proto.rewardImg1_i = function () {
		var t = new eui.Image();
		this.rewardImg1 = t;
		t.height = 60;
		t.source = "shop2_zhuanshi_png";
		t.width = 60;
		t.x = 238;
		t.y = 10;
		return t;
	};
	_proto.rewardImg2_i = function () {
		var t = new eui.Image();
		this.rewardImg2 = t;
		t.height = 60;
		t.source = "shop2_zhuanshi_png";
		t.width = 60;
		t.x = 343;
		t.y = 10;
		return t;
	};
	_proto.rewardLabel0_i = function () {
		var t = new eui.Label();
		this.rewardLabel0 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "fzyc";
		t.size = 20;
		t.text = "小蛋糕520";
		t.textAlign = "center";
		t.textColor = 0x875252;
		t.verticalAlign = "middle";
		t.width = 120;
		t.x = 102;
		t.y = 76;
		return t;
	};
	_proto.rewardLabel1_i = function () {
		var t = new eui.Label();
		this.rewardLabel1 = t;
		t.fontFamily = "fzyc";
		t.size = 20;
		t.text = "小蛋糕520";
		t.textAlign = "center";
		t.textColor = 0x875252;
		t.verticalAlign = "middle";
		t.width = 120;
		t.x = 208.5;
		t.y = 76;
		return t;
	};
	_proto.rewardLabel2_i = function () {
		var t = new eui.Label();
		this.rewardLabel2 = t;
		t.fontFamily = "fzyc";
		t.size = 20;
		t.text = "小蛋糕520";
		t.textAlign = "center";
		t.textColor = 0x875252;
		t.verticalAlign = "middle";
		t.width = 120;
		t.x = 315;
		t.y = 76;
		return t;
	};
	_proto.yiLingquBtn_i = function () {
		var t = new eui.Button();
		this.yiLingquBtn = t;
		t.label = "";
		t.x = 475;
		t.y = 18;
		t.skinName = DayRewardUISkin$Skin92;
		return t;
	};
	_proto.lingquBtn_i = function () {
		var t = new ActLingQuBtn();
		this.lingquBtn = t;
		t.skinName = "ActLingQuBtnSkin";
		t.x = 415;
		t.y = 9;
		return t;
	};
	return DayRewardUISkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/act/ui/MonthCardSkin.exml'] = window.MonthCardSkin = (function (_super) {
	__extends(MonthCardSkin, _super);
	var MonthCardSkin$Skin93 = 	(function (_super) {
		__extends(MonthCardSkin$Skin93, _super);
		function MonthCardSkin$Skin93() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MonthCardSkin$Skin93.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "act_btn2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MonthCardSkin$Skin93;
	})(eui.Skin);

	function MonthCardSkin() {
		_super.call(this);
		this.skinParts = ["lingquBtn","redTip"];
		
		this.height = 96;
		this.width = 222;
		this.elementsContent = [this.lingquBtn_i(),this.redTip_i()];
	}
	var _proto = MonthCardSkin.prototype;

	_proto.lingquBtn_i = function () {
		var t = new eui.Button();
		this.lingquBtn = t;
		t.horizontalCenter = 0;
		t.label = "30 元";
		t.verticalCenter = 0;
		t.skinName = MonthCardSkin$Skin93;
		return t;
	};
	_proto.redTip_i = function () {
		var t = new eui.Image();
		this.redTip = t;
		t.source = "act_red_tip_png";
		t.x = 185;
		t.y = 4;
		return t;
	};
	return MonthCardSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/bag/BagsGroupItemSkin.exml'] = window.BagsGroupItemSkin = (function (_super) {
	__extends(BagsGroupItemSkin, _super);
	function BagsGroupItemSkin() {
		_super.call(this);
		this.skinParts = ["maskImg","daojuImg","typeLabel","countLabel"];
		
		this.elementsContent = [this.maskImg_i(),this.daojuImg_i(),this._Image1_i(),this._Group1_i()];
	}
	var _proto = BagsGroupItemSkin.prototype;

	_proto.maskImg_i = function () {
		var t = new eui.Image();
		this.maskImg = t;
		t.height = 360;
		t.source = "bag2_zhishibing_png";
		t.visible = false;
		t.width = 366;
		return t;
	};
	_proto.daojuImg_i = function () {
		var t = new eui.Image();
		this.daojuImg = t;
		t.height = 360;
		t.width = 366;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.source = "bag2_baidi_png";
		t.y = 360;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 43;
		t.width = 366;
		t.x = 0;
		t.y = 371;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.typeLabel_i(),this.countLabel_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.typeLabel_i = function () {
		var t = new eui.Label();
		this.typeLabel = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "fzyc";
		t.height = 38;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.text = "啊啊啊啊啊";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.x = 24;
		t.y = 1;
		return t;
	};
	_proto.countLabel_i = function () {
		var t = new eui.Label();
		this.countLabel = t;
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "x10";
		t.textColor = 0xff4f4f;
		t.x = 216;
		t.y = 4;
		return t;
	};
	return BagsGroupItemSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/scene/game/ui/HeartsPluginSkin.exml'] = window.HeartsPluginSkin = (function (_super) {
	__extends(HeartsPluginSkin, _super);
	function HeartsPluginSkin() {
		_super.call(this);
		this.skinParts = ["jinduBg","jinduImg","uHeartLabel","upHeartLabel","maxImg","maskImg"];
		
		this.elementsContent = [this.jinduBg_i(),this.jinduImg_i(),this._Image1_i(),this._Group1_i(),this._Image2_i(),this.maxImg_i(),this.maskImg_i()];
	}
	var _proto = HeartsPluginSkin.prototype;

	_proto.jinduBg_i = function () {
		var t = new eui.Image();
		this.jinduBg = t;
		t.height = 59;
		t.width = 275;
		t.x = 110;
		t.y = 34;
		return t;
	};
	_proto.jinduImg_i = function () {
		var t = new eui.Image();
		this.jinduImg = t;
		t.scale9Grid = new egret.Rectangle(74,0,77,59);
		t.source = "main2_main2_tilitiao_png";
		t.width = 275;
		t.x = 110;
		t.y = 34;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scale9Grid = new egret.Rectangle(125,4,33,110);
		t.source = "main2_tilizhi_png";
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.95;
		t.scaleY = 0.95;
		t.width = 222;
		t.x = 143;
		t.y = 37;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.uHeartLabel_i(),this._BitmapLabel1_i(),this.upHeartLabel_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "center";
		t.paddingTop = 12;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.uHeartLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.uHeartLabel = t;
		t.font = "shuzi1_fnt";
		t.height = 40;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.text = "1894";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.x = 0;
		t.y = 14;
		return t;
	};
	_proto._BitmapLabel1_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "shuzi1_fnt";
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.text = "/";
		t.width = 24;
		t.x = 87;
		t.y = 12;
		return t;
	};
	_proto.upHeartLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.upHeartLabel = t;
		t.font = "shuzi1_fnt";
		t.height = 40;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.text = "1894";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.x = 134;
		t.y = 14;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "main2_tilizhi-aixin_png";
		t.y = -1;
		return t;
	};
	_proto.maxImg_i = function () {
		var t = new eui.Image();
		this.maxImg = t;
		t.anchorOffsetX = 59;
		t.anchorOffsetY = 20;
		t.source = "main2_MAX_png";
		t.x = 75;
		t.y = 59;
		return t;
	};
	_proto.maskImg_i = function () {
		var t = new eui.Image();
		this.maskImg = t;
		t.anchorOffsetX = 0;
		t.height = 59;
		t.source = "main2_zhezhao_1_png";
		t.visible = false;
		t.width = 273;
		t.x = 110;
		t.y = 34;
		return t;
	};
	return HeartsPluginSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/bag/BagsPanelSkin.exml'] = window.BagsPanelSkin = (function (_super) {
	__extends(BagsPanelSkin, _super);
	var BagsPanelSkin$Skin94 = 	(function (_super) {
		__extends(BagsPanelSkin$Skin94, _super);
		function BagsPanelSkin$Skin94() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BagsPanelSkin$Skin94.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "login2_hongseanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "bag2_qianwansahngcheng_png";
			t.y = 32;
			return t;
		};
		return BagsPanelSkin$Skin94;
	})(eui.Skin);

	var BagsPanelSkin$Skin95 = 	(function (_super) {
		__extends(BagsPanelSkin$Skin95, _super);
		function BagsPanelSkin$Skin95() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BagsPanelSkin$Skin95.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "login2_yuanxinganniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "login2_fanhui_png";
			t.verticalCenter = 0;
			return t;
		};
		return BagsPanelSkin$Skin95;
	})(eui.Skin);

	function BagsPanelSkin() {
		_super.call(this);
		this.skinParts = ["bgImg","giftGroup","giftScroller","heartPlugin","gotoShop","nothingGroup","backBtn","leftGoup","yindaoTip","backCircle","backHand","yindaoBack"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this.bgImg_i(),this._Image1_i(),this.giftScroller_i(),this.heartPlugin_i(),this.nothingGroup_i(),this.leftGoup_i(),this.yindaoTip_i(),this.yindaoBack_i()];
	}
	var _proto = BagsPanelSkin.prototype;

	_proto.bgImg_i = function () {
		var t = new eui.Image();
		this.bgImg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bag2_BG_jpg";
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 12;
		t.percentHeight = 78;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shop2_zhezhao_png";
		t.percentWidth = 100;
		t.x = 0;
		return t;
	};
	_proto.giftScroller_i = function () {
		var t = new eui.Scroller();
		this.giftScroller = t;
		t.anchorOffsetX = 0;
		t.bottom = -2;
		t.percentHeight = 80;
		t.horizontalCenter = 0;
		t.skinName = "skins.ScrollerSkin";
		t.width = 1280;
		t.viewport = this.giftGroup_i();
		return t;
	};
	_proto.giftGroup_i = function () {
		var t = new eui.Group();
		this.giftGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.x = 213.64;
		t.y = 0;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.columnAlign = "left";
		t.horizontalAlign = "left";
		t.horizontalGap = 30;
		t.paddingBottom = 30;
		t.paddingLeft = 50;
		t.paddingRight = 50;
		t.paddingTop = 30;
		t.rowAlign = "top";
		t.verticalAlign = "top";
		t.verticalGap = 30;
		return t;
	};
	_proto.heartPlugin_i = function () {
		var t = new HeartsPlugins();
		this.heartPlugin = t;
		t.left = 8;
		t.skinName = "HeartsPluginSkin";
		t.top = 5;
		return t;
	};
	_proto.nothingGroup_i = function () {
		var t = new eui.Group();
		this.nothingGroup = t;
		t.bottom = 12;
		t.percentHeight = 78;
		t.horizontalCenter = 0;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.touchThrough = true;
		t.width = 1280;
		t.elementsContent = [this._Image2_i(),this._Label1_i(),this.gotoShop_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "bag2_zhezhao1_png";
		t.verticalCenter = -72.5;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.horizontalCenter = -0.5;
		t.size = 43;
		t.text = "背包中没有道具，请前往商城购买~";
		t.textColor = 0xffffff;
		t.verticalCenter = -74;
		return t;
	};
	_proto.gotoShop_i = function () {
		var t = new eui.Button();
		this.gotoShop = t;
		t.horizontalCenter = 0.5;
		t.label = "";
		t.verticalCenter = 145.5;
		t.skinName = BagsPanelSkin$Skin94;
		return t;
	};
	_proto.leftGoup_i = function () {
		var t = new eui.Group();
		this.leftGoup = t;
		t.height = 720;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = false;
		t.width = 1280;
		t.elementsContent = [this.backBtn_i()];
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Button();
		this.backBtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 1157;
		t.y = 20;
		t.skinName = BagsPanelSkin$Skin95;
		return t;
	};
	_proto.yindaoTip_i = function () {
		var t = new eui.Group();
		this.yindaoTip = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Group1_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 720;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 1280;
		t.elementsContent = [this._Image3_i(),this._Label2_i(),this._Label3_i(),this._Label4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_miao_png";
		t.x = 410;
		t.y = 188;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "从商城和活动获得小礼物后,";
		t.x = 509.4;
		t.y = 381.16;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "别忘了在背包里使用送给女主";
		t.x = 500.54;
		t.y = 423.16;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "增加好感度哦~";
		t.x = 584.87;
		t.y = 462.68;
		return t;
	};
	_proto.yindaoBack_i = function () {
		var t = new eui.Group();
		this.yindaoBack = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Group3_i()];
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 720;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.width = 1280;
		t.elementsContent = [this._Group2_i(),this._Image4_i(),this._Label5_i(),this._Label6_i(),this._Label7_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 720;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 1280;
		t.elementsContent = [this.backCircle_i(),this.backHand_i()];
		return t;
	};
	_proto.backCircle_i = function () {
		var t = new eui.Image();
		this.backCircle = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_quan3_png";
		t.x = 1128;
		t.y = -6;
		return t;
	};
	_proto.backHand_i = function () {
		var t = new eui.Image();
		this.backHand = t;
		t.scaleX = 1;
		t.scaleY = -1;
		t.source = "yindao_handdowm_png";
		t.x = 1158;
		t.y = 246.65;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_miao_png";
		t.x = 622;
		t.y = 115;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "返回大厅继续获得好感度解锁";
		t.x = 704;
		t.y = 314;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "下一个视频吧，可以继续给女友";
		t.x = 692;
		t.y = 354;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "打电话发微信了哦~";
		t.x = 765;
		t.y = 396;
		return t;
	};
	return BagsPanelSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/bag/useToolPanelSkin.exml'] = window.useToolPanelSkin = (function (_super) {
	__extends(useToolPanelSkin, _super);
	var useToolPanelSkin$Skin96 = 	(function (_super) {
		__extends(useToolPanelSkin$Skin96, _super);
		function useToolPanelSkin$Skin96() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = useToolPanelSkin$Skin96.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bag2_jianhao_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return useToolPanelSkin$Skin96;
	})(eui.Skin);

	var useToolPanelSkin$Skin97 = 	(function (_super) {
		__extends(useToolPanelSkin$Skin97, _super);
		function useToolPanelSkin$Skin97() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = useToolPanelSkin$Skin97.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bag2_jiahao_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return useToolPanelSkin$Skin97;
	})(eui.Skin);

	var useToolPanelSkin$Skin98 = 	(function (_super) {
		__extends(useToolPanelSkin$Skin98, _super);
		function useToolPanelSkin$Skin98() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = useToolPanelSkin$Skin98.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bag2_jianhao1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return useToolPanelSkin$Skin98;
	})(eui.Skin);

	var useToolPanelSkin$Skin99 = 	(function (_super) {
		__extends(useToolPanelSkin$Skin99, _super);
		function useToolPanelSkin$Skin99() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = useToolPanelSkin$Skin99.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bag2_jiahao1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return useToolPanelSkin$Skin99;
	})(eui.Skin);

	var useToolPanelSkin$Skin100 = 	(function (_super) {
		__extends(useToolPanelSkin$Skin100, _super);
		function useToolPanelSkin$Skin100() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = useToolPanelSkin$Skin100.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bag2_lvseanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "bag2_quxiao_png";
			t.y = 21;
			return t;
		};
		return useToolPanelSkin$Skin100;
	})(eui.Skin);

	var useToolPanelSkin$Skin101 = 	(function (_super) {
		__extends(useToolPanelSkin$Skin101, _super);
		function useToolPanelSkin$Skin101() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = useToolPanelSkin$Skin101.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bag2_lvseanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "bag2_quxiao_png";
			t.y = 21;
			return t;
		};
		return useToolPanelSkin$Skin101;
	})(eui.Skin);

	var useToolPanelSkin$Skin102 = 	(function (_super) {
		__extends(useToolPanelSkin$Skin102, _super);
		function useToolPanelSkin$Skin102() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = useToolPanelSkin$Skin102.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "work2_anniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0.5;
			t.source = "bag2_queding_png";
			t.y = 20;
			return t;
		};
		return useToolPanelSkin$Skin102;
	})(eui.Skin);

	function useToolPanelSkin() {
		_super.call(this);
		this.skinParts = ["bgImg","titleLabel","contentLabel","giftImg","jianBtn","jiaBtn","countLabel","nojianBtn","nojiaBtn","countGroup","canelBtn","canelMidBtn","okBtn","myCount","contentGroup"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this.bgImg_i(),this.contentGroup_i()];
	}
	var _proto = useToolPanelSkin.prototype;

	_proto.bgImg_i = function () {
		var t = new eui.Rect();
		this.bgImg = t;
		t.bottom = 0;
		t.fillAlpha = 0.8;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.contentGroup_i = function () {
		var t = new eui.Group();
		this.contentGroup = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.titleLabel_i(),this.contentLabel_i(),this._Group1_i(),this.countGroup_i(),this.canelBtn_i(),this.canelMidBtn_i(),this.okBtn_i(),this._Label1_i(),this.myCount_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bag2_ditu_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.titleLabel_i = function () {
		var t = new eui.Label();
		this.titleLabel = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "fzyc";
		t.size = 40;
		t.text = "呵呵呵呵";
		t.textAlign = "left";
		t.textColor = 0xe23537;
		t.verticalAlign = "middle";
		t.width = 295.09;
		t.x = 292;
		t.y = 25;
		return t;
	};
	_proto.contentLabel_i = function () {
		var t = new eui.Label();
		this.contentLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "fzyc";
		t.height = 91.64;
		t.size = 24;
		t.text = "呵呵呵";
		t.textAlign = "left";
		t.textColor = 0x333333;
		t.verticalAlign = "top";
		t.width = 293;
		t.x = 292;
		t.y = 112;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 184;
		t.width = 233;
		t.x = 26;
		t.y = 22;
		t.elementsContent = [this._Image2_i(),this.giftImg_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 184;
		t.source = "bag2_tupianceng_png";
		t.width = 233;
		return t;
	};
	_proto.giftImg_i = function () {
		var t = new eui.Image();
		this.giftImg = t;
		t.height = 180;
		t.width = 229;
		t.x = 2;
		t.y = 2;
		return t;
	};
	_proto.countGroup_i = function () {
		var t = new eui.Group();
		this.countGroup = t;
		t.x = 14;
		t.y = 240;
		t.elementsContent = [this._Image3_i(),this.jianBtn_i(),this.jiaBtn_i(),this.countLabel_i(),this.nojianBtn_i(),this.nojiaBtn_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "bag2_toumingdi_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.jianBtn_i = function () {
		var t = new eui.Button();
		this.jianBtn = t;
		t.label = "";
		t.x = 159.85;
		t.y = 0;
		t.skinName = useToolPanelSkin$Skin96;
		return t;
	};
	_proto.jiaBtn_i = function () {
		var t = new eui.Button();
		this.jiaBtn = t;
		t.label = "";
		t.x = 363;
		t.y = 0;
		t.skinName = useToolPanelSkin$Skin97;
		return t;
	};
	_proto.countLabel_i = function () {
		var t = new eui.Label();
		this.countLabel = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "fzyc";
		t.size = 38;
		t.text = "999";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.width = 97;
		t.x = 255;
		t.y = 11;
		return t;
	};
	_proto.nojianBtn_i = function () {
		var t = new eui.Button();
		this.nojianBtn = t;
		t.label = "";
		t.x = 159.85;
		t.y = 0;
		t.skinName = useToolPanelSkin$Skin98;
		return t;
	};
	_proto.nojiaBtn_i = function () {
		var t = new eui.Button();
		this.nojiaBtn = t;
		t.label = "";
		t.x = 363;
		t.y = 0;
		t.skinName = useToolPanelSkin$Skin99;
		return t;
	};
	_proto.canelBtn_i = function () {
		var t = new eui.Button();
		this.canelBtn = t;
		t.label = "";
		t.x = 88;
		t.y = 329;
		t.skinName = useToolPanelSkin$Skin100;
		return t;
	};
	_proto.canelMidBtn_i = function () {
		var t = new eui.Button();
		this.canelMidBtn = t;
		t.label = "";
		t.x = 222;
		t.y = 329;
		t.skinName = useToolPanelSkin$Skin101;
		return t;
	};
	_proto.okBtn_i = function () {
		var t = new eui.Button();
		this.okBtn = t;
		t.height = 86;
		t.label = "";
		t.width = 191;
		t.x = 367;
		t.y = 329;
		t.skinName = useToolPanelSkin$Skin102;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.size = 20;
		t.text = "拥有数量：";
		t.textColor = 0xe23537;
		t.x = 292;
		t.y = 78;
		return t;
	};
	_proto.myCount_i = function () {
		var t = new eui.Label();
		this.myCount = t;
		t.fontFamily = "fzyc";
		t.text = "7";
		t.textAlign = "left";
		t.textColor = 0xe23537;
		t.x = 392;
		t.y = 73;
		return t;
	};
	return useToolPanelSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/inputname/InputNamePanelSkin.exml'] = window.InputNamePanelSkin = (function (_super) {
	__extends(InputNamePanelSkin, _super);
	var InputNamePanelSkin$Skin103 = 	(function (_super) {
		__extends(InputNamePanelSkin$Skin103, _super);
		function InputNamePanelSkin$Skin103() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = InputNamePanelSkin$Skin103.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "login2_hongseanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 50;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0.5;
			t.source = "login2_queding_png";
			t.verticalCenter = -5.5;
			return t;
		};
		return InputNamePanelSkin$Skin103;
	})(eui.Skin);

	var InputNamePanelSkin$Skin104 = 	(function (_super) {
		__extends(InputNamePanelSkin$Skin104, _super);
		function InputNamePanelSkin$Skin104() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = InputNamePanelSkin$Skin104.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "login2_shaizi_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return InputNamePanelSkin$Skin104;
	})(eui.Skin);

	function InputNamePanelSkin() {
		_super.call(this);
		this.skinParts = ["bgImg","startBtn","zhanghaoEdit","shaiziBtn"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this.bgImg_i(),this._Group1_i()];
	}
	var _proto = InputNamePanelSkin.prototype;

	_proto.bgImg_i = function () {
		var t = new eui.Image();
		this.bgImg = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "main2_beijingtu_1_jpg";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 720;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1280;
		t.elementsContent = [this._Image1_i(),this.startBtn_i(),this._Image2_i(),this.zhanghaoEdit_i(),this._Image3_i(),this.shaiziBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "login2_ditu_png";
		t.x = 457;
		t.y = 432.75;
		return t;
	};
	_proto.startBtn_i = function () {
		var t = new eui.Button();
		this.startBtn = t;
		t.anchorOffsetX = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 517;
		t.y = 577;
		t.skinName = InputNamePanelSkin$Skin103;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "login2_ditu2_png";
		t.x = 489;
		t.y = 454.29;
		return t;
	};
	_proto.zhanghaoEdit_i = function () {
		var t = new eui.TextInput();
		this.zhanghaoEdit = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 54;
		t.maxChars = 10;
		t.prompt = "您游戏中的名字";
		t.textColor = 0x333333;
		t.width = 226;
		t.x = 552;
		t.y = 456;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "login2_ren_png";
		t.x = 507;
		t.y = 465;
		return t;
	};
	_proto.shaiziBtn_i = function () {
		var t = new eui.Button();
		this.shaiziBtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 771;
		t.y = 449;
		t.skinName = InputNamePanelSkin$Skin104;
		return t;
	};
	return InputNamePanelSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/libao/LibaoCDSkin.exml'] = window.LibaoCDSkin = (function (_super) {
	__extends(LibaoCDSkin, _super);
	var LibaoCDSkin$Skin105 = 	(function (_super) {
		__extends(LibaoCDSkin$Skin105, _super);
		function LibaoCDSkin$Skin105() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LibaoCDSkin$Skin105.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "login2_hongseanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "gift_goumai_png";
			t.y = 27;
			return t;
		};
		return LibaoCDSkin$Skin105;
	})(eui.Skin);

	var LibaoCDSkin$Skin106 = 	(function (_super) {
		__extends(LibaoCDSkin$Skin106, _super);
		function LibaoCDSkin$Skin106() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LibaoCDSkin$Skin106.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gift_X_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LibaoCDSkin$Skin106;
	})(eui.Skin);

	function LibaoCDSkin() {
		_super.call(this);
		this.skinParts = ["buyBtn","closeBtn","contentGroup"];
		
		this.height = 594;
		this.width = 933;
		this.elementsContent = [this.contentGroup_i()];
	}
	var _proto = LibaoCDSkin.prototype;

	_proto.contentGroup_i = function () {
		var t = new eui.Group();
		this.contentGroup = t;
		t.left = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this.buyBtn_i(),this.closeBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "gift_ditu_png";
		t.x = 66;
		t.y = 7;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "libao_cd_png";
		t.x = 69;
		t.y = 94;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "libao_title3_png";
		t.x = 120;
		t.y = 18;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "gift_zuobiandeqiqiu_png";
		t.x = 0;
		t.y = 226;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "gift_youbiandeqiqiu_png";
		t.x = 760;
		t.y = 42;
		return t;
	};
	_proto.buyBtn_i = function () {
		var t = new eui.Button();
		this.buyBtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 341;
		t.y = 486;
		t.skinName = LibaoCDSkin$Skin105;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 753;
		t.y = 0;
		t.skinName = LibaoCDSkin$Skin106;
		return t;
	};
	return LibaoCDSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/libao/LibaoFinishSkin.exml'] = window.LibaoFinishSkin = (function (_super) {
	__extends(LibaoFinishSkin, _super);
	var LibaoFinishSkin$Skin107 = 	(function (_super) {
		__extends(LibaoFinishSkin$Skin107, _super);
		function LibaoFinishSkin$Skin107() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LibaoFinishSkin$Skin107.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "login2_hongseanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "gift_goumai_png";
			t.y = 27;
			return t;
		};
		return LibaoFinishSkin$Skin107;
	})(eui.Skin);

	var LibaoFinishSkin$Skin108 = 	(function (_super) {
		__extends(LibaoFinishSkin$Skin108, _super);
		function LibaoFinishSkin$Skin108() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LibaoFinishSkin$Skin108.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gift_X_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LibaoFinishSkin$Skin108;
	})(eui.Skin);

	function LibaoFinishSkin() {
		_super.call(this);
		this.skinParts = ["buyBtn","closeBtn","contentGroup"];
		
		this.height = 595;
		this.width = 933;
		this.elementsContent = [this.contentGroup_i()];
	}
	var _proto = LibaoFinishSkin.prototype;

	_proto.contentGroup_i = function () {
		var t = new eui.Group();
		this.contentGroup = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this.buyBtn_i(),this.closeBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "gift_ditu_png";
		t.x = 66;
		t.y = 8;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "libao_title1_png";
		t.x = 120;
		t.y = 18;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "gift_zuobiandeqiqiu_png";
		t.x = 0;
		t.y = 227;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "gift_youbiandeqiqiu_png";
		t.x = 760;
		t.y = 43;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "libao_finish_png";
		t.x = 69;
		t.y = 94;
		return t;
	};
	_proto.buyBtn_i = function () {
		var t = new eui.Button();
		this.buyBtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 341;
		t.y = 487;
		t.skinName = LibaoFinishSkin$Skin107;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 753;
		t.y = 0;
		t.skinName = LibaoFinishSkin$Skin108;
		return t;
	};
	return LibaoFinishSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/libao/LibaomiaohuiPanelSkin.exml'] = window.LibaomiaohuiPanelSkin = (function (_super) {
	__extends(LibaomiaohuiPanelSkin, _super);
	var LibaomiaohuiPanelSkin$Skin109 = 	(function (_super) {
		__extends(LibaomiaohuiPanelSkin$Skin109, _super);
		function LibaomiaohuiPanelSkin$Skin109() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LibaomiaohuiPanelSkin$Skin109.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "login2_hongseanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "gift_goumai_png";
			t.y = 27;
			return t;
		};
		return LibaomiaohuiPanelSkin$Skin109;
	})(eui.Skin);

	var LibaomiaohuiPanelSkin$Skin110 = 	(function (_super) {
		__extends(LibaomiaohuiPanelSkin$Skin110, _super);
		function LibaomiaohuiPanelSkin$Skin110() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LibaomiaohuiPanelSkin$Skin110.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gift_X_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LibaomiaohuiPanelSkin$Skin110;
	})(eui.Skin);

	function LibaomiaohuiPanelSkin() {
		_super.call(this);
		this.skinParts = ["buyBtn","closeBtn","contentGroup"];
		
		this.height = 595;
		this.width = 933;
		this.elementsContent = [this.contentGroup_i()];
	}
	var _proto = LibaomiaohuiPanelSkin.prototype;

	_proto.contentGroup_i = function () {
		var t = new eui.Group();
		this.contentGroup = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this.buyBtn_i(),this.closeBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "gift_ditu_png";
		t.x = 66;
		t.y = 8;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "libao_miaohui_png";
		t.x = 69;
		t.y = 94;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "libao_title2_png";
		t.x = 120;
		t.y = 22;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "gift_zuobiandeqiqiu_png";
		t.x = 0;
		t.y = 227;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "gift_youbiandeqiqiu_png";
		t.x = 760;
		t.y = 43;
		return t;
	};
	_proto.buyBtn_i = function () {
		var t = new eui.Button();
		this.buyBtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 341;
		t.y = 487;
		t.skinName = LibaomiaohuiPanelSkin$Skin109;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 753;
		t.y = 0;
		t.skinName = LibaomiaohuiPanelSkin$Skin110;
		return t;
	};
	return LibaomiaohuiPanelSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/libao/LibaoVideoPanelSkin.exml'] = window.LibaoVideoPanelSkin = (function (_super) {
	__extends(LibaoVideoPanelSkin, _super);
	var LibaoVideoPanelSkin$Skin111 = 	(function (_super) {
		__extends(LibaoVideoPanelSkin$Skin111, _super);
		function LibaoVideoPanelSkin$Skin111() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LibaoVideoPanelSkin$Skin111.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "login2_hongseanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "gift_goumai_png";
			t.y = 27;
			return t;
		};
		return LibaoVideoPanelSkin$Skin111;
	})(eui.Skin);

	var LibaoVideoPanelSkin$Skin112 = 	(function (_super) {
		__extends(LibaoVideoPanelSkin$Skin112, _super);
		function LibaoVideoPanelSkin$Skin112() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LibaoVideoPanelSkin$Skin112.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gift_X_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LibaoVideoPanelSkin$Skin112;
	})(eui.Skin);

	function LibaoVideoPanelSkin() {
		_super.call(this);
		this.skinParts = ["buyBtn","closeBtn","contentGroup"];
		
		this.height = 595;
		this.width = 933;
		this.elementsContent = [this.contentGroup_i()];
	}
	var _proto = LibaoVideoPanelSkin.prototype;

	_proto.contentGroup_i = function () {
		var t = new eui.Group();
		this.contentGroup = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this.buyBtn_i(),this.closeBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "gift_ditu_png";
		t.x = 66;
		t.y = 8;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "libao_video_png";
		t.x = 67;
		t.y = 63;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "libao_title4_png";
		t.x = 120;
		t.y = 18;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "gift_zuobiandeqiqiu_png";
		t.x = 0;
		t.y = 227;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "gift_youbiandeqiqiu_png";
		t.x = 760;
		t.y = 43;
		return t;
	};
	_proto.buyBtn_i = function () {
		var t = new eui.Button();
		this.buyBtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 341;
		t.y = 487;
		t.skinName = LibaoVideoPanelSkin$Skin111;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 753;
		t.y = 0;
		t.skinName = LibaoVideoPanelSkin$Skin112;
		return t;
	};
	return LibaoVideoPanelSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/love/FinishLovePanelSkin.exml'] = window.FinishLovePanelSkin = (function (_super) {
	__extends(FinishLovePanelSkin, _super);
	var FinishLovePanelSkin$Skin113 = 	(function (_super) {
		__extends(FinishLovePanelSkin$Skin113, _super);
		function FinishLovePanelSkin$Skin113() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = FinishLovePanelSkin$Skin113.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "login2_hongseanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "xieyi_queding_png";
			t.y = 29;
			return t;
		};
		return FinishLovePanelSkin$Skin113;
	})(eui.Skin);

	function FinishLovePanelSkin() {
		_super.call(this);
		this.skinParts = ["xinLabel","okBtn","contentGroup"];
		
		this.elementsContent = [this.contentGroup_i()];
	}
	var _proto = FinishLovePanelSkin.prototype;

	_proto.contentGroup_i = function () {
		var t = new eui.Group();
		this.contentGroup = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.xinLabel_i(),this.okBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 428.79;
		t.scale9Grid = new egret.Rectangle(105,62,632,376);
		t.source = "set2_ditu_png";
		t.width = 655.63;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "youjian_biaoti_png";
		t.x = 130;
		t.y = 11.79;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "dacheng_dacheng_png";
		t.x = 279;
		t.y = 25.79;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "dacheng_xin_png";
		t.x = 287;
		t.y = 78.04;
		return t;
	};
	_proto.xinLabel_i = function () {
		var t = new eui.Label();
		this.xinLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "fzyc";
		t.height = 104.24;
		t.size = 40;
		t.text = "获得10心动值";
		t.textAlign = "center";
		t.textColor = 0xfa4e5e;
		t.verticalAlign = "middle";
		t.width = 510.36;
		t.x = 73;
		t.y = 175.04;
		return t;
	};
	_proto.okBtn_i = function () {
		var t = new eui.Button();
		this.okBtn = t;
		t.label = "";
		t.x = 207;
		t.y = 297.97;
		t.skinName = FinishLovePanelSkin$Skin113;
		return t;
	};
	return FinishLovePanelSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/love/LoveBoxSkin.exml'] = window.LoveBoxSkin = (function (_super) {
	__extends(LoveBoxSkin, _super);
	var LoveBoxSkin$Skin114 = 	(function (_super) {
		__extends(LoveBoxSkin$Skin114, _super);
		function LoveBoxSkin$Skin114() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoveBoxSkin$Skin114.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "work2_anniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "love2_kaishi_png";
			t.verticalCenter = -3;
			return t;
		};
		return LoveBoxSkin$Skin114;
	})(eui.Skin);

	var LoveBoxSkin$Skin115 = 	(function (_super) {
		__extends(LoveBoxSkin$Skin115, _super);
		function LoveBoxSkin$Skin115() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoveBoxSkin$Skin115.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "main_buy_tip_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "fzyc";
			t.horizontalCenter = 0;
			t.italic = true;
			t.size = 23;
			t.verticalCenter = -8;
			return t;
		};
		return LoveBoxSkin$Skin115;
	})(eui.Skin);

	function LoveBoxSkin() {
		_super.call(this);
		this.skinParts = ["xinLabel","typeImg","timeLabel","cdGroup","typeLabel","tiliLabel","daojuLabel","daojuGroup","kaifangLabel","kaifangGroup","startBtn","cdBtn"];
		
		this.width = 330;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Group1_i(),this.typeImg_i(),this._Image4_i(),this.cdGroup_i(),this.typeLabel_i(),this._Group2_i(),this.daojuGroup_i(),this.kaifangGroup_i(),this.startBtn_i(),this.cdBtn_i()];
	}
	var _proto = LoveBoxSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(9,9,24,23);
		t.source = "work2_ditu_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "work2_tou_png";
		t.y = 11;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.width = 298;
		t.x = 15;
		t.y = 317.5;
		t.elementsContent = [this._Label1_i(),this.xinLabel_i(),this._Image3_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.size = 22;
		t.text = "每次获得：";
		t.textColor = 0x59718b;
		t.x = 38;
		t.y = 7.5;
		return t;
	};
	_proto.xinLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.xinLabel = t;
		t.font = "shuzi3_fnt";
		t.text = "10";
		t.x = 208;
		t.y = 3;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "love2_xindongzhi_png";
		t.x = 158;
		t.y = 0.5;
		return t;
	};
	_proto.typeImg_i = function () {
		var t = new eui.Image();
		this.typeImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 199;
		t.width = 302;
		t.x = 15;
		t.y = 67;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "work2_zhezhao1_png";
		t.width = 302;
		t.x = 14;
		t.y = 187;
		return t;
	};
	_proto.cdGroup_i = function () {
		var t = new eui.Group();
		this.cdGroup = t;
		t.horizontalCenter = 0;
		t.y = 228;
		t.elementsContent = [this._Label2_i(),this.timeLabel_i(),this._Label3_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.size = 24;
		t.text = "冷却时长:";
		t.textColor = 0xffffff;
		t.x = 17;
		t.y = 2;
		return t;
	};
	_proto.timeLabel_i = function () {
		var t = new eui.Label();
		this.timeLabel = t;
		t.fontFamily = "fzyc";
		t.size = 24;
		t.text = "";
		t.textColor = 0xfce063;
		t.x = 136;
		t.y = 1;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.size = 22;
		t.text = "";
		t.textColor = 0x666666;
		t.x = 190;
		t.y = 0;
		return t;
	};
	_proto.typeLabel_i = function () {
		var t = new eui.Label();
		this.typeLabel = t;
		t.fontFamily = "fzyc";
		t.horizontalCenter = 0;
		t.size = 38;
		t.text = "发传单的";
		t.textColor = 0xffffff;
		t.y = 20;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.width = 300;
		t.x = 15;
		t.y = 274.5;
		t.elementsContent = [this._Label4_i(),this.tiliLabel_i(),this._Image5_i()];
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.size = 22;
		t.text = "消耗体力：";
		t.textColor = 0x59718b;
		t.x = 39;
		t.y = 6.5;
		return t;
	};
	_proto.tiliLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.tiliLabel = t;
		t.font = "shuzi3_fnt";
		t.text = "10";
		t.x = 207;
		t.y = 7;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "love2_tili_png";
		t.x = 160;
		t.y = 0;
		return t;
	};
	_proto.daojuGroup_i = function () {
		var t = new eui.Group();
		this.daojuGroup = t;
		t.x = 54;
		t.y = 364.5;
		t.elementsContent = [this._Label5_i(),this.daojuLabel_i()];
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.size = 22;
		t.text = "所需道具：";
		t.textColor = 0x59718b;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.daojuLabel_i = function () {
		var t = new eui.Label();
		this.daojuLabel = t;
		t.fontFamily = "fzyc";
		t.size = 22;
		t.text = "宠物零食";
		t.textColor = 0x59718b;
		t.x = 112;
		t.y = 0;
		return t;
	};
	_proto.kaifangGroup_i = function () {
		var t = new eui.Group();
		this.kaifangGroup = t;
		t.x = -20;
		t.y = 427;
		t.elementsContent = [this._Image6_i(),this.kaifangLabel_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "love2_zhezhao_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.kaifangLabel_i = function () {
		var t = new eui.Label();
		this.kaifangLabel = t;
		t.fontFamily = "fzyc";
		t.size = 25;
		t.text = "游戏内时间第10天开放";
		t.textColor = 0xffffff;
		t.x = 59;
		t.y = 18;
		return t;
	};
	_proto.startBtn_i = function () {
		var t = new eui.Button();
		this.startBtn = t;
		t.horizontalCenter = 0.5;
		t.label = "";
		t.y = 412;
		t.skinName = LoveBoxSkin$Skin114;
		return t;
	};
	_proto.cdBtn_i = function () {
		var t = new eui.Button();
		this.cdBtn = t;
		t.label = "购买永久无冷却";
		t.touchChildren = false;
		t.x = 115;
		t.y = 148;
		t.skinName = LoveBoxSkin$Skin115;
		return t;
	};
	return LoveBoxSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/love/LovePanelSkin.exml'] = window.LovePanelSkin = (function (_super) {
	__extends(LovePanelSkin, _super);
	var LovePanelSkin$Skin116 = 	(function (_super) {
		__extends(LovePanelSkin$Skin116, _super);
		function LovePanelSkin$Skin116() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LovePanelSkin$Skin116.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "login2_yuanxinganniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "login2_fanhui_png";
			t.verticalCenter = 0;
			return t;
		};
		return LovePanelSkin$Skin116;
	})(eui.Skin);

	var LovePanelSkin$Skin117 = 	(function (_super) {
		__extends(LovePanelSkin$Skin117, _super);
		function LovePanelSkin$Skin117() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LovePanelSkin$Skin117.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "work2_anniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "love2_kaishi_png";
			t.verticalCenter = -3;
			return t;
		};
		return LovePanelSkin$Skin117;
	})(eui.Skin);

	function LovePanelSkin() {
		_super.call(this);
		this.skinParts = ["tiliImg","powerLabel","powerGroup","jinbiImg","goldLabel","goldGroup","itemGroup","loveBoxScroller","heartPlugin","backBtn","leftGroup","yd_loveImg","loveHand","startBtn","yindaoGroup","yd_loveImg0","loveHand0","yindaoGroup0","backCircle","backHand","yindaoBack"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Image1_i(),this.powerGroup_i(),this.goldGroup_i(),this.loveBoxScroller_i(),this.heartPlugin_i(),this.leftGroup_i(),this.yindaoGroup_i(),this.yindaoGroup0_i(),this.yindaoBack_i()];
	}
	var _proto = LovePanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "love2_bg_jpg";
		t.top = 0;
		return t;
	};
	_proto.powerGroup_i = function () {
		var t = new eui.Group();
		this.powerGroup = t;
		t.top = 50;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.x = 705.16;
		t.elementsContent = [this.tiliImg_i(),this.powerLabel_i(),this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto.tiliImg_i = function () {
		var t = new eui.Image();
		this.tiliImg = t;
		t.scale9Grid = new egret.Rectangle(10,10,26,21);
		t.source = "main2_ditu_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.powerLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.powerLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "shuzi3_fnt";
		t.height = 32;
		t.text = "0/100";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 68;
		t.y = 10;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "main2_tili2_png";
		t.x = 0;
		t.y = 3.04;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "main2_jiahao3_png";
		t.x = 24;
		t.y = 16;
		return t;
	};
	_proto.goldGroup_i = function () {
		var t = new eui.Group();
		this.goldGroup = t;
		t.top = 50;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.x = 443.64;
		t.elementsContent = [this.jinbiImg_i(),this.goldLabel_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto.jinbiImg_i = function () {
		var t = new eui.Image();
		this.jinbiImg = t;
		t.scale9Grid = new egret.Rectangle(9,10,23,22);
		t.source = "main2_ditu_png";
		t.x = 2.0500000000000114;
		t.y = 1.9699999999999989;
		return t;
	};
	_proto.goldLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.goldLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "shuzi3_fnt";
		t.height = 37;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 72;
		t.y = 9;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "main2_jinbi_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "main2_jiahao2_png";
		t.x = 28.04999999999997;
		t.y = 20.96999999999997;
		return t;
	};
	_proto.loveBoxScroller_i = function () {
		var t = new eui.Scroller();
		this.loveBoxScroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 540;
		t.horizontalCenter = 0;
		t.skinName = "skins.ScrollerSkin";
		t.verticalCenter = 90;
		t.width = 1280;
		t.viewport = this.itemGroup_i();
		return t;
	};
	_proto.itemGroup_i = function () {
		var t = new eui.Group();
		this.itemGroup = t;
		t.touchChildren = true;
		t.touchEnabled = true;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 30;
		t.paddingLeft = 30;
		t.paddingRight = 30;
		return t;
	};
	_proto.heartPlugin_i = function () {
		var t = new HeartsPlugins();
		this.heartPlugin = t;
		t.left = 24;
		t.skinName = "HeartsPluginSkin";
		t.top = 14;
		return t;
	};
	_proto.leftGroup_i = function () {
		var t = new eui.Group();
		this.leftGroup = t;
		t.height = 720;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = false;
		t.width = 1280;
		t.elementsContent = [this.backBtn_i()];
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Button();
		this.backBtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 1157;
		t.y = 20;
		t.skinName = LovePanelSkin$Skin116;
		return t;
	};
	_proto.yindaoGroup_i = function () {
		var t = new eui.Group();
		this.yindaoGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = true;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.visible = false;
		t.elementsContent = [this._Group1_i(),this._Image6_i(),this._Label1_i(),this._Label2_i(),this._Label3_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 720;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 1280;
		t.elementsContent = [this.yd_loveImg_i(),this.loveHand_i(),this.startBtn_i()];
		return t;
	};
	_proto.yd_loveImg_i = function () {
		var t = new eui.Image();
		this.yd_loveImg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_work_png";
		t.x = 1;
		t.y = 150;
		return t;
	};
	_proto.loveHand_i = function () {
		var t = new eui.Image();
		this.loveHand = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_handleft_png";
		t.x = 342;
		t.y = 614;
		return t;
	};
	_proto.startBtn_i = function () {
		var t = new eui.Button();
		this.startBtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 106.00000000000001;
		t.y = 592;
		t.skinName = LovePanelSkin$Skin117;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 59;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_miao_png";
		t.verticalCenter = 34;
		t.x = 410.00000000000006;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.horizontalCenter = 72;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "点击开始按钮，";
		t.verticalCenter = 60;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.horizontalCenter = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "完成和她的第一次恋爱时间吧！";
		t.verticalCenter = 102;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.horizontalCenter = 80.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "喵~";
		t.verticalCenter = 145;
		return t;
	};
	_proto.yindaoGroup0_i = function () {
		var t = new eui.Group();
		this.yindaoGroup0 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = true;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.visible = false;
		t.elementsContent = [this._Group2_i(),this._Image7_i(),this._Label4_i(),this._Label5_i(),this._Label6_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 720;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 1280;
		t.elementsContent = [this.yd_loveImg0_i(),this.loveHand0_i()];
		return t;
	};
	_proto.yd_loveImg0_i = function () {
		var t = new eui.Image();
		this.yd_loveImg0 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_quan3_png";
		t.x = 180;
		t.y = 340;
		return t;
	};
	_proto.loveHand0_i = function () {
		var t = new eui.Image();
		this.loveHand0 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_handdowm_png";
		t.x = 208.28;
		t.y = 245.66;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 14;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_miao_png";
		t.verticalCenter = -5;
		t.x = 410.00000000000006;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.horizontalCenter = 29;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "冷却时间结束后";
		t.verticalCenter = 27;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.horizontalCenter = 45.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "可以继续进行恋爱活动哦~";
		t.verticalCenter = 72;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.horizontalCenter = 35.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "喵~";
		t.verticalCenter = 112;
		return t;
	};
	_proto.yindaoBack_i = function () {
		var t = new eui.Group();
		this.yindaoBack = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Group4_i()];
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 720;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.width = 1280;
		t.elementsContent = [this._Group3_i(),this._Image8_i(),this._Label7_i()];
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 720;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 1280;
		t.elementsContent = [this.backCircle_i(),this.backHand_i()];
		return t;
	};
	_proto.backCircle_i = function () {
		var t = new eui.Image();
		this.backCircle = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_quan3_png";
		t.x = 1128;
		t.y = -6;
		return t;
	};
	_proto.backHand_i = function () {
		var t = new eui.Image();
		this.backHand = t;
		t.scaleX = 1;
		t.scaleY = -1;
		t.source = "yindao_handdowm_png";
		t.x = 1158;
		t.y = 246.65;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_miao_png";
		t.x = 622;
		t.y = 115;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "点击返回大厅看看吧";
		t.x = 752;
		t.y = 338;
		return t;
	};
	return LovePanelSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/love/LoveProPanelSkin.exml'] = window.LoveProPanelSkin = (function (_super) {
	__extends(LoveProPanelSkin, _super);
	var LoveProPanelSkin$Skin118 = 	(function (_super) {
		__extends(LoveProPanelSkin$Skin118, _super);
		function LoveProPanelSkin$Skin118() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoveProPanelSkin$Skin118.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "login2_hongseanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "workpro_lijiwancheng_png";
			t.y = 27;
			return t;
		};
		return LoveProPanelSkin$Skin118;
	})(eui.Skin);

	var LoveProPanelSkin$Skin119 = 	(function (_super) {
		__extends(LoveProPanelSkin$Skin119, _super);
		function LoveProPanelSkin$Skin119() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoveProPanelSkin$Skin119.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "main_buy_tip_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "fzyc";
			t.horizontalCenter = 0;
			t.italic = true;
			t.size = 23;
			t.verticalCenter = -8;
			return t;
		};
		return LoveProPanelSkin$Skin119;
	})(eui.Skin);

	var LoveProPanelSkin$Skin120 = 	(function (_super) {
		__extends(LoveProPanelSkin$Skin120, _super);
		function LoveProPanelSkin$Skin120() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoveProPanelSkin$Skin120.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "login2_yuanxinganniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "login2_fanhui_png";
			t.verticalCenter = 0;
			return t;
		};
		return LoveProPanelSkin$Skin120;
	})(eui.Skin);

	function LoveProPanelSkin() {
		_super.call(this);
		this.skinParts = ["TypeImg","probg","proImg","ProLabel","typeLabel","finishBtn","tipLabel","cdBtn","backBtn","leftGroup"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this.TypeImg_i(),this._Rect1_i(),this._Group2_i(),this.leftGroup_i()];
	}
	var _proto = LoveProPanelSkin.prototype;

	_proto.TypeImg_i = function () {
		var t = new eui.Image();
		this.TypeImg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "";
		t.top = 0;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.2;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Group1_i(),this.typeLabel_i(),this.finishBtn_i(),this._Label1_i(),this.tipLabel_i(),this.cdBtn_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = -0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 252.00000000000003;
		t.y = 373.34;
		t.elementsContent = [this.probg_i(),this.proImg_i(),this.ProLabel_i()];
		return t;
	};
	_proto.probg_i = function () {
		var t = new eui.Image();
		this.probg = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 2;
		t.scale9Grid = new egret.Rectangle(25,0,720,34);
		t.source = "workpro_jindutiao1_png";
		t.y = 50;
		return t;
	};
	_proto.proImg_i = function () {
		var t = new eui.Image();
		this.proImg = t;
		t.scale9Grid = new egret.Rectangle(18,0,319,34);
		t.source = "workpro_jindutiao2_png";
		t.x = 4;
		t.y = 50;
		return t;
	};
	_proto.ProLabel_i = function () {
		var t = new eui.Label();
		this.ProLabel = t;
		t.fontFamily = "fzyc";
		t.horizontalCenter = 0.5;
		t.text = "0%";
		t.textColor = 0xffffff;
		t.y = 52.33;
		return t;
	};
	_proto.typeLabel_i = function () {
		var t = new eui.Label();
		this.typeLabel = t;
		t.fontFamily = "fzyc";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 70;
		t.text = "做饭";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.y = 82.1;
		return t;
	};
	_proto.finishBtn_i = function () {
		var t = new eui.Button();
		this.finishBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 536.36;
		t.skinName = LoveProPanelSkin$Skin118;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 32;
		t.text = "恋爱秘籍";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.y = 201.22;
		return t;
	};
	_proto.tipLabel_i = function () {
		var t = new eui.Label();
		this.tipLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "fzyc";
		t.height = 100;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "和女生聊天时，如果你一直长篇大论，自言自语，她一定会回你好吧，哦，呵呵，所以一定要留下让女生接话的谈资，给她留出回复空间";
		t.textAlign = "left";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.width = 600;
		t.y = 253.63;
		return t;
	};
	_proto.cdBtn_i = function () {
		var t = new eui.Button();
		this.cdBtn = t;
		t.horizontalCenter = 0;
		t.label = "购买永久一键完成";
		t.touchChildren = false;
		t.y = 474;
		t.skinName = LoveProPanelSkin$Skin119;
		return t;
	};
	_proto.leftGroup_i = function () {
		var t = new eui.Group();
		this.leftGroup = t;
		t.height = 720;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = false;
		t.width = 1280;
		t.elementsContent = [this.backBtn_i()];
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Button();
		this.backBtn = t;
		t.label = "";
		t.right = 25;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 1157;
		t.y = 20;
		t.skinName = LoveProPanelSkin$Skin120;
		return t;
	};
	return LoveProPanelSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/MysteriousShopItemSkin.exml'] = window.MysteriousShopItemSkin = (function (_super) {
	__extends(MysteriousShopItemSkin, _super);
	function MysteriousShopItemSkin() {
		_super.call(this);
		this.skinParts = ["iconImg","iconType","numStr","titleStr","contextText","isSouOver"];
		
		this.height = 189;
		this.width = 213;
		this.elementsContent = [this._Image1_i(),this.iconImg_i(),this._Image2_i(),this._Image3_i(),this.iconType_i(),this.numStr_i(),this.titleStr_i(),this.contextText_i(),this.isSouOver_i()];
	}
	var _proto = MysteriousShopItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 55;
		t.scale9Grid = new egret.Rectangle(45,11,276,43);
		t.source = "shop2_anniu_png";
		t.width = 213;
		t.y = 133;
		return t;
	};
	_proto.iconImg_i = function () {
		var t = new eui.Image();
		this.iconImg = t;
		t.height = 135;
		t.source = "game_sms_item_panel_png";
		t.width = 213;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game_bg_icon_png";
		t.visible = false;
		t.y = 11;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game_sms_pop_start_png";
		t.y = 5;
		return t;
	};
	_proto.iconType_i = function () {
		var t = new eui.Image();
		this.iconType = t;
		t.height = 52;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "shop2_jinbi2_png";
		t.width = 52;
		t.x = 22;
		t.y = 138.5;
		return t;
	};
	_proto.numStr_i = function () {
		var t = new eui.BitmapLabel();
		this.numStr = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "shuzi3_fnt";
		t.height = 44;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "12345";
		t.width = 169;
		t.x = 70;
		t.y = 146;
		return t;
	};
	_proto.titleStr_i = function () {
		var t = new eui.Label();
		this.titleStr = t;
		t.fontFamily = "fzyc";
		t.size = 27;
		t.text = "抱抱熊";
		t.textAlign = "right";
		t.width = 170;
		t.x = 33;
		t.y = 73;
		return t;
	};
	_proto.contextText_i = function () {
		var t = new eui.Label();
		this.contextText = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "fzyc";
		t.size = 19;
		t.text = "送礼了送礼送礼了礼了";
		t.textAlign = "right";
		t.textColor = 0xb3b3b3;
		t.width = 207;
		t.x = -5;
		t.y = 107;
		return t;
	};
	_proto.isSouOver_i = function () {
		var t = new eui.Group();
		this.isSouOver = t;
		t.height = 189;
		t.width = 213;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._Label1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.ellipseWidth = 52;
		t.fillAlpha = 0.6;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "fzyc";
		t.horizontalCenter = 0;
		t.size = 37;
		t.text = "已售罄";
		t.textAlign = "center";
		t.textColor = 0xB3B3B3;
		t.verticalCenter = 0;
		t.width = 189;
		return t;
	};
	return MysteriousShopItemSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/MysteriousShopSkin.exml'] = window.MysteriousShopSkin = (function (_super) {
	__extends(MysteriousShopSkin, _super);
	var MysteriousShopSkin$Skin121 = 	(function (_super) {
		__extends(MysteriousShopSkin$Skin121, _super);
		function MysteriousShopSkin$Skin121() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MysteriousShopSkin$Skin121.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "login2_hongseanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "fzyc";
			t.horizontalCenter = 0;
			t.size = 45;
			t.verticalCenter = -5;
			return t;
		};
		return MysteriousShopSkin$Skin121;
	})(eui.Skin);

	function MysteriousShopSkin() {
		_super.call(this);
		this.skinParts = ["bg","refresh_time","titleBg","title","closeBtn","showListGrp","scroller","refresh_text","iconImg","gotoShop"];
		
		this.elementsContent = [this.bg_i(),this._Image1_i(),this.refresh_time_i(),this.titleBg_i(),this.title_i(),this.closeBtn_i(),this._Image2_i(),this._Image3_i(),this.scroller_i(),this.refresh_text_i(),this.iconImg_i(),this.gotoShop_i()];
	}
	var _proto = MysteriousShopSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 660;
		t.scale9Grid = new egret.Rectangle(69,49,87,64);
		t.source = "set2_ditu_png";
		t.width = 988;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 38;
		t.scale9Grid = new egret.Rectangle(79,33,478,203);
		t.source = "youjian_bantoumingdi_png";
		t.width = 923;
		t.x = 51;
		t.y = 77;
		return t;
	};
	_proto.refresh_time_i = function () {
		var t = new eui.Label();
		this.refresh_time = t;
		t.fontFamily = "fzyc";
		t.size = 28;
		t.text = "每日 00:00 自动刷新";
		t.textColor = 0x017722;
		t.x = 362;
		t.y = 83;
		return t;
	};
	_proto.titleBg_i = function () {
		var t = new eui.Image();
		this.titleBg = t;
		t.source = "youjian_biaoti_png";
		t.x = 287;
		t.y = 10.69;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Label();
		this.title = t;
		t.fontFamily = "fzyc";
		t.size = 50;
		t.text = "神秘商店";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 385;
		t.y = 15.88;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.source = "gift_X_png";
		t.x = 888;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "game_sms_pop_02_png";
		t.x = -73;
		t.y = 14;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "game_sms_womon_png";
		t.x = -16;
		t.y = 34;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 426;
		t.skinName = "skins.ScrollerSkin";
		t.width = 695;
		t.x = 252;
		t.y = 120;
		t.viewport = this.showListGrp_i();
		return t;
	};
	_proto.showListGrp_i = function () {
		var t = new eui.Group();
		this.showListGrp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.y = -15;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.columnWidth = 222;
		t.requestedColumnCount = 3;
		t.requestedRowCount = 2;
		t.rowHeight = 203;
		return t;
	};
	_proto.refresh_text_i = function () {
		var t = new eui.BitmapLabel();
		this.refresh_text = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "shuzi3_fnt";
		t.height = 44;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "1234";
		t.width = 120;
		t.x = 763.5;
		t.y = 582;
		return t;
	};
	_proto.iconImg_i = function () {
		var t = new eui.Image();
		this.iconImg = t;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "shop2_zhuanshi_png";
		t.x = 684;
		t.y = 570.25;
		return t;
	};
	_proto.gotoShop_i = function () {
		var t = new eui.Button();
		this.gotoShop = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 108;
		t.label = "立即刷新";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 243;
		t.x = 427;
		t.y = 539;
		t.skinName = MysteriousShopSkin$Skin121;
		return t;
	};
	return MysteriousShopSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/notice/NoticeDialogPanelSkin.exml'] = window.NoticeDialogPanelSkin = (function (_super) {
	__extends(NoticeDialogPanelSkin, _super);
	var NoticeDialogPanelSkin$Skin122 = 	(function (_super) {
		__extends(NoticeDialogPanelSkin$Skin122, _super);
		function NoticeDialogPanelSkin$Skin122() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","main_notice_06_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NoticeDialogPanelSkin$Skin122.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "main_notice_06_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.fontFamily = "fzyc";
			t.horizontalCenter = 0;
			t.textColor = 0x9c8281;
			t.verticalCenter = 0;
			return t;
		};
		return NoticeDialogPanelSkin$Skin122;
	})(eui.Skin);

	var NoticeDialogPanelSkin$Skin123 = 	(function (_super) {
		__extends(NoticeDialogPanelSkin$Skin123, _super);
		function NoticeDialogPanelSkin$Skin123() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","main_notice_06_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NoticeDialogPanelSkin$Skin123.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "main_notice_06_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.fontFamily = "fzyc";
			t.horizontalCenter = 0;
			t.textColor = 0x9c8281;
			t.verticalCenter = 0;
			return t;
		};
		return NoticeDialogPanelSkin$Skin123;
	})(eui.Skin);

	var NoticeDialogPanelSkin$Skin124 = 	(function (_super) {
		__extends(NoticeDialogPanelSkin$Skin124, _super);
		function NoticeDialogPanelSkin$Skin124() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","main_notice_02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NoticeDialogPanelSkin$Skin124.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "main_notice_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.fontFamily = "fzyc";
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NoticeDialogPanelSkin$Skin124;
	})(eui.Skin);

	var NoticeDialogPanelSkin$Skin125 = 	(function (_super) {
		__extends(NoticeDialogPanelSkin$Skin125, _super);
		function NoticeDialogPanelSkin$Skin125() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","main_notice_02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NoticeDialogPanelSkin$Skin125.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "main_notice_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.fontFamily = "fzyc";
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NoticeDialogPanelSkin$Skin125;
	})(eui.Skin);

	var NoticeDialogPanelSkin$Skin126 = 	(function (_super) {
		__extends(NoticeDialogPanelSkin$Skin126, _super);
		function NoticeDialogPanelSkin$Skin126() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","main_notice_02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NoticeDialogPanelSkin$Skin126.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "main_notice_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.fontFamily = "fzyc";
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NoticeDialogPanelSkin$Skin126;
	})(eui.Skin);

	function NoticeDialogPanelSkin() {
		_super.call(this);
		this.skinParts = ["bg","titleBg","title","menuBg","gameContent","systemLabel","QQgift","weixigift","wxLabel","qqLabel0","qqLabel1","viewStack","closeBtn","radioBtn0","radioBtn1","radioBtn2","radioGrp"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Rect1_i(),this._Group7_i()];
	}
	var _proto = NoticeDialogPanelSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.8;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 720;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1280;
		t.elementsContent = [this.bg_i(),this.titleBg_i(),this.title_i(),this.menuBg_i(),this._Group6_i(),this.closeBtn_i(),this._Image5_i(),this._Image6_i(),this.radioGrp_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 660;
		t.scale9Grid = new egret.Rectangle(69,49,32,64);
		t.source = "main_notice_di01_png";
		t.width = 970;
		t.x = 155;
		t.y = 30;
		return t;
	};
	_proto.titleBg_i = function () {
		var t = new eui.Image();
		this.titleBg = t;
		t.source = "act_title_png";
		t.x = 345;
		t.y = 40.69;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Label();
		this.title = t;
		t.fontFamily = "fzyc";
		t.horizontalCenter = 0;
		t.size = 50;
		t.text = "公告";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 45.88;
		return t;
	};
	_proto.menuBg_i = function () {
		var t = new eui.Image();
		this.menuBg = t;
		t.height = 545;
		t.source = "act_btn_bg_png";
		t.visible = false;
		t.x = 181.82;
		t.y = 113.65;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 519;
		t.width = 648;
		t.x = 451;
		t.y = 127;
		t.elementsContent = [this.viewStack_i()];
		return t;
	};
	_proto.viewStack_i = function () {
		var t = new eui.ViewStack();
		this.viewStack = t;
		t.anchorOffsetY = 0;
		t.height = 520;
		t.selectedIndex = 2;
		t.width = 648;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Group2_i(),this._Group4_i(),this._Group5_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 520;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 648;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Label1_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(45,83,66,52);
		t.source = "main_notice_di02_png";
		t.top = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "fzyc";
		t.horizontalCenter = 0;
		t.text = "游戏活动";
		t.textColor = 0x9c8281;
		t.y = 18;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scrollPolicyH = "off";
		t.skinName = "skins.ScrollerSkin";
		t.top = 73;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.elementsContent = [this.gameContent_i()];
		return t;
	};
	_proto.gameContent_i = function () {
		var t = new eui.Label();
		this.gameContent = t;
		t.fontFamily = "fzyc";
		t.left = 19;
		t.right = 17;
		t.text = "兑换元宝通知游戏方规则游戏方返回结果：成功返回1，重复通知返回2，失败返回0（包括签名校验错误）兑换元宝通知游戏方规则游戏方返回结果：成功返回1，重复通知返回2，失败返回0（包括签名校验错误）兑换元宝通知游戏方规则游戏方返回结果：成功返回1，重复通知返回2，失败返回0（包括签名校验错误）兑换元宝通知游戏方规则游戏方返回结果：成功返回1，重复通知返回2，失败返回0（包括签名校验错误）兑换元宝通知游戏方规则游戏方返回结果：成功返回1，重复通知返回2，失败返回0（包括签名校验错误）兑换元宝通知游戏方规则游戏方返回结果：成功返回1，重复通知返回2，失败返回0（包括签名校验错误）兑换元宝通知游戏方规则游戏方返回结果：成功返回1，重复通知返回2，失败返回0（包括签名校验错误）兑换元宝通知游戏方规则游戏方返回结果：成功返回1，重复通知返回2，失败返回0（包括签名校验错误）兑换元宝通知游戏方规则游戏方返回结果：成功返回1，重复通知返回2，失败返回0（包括签名校验错误）兑换元宝通知游戏方规则游戏方返回结果：成功返回1，重复通知返回2，失败返回0（包括签名校验错误）兑换元宝通知游戏方规则游戏方返回结果：成功返回1，重复通知返回2，失败返回0（包括签名校验错误）兑换元宝通知游戏方规则游戏方返回结果：成功返回1，重复通知返回2，失败返回0（包括签名校验错误）兑换元宝通知游戏方规则游戏方返回结果：成功返回1，重复通知返回2，失败返回0（包括签名校验错误）兑换元宝通知游戏方规则游戏方返回结果：成功返回1，重复通知返回2，失败返回0（包括签名校验错误）兑换元宝通知游戏方规则游戏方返回结果：成功返回1，重复通知返回2，失败返回0（包括签名校验错误）兑换元宝通知游戏方规则游戏方返回结果：成功返回1，重复通知返回2，失败返回0（包括签名校验错误）兑换元宝通知游戏方规则游戏方返回结果：成功返回1，重复通知返回2，失败返回0（包括签名校验错误）兑换元宝通知游戏方规则游戏方返回结果：成功返回1，重复通知返回2，失败返回0（包括签名校验错误）兑换元宝通知游戏方规则游戏方返回结果：成功返回1，重复通知返回2，失败返回0（包括签名校验错误）兑换元宝通知游戏方规则游戏方返回结果：成功返回1，重复通知返回2，失败返回0（包括签名校验错误）";
		t.textColor = 0x9c8281;
		t.width = 614;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image2_i(),this._Label2_i(),this._Scroller2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(44,63,82,72);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "main_notice_di02_png";
		t.top = 0;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "fzyc";
		t.horizontalCenter = 0;
		t.text = "系统公告";
		t.textColor = 0x9c8281;
		t.y = 20;
		return t;
	};
	_proto._Scroller2_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scrollPolicyH = "off";
		t.skinName = "skins.ScrollerSkin";
		t.top = 73;
		t.viewport = this._Group3_i();
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.systemLabel_i()];
		return t;
	};
	_proto.systemLabel_i = function () {
		var t = new eui.Label();
		this.systemLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "fzyc";
		t.text = "兑换元宝通知游戏方规则游戏方返回结果：成功返回1，重复通知返回2，失败返回0（包括签名校验错误）兑换元宝通知游戏方规则游戏方返回结果：成功返回1，重复通知返回2，失败返回0（包括签名校验错误）兑换元宝通知游戏方规则游戏方返回结果：成功返回1，重复通知返回2，失败返回0（包括签名校验错误）兑换元宝通知游戏方规则游戏方返回结果：成功返回1，重复通知返回2，失败返回0（包括签名校验错误）兑换元宝通知游戏方规则游戏方返回结果：成功返回1，重复通知返回2，失败返回0（包括签名校验错误）兑换元宝通知游戏方规则游戏方返回结果：成功返回1，重复通知返回2，失败返回0（包括签名校验错误）兑换元宝通知游戏方规则游戏方返回结果：成功返回1，重复通知返回2，失败返回0（包括签名校验错误）兑换元宝通知游戏方规则游戏方返回结果：成功返回1，重复通知返回2，失败返回0（包括签名校验错误）兑换元宝通知游戏方规则游戏方返回结果：成功返回1，重复通知返回2，失败返回0（包括签名校验错误）兑换元宝通知游戏方规则游戏方返回结果：成功返回1，重复通知返回2，失败返回0（包括签名校验错误）兑换元宝通知游戏方规则游戏方返回结果：成功返回1，重复通知返回2，失败返回0（包括签名校验错误）兑换元宝通知游戏方规则游戏方返回结果：成功返回1，重复通知返回2，失败返回0（包括签名校验错误）兑换元宝通知游戏方规则游戏方返回结果：成功返回1，重复通知返回2，失败返回0（包括签名校验错误）兑换元宝通知游戏方规则游戏方返回结果：成功返回1，重复通知返回2，失败返回0（包括签名校验错误）兑换元宝通知游戏方规则游戏方返回结果：成功返回1，重复通知返回2，失败返回0（包括签名校验错误）兑换元宝通知游戏方规则游戏方返回结果：成功返回1，重复通知返回2，失败返回0（包括签名校验错误）兑换元宝通知游戏方规则游戏方返回结果：成功返回1，重复通知返回2，失败返回0（包括签名校验错误）兑换元宝通知游戏方规则游戏方返回结果：成功返回1，重复通知返回2，失败返回0（包括签名校验错误）兑换元宝通知游戏方规则游戏方返回结果：成功返回1，重复通知返回2，失败返回0（包括签名校验错误）兑换元宝通知游戏方规则游戏方返回结果：成功返回1，重复通知返回2，失败返回0（包括签名校验错误）";
		t.textColor = 0x9c8281;
		t.width = 620.97;
		t.x = 19;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 521;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 648;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Label3_i(),this._Image4_i(),this.QQgift_i(),this.weixigift_i(),this._Label4_i(),this.wxLabel_i(),this.qqLabel0_i(),this.qqLabel1_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(54,93,56,42);
		t.source = "main_notice_di02_png";
		t.top = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "fzyc";
		t.horizontalCenter = 0.5;
		t.text = "联系我们";
		t.textColor = 0x9c8281;
		t.y = 19.99;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "main_notice_04_png";
		t.verticalCenter = 44.5;
		return t;
	};
	_proto.QQgift_i = function () {
		var t = new eui.Button();
		this.QQgift = t;
		t.label = "加群领礼包";
		t.x = 209;
		t.y = 423.66;
		t.skinName = NoticeDialogPanelSkin$Skin122;
		return t;
	};
	_proto.weixigift_i = function () {
		var t = new eui.Button();
		this.weixigift = t;
		t.label = "公众号领礼包";
		t.visible = false;
		t.x = 368;
		t.y = 385;
		t.skinName = NoticeDialogPanelSkin$Skin123;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.text = "官方网址：http://girl.dmgame.com";
		t.textColor = 0x9c8281;
		t.x = 18;
		t.y = 73;
		return t;
	};
	_proto.wxLabel_i = function () {
		var t = new eui.Label();
		this.wxLabel = t;
		t.text = "微信公众号：xdnssy（关注公众号领福利）";
		t.textColor = 0x9c8281;
		t.x = 18;
		t.y = 113.67;
		return t;
	};
	_proto.qqLabel0_i = function () {
		var t = new eui.Label();
		this.qqLabel0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 36.06;
		t.text = "QQ群一：545937961（已满）";
		t.textColor = 0x9c8281;
		t.visible = false;
		t.width = 561.88;
		t.x = 18;
		t.y = 161;
		return t;
	};
	_proto.qqLabel1_i = function () {
		var t = new eui.Label();
		this.qqLabel1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 36.06;
		t.text = "QQ群二：547467858";
		t.textColor = 0x9c8281;
		t.visible = false;
		t.width = 561.88;
		t.x = 18;
		t.y = 204.33;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.source = "gift_X_png";
		t.x = 1018.98;
		t.y = 29.32;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "main_notice_05_png";
		t.x = 115;
		t.y = 568;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "main_notice_03_png";
		t.x = 1085;
		t.y = 545;
		return t;
	};
	_proto.radioGrp_i = function () {
		var t = new eui.Group();
		this.radioGrp = t;
		t.x = 191;
		t.y = 144;
		t.elementsContent = [this.radioBtn0_i(),this.radioBtn1_i(),this.radioBtn2_i()];
		return t;
	};
	_proto.radioBtn0_i = function () {
		var t = new eui.RadioButton();
		this.radioBtn0 = t;
		t.groupName = "radioGrp";
		t.label = "游戏活动";
		t.scaleX = 1;
		t.scaleY = 1;
		t.selected = true;
		t.value = "0";
		t.x = 0;
		t.y = 0;
		t.skinName = NoticeDialogPanelSkin$Skin124;
		return t;
	};
	_proto.radioBtn1_i = function () {
		var t = new eui.RadioButton();
		this.radioBtn1 = t;
		t.groupName = "radioGrp";
		t.label = "系统公告";
		t.scaleX = 1;
		t.scaleY = 1;
		t.value = "1";
		t.x = 0;
		t.y = 92;
		t.skinName = NoticeDialogPanelSkin$Skin125;
		return t;
	};
	_proto.radioBtn2_i = function () {
		var t = new eui.RadioButton();
		this.radioBtn2 = t;
		t.groupName = "radioGrp";
		t.label = "联系我们";
		t.scaleX = 1;
		t.scaleY = 1;
		t.selected = true;
		t.value = "2";
		t.x = 0;
		t.y = 184;
		t.skinName = NoticeDialogPanelSkin$Skin126;
		return t;
	};
	return NoticeDialogPanelSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/weixin/LeftMessageSkin.exml'] = window.LeftMessageSkin = (function (_super) {
	__extends(LeftMessageSkin, _super);
	function LeftMessageSkin() {
		_super.call(this);
		this.skinParts = ["zhuname","labelBG","text","zhuImg","talkImg"];
		
		this.width = 905;
		this.elementsContent = [this.zhuname_i(),this._Group3_i(),this.zhuImg_i(),this.talkImg_i()];
	}
	var _proto = LeftMessageSkin.prototype;

	_proto.zhuname_i = function () {
		var t = new eui.Label();
		this.zhuname = t;
		t.fontFamily = "fzyc";
		t.size = 26;
		t.text = "李婉瑜";
		t.textColor = 0xfffcfc;
		t.x = 132;
		t.y = 20;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.width = 787;
		t.x = 115;
		t.y = 56;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 48;
		t.y = 0;
		t.elementsContent = [this.labelBG_i(),this.text_i()];
		return t;
	};
	_proto.labelBG_i = function () {
		var t = new eui.Image();
		this.labelBG = t;
		t.anchorOffsetX = 0;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(37,39,133,1);
		t.source = "weixin2_liaotianqipaoduifang_png";
		t.width = 375;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.text_i = function () {
		var t = new eui.Label();
		this.text = t;
		t.anchorOffsetX = 0;
		t.bottom = 25;
		t.fontFamily = "fzyc";
		t.size = 26;
		t.text = "Labe222222222222";
		t.textColor = 0x707070;
		t.top = 20;
		t.verticalAlign = "middle";
		t.x = 32;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 20;
		t.width = 2;
		t.x = 430;
		t.y = 52;
		return t;
	};
	_proto.zhuImg_i = function () {
		var t = new eui.Image();
		this.zhuImg = t;
		t.height = 94;
		t.source = "";
		t.width = 94;
		t.x = 14;
		t.y = 12;
		return t;
	};
	_proto.talkImg_i = function () {
		var t = new eui.Image();
		this.talkImg = t;
		t.anchorOffsetX = 18;
		t.anchorOffsetY = 16.5;
		t.source = "hs_yuyin_1_png";
		t.visible = false;
		t.x = 253;
		t.y = 32;
		return t;
	};
	return LeftMessageSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/weixin/RightMessageSkin.exml'] = window.RightMessageSkin = (function (_super) {
	__extends(RightMessageSkin, _super);
	function RightMessageSkin() {
		_super.call(this);
		this.skinParts = ["myLabel","labelBG","text","heartlabel","jiaImg","jiaGroup","jianheartlabel","jianImg","jianGroup"];
		
		this.width = 905;
		this.elementsContent = [this._Group4_i()];
	}
	var _proto = RightMessageSkin.prototype;

	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.left = 0;
		t.y = 0;
		t.elementsContent = [this.myLabel_i(),this._Group3_i()];
		return t;
	};
	_proto.myLabel_i = function () {
		var t = new eui.Label();
		this.myLabel = t;
		t.fontFamily = "fzyc";
		t.right = 52;
		t.size = 26;
		t.text = "我";
		t.textAlign = "right";
		t.textColor = 0xf9f7f7;
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 32;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.width = 905;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.labelBG_i(),this.text_i()];
		return t;
	};
	_proto.labelBG_i = function () {
		var t = new eui.Image();
		this.labelBG = t;
		t.anchorOffsetX = 0;
		t.percentHeight = 100;
		t.right = 22;
		t.scale9Grid = new egret.Rectangle(27,40,327,3);
		t.source = "weixin2_liaotianqipaoziji_png";
		t.width = 375;
		t.y = 0;
		return t;
	};
	_proto.text_i = function () {
		var t = new eui.Label();
		this.text = t;
		t.anchorOffsetX = 0;
		t.bottom = 25;
		t.fontFamily = "fzyc";
		t.right = 50;
		t.size = 26;
		t.text = "Label2222222";
		t.textColor = 0x176621;
		t.top = 20;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.width = 905;
		t.x = 0;
		t.y = 78;
		t.elementsContent = [this.jiaGroup_i(),this.jianGroup_i()];
		return t;
	};
	_proto.jiaGroup_i = function () {
		var t = new eui.Group();
		this.jiaGroup = t;
		t.x = 712;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.heartlabel_i(),this._Image2_i(),this.jiaImg_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.source = "weixin2_di_png";
		t.width = 174;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.heartlabel_i = function () {
		var t = new eui.BitmapLabel();
		this.heartlabel = t;
		t.font = "shuzi1_fnt";
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "10";
		t.x = 110;
		t.y = 3;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 48;
		t.source = "love2_xindongzhi_png";
		t.width = 53;
		t.x = 7;
		t.y = 1;
		return t;
	};
	_proto.jiaImg_i = function () {
		var t = new eui.Image();
		this.jiaImg = t;
		t.source = "main2_jiahao2_png";
		t.x = 65;
		t.y = 0;
		return t;
	};
	_proto.jianGroup_i = function () {
		var t = new eui.Group();
		this.jianGroup = t;
		t.x = 712;
		t.elementsContent = [this._Image3_i(),this.jianheartlabel_i(),this._Image4_i(),this.jianImg_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.source = "weixin2_di_png";
		t.width = 174;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.jianheartlabel_i = function () {
		var t = new eui.BitmapLabel();
		this.jianheartlabel = t;
		t.font = "xinjian_fnt";
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "10";
		t.x = 110;
		t.y = 3;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "weixin2_xinsui_png";
		t.x = 6;
		t.y = 1;
		return t;
	};
	_proto.jianImg_i = function () {
		var t = new eui.Image();
		this.jianImg = t;
		t.source = "weixin2_-_png";
		t.x = 71;
		t.y = 14;
		return t;
	};
	return RightMessageSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/phone/CallHistoryListItemSkin.exml'] = window.CallHistoryListItemSkin = (function (_super) {
	__extends(CallHistoryListItemSkin, _super);
	function CallHistoryListItemSkin() {
		_super.call(this);
		this.skinParts = ["leftMessage","rightMessage"];
		
		this.width = 905;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = CallHistoryListItemSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.width = 905;
		t.elementsContent = [this.leftMessage_i(),this.rightMessage_i()];
		return t;
	};
	_proto.leftMessage_i = function () {
		var t = new LeftMessage();
		this.leftMessage = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "LeftMessageSkin";
		return t;
	};
	_proto.rightMessage_i = function () {
		var t = new RightMessage();
		this.rightMessage = t;
		t.skinName = "RightMessageSkin";
		return t;
	};
	return CallHistoryListItemSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/phone/CallHistoryPanelSkin.exml'] = window.CallHistoryPanelSkin = (function (_super) {
	__extends(CallHistoryPanelSkin, _super);
	var CallHistoryPanelSkin$Skin127 = 	(function (_super) {
		__extends(CallHistoryPanelSkin$Skin127, _super);
		function CallHistoryPanelSkin$Skin127() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CallHistoryPanelSkin$Skin127.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "login2_yuanxinganniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "login2_fanhui_png";
			t.verticalCenter = 0;
			return t;
		};
		return CallHistoryPanelSkin$Skin127;
	})(eui.Skin);

	function CallHistoryPanelSkin() {
		_super.call(this);
		this.skinParts = ["btnBG","maskImg","grilImg","dataList","dataScroller","backBtn","leftGroup"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this.btnBG_i(),this._Group1_i(),this.dataScroller_i(),this.leftGroup_i()];
	}
	var _proto = CallHistoryPanelSkin.prototype;

	_proto.btnBG_i = function () {
		var t = new eui.Image();
		this.btnBG = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "weixin2_heisebantoumingditu_png";
		t.width = 374;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 720;
		t.right = 0;
		t.verticalCenter = 0;
		t.width = 1280;
		t.elementsContent = [this._Image1_i(),this.maskImg_i(),this.grilImg_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "weixin2_datouxiangkuang_png";
		t.x = 997.44;
		t.y = 108.16;
		return t;
	};
	_proto.maskImg_i = function () {
		var t = new eui.Image();
		this.maskImg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "weixin2_linshitouxiang_png";
		t.x = 999;
		t.y = 108;
		return t;
	};
	_proto.grilImg_i = function () {
		var t = new eui.Image();
		this.grilImg = t;
		t.height = 195;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "weixin2_linshitouxiang_png";
		t.width = 195;
		t.x = 999;
		t.y = 108.08;
		return t;
	};
	_proto.dataScroller_i = function () {
		var t = new eui.Scroller();
		this.dataScroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.horizontalCenter = -187.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "skins.ScrollerSkin";
		t.top = 40;
		t.touchChildren = true;
		t.width = 905;
		t.viewport = this.dataList_i();
		return t;
	};
	_proto.dataList_i = function () {
		var t = new eui.List();
		this.dataList = t;
		t.touchChildren = true;
		return t;
	};
	_proto.leftGroup_i = function () {
		var t = new eui.Group();
		this.leftGroup = t;
		t.height = 720;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = false;
		t.width = 1280;
		t.elementsContent = [this.backBtn_i()];
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Button();
		this.backBtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 1155;
		t.y = 21.33;
		t.skinName = CallHistoryPanelSkin$Skin127;
		return t;
	};
	return CallHistoryPanelSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/phone/CallingPanelSkin.exml'] = window.CallingPanelSkin = (function (_super) {
	__extends(CallingPanelSkin, _super);
	function CallingPanelSkin() {
		_super.call(this);
		this.skinParts = ["btnBG","heartPlugin","maskImg","grilImg"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this.btnBG_i(),this.heartPlugin_i(),this._Group1_i(),this._Group2_i()];
	}
	var _proto = CallingPanelSkin.prototype;

	_proto.btnBG_i = function () {
		var t = new eui.Image();
		this.btnBG = t;
		t.alpha = 0.6;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "weixin2_heisebantoumingditu_png";
		t.width = 374;
		return t;
	};
	_proto.heartPlugin_i = function () {
		var t = new HeartsPlugins();
		this.heartPlugin = t;
		t.left = 13;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "HeartsPluginSkin";
		t.top = 4;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 720;
		t.right = 0;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 1280;
		t.elementsContent = [this._Image1_i(),this.maskImg_i(),this.grilImg_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "weixin2_datouxiangkuang_png";
		t.x = 999;
		t.y = 108;
		return t;
	};
	_proto.maskImg_i = function () {
		var t = new eui.Image();
		this.maskImg = t;
		t.height = 195;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "weixin2_linshitouxiang_png";
		t.width = 195;
		t.x = 999;
		t.y = 108;
		return t;
	};
	_proto.grilImg_i = function () {
		var t = new eui.Image();
		this.grilImg = t;
		t.height = 195;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "weixin2_linshitouxiang_png";
		t.width = 195;
		t.x = 999;
		t.y = 108;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.right = 372;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 24;
		t.percentWidth = 80;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(114,34,684,210);
		t.source = "tel2_bohaojiemian_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "tel2_xiaoguo_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -80;
		t.source = "tel2_zhengzaihujiao_png";
		t.y = 85;
		return t;
	};
	return CallingPanelSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/phone/CallListItemSkin.exml'] = window.CallListItemSkin = (function (_super) {
	__extends(CallListItemSkin, _super);
	function CallListItemSkin() {
		_super.call(this);
		this.skinParts = ["talkLabel","numLabel","dateLabel"];
		
		this.height = 80;
		this.width = 521;
		this.elementsContent = [this._Image1_i(),this.talkLabel_i(),this.numLabel_i(),this.dateLabel_i(),this._Image2_i()];
	}
	var _proto = CallListItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 51;
		t.source = "tel2_shuzikuang_png";
		t.verticalCenter = 0.5;
		t.width = 51;
		t.x = 18;
		return t;
	};
	_proto.talkLabel_i = function () {
		var t = new eui.Label();
		this.talkLabel = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "fzyc";
		t.height = 34;
		t.size = 28;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.width = 357;
		t.x = 86;
		t.y = 23;
		return t;
	};
	_proto.numLabel_i = function () {
		var t = new eui.Label();
		this.numLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.text = "1";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 60;
		t.x = 13;
		t.y = 20;
		return t;
	};
	_proto.dateLabel_i = function () {
		var t = new eui.Label();
		this.dateLabel = t;
		t.text = "";
		t.width = 50;
		t.x = 458;
		t.y = 22;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "weixin2_fengexian_png";
		t.width = 366;
		t.x = 80;
		t.y = 67;
		return t;
	};
	return CallListItemSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/phone/DianhuaPanelSKin.exml'] = window.DianhuaPanelSKin = (function (_super) {
	__extends(DianhuaPanelSKin, _super);
	var DianhuaPanelSKin$Skin128 = 	(function (_super) {
		__extends(DianhuaPanelSKin$Skin128, _super);
		function DianhuaPanelSKin$Skin128() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DianhuaPanelSKin$Skin128.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "tel2_bohao_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DianhuaPanelSKin$Skin128;
	})(eui.Skin);

	var DianhuaPanelSKin$Skin129 = 	(function (_super) {
		__extends(DianhuaPanelSKin$Skin129, _super);
		function DianhuaPanelSKin$Skin129() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DianhuaPanelSKin$Skin129.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "login2_yuanxinganniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "login2_fanhui_png";
			t.verticalCenter = 0;
			return t;
		};
		return DianhuaPanelSKin$Skin129;
	})(eui.Skin);

	function DianhuaPanelSKin() {
		_super.call(this);
		this.skinParts = ["btnBG","maskImg","grilImg","girlName","callBtn","backBtn","leftGroup","dianhuaList","dianhuaScroller","yd_dianhuaImg","dianhuaHand","yindaoGroup"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this.btnBG_i(),this.leftGroup_i(),this._Group1_i(),this.yindaoGroup_i()];
	}
	var _proto = DianhuaPanelSKin.prototype;

	_proto.btnBG_i = function () {
		var t = new eui.Image();
		this.btnBG = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "weixin2_heisebantoumingditu_png";
		t.width = 374;
		t.y = -1.85;
		return t;
	};
	_proto.leftGroup_i = function () {
		var t = new eui.Group();
		this.leftGroup = t;
		t.height = 720;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = false;
		t.width = 1280;
		t.elementsContent = [this._Image1_i(),this.maskImg_i(),this.grilImg_i(),this.girlName_i(),this.callBtn_i(),this.backBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "weixin2_datouxiangkuang_png";
		t.x = 997.44;
		t.y = 108.16;
		return t;
	};
	_proto.maskImg_i = function () {
		var t = new eui.Image();
		this.maskImg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "weixin2_linshitouxiang_png";
		t.x = 999;
		t.y = 108;
		return t;
	};
	_proto.grilImg_i = function () {
		var t = new eui.Image();
		this.grilImg = t;
		t.height = 195;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "weixin2_linshitouxiang_png";
		t.width = 195;
		t.x = 999;
		t.y = 108;
		return t;
	};
	_proto.girlName_i = function () {
		var t = new eui.Label();
		this.girlName = t;
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 32;
		t.text = "";
		t.x = 1054;
		t.y = 326.9599999999999;
		return t;
	};
	_proto.callBtn_i = function () {
		var t = new eui.Button();
		this.callBtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 904;
		t.y = 377.84;
		t.skinName = DianhuaPanelSKin$Skin128;
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Button();
		this.backBtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 1155;
		t.y = 21.33;
		t.skinName = DianhuaPanelSKin$Skin129;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 720;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 1280;
		t.elementsContent = [this._Image2_i(),this.dianhuaScroller_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 630;
		t.scale9Grid = new egret.Rectangle(65,75,87,37);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tel2_bg_png";
		t.width = 544;
		t.x = 181;
		t.y = 48;
		return t;
	};
	_proto.dianhuaScroller_i = function () {
		var t = new eui.Scroller();
		this.dianhuaScroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 608;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "skins.ScrollerSkin";
		t.width = 521;
		t.x = 191;
		t.y = 58;
		t.viewport = this.dianhuaList_i();
		return t;
	};
	_proto.dianhuaList_i = function () {
		var t = new eui.List();
		this.dianhuaList = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.x = -50;
		t.y = 83.33;
		return t;
	};
	_proto.yindaoGroup_i = function () {
		var t = new eui.Group();
		this.yindaoGroup = t;
		t.height = 720;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.visible = false;
		t.width = 1280;
		t.elementsContent = [this._Group2_i(),this._Image3_i(),this._Label1_i(),this._Label2_i(),this._Label3_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 720;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 1280;
		t.x = 0;
		t.elementsContent = [this.yd_dianhuaImg_i(),this.dianhuaHand_i()];
		return t;
	};
	_proto.yd_dianhuaImg_i = function () {
		var t = new eui.Image();
		this.yd_dianhuaImg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_quan_png";
		t.x = 957;
		t.y = 429;
		return t;
	};
	_proto.dianhuaHand_i = function () {
		var t = new eui.Image();
		this.dianhuaHand = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_handdowm_png";
		t.x = 1053;
		t.y = 352;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_miao_png";
		t.verticalCenter = -30;
		t.x = 410.00000000000006;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.horizontalCenter = 17;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "点击这里拨号，";
		t.verticalCenter = -4;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.horizontalCenter = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "快开始你们第一次通话吧！";
		t.verticalCenter = 38;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.horizontalCenter = 19.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "喵~";
		t.verticalCenter = 86;
		return t;
	};
	return DianhuaPanelSKin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/phone/JietongPanelSkin.exml'] = window.JietongPanelSkin = (function (_super) {
	__extends(JietongPanelSkin, _super);
	var JietongPanelSkin$Skin130 = 	(function (_super) {
		__extends(JietongPanelSkin$Skin130, _super);
		function JietongPanelSkin$Skin130() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = JietongPanelSkin$Skin130.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "tel2_guaduan_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JietongPanelSkin$Skin130;
	})(eui.Skin);

	function JietongPanelSkin() {
		_super.call(this);
		this.skinParts = ["btnBG","maskImg","grilImg","girlName","timeLabel","guaduanBtn","heartPlugin","messageList","msgScroller","selectList","selectGroup","yd_dianhuaImg","dianhuaHand","yindaoSGro","yd_dianhuaImg0","dianhuaHand0","yindaoHeart","yindaoGroup"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this.btnBG_i(),this._Group1_i(),this.heartPlugin_i(),this.msgScroller_i(),this.selectGroup_i(),this.yindaoGroup_i()];
	}
	var _proto = JietongPanelSkin.prototype;

	_proto.btnBG_i = function () {
		var t = new eui.Image();
		this.btnBG = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "weixin2_heisebantoumingditu_png";
		t.width = 372;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.right = 0;
		t.verticalCenter = 4;
		t.width = 370.55;
		t.elementsContent = [this._Image1_i(),this.maskImg_i(),this.grilImg_i(),this.girlName_i(),this.timeLabel_i(),this._Label1_i(),this.guaduanBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "weixin2_datouxiangkuang_png";
		t.x = 91;
		t.y = 108;
		return t;
	};
	_proto.maskImg_i = function () {
		var t = new eui.Image();
		this.maskImg = t;
		t.source = "weixin2_linshitouxiang_png";
		t.x = 91;
		t.y = 108;
		return t;
	};
	_proto.grilImg_i = function () {
		var t = new eui.Image();
		this.grilImg = t;
		t.height = 195;
		t.source = "weixin2_linshitouxiang_png";
		t.width = 195;
		t.x = 91;
		t.y = 108;
		return t;
	};
	_proto.girlName_i = function () {
		var t = new eui.Label();
		this.girlName = t;
		t.fontFamily = "fzyc";
		t.size = 28;
		t.text = "";
		t.x = 146;
		t.y = 323;
		return t;
	};
	_proto.timeLabel_i = function () {
		var t = new eui.Label();
		this.timeLabel = t;
		t.fontFamily = "fzyc";
		t.size = 32;
		t.text = "00:00";
		t.x = 147;
		t.y = 407.89;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.size = 35;
		t.text = "通话中...";
		t.x = 121.33999999999992;
		t.y = 365.89;
		return t;
	};
	_proto.guaduanBtn_i = function () {
		var t = new eui.Button();
		this.guaduanBtn = t;
		t.height = 320;
		t.label = "";
		t.width = 320;
		t.x = 25;
		t.y = 407.85;
		t.skinName = JietongPanelSkin$Skin130;
		return t;
	};
	_proto.heartPlugin_i = function () {
		var t = new HeartsPlugins();
		this.heartPlugin = t;
		t.left = 5;
		t.skinName = "HeartsPluginSkin";
		t.top = 7;
		return t;
	};
	_proto.msgScroller_i = function () {
		var t = new eui.Scroller();
		this.msgScroller = t;
		t.percentHeight = 65;
		t.horizontalCenter = -186.5;
		t.skinName = "skins.ScrollerSkin";
		t.verticalCenter = 34.5;
		t.width = 905;
		t.viewport = this.messageList_i();
		return t;
	};
	_proto.messageList_i = function () {
		var t = new eui.List();
		this.messageList = t;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.selectGroup_i = function () {
		var t = new eui.Group();
		this.selectGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this.selectList_i()];
		return t;
	};
	_proto.selectList_i = function () {
		var t = new MessageList();
		this.selectList = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "Message3ListSkin";
		t.verticalCenter = 22.5;
		return t;
	};
	_proto.yindaoGroup_i = function () {
		var t = new eui.Group();
		this.yindaoGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this.yindaoSGro_i(),this.yindaoHeart_i()];
		return t;
	};
	_proto.yindaoSGro_i = function () {
		var t = new eui.Group();
		this.yindaoSGro = t;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Group2_i(),this._Image2_i(),this._Label2_i(),this._Label3_i(),this._Label4_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 400;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 400;
		t.x = 440;
		t.y = 160;
		t.elementsContent = [this.yd_dianhuaImg_i(),this.dianhuaHand_i()];
		return t;
	};
	_proto.yd_dianhuaImg_i = function () {
		var t = new eui.Image();
		this.yd_dianhuaImg = t;
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_quan_png";
		t.verticalCenter = 14.5;
		return t;
	};
	_proto.dianhuaHand_i = function () {
		var t = new eui.Image();
		this.dianhuaHand = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_handdowm_png";
		t.x = 152;
		t.y = -5.35;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -409;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_miao_png";
		t.verticalCenter = 187;
		t.x = 1;
		t.y = 375;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.horizontalCenter = -383;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "选择回答回应女友吧，";
		t.verticalCenter = 211;
		t.x = 127;
		t.y = 558;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.horizontalCenter = -384.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "选择之前要三思而后行哦~";
		t.verticalCenter = 253;
		t.x = 105;
		t.y = 600;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.horizontalCenter = -395.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "喵~";
		t.verticalCenter = 301;
		t.x = 224;
		t.y = 648;
		return t;
	};
	_proto.yindaoHeart_i = function () {
		var t = new eui.Group();
		this.yindaoHeart = t;
		t.percentHeight = 65;
		t.horizontalCenter = -186.5;
		t.verticalCenter = 34.5;
		t.visible = false;
		t.width = 905;
		t.elementsContent = [this._Group3_i(),this._Image3_i(),this._Label5_i(),this._Label6_i(),this._Label7_i()];
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.x = 439;
		t.y = -1;
		t.elementsContent = [this.yd_dianhuaImg0_i(),this.dianhuaHand0_i()];
		return t;
	};
	_proto.yd_dianhuaImg0_i = function () {
		var t = new eui.Image();
		this.yd_dianhuaImg0 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_quan2_png";
		t.x = 684;
		t.y = 168;
		return t;
	};
	_proto.dianhuaHand0_i = function () {
		var t = new eui.Image();
		this.dianhuaHand0 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_handdowm_png";
		t.x = 744;
		t.y = 84.65;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_miao_png";
		t.x = 54;
		t.y = 3;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "做的不错哦，";
		t.x = 216;
		t.y = 186;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "女友对你的好感度增加了~";
		t.x = 158;
		t.y = 228;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "喵~";
		t.x = 277;
		t.y = 276;
		return t;
	};
	return JietongPanelSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/redPacket/RedPacketPanelSkin.exml'] = window.RedPacketPanelSkin = (function (_super) {
	__extends(RedPacketPanelSkin, _super);
	function RedPacketPanelSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","remindBtn","redPacketImage","minLabel","maxLabel","circleImage0","rect0","continuityGrp0","circleImage1","rect1","continuityGrp1","circleImage2","rect2","continuityGrp2"];
		
		this.elementsContent = [this._Image1_i(),this.closeBtn_i(),this.remindBtn_i(),this.redPacketImage_i(),this._Image2_i(),this._Group1_i(),this._Group2_i(),this.continuityGrp0_i(),this.continuityGrp1_i(),this.continuityGrp2_i()];
	}
	var _proto = RedPacketPanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "red_packet_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.source = "gift_X_png";
		t.x = 876;
		t.y = 14;
		return t;
	};
	_proto.remindBtn_i = function () {
		var t = new eui.Image();
		this.remindBtn = t;
		t.source = "red_packet_11_png";
		t.x = 902;
		t.y = 125;
		return t;
	};
	_proto.redPacketImage_i = function () {
		var t = new eui.Image();
		this.redPacketImage = t;
		t.source = "red_packet_8_png";
		t.touchEnabled = true;
		t.x = 365;
		t.y = 169;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "red_packet_7_png";
		t.x = 30;
		t.y = 551;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 121.21;
		t.width = 288;
		t.x = 1;
		t.y = 265;
		t.elementsContent = [this._Image3_i(),this._Label1_i(),this._Image4_i(),this.minLabel_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "red_packet_2_png";
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.text = "保底获得";
		t.textColor = 0x89a7ff;
		t.x = 58.00000000000003;
		t.y = 15;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "main2_zuanshi_png";
		t.x = 71.65;
		t.y = 57.56;
		return t;
	};
	_proto.minLabel_i = function () {
		var t = new eui.Label();
		this.minLabel = t;
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.text = "x90";
		t.x = 152;
		t.y = 70.00000000000006;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 121;
		t.width = 286;
		t.x = 681;
		t.y = 265;
		t.elementsContent = [this._Image5_i(),this._Label2_i(),this._Image6_i(),this.maxLabel_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.scaleY = 1;
		t.source = "red_packet_2_png";
		t.x = 280;
		t.y = 0.11000000000001364;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.text = "最高获得";
		t.textColor = 0xffd589;
		t.x = 52;
		t.y = 15;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "main2_zuanshi_png";
		t.x = 26.17;
		t.y = 57.56;
		return t;
	};
	_proto.maxLabel_i = function () {
		var t = new eui.Label();
		this.maxLabel = t;
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.text = "x500";
		t.x = 111;
		t.y = 70.00000000000006;
		return t;
	};
	_proto.continuityGrp0_i = function () {
		var t = new eui.Group();
		this.continuityGrp0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 121;
		t.width = 304;
		t.x = 30;
		t.y = 553;
		t.elementsContent = [this.circleImage0_i(),this._Label3_i(),this._Image7_i(),this._Label4_i(),this.rect0_i()];
		return t;
	};
	_proto.circleImage0_i = function () {
		var t = new eui.Image();
		this.circleImage0 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "red_packet_3_png";
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.text = "连续一天";
		t.textColor = 0xffffff;
		t.x = 55;
		t.y = 15;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "main2_zuanshi_png";
		t.x = 31;
		t.y = 58;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.text = "90-500";
		t.textColor = 0xffda29;
		t.x = 128;
		t.y = 70.00000000000006;
		return t;
	};
	_proto.rect0_i = function () {
		var t = new eui.Rect();
		this.rect0 = t;
		t.bottom = 0;
		t.ellipseWidth = 70;
		t.fillAlpha = 0.2;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.continuityGrp1_i = function () {
		var t = new eui.Group();
		this.continuityGrp1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 121;
		t.width = 304;
		t.x = 334;
		t.y = 553;
		t.elementsContent = [this.circleImage1_i(),this._Label5_i(),this._Image8_i(),this._Label6_i(),this.rect1_i()];
		return t;
	};
	_proto.circleImage1_i = function () {
		var t = new eui.Image();
		this.circleImage1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "red_packet_3_png";
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.text = "连续二天";
		t.textColor = 0xFFFFFF;
		t.x = 55;
		t.y = 15;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "main2_zuanshi_png";
		t.x = 31;
		t.y = 58;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.text = "120-800";
		t.textColor = 0xFFDA29;
		t.x = 125;
		t.y = 70.00000000000006;
		return t;
	};
	_proto.rect1_i = function () {
		var t = new eui.Rect();
		this.rect1 = t;
		t.bottom = 0;
		t.ellipseWidth = 70;
		t.fillAlpha = 0.2;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		return t;
	};
	_proto.continuityGrp2_i = function () {
		var t = new eui.Group();
		this.continuityGrp2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 121;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 304;
		t.x = 638;
		t.y = 553;
		t.elementsContent = [this.circleImage2_i(),this._Label7_i(),this._Image9_i(),this._Label8_i(),this.rect2_i()];
		return t;
	};
	_proto.circleImage2_i = function () {
		var t = new eui.Image();
		this.circleImage2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "red_packet_3_png";
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.text = "连续三天";
		t.textColor = 0xFFFFFF;
		t.x = 55;
		t.y = 15;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "main2_zuanshi_png";
		t.x = 31;
		t.y = 58;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.text = "150-1000";
		t.textColor = 0xFFDA29;
		t.x = 122;
		t.y = 70.00000000000006;
		return t;
	};
	_proto.rect2_i = function () {
		var t = new eui.Rect();
		this.rect2 = t;
		t.ellipseWidth = 70;
		t.fillAlpha = 0.2;
		t.height = 121;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 304;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return RedPacketPanelSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/redPacket/RedPacketRemindPanelSkin.exml'] = window.RedPacketRemindPanelSkin = (function (_super) {
	__extends(RedPacketRemindPanelSkin, _super);
	function RedPacketRemindPanelSkin() {
		_super.call(this);
		this.skinParts = ["exitImage"];
		
		this.elementsContent = [this._Image1_i(),this._Label1_i(),this._Group1_i(),this.exitImage_i()];
	}
	var _proto = RedPacketRemindPanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 315;
		t.scale9Grid = new egret.Rectangle(56,50,55,46);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "red_packet_9_png";
		t.width = 722;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.text = "说明";
		t.top = 24;
		t.y = 34;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 226;
		t.horizontalCenter = 1.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 719;
		t.x = 20;
		t.y = 89.36;
		t.elementsContent = [this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "连续1天购买红包可随机获得90-500钻石。";
		t.textColor = 0x8ca6fd;
		t.x = 0;
		t.y = 16;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.text = "连续2天购买红包可随机获得120-800钻石。";
		t.textColor = 0x8ca6fd;
		t.x = 0;
		t.y = 69;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.text = "连续3天及3天以上购买红包可随机获得150-1000钻石。";
		t.textColor = 0x8ca6fd;
		t.x = 0;
		t.y = 123;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.text = "中途若有一天中断将从第一天重新开始计算。";
		t.textColor = 0x8ca6fd;
		t.x = 0;
		t.y = 176;
		return t;
	};
	_proto.exitImage_i = function () {
		var t = new eui.Image();
		this.exitImage = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "red_packet_10_png";
		t.x = 676.6;
		t.y = 19.67;
		return t;
	};
	return RedPacketRemindPanelSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/set/MailDataGroupItemSkin.exml'] = window.MailDataGroupItemSkin = (function (_super) {
	__extends(MailDataGroupItemSkin, _super);
	function MailDataGroupItemSkin() {
		_super.call(this);
		this.skinParts = ["giftImage","giftName","giftCount"];
		
		this.elementsContent = [this.giftImage_i(),this.giftName_i(),this.giftCount_i()];
	}
	var _proto = MailDataGroupItemSkin.prototype;

	_proto.giftImage_i = function () {
		var t = new eui.Image();
		this.giftImage = t;
		t.height = 120;
		t.horizontalCenter = 0;
		t.width = 120;
		return t;
	};
	_proto.giftName_i = function () {
		var t = new eui.Label();
		this.giftName = t;
		t.fontFamily = "fzyc";
		t.size = 24;
		t.text = "抱抱熊";
		t.x = 5;
		t.y = 127;
		return t;
	};
	_proto.giftCount_i = function () {
		var t = new eui.Label();
		this.giftCount = t;
		t.fontFamily = "fzyc";
		t.size = 24;
		t.text = "x1";
		t.x = 84;
		t.y = 125;
		return t;
	};
	return MailDataGroupItemSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/set/MailDataPanelSkin.exml'] = window.MailDataPanelSkin = (function (_super) {
	__extends(MailDataPanelSkin, _super);
	var MailDataPanelSkin$Skin131 = 	(function (_super) {
		__extends(MailDataPanelSkin$Skin131, _super);
		function MailDataPanelSkin$Skin131() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MailDataPanelSkin$Skin131.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "login2_hongseanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "tili_linqu_png";
			t.y = 27;
			return t;
		};
		return MailDataPanelSkin$Skin131;
	})(eui.Skin);

	var MailDataPanelSkin$Skin132 = 	(function (_super) {
		__extends(MailDataPanelSkin$Skin132, _super);
		function MailDataPanelSkin$Skin132() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MailDataPanelSkin$Skin132.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "login2_yuanxinganniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "login2_fanhui_png";
			t.verticalCenter = 0;
			return t;
		};
		return MailDataPanelSkin$Skin132;
	})(eui.Skin);

	function MailDataPanelSkin() {
		_super.call(this);
		this.skinParts = ["linquBtn","content","giftGroup","mailGroup","text","contentGroup","backBtn","leftGroup"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this.contentGroup_i(),this.leftGroup_i()];
	}
	var _proto = MailDataPanelSkin.prototype;

	_proto.contentGroup_i = function () {
		var t = new eui.Group();
		this.contentGroup = t;
		t.height = 720;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1280;
		t.elementsContent = [this._Image1_i(),this.linquBtn_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Scroller1_i(),this._Image5_i(),this.text_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scale9Grid = new egret.Rectangle(95,88,662,350);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "set2_ditu_png";
		t.width = 698;
		t.x = 290;
		t.y = 112;
		return t;
	};
	_proto.linquBtn_i = function () {
		var t = new eui.Button();
		this.linquBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 519;
		t.y = 550;
		t.skinName = MailDataPanelSkin$Skin131;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "youjian_biaoti_png";
		t.x = 442;
		t.y = 125.52;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "youjian_youjian_png";
		t.x = 592;
		t.y = 138;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "youjian_bantoumingdi_png";
		t.verticalCenter = 24.5;
		t.x = 322;
		t.y = 250;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 269;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "skins.ScrollerSkin";
		t.width = 639;
		t.x = 322;
		t.y = 250;
		t.viewport = this.mailGroup_i();
		return t;
	};
	_proto.mailGroup_i = function () {
		var t = new eui.Group();
		this.mailGroup = t;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.content_i(),this.giftGroup_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 10;
		t.paddingLeft = 42;
		t.paddingTop = 27;
		return t;
	};
	_proto.content_i = function () {
		var t = new eui.Label();
		this.content = t;
		t.fontFamily = "fzyc";
		t.text = "想解锁视频吗？想解锁视频吗？想解锁视频吗？想解锁视频吗？想解锁视频吗？想解锁视频吗？想解锁视频吗？";
		t.width = 560;
		t.x = 38.4;
		t.y = 33;
		return t;
	};
	_proto.giftGroup_i = function () {
		var t = new eui.Group();
		this.giftGroup = t;
		t.anchorOffsetY = 0;
		t.width = 560;
		t.x = 30;
		t.y = 130;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "youjian_fujian_png";
		t.x = 333;
		t.y = 193.92;
		return t;
	};
	_proto.text_i = function () {
		var t = new eui.Label();
		this.text = t;
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "周一见";
		t.textColor = 0x9b8383;
		t.x = 396.9599999999999;
		t.y = 200.04;
		return t;
	};
	_proto.leftGroup_i = function () {
		var t = new eui.Group();
		this.leftGroup = t;
		t.height = 720;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = false;
		t.width = 1280;
		t.elementsContent = [this.backBtn_i()];
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Button();
		this.backBtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 1157;
		t.y = 20;
		t.skinName = MailDataPanelSkin$Skin132;
		return t;
	};
	return MailDataPanelSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/set/MailListItemSkin.exml'] = window.MailListItemSkin = (function (_super) {
	__extends(MailListItemSkin, _super);
	function MailListItemSkin() {
		_super.call(this);
		this.skinParts = ["text","timeLabel"];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.text_i(),this.timeLabel_i()];
	}
	var _proto = MailListItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "youjian_ditu_png";
		t.x = 15;
		t.y = 15;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "youjian_tubiao_png";
		t.x = 55;
		t.y = 41;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "youjian_fujian_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.text_i = function () {
		var t = new eui.Label();
		this.text = t;
		t.fontFamily = "fzyc";
		t.size = 28;
		t.text = "周一返利";
		t.textColor = 0x9b8383;
		t.x = 179;
		t.y = 51;
		return t;
	};
	_proto.timeLabel_i = function () {
		var t = new eui.Label();
		this.timeLabel = t;
		t.fontFamily = "fzyc";
		t.size = 28;
		t.text = "";
		t.textColor = 0xb3b3b3;
		t.x = 458;
		t.y = 53;
		return t;
	};
	return MailListItemSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/set/MailPanelSkin.exml'] = window.MailPanelSkin = (function (_super) {
	__extends(MailPanelSkin, _super);
	var MailPanelSkin$Skin133 = 	(function (_super) {
		__extends(MailPanelSkin$Skin133, _super);
		function MailPanelSkin$Skin133() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MailPanelSkin$Skin133.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "login2_yuanxinganniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "login2_fanhui_png";
			t.verticalCenter = 0;
			return t;
		};
		return MailPanelSkin$Skin133;
	})(eui.Skin);

	function MailPanelSkin() {
		_super.call(this);
		this.skinParts = ["mailList","maillScroller","noText","contentGroup","backBtn","leftGroup"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this.contentGroup_i(),this.leftGroup_i()];
	}
	var _proto = MailPanelSkin.prototype;

	_proto.contentGroup_i = function () {
		var t = new eui.Group();
		this.contentGroup = t;
		t.height = 720;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1280;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.maillScroller_i(),this.noText_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scale9Grid = new egret.Rectangle(95,88,662,350);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "set2_ditu_png";
		t.width = 698;
		t.x = 290;
		t.y = 112;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "youjian_biaoti_png";
		t.x = 442;
		t.y = 125.52;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "youjian_youjian_png";
		t.x = 592;
		t.y = 138;
		return t;
	};
	_proto.maillScroller_i = function () {
		var t = new eui.Scroller();
		this.maillScroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 400;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "skins.ScrollerSkin";
		t.width = 653;
		t.x = 315;
		t.y = 190;
		t.viewport = this.mailList_i();
		return t;
	};
	_proto.mailList_i = function () {
		var t = new eui.List();
		this.mailList = t;
		return t;
	};
	_proto.noText_i = function () {
		var t = new eui.Label();
		this.noText = t;
		t.fontFamily = "fzyc";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.text = "您当前没有邮件！";
		t.textColor = 0x9b8383;
		t.x = 404;
		t.y = 332;
		return t;
	};
	_proto.leftGroup_i = function () {
		var t = new eui.Group();
		this.leftGroup = t;
		t.height = 720;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = false;
		t.width = 1280;
		t.elementsContent = [this.backBtn_i()];
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Button();
		this.backBtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 1157;
		t.y = 20;
		t.skinName = MailPanelSkin$Skin133;
		return t;
	};
	return MailPanelSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/set/ProtocalPanelSkin.exml'] = window.ProtocalPanelSkin = (function (_super) {
	__extends(ProtocalPanelSkin, _super);
	var ProtocalPanelSkin$Skin134 = 	(function (_super) {
		__extends(ProtocalPanelSkin$Skin134, _super);
		function ProtocalPanelSkin$Skin134() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ProtocalPanelSkin$Skin134.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "login2_hongseanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "xieyi_queding_png";
			t.y = 27;
			return t;
		};
		return ProtocalPanelSkin$Skin134;
	})(eui.Skin);

	var ProtocalPanelSkin$Skin135 = 	(function (_super) {
		__extends(ProtocalPanelSkin$Skin135, _super);
		function ProtocalPanelSkin$Skin135() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ProtocalPanelSkin$Skin135.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "login2_yuanxinganniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "login2_fanhui_png";
			t.verticalCenter = 0;
			return t;
		};
		return ProtocalPanelSkin$Skin135;
	})(eui.Skin);

	function ProtocalPanelSkin() {
		_super.call(this);
		this.skinParts = ["dataList","protocalScroller","okBtn","contentGroup","guanbiBtn","leftGroup"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this.contentGroup_i(),this.leftGroup_i()];
	}
	var _proto = ProtocalPanelSkin.prototype;

	_proto.contentGroup_i = function () {
		var t = new eui.Group();
		this.contentGroup = t;
		t.anchorOffsetX = 183;
		t.anchorOffsetY = 245;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.protocalScroller_i(),this.okBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "set2_ditu_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "youjian_biaoti_png";
		t.x = 223;
		t.y = 19.34;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "xieyi_title_png";
		t.x = 314;
		t.y = 33.34;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 311;
		t.scale9Grid = new egret.Rectangle(43,46,260,281);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "set2_toumingkuang_png";
		t.width = 765;
		t.x = 39;
		t.y = 100;
		return t;
	};
	_proto.protocalScroller_i = function () {
		var t = new eui.Scroller();
		this.protocalScroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 305;
		t.skinName = "skins.ScrollerSkin";
		t.width = 764;
		t.x = 40;
		t.y = 103;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 224;
		t.x = 0;
		t.y = 80;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.dataList_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.horizontalAlign = "center";
		t.paddingBottom = 0;
		t.paddingTop = 0;
		t.verticalAlign = "top";
		return t;
	};
	_proto.dataList_i = function () {
		var t = new eui.List();
		this.dataList = t;
		t.percentWidth = 100;
		t.x = 284;
		t.y = 17;
		return t;
	};
	_proto.okBtn_i = function () {
		var t = new eui.Button();
		this.okBtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 300;
		t.y = 454;
		t.skinName = ProtocalPanelSkin$Skin134;
		return t;
	};
	_proto.leftGroup_i = function () {
		var t = new eui.Group();
		this.leftGroup = t;
		t.height = 720;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = false;
		t.width = 1280;
		t.elementsContent = [this.guanbiBtn_i()];
		return t;
	};
	_proto.guanbiBtn_i = function () {
		var t = new eui.Button();
		this.guanbiBtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 1157;
		t.y = 20;
		t.skinName = ProtocalPanelSkin$Skin135;
		return t;
	};
	return ProtocalPanelSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/set/SetPanelSkin.exml'] = window.SetPanelSkin = (function (_super) {
	__extends(SetPanelSkin, _super);
	var SetPanelSkin$Skin136 = 	(function (_super) {
		__extends(SetPanelSkin$Skin136, _super);
		function SetPanelSkin$Skin136() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SetPanelSkin$Skin136.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "act_btn0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SetPanelSkin$Skin136;
	})(eui.Skin);

	var SetPanelSkin$Skin137 = 	(function (_super) {
		__extends(SetPanelSkin$Skin137, _super);
		function SetPanelSkin$Skin137() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","set2_kai_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SetPanelSkin$Skin137.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "set2_guan_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SetPanelSkin$Skin137;
	})(eui.Skin);

	var SetPanelSkin$Skin138 = 	(function (_super) {
		__extends(SetPanelSkin$Skin138, _super);
		function SetPanelSkin$Skin138() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SetPanelSkin$Skin138.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "login2_yuanxinganniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "login2_fanhui_png";
			t.verticalCenter = 0;
			return t;
		};
		return SetPanelSkin$Skin138;
	})(eui.Skin);

	function SetPanelSkin() {
		_super.call(this);
		this.skinParts = ["zhuName","zhuId","versionLabel","quitGameBtn","sndLine","kaiguan","kaiguanGroup","jianyiGroup","xin","youjianGroup","setGroup","guanbiBtn","leftGroup"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this.setGroup_i(),this.leftGroup_i()];
	}
	var _proto = SetPanelSkin.prototype;

	_proto.setGroup_i = function () {
		var t = new eui.Group();
		this.setGroup = t;
		t.anchorOffsetX = 183;
		t.anchorOffsetY = 245;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Group1_i(),this.kaiguanGroup_i(),this.jianyiGroup_i(),this.youjianGroup_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "set2_ditu_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "youjian_biaoti_png";
		t.y = 19.34;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "set2_shezhi_png";
		t.y = 33.34;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 35.30000000000001;
		t.y = 91;
		t.elementsContent = [this._Image4_i(),this._Label1_i(),this._Label2_i(),this.zhuName_i(),this.zhuId_i(),this.versionLabel_i(),this.quitGameBtn_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "set2_toumingkuang_png";
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.text = "主人公";
		t.textColor = 0xffffff;
		t.x = 33.69;
		t.y = 30.319999999999993;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.text = "角色ID";
		t.textColor = 0xffffff;
		t.x = 39.69;
		t.y = 144;
		return t;
	};
	_proto.zhuName_i = function () {
		var t = new eui.Label();
		this.zhuName = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "fzyc";
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x6d4b49;
		t.verticalAlign = "middle";
		t.width = 280;
		t.x = 59;
		t.y = 82;
		return t;
	};
	_proto.zhuId_i = function () {
		var t = new eui.Label();
		this.zhuId = t;
		t.fontFamily = "fzyc";
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x6d4b49;
		t.verticalAlign = "middle";
		t.width = 280;
		t.x = 59;
		t.y = 206;
		return t;
	};
	_proto.versionLabel_i = function () {
		var t = new eui.Label();
		this.versionLabel = t;
		t.fontFamily = "fzyc";
		t.text = "版本：1.0.3";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.x = 45.18;
		t.y = 339.64;
		return t;
	};
	_proto.quitGameBtn_i = function () {
		var t = new eui.Button();
		this.quitGameBtn = t;
		t.label = "返回大厅";
		t.x = 39.24;
		t.y = 249.79;
		t.skinName = SetPanelSkin$Skin136;
		return t;
	};
	_proto.kaiguanGroup_i = function () {
		var t = new eui.Group();
		this.kaiguanGroup = t;
		t.x = 399;
		t.y = 91;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this.sndLine_i(),this._Label3_i(),this.kaiguan_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 166;
		t.scale9Grid = new egret.Rectangle(43,46,260,281);
		t.source = "set2_toumingkuang_png";
		t.width = 403;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "set2_yinyue_png";
		t.x = 47;
		t.y = 54;
		return t;
	};
	_proto.sndLine_i = function () {
		var t = new eui.Image();
		this.sndLine = t;
		t.source = "set_line_png";
		t.visible = false;
		t.x = 46.84;
		t.y = 53.11;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.text = "音乐";
		t.x = 106;
		t.y = 64;
		return t;
	};
	_proto.kaiguan_i = function () {
		var t = new eui.ToggleButton();
		this.kaiguan = t;
		t.label = "";
		t.x = 212;
		t.y = 48;
		t.skinName = SetPanelSkin$Skin137;
		return t;
	};
	_proto.jianyiGroup_i = function () {
		var t = new eui.Group();
		this.jianyiGroup = t;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.x = 398;
		t.y = 270;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this._Label4_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 191;
		t.scale9Grid = new egret.Rectangle(43,46,260,281);
		t.source = "set2_toumingkuang_png";
		t.width = 198;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "set2_jianyi_png";
		t.x = 65;
		t.y = 44;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.text = "协议";
		t.x = 66.66;
		t.y = 125;
		return t;
	};
	_proto.youjianGroup_i = function () {
		var t = new eui.Group();
		this.youjianGroup = t;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.x = 609;
		t.y = 269;
		t.elementsContent = [this._Image9_i(),this._Image10_i(),this._Label5_i(),this.xin_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 191;
		t.scale9Grid = new egret.Rectangle(43,46,260,281);
		t.source = "set2_toumingkuang_png";
		t.width = 194;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "set2_youjian_png";
		t.x = 61;
		t.y = 49;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.size = 32;
		t.text = "邮件";
		t.x = 69;
		t.y = 126.33999999999997;
		return t;
	};
	_proto.xin_i = function () {
		var t = new eui.Image();
		this.xin = t;
		t.source = "main2_tishi_png";
		t.x = 133;
		t.y = 7;
		return t;
	};
	_proto.leftGroup_i = function () {
		var t = new eui.Group();
		this.leftGroup = t;
		t.height = 720;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = false;
		t.width = 1280;
		t.elementsContent = [this.guanbiBtn_i()];
		return t;
	};
	_proto.guanbiBtn_i = function () {
		var t = new eui.Button();
		this.guanbiBtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 1157;
		t.y = 20;
		t.skinName = SetPanelSkin$Skin138;
		return t;
	};
	return SetPanelSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/share/SharePanelSkin.exml'] = window.SharePanelSkin = (function (_super) {
	__extends(SharePanelSkin, _super);
	var SharePanelSkin$Skin139 = 	(function (_super) {
		__extends(SharePanelSkin$Skin139, _super);
		function SharePanelSkin$Skin139() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SharePanelSkin$Skin139.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gift_X_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SharePanelSkin$Skin139;
	})(eui.Skin);

	var SharePanelSkin$Skin140 = 	(function (_super) {
		__extends(SharePanelSkin$Skin140, _super);
		function SharePanelSkin$Skin140() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SharePanelSkin$Skin140.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "work2_anniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0.5;
			t.source = "bag2_queding_png";
			t.y = 20;
			return t;
		};
		return SharePanelSkin$Skin140;
	})(eui.Skin);

	function SharePanelSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","weiboBtn","weixinBtn","qqBtn","friendBtn","zoneBtn","okBtn"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = SharePanelSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.8;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 720;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1280;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.closeBtn_i(),this.weiboBtn_i(),this.weixinBtn_i(),this.qqBtn_i(),this.friendBtn_i(),this.zoneBtn_i(),this._Image3_i(),this.okBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "gift_ditu_png";
		t.x = 247;
		t.y = 94;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "share_title2_png";
		t.x = 301;
		t.y = 100.19;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 934;
		t.y = 87;
		t.skinName = SharePanelSkin$Skin139;
		return t;
	};
	_proto.weiboBtn_i = function () {
		var t = new eui.Image();
		this.weiboBtn = t;
		t.source = "share_weibo_png";
		t.visible = false;
		t.x = 521.53;
		t.y = 216.11;
		return t;
	};
	_proto.weixinBtn_i = function () {
		var t = new eui.Image();
		this.weixinBtn = t;
		t.source = "share_weixin_png";
		t.visible = false;
		t.x = 590;
		t.y = 371.51;
		return t;
	};
	_proto.qqBtn_i = function () {
		var t = new eui.Image();
		this.qqBtn = t;
		t.source = "share_qq_png";
		t.visible = false;
		t.x = 654.14;
		t.y = 218.11;
		return t;
	};
	_proto.friendBtn_i = function () {
		var t = new eui.Image();
		this.friendBtn = t;
		t.source = "share_friend_png";
		t.visible = false;
		t.x = 723.84;
		t.y = 371.51;
		return t;
	};
	_proto.zoneBtn_i = function () {
		var t = new eui.Image();
		this.zoneBtn = t;
		t.source = "share_zone_png";
		t.visible = false;
		t.x = 454.82;
		t.y = 371.51;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "share_content_png";
		t.x = 355;
		t.y = 316;
		return t;
	};
	_proto.okBtn_i = function () {
		var t = new eui.Button();
		this.okBtn = t;
		t.height = 86;
		t.label = "";
		t.width = 191;
		t.x = 545;
		t.y = 503.96;
		t.skinName = SharePanelSkin$Skin140;
		return t;
	};
	return SharePanelSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/shipin/ShipinPanelSkin.exml'] = window.ShipinPanelSkin = (function (_super) {
	__extends(ShipinPanelSkin, _super);
	var ShipinPanelSkin$Skin141 = 	(function (_super) {
		__extends(ShipinPanelSkin$Skin141, _super);
		function ShipinPanelSkin$Skin141() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","shipin_2_btn_on_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShipinPanelSkin$Skin141.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "shipin_2_btn_off_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "fzyc";
			t.horizontalCenter = 0;
			t.size = 40;
			t.verticalCenter = 0;
			return t;
		};
		return ShipinPanelSkin$Skin141;
	})(eui.Skin);

	var ShipinPanelSkin$Skin142 = 	(function (_super) {
		__extends(ShipinPanelSkin$Skin142, _super);
		function ShipinPanelSkin$Skin142() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","shipin_2_btn_on_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShipinPanelSkin$Skin142.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "shipin_2_btn_off_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "fzyc";
			t.horizontalCenter = 0;
			t.size = 40;
			t.verticalCenter = 0;
			return t;
		};
		return ShipinPanelSkin$Skin142;
	})(eui.Skin);

	var ShipinPanelSkin$Skin143 = 	(function (_super) {
		__extends(ShipinPanelSkin$Skin143, _super);
		function ShipinPanelSkin$Skin143() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","shipin_2_btn_on_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShipinPanelSkin$Skin143.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "shipin_2_btn_off_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "fzyc";
			t.horizontalCenter = 0;
			t.size = 40;
			t.verticalCenter = 0;
			return t;
		};
		return ShipinPanelSkin$Skin143;
	})(eui.Skin);

	var ShipinPanelSkin$Skin144 = 	(function (_super) {
		__extends(ShipinPanelSkin$Skin144, _super);
		function ShipinPanelSkin$Skin144() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","shipin2_zhencang_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShipinPanelSkin$Skin144.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "shipin2_huiyi_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ShipinPanelSkin$Skin144;
	})(eui.Skin);

	var ShipinPanelSkin$Skin145 = 	(function (_super) {
		__extends(ShipinPanelSkin$Skin145, _super);
		function ShipinPanelSkin$Skin145() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShipinPanelSkin$Skin145.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "login2_yuanxinganniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "login2_fanhui_png";
			t.verticalCenter = 0;
			return t;
		};
		return ShipinPanelSkin$Skin145;
	})(eui.Skin);

	function ShipinPanelSkin() {
		_super.call(this);
		this.skinParts = ["jinbiImg","goldLabel","goldGroup","rag","itemGroup","shoucangScroller","item2Group","huiyiScroller","item3Group","bgScroller","kaiguan","backBtn","leftGroup","yd_shipinImg","shipinHand","yindaoGroup","backCircle","backHand","yindaoBack"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.goldGroup_i(),this._Group1_i(),this.shoucangScroller_i(),this.huiyiScroller_i(),this.bgScroller_i(),this.kaiguan_i(),this.leftGroup_i(),this.yindaoGroup_i(),this.yindaoBack_i()];
	}
	var _proto = ShipinPanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "shipin2_BG_jpg";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.percentHeight = 78;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shop2_zhezhao_png";
		t.percentWidth = 100;
		t.x = 0;
		return t;
	};
	_proto.goldGroup_i = function () {
		var t = new eui.Group();
		this.goldGroup = t;
		t.top = 44;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.x = 31;
		t.elementsContent = [this.jinbiImg_i(),this.goldLabel_i(),this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto.jinbiImg_i = function () {
		var t = new eui.Image();
		this.jinbiImg = t;
		t.scale9Grid = new egret.Rectangle(9,10,23,22);
		t.source = "main2_ditu_png";
		t.x = 2.0500000000000114;
		t.y = 1.9699999999999989;
		return t;
	};
	_proto.goldLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.goldLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "shuzi3_fnt";
		t.height = 37;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 72;
		t.y = 8;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "main2_jinbi_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "main2_jiahao2_png";
		t.x = 28.04999999999997;
		t.y = 20.96999999999997;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 99;
		t.horizontalCenter = 0;
		t.top = 41;
		t.width = 780;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this._Image7_i(),this.rag_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shipin_2_btn_panel_png";
		t.verticalCenter = 0;
		t.y = 284;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.left = 260;
		t.source = "shipin_2_btn_line_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.right = 260;
		t.source = "shipin_2_btn_line_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.rag_i = function () {
		var t = new eui.Group();
		this.rag = t;
		t.bottom = 0;
		t.left = 0;
		t.name = "rag";
		t.right = 0;
		t.top = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._RadioButton1_i(),this._RadioButton2_i(),this._RadioButton3_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 29;
		t.horizontalAlign = "center";
		t.paddingLeft = 0;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._RadioButton1_i = function () {
		var t = new eui.RadioButton();
		t.groupName = "rag";
		t.height = 97;
		t.label = "回 忆";
		t.scaleX = 1;
		t.scaleY = 1;
		t.selected = true;
		t.width = 231;
		t.x = 309;
		t.y = 58;
		t.skinName = ShipinPanelSkin$Skin141;
		return t;
	};
	_proto._RadioButton2_i = function () {
		var t = new eui.RadioButton();
		t.groupName = "rag";
		t.height = 97;
		t.label = "珍 藏";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 231;
		t.x = 319;
		t.y = 68;
		t.skinName = ShipinPanelSkin$Skin142;
		return t;
	};
	_proto._RadioButton3_i = function () {
		var t = new eui.RadioButton();
		t.groupName = "rag";
		t.height = 97;
		t.label = "背 景";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 231;
		t.x = 329;
		t.y = 78;
		t.skinName = ShipinPanelSkin$Skin143;
		return t;
	};
	_proto.shoucangScroller_i = function () {
		var t = new eui.Scroller();
		this.shoucangScroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.percentHeight = 77;
		t.horizontalCenter = 0;
		t.skinName = "skins.ScrollerSkin";
		t.width = 1280;
		t.viewport = this.itemGroup_i();
		return t;
	};
	_proto.itemGroup_i = function () {
		var t = new eui.Group();
		this.itemGroup = t;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.columnAlign = "left";
		t.horizontalAlign = "left";
		t.horizontalGap = 40;
		t.paddingBottom = 30;
		t.paddingLeft = 50;
		t.paddingRight = 50;
		t.paddingTop = 30;
		t.rowAlign = "top";
		t.verticalAlign = "top";
		t.verticalGap = 40;
		return t;
	};
	_proto.huiyiScroller_i = function () {
		var t = new eui.Scroller();
		this.huiyiScroller = t;
		t.bottom = 0;
		t.percentHeight = 77;
		t.horizontalCenter = 0;
		t.skinName = "skins.ScrollerSkin";
		t.width = 1280;
		t.viewport = this.item2Group_i();
		return t;
	};
	_proto.item2Group_i = function () {
		var t = new eui.Group();
		this.item2Group = t;
		t.layout = this._TileLayout2_i();
		return t;
	};
	_proto._TileLayout2_i = function () {
		var t = new eui.TileLayout();
		t.columnAlign = "left";
		t.horizontalAlign = "left";
		t.horizontalGap = 40;
		t.paddingBottom = 30;
		t.paddingLeft = 50;
		t.paddingRight = 50;
		t.paddingTop = 30;
		t.rowAlign = "top";
		t.verticalAlign = "top";
		t.verticalGap = 40;
		return t;
	};
	_proto.bgScroller_i = function () {
		var t = new eui.Scroller();
		this.bgScroller = t;
		t.bottom = 0;
		t.percentHeight = 77;
		t.horizontalCenter = 0;
		t.skinName = "skins.ScrollerSkin";
		t.width = 1280;
		t.viewport = this.item3Group_i();
		return t;
	};
	_proto.item3Group_i = function () {
		var t = new eui.Group();
		this.item3Group = t;
		t.layout = this._TileLayout3_i();
		return t;
	};
	_proto._TileLayout3_i = function () {
		var t = new eui.TileLayout();
		t.columnAlign = "left";
		t.horizontalAlign = "left";
		t.horizontalGap = 40;
		t.paddingBottom = 30;
		t.paddingLeft = 50;
		t.paddingRight = 50;
		t.paddingTop = 30;
		t.rowAlign = "top";
		t.verticalAlign = "top";
		t.verticalGap = 40;
		return t;
	};
	_proto.kaiguan_i = function () {
		var t = new eui.ToggleSwitch();
		this.kaiguan = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.top = 33;
		t.visible = false;
		t.skinName = ShipinPanelSkin$Skin144;
		return t;
	};
	_proto.leftGroup_i = function () {
		var t = new eui.Group();
		this.leftGroup = t;
		t.height = 720;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = false;
		t.width = 1280;
		t.elementsContent = [this.backBtn_i()];
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Button();
		this.backBtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 1157;
		t.y = 21.52;
		t.skinName = ShipinPanelSkin$Skin145;
		return t;
	};
	_proto.yindaoGroup_i = function () {
		var t = new eui.Group();
		this.yindaoGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = true;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.elementsContent = [this._Group2_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.percentHeight = 78;
		t.horizontalCenter = 0;
		t.width = 1280;
		t.elementsContent = [this.yd_shipinImg_i(),this.shipinHand_i(),this._Image8_i(),this._Label1_i(),this._Label2_i(),this._Label3_i()];
		return t;
	};
	_proto.yd_shipinImg_i = function () {
		var t = new eui.Image();
		this.yd_shipinImg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_fang_png";
		t.x = 16;
		t.y = -3;
		return t;
	};
	_proto.shipinHand_i = function () {
		var t = new eui.Image();
		this.shipinHand = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_handleft_png";
		t.x = 380;
		t.y = 233.96;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_miao_png";
		t.top = 108;
		t.x = 500.9;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "点击播放视频，";
		t.top = 288;
		t.x = 657.63;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "属于心动女生的第一次回忆！";
		t.top = 333;
		t.x = 592.63;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "喵~";
		t.top = 379;
		t.x = 730.63;
		return t;
	};
	_proto.yindaoBack_i = function () {
		var t = new eui.Group();
		this.yindaoBack = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Group4_i()];
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 720;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.width = 1280;
		t.elementsContent = [this._Group3_i(),this._Image9_i(),this._Label4_i(),this._Label5_i()];
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 720;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 1280;
		t.elementsContent = [this.backCircle_i(),this.backHand_i()];
		return t;
	};
	_proto.backCircle_i = function () {
		var t = new eui.Image();
		this.backCircle = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_quan3_png";
		t.x = 1128;
		t.y = -6;
		return t;
	};
	_proto.backHand_i = function () {
		var t = new eui.Image();
		this.backHand = t;
		t.scaleX = 1;
		t.scaleY = -1;
		t.source = "yindao_handdowm_png";
		t.x = 1158;
		t.y = 246.65;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_miao_png";
		t.x = 622;
		t.y = 115;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "有新功能解锁了~";
		t.x = 782.3;
		t.y = 309.22;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "点击返回大厅看看吧~";
		t.x = 757.44;
		t.y = 364.67;
		return t;
	};
	return ShipinPanelSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/shipin/ShiPinScrollerItemSkin.exml'] = window.ShiPinScrollerItemSkin = (function (_super) {
	__extends(ShiPinScrollerItemSkin, _super);
	function ShiPinScrollerItemSkin() {
		_super.call(this);
		this.skinParts = ["maskImg","videoImg","zhezhaoImg","rectMask","playImg","lockImg","iconImg","goldText","goldGroup","dateText","dateGroup","typeText"];
		
		this.elementsContent = [this.maskImg_i(),this.videoImg_i(),this.zhezhaoImg_i(),this.rectMask_i(),this.playImg_i(),this.lockImg_i(),this.goldGroup_i(),this.dateGroup_i(),this._Image3_i(),this.typeText_i()];
	}
	var _proto = ShiPinScrollerItemSkin.prototype;

	_proto.maskImg_i = function () {
		var t = new eui.Image();
		this.maskImg = t;
		t.source = "bag2_zhishibing_png";
		t.visible = false;
		return t;
	};
	_proto.videoImg_i = function () {
		var t = new eui.Image();
		this.videoImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 221;
		t.width = 366;
		return t;
	};
	_proto.zhezhaoImg_i = function () {
		var t = new eui.Image();
		this.zhezhaoImg = t;
		t.height = 221;
		t.source = "shipin2_heisebantoumingzhezhao_png";
		t.visible = false;
		t.width = 366;
		return t;
	};
	_proto.rectMask_i = function () {
		var t = new eui.Rect();
		this.rectMask = t;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.5;
		t.height = 221;
		t.width = 366;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.playImg_i = function () {
		var t = new eui.Image();
		this.playImg = t;
		t.horizontalCenter = 0.5;
		t.source = "shipin2_bofang_png";
		t.y = 87;
		return t;
	};
	_proto.lockImg_i = function () {
		var t = new eui.Image();
		this.lockImg = t;
		t.horizontalCenter = 0;
		t.source = "shipin2_suo_png";
		t.y = 79;
		return t;
	};
	_proto.goldGroup_i = function () {
		var t = new eui.Group();
		this.goldGroup = t;
		t.x = 203;
		t.y = 170;
		t.elementsContent = [this._Image1_i(),this.iconImg_i(),this.goldText_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "shipin2_jinbizhezhao_png";
		return t;
	};
	_proto.iconImg_i = function () {
		var t = new eui.Image();
		this.iconImg = t;
		t.height = 35;
		t.source = "main2_jinbi_png";
		t.width = 35;
		t.x = 123;
		t.y = 7.5;
		return t;
	};
	_proto.goldText_i = function () {
		var t = new eui.Label();
		this.goldText = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "fzyc";
		t.size = 28;
		t.text = "100000";
		t.textAlign = "right";
		t.width = 131;
		t.x = -12;
		t.y = 12;
		return t;
	};
	_proto.dateGroup_i = function () {
		var t = new eui.Group();
		this.dateGroup = t;
		t.x = 21;
		t.y = 169;
		t.elementsContent = [this._Image2_i(),this.dateText_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "shipin2_zizhezhao_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.dateText_i = function () {
		var t = new eui.Label();
		this.dateText = t;
		t.fontFamily = "fzyc";
		t.text = "游戏第10天开启";
		t.x = 57;
		t.y = 14;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "bag2_baidi_png";
		t.y = 221;
		return t;
	};
	_proto.typeText_i = function () {
		var t = new eui.Label();
		this.typeText = t;
		t.fontFamily = "fzyc";
		t.horizontalCenter = 0;
		t.text = "回忆01";
		t.textAlign = "center";
		t.textColor = 0x666666;
		t.verticalAlign = "middle";
		t.y = 239;
		return t;
	};
	return ShiPinScrollerItemSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/shop/buyToolPanelSkin.exml'] = window.buyToolPanelSkin = (function (_super) {
	__extends(buyToolPanelSkin, _super);
	var buyToolPanelSkin$Skin146 = 	(function (_super) {
		__extends(buyToolPanelSkin$Skin146, _super);
		function buyToolPanelSkin$Skin146() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = buyToolPanelSkin$Skin146.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bag2_lvseanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "bag2_quxiao_png";
			t.y = 21;
			return t;
		};
		return buyToolPanelSkin$Skin146;
	})(eui.Skin);

	var buyToolPanelSkin$Skin147 = 	(function (_super) {
		__extends(buyToolPanelSkin$Skin147, _super);
		function buyToolPanelSkin$Skin147() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = buyToolPanelSkin$Skin147.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "work2_anniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0.5;
			t.source = "bag2_queding_png";
			t.y = 20;
			return t;
		};
		return buyToolPanelSkin$Skin147;
	})(eui.Skin);

	var buyToolPanelSkin$Skin148 = 	(function (_super) {
		__extends(buyToolPanelSkin$Skin148, _super);
		function buyToolPanelSkin$Skin148() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = buyToolPanelSkin$Skin148.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bag2_jianhao_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return buyToolPanelSkin$Skin148;
	})(eui.Skin);

	var buyToolPanelSkin$Skin149 = 	(function (_super) {
		__extends(buyToolPanelSkin$Skin149, _super);
		function buyToolPanelSkin$Skin149() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = buyToolPanelSkin$Skin149.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bag2_jiahao_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return buyToolPanelSkin$Skin149;
	})(eui.Skin);

	var buyToolPanelSkin$Skin150 = 	(function (_super) {
		__extends(buyToolPanelSkin$Skin150, _super);
		function buyToolPanelSkin$Skin150() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = buyToolPanelSkin$Skin150.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bag2_jianhao1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return buyToolPanelSkin$Skin150;
	})(eui.Skin);

	var buyToolPanelSkin$Skin151 = 	(function (_super) {
		__extends(buyToolPanelSkin$Skin151, _super);
		function buyToolPanelSkin$Skin151() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = buyToolPanelSkin$Skin151.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bag2_jiahao1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return buyToolPanelSkin$Skin151;
	})(eui.Skin);

	function buyToolPanelSkin() {
		_super.call(this);
		this.skinParts = ["canelBtn","okBtn","titleLabel","contentLabel","goldLabel","maxcountLabel","xiangouGroup","giftImg","jianBtn","jiaBtn","countLabel","nojianBtn","nojiaBtn","contentGroup"];
		
		this.elementsContent = [this.contentGroup_i()];
	}
	var _proto = buyToolPanelSkin.prototype;

	_proto.contentGroup_i = function () {
		var t = new eui.Group();
		this.contentGroup = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.canelBtn_i(),this.okBtn_i(),this.titleLabel_i(),this.contentLabel_i(),this._Image2_i(),this.goldLabel_i(),this.xiangouGroup_i(),this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bag2_ditu_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.canelBtn_i = function () {
		var t = new eui.Button();
		this.canelBtn = t;
		t.label = "";
		t.x = 88;
		t.y = 325;
		t.skinName = buyToolPanelSkin$Skin146;
		return t;
	};
	_proto.okBtn_i = function () {
		var t = new eui.Button();
		this.okBtn = t;
		t.height = 86;
		t.label = "";
		t.width = 191;
		t.x = 367;
		t.y = 325;
		t.skinName = buyToolPanelSkin$Skin147;
		return t;
	};
	_proto.titleLabel_i = function () {
		var t = new eui.Label();
		this.titleLabel = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "fzyc";
		t.size = 40;
		t.text = "呵呵呵呵";
		t.textAlign = "left";
		t.textColor = 0xe03637;
		t.verticalAlign = "middle";
		t.width = 292.09;
		t.x = 284.91;
		t.y = 25;
		return t;
	};
	_proto.contentLabel_i = function () {
		var t = new eui.Label();
		this.contentLabel = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "fzyc";
		t.size = 24;
		t.text = "呵呵呵";
		t.textAlign = "left";
		t.textColor = 0x333333;
		t.verticalAlign = "middle";
		t.width = 291;
		t.x = 291;
		t.y = 121;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 35;
		t.source = "main2_jinbi_png";
		t.width = 35;
		t.x = 291;
		t.y = 172;
		return t;
	};
	_proto.goldLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.goldLabel = t;
		t.font = "shuzi3_fnt";
		t.text = "16000";
		t.x = 340;
		t.y = 174;
		return t;
	};
	_proto.xiangouGroup_i = function () {
		var t = new eui.Group();
		this.xiangouGroup = t;
		t.x = 270;
		t.y = 59;
		t.elementsContent = [this._Label1_i(),this.maxcountLabel_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.size = 28;
		t.text = "今日可购买：";
		t.textColor = 0xe03637;
		t.x = 14.999999999999943;
		t.y = 13.000000000000057;
		return t;
	};
	_proto.maxcountLabel_i = function () {
		var t = new eui.Label();
		this.maxcountLabel = t;
		t.fontFamily = "fzyc";
		t.text = "6/6";
		t.textColor = 0xe03637;
		t.verticalAlign = "middle";
		t.x = 187.4400000000001;
		t.y = 11.52;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 184;
		t.width = 233;
		t.x = 26;
		t.y = 22;
		t.elementsContent = [this._Image3_i(),this.giftImg_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 184;
		t.source = "bag2_tupianceng_png";
		t.width = 233;
		return t;
	};
	_proto.giftImg_i = function () {
		var t = new eui.Image();
		this.giftImg = t;
		t.height = 180;
		t.width = 229;
		t.x = 2;
		t.y = 2;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 14;
		t.y = 240;
		t.elementsContent = [this._Image4_i(),this.jianBtn_i(),this.jiaBtn_i(),this.countLabel_i(),this.nojianBtn_i(),this.nojiaBtn_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "bag2_toumingdi_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.jianBtn_i = function () {
		var t = new eui.Button();
		this.jianBtn = t;
		t.label = "";
		t.x = 175;
		t.y = 0;
		t.skinName = buyToolPanelSkin$Skin148;
		return t;
	};
	_proto.jiaBtn_i = function () {
		var t = new eui.Button();
		this.jiaBtn = t;
		t.label = "";
		t.x = 363;
		t.y = 0;
		t.skinName = buyToolPanelSkin$Skin149;
		return t;
	};
	_proto.countLabel_i = function () {
		var t = new eui.Label();
		this.countLabel = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "fzyc";
		t.size = 38;
		t.text = "999";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.width = 97;
		t.x = 262;
		t.y = 11;
		return t;
	};
	_proto.nojianBtn_i = function () {
		var t = new eui.Button();
		this.nojianBtn = t;
		t.label = "";
		t.x = 175;
		t.y = 0;
		t.skinName = buyToolPanelSkin$Skin150;
		return t;
	};
	_proto.nojiaBtn_i = function () {
		var t = new eui.Button();
		this.nojiaBtn = t;
		t.label = "";
		t.x = 363;
		t.y = 0;
		t.skinName = buyToolPanelSkin$Skin151;
		return t;
	};
	return buyToolPanelSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/shop/coin/ShopCoinItemSkin.exml'] = window.ShopCoinItemSkin = (function (_super) {
	__extends(ShopCoinItemSkin, _super);
	function ShopCoinItemSkin() {
		_super.call(this);
		this.skinParts = ["img","txtTotal","fontPrice"];
		
		this.height = 240;
		this.width = 340;
		this.elementsContent = [this._Image1_i(),this.img_i(),this.txtTotal_i(),this._Group1_i()];
	}
	var _proto = ShopCoinItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "shop_coin_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.source = "";
		return t;
	};
	_proto.txtTotal_i = function () {
		var t = new eui.Label();
		this.txtTotal = t;
		t.right = 20;
		t.size = 30;
		t.stroke = 3;
		t.strokeColor = 0xFFFFFF;
		t.text = "x5000";
		t.textColor = 0x416ff8;
		t.y = 15;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 27;
		t.horizontalCenter = 0;
		t.elementsContent = [this._Image2_i(),this.fontPrice_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shop2_renminbi_png";
		t.touchEnabled = false;
		return t;
	};
	_proto.fontPrice_i = function () {
		var t = new eui.BitmapLabel();
		this.fontPrice = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "shuzi1_fnt";
		t.height = 35;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "5000";
		t.verticalCenter = 0;
		t.x = 45;
		return t;
	};
	return ShopCoinItemSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/shop/coin/ShopCoinPanelSkin.exml'] = window.ShopCoinPanelSkin = (function (_super) {
	__extends(ShopCoinPanelSkin, _super);
	var ShopCoinPanelSkin$Skin152 = 	(function (_super) {
		__extends(ShopCoinPanelSkin$Skin152, _super);
		function ShopCoinPanelSkin$Skin152() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopCoinPanelSkin$Skin152.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "login2_yuanxinganniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "login2_fanhui_png";
			t.verticalCenter = 0;
			return t;
		};
		return ShopCoinPanelSkin$Skin152;
	})(eui.Skin);

	function ShopCoinPanelSkin() {
		_super.call(this);
		this.skinParts = ["heartPlugin","fontCoin","coinGroup","zhuanshiImg","fontDiamond","diamondGroup1","boxItem","backBtn","leftGroup","imgSelected"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Image1_i(),this.heartPlugin_i(),this.coinGroup_i(),this.diamondGroup1_i(),this._Image7_i(),this._Image8_i(),this.boxItem_i(),this.leftGroup_i(),this.imgSelected_i()];
	}
	var _proto = ShopCoinPanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "work2_bg_jpg";
		t.top = 0;
		return t;
	};
	_proto.heartPlugin_i = function () {
		var t = new HeartsPlugins();
		this.heartPlugin = t;
		t.left = 24;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "HeartsPluginSkin";
		t.top = 14;
		return t;
	};
	_proto.coinGroup_i = function () {
		var t = new eui.Group();
		this.coinGroup = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 48;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.x = 443;
		t.elementsContent = [this._Image2_i(),this.fontCoin_i(),this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(9,10,23,22);
		t.source = "main2_ditu_png";
		t.x = 2.0500000000000114;
		t.y = 1.9699999999999989;
		return t;
	};
	_proto.fontCoin_i = function () {
		var t = new eui.BitmapLabel();
		this.fontCoin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "shuzi3_fnt";
		t.height = 37;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 72;
		t.y = 9;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 63;
		t.source = "charge_coin_big";
		t.width = 60;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "main2_jiahao1_png";
		t.x = 28.04999999999997;
		t.y = 20.96999999999997;
		return t;
	};
	_proto.diamondGroup1_i = function () {
		var t = new eui.Group();
		this.diamondGroup1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 48;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.x = 698;
		t.elementsContent = [this.zhuanshiImg_i(),this.fontDiamond_i(),this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto.zhuanshiImg_i = function () {
		var t = new eui.Image();
		this.zhuanshiImg = t;
		t.anchorOffsetX = 0;
		t.source = "main2_ditu_png";
		t.x = 21.51999999999997;
		t.y = 3.480000000000018;
		return t;
	};
	_proto.fontDiamond_i = function () {
		var t = new eui.BitmapLabel();
		this.fontDiamond = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "shuzi3_fnt";
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 80;
		t.y = 10;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "main2_zuanshi_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "main2_jiahao1_png";
		t.x = 31;
		t.y = 21;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 560;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(45,173,22,256);
		t.source = "shop_common_bottom_png";
		t.width = 1112;
		t.y = 150.04;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "shop_coin_head_png";
		t.y = 142;
		return t;
	};
	_proto.boxItem_i = function () {
		var t = new eui.Group();
		this.boxItem = t;
		t.touchChildren = true;
		t.x = 97;
		t.y = 212;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 12;
		t.paddingLeft = 27;
		t.requestedColumnCount = 3;
		return t;
	};
	_proto.leftGroup_i = function () {
		var t = new eui.Group();
		this.leftGroup = t;
		t.height = 720;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = false;
		t.width = 1280;
		t.elementsContent = [this.backBtn_i()];
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Button();
		this.backBtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 1157;
		t.y = 21;
		t.skinName = ShopCoinPanelSkin$Skin152;
		return t;
	};
	_proto.imgSelected_i = function () {
		var t = new eui.Image();
		this.imgSelected = t;
		t.anchorOffsetX = 2;
		t.anchorOffsetY = 8;
		t.scale9Grid = new egret.Rectangle(44,31,270,188);
		t.source = "shop_diamond_bg_selected_png";
		t.touchEnabled = false;
		t.width = 350;
		t.x = 97;
		t.y = 212;
		return t;
	};
	return ShopCoinPanelSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/shop/DaojuListItemSkin.exml'] = window.DaojuListItemSkin = (function (_super) {
	__extends(DaojuListItemSkin, _super);
	var DaojuListItemSkin$Skin153 = 	(function (_super) {
		__extends(DaojuListItemSkin$Skin153, _super);
		function DaojuListItemSkin$Skin153() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DaojuListItemSkin$Skin153.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "shop2_anniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DaojuListItemSkin$Skin153;
	})(eui.Skin);

	function DaojuListItemSkin() {
		_super.call(this);
		this.skinParts = ["maskImg","daojuImg","buyLimitLabel","eName","cName","miaoshuLabel","goldLabel","buyGroup"];
		
		this.elementsContent = [this.maskImg_i(),this.daojuImg_i(),this._Image1_i(),this.buyLimitLabel_i(),this._Group1_i(),this.miaoshuLabel_i(),this._Button1_i(),this._Group2_i(),this.buyGroup_i()];
	}
	var _proto = DaojuListItemSkin.prototype;

	_proto.maskImg_i = function () {
		var t = new eui.Image();
		this.maskImg = t;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shop2_ditu_png";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.daojuImg_i = function () {
		var t = new eui.Image();
		this.daojuImg = t;
		t.height = 360;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 366;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shop2_zhezhao2_png";
		t.x = 0;
		t.y = 213;
		return t;
	};
	_proto.buyLimitLabel_i = function () {
		var t = new eui.Label();
		this.buyLimitLabel = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "1230";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 360;
		t.x = -5;
		t.y = 250;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 360;
		t.x = 1;
		t.y = 286;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.eName_i(),this.cName_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 8;
		t.horizontalAlign = "right";
		t.paddingRight = 6;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.eName_i = function () {
		var t = new eui.Label();
		this.eName = t;
		t.bold = true;
		t.fontFamily = "fzyc";
		t.size = 24;
		t.text = "1230";
		t.textAlign = "right";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.x = 0;
		t.y = 5;
		return t;
	};
	_proto.cName_i = function () {
		var t = new eui.Label();
		this.cName = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "fzyc";
		t.size = 32;
		t.text = "1230";
		t.textAlign = "right";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.x = 303;
		t.y = 1;
		return t;
	};
	_proto.miaoshuLabel_i = function () {
		var t = new eui.Label();
		this.miaoshuLabel = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "1230";
		t.textAlign = "right";
		t.textColor = 0xb2b4b3;
		t.verticalAlign = "middle";
		t.width = 360;
		t.x = -5.5;
		t.y = 325;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 360;
		t.skinName = DaojuListItemSkin$Skin153;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.width = 366;
		t.x = 0;
		t.y = 378;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this._Image2_i(),this.goldLabel_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "main2_jinbi_png";
		t.touchEnabled = false;
		t.x = 95;
		t.y = 0;
		return t;
	};
	_proto.goldLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.goldLabel = t;
		t.anchorOffsetX = 0;
		t.font = "shuzi3_fnt";
		t.text = "222";
		t.touchEnabled = false;
		t.x = 169;
		t.y = 2;
		return t;
	};
	_proto.buyGroup_i = function () {
		var t = new eui.Group();
		this.buyGroup = t;
		t.height = 451;
		t.touchEnabled = true;
		t.width = 366;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return DaojuListItemSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/shop/diamond/ShopDiamondItemSKin.exml'] = window.ShopDiamondItemSKin = (function (_super) {
	__extends(ShopDiamondItemSKin, _super);
	function ShopDiamondItemSKin() {
		_super.call(this);
		this.skinParts = ["diamondImage","doubleImage","diamondLabel","renminbiImg","priceLabel"];
		
		this.height = 240;
		this.width = 340;
		this.elementsContent = [this._Image1_i(),this.diamondImage_i(),this.doubleImage_i(),this.diamondLabel_i(),this._Group1_i()];
	}
	var _proto = ShopDiamondItemSKin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "shop_diamond_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.diamondImage_i = function () {
		var t = new eui.Image();
		this.diamondImage = t;
		t.source = "shop_diamond_01_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.doubleImage_i = function () {
		var t = new eui.Image();
		this.doubleImage = t;
		t.source = "shop_diamond_double_png";
		t.x = 232;
		t.y = 61;
		return t;
	};
	_proto.diamondLabel_i = function () {
		var t = new eui.Label();
		this.diamondLabel = t;
		t.right = 20;
		t.size = 30;
		t.stroke = 3;
		t.strokeColor = 0xFFFFFF;
		t.text = "x5000";
		t.textColor = 0x9C43ED;
		t.y = 15;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 9;
		t.horizontalCenter = -6;
		t.elementsContent = [this.renminbiImg_i(),this.priceLabel_i()];
		return t;
	};
	_proto.renminbiImg_i = function () {
		var t = new eui.Image();
		this.renminbiImg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "charge_coin_big";
		t.touchEnabled = false;
		return t;
	};
	_proto.priceLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.priceLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "shuzi1_fnt";
		t.height = 35;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "5000";
		t.verticalCenter = 0;
		t.x = 72;
		return t;
	};
	return ShopDiamondItemSKin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/shop/diamond/ShopDiamondPanelSkin.exml'] = window.ShopDiamondPanelSkin = (function (_super) {
	__extends(ShopDiamondPanelSkin, _super);
	var ShopDiamondPanelSkin$Skin154 = 	(function (_super) {
		__extends(ShopDiamondPanelSkin$Skin154, _super);
		function ShopDiamondPanelSkin$Skin154() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopDiamondPanelSkin$Skin154.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "login2_yuanxinganniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "login2_fanhui_png";
			t.verticalCenter = 0;
			return t;
		};
		return ShopDiamondPanelSkin$Skin154;
	})(eui.Skin);

	function ShopDiamondPanelSkin() {
		_super.call(this);
		this.skinParts = ["heartPlugin","coinLabel","coinGroup","zhuanshiImg","diamondLabel","diamondGroup1","diamondGrp","scroller","backBtn","leftGroup","imgSelected"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Image1_i(),this.heartPlugin_i(),this.coinGroup_i(),this.diamondGroup1_i(),this._Image7_i(),this._Image8_i(),this.scroller_i(),this.leftGroup_i(),this.imgSelected_i()];
	}
	var _proto = ShopDiamondPanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "work2_bg_jpg";
		t.top = 0;
		return t;
	};
	_proto.heartPlugin_i = function () {
		var t = new HeartsPlugins();
		this.heartPlugin = t;
		t.left = 24;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "HeartsPluginSkin";
		t.top = 14;
		return t;
	};
	_proto.coinGroup_i = function () {
		var t = new eui.Group();
		this.coinGroup = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 48;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.x = 443;
		t.elementsContent = [this._Image2_i(),this.coinLabel_i(),this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(9,10,23,22);
		t.source = "main2_ditu_png";
		t.x = 2.0500000000000114;
		t.y = 1.9699999999999989;
		return t;
	};
	_proto.coinLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.coinLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "shuzi3_fnt";
		t.height = 37;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 72;
		t.y = 9;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 63;
		t.source = "charge_coin_big";
		t.width = 60;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "main2_jiahao1_png";
		t.x = 28.04999999999997;
		t.y = 20.96999999999997;
		return t;
	};
	_proto.diamondGroup1_i = function () {
		var t = new eui.Group();
		this.diamondGroup1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 48;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.x = 698;
		t.elementsContent = [this.zhuanshiImg_i(),this.diamondLabel_i(),this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto.zhuanshiImg_i = function () {
		var t = new eui.Image();
		this.zhuanshiImg = t;
		t.anchorOffsetX = 0;
		t.source = "main2_ditu_png";
		t.x = 21.51999999999997;
		t.y = 3.480000000000018;
		return t;
	};
	_proto.diamondLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.diamondLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "shuzi3_fnt";
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 80;
		t.y = 10;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "main2_zuanshi_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "main2_jiahao1_png";
		t.x = 31;
		t.y = 21;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 560;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(45,173,22,256);
		t.source = "shop_common_bottom_png";
		t.width = 1112;
		t.y = 150.04;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "shop_diamond_head_png";
		t.y = 142.36;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 486;
		t.scrollPolicyV = "off";
		t.skinName = "skins.ScrollerSkin";
		t.width = 1086;
		t.x = 97;
		t.y = 212;
		t.viewport = this.diamondGrp_i();
		return t;
	};
	_proto.diamondGrp_i = function () {
		var t = new eui.Group();
		this.diamondGrp = t;
		t.anchorOffsetY = 0;
		t.height = 484;
		t.layout = this._TileLayout1_i();
		t.elementsContent = [this._ShopDiamondItem1_i(),this._ShopDiamondItem2_i(),this._ShopDiamondItem3_i()];
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 12;
		t.paddingLeft = 27;
		t.paddingRight = 0;
		return t;
	};
	_proto._ShopDiamondItem1_i = function () {
		var t = new ShopDiamondItem();
		t.skinName = "ShopDiamondItemSKin";
		t.x = 97;
		t.y = 68;
		return t;
	};
	_proto._ShopDiamondItem2_i = function () {
		var t = new ShopDiamondItem();
		t.skinName = "ShopDiamondItemSKin";
		t.x = 107;
		t.y = 78;
		return t;
	};
	_proto._ShopDiamondItem3_i = function () {
		var t = new ShopDiamondItem();
		t.skinName = "ShopDiamondItemSKin";
		t.x = 117;
		t.y = 88;
		return t;
	};
	_proto.leftGroup_i = function () {
		var t = new eui.Group();
		this.leftGroup = t;
		t.height = 720;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = false;
		t.width = 1280;
		t.elementsContent = [this.backBtn_i()];
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Button();
		this.backBtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 1157;
		t.y = 21.52;
		t.skinName = ShopDiamondPanelSkin$Skin154;
		return t;
	};
	_proto.imgSelected_i = function () {
		var t = new eui.Image();
		this.imgSelected = t;
		t.scale9Grid = new egret.Rectangle(44,31,270,188);
		t.source = "shop_diamond_bg_selected_png";
		t.touchEnabled = false;
		t.width = 350;
		t.x = 97;
		t.y = 212;
		return t;
	};
	return ShopDiamondPanelSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/shop/gifttool/ShopGiftItemSkin.exml'] = window.ShopGiftItemSkin = (function (_super) {
	__extends(ShopGiftItemSkin, _super);
	function ShopGiftItemSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 300;
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
	}
	var _proto = ShopGiftItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "shop_gift_001_png";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 2;
		t.source = "shop_gift_di_bottom_png";
		t.y = 203;
		return t;
	};
	return ShopGiftItemSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/shop/gifttool/ShopGiftToolItemSkin.exml'] = window.ShopGiftToolItemSkin = (function (_super) {
	__extends(ShopGiftToolItemSkin, _super);
	function ShopGiftToolItemSkin() {
		_super.call(this);
		this.skinParts = ["daojuImg","limitLabel","limitGrp","nameLabel","contentLabel","nameGrp","goldImage","zhuanshiImg","renminbiImg","goldLabel","goldGrp"];
		
		this.height = 275;
		this.width = 270;
		this.elementsContent = [this._Group1_i(),this._Image3_i(),this.goldGrp_i()];
	}
	var _proto = ShopGiftToolItemSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.height = 198;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.daojuImg_i(),this.limitGrp_i(),this.nameGrp_i()];
		return t;
	};
	_proto.daojuImg_i = function () {
		var t = new eui.Image();
		this.daojuImg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shop_tool_dangao_png";
		t.x = 2;
		t.y = 0;
		return t;
	};
	_proto.limitGrp_i = function () {
		var t = new eui.Group();
		this.limitGrp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 37.5;
		t.y = 22;
		t.elementsContent = [this._Image1_i(),this.limitLabel_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shop_gift_di_02_png";
		return t;
	};
	_proto.limitLabel_i = function () {
		var t = new eui.Label();
		this.limitLabel = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "今日可购买：5/6";
		t.verticalCenter = 0;
		return t;
	};
	_proto.nameGrp_i = function () {
		var t = new eui.Group();
		this.nameGrp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 60;
		t.x = 2;
		t.elementsContent = [this._Image2_i(),this.nameLabel_i(),this.contentLabel_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shop_gift_di_01_png";
		t.x = -2;
		t.y = -2;
		return t;
	};
	_proto.nameLabel_i = function () {
		var t = new eui.Label();
		this.nameLabel = t;
		t.bold = true;
		t.right = 32;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "小蛋糕";
		t.x = 162;
		t.y = 6;
		return t;
	};
	_proto.contentLabel_i = function () {
		var t = new eui.Label();
		this.contentLabel = t;
		t.bold = true;
		t.bottom = 2;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "送女生可获得10点亲密度";
		t.textColor = 0xFFFE8A;
		t.x = 7;
		t.y = 36;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.source = "shop_gift_di_bottom_png";
		t.y = 199;
		return t;
	};
	_proto.goldGrp_i = function () {
		var t = new eui.Group();
		this.goldGrp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 63;
		t.horizontalCenter = 0;
		t.y = 201;
		t.elementsContent = [this.goldImage_i(),this.zhuanshiImg_i(),this.renminbiImg_i(),this.goldLabel_i()];
		return t;
	};
	_proto.goldImage_i = function () {
		var t = new eui.Image();
		this.goldImage = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "main2_jinbi_png";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.zhuanshiImg_i = function () {
		var t = new eui.Image();
		this.zhuanshiImg = t;
		t.source = "shop2_zhuanshi_png";
		t.verticalCenter = 2;
		t.x = 0;
		return t;
	};
	_proto.renminbiImg_i = function () {
		var t = new eui.Image();
		this.renminbiImg = t;
		t.source = "charge_coin_big";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.x = -7;
		return t;
	};
	_proto.goldLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.goldLabel = t;
		t.font = "shuzi3_fnt";
		t.left = 57;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "16000";
		t.verticalCenter = 0;
		return t;
	};
	return ShopGiftToolItemSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/shop/gifttool/ShopGiftToolPartSkin.exml'] = window.ShopGiftToolPartSkin = (function (_super) {
	__extends(ShopGiftToolPartSkin, _super);
	var ShopGiftToolPartSkin$Skin155 = 	(function (_super) {
		__extends(ShopGiftToolPartSkin$Skin155, _super);
		function ShopGiftToolPartSkin$Skin155() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopGiftToolPartSkin$Skin155.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bag2_jianhao_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ShopGiftToolPartSkin$Skin155;
	})(eui.Skin);

	var ShopGiftToolPartSkin$Skin156 = 	(function (_super) {
		__extends(ShopGiftToolPartSkin$Skin156, _super);
		function ShopGiftToolPartSkin$Skin156() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopGiftToolPartSkin$Skin156.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bag2_jiahao_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ShopGiftToolPartSkin$Skin156;
	})(eui.Skin);

	var ShopGiftToolPartSkin$Skin157 = 	(function (_super) {
		__extends(ShopGiftToolPartSkin$Skin157, _super);
		function ShopGiftToolPartSkin$Skin157() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopGiftToolPartSkin$Skin157.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bag2_jianhao1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ShopGiftToolPartSkin$Skin157;
	})(eui.Skin);

	var ShopGiftToolPartSkin$Skin158 = 	(function (_super) {
		__extends(ShopGiftToolPartSkin$Skin158, _super);
		function ShopGiftToolPartSkin$Skin158() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopGiftToolPartSkin$Skin158.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bag2_jiahao1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ShopGiftToolPartSkin$Skin158;
	})(eui.Skin);

	var ShopGiftToolPartSkin$Skin159 = 	(function (_super) {
		__extends(ShopGiftToolPartSkin$Skin159, _super);
		function ShopGiftToolPartSkin$Skin159() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bag2_lvseanniu_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image2","source","weixin2_huiseanniu_png")
					])
			];
		}
		var _proto = ShopGiftToolPartSkin$Skin159.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bag2_lvseanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.height = 86;
			t.width = 191;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.horizontalCenter = 0;
			t.size = 40;
			t.verticalCenter = -5;
			return t;
		};
		return ShopGiftToolPartSkin$Skin159;
	})(eui.Skin);

	function ShopGiftToolPartSkin() {
		_super.call(this);
		this.skinParts = ["giftImg","limitLabel","maxcountLabel","limitGrp","titleLabel","contentLabel","contentGrp","jianBtn","jiaBtn","countLabel","nojianBtn","nojiaBtn","xiangouGroup","buyLabel","buyButton","buyedLabel","payImage","goldLabel"];
		
		this.height = 550;
		this.width = 343;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this.xiangouGroup_i(),this.buyLabel_i(),this.buyButton_i(),this.buyedLabel_i(),this._Group2_i()];
	}
	var _proto = ShopGiftToolPartSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(37,39,10,33);
		t.source = "shop_gifttool_buy_png";
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 25;
		t.elementsContent = [this._Image2_i(),this.giftImg_i(),this.limitGrp_i(),this.contentGrp_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shop_gifttool_02_png";
		return t;
	};
	_proto.giftImg_i = function () {
		var t = new eui.Image();
		this.giftImg = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shop_tool_dangao_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.limitGrp_i = function () {
		var t = new eui.Group();
		this.limitGrp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.x = 94.96;
		t.y = 21.99;
		t.elementsContent = [this._Image3_i(),this.limitLabel_i(),this.maxcountLabel_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shop_gift_di_02_png";
		return t;
	};
	_proto.limitLabel_i = function () {
		var t = new eui.Label();
		this.limitLabel = t;
		t.bold = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "今日可购买：";
		t.verticalCenter = 0;
		t.x = 13;
		return t;
	};
	_proto.maxcountLabel_i = function () {
		var t = new eui.Label();
		this.maxcountLabel = t;
		t.bold = true;
		t.size = 22;
		t.text = "5/6";
		t.verticalCenter = 0;
		t.x = 140;
		return t;
	};
	_proto.contentGrp_i = function () {
		var t = new eui.Group();
		this.contentGrp = t;
		t.height = 62;
		t.horizontalCenter = 0;
		t.width = 262;
		t.y = 151;
		t.elementsContent = [this._Image4_i(),this.titleLabel_i(),this.contentLabel_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shop_gift_di_01_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.titleLabel_i = function () {
		var t = new eui.Label();
		this.titleLabel = t;
		t.bold = true;
		t.right = 32;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "Cake 小蛋糕";
		t.x = 127;
		t.y = 9;
		return t;
	};
	_proto.contentLabel_i = function () {
		var t = new eui.Label();
		this.contentLabel = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "送女生可获得100点亲密度";
		t.textColor = 0xfffe8a;
		t.x = 7;
		t.y = 36;
		return t;
	};
	_proto.xiangouGroup_i = function () {
		var t = new eui.Group();
		this.xiangouGroup = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.width = 339.34;
		t.y = 311.31;
		t.elementsContent = [this._Image5_i(),this.jianBtn_i(),this.jiaBtn_i(),this.countLabel_i(),this.nojianBtn_i(),this.nojiaBtn_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "shop_gifttool_03_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.jianBtn_i = function () {
		var t = new eui.Button();
		this.jianBtn = t;
		t.label = "";
		t.x = 16;
		t.y = 0;
		t.skinName = ShopGiftToolPartSkin$Skin155;
		return t;
	};
	_proto.jiaBtn_i = function () {
		var t = new eui.Button();
		this.jiaBtn = t;
		t.label = "";
		t.right = 16;
		t.y = 0;
		t.skinName = ShopGiftToolPartSkin$Skin156;
		return t;
	};
	_proto.countLabel_i = function () {
		var t = new eui.Label();
		this.countLabel = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "fzyc";
		t.horizontalCenter = 0;
		t.size = 38;
		t.text = "999";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 97;
		return t;
	};
	_proto.nojianBtn_i = function () {
		var t = new eui.Button();
		this.nojianBtn = t;
		t.label = "";
		t.x = 16;
		t.y = 0;
		t.skinName = ShopGiftToolPartSkin$Skin157;
		return t;
	};
	_proto.nojiaBtn_i = function () {
		var t = new eui.Button();
		this.nojiaBtn = t;
		t.label = "";
		t.right = 16;
		t.y = 0;
		t.skinName = ShopGiftToolPartSkin$Skin158;
		return t;
	};
	_proto.buyLabel_i = function () {
		var t = new eui.Label();
		this.buyLabel = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "购买数量 ";
		t.textColor = 0x9e8281;
		t.y = 267.21;
		return t;
	};
	_proto.buyButton_i = function () {
		var t = new eui.Button();
		this.buyButton = t;
		t.horizontalCenter = 0;
		t.label = "购买";
		t.y = 445.34;
		t.skinName = ShopGiftToolPartSkin$Skin159;
		return t;
	};
	_proto.buyedLabel_i = function () {
		var t = new eui.Label();
		this.buyedLabel = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 36;
		t.text = "已购买";
		t.textColor = 0xa6a6a6;
		t.visible = false;
		t.y = 466;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 54;
		t.horizontalCenter = 0;
		t.y = 388;
		t.elementsContent = [this.payImage_i(),this.goldLabel_i()];
		return t;
	};
	_proto.payImage_i = function () {
		var t = new eui.Image();
		this.payImage = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "main2_jinbi_png";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.goldLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.goldLabel = t;
		t.font = "shuzi3_fnt";
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "16000";
		t.verticalCenter = 0;
		t.x = 67.69;
		return t;
	};
	return ShopGiftToolPartSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/shop/gifttool/ShopGiftPartSkin.exml'] = window.ShopGiftPartSkin = (function (_super) {
	__extends(ShopGiftPartSkin, _super);
	function ShopGiftPartSkin() {
		_super.call(this);
		this.skinParts = ["giftGrp","giftScroller","giftPart"];
		
		this.height = 572;
		this.width = 1238;
		this.elementsContent = [this.giftScroller_i(),this.giftPart_i()];
	}
	var _proto = ShopGiftPartSkin.prototype;

	_proto.giftScroller_i = function () {
		var t = new eui.Scroller();
		this.giftScroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 572;
		t.skinName = "skins.ScrollerSkin";
		t.width = 869.88;
		t.y = 0;
		t.viewport = this.giftGrp_i();
		return t;
	};
	_proto.giftGrp_i = function () {
		var t = new eui.Group();
		this.giftGrp = t;
		t.anchorOffsetY = 0;
		t.layout = this._TileLayout1_i();
		t.elementsContent = [this._ShopGiftToolItem1_i(),this._ShopGiftToolItem2_i(),this._ShopGiftToolItem3_i(),this._ShopGiftToolItem4_i(),this._ShopGiftToolItem5_i(),this._ShopGiftToolItem6_i()];
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 26;
		t.verticalGap = 10;
		return t;
	};
	_proto._ShopGiftToolItem1_i = function () {
		var t = new ShopGiftToolItem();
		t.skinName = "ShopGiftToolItemSkin";
		return t;
	};
	_proto._ShopGiftToolItem2_i = function () {
		var t = new ShopGiftToolItem();
		t.skinName = "ShopGiftToolItemSkin";
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._ShopGiftToolItem3_i = function () {
		var t = new ShopGiftToolItem();
		t.skinName = "ShopGiftToolItemSkin";
		t.x = 20;
		t.y = 20;
		return t;
	};
	_proto._ShopGiftToolItem4_i = function () {
		var t = new ShopGiftToolItem();
		t.skinName = "ShopGiftToolItemSkin";
		t.x = 30;
		t.y = 30;
		return t;
	};
	_proto._ShopGiftToolItem5_i = function () {
		var t = new ShopGiftToolItem();
		t.skinName = "ShopGiftToolItemSkin";
		t.x = 40;
		t.y = 40;
		return t;
	};
	_proto._ShopGiftToolItem6_i = function () {
		var t = new ShopGiftToolItem();
		t.skinName = "ShopGiftToolItemSkin";
		t.x = 50;
		t.y = 50;
		return t;
	};
	_proto.giftPart_i = function () {
		var t = new ShopGiftToolPart();
		this.giftPart = t;
		t.right = 0;
		t.skinName = "ShopGiftToolPartSkin";
		t.y = 0;
		return t;
	};
	return ShopGiftPartSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/shop/gifttool/ShopToolPartSkin.exml'] = window.ShopToolPartSkin = (function (_super) {
	__extends(ShopToolPartSkin, _super);
	function ShopToolPartSkin() {
		_super.call(this);
		this.skinParts = ["toolGrp","toolScroller","toolPart"];
		
		this.height = 572;
		this.width = 1238;
		this.elementsContent = [this.toolScroller_i(),this.toolPart_i()];
	}
	var _proto = ShopToolPartSkin.prototype;

	_proto.toolScroller_i = function () {
		var t = new eui.Scroller();
		this.toolScroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 572;
		t.skinName = "skins.ScrollerSkin";
		t.width = 869.88;
		t.y = 0;
		t.viewport = this.toolGrp_i();
		return t;
	};
	_proto.toolGrp_i = function () {
		var t = new eui.Group();
		this.toolGrp = t;
		t.anchorOffsetY = 0;
		t.layout = this._TileLayout1_i();
		t.elementsContent = [this._ShopGiftToolItem1_i(),this._ShopGiftToolItem2_i(),this._ShopGiftToolItem3_i(),this._ShopGiftToolItem4_i(),this._ShopGiftToolItem5_i(),this._ShopGiftToolItem6_i()];
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 26;
		t.verticalGap = 12;
		return t;
	};
	_proto._ShopGiftToolItem1_i = function () {
		var t = new ShopGiftToolItem();
		t.skinName = "ShopGiftToolItemSkin";
		return t;
	};
	_proto._ShopGiftToolItem2_i = function () {
		var t = new ShopGiftToolItem();
		t.skinName = "ShopGiftToolItemSkin";
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._ShopGiftToolItem3_i = function () {
		var t = new ShopGiftToolItem();
		t.skinName = "ShopGiftToolItemSkin";
		t.x = 20;
		t.y = 20;
		return t;
	};
	_proto._ShopGiftToolItem4_i = function () {
		var t = new ShopGiftToolItem();
		t.skinName = "ShopGiftToolItemSkin";
		t.x = 30;
		t.y = 30;
		return t;
	};
	_proto._ShopGiftToolItem5_i = function () {
		var t = new ShopGiftToolItem();
		t.skinName = "ShopGiftToolItemSkin";
		t.x = 40;
		t.y = 40;
		return t;
	};
	_proto._ShopGiftToolItem6_i = function () {
		var t = new ShopGiftToolItem();
		t.skinName = "ShopGiftToolItemSkin";
		t.x = 50;
		t.y = 50;
		return t;
	};
	_proto.toolPart_i = function () {
		var t = new ShopGiftToolPart();
		this.toolPart = t;
		t.right = 0;
		t.skinName = "ShopGiftToolPartSkin";
		t.y = 0;
		return t;
	};
	return ShopToolPartSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/scene/game/ui/CoinUISkin.exml'] = window.CoinUISkin = (function (_super) {
	__extends(CoinUISkin, _super);
	function CoinUISkin() {
		_super.call(this);
		this.skinParts = ["coinLabel"];
		
		this.height = 70;
		this.width = 250;
		this.elementsContent = [this._Image1_i(),this.coinLabel_i(),this._Image2_i(),this._Image3_i()];
	}
	var _proto = CoinUISkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.source = "main2_ditu_png";
		t.x = 10;
		t.y = 8.48;
		return t;
	};
	_proto.coinLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.coinLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "shuzi3_fnt";
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 78;
		t.y = 16.56;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 63;
		t.source = "charge_coin_big";
		t.width = 60;
		t.x = 3;
		t.y = 5;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "main2_jiahao1_png";
		t.x = 31;
		t.y = 26;
		return t;
	};
	return CoinUISkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/shop/gifttool/ShopGiftToolPanelSkin.exml'] = window.ShopGiftToolPanelSkin = (function (_super) {
	__extends(ShopGiftToolPanelSkin, _super);
	var ShopGiftToolPanelSkin$Skin160 = 	(function (_super) {
		__extends(ShopGiftToolPanelSkin$Skin160, _super);
		function ShopGiftToolPanelSkin$Skin160() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","shop_tool_btn01_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopGiftToolPanelSkin$Skin160.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "shop_tool_btn02_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.fontFamily = "fzyc";
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ShopGiftToolPanelSkin$Skin160;
	})(eui.Skin);

	var ShopGiftToolPanelSkin$Skin161 = 	(function (_super) {
		__extends(ShopGiftToolPanelSkin$Skin161, _super);
		function ShopGiftToolPanelSkin$Skin161() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","shop_gift_btn01_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopGiftToolPanelSkin$Skin161.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "shop_gift_btn02_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.fontFamily = "fzyc";
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ShopGiftToolPanelSkin$Skin161;
	})(eui.Skin);

	var ShopGiftToolPanelSkin$Skin162 = 	(function (_super) {
		__extends(ShopGiftToolPanelSkin$Skin162, _super);
		function ShopGiftToolPanelSkin$Skin162() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopGiftToolPanelSkin$Skin162.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "login2_yuanxinganniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "login2_fanhui_png";
			t.verticalCenter = 0;
			return t;
		};
		return ShopGiftToolPanelSkin$Skin162;
	})(eui.Skin);

	function ShopGiftToolPanelSkin() {
		_super.call(this);
		this.skinParts = ["radioBtn0","radioBtn1","radioGrp","jinbiImg","goldLabel","goldGroup","zhuanshiImg","diamondLabel","diamondGroup","shopToolPart","shopGiftPart","viewStack","backBtn","leftGroup","coinGroup","contentGroup"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this.contentGroup_i()];
	}
	var _proto = ShopGiftToolPanelSkin.prototype;

	_proto.contentGroup_i = function () {
		var t = new eui.Group();
		this.contentGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this.radioGrp_i(),this.goldGroup_i(),this.diamondGroup_i(),this.viewStack_i(),this.leftGroup_i(),this.coinGroup_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "work2_bg_jpg";
		t.top = 0;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 126;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 26;
		t.y = 26;
		t.elementsContent = [this._Image2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shop_gifttool_01_png";
		t.x = 4;
		t.y = 20.48;
		return t;
	};
	_proto.radioGrp_i = function () {
		var t = new eui.Group();
		this.radioGrp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 91.69;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 512.3;
		t.x = 31.82;
		t.y = 44.89;
		t.layout = this._TileLayout1_i();
		t.elementsContent = [this.radioBtn0_i(),this.radioBtn1_i()];
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 14;
		t.paddingLeft = 20;
		t.paddingRight = 0;
		t.paddingTop = 6;
		return t;
	};
	_proto.radioBtn0_i = function () {
		var t = new eui.RadioButton();
		this.radioBtn0 = t;
		t.groupName = "radioGrp";
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.selected = true;
		t.value = "0";
		t.x = 14.419999999999987;
		t.y = 81.88;
		t.skinName = ShopGiftToolPanelSkin$Skin160;
		return t;
	};
	_proto.radioBtn1_i = function () {
		var t = new eui.RadioButton();
		this.radioBtn1 = t;
		t.groupName = "radioGrp";
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.value = "1";
		t.x = 14.419999999999987;
		t.y = 81.88;
		t.skinName = ShopGiftToolPanelSkin$Skin161;
		return t;
	};
	_proto.goldGroup_i = function () {
		var t = new eui.Group();
		this.goldGroup = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 48;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.x = 583;
		t.y = 48;
		t.elementsContent = [this.jinbiImg_i(),this.goldLabel_i(),this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto.jinbiImg_i = function () {
		var t = new eui.Image();
		this.jinbiImg = t;
		t.scale9Grid = new egret.Rectangle(9,10,23,22);
		t.source = "main2_ditu_png";
		t.x = 2.0500000000000114;
		t.y = 1.9699999999999989;
		return t;
	};
	_proto.goldLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.goldLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "shuzi3_fnt";
		t.height = 37;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 72;
		t.y = 10;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "main2_jinbi_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "main2_jiahao2_png";
		t.x = 25;
		t.y = 19;
		return t;
	};
	_proto.diamondGroup_i = function () {
		var t = new eui.Group();
		this.diamondGroup = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 48;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.x = 838;
		t.y = 48;
		t.elementsContent = [this.zhuanshiImg_i(),this.diamondLabel_i(),this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto.zhuanshiImg_i = function () {
		var t = new eui.Image();
		this.zhuanshiImg = t;
		t.anchorOffsetX = 0;
		t.source = "main2_ditu_png";
		t.x = 21.51999999999997;
		t.y = 3.480000000000018;
		return t;
	};
	_proto.diamondLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.diamondLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "shuzi3_fnt";
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 80;
		t.y = 10;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "main2_zuanshi_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "main2_jiahao1_png";
		t.x = 31;
		t.y = 21;
		return t;
	};
	_proto.viewStack_i = function () {
		var t = new eui.ViewStack();
		this.viewStack = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 21;
		t.right = 21;
		t.scaleX = 1;
		t.selectedIndex = 1;
		t.top = 148;
		t.elementsContent = [this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 572;
		t.name = "Group";
		t.width = 1238;
		t.elementsContent = [this.shopToolPart_i()];
		return t;
	};
	_proto.shopToolPart_i = function () {
		var t = new ShopToolPart();
		this.shopToolPart = t;
		t.skinName = "ShopToolPartSkin";
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 538;
		t.name = "Group";
		t.width = 1238;
		t.elementsContent = [this.shopGiftPart_i()];
		return t;
	};
	_proto.shopGiftPart_i = function () {
		var t = new ShopGiftPart();
		this.shopGiftPart = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "ShopGiftPartSkin";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.leftGroup_i = function () {
		var t = new eui.Group();
		this.leftGroup = t;
		t.height = 720;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.touchEnabled = false;
		t.width = 1280;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.backBtn_i()];
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Button();
		this.backBtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 1157;
		t.y = 21.52;
		t.skinName = ShopGiftToolPanelSkin$Skin162;
		return t;
	};
	_proto.coinGroup_i = function () {
		var t = new CoinUI();
		this.coinGroup = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "CoinUISkin";
		t.visible = false;
		t.x = 577.05;
		t.y = 41.48;
		return t;
	};
	return ShopGiftToolPanelSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/shop/gold/ShopGoldItemSkin.exml'] = window.ShopGoldItemSkin = (function (_super) {
	__extends(ShopGoldItemSkin, _super);
	function ShopGoldItemSkin() {
		_super.call(this);
		this.skinParts = ["goldImage","goldLabel","zhuanshiImg","priceLabel"];
		
		this.height = 240;
		this.width = 340;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = ShopGoldItemSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this.goldImage_i(),this.goldLabel_i(),this._Group1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shop_gold_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.goldImage_i = function () {
		var t = new eui.Image();
		this.goldImage = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shop_gold_01_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.goldLabel_i = function () {
		var t = new eui.Label();
		this.goldLabel = t;
		t.right = 20;
		t.size = 30;
		t.stroke = 3;
		t.strokeColor = 0xFFFFFF;
		t.text = "x5000";
		t.textColor = 0xef5335;
		t.y = 15;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 22;
		t.horizontalCenter = 0;
		t.elementsContent = [this.zhuanshiImg_i(),this.priceLabel_i()];
		return t;
	};
	_proto.zhuanshiImg_i = function () {
		var t = new eui.Image();
		this.zhuanshiImg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shop2_zhuanshi_png";
		return t;
	};
	_proto.priceLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.priceLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "shuzi1_fnt";
		t.height = 38;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "50000";
		t.verticalCenter = 0;
		t.x = 58;
		return t;
	};
	return ShopGoldItemSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/shop/gold/ShopGoldPanelSkin.exml'] = window.ShopGoldPanelSkin = (function (_super) {
	__extends(ShopGoldPanelSkin, _super);
	var ShopGoldPanelSkin$Skin163 = 	(function (_super) {
		__extends(ShopGoldPanelSkin$Skin163, _super);
		function ShopGoldPanelSkin$Skin163() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopGoldPanelSkin$Skin163.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "login2_yuanxinganniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "login2_fanhui_png";
			t.verticalCenter = 0;
			return t;
		};
		return ShopGoldPanelSkin$Skin163;
	})(eui.Skin);

	function ShopGoldPanelSkin() {
		_super.call(this);
		this.skinParts = ["heartPlugin","jinbiImg","goldLabel","goldGroup","zhuanshiImg","diamondLabel","diamondGroup","goldGrp","backBtn","leftGroup"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Image1_i(),this.heartPlugin_i(),this.goldGroup_i(),this.diamondGroup_i(),this._Image6_i(),this._Image7_i(),this._Scroller1_i(),this.leftGroup_i()];
	}
	var _proto = ShopGoldPanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "work2_bg_jpg";
		t.top = 0;
		return t;
	};
	_proto.heartPlugin_i = function () {
		var t = new HeartsPlugins();
		this.heartPlugin = t;
		t.left = 24;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "HeartsPluginSkin";
		t.top = 14;
		return t;
	};
	_proto.goldGroup_i = function () {
		var t = new eui.Group();
		this.goldGroup = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 48;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.x = 443;
		t.elementsContent = [this.jinbiImg_i(),this.goldLabel_i(),this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto.jinbiImg_i = function () {
		var t = new eui.Image();
		this.jinbiImg = t;
		t.scale9Grid = new egret.Rectangle(9,10,23,22);
		t.source = "main2_ditu_png";
		t.x = 2.0500000000000114;
		t.y = 1.9699999999999989;
		return t;
	};
	_proto.goldLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.goldLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "shuzi3_fnt";
		t.height = 37;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 72;
		t.y = 9;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "main2_jinbi_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "main2_jiahao2_png";
		t.x = 28.04999999999997;
		t.y = 20.96999999999997;
		return t;
	};
	_proto.diamondGroup_i = function () {
		var t = new eui.Group();
		this.diamondGroup = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 48;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.x = 698;
		t.elementsContent = [this.zhuanshiImg_i(),this.diamondLabel_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto.zhuanshiImg_i = function () {
		var t = new eui.Image();
		this.zhuanshiImg = t;
		t.anchorOffsetX = 0;
		t.source = "main2_ditu_png";
		t.x = 21.51999999999997;
		t.y = 3.480000000000018;
		return t;
	};
	_proto.diamondLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.diamondLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "shuzi3_fnt";
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 80;
		t.y = 10;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "main2_zuanshi_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "main2_jiahao1_png";
		t.x = 31;
		t.y = 21;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 561.33;
		t.scale9Grid = new egret.Rectangle(45,173,22,256);
		t.source = "shop_common_bottom_png";
		t.width = 1112;
		t.x = 84.7;
		t.y = 150.04;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "shop_gold_head_png";
		t.x = 294;
		t.y = 136.29;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 474;
		t.skinName = "skins.ScrollerSkin";
		t.width = 1086.36;
		t.x = 97;
		t.y = 218.36;
		t.viewport = this.goldGrp_i();
		return t;
	};
	_proto.goldGrp_i = function () {
		var t = new eui.Group();
		this.goldGrp = t;
		t.layout = this._TileLayout1_i();
		t.elementsContent = [this._ShopGoldItem1_i(),this._ShopGoldItem2_i(),this._ShopGoldItem3_i(),this._ShopGoldItem4_i(),this._ShopGoldItem5_i(),this._ShopGoldItem6_i()];
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 12;
		t.paddingLeft = 27;
		t.paddingRight = 0;
		return t;
	};
	_proto._ShopGoldItem1_i = function () {
		var t = new ShopGoldItem();
		t.skinName = "ShopGoldItemSkin";
		t.x = 79;
		t.y = 44;
		return t;
	};
	_proto._ShopGoldItem2_i = function () {
		var t = new ShopGoldItem();
		t.skinName = "ShopGoldItemSkin";
		t.x = 89;
		t.y = 54;
		return t;
	};
	_proto._ShopGoldItem3_i = function () {
		var t = new ShopGoldItem();
		t.skinName = "ShopGoldItemSkin";
		t.x = 99;
		t.y = 64;
		return t;
	};
	_proto._ShopGoldItem4_i = function () {
		var t = new ShopGoldItem();
		t.skinName = "ShopGoldItemSkin";
		t.x = 109;
		t.y = 74;
		return t;
	};
	_proto._ShopGoldItem5_i = function () {
		var t = new ShopGoldItem();
		t.skinName = "ShopGoldItemSkin";
		t.x = 418;
		t.y = 3.18;
		return t;
	};
	_proto._ShopGoldItem6_i = function () {
		var t = new ShopGoldItem();
		t.skinName = "ShopGoldItemSkin";
		t.x = 99;
		t.y = 64;
		return t;
	};
	_proto.leftGroup_i = function () {
		var t = new eui.Group();
		this.leftGroup = t;
		t.height = 720;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = false;
		t.width = 1280;
		t.elementsContent = [this.backBtn_i()];
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Button();
		this.backBtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 1157;
		t.y = 21.52;
		t.skinName = ShopGoldPanelSkin$Skin163;
		return t;
	};
	return ShopGoldPanelSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/shop/ShopDiamondsListItemSkin.exml'] = window.ShopDiamondsListItemSkin = (function (_super) {
	__extends(ShopDiamondsListItemSkin, _super);
	var ShopDiamondsListItemSkin$Skin164 = 	(function (_super) {
		__extends(ShopDiamondsListItemSkin$Skin164, _super);
		function ShopDiamondsListItemSkin$Skin164() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopDiamondsListItemSkin$Skin164.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "shop2_anniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ShopDiamondsListItemSkin$Skin164;
	})(eui.Skin);

	function ShopDiamondsListItemSkin() {
		_super.call(this);
		this.skinParts = ["maskImg","daojuImg","doubleImg","zhuanshiImg","renminbiImg","goldLabel"];
		
		this.elementsContent = [this.maskImg_i(),this.daojuImg_i(),this.doubleImg_i(),this._Button1_i(),this._Group3_i()];
	}
	var _proto = ShopDiamondsListItemSkin.prototype;

	_proto.maskImg_i = function () {
		var t = new eui.Image();
		this.maskImg = t;
		t.anchorOffsetY = 0;
		t.source = "shop2_ditu_png";
		t.visible = false;
		return t;
	};
	_proto.daojuImg_i = function () {
		var t = new eui.Image();
		this.daojuImg = t;
		t.height = 360;
		t.width = 366;
		return t;
	};
	_proto.doubleImg_i = function () {
		var t = new eui.Image();
		this.doubleImg = t;
		t.source = "shop2_double_png";
		t.x = 213;
		t.y = 39;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 360;
		t.skinName = ShopDiamondsListItemSkin$Skin164;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 60;
		t.width = 366;
		t.x = 0;
		t.y = 377.5;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 45;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 114;
		t.y = 10;
		t.elementsContent = [this.zhuanshiImg_i(),this.renminbiImg_i()];
		return t;
	};
	_proto.zhuanshiImg_i = function () {
		var t = new eui.Image();
		this.zhuanshiImg = t;
		t.source = "shop2_zhuanshi_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.renminbiImg_i = function () {
		var t = new eui.Image();
		this.renminbiImg = t;
		t.source = "shop2_renminbi_png";
		t.touchEnabled = false;
		t.x = 10;
		t.y = 2;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 261;
		t.y = 10;
		t.elementsContent = [this.goldLabel_i()];
		return t;
	};
	_proto.goldLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.goldLabel = t;
		t.anchorOffsetX = 0;
		t.font = "shuzi3_fnt";
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "00";
		t.touchEnabled = false;
		t.x = -1;
		t.y = 3;
		return t;
	};
	return ShopDiamondsListItemSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/shop/ShopGoldListItemSkin.exml'] = window.ShopGoldListItemSkin = (function (_super) {
	__extends(ShopGoldListItemSkin, _super);
	var ShopGoldListItemSkin$Skin165 = 	(function (_super) {
		__extends(ShopGoldListItemSkin$Skin165, _super);
		function ShopGoldListItemSkin$Skin165() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopGoldListItemSkin$Skin165.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "shop2_anniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ShopGoldListItemSkin$Skin165;
	})(eui.Skin);

	function ShopGoldListItemSkin() {
		_super.call(this);
		this.skinParts = ["maskImg","daojuImg","zhuanshiImg","renminbiImg","goldLabel"];
		
		this.elementsContent = [this.maskImg_i(),this.daojuImg_i(),this._Button1_i(),this._Group3_i()];
	}
	var _proto = ShopGoldListItemSkin.prototype;

	_proto.maskImg_i = function () {
		var t = new eui.Image();
		this.maskImg = t;
		t.anchorOffsetY = 0;
		t.source = "shop2_ditu_png";
		t.visible = false;
		return t;
	};
	_proto.daojuImg_i = function () {
		var t = new eui.Image();
		this.daojuImg = t;
		t.height = 360;
		t.width = 366;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 360;
		t.skinName = ShopGoldListItemSkin$Skin165;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 60;
		t.width = 366;
		t.x = 0;
		t.y = 377.5;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 45;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 114;
		t.y = 10;
		t.elementsContent = [this.zhuanshiImg_i(),this.renminbiImg_i()];
		return t;
	};
	_proto.zhuanshiImg_i = function () {
		var t = new eui.Image();
		this.zhuanshiImg = t;
		t.source = "shop2_zhuanshi_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.renminbiImg_i = function () {
		var t = new eui.Image();
		this.renminbiImg = t;
		t.source = "shop2_renminbi_png";
		t.touchEnabled = false;
		t.x = 10;
		t.y = 2;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 261;
		t.y = 10;
		t.elementsContent = [this.goldLabel_i()];
		return t;
	};
	_proto.goldLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.goldLabel = t;
		t.anchorOffsetX = 0;
		t.font = "shuzi3_fnt";
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "00";
		t.touchEnabled = false;
		t.x = -1;
		t.y = 3;
		return t;
	};
	return ShopGoldListItemSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/shop/ShopPanelSkin.exml'] = window.ShopPanelSkin = (function (_super) {
	__extends(ShopPanelSkin, _super);
	var ShopPanelSkin$Skin166 = 	(function (_super) {
		__extends(ShopPanelSkin$Skin166, _super);
		function ShopPanelSkin$Skin166() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this._Image2_i();
			
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.AddItems("_Image2","",1,""),
						new eui.SetProperty("_Image1","source","shop2_xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopPanelSkin$Skin166.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "shop2_xiangoulibao_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.horizontalCenter = 0;
			t.source = "shop2_xiangoulibai1_png";
			t.y = 23;
			return t;
		};
		return ShopPanelSkin$Skin166;
	})(eui.Skin);

	var ShopPanelSkin$Skin167 = 	(function (_super) {
		__extends(ShopPanelSkin$Skin167, _super);
		function ShopPanelSkin$Skin167() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this._Image2_i();
			
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.AddItems("_Image2","",1,""),
						new eui.SetProperty("_Image1","source","shop2_xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopPanelSkin$Skin167.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "shop2_goumailibao_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.horizontalCenter = 0;
			t.source = "shop2_goumailibao1_png";
			t.y = 23;
			return t;
		};
		return ShopPanelSkin$Skin167;
	})(eui.Skin);

	var ShopPanelSkin$Skin168 = 	(function (_super) {
		__extends(ShopPanelSkin$Skin168, _super);
		function ShopPanelSkin$Skin168() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this._Image2_i();
			
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.AddItems("_Image2","",1,""),
						new eui.SetProperty("_Image1","source","shop2_xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopPanelSkin$Skin168.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "shop2_goumaizhuanshi_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.horizontalCenter = 0;
			t.source = "shop2_goumaizhuanshi2_png";
			t.y = 23;
			return t;
		};
		return ShopPanelSkin$Skin168;
	})(eui.Skin);

	var ShopPanelSkin$Skin169 = 	(function (_super) {
		__extends(ShopPanelSkin$Skin169, _super);
		function ShopPanelSkin$Skin169() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this._Image2_i();
			
			this.states = [
				new eui.State ("up",
					[
						new eui.SetProperty("labelDisplay","width",270),
						new eui.SetProperty("labelDisplay","height",92)
					])
				,
				new eui.State ("down",
					[
						new eui.AddItems("_Image2","",1,""),
						new eui.SetProperty("_Image1","source","shop2_xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","shop2_goumaijinbi_png")
					])
			];
		}
		var _proto = ShopPanelSkin$Skin169.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "shop2_goumaijinbi_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.horizontalCenter = 0;
			t.source = "shop2_goumaijinbi1_png";
			t.y = 24;
			return t;
		};
		return ShopPanelSkin$Skin169;
	})(eui.Skin);

	var ShopPanelSkin$Skin170 = 	(function (_super) {
		__extends(ShopPanelSkin$Skin170, _super);
		function ShopPanelSkin$Skin170() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this._Image2_i();
			
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.AddItems("_Image2","",1,""),
						new eui.SetProperty("_Image1","y",-1.33),
						new eui.SetProperty("_Image1","source","shop2_xuanzhong_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","y",0),
						new eui.SetProperty("_Image1","anchorOffsetX",0),
						new eui.SetProperty("_Image1","width",240)
					])
			];
		}
		var _proto = ShopPanelSkin$Skin170.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "shop2_goumaidaju_png";
			t.percentWidth = 100;
			t.y = -2.66;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.horizontalCenter = 0;
			t.source = "shop2_goumaidaoju1_png";
			t.y = 21.01;
			return t;
		};
		return ShopPanelSkin$Skin170;
	})(eui.Skin);

	var ShopPanelSkin$Skin171 = 	(function (_super) {
		__extends(ShopPanelSkin$Skin171, _super);
		function ShopPanelSkin$Skin171() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopPanelSkin$Skin171.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "login2_yuanxinganniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "login2_fanhui_png";
			t.verticalCenter = 0;
			return t;
		};
		return ShopPanelSkin$Skin171;
	})(eui.Skin);

	function ShopPanelSkin() {
		_super.call(this);
		this.skinParts = ["xiangouGroup","xiangouScroller","chaozhiGroup","chaozhiScroller","zhuanshiGroup","zhuanshiScroller","goldGroup","goldScroller","daojuGroup","daojuScroller","shopViewStack","xiangouRadioBtn","goumaiRadioBtn","diamontRadioBtn","goldRadioBtn","daojuRadioBtn","btnGroup","heartPlugin","jinbiImg","goldLabel","goldGroup1","zhuanshiImg","diamendLabel","diamondGroup1","backBtn","leftGroup"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.shopViewStack_i(),this.btnGroup_i(),this.heartPlugin_i(),this.goldGroup1_i(),this.diamondGroup1_i(),this.leftGroup_i()];
	}
	var _proto = ShopPanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "work2_bg_jpg";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shop2_biaoqian_png";
		t.verticalCenter = -172.5;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.percentHeight = 69;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shop2_zhezhao_png";
		t.percentWidth = 100;
		t.x = 0;
		return t;
	};
	_proto.shopViewStack_i = function () {
		var t = new eui.ViewStack();
		this.shopViewStack = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.percentHeight = 69;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.selectedIndex = 0;
		t.width = 1280;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.name = "视图";
		t.percentWidth = 100;
		t.elementsContent = [this.xiangouScroller_i()];
		return t;
	};
	_proto.xiangouScroller_i = function () {
		var t = new eui.Scroller();
		this.xiangouScroller = t;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "skins.ScrollerSkin";
		t.percentWidth = 100;
		t.viewport = this.xiangouGroup_i();
		return t;
	};
	_proto.xiangouGroup_i = function () {
		var t = new eui.Group();
		this.xiangouGroup = t;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 40;
		t.horizontalAlign = "center";
		t.paddingLeft = 30;
		t.paddingRight = 30;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.name = "Group";
		t.percentWidth = 100;
		t.elementsContent = [this.chaozhiScroller_i()];
		return t;
	};
	_proto.chaozhiScroller_i = function () {
		var t = new eui.Scroller();
		this.chaozhiScroller = t;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "skins.ScrollerSkin";
		t.percentWidth = 100;
		t.viewport = this.chaozhiGroup_i();
		return t;
	};
	_proto.chaozhiGroup_i = function () {
		var t = new eui.Group();
		this.chaozhiGroup = t;
		t.layout = this._HorizontalLayout2_i();
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 40;
		t.horizontalAlign = "center";
		t.paddingLeft = 30;
		t.paddingRight = 30;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.name = "视图";
		t.percentWidth = 100;
		t.elementsContent = [this.zhuanshiScroller_i()];
		return t;
	};
	_proto.zhuanshiScroller_i = function () {
		var t = new eui.Scroller();
		this.zhuanshiScroller = t;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "skins.ScrollerSkin";
		t.percentWidth = 100;
		t.viewport = this.zhuanshiGroup_i();
		return t;
	};
	_proto.zhuanshiGroup_i = function () {
		var t = new eui.Group();
		this.zhuanshiGroup = t;
		t.layout = this._HorizontalLayout3_i();
		return t;
	};
	_proto._HorizontalLayout3_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 40;
		t.horizontalAlign = "center";
		t.paddingLeft = 30;
		t.paddingRight = 30;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.name = "视图";
		t.percentWidth = 100;
		t.elementsContent = [this.goldScroller_i()];
		return t;
	};
	_proto.goldScroller_i = function () {
		var t = new eui.Scroller();
		this.goldScroller = t;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "skins.ScrollerSkin";
		t.percentWidth = 100;
		t.viewport = this.goldGroup_i();
		return t;
	};
	_proto.goldGroup_i = function () {
		var t = new eui.Group();
		this.goldGroup = t;
		t.layout = this._HorizontalLayout4_i();
		return t;
	};
	_proto._HorizontalLayout4_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 40;
		t.horizontalAlign = "center";
		t.paddingLeft = 30;
		t.paddingRight = 30;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.name = "视图";
		t.percentWidth = 100;
		t.elementsContent = [this.daojuScroller_i()];
		return t;
	};
	_proto.daojuScroller_i = function () {
		var t = new eui.Scroller();
		this.daojuScroller = t;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "skins.ScrollerSkin";
		t.percentWidth = 100;
		t.viewport = this.daojuGroup_i();
		return t;
	};
	_proto.daojuGroup_i = function () {
		var t = new eui.Group();
		this.daojuGroup = t;
		t.layout = this._HorizontalLayout5_i();
		return t;
	};
	_proto._HorizontalLayout5_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 40;
		t.horizontalAlign = "center";
		t.paddingLeft = 30;
		t.paddingRight = 30;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.btnGroup_i = function () {
		var t = new eui.Group();
		this.btnGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 77;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -182.5;
		t.width = 1280;
		t.elementsContent = [this.xiangouRadioBtn_i(),this.goumaiRadioBtn_i(),this.diamontRadioBtn_i(),this.goldRadioBtn_i(),this.daojuRadioBtn_i()];
		return t;
	};
	_proto.xiangouRadioBtn_i = function () {
		var t = new eui.RadioButton();
		this.xiangouRadioBtn = t;
		t.groupName = "btnGrop";
		t.label = "";
		t.selected = true;
		t.value = "0";
		t.width = 235;
		t.x = 24.55;
		t.y = 2.66;
		t.skinName = ShopPanelSkin$Skin166;
		return t;
	};
	_proto.goumaiRadioBtn_i = function () {
		var t = new eui.RadioButton();
		this.goumaiRadioBtn = t;
		t.groupName = "btnGrop";
		t.label = "";
		t.value = "1";
		t.width = 235;
		t.x = 274.93;
		t.y = 2.66;
		t.skinName = ShopPanelSkin$Skin167;
		return t;
	};
	_proto.diamontRadioBtn_i = function () {
		var t = new eui.RadioButton();
		this.diamontRadioBtn = t;
		t.groupName = "btnGrop";
		t.label = "";
		t.value = "2";
		t.width = 235;
		t.x = 524.48;
		t.y = 2.66;
		t.skinName = ShopPanelSkin$Skin168;
		return t;
	};
	_proto.goldRadioBtn_i = function () {
		var t = new eui.RadioButton();
		this.goldRadioBtn = t;
		t.anchorOffsetX = 0;
		t.groupName = "btnGrop";
		t.label = "";
		t.value = "3";
		t.width = 235;
		t.x = 774.7;
		t.y = 2.66;
		t.skinName = ShopPanelSkin$Skin169;
		return t;
	};
	_proto.daojuRadioBtn_i = function () {
		var t = new eui.RadioButton();
		this.daojuRadioBtn = t;
		t.groupName = "btnGrop";
		t.label = "";
		t.value = "4";
		t.width = 235;
		t.x = 1023.75;
		t.y = 6.65;
		t.skinName = ShopPanelSkin$Skin170;
		return t;
	};
	_proto.heartPlugin_i = function () {
		var t = new HeartsPlugins();
		this.heartPlugin = t;
		t.left = 24;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "HeartsPluginSkin";
		t.top = 14;
		return t;
	};
	_proto.goldGroup1_i = function () {
		var t = new eui.Group();
		this.goldGroup1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 48;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.x = 443;
		t.elementsContent = [this.jinbiImg_i(),this.goldLabel_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto.jinbiImg_i = function () {
		var t = new eui.Image();
		this.jinbiImg = t;
		t.scale9Grid = new egret.Rectangle(9,10,23,22);
		t.source = "main2_ditu_png";
		t.x = 2.0500000000000114;
		t.y = 1.9699999999999989;
		return t;
	};
	_proto.goldLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.goldLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "shuzi3_fnt";
		t.height = 37;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 72;
		t.y = 9;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "main2_jinbi_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "main2_jiahao2_png";
		t.x = 28.04999999999997;
		t.y = 20.96999999999997;
		return t;
	};
	_proto.diamondGroup1_i = function () {
		var t = new eui.Group();
		this.diamondGroup1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 48;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.x = 698;
		t.elementsContent = [this.zhuanshiImg_i(),this.diamendLabel_i(),this._Image6_i(),this._Image7_i()];
		return t;
	};
	_proto.zhuanshiImg_i = function () {
		var t = new eui.Image();
		this.zhuanshiImg = t;
		t.anchorOffsetX = 0;
		t.source = "main2_ditu_png";
		t.x = 21.51999999999997;
		t.y = 3.480000000000018;
		return t;
	};
	_proto.diamendLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.diamendLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "shuzi3_fnt";
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 80;
		t.y = 10;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "main2_zuanshi_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "main2_jiahao1_png";
		t.x = 31;
		t.y = 21;
		return t;
	};
	_proto.leftGroup_i = function () {
		var t = new eui.Group();
		this.leftGroup = t;
		t.height = 720;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = false;
		t.width = 1280;
		t.elementsContent = [this.backBtn_i()];
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Button();
		this.backBtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 1157;
		t.y = 21.52;
		t.skinName = ShopPanelSkin$Skin171;
		return t;
	};
	return ShopPanelSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/shop/ShopXiangouListItemSkin.exml'] = window.ShopXiangouListItemSkin = (function (_super) {
	__extends(ShopXiangouListItemSkin, _super);
	var ShopXiangouListItemSkin$Skin172 = 	(function (_super) {
		__extends(ShopXiangouListItemSkin$Skin172, _super);
		function ShopXiangouListItemSkin$Skin172() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopXiangouListItemSkin$Skin172.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "shop2_anniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ShopXiangouListItemSkin$Skin172;
	})(eui.Skin);

	function ShopXiangouListItemSkin() {
		_super.call(this);
		this.skinParts = ["maskImg","daojuImg","zhuanshiImg","renminbiImg","goldLabel","buyGroup"];
		
		this.elementsContent = [this.maskImg_i(),this.daojuImg_i(),this._Button1_i(),this.buyGroup_i()];
	}
	var _proto = ShopXiangouListItemSkin.prototype;

	_proto.maskImg_i = function () {
		var t = new eui.Image();
		this.maskImg = t;
		t.anchorOffsetY = 0;
		t.source = "shop2_ditu_png";
		t.visible = false;
		return t;
	};
	_proto.daojuImg_i = function () {
		var t = new eui.Image();
		this.daojuImg = t;
		t.height = 360;
		t.width = 366;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 360;
		t.skinName = ShopXiangouListItemSkin$Skin172;
		return t;
	};
	_proto.buyGroup_i = function () {
		var t = new eui.Group();
		this.buyGroup = t;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.width = 366;
		t.x = 0;
		t.y = 377.5;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 45;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 114;
		t.y = 10;
		t.elementsContent = [this.zhuanshiImg_i(),this.renminbiImg_i()];
		return t;
	};
	_proto.zhuanshiImg_i = function () {
		var t = new eui.Image();
		this.zhuanshiImg = t;
		t.source = "shop2_zhuanshi_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.renminbiImg_i = function () {
		var t = new eui.Image();
		this.renminbiImg = t;
		t.source = "shop2_renminbi_png";
		t.touchEnabled = false;
		t.x = 10;
		t.y = 2;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 261;
		t.y = 10;
		t.elementsContent = [this.goldLabel_i()];
		return t;
	};
	_proto.goldLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.goldLabel = t;
		t.anchorOffsetX = 0;
		t.font = "shuzi3_fnt";
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "00";
		t.touchEnabled = false;
		t.x = -1;
		t.y = 3;
		return t;
	};
	return ShopXiangouListItemSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/weibo/WeiboListItemSkin.exml'] = window.WeiboListItemSkin = (function (_super) {
	__extends(WeiboListItemSkin, _super);
	function WeiboListItemSkin() {
		_super.call(this);
		this.skinParts = ["headImg","girlName","phoneText","headGroup","contentLabel","contentImg","dateLabel","zanlabel","zanImg","pinlunImg","proveGroup","huifuGroup"];
		
		this.width = 1054;
		this.elementsContent = [this._Group3_i()];
	}
	var _proto = WeiboListItemSkin.prototype;

	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.horizontalCenter = 14.5;
		t.width = 977;
		t.y = 30;
		t.layout = this._VerticalLayout2_i();
		t.elementsContent = [this.headGroup_i(),this._Group1_i(),this._Group2_i(),this.huifuGroup_i()];
		return t;
	};
	_proto._VerticalLayout2_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 21;
		t.paddingLeft = 62;
		return t;
	};
	_proto.headGroup_i = function () {
		var t = new eui.Group();
		this.headGroup = t;
		t.x = 22;
		t.y = 1;
		t.elementsContent = [this.headImg_i(),this.girlName_i(),this._Label1_i(),this.phoneText_i()];
		return t;
	};
	_proto.headImg_i = function () {
		var t = new eui.Image();
		this.headImg = t;
		t.height = 90;
		t.source = "";
		t.width = 90;
		t.x = -99;
		t.y = 0;
		return t;
	};
	_proto.girlName_i = function () {
		var t = new eui.Label();
		this.girlName = t;
		t.fontFamily = "fzyc";
		t.size = 30;
		t.text = "Label";
		t.textColor = 0x323232;
		t.x = 7;
		t.y = 6;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.size = 24;
		t.text = "来自";
		t.textColor = 0xb3b3b3;
		t.x = 7;
		t.y = 51;
		return t;
	};
	_proto.phoneText_i = function () {
		var t = new eui.Label();
		this.phoneText = t;
		t.fontFamily = "fzyc";
		t.size = 24;
		t.text = "iphone";
		t.textColor = 0xb3b3b3;
		t.x = 67;
		t.y = 50;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 22;
		t.y = 91;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.contentLabel_i(),this.contentImg_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 16;
		t.paddingBottom = 0;
		return t;
	};
	_proto.contentLabel_i = function () {
		var t = new eui.Label();
		this.contentLabel = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "fzyc";
		t.size = 30;
		t.text = "ssssssssssssssssssssssssssssssssssssssssssssss";
		t.textColor = 0x323232;
		t.width = 827;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.contentImg_i = function () {
		var t = new eui.Image();
		this.contentImg = t;
		t.bottom = 16;
		t.x = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.touchEnabled = false;
		t.x = 0;
		t.y = 160;
		t.elementsContent = [this.dateLabel_i(),this._Image1_i(),this._Image2_i(),this.zanlabel_i(),this.proveGroup_i()];
		return t;
	};
	_proto.dateLabel_i = function () {
		var t = new eui.Label();
		this.dateLabel = t;
		t.fontFamily = "fzyc";
		t.size = 24;
		t.text = "今天";
		t.textColor = 0xb3b3b3;
		t.x = 0;
		t.y = 1;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "weibo2_toumingdi_png";
		t.x = 0;
		t.y = 34;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "weibo2_xin_png";
		t.x = 14;
		t.y = 49;
		return t;
	};
	_proto.zanlabel_i = function () {
		var t = new eui.Label();
		this.zanlabel = t;
		t.fontFamily = "fzyc";
		t.height = 20;
		t.size = 24;
		t.text = "某某某";
		t.width = 768;
		t.x = 59;
		t.y = 50;
		return t;
	};
	_proto.proveGroup_i = function () {
		var t = new eui.Group();
		this.proveGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.touchThrough = true;
		t.width = 156;
		t.x = 671;
		t.y = -5;
		t.elementsContent = [this.zanImg_i(),this.pinlunImg_i()];
		return t;
	};
	_proto.zanImg_i = function () {
		var t = new eui.Image();
		this.zanImg = t;
		t.source = "weibo2_dianzan_png";
		t.x = 11;
		t.y = -24;
		return t;
	};
	_proto.pinlunImg_i = function () {
		var t = new eui.Image();
		this.pinlunImg = t;
		t.source = "weibo2_pinglun_png";
		t.x = 90;
		t.y = -21;
		return t;
	};
	_proto.huifuGroup_i = function () {
		var t = new eui.Group();
		this.huifuGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.touchEnabled = false;
		t.width = 968;
		t.x = -1;
		t.y = 241;
		return t;
	};
	return WeiboListItemSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/weibo/WeiBoPanelSkin.exml'] = window.WeiBoPanelSkin = (function (_super) {
	__extends(WeiBoPanelSkin, _super);
	var WeiBoPanelSkin$Skin173 = 	(function (_super) {
		__extends(WeiBoPanelSkin$Skin173, _super);
		function WeiBoPanelSkin$Skin173() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = WeiBoPanelSkin$Skin173.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "login2_yuanxinganniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "login2_fanhui_png";
			t.verticalCenter = 0;
			return t;
		};
		return WeiBoPanelSkin$Skin173;
	})(eui.Skin);

	function WeiBoPanelSkin() {
		_super.call(this);
		this.skinParts = ["heartPlugin","maskImg","headImg","girlNeme","weiboList","weiboScoller","backBtn","leftGroup","selectBg","selectList","selectGroup","zanCricle","zanHand","yindaoZan","pinCricle","pinHand","yindaoPin"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Image1_i(),this.heartPlugin_i(),this._Group2_i(),this._Image4_i(),this.weiboScoller_i(),this.leftGroup_i(),this.selectGroup_i(),this.yindaoZan_i(),this.yindaoPin_i()];
	}
	var _proto = WeiBoPanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "weibo2_BG_jpg";
		t.top = 0;
		return t;
	};
	_proto.heartPlugin_i = function () {
		var t = new HeartsPlugins();
		this.heartPlugin = t;
		t.left = 11;
		t.skinName = "HeartsPluginSkin";
		t.top = 6;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 720;
		t.horizontalCenter = 0;
		t.top = 0;
		t.touchEnabled = false;
		t.width = 1280;
		t.elementsContent = [this._Group1_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 569;
		t.y = 38;
		t.elementsContent = [this._Image2_i(),this.maskImg_i(),this.headImg_i(),this.girlNeme_i(),this._Image3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 140;
		t.source = "weixin2_datouxiangkuang_png";
		t.width = 140;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.maskImg_i = function () {
		var t = new eui.Image();
		this.maskImg = t;
		t.height = 140;
		t.source = "weixin2_linshitouxiang_png";
		t.width = 140;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.headImg_i = function () {
		var t = new eui.Image();
		this.headImg = t;
		t.height = 140;
		t.source = "weixin2_linshitouxiang_png";
		t.width = 140;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.girlNeme_i = function () {
		var t = new eui.Label();
		this.girlNeme = t;
		t.fontFamily = "fzyc";
		t.text = "胡佳倩";
		t.x = 28;
		t.y = 130;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "weibo2_xingbie_png";
		t.x = 124.92;
		t.y = 126;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 4;
		t.percentHeight = 70;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "weibo2_weibo2_baidi_png";
		t.width = 1054;
		return t;
	};
	_proto.weiboScoller_i = function () {
		var t = new eui.Scroller();
		this.weiboScoller = t;
		t.anchorOffsetY = 0;
		t.bottom = 4;
		t.percentHeight = 70;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "skins.ScrollerSkin";
		t.width = 1054;
		t.viewport = this.weiboList_i();
		return t;
	};
	_proto.weiboList_i = function () {
		var t = new eui.List();
		this.weiboList = t;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.leftGroup_i = function () {
		var t = new eui.Group();
		this.leftGroup = t;
		t.height = 720;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = false;
		t.width = 1280;
		t.elementsContent = [this.backBtn_i()];
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Button();
		this.backBtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 1157;
		t.y = 21.52;
		t.skinName = WeiBoPanelSkin$Skin173;
		return t;
	};
	_proto.selectGroup_i = function () {
		var t = new eui.Group();
		this.selectGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this.selectBg_i(),this.selectList_i()];
		return t;
	};
	_proto.selectBg_i = function () {
		var t = new eui.Rect();
		this.selectBg = t;
		t.bottom = 0;
		t.fillAlpha = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.selectList_i = function () {
		var t = new MessageList();
		this.selectList = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "Message3ListSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.yindaoZan_i = function () {
		var t = new eui.Group();
		this.yindaoZan = t;
		t.height = 720;
		t.horizontalCenter = 0;
		t.touchChildren = true;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.visible = false;
		t.width = 1280;
		t.y = 0;
		t.elementsContent = [this._Group3_i(),this._Image5_i(),this._Label1_i(),this._Label2_i(),this._Label3_i()];
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.percentHeight = 70;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.width = 1054;
		t.y = 212;
		t.elementsContent = [this.zanCricle_i(),this.zanHand_i()];
		return t;
	};
	_proto.zanCricle_i = function () {
		var t = new eui.Image();
		this.zanCricle = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_quan3_png";
		t.x = 752;
		t.y = 360;
		return t;
	};
	_proto.zanHand_i = function () {
		var t = new eui.Image();
		this.zanHand = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_handdowm_png";
		t.x = 780.28;
		t.y = 265.66;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_miao_png";
		t.verticalCenter = 97;
		t.x = 410.00000000000006;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.horizontalCenter = -11;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "点击这里给她点赞";
		t.verticalCenter = 129;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.horizontalCenter = -6.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "可以增加好感度哦~";
		t.verticalCenter = 174;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.horizontalCenter = -4.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "喵~";
		t.verticalCenter = 214;
		return t;
	};
	_proto.yindaoPin_i = function () {
		var t = new eui.Group();
		this.yindaoPin = t;
		t.height = 720;
		t.horizontalCenter = 0;
		t.touchChildren = true;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.visible = false;
		t.width = 1280;
		t.y = 0;
		t.elementsContent = [this._Group4_i(),this._Image6_i(),this._Label4_i(),this._Label5_i(),this._Label6_i()];
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.bottom = 4;
		t.percentHeight = 70;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.width = 1054;
		t.elementsContent = [this.pinCricle_i(),this.pinHand_i()];
		return t;
	};
	_proto.pinCricle_i = function () {
		var t = new eui.Image();
		this.pinCricle = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_quan3_png";
		t.x = 832;
		t.y = 360;
		return t;
	};
	_proto.pinHand_i = function () {
		var t = new eui.Image();
		this.pinHand = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_handdowm_png";
		t.x = 860.28;
		t.y = 265.66;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -26;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_miao_png";
		t.verticalCenter = 97;
		t.x = 410.00000000000006;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.horizontalCenter = -11;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "点击这里评论微博";
		t.verticalCenter = 129;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.horizontalCenter = -6.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "选择评论要三思后行哦~";
		t.verticalCenter = 174;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.horizontalCenter = -4.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "喵~";
		t.verticalCenter = 214;
		return t;
	};
	return WeiBoPanelSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/weixin/MessageListItemSkin.exml'] = window.MessageListItemSkin = (function (_super) {
	__extends(MessageListItemSkin, _super);
	function MessageListItemSkin() {
		_super.call(this);
		this.skinParts = ["leftMessage","rightMessage"];
		
		this.width = 905;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = MessageListItemSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.width = 905;
		t.y = 0;
		t.elementsContent = [this.leftMessage_i(),this.rightMessage_i()];
		return t;
	};
	_proto.leftMessage_i = function () {
		var t = new LeftMessage();
		this.leftMessage = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "LeftMessageSkin";
		return t;
	};
	_proto.rightMessage_i = function () {
		var t = new RightMessage();
		this.rightMessage = t;
		t.skinName = "RightMessageSkin";
		t.width = 905;
		return t;
	};
	return MessageListItemSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/weixin/sendMessageSkin.exml'] = window.SendMessageSkin = (function (_super) {
	__extends(SendMessageSkin, _super);
	var SendMessageSkin$Skin174 = 	(function (_super) {
		__extends(SendMessageSkin$Skin174, _super);
		function SendMessageSkin$Skin174() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","weixin2_huiseanniu_png")
					])
			];
		}
		var _proto = SendMessageSkin$Skin174.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "weixin2_fasonganniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "weixin2_fasong_png";
			t.y = 20;
			return t;
		};
		return SendMessageSkin$Skin174;
	})(eui.Skin);

	var SendMessageSkin$Skin175 = 	(function (_super) {
		__extends(SendMessageSkin$Skin175, _super);
		function SendMessageSkin$Skin175() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SendMessageSkin$Skin175.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "weixin2_huiseanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "weixin2_fasong_png";
			t.y = 20;
			return t;
		};
		return SendMessageSkin$Skin175;
	})(eui.Skin);

	function SendMessageSkin() {
		_super.call(this);
		this.skinParts = ["send","msgLabel","labelGroup","goldLabel","goldGroup","sendGroup","unsend","unsendGroup"];
		
		this.elementsContent = [this._Image1_i(),this.sendGroup_i(),this.unsendGroup_i()];
	}
	var _proto = SendMessageSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "weixin2_liaotiankuang_png";
		return t;
	};
	_proto.sendGroup_i = function () {
		var t = new eui.Group();
		this.sendGroup = t;
		t.anchorOffsetY = 0;
		t.elementsContent = [this.send_i(),this.labelGroup_i(),this.goldGroup_i()];
		return t;
	};
	_proto.send_i = function () {
		var t = new eui.Button();
		this.send = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 705;
		t.skinName = SendMessageSkin$Skin174;
		return t;
	};
	_proto.labelGroup_i = function () {
		var t = new eui.Group();
		this.labelGroup = t;
		t.height = 81;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.width = 684;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.msgLabel_i()];
		return t;
	};
	_proto.msgLabel_i = function () {
		var t = new eui.Label();
		this.msgLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "fzyc";
		t.height = 37;
		t.multiline = false;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = -2;
		t.width = 621;
		t.x = 33;
		t.y = 20;
		return t;
	};
	_proto.goldGroup_i = function () {
		var t = new eui.Group();
		this.goldGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.visible = false;
		t.width = 626;
		t.x = 28;
		t.y = 9;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Group1_i(),this.goldLabel_i(),this._Image2_i(),this._Group2_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 10;
		t.paddingLeft = 82;
		t.paddingTop = 13;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 84;
		t.y = 11;
		t.elementsContent = [this._Label1_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "对方正在输入...";
		t.textColor = 0x666666;
		t.y = 8;
		return t;
	};
	_proto.goldLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.goldLabel = t;
		t.anchorOffsetX = 0;
		t.font = "shuzi3_fnt";
		t.text = "100";
		t.x = 247;
		t.y = 14;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.source = "main2_jinbi_png";
		t.width = 40;
		t.x = 329;
		t.y = 13;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 439;
		t.y = 9;
		t.elementsContent = [this._Label2_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "立即回复";
		t.textColor = 0x666666;
		t.x = 0;
		t.y = 8;
		return t;
	};
	_proto.unsendGroup_i = function () {
		var t = new eui.Group();
		this.unsendGroup = t;
		t.height = 81;
		t.visible = false;
		t.width = 876;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.unsend_i()];
		return t;
	};
	_proto.unsend_i = function () {
		var t = new eui.Button();
		this.unsend = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 705;
		t.skinName = SendMessageSkin$Skin175;
		return t;
	};
	return SendMessageSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/weixin/WeixinPanelSkin.exml'] = window.WeixinPanelSkin = (function (_super) {
	__extends(WeixinPanelSkin, _super);
	var WeixinPanelSkin$Skin176 = 	(function (_super) {
		__extends(WeixinPanelSkin$Skin176, _super);
		function WeixinPanelSkin$Skin176() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = WeixinPanelSkin$Skin176.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "main_buy_tip_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "fzyc";
			t.horizontalCenter = 0;
			t.italic = true;
			t.size = 23;
			t.verticalCenter = -8;
			return t;
		};
		return WeixinPanelSkin$Skin176;
	})(eui.Skin);

	var WeixinPanelSkin$Skin177 = 	(function (_super) {
		__extends(WeixinPanelSkin$Skin177, _super);
		function WeixinPanelSkin$Skin177() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = WeixinPanelSkin$Skin177.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "login2_yuanxinganniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "login2_fanhui_png";
			t.verticalCenter = 0;
			return t;
		};
		return WeixinPanelSkin$Skin177;
	})(eui.Skin);

	var WeixinPanelSkin$Skin178 = 	(function (_super) {
		__extends(WeixinPanelSkin$Skin178, _super);
		function WeixinPanelSkin$Skin178() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = WeixinPanelSkin$Skin178.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "weixin2_fasonganniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "weixin2_fasong_png";
			t.y = 20;
			return t;
		};
		return WeixinPanelSkin$Skin178;
	})(eui.Skin);

	function WeixinPanelSkin() {
		_super.call(this);
		this.skinParts = ["jinbiImg","goldLabel","goldGroup","btnBG","heartPlugin","messageList","messageScroller","sendMessage","maskImg","grilImg","grilname","cdBtn","backBtn","leftGroup","selectBg","selectList","selectGroup","yd_weixinImg","weixinHand","ydsend","yindaoGroup","yd_dianhuaImg0","dianhuaHand0","yindaoHeart","backCircle","backHand","yindaoBack"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this.goldGroup_i(),this.btnBG_i(),this.heartPlugin_i(),this.messageScroller_i(),this.sendMessage_i(),this._Image3_i(),this.maskImg_i(),this.grilImg_i(),this.grilname_i(),this.cdBtn_i(),this.leftGroup_i(),this.selectGroup_i(),this.yindaoGroup_i(),this.yindaoHeart_i(),this.yindaoBack_i()];
	}
	var _proto = WeixinPanelSkin.prototype;

	_proto.goldGroup_i = function () {
		var t = new eui.Group();
		this.goldGroup = t;
		t.top = 43;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.x = 411;
		t.elementsContent = [this.jinbiImg_i(),this.goldLabel_i(),this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto.jinbiImg_i = function () {
		var t = new eui.Image();
		this.jinbiImg = t;
		t.scale9Grid = new egret.Rectangle(9,10,23,22);
		t.source = "main2_ditu_png";
		t.x = 2.0500000000000114;
		t.y = 1.9699999999999989;
		return t;
	};
	_proto.goldLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.goldLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "shuzi3_fnt";
		t.height = 37;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 72;
		t.y = 10;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "main2_jinbi_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "main2_jiahao2_png";
		t.x = 28.04999999999997;
		t.y = 20.96999999999997;
		return t;
	};
	_proto.btnBG_i = function () {
		var t = new eui.Image();
		this.btnBG = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "weixin2_heisebantoumingditu_png";
		t.width = 374;
		t.y = -1.85;
		return t;
	};
	_proto.heartPlugin_i = function () {
		var t = new HeartsPlugins();
		this.heartPlugin = t;
		t.left = 7;
		t.skinName = "HeartsPluginSkin";
		t.top = 6;
		return t;
	};
	_proto.messageScroller_i = function () {
		var t = new eui.Scroller();
		this.messageScroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 66;
		t.horizontalCenter = -187.5;
		t.skinName = "skins.ScrollerSkin";
		t.width = 905;
		t.y = 155.15;
		t.viewport = this.messageList_i();
		return t;
	};
	_proto.messageList_i = function () {
		var t = new eui.List();
		this.messageList = t;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 10;
		return t;
	};
	_proto.sendMessage_i = function () {
		var t = new SendMessage();
		this.sendMessage = t;
		t.bottom = 5;
		t.horizontalCenter = -192;
		t.skinName = "SendMessageSkin";
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.right = 84;
		t.source = "weixin2_datouxiangkuang_png";
		t.verticalCenter = -16.5;
		return t;
	};
	_proto.maskImg_i = function () {
		var t = new eui.Image();
		this.maskImg = t;
		t.right = 83;
		t.source = "weixin2_linshitouxiang_png";
		t.verticalCenter = -16.5;
		return t;
	};
	_proto.grilImg_i = function () {
		var t = new eui.Image();
		this.grilImg = t;
		t.height = 195;
		t.right = 82;
		t.source = "weixin2_linshitouxiang_png";
		t.verticalCenter = -16.5;
		t.width = 195;
		return t;
	};
	_proto.grilname_i = function () {
		var t = new eui.Label();
		this.grilname = t;
		t.fontFamily = "fzyc";
		t.right = 142;
		t.size = 28;
		t.text = "李婉瑜";
		t.verticalCenter = 114;
		return t;
	};
	_proto.cdBtn_i = function () {
		var t = new eui.Button();
		this.cdBtn = t;
		t.bottom = 73;
		t.horizontalCenter = -50;
		t.label = "购买永久微信秒回";
		t.touchChildren = false;
		t.skinName = WeixinPanelSkin$Skin176;
		return t;
	};
	_proto.leftGroup_i = function () {
		var t = new eui.Group();
		this.leftGroup = t;
		t.height = 720;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = false;
		t.width = 1280;
		t.elementsContent = [this.backBtn_i()];
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Button();
		this.backBtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 1157;
		t.y = 21.52;
		t.skinName = WeixinPanelSkin$Skin177;
		return t;
	};
	_proto.selectGroup_i = function () {
		var t = new eui.Group();
		this.selectGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.selectBg_i(),this.selectList_i()];
		return t;
	};
	_proto.selectBg_i = function () {
		var t = new eui.Rect();
		this.selectBg = t;
		t.bottom = 0;
		t.fillAlpha = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.selectList_i = function () {
		var t = new MessageList();
		this.selectList = t;
		t.bottom = 75;
		t.horizontalCenter = -283;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "Message3ListSkin";
		return t;
	};
	_proto.yindaoGroup_i = function () {
		var t = new eui.Group();
		this.yindaoGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = true;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.visible = false;
		t.elementsContent = [this._Group1_i(),this._Image4_i(),this._Label1_i(),this._Label2_i(),this._Label3_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 5;
		t.height = 81;
		t.horizontalCenter = -192;
		t.width = 876;
		t.elementsContent = [this.yd_weixinImg_i(),this.weixinHand_i(),this.ydsend_i()];
		return t;
	};
	_proto.yd_weixinImg_i = function () {
		var t = new eui.Image();
		this.yd_weixinImg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_shuru_png";
		t.x = -10;
		t.y = -17;
		return t;
	};
	_proto.weixinHand_i = function () {
		var t = new eui.Image();
		this.weixinHand = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_handdowm_png";
		t.x = 302;
		t.y = -152;
		return t;
	};
	_proto.ydsend_i = function () {
		var t = new eui.Button();
		this.ydsend = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 707;
		t.y = 2;
		t.skinName = WeixinPanelSkin$Skin178;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 59;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_miao_png";
		t.verticalCenter = 34;
		t.x = 410.00000000000006;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.horizontalCenter = 81;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "点击这里，";
		t.verticalCenter = 60;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.horizontalCenter = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "选择你想要发送的消息";
		t.verticalCenter = 102;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.horizontalCenter = 80.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "喵~";
		t.verticalCenter = 145;
		return t;
	};
	_proto.yindaoHeart_i = function () {
		var t = new eui.Group();
		this.yindaoHeart = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Group3_i()];
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.percentHeight = 65;
		t.horizontalCenter = -186.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 34.5;
		t.width = 905;
		t.x = 1;
		t.y = 161;
		t.elementsContent = [this._Group2_i(),this._Image5_i(),this._Label4_i(),this._Label5_i(),this._Label6_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.x = 439;
		t.y = -1;
		t.elementsContent = [this.yd_dianhuaImg0_i(),this.dianhuaHand0_i()];
		return t;
	};
	_proto.yd_dianhuaImg0_i = function () {
		var t = new eui.Image();
		this.yd_dianhuaImg0 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_quan2_png";
		t.x = 688;
		t.y = 28;
		return t;
	};
	_proto.dianhuaHand0_i = function () {
		var t = new eui.Image();
		this.dianhuaHand0 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_handdowm_png";
		t.x = 748;
		t.y = -55.35;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_miao_png";
		t.x = 54;
		t.y = 3;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "做的不错哦，";
		t.x = 216;
		t.y = 186;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "女友对你的好感度增加了~";
		t.x = 158;
		t.y = 228;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "喵~";
		t.x = 277;
		t.y = 276;
		return t;
	};
	_proto.yindaoBack_i = function () {
		var t = new eui.Group();
		this.yindaoBack = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Group5_i()];
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 720;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.width = 1280;
		t.elementsContent = [this._Group4_i(),this._Image6_i(),this._Label7_i(),this._Label8_i(),this._Label9_i()];
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 720;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 1280;
		t.elementsContent = [this.backCircle_i(),this.backHand_i()];
		return t;
	};
	_proto.backCircle_i = function () {
		var t = new eui.Image();
		this.backCircle = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_quan3_png";
		t.x = 1128;
		t.y = -6;
		return t;
	};
	_proto.backHand_i = function () {
		var t = new eui.Image();
		this.backHand = t;
		t.scaleX = 1;
		t.scaleY = -1;
		t.source = "yindao_handdowm_png";
		t.x = 1158;
		t.y = 246.65;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_miao_png";
		t.x = 542;
		t.y = 15;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "好像有新的事件发生了，";
		t.x = 650;
		t.y = 216;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "点击这里返回主界面，";
		t.x = 666;
		t.y = 258;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "喵~";
		t.x = 767;
		t.y = 296;
		return t;
	};
	return WeixinPanelSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/work/FinishWorkPanelSkin.exml'] = window.FinishWorkPanelSkin = (function (_super) {
	__extends(FinishWorkPanelSkin, _super);
	var FinishWorkPanelSkin$Skin179 = 	(function (_super) {
		__extends(FinishWorkPanelSkin$Skin179, _super);
		function FinishWorkPanelSkin$Skin179() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = FinishWorkPanelSkin$Skin179.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "login2_hongseanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "xieyi_queding_png";
			t.y = 29;
			return t;
		};
		return FinishWorkPanelSkin$Skin179;
	})(eui.Skin);

	function FinishWorkPanelSkin() {
		_super.call(this);
		this.skinParts = ["xinLabel","okBtn","contentGroup"];
		
		this.elementsContent = [this.contentGroup_i()];
	}
	var _proto = FinishWorkPanelSkin.prototype;

	_proto.contentGroup_i = function () {
		var t = new eui.Group();
		this.contentGroup = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.xinLabel_i(),this.okBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 428.79;
		t.scale9Grid = new egret.Rectangle(105,62,632,376);
		t.source = "set2_ditu_png";
		t.width = 655.63;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "youjian_biaoti_png";
		t.x = 129;
		t.y = 23.9;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "dacheng_dacheng_png";
		t.x = 278;
		t.y = 37.9;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "main2_jinbi_png";
		t.x = 300;
		t.y = 119.04;
		return t;
	};
	_proto.xinLabel_i = function () {
		var t = new eui.Label();
		this.xinLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "fzyc";
		t.height = 104.24;
		t.size = 40;
		t.text = "获得1200金币";
		t.textAlign = "center";
		t.textColor = 0xFA4E5E;
		t.verticalAlign = "middle";
		t.width = 510.36;
		t.x = 72;
		t.y = 175.04;
		return t;
	};
	_proto.okBtn_i = function () {
		var t = new eui.Button();
		this.okBtn = t;
		t.label = "";
		t.x = 206;
		t.y = 297.97;
		t.skinName = FinishWorkPanelSkin$Skin179;
		return t;
	};
	return FinishWorkPanelSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/work/WorkBoxSkin.exml'] = window.WorkBoxSkin = (function (_super) {
	__extends(WorkBoxSkin, _super);
	var WorkBoxSkin$Skin180 = 	(function (_super) {
		__extends(WorkBoxSkin$Skin180, _super);
		function WorkBoxSkin$Skin180() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = WorkBoxSkin$Skin180.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "work2_anniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "work2_gongzuo_png";
			t.y = 20;
			return t;
		};
		return WorkBoxSkin$Skin180;
	})(eui.Skin);

	var WorkBoxSkin$Skin181 = 	(function (_super) {
		__extends(WorkBoxSkin$Skin181, _super);
		function WorkBoxSkin$Skin181() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = WorkBoxSkin$Skin181.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "work2_anniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "work_shengzhi_png";
			t.y = 20;
			return t;
		};
		return WorkBoxSkin$Skin181;
	})(eui.Skin);

	var WorkBoxSkin$Skin182 = 	(function (_super) {
		__extends(WorkBoxSkin$Skin182, _super);
		function WorkBoxSkin$Skin182() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = WorkBoxSkin$Skin182.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "weixin2_huiseanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "work2_suozi_png";
			t.y = 16;
			return t;
		};
		return WorkBoxSkin$Skin182;
	})(eui.Skin);

	var WorkBoxSkin$Skin183 = 	(function (_super) {
		__extends(WorkBoxSkin$Skin183, _super);
		function WorkBoxSkin$Skin183() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = WorkBoxSkin$Skin183.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "main_buy_tip_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "fzyc";
			t.horizontalCenter = 0;
			t.italic = true;
			t.size = 23;
			t.verticalCenter = -8;
			return t;
		};
		return WorkBoxSkin$Skin183;
	})(eui.Skin);

	function WorkBoxSkin() {
		_super.call(this);
		this.skinParts = ["typeImg","cdTypeLabel","timeLabel","cdGroup","typeLabel","jindutiaodi","jindutiao","jinyantiaoLabel","jinyanGroup","shenyutype","cishuLabel","jinyanLabel","goldLabel","startBtn","shenzhiBtn","suoBtn","suoGroup","cdBtn"];
		
		this.width = 330;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.typeImg_i(),this._Image3_i(),this.cdGroup_i(),this.typeLabel_i(),this.jinyanGroup_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this.cdBtn_i()];
	}
	var _proto = WorkBoxSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "work2_ditu_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "work2_tou_png";
		t.y = 11;
		return t;
	};
	_proto.typeImg_i = function () {
		var t = new eui.Image();
		this.typeImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 199;
		t.width = 302;
		t.x = 15;
		t.y = 67;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "work2_zhezhao1_png";
		t.width = 302;
		t.x = 14;
		t.y = 187;
		return t;
	};
	_proto.cdGroup_i = function () {
		var t = new eui.Group();
		this.cdGroup = t;
		t.horizontalCenter = 0;
		t.y = 228;
		t.elementsContent = [this.cdTypeLabel_i(),this.timeLabel_i(),this._Label1_i()];
		return t;
	};
	_proto.cdTypeLabel_i = function () {
		var t = new eui.Label();
		this.cdTypeLabel = t;
		t.fontFamily = "fzyc";
		t.size = 24;
		t.text = "冷却时长:";
		t.textColor = 0xffffff;
		t.x = 50;
		t.y = 2;
		return t;
	};
	_proto.timeLabel_i = function () {
		var t = new eui.Label();
		this.timeLabel = t;
		t.fontFamily = "fzyc";
		t.size = 24;
		t.text = "";
		t.textColor = 0xfce063;
		t.x = 157;
		t.y = 1;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.size = 22;
		t.text = "";
		t.textColor = 0x666666;
		t.x = 240;
		t.y = 0;
		return t;
	};
	_proto.typeLabel_i = function () {
		var t = new eui.Label();
		this.typeLabel = t;
		t.fontFamily = "fzyc";
		t.horizontalCenter = 0;
		t.size = 38;
		t.text = "实习生";
		t.textColor = 0xffffff;
		t.y = 20;
		return t;
	};
	_proto.jinyanGroup_i = function () {
		var t = new eui.Group();
		this.jinyanGroup = t;
		t.width = 302;
		t.x = 14;
		t.y = 265;
		t.elementsContent = [this.jindutiaodi_i(),this.jindutiao_i(),this._Label2_i(),this.jinyantiaoLabel_i()];
		return t;
	};
	_proto.jindutiaodi_i = function () {
		var t = new eui.Image();
		this.jindutiaodi = t;
		t.height = 25;
		t.scale9Grid = new egret.Rectangle(2,2,14,14);
		t.source = "work2_jindutiaodi_png";
		t.width = 302;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.jindutiao_i = function () {
		var t = new eui.Image();
		this.jindutiao = t;
		t.height = 25;
		t.scale9Grid = new egret.Rectangle(2,2,14,14);
		t.source = "work2_jindutiao_png";
		t.width = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.size = 20;
		t.text = "经验：";
		t.verticalAlign = "middle";
		t.x = 10;
		t.y = 3;
		return t;
	};
	_proto.jinyantiaoLabel_i = function () {
		var t = new eui.Label();
		this.jinyantiaoLabel = t;
		t.right = 8;
		t.size = 20;
		t.text = "70/240";
		t.y = 3;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 30;
		t.y = 295.68;
		t.elementsContent = [this.shenyutype_i(),this.cishuLabel_i()];
		return t;
	};
	_proto.shenyutype_i = function () {
		var t = new eui.Label();
		this.shenyutype = t;
		t.fontFamily = "fzyc";
		t.size = 25;
		t.text = "工作次数：";
		t.textColor = 0x59718b;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.cishuLabel_i = function () {
		var t = new eui.Label();
		this.cishuLabel = t;
		t.fontFamily = "fzyc";
		t.size = 25;
		t.text = "10";
		t.textColor = 0x59718b;
		t.x = 128.97;
		t.y = 1.3400000000000034;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 30;
		t.y = 329.67;
		t.elementsContent = [this._Label3_i(),this.jinyanLabel_i()];
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.size = 25;
		t.text = "获得经验：";
		t.textColor = 0x59718b;
		t.x = 0;
		t.y = 1;
		return t;
	};
	_proto.jinyanLabel_i = function () {
		var t = new eui.Label();
		this.jinyanLabel = t;
		t.fontFamily = "fzyc";
		t.size = 25;
		t.text = "15";
		t.textColor = 0x59718b;
		t.x = 129.0000000000001;
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 0.99;
		t.y = 358;
		t.elementsContent = [this._Label4_i(),this._Image4_i(),this.goldLabel_i()];
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.left = 28;
		t.size = 25;
		t.text = "每次获得：";
		t.textColor = 0x59718b;
		t.y = 10;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29;
		t.source = "main2_jinbi_png";
		t.width = 27;
		t.x = 152;
		t.y = 7;
		return t;
	};
	_proto.goldLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.goldLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "shuzi3_fnt";
		t.height = 36;
		t.text = "4000";
		t.verticalAlign = "middle";
		t.x = 189;
		t.y = 3;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.y = 413.59;
		t.elementsContent = [this.startBtn_i(),this.shenzhiBtn_i(),this.suoGroup_i()];
		return t;
	};
	_proto.startBtn_i = function () {
		var t = new eui.Button();
		this.startBtn = t;
		t.label = "";
		t.x = 0;
		t.y = 0;
		t.skinName = WorkBoxSkin$Skin180;
		return t;
	};
	_proto.shenzhiBtn_i = function () {
		var t = new eui.Button();
		this.shenzhiBtn = t;
		t.anchorOffsetX = 0;
		t.label = "";
		t.x = 0;
		t.y = 0;
		t.skinName = WorkBoxSkin$Skin181;
		return t;
	};
	_proto.suoGroup_i = function () {
		var t = new eui.Group();
		this.suoGroup = t;
		t.visible = false;
		t.x = 0;
		t.elementsContent = [this.suoBtn_i()];
		return t;
	};
	_proto.suoBtn_i = function () {
		var t = new eui.Button();
		this.suoBtn = t;
		t.label = "";
		t.x = 0;
		t.y = 0;
		t.skinName = WorkBoxSkin$Skin182;
		return t;
	};
	_proto.cdBtn_i = function () {
		var t = new eui.Button();
		this.cdBtn = t;
		t.label = "购买永久无冷却";
		t.touchChildren = false;
		t.x = 115;
		t.y = 148;
		t.skinName = WorkBoxSkin$Skin183;
		return t;
	};
	return WorkBoxSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/work/WorkPanelSkin.exml'] = window.WorkPanelSkin = (function (_super) {
	__extends(WorkPanelSkin, _super);
	var WorkPanelSkin$Skin184 = 	(function (_super) {
		__extends(WorkPanelSkin$Skin184, _super);
		function WorkPanelSkin$Skin184() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = WorkPanelSkin$Skin184.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "login2_yuanxinganniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "login2_fanhui_png";
			t.verticalCenter = 0;
			return t;
		};
		return WorkPanelSkin$Skin184;
	})(eui.Skin);

	var WorkPanelSkin$Skin185 = 	(function (_super) {
		__extends(WorkPanelSkin$Skin185, _super);
		function WorkPanelSkin$Skin185() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = WorkPanelSkin$Skin185.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "work2_anniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "work2_gongzuo_png";
			t.y = 20;
			return t;
		};
		return WorkPanelSkin$Skin185;
	})(eui.Skin);

	function WorkPanelSkin() {
		_super.call(this);
		this.skinParts = ["itemGroup","workBoxScroller","heartPlugin","jinbiImg","goldLabel","goldGroup","zhuanshiImg","diamendLabel","diamondGroup","backBtn","leftGroup","yd_workImg","workHand","startBtn","yindaoGroup","yd_loveImg0","loveHand0","yindaoGroup0","yd_loveImg1","loveHand1","yindaoGroup1","backCircle","backHand","yindaoBack"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Image1_i(),this.workBoxScroller_i(),this.heartPlugin_i(),this.goldGroup_i(),this.diamondGroup_i(),this.leftGroup_i(),this.yindaoGroup_i(),this.yindaoGroup0_i(),this.yindaoGroup1_i(),this.yindaoBack_i()];
	}
	var _proto = WorkPanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "work2_bg_jpg";
		t.top = 0;
		return t;
	};
	_proto.workBoxScroller_i = function () {
		var t = new eui.Scroller();
		this.workBoxScroller = t;
		t.height = 540;
		t.horizontalCenter = 0;
		t.skinName = "skins.ScrollerSkin";
		t.verticalCenter = 90;
		t.width = 1280;
		t.viewport = this.itemGroup_i();
		return t;
	};
	_proto.itemGroup_i = function () {
		var t = new eui.Group();
		this.itemGroup = t;
		t.touchChildren = true;
		t.touchEnabled = true;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 30;
		t.paddingLeft = 30;
		t.paddingRight = 30;
		return t;
	};
	_proto.heartPlugin_i = function () {
		var t = new HeartsPlugins();
		this.heartPlugin = t;
		t.left = 24;
		t.skinName = "HeartsPluginSkin";
		t.top = 14;
		return t;
	};
	_proto.goldGroup_i = function () {
		var t = new eui.Group();
		this.goldGroup = t;
		t.top = 48;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.x = 443;
		t.elementsContent = [this.jinbiImg_i(),this.goldLabel_i(),this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto.jinbiImg_i = function () {
		var t = new eui.Image();
		this.jinbiImg = t;
		t.scale9Grid = new egret.Rectangle(9,10,23,22);
		t.source = "main2_ditu_png";
		t.x = 2.0500000000000114;
		t.y = 1.9699999999999989;
		return t;
	};
	_proto.goldLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.goldLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "shuzi3_fnt";
		t.height = 37;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 72;
		t.y = 9;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "main2_jinbi_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "main2_jiahao2_png";
		t.x = 28.04999999999997;
		t.y = 20.96999999999997;
		return t;
	};
	_proto.diamondGroup_i = function () {
		var t = new eui.Group();
		this.diamondGroup = t;
		t.top = 48;
		t.touchChildren = false;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.x = 698;
		t.elementsContent = [this.zhuanshiImg_i(),this.diamendLabel_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto.zhuanshiImg_i = function () {
		var t = new eui.Image();
		this.zhuanshiImg = t;
		t.anchorOffsetX = 0;
		t.source = "main2_ditu_png";
		t.x = 10;
		t.y = 3.480000000000018;
		return t;
	};
	_proto.diamendLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.diamendLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "shuzi3_fnt";
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 80;
		t.y = 10;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "main2_zuanshi_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "main2_jiahao1_png";
		t.x = 31;
		t.y = 21;
		return t;
	};
	_proto.leftGroup_i = function () {
		var t = new eui.Group();
		this.leftGroup = t;
		t.height = 720;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = false;
		t.width = 1280;
		t.elementsContent = [this.backBtn_i()];
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Button();
		this.backBtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 1157;
		t.y = 21.52;
		t.skinName = WorkPanelSkin$Skin184;
		return t;
	};
	_proto.yindaoGroup_i = function () {
		var t = new eui.Group();
		this.yindaoGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = true;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.visible = false;
		t.elementsContent = [this._Group1_i(),this._Image6_i(),this._Label1_i(),this._Label2_i(),this._Label3_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 720;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 1280;
		t.elementsContent = [this.yd_workImg_i(),this.workHand_i(),this.startBtn_i()];
		return t;
	};
	_proto.yd_workImg_i = function () {
		var t = new eui.Image();
		this.yd_workImg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_work_png";
		t.x = 5;
		t.y = 150;
		return t;
	};
	_proto.workHand_i = function () {
		var t = new eui.Image();
		this.workHand = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_handleft_png";
		t.x = 334;
		t.y = 614;
		return t;
	};
	_proto.startBtn_i = function () {
		var t = new eui.Button();
		this.startBtn = t;
		t.label = "";
		t.x = 112;
		t.y = 592;
		t.skinName = WorkPanelSkin$Skin185;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 59;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_miao_png";
		t.verticalCenter = 34;
		t.x = 410.00000000000006;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.horizontalCenter = 72;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "点击工作按钮，";
		t.verticalCenter = 60;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.horizontalCenter = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "快速赚取第一笔收入，";
		t.verticalCenter = 102;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.horizontalCenter = 80.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "可以开心的买买买啦~";
		t.verticalCenter = 145;
		return t;
	};
	_proto.yindaoGroup0_i = function () {
		var t = new eui.Group();
		this.yindaoGroup0 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = true;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.visible = false;
		t.elementsContent = [this._Group2_i(),this._Image7_i(),this._Label4_i(),this._Label5_i(),this._Label6_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 720;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 1280;
		t.elementsContent = [this.yd_loveImg0_i(),this.loveHand0_i()];
		return t;
	};
	_proto.yd_loveImg0_i = function () {
		var t = new eui.Image();
		this.yd_loveImg0 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_quan3_png";
		t.x = 180;
		t.y = 340;
		return t;
	};
	_proto.loveHand0_i = function () {
		var t = new eui.Image();
		this.loveHand0 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_handdowm_png";
		t.x = 208.28;
		t.y = 245.66;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 14;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_miao_png";
		t.verticalCenter = -5;
		t.x = 410.00000000000006;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.horizontalCenter = 29;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "冷却时间结束后";
		t.verticalCenter = 27;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.horizontalCenter = 45.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "可以继续进行工作了哦~";
		t.verticalCenter = 72;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.horizontalCenter = 35.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "喵~";
		t.verticalCenter = 112;
		return t;
	};
	_proto.yindaoGroup1_i = function () {
		var t = new eui.Group();
		this.yindaoGroup1 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = true;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.visible = false;
		t.elementsContent = [this._Group3_i(),this._Image8_i(),this._Label7_i(),this._Label8_i(),this._Label9_i()];
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 720;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 1280;
		t.elementsContent = [this.yd_loveImg1_i(),this.loveHand1_i()];
		return t;
	};
	_proto.yd_loveImg1_i = function () {
		var t = new eui.Image();
		this.yd_loveImg1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_quan3_png";
		t.x = 225.45;
		t.y = 378;
		return t;
	};
	_proto.loveHand1_i = function () {
		var t = new eui.Image();
		this.loveHand1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_handdowm_png";
		t.x = 253.73;
		t.y = 286.65;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 14;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_miao_png";
		t.verticalCenter = -5;
		t.x = 410.00000000000006;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.horizontalCenter = 35;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "工作获得经验累积后可以升职";
		t.verticalCenter = 29;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.horizontalCenter = 45.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "获得更多金币哦~";
		t.verticalCenter = 72;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.horizontalCenter = 35.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "喵~";
		t.verticalCenter = 112;
		return t;
	};
	_proto.yindaoBack_i = function () {
		var t = new eui.Group();
		this.yindaoBack = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Group5_i()];
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 720;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.width = 1280;
		t.elementsContent = [this._Group4_i(),this._Image9_i(),this._Label10_i(),this._Label11_i(),this._Label12_i()];
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 720;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 1280;
		t.elementsContent = [this.backCircle_i(),this.backHand_i()];
		return t;
	};
	_proto.backCircle_i = function () {
		var t = new eui.Image();
		this.backCircle = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_quan3_png";
		t.x = 1128;
		t.y = -6;
		return t;
	};
	_proto.backHand_i = function () {
		var t = new eui.Image();
		this.backHand = t;
		t.scaleX = 1;
		t.scaleY = -1;
		t.source = "yindao_handdowm_png";
		t.x = 1158;
		t.y = 246.65;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_miao_png";
		t.x = 622;
		t.y = 115;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "返回大厅继续获得好感度解锁";
		t.x = 704;
		t.y = 314;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "下一个视频吧，可以继续给女友";
		t.x = 692;
		t.y = 354;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "打电话发微信了哦~";
		t.x = 765;
		t.y = 396;
		return t;
	};
	return WorkPanelSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/panel/work/WorkProPanelSkin.exml'] = window.WorkProPanelSkin = (function (_super) {
	__extends(WorkProPanelSkin, _super);
	var WorkProPanelSkin$Skin186 = 	(function (_super) {
		__extends(WorkProPanelSkin$Skin186, _super);
		function WorkProPanelSkin$Skin186() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = WorkProPanelSkin$Skin186.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "login2_hongseanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "workpro_lijiwancheng_png";
			t.y = 27;
			return t;
		};
		return WorkProPanelSkin$Skin186;
	})(eui.Skin);

	var WorkProPanelSkin$Skin187 = 	(function (_super) {
		__extends(WorkProPanelSkin$Skin187, _super);
		function WorkProPanelSkin$Skin187() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = WorkProPanelSkin$Skin187.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "main_buy_tip_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "fzyc";
			t.horizontalCenter = 0;
			t.italic = true;
			t.size = 23;
			t.verticalCenter = -8;
			return t;
		};
		return WorkProPanelSkin$Skin187;
	})(eui.Skin);

	var WorkProPanelSkin$Skin188 = 	(function (_super) {
		__extends(WorkProPanelSkin$Skin188, _super);
		function WorkProPanelSkin$Skin188() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = WorkProPanelSkin$Skin188.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "login2_yuanxinganniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "login2_fanhui_png";
			t.verticalCenter = 0;
			return t;
		};
		return WorkProPanelSkin$Skin188;
	})(eui.Skin);

	function WorkProPanelSkin() {
		_super.call(this);
		this.skinParts = ["TypeImg","finishBtn","typeLabel","probg","proImg","ProLabel","tipLabel","cdBtn","backBtn","leftGroup"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this.TypeImg_i(),this._Rect1_i(),this._Group2_i(),this.leftGroup_i()];
	}
	var _proto = WorkProPanelSkin.prototype;

	_proto.TypeImg_i = function () {
		var t = new eui.Image();
		this.TypeImg = t;
		t.percentHeight = 100;
		t.source = "";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.2;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.finishBtn_i(),this.typeLabel_i(),this._Group1_i(),this._Label1_i(),this.tipLabel_i(),this.cdBtn_i()];
		return t;
	};
	_proto.finishBtn_i = function () {
		var t = new eui.Button();
		this.finishBtn = t;
		t.horizontalCenter = 1.5;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 520;
		t.y = 536.3599999999999;
		t.skinName = WorkProPanelSkin$Skin186;
		return t;
	};
	_proto.typeLabel_i = function () {
		var t = new eui.Label();
		this.typeLabel = t;
		t.fontFamily = "fzyc";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 70;
		t.text = "做饭";
		t.textColor = 0xffffff;
		t.y = 83.12;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 372;
		t.elementsContent = [this.probg_i(),this.proImg_i(),this.ProLabel_i()];
		return t;
	};
	_proto.probg_i = function () {
		var t = new eui.Image();
		this.probg = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 2;
		t.scale9Grid = new egret.Rectangle(10,10,19,17);
		t.source = "workpro_jindutiao1_png";
		t.y = 50;
		return t;
	};
	_proto.proImg_i = function () {
		var t = new eui.Image();
		this.proImg = t;
		t.scale9Grid = new egret.Rectangle(10,0,315,25);
		t.source = "workpro_jindutiao2_png";
		t.width = 750;
		t.x = 4;
		t.y = 50;
		return t;
	};
	_proto.ProLabel_i = function () {
		var t = new eui.Label();
		this.ProLabel = t;
		t.fontFamily = "fzyc";
		t.horizontalCenter = 7.5;
		t.text = "0%";
		t.textColor = 0xffffff;
		t.verticalCenter = 25;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 32;
		t.text = "恋爱秘籍";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.x = 576;
		t.y = 201.22000000000003;
		return t;
	};
	_proto.tipLabel_i = function () {
		var t = new eui.Label();
		this.tipLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "fzyc";
		t.height = 100;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "和女生聊天时，如果你一直长篇大论，自言自语，她一定会回你好吧，哦，呵呵，所以一定要留下让女生接话的谈资，给她留出回复空间";
		t.textAlign = "left";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.width = 600;
		t.x = 340;
		t.y = 253.63000000000002;
		return t;
	};
	_proto.cdBtn_i = function () {
		var t = new eui.Button();
		this.cdBtn = t;
		t.horizontalCenter = 0;
		t.label = "购买永久一键完成";
		t.touchChildren = false;
		t.y = 474;
		t.skinName = WorkProPanelSkin$Skin187;
		return t;
	};
	_proto.leftGroup_i = function () {
		var t = new eui.Group();
		this.leftGroup = t;
		t.height = 720;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = false;
		t.width = 1280;
		t.elementsContent = [this.backBtn_i()];
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Button();
		this.backBtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 1157;
		t.y = 21.52;
		t.skinName = WorkProPanelSkin$Skin188;
		return t;
	};
	return WorkProPanelSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/scene/game/btn/ActBtnSkin.exml'] = window.ActBtnSkin = (function (_super) {
	__extends(ActBtnSkin, _super);
	var ActBtnSkin$Skin189 = 	(function (_super) {
		__extends(ActBtnSkin$Skin189, _super);
		function ActBtnSkin$Skin189() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ActBtnSkin$Skin189.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "act_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ActBtnSkin$Skin189;
	})(eui.Skin);

	function ActBtnSkin() {
		_super.call(this);
		this.skinParts = ["actBtn","red"];
		
		this.height = 117;
		this.width = 110;
		this.elementsContent = [this.actBtn_i(),this.red_i()];
	}
	var _proto = ActBtnSkin.prototype;

	_proto.actBtn_i = function () {
		var t = new eui.Button();
		this.actBtn = t;
		t.label = "";
		t.x = 0;
		t.y = 12;
		t.skinName = ActBtnSkin$Skin189;
		return t;
	};
	_proto.red_i = function () {
		var t = new eui.Image();
		this.red = t;
		t.source = "main2_tishi_png";
		t.visible = false;
		t.x = 59;
		t.y = 0;
		return t;
	};
	return ActBtnSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/scene/game/btn/beibaoBtnSkin.exml'] = window.beibaoBtnSkin = (function (_super) {
	__extends(beibaoBtnSkin, _super);
	var beibaoBtnSkin$Skin190 = 	(function (_super) {
		__extends(beibaoBtnSkin$Skin190, _super);
		function beibaoBtnSkin$Skin190() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = beibaoBtnSkin$Skin190.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.height = 104;
			t.source = "main2_beibao_png";
			t.width = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return beibaoBtnSkin$Skin190;
	})(eui.Skin);

	function beibaoBtnSkin() {
		_super.call(this);
		this.skinParts = ["red"];
		
		this.elementsContent = [this._Button1_i(),this.red_i()];
	}
	var _proto = beibaoBtnSkin.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.y = 20;
		t.skinName = beibaoBtnSkin$Skin190;
		return t;
	};
	_proto.red_i = function () {
		var t = new eui.Image();
		this.red = t;
		t.source = "main2_tishi_png";
		t.visible = false;
		t.x = 64;
		t.y = 0;
		return t;
	};
	return beibaoBtnSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/scene/game/btn/dianhuaBtnSkin.exml'] = window.dianhuaBtnSkin = (function (_super) {
	__extends(dianhuaBtnSkin, _super);
	var dianhuaBtnSkin$Skin191 = 	(function (_super) {
		__extends(dianhuaBtnSkin$Skin191, _super);
		function dianhuaBtnSkin$Skin191() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = dianhuaBtnSkin$Skin191.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.height = 104;
			t.source = "main2_dianhua_png";
			t.width = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return dianhuaBtnSkin$Skin191;
	})(eui.Skin);

	function dianhuaBtnSkin() {
		_super.call(this);
		this.skinParts = ["red"];
		
		this.height = 124;
		this.elementsContent = [this._Button1_i(),this.red_i()];
	}
	var _proto = dianhuaBtnSkin.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.y = 20;
		t.skinName = dianhuaBtnSkin$Skin191;
		return t;
	};
	_proto.red_i = function () {
		var t = new eui.Image();
		this.red = t;
		t.source = "main2_tishi_png";
		t.visible = false;
		t.x = 64;
		t.y = 0;
		return t;
	};
	return dianhuaBtnSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/scene/game/btn/gongzuoBtnSkin.exml'] = window.gongzuoBtnSkin = (function (_super) {
	__extends(gongzuoBtnSkin, _super);
	var gongzuoBtnSkin$Skin192 = 	(function (_super) {
		__extends(gongzuoBtnSkin$Skin192, _super);
		function gongzuoBtnSkin$Skin192() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gongzuoBtnSkin$Skin192.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.height = 104;
			t.source = "main2_gongzuo_png";
			t.width = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gongzuoBtnSkin$Skin192;
	})(eui.Skin);

	function gongzuoBtnSkin() {
		_super.call(this);
		this.skinParts = ["red"];
		
		this.elementsContent = [this._Button1_i(),this.red_i()];
	}
	var _proto = gongzuoBtnSkin.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.y = 20;
		t.skinName = gongzuoBtnSkin$Skin192;
		return t;
	};
	_proto.red_i = function () {
		var t = new eui.Image();
		this.red = t;
		t.source = "main2_tishi_png";
		t.x = 64;
		t.y = 0;
		return t;
	};
	return gongzuoBtnSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/scene/game/btn/lianaiBtnSkin.exml'] = window.lianaiBtnSkin = (function (_super) {
	__extends(lianaiBtnSkin, _super);
	var lianaiBtnSkin$Skin193 = 	(function (_super) {
		__extends(lianaiBtnSkin$Skin193, _super);
		function lianaiBtnSkin$Skin193() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = lianaiBtnSkin$Skin193.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.height = 104;
			t.source = "main2_lianai_png";
			t.width = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return lianaiBtnSkin$Skin193;
	})(eui.Skin);

	function lianaiBtnSkin() {
		_super.call(this);
		this.skinParts = ["red"];
		
		this.elementsContent = [this._Button1_i(),this.red_i()];
	}
	var _proto = lianaiBtnSkin.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.y = 20;
		t.skinName = lianaiBtnSkin$Skin193;
		return t;
	};
	_proto.red_i = function () {
		var t = new eui.Image();
		this.red = t;
		t.source = "main2_tishi_png";
		t.visible = false;
		t.x = 64;
		t.y = 0;
		return t;
	};
	return lianaiBtnSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/scene/game/btn/QRCodeBtnSkin.exml'] = window.QRCodeBtnSkin = (function (_super) {
	__extends(QRCodeBtnSkin, _super);
	var QRCodeBtnSkin$Skin194 = 	(function (_super) {
		__extends(QRCodeBtnSkin$Skin194, _super);
		function QRCodeBtnSkin$Skin194() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = QRCodeBtnSkin$Skin194.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "follow_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return QRCodeBtnSkin$Skin194;
	})(eui.Skin);

	function QRCodeBtnSkin() {
		_super.call(this);
		this.skinParts = ["btn","tip"];
		
		this.height = 104;
		this.width = 108;
		this.elementsContent = [this.btn_i(),this.tip_i()];
	}
	var _proto = QRCodeBtnSkin.prototype;

	_proto.btn_i = function () {
		var t = new eui.Button();
		this.btn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 4;
		t.y = 2;
		t.skinName = QRCodeBtnSkin$Skin194;
		return t;
	};
	_proto.tip_i = function () {
		var t = new eui.Image();
		this.tip = t;
		t.source = "share_tip_png";
		t.visible = false;
		t.x = 65;
		t.y = -12;
		return t;
	};
	return QRCodeBtnSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/scene/game/btn/RedPacketBtnSkin.exml'] = window.RedPacketBtnSkin = (function (_super) {
	__extends(RedPacketBtnSkin, _super);
	var RedPacketBtnSkin$Skin195 = 	(function (_super) {
		__extends(RedPacketBtnSkin$Skin195, _super);
		function RedPacketBtnSkin$Skin195() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RedPacketBtnSkin$Skin195.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "red_packet_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RedPacketBtnSkin$Skin195;
	})(eui.Skin);

	function RedPacketBtnSkin() {
		_super.call(this);
		this.skinParts = ["btn","tip"];
		
		this.height = 114;
		this.width = 115;
		this.elementsContent = [this.btn_i(),this.tip_i()];
	}
	var _proto = RedPacketBtnSkin.prototype;

	_proto.btn_i = function () {
		var t = new eui.Button();
		this.btn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 4;
		t.y = 2;
		t.skinName = RedPacketBtnSkin$Skin195;
		return t;
	};
	_proto.tip_i = function () {
		var t = new eui.Image();
		this.tip = t;
		t.source = "share_tip_png";
		t.visible = false;
		t.x = 68;
		t.y = -12;
		return t;
	};
	return RedPacketBtnSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/scene/game/btn/SecretShopBtnSkin.exml'] = window.SecretShopBtnSkin = (function (_super) {
	__extends(SecretShopBtnSkin, _super);
	var SecretShopBtnSkin$Skin196 = 	(function (_super) {
		__extends(SecretShopBtnSkin$Skin196, _super);
		function SecretShopBtnSkin$Skin196() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",1.1),
						new eui.SetProperty("_Image1","scaleY",1.1)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SecretShopBtnSkin$Skin196.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "dlc_icon_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SecretShopBtnSkin$Skin196;
	})(eui.Skin);

	function SecretShopBtnSkin() {
		_super.call(this);
		this.skinParts = ["red"];
		
		this.elementsContent = [this._Button1_i(),this.red_i()];
	}
	var _proto = SecretShopBtnSkin.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 10;
		t.skinName = SecretShopBtnSkin$Skin196;
		return t;
	};
	_proto.red_i = function () {
		var t = new eui.Image();
		this.red = t;
		t.right = 10;
		t.source = "main2_tishi_png";
		t.top = 4;
		t.touchEnabled = false;
		return t;
	};
	return SecretShopBtnSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/scene/game/btn/SendToDeBtnSkin.exml'] = window.SendToDeBtnSkin = (function (_super) {
	__extends(SendToDeBtnSkin, _super);
	var SendToDeBtnSkin$Skin197 = 	(function (_super) {
		__extends(SendToDeBtnSkin$Skin197, _super);
		function SendToDeBtnSkin$Skin197() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SendToDeBtnSkin$Skin197.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "sendToDe_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SendToDeBtnSkin$Skin197;
	})(eui.Skin);

	function SendToDeBtnSkin() {
		_super.call(this);
		this.skinParts = ["btn","tip"];
		
		this.height = 108;
		this.width = 100;
		this.elementsContent = [this.btn_i(),this.tip_i()];
	}
	var _proto = SendToDeBtnSkin.prototype;

	_proto.btn_i = function () {
		var t = new eui.Button();
		this.btn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 4;
		t.y = 2;
		t.skinName = SendToDeBtnSkin$Skin197;
		return t;
	};
	_proto.tip_i = function () {
		var t = new eui.Image();
		this.tip = t;
		t.source = "share_tip_png";
		t.visible = false;
		t.x = 65;
		t.y = -12;
		return t;
	};
	return SendToDeBtnSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/scene/game/btn/setBtnSkin.exml'] = window.setBtnSkin = (function (_super) {
	__extends(setBtnSkin, _super);
	var setBtnSkin$Skin198 = 	(function (_super) {
		__extends(setBtnSkin$Skin198, _super);
		function setBtnSkin$Skin198() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = setBtnSkin$Skin198.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "main2_shezhi_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return setBtnSkin$Skin198;
	})(eui.Skin);

	function setBtnSkin() {
		_super.call(this);
		this.skinParts = ["red"];
		
		this.height = 125;
		this.width = 125;
		this.elementsContent = [this._Button1_i(),this.red_i()];
	}
	var _proto = setBtnSkin.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 20;
		t.y = 39;
		t.skinName = setBtnSkin$Skin198;
		return t;
	};
	_proto.red_i = function () {
		var t = new eui.Image();
		this.red = t;
		t.source = "main2_tishi_png";
		t.visible = false;
		t.x = 57;
		t.y = 16;
		return t;
	};
	return setBtnSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/scene/game/btn/shangchengBtnSkin.exml'] = window.shangchengBtnSkin = (function (_super) {
	__extends(shangchengBtnSkin, _super);
	function shangchengBtnSkin() {
		_super.call(this);
		this.skinParts = ["shangchengImg","red"];
		
		this.elementsContent = [this.shangchengImg_i(),this.red_i()];
	}
	var _proto = shangchengBtnSkin.prototype;

	_proto.shangchengImg_i = function () {
		var t = new eui.Image();
		this.shangchengImg = t;
		t.source = "main2_shangcheng_png";
		t.x = 0;
		t.y = 20;
		return t;
	};
	_proto.red_i = function () {
		var t = new eui.Image();
		this.red = t;
		t.source = "main2_tishi_png";
		t.visible = false;
		t.x = 64;
		t.y = 0;
		return t;
	};
	return shangchengBtnSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/scene/game/btn/ShareBtnSkin.exml'] = window.ShareBtnSkin = (function (_super) {
	__extends(ShareBtnSkin, _super);
	var ShareBtnSkin$Skin199 = 	(function (_super) {
		__extends(ShareBtnSkin$Skin199, _super);
		function ShareBtnSkin$Skin199() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShareBtnSkin$Skin199.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "share_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ShareBtnSkin$Skin199;
	})(eui.Skin);

	function ShareBtnSkin() {
		_super.call(this);
		this.skinParts = ["btn","tip"];
		
		this.height = 100;
		this.width = 100;
		this.elementsContent = [this.btn_i(),this.tip_i()];
	}
	var _proto = ShareBtnSkin.prototype;

	_proto.btn_i = function () {
		var t = new eui.Button();
		this.btn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 4;
		t.y = 2;
		t.skinName = ShareBtnSkin$Skin199;
		return t;
	};
	_proto.tip_i = function () {
		var t = new eui.Image();
		this.tip = t;
		t.source = "share_tip_png";
		t.visible = false;
		t.x = 65;
		t.y = -12;
		return t;
	};
	return ShareBtnSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/scene/game/btn/ShouChongBtnSkin.exml'] = window.ShouChongBtnSkin = (function (_super) {
	__extends(ShouChongBtnSkin, _super);
	var ShouChongBtnSkin$Skin200 = 	(function (_super) {
		__extends(ShouChongBtnSkin$Skin200, _super);
		function ShouChongBtnSkin$Skin200() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShouChongBtnSkin$Skin200.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "act_shouchong_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ShouChongBtnSkin$Skin200;
	})(eui.Skin);

	function ShouChongBtnSkin() {
		_super.call(this);
		this.skinParts = ["red"];
		
		this.height = 118;
		this.width = 114;
		this.elementsContent = [this._Button1_i(),this.red_i()];
	}
	var _proto = ShouChongBtnSkin.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 1;
		t.y = 12;
		t.skinName = ShouChongBtnSkin$Skin200;
		return t;
	};
	_proto.red_i = function () {
		var t = new eui.Image();
		this.red = t;
		t.source = "main2_tishi_png";
		t.visible = false;
		t.x = 62;
		t.y = 0;
		return t;
	};
	return ShouChongBtnSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/scene/game/btn/weiboBtnSkin.exml'] = window.weiboBtnSkin = (function (_super) {
	__extends(weiboBtnSkin, _super);
	var weiboBtnSkin$Skin201 = 	(function (_super) {
		__extends(weiboBtnSkin$Skin201, _super);
		function weiboBtnSkin$Skin201() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = weiboBtnSkin$Skin201.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.height = 104;
			t.source = "main2_weibo_png";
			t.width = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return weiboBtnSkin$Skin201;
	})(eui.Skin);

	function weiboBtnSkin() {
		_super.call(this);
		this.skinParts = ["red"];
		
		this.elementsContent = [this._Button1_i(),this.red_i()];
	}
	var _proto = weiboBtnSkin.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.y = 20;
		t.skinName = weiboBtnSkin$Skin201;
		return t;
	};
	_proto.red_i = function () {
		var t = new eui.Image();
		this.red = t;
		t.source = "main2_tishi_png";
		t.visible = false;
		t.x = 64;
		t.y = 0;
		return t;
	};
	return weiboBtnSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/scene/game/btn/weixinBtnSkin.exml'] = window.weixinBtnSkin = (function (_super) {
	__extends(weixinBtnSkin, _super);
	var weixinBtnSkin$Skin202 = 	(function (_super) {
		__extends(weixinBtnSkin$Skin202, _super);
		function weixinBtnSkin$Skin202() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = weixinBtnSkin$Skin202.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.height = 104;
			t.source = "main2_weixin_png";
			t.width = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return weixinBtnSkin$Skin202;
	})(eui.Skin);

	function weixinBtnSkin() {
		_super.call(this);
		this.skinParts = ["red"];
		
		this.elementsContent = [this._Button1_i(),this.red_i()];
	}
	var _proto = weixinBtnSkin.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.y = 20;
		t.skinName = weixinBtnSkin$Skin202;
		return t;
	};
	_proto.red_i = function () {
		var t = new eui.Image();
		this.red = t;
		t.source = "main2_tishi_png";
		t.visible = false;
		t.x = 64;
		t.y = 0;
		return t;
	};
	return weixinBtnSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/scene/game/ui/TaskTipUISkin.exml'] = window.TaskTipUISkin = (function (_super) {
	__extends(TaskTipUISkin, _super);
	function TaskTipUISkin() {
		_super.call(this);
		this.skinParts = ["tishiImg","tishiLabel"];
		
		this.height = 40;
		this.width = 290;
		this.elementsContent = [this.tishiImg_i(),this.tishiLabel_i()];
	}
	var _proto = TaskTipUISkin.prototype;

	_proto.tishiImg_i = function () {
		var t = new eui.Image();
		this.tishiImg = t;
		t.horizontalCenter = 0;
		t.source = "main2_tishiditu_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.tishiLabel_i = function () {
		var t = new eui.Label();
		this.tishiLabel = t;
		t.fontFamily = "fzyc";
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "快给小野打个电话吧~";
		t.textColor = 0xFFEF3D;
		t.verticalCenter = 0;
		return t;
	};
	return TaskTipUISkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/scene/game/ui/DiamondUISkin.exml'] = window.DiamondUISkin = (function (_super) {
	__extends(DiamondUISkin, _super);
	function DiamondUISkin() {
		_super.call(this);
		this.skinParts = ["diamondLabel"];
		
		this.height = 70;
		this.width = 250;
		this.elementsContent = [this._Image1_i(),this.diamondLabel_i(),this._Image2_i(),this._Image3_i()];
	}
	var _proto = DiamondUISkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.source = "main2_ditu_png";
		t.x = 10;
		t.y = 8.48;
		return t;
	};
	_proto.diamondLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.diamondLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "shuzi3_fnt";
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 78;
		t.y = 16.56;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "main2_zuanshi_png";
		t.x = 0;
		t.y = 5;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "main2_jiahao1_png";
		t.x = 31;
		t.y = 26;
		return t;
	};
	return DiamondUISkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/scene/game/ui/GoldUISkin.exml'] = window.GoldUISkin = (function (_super) {
	__extends(GoldUISkin, _super);
	function GoldUISkin() {
		_super.call(this);
		this.skinParts = ["goldLabel"];
		
		this.height = 70;
		this.width = 250;
		this.elementsContent = [this._Image1_i(),this.goldLabel_i(),this._Image2_i(),this._Image3_i()];
	}
	var _proto = GoldUISkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "main2_ditu_png";
		t.x = 3;
		t.y = 7.97;
		return t;
	};
	_proto.goldLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.goldLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "shuzi3_fnt";
		t.height = 37;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 74;
		t.y = 16;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "main2_jinbi_png";
		t.x = 2;
		t.y = 6;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "main2_jiahao2_png";
		t.x = 30.05;
		t.y = 26.97;
		return t;
	};
	return GoldUISkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/scene/game/ui/PowerUISkin.exml'] = window.PowerUISkin = (function (_super) {
	__extends(PowerUISkin, _super);
	function PowerUISkin() {
		_super.call(this);
		this.skinParts = ["powerLabel"];
		
		this.height = 70;
		this.width = 250;
		this.elementsContent = [this._Image1_i(),this.powerLabel_i(),this._Image2_i(),this._Image3_i()];
	}
	var _proto = PowerUISkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "main2_ditu_png";
		t.x = 3;
		t.y = 8;
		return t;
	};
	_proto.powerLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.powerLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "shuzi3_fnt";
		t.height = 32;
		t.text = "0/100";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 77;
		t.y = 18;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "main2_tili2_png";
		t.x = 7;
		t.y = 11.04;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "main2_jiahao3_png";
		t.x = 31;
		t.y = 24;
		return t;
	};
	return PowerUISkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/scene/game/GameSceneSkin.exml'] = window.GameSceneSkin = (function (_super) {
	__extends(GameSceneSkin, _super);
	var GameSceneSkin$Skin203 = 	(function (_super) {
		__extends(GameSceneSkin$Skin203, _super);
		function GameSceneSkin$Skin203() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSceneSkin$Skin203.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "main2_qiandao_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSceneSkin$Skin203;
	})(eui.Skin);

	var GameSceneSkin$Skin204 = 	(function (_super) {
		__extends(GameSceneSkin$Skin204, _super);
		function GameSceneSkin$Skin204() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","width",190),
						new eui.SetProperty("_Image1","height",180)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSceneSkin$Skin204.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.horizontalCenter = 0;
			t.source = "main2_shipin_png";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSceneSkin$Skin204;
	})(eui.Skin);

	var GameSceneSkin$Skin205 = 	(function (_super) {
		__extends(GameSceneSkin$Skin205, _super);
		function GameSceneSkin$Skin205() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSceneSkin$Skin205.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "main2_fuli_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSceneSkin$Skin205;
	})(eui.Skin);

	function GameSceneSkin() {
		_super.call(this);
		this.skinParts = ["gameBG","mohuBG","taskTipUI","heartPlugin","qiandaoBtn","diamondUI","coinUI","goldUI","powerUI","redPacketBtn","actBtn","shipinBtn","shareBtn","qrCodeBtn","sendToDeBtn","msBtn","leftBtnGrp","leftGroup","dateLabel","setBtn","shouChongBtn","fuliBtn","dlcBtn","upGroup","btnBG","btnGroup","downGroup","yd_dianhuaImg","dianhuaHand","yindaodianhuaGroup","yd_lianaiImg","lianaiHand","yindaolianaiGroup","yd_gongzuoImg","gongzuoHand","yindaoGongzuoGroup","shipinHand","yd_shipinImg","yindaoShipinGroup","yd_weixinImg","weixinHand","yindaoweixinGroup","backCircle","backHand","yindaoLevelUp","bagCircle","bagHand","yindaoBag","weiCircle","weiHand","yindaoWei","yindaoGroup"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this.gameBG_i(),this.mohuBG_i(),this._Group13_i()];
	}
	var _proto = GameSceneSkin.prototype;

	_proto.gameBG_i = function () {
		var t = new eui.Image();
		this.gameBG = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "main2_beijingtu_1_jpg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.mohuBG_i = function () {
		var t = new eui.Image();
		this.mohuBG = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Group1_i(),this._Group3_i(),this._Group4_i(),this.yindaoGroup_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 720;
		t.left = 0;
		t.top = 0;
		t.touchEnabled = false;
		t.width = 1280;
		t.elementsContent = [this.leftGroup_i()];
		return t;
	};
	_proto.leftGroup_i = function () {
		var t = new eui.Group();
		this.leftGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 720;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.width = 680;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.taskTipUI_i(),this.heartPlugin_i(),this.qiandaoBtn_i(),this.diamondUI_i(),this.coinUI_i(),this.goldUI_i(),this.powerUI_i(),this.redPacketBtn_i(),this.actBtn_i(),this.leftBtnGrp_i()];
		return t;
	};
	_proto.taskTipUI_i = function () {
		var t = new TaskTipUI();
		this.taskTipUI = t;
		t.skinName = "TaskTipUISkin";
		t.x = 115;
		t.y = 109;
		return t;
	};
	_proto.heartPlugin_i = function () {
		var t = new HeartsPlugins();
		this.heartPlugin = t;
		t.skinName = "HeartsPluginSkin";
		t.x = 13;
		t.y = 4;
		return t;
	};
	_proto.qiandaoBtn_i = function () {
		var t = new eui.Button();
		this.qiandaoBtn = t;
		t.label = "";
		t.visible = false;
		t.x = 440;
		t.y = 16;
		t.skinName = GameSceneSkin$Skin203;
		return t;
	};
	_proto.diamondUI_i = function () {
		var t = new DiamondUI();
		this.diamondUI = t;
		t.skinName = "DiamondUISkin";
		t.x = 28;
		t.y = 217.66666666666666;
		return t;
	};
	_proto.coinUI_i = function () {
		var t = new CoinUI();
		this.coinUI = t;
		t.skinName = "CoinUISkin";
		t.x = 28;
		t.y = 149;
		return t;
	};
	_proto.goldUI_i = function () {
		var t = new GoldUI();
		this.goldUI = t;
		t.skinName = "GoldUISkin";
		t.x = 28;
		t.y = 286.3333333333333;
		return t;
	};
	_proto.powerUI_i = function () {
		var t = new PowerUI();
		this.powerUI = t;
		t.skinName = "PowerUISkin";
		t.x = 28;
		t.y = 355;
		return t;
	};
	_proto.redPacketBtn_i = function () {
		var t = new RedPacketBtn();
		this.redPacketBtn = t;
		t.skinName = "RedPacketBtnSkin";
		t.x = 544;
		t.y = 13;
		return t;
	};
	_proto.actBtn_i = function () {
		var t = new ActBtn();
		this.actBtn = t;
		t.skinName = "ActBtnSkin";
		t.x = 434;
		t.y = 4;
		return t;
	};
	_proto.leftBtnGrp_i = function () {
		var t = new eui.Group();
		this.leftBtnGrp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 288;
		t.width = 430;
		t.x = 31;
		t.y = 426;
		t.layout = this._TileLayout1_i();
		t.elementsContent = [this.shipinBtn_i(),this.shareBtn_i(),this.qrCodeBtn_i(),this.sendToDeBtn_i(),this.msBtn_i()];
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 7;
		t.verticalGap = 18;
		return t;
	};
	_proto.shipinBtn_i = function () {
		var t = new eui.Button();
		this.shipinBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 104;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.x = 268;
		t.y = -1;
		t.skinName = GameSceneSkin$Skin204;
		return t;
	};
	_proto.shareBtn_i = function () {
		var t = new ShareBtn();
		this.shareBtn = t;
		t.anchorOffsetX = 54;
		t.anchorOffsetY = 54;
		t.skinName = "ShareBtnSkin";
		t.x = 192;
		t.y = 162;
		return t;
	};
	_proto.qrCodeBtn_i = function () {
		var t = new QRCodeBtn();
		this.qrCodeBtn = t;
		t.anchorOffsetX = 54;
		t.anchorOffsetY = 54;
		t.skinName = "QRCodeBtnSkin";
		t.x = 5;
		t.y = 51;
		return t;
	};
	_proto.sendToDeBtn_i = function () {
		var t = new SendToDeBtn();
		this.sendToDeBtn = t;
		t.anchorOffsetX = 54;
		t.anchorOffsetY = 54;
		t.skinName = "SendToDeBtnSkin";
		t.x = 7;
		t.y = 179;
		return t;
	};
	_proto.msBtn_i = function () {
		var t = new eui.Image();
		this.msBtn = t;
		t.anchorOffsetX = 54;
		t.anchorOffsetY = 54;
		t.source = "sm_btn_png";
		t.x = 179;
		t.y = 229;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 720;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = false;
		t.width = 1280;
		t.elementsContent = [this.upGroup_i()];
		return t;
	};
	_proto.upGroup_i = function () {
		var t = new eui.Group();
		this.upGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 552;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchEnabled = false;
		t.width = 597;
		t.x = 681;
		t.y = 12;
		t.elementsContent = [this._Group2_i(),this.setBtn_i(),this.shouChongBtn_i(),this.fuliBtn_i(),this.dlcBtn_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 386;
		t.elementsContent = [this._Image1_i(),this.dateLabel_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "main2_toumingdi_png";
		t.x = 0;
		t.y = -5;
		return t;
	};
	_proto.dateLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.dateLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "shuzi2_fnt";
		t.horizontalCenter = 6.5;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "999";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -3;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "main2_tianshu_png";
		t.x = 31.000000000000227;
		t.y = 5;
		return t;
	};
	_proto.setBtn_i = function () {
		var t = new SetBtn();
		this.setBtn = t;
		t.skinName = "setBtnSkin";
		t.x = 469;
		t.y = 60;
		return t;
	};
	_proto.shouChongBtn_i = function () {
		var t = new ShouChongBtn();
		this.shouChongBtn = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "ShouChongBtnSkin";
		t.visible = false;
		t.x = 3;
		t.y = -10;
		return t;
	};
	_proto.fuliBtn_i = function () {
		var t = new eui.Button();
		this.fuliBtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.x = 0;
		t.y = 2;
		t.skinName = GameSceneSkin$Skin205;
		return t;
	};
	_proto.dlcBtn_i = function () {
		var t = new SecretShopBtn();
		this.dlcBtn = t;
		t.height = 189;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "SecretShopBtnSkin";
		t.width = 179;
		t.x = 404;
		t.y = 195;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.height = 720;
		t.right = 0;
		t.touchEnabled = false;
		t.width = 1280;
		t.elementsContent = [this.downGroup_i()];
		return t;
	};
	_proto.downGroup_i = function () {
		var t = new eui.Group();
		this.downGroup = t;
		t.anchorOffsetX = 0;
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchEnabled = false;
		t.width = 917;
		t.x = 360;
		t.y = 517;
		t.elementsContent = [this.btnBG_i(),this.btnGroup_i()];
		return t;
	};
	_proto.btnBG_i = function () {
		var t = new eui.Image();
		this.btnBG = t;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(84,0,147,62);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "main2_tubiaodi_png";
		t.y = 139;
		return t;
	};
	_proto.btnGroup_i = function () {
		var t = new eui.Group();
		this.btnGroup = t;
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 917;
		return t;
	};
	_proto.yindaoGroup_i = function () {
		var t = new eui.Group();
		this.yindaoGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = true;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.visible = false;
		t.elementsContent = [this.yindaodianhuaGroup_i(),this.yindaolianaiGroup_i(),this.yindaoGongzuoGroup_i(),this.yindaoShipinGroup_i(),this.yindaoweixinGroup_i(),this.yindaoLevelUp_i(),this.yindaoBag_i(),this.yindaoWei_i()];
		return t;
	};
	_proto.yindaodianhuaGroup_i = function () {
		var t = new eui.Group();
		this.yindaodianhuaGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = true;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.visible = false;
		t.elementsContent = [this.yd_dianhuaImg_i(),this._Image3_i(),this._Group5_i(),this._Label1_i(),this._Label2_i(),this._Label3_i()];
		return t;
	};
	_proto.yd_dianhuaImg_i = function () {
		var t = new eui.Image();
		this.yd_dianhuaImg = t;
		t.bottom = 1;
		t.right = 237;
		t.source = "yindao_quan3_png";
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "yindao_miao_png";
		t.verticalCenter = -30;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.height = 720;
		t.right = 0;
		t.touchEnabled = false;
		t.width = 1280;
		t.elementsContent = [this.dianhuaHand_i()];
		return t;
	};
	_proto.dianhuaHand_i = function () {
		var t = new eui.Image();
		this.dianhuaHand = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_handdowm_png";
		t.x = 921;
		t.y = 476;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.horizontalCenter = 20;
		t.size = 28;
		t.text = "新功能开放啦~";
		t.verticalCenter = -4;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.horizontalCenter = 17;
		t.size = 28;
		t.text = "女友在等你给她打电话哟~";
		t.verticalCenter = 34;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.horizontalCenter = 14;
		t.size = 28;
		t.text = "喵~";
		t.verticalCenter = 75;
		return t;
	};
	_proto.yindaolianaiGroup_i = function () {
		var t = new eui.Group();
		this.yindaolianaiGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = true;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.visible = false;
		t.elementsContent = [this.yd_lianaiImg_i(),this._Image4_i(),this._Group6_i(),this._Label4_i(),this._Label5_i(),this._Image5_i()];
		return t;
	};
	_proto.yd_lianaiImg_i = function () {
		var t = new eui.Image();
		this.yd_lianaiImg = t;
		t.bottom = 1;
		t.right = 237;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_quan3_png";
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_miao_png";
		t.verticalCenter = -30;
		t.x = 410.00000000000006;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.height = 720;
		t.right = 0;
		t.touchEnabled = false;
		t.width = 1280;
		t.elementsContent = [this.lianaiHand_i()];
		return t;
	};
	_proto.lianaiHand_i = function () {
		var t = new eui.Image();
		this.lianaiHand = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_handdowm_png";
		t.x = 921;
		t.y = 476;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.horizontalCenter = 28;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "恭喜你解锁了恋爱功能，";
		t.verticalCenter = 17;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.horizontalCenter = 26.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "可以快速收集好感度了哦~";
		t.verticalCenter = 65;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.left = 6;
		t.source = "yindao_heart_png";
		t.top = -2;
		return t;
	};
	_proto.yindaoGongzuoGroup_i = function () {
		var t = new eui.Group();
		this.yindaoGongzuoGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = true;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.visible = false;
		t.elementsContent = [this._Image6_i(),this.yd_gongzuoImg_i(),this._Image7_i(),this._Group7_i(),this._Label6_i(),this._Label7_i(),this._Label8_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.left = 7;
		t.source = "yindao_gold_png";
		t.top = 210;
		return t;
	};
	_proto.yd_gongzuoImg_i = function () {
		var t = new eui.Image();
		this.yd_gongzuoImg = t;
		t.bottom = 1;
		t.right = 237;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_quan3_png";
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_miao_png";
		t.verticalCenter = -30;
		t.x = 410.00000000000006;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.height = 720;
		t.right = 0;
		t.touchEnabled = false;
		t.width = 1280;
		t.elementsContent = [this.gongzuoHand_i()];
		return t;
	};
	_proto.gongzuoHand_i = function () {
		var t = new eui.Image();
		this.gongzuoHand = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_handdowm_png";
		t.x = 921;
		t.y = 476;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.horizontalCenter = 21;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "钱不是万能的，但是没有";
		t.textAlign = "center";
		t.verticalCenter = -5;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.horizontalCenter = 22;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "钱是万万不能的，工作是";
		t.textAlign = "center";
		t.verticalCenter = 32;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.horizontalCenter = 28.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "赚金币的重要途径哦！喵~";
		t.textAlign = "center";
		t.verticalCenter = 72;
		return t;
	};
	_proto.yindaoShipinGroup_i = function () {
		var t = new eui.Group();
		this.yindaoShipinGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = true;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.visible = false;
		t.elementsContent = [this._Image8_i(),this._Group8_i(),this._Label9_i(),this._Label10_i(),this._Label11_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -176;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_miao_png";
		t.verticalCenter = -8;
		t.x = 410.00000000000006;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.height = 720;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = false;
		t.width = 1280;
		t.elementsContent = [this.shipinHand_i(),this.yd_shipinImg_i()];
		return t;
	};
	_proto.shipinHand_i = function () {
		var t = new eui.Image();
		this.shipinHand = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_handdowm_png";
		t.x = 36;
		t.y = 261;
		return t;
	};
	_proto.yd_shipinImg_i = function () {
		var t = new eui.Image();
		this.yd_shipinImg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_quan3_png";
		t.x = 7;
		t.y = 399;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.horizontalCenter = -152.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "视频开放啦~";
		t.verticalCenter = 29;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.horizontalCenter = -150;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "点击右侧视频按钮观看视频！";
		t.verticalCenter = 67;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.horizontalCenter = -151.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "喵~";
		t.verticalCenter = 108;
		return t;
	};
	_proto.yindaoweixinGroup_i = function () {
		var t = new eui.Group();
		this.yindaoweixinGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = true;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.visible = false;
		t.elementsContent = [this.yd_weixinImg_i(),this._Image9_i(),this._Group9_i(),this._Label12_i(),this._Label13_i(),this._Label14_i()];
		return t;
	};
	_proto.yd_weixinImg_i = function () {
		var t = new eui.Image();
		this.yd_weixinImg = t;
		t.bottom = 1;
		t.right = 237;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_quan3_png";
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_miao_png";
		t.verticalCenter = -30;
		t.x = 410.00000000000006;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.height = 720;
		t.right = 0;
		t.touchEnabled = false;
		t.width = 1280;
		t.elementsContent = [this.weixinHand_i()];
		return t;
	};
	_proto.weixinHand_i = function () {
		var t = new eui.Image();
		this.weixinHand = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_handdowm_png";
		t.x = 921;
		t.y = 476;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.horizontalCenter = 24.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "微信开放啦~";
		t.verticalCenter = -8;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.horizontalCenter = 20.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "快给她发个消息问候一下吧~";
		t.verticalCenter = 33;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.horizontalCenter = 19.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "喵~";
		t.verticalCenter = 78;
		return t;
	};
	_proto.yindaoLevelUp_i = function () {
		var t = new eui.Group();
		this.yindaoLevelUp = t;
		t.height = 720;
		t.left = 0;
		t.top = 0;
		t.visible = false;
		t.width = 1280;
		t.elementsContent = [this._Group10_i(),this._Image10_i(),this._Label15_i(),this._Label16_i(),this._Label17_i()];
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.height = 720;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchEnabled = false;
		t.width = 1280;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.backCircle_i(),this.backHand_i()];
		return t;
	};
	_proto.backCircle_i = function () {
		var t = new eui.Image();
		this.backCircle = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_quan3_png";
		t.x = 188.61;
		t.y = -6;
		return t;
	};
	_proto.backHand_i = function () {
		var t = new eui.Image();
		this.backHand = t;
		t.scaleX = 1;
		t.scaleY = -1;
		t.source = "yindao_handdowm_png";
		t.x = 220.13;
		t.y = 246.65;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_miao_png";
		t.x = 345.04;
		t.y = 121.06;
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "恭喜你，女友现在对你";
		t.x = 464.41;
		t.y = 300.82;
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "好感满满，可以欣赏女友的视频了，";
		t.x = 396.33;
		t.y = 344.35;
		return t;
	};
	_proto._Label17_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "喵~";
		t.x = 576.12;
		t.y = 385.34;
		return t;
	};
	_proto.yindaoBag_i = function () {
		var t = new eui.Group();
		this.yindaoBag = t;
		t.bottom = 0;
		t.height = 720;
		t.right = 0;
		t.visible = false;
		t.width = 1280;
		t.elementsContent = [this._Group11_i(),this._Image11_i(),this._Label18_i(),this._Label19_i(),this._Label20_i()];
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.height = 720;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchEnabled = false;
		t.width = 1280;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bagCircle_i(),this.bagHand_i()];
		return t;
	};
	_proto.bagCircle_i = function () {
		var t = new eui.Image();
		this.bagCircle = t;
		t.bottom = 1;
		t.right = 115;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_quan3_png";
		return t;
	};
	_proto.bagHand_i = function () {
		var t = new eui.Image();
		this.bagHand = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_handdowm_png";
		t.x = 1054.61;
		t.y = 461.13;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_miao_png";
		t.x = 505.04;
		t.y = 201.06;
		return t;
	};
	_proto._Label18_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "背包存放您获得的各种物品";
		t.x = 602.4;
		t.y = 392.79;
		return t;
	};
	_proto._Label19_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "点击打开背包~";
		t.x = 686.32;
		t.y = 436.32;
		return t;
	};
	_proto._Label20_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "喵~";
		t.x = 733.44;
		t.y = 477.31;
		return t;
	};
	_proto.yindaoWei_i = function () {
		var t = new eui.Group();
		this.yindaoWei = t;
		t.bottom = 0;
		t.height = 720;
		t.right = 0;
		t.visible = false;
		t.width = 1280;
		t.elementsContent = [this._Group12_i(),this._Image12_i(),this._Label21_i(),this._Label22_i(),this._Label23_i()];
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.height = 720;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchEnabled = false;
		t.width = 1280;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.weiCircle_i(),this.weiHand_i()];
		return t;
	};
	_proto.weiCircle_i = function () {
		var t = new eui.Image();
		this.weiCircle = t;
		t.bottom = 1;
		t.right = 237;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_quan3_png";
		return t;
	};
	_proto.weiHand_i = function () {
		var t = new eui.Image();
		this.weiHand = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_handdowm_png";
		t.x = 926.61;
		t.y = 461.13;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yindao_miao_png";
		t.x = 425.04;
		t.y = 201.06;
		return t;
	};
	_proto._Label21_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "微博功能开放啦~";
		t.x = 584.38;
		t.y = 392.79;
		return t;
	};
	_proto._Label22_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "可以查看和点赞评论女友发表的";
		t.x = 494.32;
		t.y = 436.32;
		return t;
	};
	_proto._Label23_i = function () {
		var t = new eui.Label();
		t.fontFamily = "fzyc";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "微博动态了哦~";
		t.x = 601.45;
		t.y = 477.31;
		return t;
	};
	return GameSceneSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/scene/load/LoadSceneSkin.exml'] = window.LoadSceneSkin = (function (_super) {
	__extends(LoadSceneSkin, _super);
	function LoadSceneSkin() {
		_super.call(this);
		this.skinParts = ["bgImg","probg","proImg","percentLab"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this.bgImg_i(),this._Group1_i(),this._Label2_i()];
	}
	var _proto = LoadSceneSkin.prototype;

	_proto.bgImg_i = function () {
		var t = new eui.Image();
		this.bgImg = t;
		t.horizontalCenter = 0;
		t.source = "load_bg1_jpg";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 57;
		t.horizontalCenter = 0;
		t.elementsContent = [this.probg_i(),this.proImg_i(),this.percentLab_i(),this._Label1_i()];
		return t;
	};
	_proto.probg_i = function () {
		var t = new eui.Image();
		this.probg = t;
		t.anchorOffsetX = 0;
		t.scale9Grid = new egret.Rectangle(25,0,720,34);
		t.source = "load_jindutiao1_png";
		t.width = 1080;
		t.x = 0;
		t.y = 1;
		return t;
	};
	_proto.proImg_i = function () {
		var t = new eui.Image();
		this.proImg = t;
		t.scale9Grid = new egret.Rectangle(18,0,319,34);
		t.source = "workpro_jindutiao2_png";
		t.width = 290;
		t.x = 0;
		t.y = 1;
		return t;
	};
	_proto.percentLab_i = function () {
		var t = new eui.Label();
		this.percentLab = t;
		t.bold = true;
		t.fontFamily = "fzyc";
		t.horizontalCenter = 0;
		t.size = 36;
		t.strokeColor = 0xF79465;
		t.text = "0%";
		t.textColor = 0xffffff;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = false;
		t.fontFamily = "Arial";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "资源加载中，请稍候...";
		t.textAlign = "center";
		t.textColor = 0x636363;
		t.x = 759;
		t.y = -51;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 6;
		t.fontFamily = "fzyc";
		t.height = 43;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "本应用由 深圳市正易龙科技有限公司 提供";
		t.textAlign = "center";
		t.textColor = 0x827E7E;
		t.verticalAlign = "middle";
		t.width = 1000;
		return t;
	};
	return LoadSceneSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/scene/login/GameAdviceUISkin.exml'] = window.GameAdviceUISkin = (function (_super) {
	__extends(GameAdviceUISkin, _super);
	function GameAdviceUISkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = GameAdviceUISkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 720;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1280;
		t.elementsContent = [this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.text = "健康游戏忠告";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 211;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "抵制不良游戏    拒绝盗版游戏";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 443;
		t.y = 285;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "注意自我保护    谨防受骗上当";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 332.33;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "适度游戏益脑    沉迷游戏伤身";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 379.67;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "合理安排时间    享受健康生活";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 443;
		t.y = 427;
		return t;
	};
	return GameAdviceUISkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/scene/login/LoginPanelSkin.exml'] = window.LoginPanelSkin = (function (_super) {
	__extends(LoginPanelSkin, _super);
	var LoginPanelSkin$Skin206 = 	(function (_super) {
		__extends(LoginPanelSkin$Skin206, _super);
		function LoginPanelSkin$Skin206() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginPanelSkin$Skin206.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "login2_hongseanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.source = "login2_denglu_png";
			t.x = 66;
			t.y = 28;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginPanelSkin$Skin206;
	})(eui.Skin);

	var LoginPanelSkin$Skin207 = 	(function (_super) {
		__extends(LoginPanelSkin$Skin207, _super);
		function LoginPanelSkin$Skin207() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginPanelSkin$Skin207.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "login2_yuanxinganniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "login2_fanhui_png";
			t.verticalCenter = 0;
			return t;
		};
		return LoginPanelSkin$Skin207;
	})(eui.Skin);

	function LoginPanelSkin() {
		_super.call(this);
		this.skinParts = ["bgImg","loginBtn","accountLabel","passwordLabel","backBtn","leftGroup"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this.bgImg_i(),this._Group1_i(),this.leftGroup_i()];
	}
	var _proto = LoginPanelSkin.prototype;

	_proto.bgImg_i = function () {
		var t = new eui.Image();
		this.bgImg = t;
		t.horizontalCenter = 0;
		t.source = "main2_beijingtu_1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 720;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 1280;
		t.elementsContent = [this.loginBtn_i(),this._Image1_i(),this._Image2_i(),this._Image3_i(),this.accountLabel_i(),this.passwordLabel_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto.loginBtn_i = function () {
		var t = new eui.Button();
		this.loginBtn = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0.5;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 519;
		t.y = 577;
		t.skinName = LoginPanelSkin$Skin206;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(61,50,253,2);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "login2_ditu3_png";
		t.x = 457;
		t.y = 347;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "login2_ditu2_png";
		t.x = 489;
		t.y = 380;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "login2_ditu2_png";
		t.x = 489;
		t.y = 460;
		return t;
	};
	_proto.accountLabel_i = function () {
		var t = new eui.EditableText();
		this.accountLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "fzyc";
		t.height = 54.24;
		t.horizontalCenter = "17.5";
		t.maxChars = 12;
		t.prompt = "请输入账号";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "";
		t.textColor = 0x333333;
		t.verticalAlign = "middle";
		t.width = 210.64;
		t.y = 381.76;
		return t;
	};
	_proto.passwordLabel_i = function () {
		var t = new eui.EditableText();
		this.passwordLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.displayAsPassword = true;
		t.fontFamily = "fzyc";
		t.height = 50;
		t.horizontalCenter = "13.5";
		t.maxChars = 12;
		t.prompt = "请输入密码";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "";
		t.textColor = 0x333333;
		t.verticalAlign = "middle";
		t.width = 207;
		t.y = 465.52;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "login2_ren_png";
		t.x = 505.9599999999999;
		t.y = 392;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "login2_suo_png";
		t.x = 507;
		t.y = 474;
		return t;
	};
	_proto.leftGroup_i = function () {
		var t = new eui.Group();
		this.leftGroup = t;
		t.height = 720;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = false;
		t.width = 1280;
		t.elementsContent = [this.backBtn_i()];
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Button();
		this.backBtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 1157;
		t.y = 20;
		t.skinName = LoginPanelSkin$Skin207;
		return t;
	};
	return LoginPanelSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/scene/login/LoginSceneSkin.exml'] = window.LoginSceneSkin = (function (_super) {
	__extends(LoginSceneSkin, _super);
	var LoginSceneSkin$Skin208 = 	(function (_super) {
		__extends(LoginSceneSkin$Skin208, _super);
		function LoginSceneSkin$Skin208() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginSceneSkin$Skin208.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "login2_hongseanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 50;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0.5;
			t.source = "login2_kaishi_png";
			t.verticalCenter = -5.5;
			return t;
		};
		return LoginSceneSkin$Skin208;
	})(eui.Skin);

	function LoginSceneSkin() {
		_super.call(this);
		this.skinParts = ["bgImg","titleLabel","componeyLabel","statusLabel","startBtn","nameLabel","leftGroup"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this.bgImg_i(),this._Group1_i(),this.leftGroup_i()];
	}
	var _proto = LoginSceneSkin.prototype;

	_proto.bgImg_i = function () {
		var t = new eui.Image();
		this.bgImg = t;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "main2_beijingtu_2_jpg";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.height = 720;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.width = 1280;
		t.elementsContent = [this._Image1_i(),this.titleLabel_i(),this.componeyLabel_i(),this.statusLabel_i(),this.startBtn_i(),this.nameLabel_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "login2_ditu_png";
		t.visible = false;
		t.x = 458.18999999999994;
		t.y = 432.75;
		return t;
	};
	_proto.titleLabel_i = function () {
		var t = new eui.Label();
		this.titleLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "fzyc";
		t.height = 43;
		t.size = 20;
		t.text = "深圳正易龙深圳正";
		t.textAlign = "center";
		t.textColor = 0x827e7e;
		t.verticalAlign = "middle";
		t.width = 1000;
		t.x = 140;
		t.y = 627.2;
		return t;
	};
	_proto.componeyLabel_i = function () {
		var t = new eui.Label();
		this.componeyLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "fzyc";
		t.height = 25;
		t.size = 20;
		t.text = "深圳正易龙深圳正";
		t.textAlign = "center";
		t.textColor = 0x827E7E;
		t.verticalAlign = "middle";
		t.width = 1000;
		t.x = 140;
		t.y = 666.67;
		return t;
	};
	_proto.statusLabel_i = function () {
		var t = new eui.Label();
		this.statusLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "fzyc";
		t.height = 25;
		t.size = 20;
		t.text = "深圳正易龙深圳正";
		t.textAlign = "center";
		t.textColor = 0x827E7E;
		t.verticalAlign = "middle";
		t.width = 1000;
		t.x = 140;
		t.y = 689;
		return t;
	};
	_proto.startBtn_i = function () {
		var t = new eui.Button();
		this.startBtn = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 508.71;
		t.skinName = LoginSceneSkin$Skin208;
		return t;
	};
	_proto.nameLabel_i = function () {
		var t = new eui.Label();
		this.nameLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "fzyc";
		t.height = 43;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x333333;
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 209;
		t.x = 554.56;
		t.y = 461.29;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "main2_logo_png";
		t.y = 453.31;
		return t;
	};
	_proto.leftGroup_i = function () {
		var t = new eui.Group();
		this.leftGroup = t;
		t.bottom = 0;
		t.height = 720;
		t.right = 0;
		t.touchEnabled = false;
		t.width = 1280;
		return t;
	};
	return LoginSceneSkin;
})(eui.Skin);generateEUI.paths['resource/assets/game2/view/scene/login/RegisterPanelSkin.exml'] = window.RegisterPanelSkin = (function (_super) {
	__extends(RegisterPanelSkin, _super);
	var RegisterPanelSkin$Skin209 = 	(function (_super) {
		__extends(RegisterPanelSkin$Skin209, _super);
		function RegisterPanelSkin$Skin209() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RegisterPanelSkin$Skin209.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "login2_hongseanniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "login2_zhuce_png";
			t.verticalCenter = 0;
			return t;
		};
		return RegisterPanelSkin$Skin209;
	})(eui.Skin);

	var RegisterPanelSkin$Skin210 = 	(function (_super) {
		__extends(RegisterPanelSkin$Skin210, _super);
		function RegisterPanelSkin$Skin210() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RegisterPanelSkin$Skin210.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "login2_yuanxinganniu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.source = "login2_fanhui_png";
			t.verticalCenter = 0;
			return t;
		};
		return RegisterPanelSkin$Skin210;
	})(eui.Skin);

	function RegisterPanelSkin() {
		_super.call(this);
		this.skinParts = ["bgImg","registerBtn","nameEdit","mimaEdit","mima2Edit","backBtn","leftGroup"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this.bgImg_i(),this._Group1_i(),this.leftGroup_i()];
	}
	var _proto = RegisterPanelSkin.prototype;

	_proto.bgImg_i = function () {
		var t = new eui.Image();
		this.bgImg = t;
		t.source = "main2_beijingtu_1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 720;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 1280;
		t.elementsContent = [this.registerBtn_i(),this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.nameEdit_i(),this.mimaEdit_i(),this.mima2Edit_i(),this._Image5_i(),this._Image6_i(),this._Image7_i()];
		return t;
	};
	_proto.registerBtn_i = function () {
		var t = new eui.Button();
		this.registerBtn = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = -1.5;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 517;
		t.y = 576.6699999999998;
		t.skinName = RegisterPanelSkin$Skin209;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 290;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(56,87,257,28);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "login2_ditu3_png";
		t.x = 457;
		t.y = 267;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "login2_ditu2_png";
		t.x = 489;
		t.y = 292.02;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "login2_ditu2_png";
		t.x = 489;
		t.y = 372.02;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "login2_ditu2_png";
		t.x = 489;
		t.y = 452.02;
		return t;
	};
	_proto.nameEdit_i = function () {
		var t = new eui.EditableText();
		this.nameEdit = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "fzyc";
		t.height = 50;
		t.maxChars = 12;
		t.prompt = "请输入账号";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "";
		t.textColor = 0x333333;
		t.verticalAlign = "middle";
		t.width = 210;
		t.x = 560;
		t.y = 295.02;
		return t;
	};
	_proto.mimaEdit_i = function () {
		var t = new eui.EditableText();
		this.mimaEdit = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.displayAsPassword = true;
		t.fontFamily = "fzyc";
		t.height = 50;
		t.maxChars = 12;
		t.prompt = "请输入密码";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "";
		t.textColor = 0x333333;
		t.verticalAlign = "middle";
		t.width = 205;
		t.x = 560;
		t.y = 376.02;
		return t;
	};
	_proto.mima2Edit_i = function () {
		var t = new eui.EditableText();
		this.mima2Edit = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.displayAsPassword = true;
		t.fontFamily = "fzyc";
		t.height = 50;
		t.maxChars = 12;
		t.prompt = "请输入密码";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "";
		t.textColor = 0x333333;
		t.verticalAlign = "middle";
		t.width = 205;
		t.x = 560;
		t.y = 457.02;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "login2_ren_png";
		t.x = 505;
		t.y = 303;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "login2_suo_png";
		t.x = 508;
		t.y = 385;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "login2_suo_png";
		t.x = 508;
		t.y = 465;
		return t;
	};
	_proto.leftGroup_i = function () {
		var t = new eui.Group();
		this.leftGroup = t;
		t.height = 720;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = false;
		t.width = 1280;
		t.elementsContent = [this.backBtn_i()];
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Button();
		this.backBtn = t;
		t.height = 98;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 98;
		t.x = 1155;
		t.y = 21.33;
		t.skinName = RegisterPanelSkin$Skin210;
		return t;
	};
	return RegisterPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 30;
		this.minWidth = 60;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5),
					new eui.SetProperty("labelDisplay","text","")
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "fzyc";
		t.left = 8;
		t.right = 8;
		t.size = 22;
		t.text = "label";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
				])
			,
			new eui.State ("downAndSelected",
				[
				])
			,
			new eui.State ("disabledAndSelected",
				[
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);