$(window).on('resize', function(){
	const width = $(this).width()
	$(".card-img-top").each(function(index, el) {
		if (width < 1200) {
			$(this).addClass('darkened')
		} else {
			$(this).removeClass('darkened')
		}
	});
})

