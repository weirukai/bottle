// pages/receive/receive.js
//const audiofilepaht = require('../Secpages/voice/voice.js')
const util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        id:"audo",
        name:""
      }
    ],
    buttonshow:true,
    containshow:false,


    

  },
  
  receive(){
    //更新页面
    this.setData({
      buttonshow:false,
      containshow:true,
    })




  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(wx.getStorageSync("voicesavedfilepath"))

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
  onShareAppMessage: function () {

  }
})