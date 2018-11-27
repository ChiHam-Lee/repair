//var myData = require("../../utils/data")

Page({
  data: {
    data_Name: "",
    data_Phone: "",
    data_Addr: "",
    /*LeeCH ^_^*/
    proviIndex: 0,
    cityIndex: 0,
    saveToastHidden: true
  },
  onLoad: function(options) {


  },

  nameInput: function(e) {
    this.setData({
      data_Name: e.detail.value
    })
  },
  phoneInput: function(e) {
    this.setData({
      data_Phone: e.detail.value
    })
  },
  addrInput: function(e) {
    this.setData({
      data_Addr: e.detail.value
    }) /*LeeCH ^_^*/
  },

  Submit: function() {
    wx.setStorageSync("data_name", /*LeeCH ^_^*/ this.data.data_Name)
    wx.setStorageSync("data_phone", this.data.data_Phone)
    wx.setStorageSync("data_addr", this.data.data_Addr)
    wx.switchTab({
      url: '../user/user',
    })


  },

  hideToast: function() {
    this.setData({
      saveToastHidden: true
    })
  },

  submitForm: function() {
    console.log('保存成功')
    this.setData({
      saveToastHidden: false,
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