// pages/demand-custom/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeKey: 'domestic',
    selected: {
      area: '',
      year: '',
      origin: '',
      type: '',
      jhd: '',

      dj: '',
      cd: '',
      qd: '',
      mz: '',
      hz: '',
      zqd: '',
    },
    option: {
      area: [{ value: '', label: '新疆棉' }, { value: '', label: '地产棉' }],
      year: [{ value: '', label: '新棉' }, { value: '', label: '拍储棉' }],
      origin: [{ value: '', label: '不限' }, { value: '', label: '地方' }, { value: '', label: '兵团' }, { value: '', label: '长江流域' }, { value: '', label: '黄河流域' }],
      type: [{ value: '', label: '手摘棉花' }, { value: '', label: '机采棉' }, { value: '', label: '皮坤棉' }, { value: '', label: '长绒棉' }],
      jhd: [{ value: '', label: '新疆仓库' }, { value: '', label: '内地仓库' }],

      dj: [{ value: '', label: '新疆棉' }, { value: '', label: '地产棉' }],
    },
    radio: [
      { key: 'area', label: '区域' },
      { key: 'year', label: '年份' },
      { key: 'origin', label: '产地' },
      { key: 'type', label: '类型' },
      { key: 'jhd', label: '交货地' },
    ],
    picker: [
      [
        { key: 'dj', label: '等级' },
        { key: 'cd', label: '长度' },
        { key: 'qd', label: '强度' }
      ],
      [
        { key: 'mz', label: '马值' },
        { key: 'hz', label: '含杂' },
        { key: 'zqd', label: '整齐度' }
      ]
    ]
  },
  handleTabChange(e) {
    const { detail: { key } } = e;
    this.setData({
      activeKey: key
    });
  },
  clickTag({ currentTarget = {} }) {
    const dataset = currentTarget.dataset || {};
    const { key, label } = dataset;
    this.setData({
      selected: { ...this.data.selected, [key]: label }
    });
  },
  hanldChange(e) {
    const { key, value } = e.detail;
    this.setData({
      selected: { ...this.data.selected, [key]: value }
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