'use strict';

$(function (){

	var width = 720;
	var animationSpeed = 1000;
	var intervalSpeed = 3000;
	var currentSlide = 1;
	var interval;
	//DOM cache
	var $slider = $('#slider');
	var $slideContainer = $slider.find('.slides');
	var $slide = $slideContainer.find('.slide');

	function startSlider(){
		interval = setInterval(function(){
			$slideContainer.animate({'margin-left': '-=' + width}, animationSpeed, function(){
				currentSlide++;
				if(currentSlide === $slide.length){
					currentSlide = 1;
					$slideContainer.css('margin-left', 0);
				}
			});
		}, intervalSpeed);
	}

	function stopSlider(){
		clearInterval(interval);
	}

	$slideContainer
	.on('mouseenter', stopSlider)
	.on('mouseleave', startSlider);

	startSlider();
});