$(document).ready(function(){

	$("h1").on('click', function (){


		var thisItem = $(this);

		if(thisItem.hasClass("show")){

			thisItem.removeClass("show");
			thisItem.addClass("hide");
		}
		else if(thisItem.hasClass("hide")){

			thisItem.removeClass("hide");
			thisItem.addClass("show");
		}
		else{
			thisItem.addClass("show");
		}
	});

	$('#animate-box').on('click', function() {
		
		var thisItem = $(this);

		$('#display-box').css('border-color', 'red');
		$('#display-box').animate({'margin-left': '500px'}, 1000, function (){
			alert("animation complete");
		});
	});
	$('.reset-btn').click(function(){
		$('#display-box').css('margin-left', '0px');
	});
});