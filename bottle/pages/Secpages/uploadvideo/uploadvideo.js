const sourceType = 'album'

Page({
  onShareAppMessage() {
    return {
      title: '选择视频',
      path: 'pages/index/index'
    }
  },

  data: {
    sourceType: '相册',
    
    src:''
  },

  chooseVideo() {
    const that = this
    wx.chooseVideo({
      sourceType: ['album'],
      
      success(res) {
      that.setData({
          src: res.tempFilePath
        })
      }
    })
  },
  keep(){
  wx.saveFile({
    tempFilePath: this.data.src,
    success(res){
      const savedFilePath = res.savedFilePath
       wx.showToast({
        title: '保存成功',
      })  
    }
  })
 },

  cancel() {
    wx.showModal({
      title: '删除视频',
      content: '确定要删除视频？',
      showCancel: true,
      canaleText: "否",
      cancelColor: "skyblue",
      confirmText: "是",
      confirmColor: "skyblue",
      success: function (res) {
        if (res.cancel) {

        } else {
         wx.navigateTo({
           url: '/pages/index/index',
         })
        }
      }
    })
  }
})



