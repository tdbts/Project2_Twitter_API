jQuery(document).ready(function($) {
	
	$('#check_it').fadeOut(1000).fadeIn(1000);

	function getSearchValue() {
		
		var search_value = encodeURIComponent($('input[name=search_terms]').val());
		return search_value;
	}

	function search(searchTerms, searchURL) {

		$('#ajax_results').html('Searching Twitter...');

		// var search_value = encodeURIComponent($('input[name=search_terms]').val());
		console.log("Searching for " + searchTerms + ".");

		$.ajax({

			// Create URL
			url: searchURL + "?q=" + searchTerms, 

			success: function(data) {
				
				console.log("Search for " + searchTerms + " was successful!");
				// Display the results
				$('#ajax_results').html(data);
			},

			error: function() {
				$('#ajax_results').html('Ajax request failed');
			}
		});
	}
	
	$('#search_button').click(function() {

		var search_value = getSearchValue();
		search(search_value, "search_response.php");
	});

	$('#raw_data_button').click(function() {
		
		var search_value = getSearchValue();
		search(search_value, "raw_data_response.php");
	});

}); 	