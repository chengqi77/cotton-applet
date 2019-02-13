// pages/supply-demand/index.js
const config = require('../../utils/config.js');
const item = {
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
};
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [item, item, item, item, item],
    map: config.map.main,
    itemKeyList: ['ysj', 'cd', 'ql', 'mz', 'cz', 'hz', 'jg'],
    itemDescList: ['mj', 'cgjs', 'shd', 'zwjhsj'],
    isModalVisible: true,
    unitList:[
      {
        id:'dun',
        name:'吨'
      },
      {
        id:'pi',
        name:'批'
      },
      {
        id:'柜',
        name:'柜'
      }
    ]
  },
  offer(event) {
    const item = event.currentTarget.dataset.item;
    console.log(item, 'data')
    this.toggleModalVisible(true);
  },
  handleOk() {
    this.toggleModalVisible(false);
  },
  handleCancel() {
    this.toggleModalVisible(false);
  },
  toggleModalVisible(isModalVisible) {
    this.setData({
      isModalVisible,
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