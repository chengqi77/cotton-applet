// pages/details/details.js
const map = {
  q: '颜色级',
  a: '长度',
  b: '强力',
  c: '马值',
  d: '长整',
  e: '回潮',
  f: '含杂'
};
const AddressList = {
  zhc:'扎花厂',
  kc:'库存',
  gys:"供应商"
};
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: {
    q:'23',
    a: '12',
    b: 21.2,
    c: 1,
    d: '0.0',
    e: '0.0',
    f: '0.0',

    zhc:'133',
    kc:'rere',
    gys:"1230",
    },
    current: 'a',
    map,
    AddressList,
    itemKeyList: ['q','a', 'b', 'c', 'd', 'e', 'f'],
    itemAddressList: ['zhc','kc','gys']
  },
  handleTabChange({ detail }) {
    this.setData({
      current: detail.key
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