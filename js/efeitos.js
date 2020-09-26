$(document).ready(function(){

	var owl = $(".owl-carousel");
	owl.owlCarousel({
		items: 5,
		loop: true,
		margin: 5,
		autoplay: true,
		autoplayTimeout: 2000,
		autoplayHoverPause: true,
		slideTransition: 'ease-in-out',
		dots: false,
		loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            480:{
                items:3,
				nav:true,
				loop:true,
            },
            768:{
                items:4,    
                nav:true,
                loop:true,
            },
            1200:{
                items:6,
                nav:true,
                loop:true
            }
        }
	});

	$("#botao_anterior").on('click', function(){

		owl.trigger('prev.owl.carousel');

	});

	$("#botao_proximo").on('click', function(){

		owl.trigger('next.owl.carousel');

	});
	
	
	$("#logotipo").on("mouseover",function(){
		
		$("#banner h1").addClass("efeito");

	}).on("mouseout", function(){

		$("#banner h1").removeClass("efeito");

	});
		
	$("#input-search").on("focus", function(){

		$("li.search").addClass("ativo");

	}).on("blur", function(){

		$("li.search").removeClass("ativo");				

	});
	

	$("#bubir").on("click", function(event){

		$("html, body").animate({scrollTop : 0},1000);

			event.preventDefault();

	});	
	
	  
	


	 
});
