let { request } = require("../../utils/index.js")
Page({
  data: {
    sliderInfo: [],
    categories: []
  },
  onLoad: function () {   
    request.call(this,'slides','sliderInfo')
    request.call(this, 'categories','categories')
  },
  handlePathTo(e) {
    let param = e.currentTarget.dataset.value

  }
})