var app = getApp()
Page({
  data: {
    record: ""
  },
  /*LeeCH ^_^*/
  onLoad: function(options) {
    var that = this
    wx.request({ //获取服务器中报修记录的数据
      url: ' ', //记录数据的url地址
      method: "GET", //GET方法
      header: {
        'content-type': 'application'
      },
      data: {

      },
      success: function(res) {
        that.setData({/*LeeCH ^_^*/
          record: res.data //返回的data赋值给record
        })
      }
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