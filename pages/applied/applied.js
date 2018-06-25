// pages/applied/applied.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectedIndex: 1,
    catalogs: [{
      id: 0,
      title: '已取消',
      selected: false
    }, {
      id: 1,
      title: '已完成',
      selected: true
    }]
  },
  selectCatalog: function (event) {
    var selectedId = event.target.dataset.item.id;
    if (selectedId === this.data.selectedIndex) {
      return false;
    }
    var catalogs = this.data.catalogs;
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