// components/loading/loading.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    loading: {
      type: Boolean,
      value: true, // 属性初始值（可选），如果未指定则会根据类型选择一个
    },
    tip:{
      type: String,
      value: ''
    },
    width:{
      type:String,
      value:'100%'
    },
    height: {
      type: String,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})