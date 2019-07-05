// pages/receive/receive.js
var n = 0
/*
filePath需要使用wx.env.USER_DATA_PATH + '/tmp.txt'
    */
Page({
  receive() {
    //获取随机数部分
    n = Date.parse(new Date())/1000
    this.setData({
      buttonshow: false,
      containshow: true,
       choose:1
    });


    if (this.data.choose === 0) {
      wx.getFileSystemManager().readFile({
        filePath: 'files/新建文本文档.txt',
        encoding: 'utf-8',
        success: res => {
          //返回临时文件路径
          this.setData({text:res.data})
          console.log(res.data)

        },
        fail: console.error
      })
        }



    else if(this.data.choose===1 ){
      this.setData({ audio: { src: wx.getStorageSync("voicesavedfilepath") } })
      const that=this
      console.log(this.data.audio.author)
      wx.playVoice({
        filePath: this.data.audio.src,
        success() {console.log('ok') },
        complete(){console.log()}
      })
    }
    else if(this.data.choose===2){
   
    }
    else if(this.data.choose===3){this.setData({videosrc:'../../files/video/3.mp4'})}
    
  },
  data: {
    text:'12',
    audio: {
      poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
      name: '',
      author: '12',
      src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46'
    },
    audioAction: {
      method: 'pause'
      },
   
    photosrc:'',
    videosrc:'', 
    choose:4, 
    buttonshow: true,
    containshow: false, 
   
  },
  /*confirm() {
    
  },*/
  
  
  
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.videoContext = wx.createVideoContext('myVideo')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  videoErrorCallback(e) {
    console.log('视频错误信息:')
    console.log(e.detail.errMsg)
  }
})