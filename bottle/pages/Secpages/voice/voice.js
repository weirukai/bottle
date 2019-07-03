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
    recordingtime:"00:00:00",
    recordtime:0,
    playingtime:"00:00:00",
    playtime:0,
    playingvoice:false,//palyvoice函数启动之后更新，用来控制stop
    // tempFilePath
  },//data中的数据都是private的，需要调用对象的对外接口（方法）才能修改，
  //这里提供的修改接口是setData



  startRecord()
  {
    this.setData({
        recording:true
      } )
    const that=this//对象转换，方便在闭包中访问page中的属性
//时间开始，开始计时 setinterval
recordinterval=setInterval(
  function(){
    var recordtime=that.data.recordtime+1//更新时间,data对象里面的东西要用 .
   var recordingtime= formatTime(recordtime) //时间转换
    that.setData(                                         //刷新视图层和data的
      {
                  recordingtime,
                  recordtime,
      })        //console.log(recordingtime)
   
  },1000)
   wx.startRecord({
    success: function(res) {
      const temppath=res.tempFilePath
      that.setData({
        tempFilePath:temppath,
      })
      //console.log(temppath)
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
//播放录音
  clearInterval(playinterval)
  this.setData({
   playingtime: formatTime(0),
    playtime: 0
  })
  wx.stopVoice()

},





playVoice()
{
  const that=this
 // console.log(1)通过log确认事件响应了
  //开始播放录音,控制stopvoice可以响应
  playinterval=setInterval( function()
  {
    var playtime=that.data.playtime+1
    var playingtime=formatTime(playtime)
    that.setData(
     { playtime,
      playingtime,
     }
    )
  },1000)
  this.setData({
    playingvoice:true,
  })
  wx:wx.playVoice(
    {
    filePath: this.data.tempFilePath,
    duration: 60,
    //录音播放完毕回调success
    //
    //大bug！！！！！手机端显示正常，电脑端异常！！！！
    //
    success: function(res) {
      //console.log(that.data.tempFilePath)
      clearInterval(playinterval)
      that.setData(
        {
          playtime: 0,
          playingtime: "00:00:00",
          playingvoice: false
        })
    },
    fail: function(res) 
    {
      //console.log(0)
    },
    complete: function(res) {
      /*clearInterval(playinterval)
        */
    },
  })
  
},
clear()
{
//再次跳转到这个页面
wx.navigateTo({
  url: 'voice',
  success: function(res) {},
  fail: function(res) {},
  complete: function(res) {},
})
},


throwbottle(){
  //后期动画
  var that=this
  wx.saveFile({
  tempFilePath:that.data.tempFilePath,
  success(res){
    const savedfilepath=res.savedFilePath
    that.setData({
      savedfilepath
    })
  },
  fail(){
  console.log("saveerror")
  }
  })
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