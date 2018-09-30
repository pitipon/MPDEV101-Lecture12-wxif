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
  },

  bindKeyInput: function(e) {
    // Get New User Id from input
    let newUserId = e.detail.value
    // Update in data state
    this.setData({ userId : newUserId })
    // Update in GlobalData
    app.globalData.userId = newUserId
    // Check new value in GlobalData
    console.log(app.globalData) 
    
  }
})
