const apiBase = require('./apiBase.js');

console.log(apiBase, 'apiBase')

const apis = {
  getBanner() {
    return apiBase.wrapper({
      type: 'get',
      url: apiBase.apiPath.getBanner,
      pathKey: 'getBanner',
      data: {}
    })
  }
};

module.exports = apis;