var cfgFile = "/cfg/env.json";
var ucenterUrl,ucenterPath;
$.ajax({ url:cfgFile,async:false,dataType:'json', success:function(data){ ucenterUrl = data.httpHost; ucenterPath = data.subPath;}});
//智能机浏览器版本信息:
var browser = {
    versions: function() {
        var u = navigator.userAgent, app = navigator.appVersion;
        return {
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1
        };
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
};
var ios_c=browser.versions.iPhone;
//  功能：获取和设置cookies函数  参数：name，cookie名字
var getCookie = function getCookie(name){
    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
    if(arr != null){
        if(typeof unescape === "function"){
            return unescape(arr[2]);
        }else{
            return decodeURI(arr[2]);
        }
    }else{
        return null;
    }
};
var SetCookie=function(name,value){
    var Days = 30;   //cookie 将被保存一月
    var exp  = new Date();  //获得当前时间
    exp.setTime(exp.getTime() + Days*24*60*60*1000);  //换成毫秒
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
};