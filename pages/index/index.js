//index.js
//获取应用实例
var app = getApp()
var fileData = require('../../utils/data.js')

Page({
  // 页面初始数据
  data: {
    colors: ['red', 'orange', 'green'],
    // banner 初始化
    /*LeeCH ^ _ ^ */
    banner_url: fileData.getBannerData(),
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    // nav 初始化
    navTopItems: fileData.getIndexNavData(),
    navSectionItems: fileData.getIndexNavSectionData(),
    curNavId: 1,
    curIndex: 0
  },

  onLoad: function() {
    /*LeeCH ^ _ ^ */var that = this
    that.setData({
      list: that.data.navSectionItems
    })
  },
  //标签切换
  switchTab: function(e) {
    let id = e.currentTarget.dataset.id,
      index = parseInt(e.currentTarget.dataset.index)
    this.curIndex = parseInt(e.currentTarget.dataset.index)
    console.log(e)
    var that = this
    this.setData({
      curNavId: id,
      curIndex: index,
    })

  },

  Evaluate: function() {
    wx.navigateTo({
      url: '../evaluate/evaluate'
    })
  },

  navigateDetail: function() {
    wx.navigateTo({
      url: '../detail/detail'
    })/*LeeCH ^ _ ^ */
  },



  // 跳转至详情页

  // 加载更多
  loadMore: function(e) {
    console.log('加载更多')
    var curid = this.data.curIndex

    if (this.data.navSectionItems[curid].length === 0) return

    var that = this
    that.data.navSectionItems[curid] = that.data.navSectionItems[curid].concat(that.data.navSectionItems[curid])
    that.setData({
      list: that.data.navSectionItems,
    })
  },
  // book
  bookTap: function(e) {
    wx.navigateTo({
      url: '../book/book?aid=' + e.currentTarget.dataset.aid
    })
  },/*LeeCH ^ _ ^ */


  onShareAppMessage: function() {
    return {
      title: '云丹田报修小程序',
      path: 'pages/index/index?id=123'
    }
  },
})