// pages/buslist/buslist.js
var util = require('../../utils/util');
const db = getApp().globalData.db;

Page({
    /**
     * 页面的初始数据
     */
    data: {
        "buses": [{
                "id": 1,
                "image": "../images/bus_placeholder.png",
                "bus_plate_number": "闽D11123",
                "available": 45,
                "occupied": 3,
          
                "datetime": util.formatTime(new Date)
            },
            {
                "id": 2,
                "image": "../images/bus_placeholder.png",
                "bus_plate_number": "闽D11323",
                "available": 42,
                "occupied": 6,
               
                "datetime": util.formatTime(new Date)
            },
            {
                "id": 3,
                "image": "../images/bus_placeholder.png",
                "bus_plate_number": "闽D13423",
                "available": 41,
                "occupied": 7,
            
                "datetime": util.formatTime(new Date)
            }
        ]
    },

    fetchOnlineContent: function () {
        const bus_seat = db.collection('buses').where({"bus":1});
        bus_seat.count().then(
            res=> {
                console.log(res);
                this.data=res;
                // for (let i = 0; i < row_count; i++) {
                //     let availablity = [];
                //     for (let j = 0; j < 4; j++) {
                //         let pushed = false;
                //         for (let k = 0; k < res.data.length; k++) {
                //             if (res.data[k].seat.x == i && res.data[k].seat.y == j) {
                //                 availablity.push(1);
                //                 console.log(i);
                //                 console.log(j);
                //                 pushed = true;
                //                 break;
                //             }
                //         }
                //         if (!pushed) {
                //             availablity.push(0);
                //         }
                //     }
                //     rows.push({
                //         row: i,
                //         availablity: availablity
                //     });
                // }

                // that.setData({
                //     bus_rows: rows
                // })
            }
        )
    },

    onBusItemClick: function (e) {
        let index=parseInt(e.currentTarget)
        let item = undefined;
        for (let i = 0; i < this.data.buses.length; i++) {
            if (this.data.buses[i].id == parseInt(e.currentTarget.id)) {
                item = this.data.buses[i];
                break;
            }
        }
        let clicked = JSON.stringify(item);
        console.log(clicked);
        wx.navigateTo({
            url: '../bus/bus?busInfo=' + clicked,
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // this.fetchOnlineContent();
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