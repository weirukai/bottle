const sourceType='camera'
const camera = [['front'], ['back'], ['front', 'back']]

// eslint-disable-next-line
const duration = Array.apply(null, { length: 60 }).map(function (n, i) {
  return i + 1
})

Page({
  onShareAppMessage() {
    return {
      title: '拍摄视频',
      path: 'pages/index/index1'
    }
  },
 data:{
   sourceType:'拍摄',

   cameraIndex:2,
   camera:['前置','后置','前置或后置'],

   durationIndex:59,
   duration: duration.map(function(t) {return t + '秒'}),

   src:''
 },
 cameraChange(e){
   this.setData({
     cameraIndex:e.detail.value
   })
 },
 durationChange(e){
   this.setData({
     durationIndex:e.detail.value
   })
 },
 chooseVideo(){
   const that = this
   wx.chooseVideo({  
     sourceType:['camera'],
     camera:camera[this.data.cameraIndex],
     maxDuration:duration[this.data.durationIndex],
     success(res){
       that.setData({
         src:res.tempFilePath
       })
     }
   })
 },
  keep() {
    wx.saveFile({
      tempFilePath: this.data.src,
      success(res) {
        const saveFilePath = res.savedFilePath
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
            url: 'video',

        })
      }
      }
    })
  }
})