// pages/bus/bus.js
wx.cloud.init();
const db=wx.cloud.database();
const todos=db.collection('bus_seat');

Page({
    /**
     * 页面的初始数据
     */
    data: { 
        seat:{
            x:-1,
            y:-1
        },
        "Seat":[{
        "id":1,
        "selected":0,
    },{
        "id":2,
        "selected":0,
    },{
        "id":3,
        "selected":0,
    },{
        "id":4,
        "selected":0,
    },{
        "id":5,
        "selected":0,
    },{
        "id":6,
        "selected":0,
    },{
        "id":7,
        "selected":0,
    },{
        "id":8,
        "selected":0,
    },{
        "id":9,
        "selected":0,
    },{
        "id":10,
        "selected":0,
    },{
        "id":11,
        "selected":0,
    }]},

    // onSeatItemClick: function (e) {

    //     let item = undefined;
    //     for (let i = 0; i < this.data.buses.length; i++) {
    //         if (this.data.buses[i].id == parseInt(e.currentTarget.id)) {
    //             item = this.data.buses[i];
    //             break;
    //         }
    //     }

    //     let clicked = JSON.stringify(item);
    //     console.log(clicked);

    //     wx.navigateTo({
    //         url: '../bus/bus?busInfo=' + clicked,
    //     })
    // },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let b = JSON.parse(options.busInfo);
        let rows = [];
        let row_count = (b.occupied + b.available) / 4;
        for (let i = 0; i < row_count; i++) {
            rows.push({
                row: i,
                availablity: [0, 0, 0, 0]
            });
        }
        this.setData({
            bus: b,
            bus_rows: rows
        })

        console.log(this.data.bus);
        console.log(this.data.bus_rows);

    },

// 提交座位
    submit(){
        if(this.data.seat.x==-1&&this.data.seat.y==-1){
            wx.showToast({
                icon:'error',
                title: '请选定座位',
            })
        }else{
            db.collection('bus_seat').add({
                data:{
                    "bus":this.data.bus.bus_plate_number,
                    "phone":"18810207286",
                    "seat":{
                        x:this.data.seat.x,
                        y:this.data.seat.y
                }
                }
            })
        }
    },

    //点击座位
    onSeatItemClick(e){
        //console.log(e.item.row),
        let row=e.currentTarget.dataset.item.row;
        let column=e.currentTarget.dataset.column;
        wx.showToast({
            icon:'success',
            title: '已选第'+(row+1)+'行第'+(Number(column)+1)+'列',
        })
        this.data.seat.x=row;
        this.data.seat.y=column;
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
