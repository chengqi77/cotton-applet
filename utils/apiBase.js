const appConfig = require('./config.js');

const apiPath = {
  getBanner: '/getList'
};
const mock = {
  getBanner: [
    'https://t1.hddhhn.com/uploads/tu/201612/98/st93.png',
    'https://t1.hddhhn.com/uploads/tu/201612/98/st93.png',
    'https://t1.hddhhn.com/uploads/tu/201612/98/st93.png'
  ]
};

const wrapper = ({
  type: method,
  url,
  pathKey,
  data,
  config
}) => {
  //开发环境返回mock数据
  if (appConfig.dev) {
    return new Promise(resolve => {
      setTimeout(resolve, 1000, mock[pathKey]);
    });
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url, // 仅为示例，并非真实的接口地址
      data,
      header: {
        'content-type': 'application/json' // 默认值
      },
      method,
      success(res) {
        resolve(data)
      },
      fail(err) {
        reject(err);
      }
    })
  })
}
module.exports = {
  wrapper,
  apiPath
};