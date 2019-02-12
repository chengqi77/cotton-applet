// components/home-itme/index.js
const config = require('../../utils/config.js');

const aMap = {
  aa: {
    icon: './img/order.png',
    label: '批号'
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
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: {
      type: Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    map: config.map.main,
    aMap,
    itemKeyList: ['cd', 'ql', 'mz', 'cz', 'hc', 'hz'],
    itemValueList: ['jc', 'y/d', 'zg'],
    itemDescList: ['aa', 'bb', 'cc']
  },

  /**
   * 组件的方法列表
   */
  methods: {
    call() {
      this.triggerEvent('handleCall', this.data.data);
    },
    clickShoppingCart() {
      this.triggerEvent('handleClickShoppingCart', this.data.data);
    }
  }
})