//index.js
const app = getApp()

Page({
  data: {
   
  },
  
  onLoad: function () {
    // get userId from globalData
    let userId = app.globalData.userId
    // set userId in data state
    this.setData({ userId : userId })
  }
})
