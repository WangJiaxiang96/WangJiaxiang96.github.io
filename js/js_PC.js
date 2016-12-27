// JavaScript Document

function widthIncreased(){
	"use strict";
	var v=document.getElementById('div_tittle');
	v.style.cssText="width:955px;";
}

function widthDecreased(){
	"use strict";
	var v=document.getElementById('div_tittle');
	v.style.cssText="width:710px;";
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
	musicProducer.style.cssText="height:"+h+"px;";
	codeMonkey.style.cssText="height:"+h+"px;";
	}	
}

function sliding2R(id){
	"use strict";
	var e=document.getElementById('CM_masterpieceType1');
    var w=e.offsetWidth;
	e=document.getElementById(id);
	var ww=e.offsetLeft;
	if(ww<e.offsetWidth){
		var idd;
		if(id==='border1'){idd='container1';}
		else {idd='container2';}			
	    var ee=document.getElementById(idd);	
		var cw=document.getElementById('CM_masterpieceContent1').offsetWidth;
	    w=w/0.8;    	
    	e.style.cssText="left:"+w+"px;";
		ee.style.cssText="right:-"+cw+"px;";
	}
}

function sliding2L(id){
	"use strict";
	var e=document.getElementById(id);
	var w=e.offsetLeft;
	if(w>e.offsetWidth){
		var idd;
		if(id==='border1'){idd='container1';}
		else {idd='container2';}			
	    var ee=document.getElementById(idd);		
	    e.style.cssText="left:0px;";
		ee.style.cssText="right:0px;";
	}
}







