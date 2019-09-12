
$(document).ready(function() {
	var black = true;
	var divPosition = $('#port').offset();
	
	$('#creative').click(function(){
		$('html,body').animate({scrollTop: $('#po').offset().top}, 1000);
	});

	$('#photo').click(function(){
		$('html,body').animate({scrollTop: $('#a1').offset().top}, 1000);
	});

	$('#contact').click(function(){
		$('html,body').animate({scrollTop: $('#me').offset().top}, 1000);
	});




	$("#lightbox").hide();

	$("#po").click(function() {
		$("#lightbox").show();
		$('#po').hide();
		$('#mat').hide();
	});
	
	
	$("#overlay").click(function() {
		$("#lightbox").hide();
		$('#po').show();
		$('#mat').show();
	});


	$('#c1, #c2').click(function() {

		if (!black) {
			$('body').css('background-color', '#323232');
			$('#creative_text').css('color', '#f46b42');
			$('.hortext').css('color', '#f46b42');
			$('.verticaltext').css('color', '#f46b42');
			$('a').css('color', '#f46b42');
			$('#name').css('color', '#D3C242');
			black = true;
		} 
		else {
			$('body').css('background-color', '#b0acc1');
			$('p').css('color','#fce8c7');
			$('a').css('color', '#fce8c7');
			$('#name').css('color', '#D3C242');
			black = false;
		}
	});

	$('#c3').click(function() {

		if (!black) {
			$('body').css('background-color', '#323232');
			$('#creative_text').css('color', '#f46b42');
			$('.hortext').css('color', '#f46b42');
			$('.verticaltext').css('color', '#f46b42');
			$('a').css('color', '#f46b42');
			$('#name').css('color', '#D3C242');
			black = true;
		} 
		else {
			$('body').css('background-color', '#F5F5F5');
			$('p').css('color','#5F6F76');
			$('a').css('color', '#5F6F76');
			$('#name').css('color', '#D3C242');
			
		}
	});

	$(window).scroll(function() {

  	if ($(window).scrollTop() > 600) { 
  		$('#creative_text, #arrow').show(); 
  		$('#creative_tex, #arrow').fadeIn('slow');
  	}

 

  	if ($(window).scrollTop() < 600) { 
  		$('#creative_text, #arrow').hide(); 
  		$('#creative_text, #arrow').fadeOut('slow');
  	}

  	if ($(window).scrollTop() > 1600) { 
  		$('#creative_text').hide(); 
  		$('#creative_text').fadeOut('slow');
  	}



  	if ($(window).scrollTop() > 1700) { 
  		$('#photo_text').show(); 
  		$('#photo_text').fadeIn('slow');
  	}

  	if ($(window).scrollTop() < 1700) { 
  		$('#photo_text').hide(); 
  		$('#photo_text').fadeOut('slow');
  	}

  	if ($(window).scrollTop() > 3200) { 
  		$('#photo_text').hide(); 
  		$('#photo_text').fadeOut('slow');
  	}
  




  	if ($(window).scrollTop() > 3000) { 
  		$('#contact_me').show(); 
  		$('#contact_me').fadeIn('slow');
  	}

  	if ($(window).scrollTop() < 3000) { 
  		$('#contact_me').hide(); 
  		$('#contact_me').fadeOut('slow');
  	}

  	if ($(window).scrollTop() > 5000) { 
  		$('#contact_me').hide(); 
  		$('#contact_me').fadeOut('slow');
  	}



  	if ($(window).scrollTop() > 3200) { 
  		$('#contact_info').show(); 
  		$('#contact_info').fadeIn('slow');
  	}

  	if ($(window).scrollTop() < 3200) { 
  		$('#contact_info').hide(); 
  		$('#contact_info').fadeOut('slow');
  	}

  	if ($(window).scrollTop() > 5000) { 
  		$('#contact_me, #contact_info').hide(); 
  		$('#contact_me, #contact_info').fadeOut('slow');
  	}



});


});



