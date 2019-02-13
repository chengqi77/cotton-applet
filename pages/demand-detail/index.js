// pages/demand/index.js
const config = require('../../utils/config.js');

const data = {
  id: '562781322',

  ysj: '21+',
  cd: '12',
  ql: 21.2,
  mz: 1,
  cz: '0.0',
  hc: '0.0',
  hz: '0.0',
  jg: '<15003',

  shd: '盐城',
  mj: '盐城捷多纺织品有限公司',
  zwjhsj: '2019-01-01',
  cgjs: '200d吨',

  sl: '12',
  ztj: '1231',
  dcj: '1332',
  
  gys:'盐城捷多纺织品有限公司'
};
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data,
    map: config.map.main,
    list: [data, data, data],
    keyList: ['ysj', 'cd', 'ql', 'mz', 'cz', 'hz', 'jg'],
    descList: ['cd', 'mj', 'shd', 'zwjhsj'],
    itemKeyList: ['sl', 'ztj', 'dcj'],
    itemDescList: ['gys']
  },
  goBuyerDetail() {
    console.log('点击买家详情');
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