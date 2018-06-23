// pages/checkProgress/checkProgress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    catalogs: [{
      id: 0,
      title: '全部',
      selected: true
    }, {
      id: 1,
      title: '待审核',
      selected: false
    }, {
      id: 2,
      title: '审核中',
      selected: false
    }, {
      id: 3,
      title: '放款中',
      selected: false
    }]
  },

  selectCatalog: function (event) {
    var selectedId = event.target.dataset.item.id;
    if (selectedId === this.data.selectedIndex) {
      return false;
    }
    catalogs.forEach(function (item, index, arr) {
      if (index === selectedId) {
        item.selected = true;
      } else {
        item.selected = false;
      }
    });
    this.setData({
      catalogs: catalogs,
      selectedIndex: selectedId
    });

  },

  backToHome:function(){
    wx.switchTab({
      url: '/pages/index/index'
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
  onShareAppMessage: function () {
  
  }
})