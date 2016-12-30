// JavaScript Document
function pageLoaded() {
    "use strict";
    var w = window.screen.width;
    if (w >= 960) {
        var h = window.screen.height;
        var th1 = document.getElementById('div_TH1');
        var codeMonkey = document.getElementById('div_codeMonkey');
        var musicProducer = document.getElementById('div_musicProducer');
        th1.style.cssText = "height:" + h + "px;";
        musicProducer.style.cssText = "height:" + h + "px;";
        codeMonkey.style.cssText = "height:" + h + "px;";
    }
}

function widthIncreased() {
    "use strict";
    var v = document.getElementById('div_tittle');
    v.style.cssText = "width:955px;";
}

function widthDecreased() {
    "use strict";
    var v = document.getElementById('div_tittle');
    v.style.cssText = "width:710px;";
}

function moreSliding(more,d){
	"use strict";
	var e=document.getElementById(more);		
	var w=e.offsetWidth;
	var cw=document.getElementById('div_codeMonkey_div_masterpiece').offsetWidth;
	var pw=cw*0.08;
	var l=cw-w-pw;
	if(d===1){
    e.style.cssText="left:8%;";
	}
	else {
		e.style.cssText="left:"+l+"px;";
	}

}

function sliding2R(id) {
    "use strict";
    var e = document.getElementById('CM_masterpieceType1');
    var w = e.offsetWidth;
    e = document.getElementById(id);
    var ww = e.offsetLeft;
    if (ww < e.offsetWidth) {
        var idd;
		var more;
        if (id === 'border1') { idd = 'container1'; more='more1';}
        else { idd = 'container2';more='more2' ;}
        var ee = document.getElementById(idd);
        var cw = document.getElementById('CM_masterpieceContent1').offsetWidth;
        w = w / 0.8;
        e.style.cssText = "left:" + w + "px;";
        ee.style.cssText = "right:-" + cw + "px;";
		moreSliding(more,2);
    }
}

function sliding2L(id) {
    "use strict";
    var e = document.getElementById(id);
    var w = e.offsetLeft;
    if (w > e.offsetWidth) {
        var idd;
		var more;
        if (id === 'border1') { idd = 'container1';more='more1'; }
        else { idd = 'container2'; more='more2';}
        var ee = document.getElementById(idd);
        e.style.cssText = "left:0px;";
        ee.style.cssText = "right:0px;";
		moreSliding(more,1);
    }
}

//滑动到Code部分
$(function () {
    $('.targetC').click(function () {
        "use strict";
        $('html,body').animate({
            scrollTop: $('#div_codeMonkey').offset().top
        }, 600);
        var s = $(this).attr('id');
        if (s === 'ul1_1') { sliding2L('border1'); }
        if (s === 'ul1_2') { sliding2R('border1'); }
    }
    );
});

//滑动到Music部分
$(function () {
    $('.targetM').click(function () {
        "use strict";
        $('html,body').animate({
            scrollTop: $('#div_musicProducer').offset().top
        }, 600);
        var s = $(this).attr('id');
        if (s === 'ul2_1') { sliding2L('border2'); }
        if (s === 'ul2_2') { sliding2R('border2'); }
    });
});






