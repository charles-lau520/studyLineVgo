//index.js
//获取应用实例
const app = getApp()

Page({
	data: {
		list: [{
			title: 'ruler',
			subtitlle: '尺子',
			coverPath: '../../static/list/1.jpg',
			type: 1
		}, {
			title: 'juice',
			subtitlle: '果汁',
			coverPath: '../../static/list/2.jpg',
			type: 1
		}, {
			title: 'jacket',
			subtitlle: '夹克',
			coverPath: '../../static/list/3.jpg',
			type: 2
		}, {
			title: 'boat',
			subtitlle: '小船',
			coverPath: '../../static/list/4.jpg',
			type: 2
		}],
		listButton:[],

	},
	onDefaultShow: function() {
		let list = [{
			title: 'ruler',
			subtitlle: '尺子',
			coverPath: '../../static/list/1.jpg',
			type: 1
		}, {
			title: 'juice',
			subtitlle: '果汁',
			coverPath: '../../static/list/2.jpg',
			type: 1
		}, {
			title: 'jacket',
			subtitlle: '夹克',
			coverPath: '../../static/list/3.jpg',
			type: 2
		}, {
			title: 'boat',
			subtitlle: '小船',
			coverPath: '../../static/list/4.jpg',
			type: 2
		}];
		return list
	},
	//已会
	onWordsFin: function() {
		//console.log(onDefaultShow());
		this.setData({
			listButton: this.onWordsFlag(1)
		})
		console.log(this.data.listFin);
	},
	//多巩固
	onWordsUnFin: function() {
		this.setData({
			listButton: this.onWordsFlag(2)
		})
	},
	onWordsFlag: function(flag) {
		let data = this.data.list;
		console.log(data.list);
		let newData = [];
		let i = 0;
		let len = data.length;
		for (let i = 0; i < data.length; i++) {
			if (data[i].type == flag) {
				console.log(data[i].title);
				newData.push(data[i]);
			}
		}
		console.log(newData);
		return newData
	},
	onJumpHome:function(){
		wx.navigateTo({
			url:"/pages/index/index"
		})
	}

})
