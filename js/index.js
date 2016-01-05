var quotes = [
	"White isn't white it's bright Red Green and Blue.",
	"That's my secret, I'm always tired.",
	"while (true) { Console.WriteLine(\"This is the song that never ends\"); }",
	"I do shit sometimes or something",
	"megic",
	"orginal shit"
];

function quoteGen() {
	var ran = Math.floor((Math.random() * ((quotes.length)) - 0) + 0);
	var selectedQuote = quotes[ran];
	console.log(selectedQuote);
	$("#jsQuote").text(selectedQuote);
}

function windowResize() {
    var height = $(window).height();
    $('#banner').css('height', height );
}

$(document).ready(function () {
    windowResize();
    window.setTimeout(function() {$("#hi").css("color", "#DDD")}, 500);
	if ($("html").attr("id") === "index") {
		quoteGen();		
	}
});

$(window).resize(function () { windowResize(); });