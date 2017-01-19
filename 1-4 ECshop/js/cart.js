/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-11-16 10:53:01
 * @version $Id$
 */

//全选按钮
$(".all-select").click(function(){
	if($(".pro-list>li>input").prop("checked","false")){
        $(".pro-list>li>input").prop("checked","true")
	}
})

$(".all-select1").click(function(){
	$(".pro-list>li>input").prop({checked:true});
})

// $(".all-select").click(function(){
// 	if($(".all-select input").prop({checked:true})){
// 		$(".pro-list>li>input").prop({checked:false})
// 	}
// })


//删除商品
$(".done").click(function(){
	var closetli=$(".done").closest('.pro-list li');
	$(".ask").css({"display":"inline-block"});

})
$(".ask h5").click(function(){
	$(".ask").css({"display":"none"});
})
$(".ask .cancel").click(function(){
	$(".ask").css({"display":"none"});
})
	$(".ask .confirm").click(function(){
	closetli.remove();
	$(".ask").css({"display":"none"});
})

//修改数量

//数量增减
function calculate(num){
	var lisTotal=+$(".total").text().replace("￥","") * 1,
	    oriNum=+$(".pro-list .num").find("b").text(),
	    price=+$(".pro-list .price").find("b").text().replace("￥","") * 1;
	    lisTotal=oriNum*price,
	    allPrice=0;
	$(".pro-list li>input:checked").each(function(index, el) {
		    console.log(price);
		allPrice+=lisTotal;
	});
		$(".list-title h5").find("span").text(allPrice);
		$(".lis-btn-rig samp").find("b").text(allPrice);
}