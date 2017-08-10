'use strict';

$(function(){

var width = 720;
var animationSpeed = 1000;
var intervalSpeed = 3000;
var currentSlide = 1;

//DOM cache
var $slider = $('#slider');
var $slideContainer = $slider.find('.slides');
var $slides = $slideContainer.find('.slide')

var interval;

function startSlider(){

	interval =	setInterval(function(){
		$slideContainer.animate(
			{'margin-left': '-='+width}
		, animationSpeed, function(){
			if(++currentSlide === $slides.length){
				currentSlide = 1;
				$slideContainer.css('margin-left', 0);
			}
		});
	}, intervalSpeed);
}

function pauseSlider(){
	clearInterval(interval);
}

$slideContainer
	.on('mouseenter', pauseSlider)
	.on('mouseleave', startSlider);

startSlider();

});