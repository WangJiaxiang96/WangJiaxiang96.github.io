// JavaScript Document

//滑动到Code部分
$(function(){ 
$('.targetC').click(function(){
	    "use strict";
	    $('html,body').animate({
			scrollTop:$('#div_codeMonkey').offset().top},600);
	}
);});

//滑动到Music部分
$(function(){ 
$('.targetM').click(function(){
	    "use strict";
	    $('html,body').animate({
			scrollTop:$('#div_musicProducer').offset().top},600);
});});

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
