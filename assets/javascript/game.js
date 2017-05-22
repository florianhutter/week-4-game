$(document).ready(function() {

	crystals = ['assets/images/red.png','assets/images/green.png','assets/images/pink.png','assets/images/blue.png'];

	var counter = 0;
	var win = 0;
	var loose = 0;
	$('#win').text(win);
	$('#loss').text(loose);
	
	assignCrystals();
	newGame();

	function assignCrystals () {
		var number = []
			while(number.length < 4){
			  var randomnumber = Math.ceil(Math.random()*12)
			  var found = false;
			  for (var i=0; i< number.length; i++){
				if (number[i] == randomnumber){
					found = true; break
				}
			  }
			  if(!found)number[number.length]=randomnumber;
			}
		console.log(number);		

		for (i = 0; i < number.length; i++) {
			var crystalFace = $('<img>');
			crystalFace.attr('data-num', number[i]);
			crystalFace.attr('src', crystals[i]);
			crystalFace.attr('alt', 'crystals');
			crystalFace.addClass('crystalFace')
			$('#crystals').append(crystalFace);
		}
	}

	function newGame() {

		counter = 0;
		$('#currentScore').text(counter);

		function randomIntFromInterval(min,max){
		   	return Math.floor(Math.random()*(max-min+1)+min);
			}

		var randomnumber = randomIntFromInterval(19,120);

		$('.value').text(randomnumber);


		$('.crystalFace').on('click', function(){
		    counter = counter + parseInt($(this).data('num'));
		    var audio = new Audio("assets/sounds/boing.mp3");audio.play();
		   
		    $('#currentScore').text(counter);

		    if (counter == randomnumber){
		      var audio = new Audio("assets/sounds/winsound.mp3");audio.play();
		      win ++;
		      $('#win').text(win);
		      console.log(wins)
		      $('#crystals').empty();
		      assignCrystals();
		      newGame();
		        
		    } else if ( counter > randomnumber){
		        var audio = new Audio("assets/sounds/loosesound.mp3");audio.play();
		        loose ++;
		        $('#defeat').text(loose);
		        console.log(loose)
		        $('#crystals').empty();
		        assignCrystals();
		        newGame();
		    }
		});
	}

})