
// ===================================== Forma otpravki ajax

$(document).ready(function() {

	$("#ajax-contact").submit(function() {
		$.ajax({
			type: "POST",
			url: "/dist/php/mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Благодорю вас! Я скоро откликнусь.");
			$("#ajax-contact").trigger("reset");
		});
		return false;
	});
	
});   

// ===================================== menu

$("#navToggle").click(function() { 

    $(this).toggleClass('active'); 
         
    $('.menu').toggleClass('menu-smart-active');  
});
 
$('#li_punkt1, #li_punkt2, #li_punkt3, #li_punkt4, #li_punkt5, #li_punkt6').click(function() {

    $("#navToggle").removeClass('active'); 
           
    $('.menu').removeClass('menu-smart-active');
        
});  


// ===================================== 