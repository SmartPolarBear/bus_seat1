var data = {
      //云开发环境id
      env: 'book-platform-5g48crvv5397094a',
      //分享配置
      share_title: '厦门大学二手书',
      share_img: '/images/poster.jpg', //可以是网络地址，本地文件路径要填绝对位置
      share_poster:'https://www.xmu.edu.cn/images/logo.png',//必须为网络地址
      //客服联系方式
      kefu: {
            weixin: 'he-xiang-yu',
            qq: '951817263',
            gzh: '', //公众号二维码必须为网络地址
            phone: '' //如果你不设置电话客服，就留空
      },
      //默认启动页背景图，防止请求失败完全空白 
      //可以是网络地址，本地文件路径要填绝对位置
      bgurl: '/images/startBg.jpg',
      //校区
      campus: [{
                  name: '厦门大学翔安校区',
                  id: 0
            },
            {
                  name: '厦门大学思明校区本部',
                  id: 1
            },
            {
                  name: '厦门大学海韵校区',
                  id: 2
            },
            {
                  name: '厦门大学漳州校区',
                  id: 3
            },
      ],
      //配置学院，建议不要添加太多，不然前端不好看
      college: [{
                  name: '通用',
                  id: -1
            },
            {
                  name: '信息',
                  id: 0
            },
            {
                  name: '经管',
                  id: 1
            },
            {
                  name: '土木',
                  id: 2
            },
            {
                  name: '新闻',
                  id: 3
            },
            {
                  name: '数统',
                  id: 4
            },
            {
                  name: '物理',
                  id: 5
            },
            {
                  name: '化工',
                  id: 6
            },
            {
                  name: '生物',
                  id: 7
            },
            {
                  name: '电气',
                  id: 8
            },
            {
                  name: '机械',
                  id: 9
            },
            {
                  name: '动力',
                  id: 10
            },
            {
                  name: '资环',
                  id: 11
            },
            {
                  name: '材料',
                  id: 12
            },
            {
                  name: '建筑',
                  id: 13
            },
            {
                  name: '其它',
                  id: 14
            },
      ],
}
//下面的就别动了
function formTime(creatTime) {
      let date = new Date(creatTime),
            Y = date.getFullYear(),
            M = date.getMonth() + 1,
            D = date.getDate(),
            H = date.getHours(),
            m = date.getMinutes(),
            s = date.getSeconds();
      if (M < 10) {
            M = '0' + M;
      }
      if (D < 10) {
            D = '0' + D;
      }
      if (H < 10) {
            H = '0' + H;
      }
      if (m < 10) {
            m = '0' + m;
      }
      if (s < 10) {
            s = '0' + s;
      }
      return Y + '-' + M + '-' + D + ' ' + H + ':' + m + ':' + s;
}

function days() {
      let now = new Date();
      let year = now.getFullYear();
      let month = now.getMonth() + 1;
      let day = now.getDate();
      if (month < 10) {
            month = '0' + month;
      }
      if (day < 10) {
            day = '0' + day;
      }
      let date = year + "" + month + day;
      return date;
}
module.exports = {
      data: JSON.stringify(data),
      formTime: formTime,
      days: days
}