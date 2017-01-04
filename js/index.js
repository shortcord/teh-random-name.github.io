OnResize();
$(document).ready(function () {
    $(window).resize(OnResize);
    window.setTimeout(function() {$("#hi").css("color", "#DDD")}, 500);
});

function OnResize() {
    var height = $(window).height();
    $('#banner').css('height', height );
}