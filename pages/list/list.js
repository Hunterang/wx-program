
let { request } = require("../../utils/index.js")

Page({
  data: {
    category: [],
    shops: [],
    searchShops: [],
    inputValue: '',
    param: '',
    timer: null,
    page: 1
  },
  loadMore() {
    let { page } = this.data
    const opt = { _page: page++, _limit: 10 }
   return new Promise((a,b) => {
     request.call(this, `categories/${this.data.category.id}/Shops`, (res) => {
       let newShop = this.data.shops.concat(res)
       this.setData({ shops: newShop, page, searchShops: newShop })
       a('success')
     }, opt)

   })
  },
  onLoad(options) {
    request.call(this,`categories/${options.cat}`,(datas) => {
      this.setData({ category: datas })
      wx.setNavigationBarTitle({
        title: datas.name
      })
      this.loadMore()
     
    })
  },
  onReady: function() {

  },
  filterList(arr,key) {
    return arr.filter(v => v.name.indexOf(key) > -1)
  },
  handleSearchList(e) {
    
    // clearTimeout(this.timer)
    // this.timer = setTimeout(() => {
    //   this.setData({
    //     searchShops: e.detail.value
    //   })
    // },1000)
  },
  onReachBottom() {
     this.loadMore()
  },
  onPullDownRefresh() {
    this.setData({
      shops: [],
      searchShops: [],
      page: 1
    })
    this.loadMore().then(_ => {
      wx.stopPullDownRefresh()
    })
  }
})