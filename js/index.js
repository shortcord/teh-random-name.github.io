function windowResize() {
    var height = $(window).height();
    $('#banner').css('height', height );
}

$(document).ready(function () {
    windowResize();
    window.setTimeout($("#hi").css("color", "#DDD"), 500);
    
});

$(window).resize(function () { windowResize(); });