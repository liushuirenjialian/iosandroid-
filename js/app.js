/**
 * Created by Neo on 16/8/18.
 */
function getJsTicket(){
    var url = "http://120.27.45.152/hjagent/hj/code/getJsTicket?callback=?";
     $.ajax({
        url: url,
        type:'post',
        dataType:'json',
        success: function (response) {
            if (response.retcode == 0) {
                define_wx_share(response.data);
            }
        },
        error: function () {
        }
     })
}

getJsTicket();
function nonceStr() {
    return Math.random().toString(36).substr(2, 15);
}
function timestamp() {
    return parseInt(new Date().getTime() / 1000);
}

function getRandomDesc(){
    var descArr =["“中国悬疑大师”蔡骏架构世界观"];
    var len = descArr.length;
    var pos = Math.floor(Math.random() * len);
    return descArr[pos];
}
function define_wx_share(jsTicket){
    var time = this.timestamp();
    var nonce = this.nonceStr();
    var title = '探墓风云-万达影视控股旗下首款探墓手游';
    var desc = getRandomDesc();
    wx.config({
        debug: false,
        appId: "wx643f4ff723f51c58",
        timestamp:time,
        nonceStr:nonce,
        signature:hex_sha1('jsapi_ticket=' + jsTicket + '&noncestr='+nonce+'&timestamp='+time+'&url=' + location.href),
        jsApiList: [
            'onMenuShareTimeline','onMenuShareAppMessage','onMenuShareQQ','onMenuShareWeibo','onMenuShareQZone']
    });
    wx.ready(function(){
        var shareUrl = location.href.split("?")[0];
        var path = shareUrl.slice(0, shareUrl.lastIndexOf("/"));
// <<<<<<< HEAD
        var imageUrl = path + "/fenxiang.png";
        // var imageUrl='http://tmfy.hulai.com/luodiye/10000/img/fenxiang.png'
// =======
        // var imageUrl = path + "/img/fenxiang.png";
                // var imageUrl='http://tmfy.hulai.com/luodiye/10000/img/fenxiang.png';
// >>>>>>> 4b35e0d6cb603006f7716043af59aa2f169d5a11
        //分享到朋友圈
        wx.onMenuShareTimeline({
            title:desc,
            link:shareUrl,
            imgUrl: imageUrl,
            success: function () {

            },
            cancel: function () {

            }
        });
        //分享给朋友
        wx.onMenuShareAppMessage({
            title: title,
            desc: desc,
            link:shareUrl,
            imgUrl:imageUrl,
            success: function () {
            },
            cancel: function () {
            }
        });
        //分享到QQ
        wx.onMenuShareQQ({
            title: title,
            desc: desc,
            link: shareUrl,
            imgUrl: imageUrl,
            success: function () {
            },
            cancel: function () {

            }
        });
        //分享到微博
        wx.onMenuShareWeibo({
            title: title,
            desc: desc,
            link: shareUrl,
            imgUrl: imageUrl,
            success: function () {
            },
            cancel: function () {
            }
        });
        //分享到qq空间
        wx.onMenuShareQZone({
            title: title,
            desc: desc,
            link: shareUrl,
            imgUrl:imageUrl,
            success: function () {
            },
            cancel: function () {
            }
        });
    });
}
