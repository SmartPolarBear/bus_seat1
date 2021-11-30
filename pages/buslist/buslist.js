// pages/buslist/buslist.js
var util = require('../../utils/util');
Page({
    /**
     * 页面的初始数据
     */
    data: {
        "buses": [{
                "id": 1,
                "image": "../images/bus_placeholder.png",
                "bus_plate_number": "闽D11123",
                "available": 12,
                "occupied": 23,
                "datetime": util.formatTime(new Date)
            },
            {
                "id": 2,
                "image": "../images/bus_placeholder.png",
                "bus_plate_number": "闽D11323",
                "available": 3,
                "occupied": 10,
                "datetime": util.formatTime(new Date)
            },
            {
                "id": 3,
                "image": "../images/bus_placeholder.png",
                "bus_plate_number": "闽D13423",
                "available": 9,
                "occupied": 23,
                "datetime": util.formatTime(new Date)
            }
        ]
    },

    onBusItemClick: function (e) {
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