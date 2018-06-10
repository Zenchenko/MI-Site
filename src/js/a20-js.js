
//------- --------- -------- Forma otpravki ajax

$(document).ready(function() {

	$("#ajax-contact").submit(function() {
		$.ajax({
			type: "POST",
			url: "/dist/php/mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#ajax-contact").trigger("reset");
		});
		return false;
	});
	
});

// --------------------------------------------------


//Initiate Animation on Hover

 function animationHover(element, animation){
    element = $(element);
    element.hover(
        function() {
            element.addClass('animated ' + animation);        
        },
        function(){
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 2000);         
        });
}


//Initiate Animation on Click

function animationClick(element, animation){
    element = $(element);
    element.click(
        function() {
            element.addClass('animated ' + animation);        
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 2000);         
  
        });
}


$(document).ready(function(){
    $('#logo').each(function() {
        animationHover(this, 'bounceIn');
    });
});

$(document).ready(function(){
    $('li_punkt').each(function() {
        animationHover(this, 'bounceIn');
    });
});




// --------------------------------
  

	// $('#navToggle').on('click', function() {
	//     $('#menu').addClass('menu2');
	// 	setTimeout(function() {
	//     $('#menu').removeClass('menu');
	//   }, 3000);
	// });
	 

// ----------------------------------
 

     $(document).ready(function() {
        var click = 0;
        $('#navToggle').click(function() {
            if(click == 0){
                $('#menu').css('right', '30%');
                // ---------------
                $('.navBurger').css('left', '10%');
                $('#main-teni').css('background-color', 'rgb(250, 250, 250, 0.8)');
                $('#main-teni').css('z-index', '3');
                $('body').css('overflow-y', 'hidden');
                click = 1;
            }else{
                $('#menu').css('right', '-2000px');
                // ---------------
                $('.navBurger').css('left', '45%'); 
                $('#main-teni').css('background-color', 'rgb(47, 7, 71, 0.2)'); 
                $('#main-teni').css('z-index', '1'); 
                $('body').css('overflow-y', 'auto'); 
                click = 0;
            }
        });
    });