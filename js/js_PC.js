// JavaScript Document

function widthIncreased(){
	"use strict";
	var v=document.getElementById('div_tittle');
	v.style.cssText="width:1050px;";
}
function widthDecreased(){
	"use strict";
	var v=document.getElementById('div_tittle');
	v.style.cssText="width:710px";
}

function pageLoaded(){
	"use strict";
	var h=window.screen.height;
	var th1=document.getElementById('div_TH1');
	var miracle=document.getElementsByClassName('div_miracle');
	th1.style.cssText="height:"+h+"px;";
	miracle.style.cssText="height:"+h+"px;";
}