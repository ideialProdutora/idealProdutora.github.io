// Nav
$('.menu-nav').css({
	'top': '0px'
});

// Select idioma nav
$('#laguage').on('change', function() {
	var nameSelect  = this.value;

	switch (nameSelect) {

		case 'Idioma':
        location.href = "index.html";
        break;

		case 'Portuguese':
        location.href = "index.html";
        break;

		case 'Português':
				location.href = "index.html";
        break;

    case 'Language':
        location.href = "index-es.html";
        break;

		case 'Inglês':
        location.href = "index-es.html";
        break;

		case 'English':
        location.href = "index-es.html";
        break;

	}
});

// Define var tmenu
 	var tmenu = $('.menu-nav').position().top + $('.menu-nav').data('position');
 		$('.menu-nav').css({
 			'top': tmenu
 		});

// Action Scroll nav
$(window).scroll(function(){

	var wScroll = $(this).scrollTop();
	var heightheader = $('#header').height()-80;

	// Move scrollTop
	if (wScroll < (heightheader ) ) {
    var tamanho = $(window).width();
		//alert(tamanho);
    // Menu transparent
		$('.menu-nav').addClass('js-active-transparent');

		if(tamanho >= 550){


			$('.hamburger').css({
					'top':'40px'
			});



			$('.menu-nav').css({
				'margin-top':'42px'
			});

		}else {

			$('.hamburger').css({
				'top':'20px'
			});

			$('.menu-nav').css({
				'margin-top':'22px'
			});

		}

    // Change logo-header menu
    $('.logo-header img' ).attr('src','img/logo-header.png' );

    // Icom menu
		$('.line').css({
			'background-color': '#fff'
		});

		$('.back-title-menu').css({
			'background-color': '#9966cc'
		});

		$('.back-title-menu h1').css({
			'color': '#fff'
		});

    // Icon select color white
		$('.select-header select').css({
			'background-image': 'url("img/arrow_down.svg")',
			'border':' 2px solid #fff',
			'color': '#fff',
			'background-color': 'transparent'
		});

    // Remove .name-menu
		$('.menu-nav .content-flex-nav .logo-header .name-menu').css({
			'display': 'none'
		});

    // Efeito select mouseover
		$( "#laguage" ).mouseover(function() {
			$('.select-header select').css({
				'background-image': 'url("img/arrow_down-b.svg")',
				'border':' 2px solid #9966cc',
				'color': '#9966cc',
				'background-color': '#fff'

			});
		});

    // Efeito select mouseout
		$( "#laguage" ).mouseout(function() {
			$('.select-header select').css({
				'background-image': 'url("img/arrow_down.svg")',
				'border':' 2px solid #fff',
				'color': '#fff',
				'background-color': 'transparent'

			});
		});

	}

  // Scrolll white menu
	if (wScroll >= heightheader ) {

    // Remove class js-active-transparent
    $('.menu-nav').removeClass('js-active-transparent');

    // Add js-action menu
    $('.menu-nav').addClass('js-active');

		$(document).ready(function(){
			var mylink =".menu";
			if($(mylink).hasClass('on')){

				$('.hamburger').css({
				'top':'40px'
				});

			}else{
    	// Change top icon menu-nav
    	$('.hamburger').css({
			'top':'0px'
			});
		}
	 });

		$('.menu-nav').css({
			'margin-top':'0px'
		});

    // Change logo-header menu for blue logo
		$('.logo-header img' ).attr('src','img/logo-headerf.png' );

		// Change color icon menu for blue
		$('.line').css({
			'background-color': '#9966cc'
		});

		$('.back-title-menu').css({
			'background-color': '#fff'
		});

		$('.back-title-menu h1').css({
			'color': '#9966cc'
		});



    // Change menu-nav for display flex
		$('.menu-nav .content-flex-nav .logo-header .name-menu').css({
			'display': 'flex'
		});

    // Change color input select
		$('.select-header select').css({
			'background-image': 'url(img/arrow_down-b.svg)',
			'border':' 2px solid #9966cc',
			'color': '#9966cc'
		});

    // Efeito mouseover input select
		$( "#laguage" ).mouseover(function() {
			$('.select-header select').css({
				'background-image': 'url(img/arrow_down.svg)',
				'border':' 2px solid #fff',
				'color': '#fff',
				'background-color': '#9966cc'
			});
		});

    // Efeito mouseout input select
		$( "#laguage" ).mouseout(function() {
			$('.select-header select').css({
				'background-image': 'url(img/arrow_down-b.svg)',
				'border':' 2px solid #9966cc',
				'color': '#9966cc',
				'background-color': '#fff'
			});
		});

	}

  // RemoveClass js-active menu-nav
	if ( tmenu > wScroll) {
		$('.menu-nav').removeClass('js-active');
	}


});
