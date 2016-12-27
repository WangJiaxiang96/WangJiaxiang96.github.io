// JavaScript Document


//滑动到顶部
$(function(){ 
$('#a_main').click(function(){
	    "use strict";
		var t=$(document).scrollTop() - $('#listMusic').offset().top;
		if(t>0){
	    $('html,body').animate({scrollTop:0},600);
		}
		else {
			window.open("http://wangjiaxiang.net");
		}
			
});});
