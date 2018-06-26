// pages/grabOrder/grabOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkedAll: false,
    orders: [{
        id: 0,
        name: 'tom',
        gender: '男',
        mobile: '18055500000',
        applyProduction: '平安银行-车抵贷',
        interestAmount: '10w',
        checked: false
      },
      {
        id: 1,
        name: 'jack',
        gender: '男',
        mobile: '18055500000',
        applyProduction: '平安银行-车抵贷',
        interestAmount: '10w',
        checked: false
      }
    ]
  },
  selectAll: function() {
    var checkedAll = this.data.checkedAll;
    var orders = this.data.orders;
    for (var i = 0, lenI = orders.length; i < lenI; ++i) {
      if (checkedAll) {
        orders[i].checked = false;
      } else {
        orders[i].checked = true;
      }
    }
    this.setData({
      checkedAll: !checkedAll,
      orders: orders
    });
  },
  selectChange: function(e) {

    var orders = this.data.orders;
    var values = e.detail.value;
    var lenI = orders.length;
    var lenJ = values.length;
    var checkedAll = false;

    for (var i = 0;i < lenI; ++i) {
      orders[i].checked = false;
      for (var j = 0; j < lenJ; ++j) {
        if (orders[i].id == values[j]) {
          orders[i].checked = true;
          break;
        }
      }
    }

    if(orders.every(function(item){return item.checked;})){
      checkedAll = true;
    }

    this.setData({
      orders: orders,
      checkedAll: checkedAll
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})