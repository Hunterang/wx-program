const BASE_URL = 'https://locally.uieee.com/'
let request = function (pathname, cb, data) {
  wx.request({
    url: BASE_URL+pathname,
    data,
    success: (res) => {
      if(typeof cb === 'function') {
        cb(res.data)
      }else{
        let obj = {}
        obj[cb] = res.data
        this.setData(obj)
      }
    }
  })
}


module.exports = {
  request
}