// pages/clipperImage/clipperImage.js
Page({
  okCutImg: function () {
    var that = this;
    var canvasW = that.data.canvasW;
    var canvasH = that.data.canvasH;
    var nowCutW = that.data.cutType ? canvasW : that.data.nowCutW;
    var nowCutH = that.data.cutType ? that.data.cutH : that.data.nowCutH;
    var cutX = that.data.cutX;
    var cutY = that.data.cutY;
    const ctx = wx.createCanvasContext('cutImg');
    ctx.setGlobalAlpha(1)
    ctx.drawImage(that.data.img, 0, 0, canvasW, canvasH)
    ctx.draw()
    wx.canvasToTempFilePath({
      x: cutX,
      y: cutY,
      width: nowCutW,
      height: nowCutH,
      destWidth: nowCutW,
      destHeight: nowCutH,
      canvasId: 'cutImg',
      success: function (res) {
        var aa = res.tempFilePath
        that.setData({
          cutImgUrl: aa,
          prienFlag: false,
          alreay: false
        })
      }
    })
  },
  canvasMove: function (e) {
    var that = this;
    var canvasW = that.data.canvasW;
    var canvasH = that.data.canvasH;
    var nowCutW = that.data.cutType ? canvasW : that.data.nowCutW;
    var nowCutH = that.data.cutType ? that.data.cutH : that.data.nowCutH
    var touches = e.touches[0];
    var x = touches.x;
    var y = touches.y - (Number(nowCutH) / 2);
    that.data.cutType ? x = 0 : x = x - (Number(nowCutW) / 2);
    that.setData({
      cutX: x,
      cutY: y
    })
    const ctx = wx.createCanvasContext('cutImg');
    ctx.setGlobalAlpha(0.4)
    ctx.drawImage(that.data.img, 0, 0, canvasW, canvasH)
    ctx.setFillStyle('red')
    ctx.fillRect(x, y, nowCutW, nowCutH)
    ctx.draw()
  },
  canvasMove: function (e) {
    var that = this;
    var canvasW = that.data.canvasW;
    var canvasH = that.data.canvasH;
    var nowCutW = that.data.cutType ? canvasW : that.data.nowCutW;
    var nowCutH = that.data.cutType ? that.data.cutH : that.data.nowCutH
    var touches = e.touches[0];
    var x = touches.x;
    var y = touches.y - (Number(nowCutH) / 2);
    that.data.cutType ? x = 0 : x = x - (Number(nowCutW) / 2);
    that.setData({
      cutX: x,
      cutY: y
    })
    const ctx = wx.createCanvasContext('cutImg');
    ctx.setGlobalAlpha(0.4)
    ctx.drawImage(that.data.img, 0, 0, canvasW, canvasH)
    ctx.setFillStyle('red')
    ctx.fillRect(x, y, nowCutW, nowCutH)
    ctx.draw()
  },
  canvasMove: function (e) {
    var that = this;
    var canvasW = that.data.canvasW;
    var canvasH = that.data.canvasH;
    var nowCutW = that.data.cutType ? canvasW : that.data.nowCutW;
    var nowCutH = that.data.cutType ? that.data.cutH : that.data.nowCutH
    var touches = e.touches[0];
    var x = touches.x;
    var y = touches.y - (Number(nowCutH) / 2);
    that.data.cutType ? x = 0 : x = x - (Number(nowCutW) / 2);
    that.setData({
      cutX: x,
      cutY: y
    })
    const ctx = wx.createCanvasContext('cutImg');
    ctx.setGlobalAlpha(0.4)
    ctx.drawImage(that.data.img, 0, 0, canvasW, canvasH)
    ctx.setFillStyle('red')
    ctx.fillRect(x, y, nowCutW, nowCutH)
    ctx.draw()
  },
  canvasMove: function (e) {
    var that = this;
    var canvasW = that.data.canvasW;
    var canvasH = that.data.canvasH;
    var nowCutW = that.data.cutType ? canvasW : that.data.nowCutW;
    var nowCutH = that.data.cutType ? that.data.cutH : that.data.nowCutH
    var touches = e.touches[0];
    var x = touches.x;
    var y = touches.y - (Number(nowCutH) / 2);
    that.data.cutType ? x = 0 : x = x - (Number(nowCutW) / 2);
    that.setData({
      cutX: x,
      cutY: y
    })
    const ctx = wx.createCanvasContext('cutImg');
    ctx.setGlobalAlpha(0.4)
    ctx.drawImage(that.data.img, 0, 0, canvasW, canvasH)
    ctx.setFillStyle('red')
    ctx.fillRect(x, y, nowCutW, nowCutH)
    ctx.draw()
  },
  canvasMove: function (e) {
    var that = this;
    var canvasW = that.data.canvasW;
    var canvasH = that.data.canvasH;
    var nowCutW = that.data.cutType ? canvasW : that.data.nowCutW;
    var nowCutH = that.data.cutType ? that.data.cutH : that.data.nowCutH
    var touches = e.touches[0];
    var x = touches.x;
    var y = touches.y - (Number(nowCutH) / 2);
    that.data.cutType ? x = 0 : x = x - (Number(nowCutW) / 2);
    that.setData({
      cutX: x,
      cutY: y
    })
    const ctx = wx.createCanvasContext('cutImg');
    ctx.setGlobalAlpha(0.4)
    ctx.drawImage(that.data.img, 0, 0, canvasW, canvasH)
    ctx.setFillStyle('red')
    ctx.fillRect(x, y, nowCutW, nowCutH)
    ctx.draw()
  },
  /**
   * 页面的初始数据
   */
  data: {
    imageSrc:''  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    const ctx = wx.createCanvasContext('cutImg');
    ctx.setGlobalAlpha(0.4)
    var aa = 'https://pintuanqu.oss-cn-hangzhou.aliyuncs.com/Uploads/Picture/goodsShow/20171201/5a2125fc86566.png' 　　//获取当前屏幕宽度
  var phoneW = Number(util.nowPhoneWH()[0] * 90) / 100;
    var cutH = 150;
    wx.getImageInfo({
      src: aa,
      success: function (res) {
        var w = phoneW;
        var h = (phoneW / Number(res.width)) * Number(res.height)
        ctx.save()
        ctx.drawImage(aa, 0, 0, w, h)
        ctx.restore()
        ctx.setFillStyle('red')
        ctx.fillRect(0, 0, phoneW, cutH)
        ctx.draw()
        that.setData({
          canvasW: w,
          canvasH: h,
          img: aa,
          cutH: cutH
        })
      }
    })
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