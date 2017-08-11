$(function (){

	var btn = document.querySelector('#btn');
	var animalContainer = document.querySelector('#animal-info');
	var currentPage = 1;

	btn.addEventListener('click', function(){

		var dataRequest = new XMLHttpRequest();

		dataRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + currentPage + '.json');
		dataRequest.onload = function(){
			var animalData = JSON.parse(dataRequest.responseText);
			renderHTML(animalData);
		};
		dataRequest.send();
		currentPage++;
		if(currentPage > 3){
			$("#btn").addClass('hide');
		}
	});

	var renderHTML = function (data){
		var htmlString = '';
		for(var i = 0; i < data.length; i++){
			htmlString += '<p>' + data[i].name + ' is a ' + data[i].species + ' and likes to eat ';
			for(var j = 0; j < data[i].foods.likes.length; j++){
				var likes = data[i].foods.likes[j];
				if(j == 0){
					htmlString += likes;
				}
				else{
					htmlString += ' and ' + likes;
				}
			}
			htmlString += ' but dislikes ';
			for(var d = 0; d < data[i].foods.dislikes.length; d++){
				var dislikes = data[i].foods.dislikes[d];
				if( d == 0){
					htmlString += dislikes;
				}
				else{
					htmlString += ' and ' + dislikes;
				}
			}
			htmlString += '.</p>';
		}
		animalContainer.insertAdjacentHTML('beforeend', htmlString);
	};
});