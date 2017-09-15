$(function() {
	$(".scroll").click(function(event) {
		event.preventDefault();
		let goTo = $(this).attr("href");
		$("html, body").animate({
			scrollTop: $(goTo).offset().top
		}, 1000);
	});
	
	$("#totop").click(function(event) {
		event.preventDefault();
		$("html, body").animate({scrollTop: 0}, 1000);
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$("#totop").fadeIn();
		} else {
			$("#totop").fadeOut();
		}
	});
});