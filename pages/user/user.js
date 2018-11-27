//index.js
//获取应用实例
var app = getApp() /*LeeCH ^_^*/
var myData = require('../../utils/data')
var util = require('../../utils/util')

Page({
  data: {
    userData: myData.userData(),

    addrDate: ""
  },
  onLoad: function(options) { /*LeeCH ^_^*/

    var that = this;

  },
  onShow: function(event) {
    this.setData({
      addrDate: wx.getStorageSync('data_addr')
    })
  },
  // 地址编辑
  editAddr: function(e) /*LeeCH ^_^*/ {
    console.log(e)
    wx.navigateTo({
      url: '../edit_addr/edit_addr'
    })
  },
  onShareAppMessage() {
    return {
      title: "云丹田报修",
      path: 'pages/index/index?id=123'
      /*LeeCH ^_^*/
    }
  }

})