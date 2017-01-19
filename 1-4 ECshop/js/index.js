/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-11-16 10:53:01
 * @version $Id$
 */

// 关闭广告
$(".advertise1 .x").click(function(){
	$(".advertise1").slideToggle();
})


// 关闭限时抢购广告
$(".limit .x").click(function(){
  $(".limit").slideToggle();
}) 

// 限时抢购广告时间倒数
$(function(){
  function fill(t){
    if(t<10){
      t="0"+t;
    }
    return t;
  }
      
  var adTime=setInterval(function(){
  var date=new Date(),
      hs=+date.getHours(),
      ms=+date.getMinutes(),
      ss=+date.getSeconds(),
      seconds=(24*60*60) - (hs*60*60+ms*60+ss),
      lefthour=parseInt((seconds)/3600),
      leftminute=parseInt(((seconds)/60)%60),
      leftsecond=parseInt(seconds%60);
      var hour=$(".hours").text(fill(lefthour)),
          minute=$(".minutes").text(fill(leftminute)),
          second=$(".seconds").text(fill(leftsecond));
       },1e3);
})


//banner 播放
CHIppt(".banner","ul.ban li",{
    indices:".banner ol li"
},{
  delay:2e3
},{
  show:function(index){
    $(this).addClass("cur");
  },
  hide:function(index){
    $(this).removeClass("cur");
  }
})

//banner 旁边团购page 
CHIpage(".tuan","ul",{},{
  mstop : false
});


// banner 旁边团购page 
var arr=[
  {
    width:196,
  },
  {
    width:0
  }
];
var cnt=0;
$(".ban-ctrl").click(function(){
  cnt++;
  $(".tuan").animate(arr[cnt%2]);
  return false;
})



//预告抢购商品选项卡
CHItab(".annouce","b.ann-tab",".annouce-con ul",{
  way:"click"
});
$(".ann-tag-2").click(function(){
  $(".time").css("opacity",0); 
});
$(".ann-tag-1").click(function(){
  $(".time").css("opacity",1); 
});

//热门旁边page
CHIpage(".hot-conn","ul",{
  next:".hot-ctrl"
},{
  mstop : true,
  delay:5e3
});


// 一楼壹周果园播放
CHIppt(".floor-ppt1","ul li",{
    indices:".floor-ppt1 ol li"
},{
  delay:2e3
},{
  show:function(index){
    $(this).addClass("cur");
  },
  hide:function(index){
    $(this).removeClass("cur");
  }
})

//一楼品类分类选项卡



// 二楼进口食品左边播放
CHIppt(".floor-ppt2","ul li",{
    indices:".floor-ppt2 ol li"
},{
  delay:2e3
},{
  show:function(index){
    $(this).addClass("cur");
  },
  hide:function(index){
    $(this).removeClass("cur");
  }
})

// 三楼国产食品左边播放
CHIppt(".floor-ppt3","ul li",{
    indices:".floor-ppt3 ol li"
},{
  delay:2e3
},{
  show:function(index){
    $(this).addClass("cur");
  },
  hide:function(index){
    $(this).removeClass("cur");
  }
}) 

// 四楼酒水饮料左边播放
CHIppt(".floor-ppt4","ul li",{
    indices:".floor-ppt4 ol li"
},{
  delay:2e3
},{
  show:function(index){
    $(this).addClass("cur");
  },
  hide:function(index){
    $(this).removeClass("cur");
  }
}) 

// 五楼营养保健左边播放
CHIppt(".floor-ppt5","ul li",{
    indices:".floor-ppt5 ol li"
},{
  delay:2e3
},{
  show:function(index){
    $(this).addClass("cur");
  },
  hide:function(index){
    $(this).removeClass("cur");
  }
}) 



//清仓旁边page
CHIpage(".clear-cons","ul",{
  next:".clear-ctrl"
},{
  mstop : true,
  delay:2e3
});


//收藏按钮切换图标
$(".cart-save .save").click(function(event){
  $(this).find("i").toggleClass("fa-star-o fa-star");
})

//加入购物车动画
$(function(){
  $(".cart-save .shopping").click(function(event){
    var text=+$(".right-fix .cart").find("span").text();
  var img=$(this).find(".fa-shopping-cart"),
      x=event.clientX,
      y=event.clientY;
  var newImg=img.clone().css({
    color:'red',
    position:'absolute',
    left:img.offset().left,
    top:img.offset().top
  });
  offset1=$(".right-fix").offset();
  newImg.fly({
        start:{
          left:x,
          top:y
        },
        end:{
          left:offset1.left,
          top:250
        },
        onEnd:function(){
          $(".tips").animate({
            opacity:1
          },1000)
          .animate({
            opacity:0
          },1500);
          newImg.remove();
        }
       });
    $(".cart").find("span").text(text+1);
  });
})


//回顶
$("#up").click(function(){
  $("html,body").animate({
        scrollTop:0
    },'slow');
})