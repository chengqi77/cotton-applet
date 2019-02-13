// components/tpicker/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    label: {
      type: String,
      value: ''
    },
    key: {
      type: String,
      value: ''
    },
    value: {
      type: String || Number,
      value: ''
    },
    option: {
      type: Array,
      value: []
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    range: ['11', '22', '33', '44']
  },

  /**
   * 组件的方法列表
   */
  methods: {
    hanldChange(e) {
      const { detail: { value } } = e;
      const { key, range } = this.data;
      this.triggerEvent('onChange', { key: key, value: range[value] });
    }
  }
})
