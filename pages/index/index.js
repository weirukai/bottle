//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    list: [
      {
        id: "audio",
        name: "音频",
        open: false,
        pages:[
           { id:"record",
            name:"打开录音"
            },
            { id:"recordUpload",
              name:"本地上传"
              }
            ],
        others: "",
       

      },
      {
        id: "text",
        name: "留言",
        open: false,
        pages:[
          { id:"word",
            name:"留言"}],
        others: "",
      },
      {
        id: "video",
        name: "视频",
        open: false,
        pages: [
          {
            id:"shooting",
             name:'摄像'},
             { 
               id:"shootingUpload",
               name:'本地上传'}],
        others: ""
      },
      {
        id: "photo",
        name: "图片",
        open: false,
        pages:[
          {
            id:"picture",
            name:"拍照"},
            {
              id:"pictureUpload",
              name:"本地图片"}],
        others: ""
      }
    ]
  },
  //事件处理函数
  kindToggle(e)
  {
    var id=e.currentTarget.id
    var list=this.data.list
    for(var i=0 ;i<list.length;i++)
    {
      
      if(id===list[i].id)
      {
        list[i].open=!list[i].open
      }else{list[i].open=false}
    }
    
    this.setData({list})
    //wx.reportAnalytics('click_view_programmatically', {})


  },
  //
  clickrecord()
  {

  },
  

  /*官方函数
  kindToggle(e) {
    const id = e.currentTarget.id//e是事件对象，得到的是当前对象的id，点第一个那么值就是view
    const list = this.data.list//this指向的是当前的对象，当前对象是触发该事件的DOM
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id === id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }//这个循环的作用大概是判断你点击的哪一个list，遍历所有的list的id与当前
    //对象的id比较，相等的话就会开启对pages的渲染
    this.setData({
      list
    })//注意加上this指针，要不然会把视图层其他dom节点对象的list改变
    //setdata（）接受的是一个对象，那我们把{list}这个对象传进去
   // wx.reportAnalytics('click_view_programmatically', {})
  },*/

  bindViewTap:function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
