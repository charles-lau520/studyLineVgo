//index.js
//获取应用实例
const app = getApp()

Page({
	data: {
		
	},
	onJumpWords:function(){
		wx.navigateTo({
			url:"/pages/words/words"
		})
	}


})
