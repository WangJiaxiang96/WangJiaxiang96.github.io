// JavaScript Document

function widthIncreased(){
	"use strict";
	var v=document.getElementById('div_tittle');
	v.style.cssText="width:955px;";
}

function widthDecreased(){
	"use strict";
	var v=document.getElementById('div_tittle');
	v.style.cssText="width:710px";
}

function pageLoaded(){
	"use strict";
	var w=window.screen.width;
	if(w>=960) {			
	var h=window.screen.height;	
	var th1=document.getElementById('div_TH1');
	var codeMonkey=document.getElementById('div_codeMonkey');
	var musicProducer=document.getElementById('div_musicProducer');
	th1.style.cssText="height:"+h+"px;";
	musicProducer.style.cssText="height:"+(h*0.8)+"px;";
	codeMonkey.style.cssText="height:"+(h*0.8)+"px;";
	}
}