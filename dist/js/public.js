/*获得当前屏幕的大小，并计算rem值，项目中实际的大小是设计稿除以320*/
document.getElementsByTagName("html")[0].style.fontSize=document.documentElement.clientWidth/2+"px";
/*页面下部固定位置*/
var back = document.getElementById("back");
var rightBtn = document.getElementById("rightBtn");
var navBtn = document.getElementById("navBtn");
var head = document.getElementById("head");
var foot = document.getElementById("foot");
var main=document.getElementById("main");
var sideBar = document.getElementById("sideBar");
var clienH=document.documentElement.clientHeight;
var flagLogin=true;
back.addEventListener("touchend",backtop,false);
navBtn.addEventListener("touchend",loginBtn,false);
function backtop(){
    var winHeight=document.documentElement.scrollTop||document.body.scrollTop;
    document.documentElement.scrollTop=document.body.scrollTop=0+"px"
};
//实现滚动条无法滚动
var mo=function(e){e.preventDefault()};
/***禁止滑动***/
function stopSroll(){
    document.body.style.overflow='hidden';
    document.addEventListener("touchmove",mo,false);//禁止页面滑动
}
/***取消滑动限制***/
function moveSroll(){
    document.body.style.overflowY='';//出现滚动条
    document.removeEventListener("touchmove",mo,false);
};
function goback(){
    head.style.left=0+"rem";
    main.style.left=0+"rem";
    foot.style.left=0+"rem";
    sideBar.style.display="none";
    sideBar.style.left=2+"rem";
};
function loginBtn(){
    if(flagLogin){
        head.style.left=-1+"rem";
        main.style.left=-1+"rem";
        foot.style.left=-1+"rem";
        sideBar.style.display="block";
        sideBar.style.left=1+"rem";
        //禁止屏幕滚动的
        stopSroll();
        main.addEventListener("touchend",function(){
            goback();
            moveSroll();
        },false);
    }else{
        goback();
        //允许屏幕滚动的
        moveSroll();
    }
    flagLogin=!flagLogin;
}
sideBar.style.height=clienH+"px";