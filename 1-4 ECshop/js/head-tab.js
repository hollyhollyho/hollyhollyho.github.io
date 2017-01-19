/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-01-19 16:32:02
 * @version $Id$
 */

// 切换城市
$(".city dt").click(function(){
	$(this).addClass("on");
})
$(".city dd p").click(function(){
	var text=$(this).text();
	var text1=$(".city dt").text();
	var id=$(this).data("id");
	$(".city dt").text(text).removeClass("on");
  $(".city input[type='hidden']").val(id);
  console.log(id);
})

// 店铺和宝贝搜索来回切换
$(".shop-pro dt").click(function(){
  $(".shop-pro").closest("dl").addClass("on");
})
$(".shop-pro dd p").click(function(){
  var text=$(this).text();
  var id=$(this).data("id");
  $(".shop-pro dt").find("span").text(text).parents(".shop-pro").removeClass("on");
  $(".shop-pro input").val(id);
})