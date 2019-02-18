var XLSX = require("../../miniprogram_npm/xlsx/index");
Page({
    data: {
        memberList: []
    },
    //options(Object)
    onLoad: function(options){
        let memberList = []
        if(options.info){
            memberList = JSON.parse(options.info)
        }
        console.log(memberList)
        wx.setStorageSync('memberList', memberList)


    },
    onReady: function(){
        
    },
    onShow: function(){
        
    },
    onHide: function(){

    },
    onUnload: function(){

    },
    Towebview(){
        wx.redirectTo({
            url: './webview/webview'
        })
    },
    addList(){
        const db = wx.cloud.database()
        db.collection('memberList').add({
            data: { 
                leader: "张三丰",
                member:['嫦娥','后羿','扁鹊']
            }
        }).then(res => {
            console.log(res,'res')
            wx.showToast({
                title: "添加成功"
            })
        })
    },
    sellectList(){
        const db = wx.cloud.database()
        db.collection('memberList').get({}).then(res => {
            console.log(res,'res')
            wx.showToast({
                title: "获取成功"
            })
        })
    },
    ceshi(){
        wx.chooseMessageFile({
          count: 1,
          type: 'all',
          success(res) {
            const tempFilePaths = res.tempFiles[0].path
            console.log(res,'res')
            wx.getFileSystemManager().readFile({
              filePath: tempFilePaths,
              encoding: 'binary',
              success(res) {
                console.log(res,'res22222')
                let text = XLSX.read(res.data, { 
                    type: 'binary'
                });
                console.log(text,'text')
              }
            });
          }
        })
    },
});