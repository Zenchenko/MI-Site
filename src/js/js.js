
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