var quotes = [
	"We cling to what's familiar and even make the negativity strangely pleasurable.\nBecoming super motivated, in this case, only leads to unfamiliar territory and is intimidating.",
	"White isn't white it's bright Red Green and Blue.",
	"That's my secret, I'm always tired."
];

function quoteGen() {
	//var ran = Math.floor((Math.random() * ((quotes.length)) - 0) + 0);
	var selectedQuote = quotes[2];
	console.log(selectedQuote);
	$("#jsQuote").text(selectedQuote);
}

function windowResize() {
    var height = $(window).height();
    $('#banner').css('height', height );
}

$(document).ready(function () {
    windowResize();
    window.setTimeout($("#hi").css("color", "#DDD"), 500);
	quoteGen();
});

$(window).resize(function () { windowResize(); });