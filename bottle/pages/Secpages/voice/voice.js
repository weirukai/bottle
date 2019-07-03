// pages/Secpages/voice/voice.js
//const util = require('../../../../util/util.js')
var recordinterval
var playinterval

function formatTime(time) {
  if (typeof time !== 'number' || time < 0) {
    return time
  }
    const hour = parseInt(time / 3600, 10)
    time %= 3600
    const minute = parseInt(time / 60, 10)
    time = parseInt(time % 60, 10)
    const second = time

    return ([hour, minute, second]).map(function (n) {
      n = n.toString()
      return n[1] ? n : '0' + n
    }).join(':')
  }
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"心愿瓶——记录你的心灵之声",
    recording:false,//录音开启
    hasrecord: false,//录音结束
    playing: false,
    recordingtime:"00:00:00",
    recordtime:0,
    playingtime:"00:00:00",
    playtime:0,


    playingvoice:true,//palyvoice函数启动之后更新，用来控制stop


  },//data中的数据都是private的，需要调用对象的对外接口（方法）才能修改，
  //这里提供的修改接口是setData
  

  startRecord()
  {
    this.setData(
      {
        recording:true
      }
    )
    const that=this//对象转换，方便在闭包中访问page中的属性
//时间开始，开始计时 setinterval
recordinterval=setInterval(
  function(){
   
    var recordtime=that.data.recordtime+1//更新时间,data对象里面的东西要用 .
   var recordingtime= formatTime(recordtime) //时间转换
    that.setData(                                         //刷新视图层和data的中
                {
                  recordingtime,
                  recordtime,
                }
    )
     //console.log(recordingtime)
  },1000)
  WX:wx.startRecord({
    success: function(res) {
      const temppath=res.tempFilePath

    },
    fail: function(res) {},
    complete: function(res) {
      that.setData({
        hasrecord:true,
        recording:false,
      })//录音结束，更新数据 
      clearInterval(recordinterval)
    },
  })
  
},
  stopRecord(){
  wx.stopRecord()
  },//点完之后相当于执行上面的complete



stopvoice(){
//停止播放录音

},
playVoice()
{
  
  //开始播放录音
},
clear()
{
//清除录音
},








  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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
  onShareAppMessage: function () {}

  
})