$(document).ready(function () {

	$('.accordion__title').click(function () {

		if (!$('#interface').is(':checked')) {
			$(this).toggleClass("active");
			$(this).next().toggleClass("show");
			$(this).children(".accordion__title__icon").toggleClass("down");
		} else {
			$(".accordion__title").removeClass("active");
			$(".accordion__cont").removeClass("show");
			$(".accordion__title__icon").removeClass("down");
			$(this).toggleClass("active");
			$(this).next().toggleClass("show");	
			$(this).children(".accordion__title__icon").toggleClass("down");
		}
	})
	
});

