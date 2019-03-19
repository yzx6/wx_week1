//logs.js
const util = require('../../utils/util.js')
Page({
  data: {
    ind:null,
    logs: [
      {
        id:0,
        date:"3月16日",
        state:"周六：开放"
      },
      {
        id:1,
        date: "3月17日",
        state: "周日：开放"
      }
    ],
    newlogs:[]
  },
  check:function(e){
    let getlogs=[]
    let id = e.currentTarget.dataset.id
    getlogs.push(this.data.logs[id])
    this.setData({
      ind:id,
      newlogs:getlogs
    })
    console.log(this.data.newlogs)

    wx.setStorage({
      key: "id",
      data: this.data.newlogs,
    })
  },
  ylog:function(){
    wx.navigateTo({
      url: '../ylog/ylog',
    })
  }
 
})
