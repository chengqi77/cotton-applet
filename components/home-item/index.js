// components/home-itme/index.js

const map = {
  a: '长度',
  b: '强力',
  c: '马值',
  d: '长整',
  e: '回潮',
  f: '含杂'
};
const bMap = {
  j: '基差',
  k: '元/吨',
  i: '公重',
};
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
    map,
    aMap,
    bMap,
    itemKeyList: ['a', 'b', 'c', 'd', 'e', 'f'],
    itemValueList: ['j', 'k', 'i'],
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