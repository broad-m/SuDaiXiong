// pages/pefectInfo/pefectInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    genderArray:[{
      key:'男',
      value:'0',
      checked:true
    },{
      key:'女',
      value:'1',
      checked: false
    }],
    marriageArray: [{
      key: '未婚',
      value: '0',
      checked: true
    }, {
      key: '已婚',
      value: '1',
      checked: false
    }],
    date:'',
    location:'',
    region:[],
    customItem: '不限',
    eduIndex:-1,
    eduArray: ['请选择','小学', '初中', '高中', '专科','本科','硕士','博士','博士后'],
    posIndex:-1,
    posArray:['请选择','员工','领导','总经理','董事长'],
    incomeIndex:-1,
    incomeArray:['请选择','3000以下','3000-5000','5000-8000','8000-10000','10000+'],
    creditIndex:-1,
    creditArray:['请选择','极差','差','一般','良好','优秀','极佳'],
    houseIndex:-1,
    houseArray: ['请选择','有房','无房'],
    carIndex: -1,
    carArray: ['请选择', '有车', '无车']
  },

  genderChange:function(e){
    var genderArray= this.data.genderArray;
    genderArray.forEach(function(item,index,arr){
      if (item.value == e.detail.value){
        item.checked = true;
      }else{
        item.checked = false;
      }
    });
    this.setData({
      genderArray: genderArray
    })
  },

  marriageChange: function (e) {
    console.log(e.detail)
    var marriageArray = this.data.marriageArray;
    marriageArray.forEach(function (item, index, arr) {
      if (item.value == e.detail.value) {
        item.checked = true;
      } else {
        item.checked = false;
      }
    });
    this.setData({
      marriageArray: marriageArray
    })
  },

  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)

    var region = e.detail.value;

    this.setData({
      location: region[0] + ' ' + region[1]
    })
  },

  bindEducation:function(e){
    this.setData({
      eduIndex: e.detail.value
    })
  },
  bindPosition: function (e) {
    this.setData({
      posIndex: e.detail.value
    })
  },

  bindIncome:function(e){
    this.setData({
      incomeIndex: e.detail.value
    })
  },

  bindCredit: function (e) {
    this.setData({
      creditIndex: e.detail.value
    })
  },

  bindHouse: function (e) {
    this.setData({
      houseIndex: e.detail.value
    })
  },

  bindCar: function (e) {
    this.setData({
      carIndex: e.detail.value
    })
  },

  saveProfile:function(){

  },

  cancelProfile:function(){
    wx.switchTab({
      url: '/pages/profile/profile'
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