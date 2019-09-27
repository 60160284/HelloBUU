//1
$(document).ready(function () {
    $("#hideLogo").bind("click", hideTheImage);
    //more functions
});

function hideTheImage() {
    $("#logo5").hide('slide', {}, 2500);
}

//2
$(document).ready(function () {
    $("#showLogo").bind("click", showTheImage);
    //more functions
});

function showTheImage() {
    $("#logo").show('slide', {}, 2500);
}

//3
$(document).ready(function () {
    $("#toggleText").bind("click", toggleTheText);
    //more functions
});

function toggleTheText() {
    $("h3").toggle('size', {}, 2500);
}

//4
$(document).ready(function () {
    $("#fadeLogo").bind("click", fadeTheImage);
    //more functions
});

function fadeTheImage() {
    $("#logo6").fadeOut(2500);
}

//5
$(document).ready(function () {
    $("#fadeALittle").bind("click", fadeLittle)
    //more functions
});

function fadeLittle() {
    $("#logo").fadeTo( "slow" , 0.5);
}

// 6
$(document).ready(function () {
    $("#fullOpacity").bind("click", FullOpacit);
    //more functions
});

function FullOpacit() {
    $("#logo").fadeTo( "slow" , 1);
}

//7
$(document).ready(function () {
    $("#slideAway").bind("click", slideAwa);
    //more functions
});

function slideAwa() {
    $("#text1").slideUp( "slow");
}

//8
$(document).ready(function () {
    $("#slideBack").bind("click", slideBac);
    //more functions
});

function slideBac() {
    $("#text1").slideDown( "slow" );
}

// 9
$(document).ready(function () {
    $("#customAnim").bind("click", customAnimt);
    //more functions
});

function customAnimt() {
    $("#logo4").animate( {opacity: 0.25,
        right: "+=50",
        height: "toggle"
      }, 5000);
}

// 10
$(document).ready(function () {
    $("#shakeLogo").bind("click", shakeLogo);
    //more functions
});

function shakeLogo() {
    $("#logo2").effect("shake");
}
// 11
$(document).ready(function () {
    $("#bounceLogo").bind("click", bounceTheImage);
    //more functions
});

function bounceTheImage() {
    $("#logo3").effect("bounce", { times: 3 }, "slow");
}
// 12
$(document).ready(function () {
    $("#highlightText").bind("click", highlightTheText);
    //more functions
});

function highlightTheText() {
    $("#text2").effect("highlight");
}
//13
$(document).ready(function () {
    $("#pulsateLogo").bind("click", pulsateTheImage);
    //more functions
});

function pulsateTheImage() {
    $("#text2").effect( "pulsate");
}
// 14
$(document).ready(function () {
    $("#sizeLogo").bind("click", sizeTheImage);
    //more functions
});

function sizeTheImage() {
    $("#logo1").effect( "size" );
}
