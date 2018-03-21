var tamanhoDisplay = $(window).height();
var animar = $(".anime-esquerda, anime-direita"),
	target = ($(window).height() * 3) / 4;


$("nav a").click(function(e){
	e.preventDefault();
	var id = $(this).attr("href");
	var targetOffset = $(id).offset().top - 65;

	$("html, body").animate({
		scrollTop: targetOffset
	}, 500);
})

function animeScroll(){
	var distanciaScrollTop = $(document).scrollTop();
	console.log(distanciaScrollTop)
	$(animar).each(function(){
		var itemTopo = $(this).offset().top;
		console.log(itemTopo)
		if (distanciaScrollTop > itemTopo - target){
			$(this).addClass("anime-start");
		} else {
			$(this).removeClass("anime-start")
		}
	});	


}

animeScroll();

$(document).scroll(function() {
	animeScroll()
});


