jQuery(document).ready(function($) {

	$('#check_it').fadeOut(1000).fadeIn(1000);

	$('#search_button').click(function() {

		// This can take a few seconds so display progress text
		$('#ajax_results').html('Searching Twitter...');

		// Get the value of the input field
		// Encode it for use in a URL
		var search_value = encodeURIComponent($('input[name=search_terms]').val());
		console.log("Searching for " + search_value + ".");

		// Send the search terms to the server in an AJAX request
		$.ajax({
			
			// Create URL
			url: 'search_response.php?q=' + search_value, 
			
			success: function(data) {
				
				console.log("Search for " + search_value + " was successful!");
				console.log("This is the raw data:<br/><br/" + data);
				// Display the results
				$('#ajax_results').html(data);
			},

			error: function() {
				$('#ajax_results').html('Ajax request failed');
			}
		});
	});
});