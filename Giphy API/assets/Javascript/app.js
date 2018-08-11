var VehicleType = ["Toyota", "Ford", "chevy", "Honda", "Nissan", "Mitsubishi", "Suzuki", "Volkswagen", "Infiniti", "Fiat", "Kia", "Hyundai", "Mazda", "Subaru", "GMC", "Volv", "BMW"];


//creates buttons
function ttButtons(){
	$('#Buttons-view').empty();
	for(var i = 0; i < VehicleType.length; i++){
		var inputs= $('<button>').text(VehicleType[i]).addClass('inputs').attr({'data-name': VehicleType[i]});
		$('#Buttons-view').append(inputs);
	}

	//displays gifs on click
	$('.inputs').on('click', function(){
		$('#show').empty();

		var vehicles = $(this).data('name');
		var giphyURL = "http://api.giphy.com/v1/gifs/search?&q=vehicles+" + vehicles + "&api_key=dc6zaTOxFJmzC&limit=10";
    $.ajax({
      url: giphyURL,
       method: 'GET'
      })
    


    .done(function(response){
	     console.log(response); // console test to make sure something returns
		var	feedback = response.data;
			$.each(feedback, function(index,value){
				animated= value.images.original.url;
				paused= value.images.original_still.url;

      			
	var xRating = value.rating;
	if(xRating == ''){xRating = 'unrated';}
    var rating = $('<p>').text('Rated: '+ xRating).addClass('ratingStyle');
					
	Gif= $('<img>').attr('src', animated).attr('animated', animated).attr('paused', paused).addClass('image');
		var Display = $('<button>').append(rating, Gif);
				$('#show').append(Display);


			});
		});
	 });
   }
              $(document).on("click", function() {
	                   
	                      var image = $(this).attr("src");
	                          
	                               if (src === "animated") {
	                                 
	                                   $(this).attr("src", "paused");
								   } else {
                                          	  $(this).attr("src", $(this).attr("data-still"));
	                                          $(this).attr("data-still", "still");
	                                          }
                                              });

                                 
  $('#add-vehicle').on('click', function(){
	var anothervehicle = $('#vehicle-input').val().trim();
	VehicleType.push(anothervehicle);
	ttButtons();
	return false;
    }); ttButtons();

