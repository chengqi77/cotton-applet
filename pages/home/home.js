// pages/home/home.js
const apis = require('../../utils/apis.js');
const map = {
  a: '长度',
  b: '强力',
  c: '马值',
  d: '长整',
  e: '回潮',
  f: '含杂'
};
const bMap = {
  j:'基差',
  k: '元/吨',
  i: '公重',
};
const aMap = {
  aa:{
    icon:'./img/order.png',
    label:'批号'
  },
  bb: {
    icon: './img/storage.png',
    label: '仓库'
  },
  cc: {
    icon: './img/gys.png',
    label: '供应商'
  }
};
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner: {
      data: [],
      loading: true,
    },
    notices: ['试管婴儿成功后,', '二胎妈妈andlajdka'],
    activeTabKey: 'a',
    item: {
      name: '郑棉1905',
      value: '15600',
      time: '2019-01-11',

      a: '12',
      b: 21.2,
      c: 1,
      d: '0.0',
      e: '0.0',
      f: '0.0',

      j:'+120',
      k:'15720',
      i:'45.555',

      aa:"454212552",
      bb:'中储棉库存厄尔有限责任公司',
      cc:'河北星宇纺织原料有限责任公司'
    },
    map,
    aMap,
    bMap,
    itemKeyList: ['a', 'b', 'c', 'd', 'e','f'],
    itemValueList:['j','k','i'],
    itemDescList:['aa','bb','cc']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData();
  },
  //获取数据
  getData() {
    apis.getBanner()
      .then(res => {
        this.setData({
          banner: {
            data: res,
            loading: false
          }
        })
      })
  },
  handleTabChange(e) {
    const {
      detail: {
        key
      }
    } = e;
    this.setData({
      activeTabKey: key,
    });
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