// pages/bus/bus.js

const app = getApp();
const db = app.globalData.db;

Page({
    /**
     * 页面的初始数据
     */
    data: {
        seat: {
            x: -1,
            y: -1
        }
    },

    fetchOnlineContent: function () {
        let b = this.data.bus;
        let that = this;

        const bus_seat = db.collection('bus_seat').where({
            "bus": this.data.bus.bus_plate_number
        }).get({
            fail: function (res) {
                console.log(res)
            },
            success: function (res) {
                let rows = [];
                let row_count = (b.occupied + b.available) / 4;
                for (let i = 0; i < row_count; i++) {
                    let availablity = [];
                    for (let j = 0; j < 4; j++) {
                        let pushed = false;
                        for (let k = 0; k < res.data.length; k++) {
                            if (res.data[k].seat.x == i && res.data[k].seat.y == j) {
                                availablity.push(1);
                                console.log(i);
                                console.log(j);
                                pushed = true;
                                break;
                            }
                        }
                        if (!pushed) {
                            availablity.push(0);
                        }
                    }
                    rows.push({
                        row: i,
                        availablity: availablity
                    });
                }

                that.setData({
                    bus_rows: rows
                })
            }
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let b = JSON.parse(options.busInfo);
        this.setData({
            bus: b,
        })
        this.fetchOnlineContent();
        //获取用户信息，并存入globaldata
        app.globalData.db.collection('user').where({_openid: app.openid}).get({
        success: function(res) {
              let info = res.data[0];
              console.log("成功");
              console.log(res);
              console.log(info);
              app.globalData.userInfo.nickName=info.info.nickName
        },
        fail() {
              console.log("失败");
              wx.showToast({
                    title: '获取失败',
                    icon: 'none'
              })
              let e = setTimeout(
                    wx.navigateBack({}), 2000
              )
        }
  })
    },

    // 提交座位
    submit() {
        if (getApp().globalData.userInfo.nickName == null) {
            wx.showToast({
                icon: 'error',
                title: '请先登录',
            })
        } else if (this.data.seat.x == -1 && this.data.seat.y == -1) {
            wx.showToast({
                icon: 'error',
                title: '请选定座位',
            })
        } else {
            db.collection('bus_seat').add({
                data: {
                    "bus": this.data.bus.bus_plate_number,
                    "nickName": getApp().globalData.userInfo.nickName,
                    "seat": {
                        x: this.data.seat.x,
                        y: this.data.seat.y
                    }
                }
            }).then(res => {
                console.log('提交成功', res)
                wx.showToast({
                    title: '提交成功',
                })
            })
            const _ = db.command
            db.collection('bus_seat').where({
                "bus": this.data.bus.bus_plate_number,
                "nickName": getApp().globalData.userInfo.nickName
            }).remove().then(res => {
                console.log(res)
            })
        }
        this.fetchOnlineContent();

    },

    //点击座位
    onSeatItemClick(e) {
        console.log(e);
        let row = e.currentTarget.dataset.item.row;
        let column = e.currentTarget.dataset.column;
        wx.showToast({
            icon: 'success',
            title: '已选第' + (row + 1) + '行' + (Number(column) + 1) + '列',
        })
        this.data.seat.x = row;
        this.data.seat.y = column;
        console.log(this.data.seat.x);
        console.log(this.data.seat.y);
        console.log(this.data.bus);
    },


    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})