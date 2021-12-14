// app.js
const cloudenv_id = 'testenv-0gg53qx929b082b6'

App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    wx.cloud.init({
      env: cloudenv_id,
      traceUser: true,
    });

    this.globalData.db = wx.cloud.database({
      env: cloudenv_id
    })

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: {
      nickName: null
    },
    db: null
  }
})