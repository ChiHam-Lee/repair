var app = getApp()
var mydata = require('../../utils/data')
var util = require('../../utils/util')

Page({
  data: {   /*LeeCH ^ _ ^*/
    addrArray: util.replacePhone(mydata.userData().addrs, true),
    addrIndex: 0,
    date: '2018-01-01',
    time: '12:00',
    address: "",
    name: "",
    phone: "",
    bookToastHidden: true,

    multiArray: [
      ["中山大学珠海校区"],
      ['榕园区', '荔园区', '教学区', '海滨红楼(办公区)', '办公区', '海滨红楼(教学区)', '体育场馆', '高低电房', '公共区域'],
      ['榕园1号', '榕园2号', '榕园3号', '榕园4号', '榕园5号', '榕园6号', '榕园7号', '榕园8号', '榕园9号', '榕园10号', '榕园11号', '榕园12号']
    ], /*LeeCH ^_^*/
    objectMultiArray: [
      [{
          id: 0,
          name: '中山大学珠海校区'
        },

      ],
      [{
          id: 0,
          name: '榕园区'
        },
        {
          id: 1,
          name: '荔园区'
        },
        {
          id: 2,
          name: '教学区'
        },
        {
          id: 3,
          name: '海滨红楼(办公区)'
        },
        {
          id: 4,
          name: '办公区'
        },
        {
          id: 5,
          name: '海滨红楼(教学区)'
        },
        {
          id: 6,
          name: '体育场馆'
        },
        {
          id: 7,
          name: '高低电房'
        },
        {
          id: 8,
          name: '公共区域' /*LeeCH ^_^*/
        },
      ],
      [{
          id: 0,
          name: '榕园1号'
        },
        {
          id: 1,
          name: '榕园2号'
        },
        {
          id: 2,
          name: '榕园3号'
        },
        {
          id: 3,
          name: '榕园4号'
        },
        {
          id: 4,
          name: '榕园5号'
        },
        {
          id: 5,
          name: '榕园6号'
        },
        {
          id: 6,
          name: '榕园7号'
        },
        {
          id: 7,
          name: '榕园8号'
        },
        {
          id: 8,
          name: '榕园9号'
        },
        {
          id: 9,
          name: '榕园10号'
        },
        {
          id: 10,
          name: '榕园11号'
        },
        {
          id: 11,
          name: '榕园12号'
        },
      ]
    ],
    multiIndex: [0, 0, 0],


  },
  onLoad: function(options) {
    this.setData({
      //artype: options.artype
    })
  },

  onShow: function(event) {
    this.setData({
      address: wx.getStorageSync("data_addr"),
      name: wx.getStorageSync("data_name"),
      phone: wx.getStorageSync("data_phone")
    })
  },
  // 地址选择
  bindAddrPickerChange: function(e) {
    console.log('Addrpicker发送选择改变，携带值为', e.detail.value)
    /*LeeCH ^ _ ^*/
    this.setData({
      addrIndex: e.detail.value
    })
  },

//!!报修的request函数!!
  bindToastTap: function() {
    console.log('预定成功');
    this.setData({
      bookToastHidden: false
    });
    wx.request({
      url: '', //预约的url地址
      data: {
        date: date,//发送到后端的各种数据
        time: time,
        address: address,
        name: name, 
        phone: phone,
        content: content,
      },
      header: {
        'content-type': 'application' /*LeeCH ^_^*/
      },
      method: "POST",

    })
  },


  hideToast: function() {
    this.setData({
      bookToastHidden: true
    })
  },
  // 日期选择
  bindDateChange: function(e) {
    console.log('date picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  // 时间选择
  bindTimeChange: function(e) {
    console.log('time picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },


  bindMultiPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindMultiPickerColumnChange: function(e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['榕园区', '荔园区', '教学区', '海滨红楼(办公区)', '办公区', '海滨红楼(教学区)', '体育场馆', '高低电房', '公共区域']; /*LeeCH ^ _ ^*/
            data.multiArray[2] = ['榕园1号', '榕园2号', /*LeeCH ^_^*/ '榕园3号', '榕园4号', '榕园5号', '榕园6号', '榕园7号', '榕园8号', '榕园9号', '榕园10号', '榕园11号', '榕园12号'];
            break;
        }
        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
        break;
      case 1:
        switch (data.multiIndex[0]) {
          case 0:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['榕园1号', '榕园2号', '榕园3号', '榕园4号', '榕园5号', '榕园6号', '榕园7号', '榕园8号', '榕园9号', '榕园10号', '榕园11号', '榕园12号'];
                break;
              case 1:
                data.multiArray[2] = ['荔园1号', '荔园2号西', '荔园2号东', '荔园3号', '荔园4号东', '荔园4号西', '荔园5号', '荔园6号', '荔园7号', '荔园8号', '荔园9号', '荔园10号', '荔园11号', '荔园14号', '荔园15号', '荔园16号', '荔园17号', '荔园18号', '荔园19号'];
                break;
              case 2:
                data.multiArray[2] = ['教学楼', '学院楼(酒店)', '旅游学院', '中法核'];
                break;
              case 3:
                data.multiArray[2] = ['1栋', '2栋', '3栋', '4栋', '5栋', '6栋', '7栋', '8栋', '9栋', '10栋', '11栋', '12栋', '13栋', '14栋', '15栋', '16栋', '17栋', '18栋']; /*LeeCH ^_^*/
                break;
              case 4:
                data.multiArray[2] = ['图书馆', '行政楼'];
                break;
              case 5:
                data.multiArray[2] = ['1栋', '2栋', '3栋', '4栋', '5栋', '6栋', '7栋', '8栋', '9栋'];
                break;
              case 6:
                data.multiArray[2] = ['游泳馆'];
                break;
              case 7:
                data.multiArray[2] = ['榕园电房', '荔园区电房', '教学区电房'];
                break;
              case 8:
                data.multiArray[2] = ['若海路', '逸仙大道', '瀚林路', '南门', '北门', '东门', '隐湖路', '岁月湖餐厅', /*LeeCH ^ _ ^*/ '榕园饭堂', '荔园饭堂', '门诊部', '珠影超市', '灯光球场'];
                break;
            }
            break;
        }
        data.multiIndex[2] = 0;
        console.log(data.multiIndex);
        break;
    }
    this.setData(data);
  },

  chooseimage: function(event) {
    var that = this;
    wx.chooseImage({
      count: 9, /*LeeCH ^_^*/
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        var tempFilePaths = res.tempFilePaths;
        that.setData({
          tempFilePaths: res.tempFilePaths
        });
        wx.showToast({
          title: '正在上传...',
          icon: 'loading',
          mask: true,
          duration: 1500,
        })
        wx.uploadFile({
          url: '  ', //接收图像url地址
          tempFilePaths: tempFilePaths[0],
          name: 'photo',
          formData: {
            'user': 'test'
          },
          success: function(res) {
            var data = res.data
            //do something
          }
        })
        wx.setStorage({
          key: "photo",
          data: tempFilePaths[0]
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