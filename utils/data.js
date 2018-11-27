/**
 * banner数据
 */
function getBannerData() {
  var arr = ['../../images/banner_01.png', '../../images/banner_02.png']
  return arr
}
/*
 * LeeCH ^_^
 */
function getIndexNavData() {
  var arr = [{
      id: 1,
      icon: "../../images/nav_icon_01.png",
      title: "报修"
    },
    {
      id: 2,
      icon: "../../images/nav_icon_02.png",
      title: "评价"
    },
    {
      id: 3,
      icon: "../../images/nav_icon_03.png",
      title: "报修记录"
    }
  ]
  return arr
}
/*
 * 首页 对应 标签 数据项
 */
function getIndexNavSectionData() {
  var arr = [
    [ //1
      {

        subject: "我要报修",
        coverpath: "../../images/recommend_img_01.png",
      }
    ],
    [ //2
      {
        subject: "我的评价",
        coverpath: "../../images/recommend_img_02.png",
      }
    ],
    [ //3

      {
        subject: " 我的报修记录！",
        coverpath: "../../images/recommend_img_03.png",

      }
    ],

  ]
  return arr
}

function getSkilledData() {
  var arr = [

  ]
  return arr
}

/**
 * 选择器 数据
 */

function getPickerData() {
  var arr = [{
    name: '',
    phone: '',
    province: '',
    city: '',
    addr: ''
  }]
  return arr
} //*/
/**
 * 查询 地址
 * */
var user_data = userData()

function searchAddrFromAddrs(addrid) {
  var result
  for (let i = 0; i < user_data.addrs.length; i++) {
    var addr = user_data.addrs[i]
    console.log(addr)
    if (addr.addrid == addrid) {
      result = addr
    }
  }
  return result || {}
} /*LeeCH^_^*/
/**
 * 用户数据
 * */
function userData() {
  var that = this;
  var arr = {
    uid: '',
    nickname: "",
    name: wx.getStorageSync("data_name"),
    phone: wx.getStorageSync("data_phone"),
    avatar: '',
    addrs: []
  }
  return arr
}

function provinceData() {
  var arr = [
  ]
  return arr
}

function cityData() {
  var arr = [

  ]
  return arr
}
/*
 * 对外暴露接口
 */
module.exports = {
  getBannerData: getBannerData,
  getIndexNavData: getIndexNavData,
  getIndexNavSectionData: getIndexNavSectionData,
  getPickerData: getPickerData,
  getSkilledData: getSkilledData,
  userData: userData,
  provinceData: provinceData,
  cityData: cityData,
  searchAddrFromAddrs: searchAddrFromAddrs
  /*LeeCH^_^*/
}