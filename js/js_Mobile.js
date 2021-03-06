// JavaScript Document
$(document).ready(function() {
	"use strict";
    var h=$('#div_Icon').height();
	$('#div_Icon').width(h);
});

function openPanel() {
    "use strict";
    var menuPanel = document.getElementById('menu_content');
    menuPanel.style.cssText = "left:0px;";
    var menuBG = document.getElementById('menu_bg');
    menuBG.style.cssText = "display:block;";
}

function collapsePanel() {
    "use strict";
    var menuPanel = document.getElementById("menu_content");
    menuPanel.style.cssText = "left:-200px;";
    var menuBG = document.getElementById("menu_bg");
    menuBG.style.cssText = "display:none;";
}

function hamburgerMenu() {
    "use strict";
    var leftValue = document.getElementById('menu_content').style.left;
    if (leftValue === "0px") {
        collapsePanel();
    }
    else {
        openPanel();
    }
}
