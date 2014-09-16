jQuery(document).ready(function($) {

	$('h1').fadeOut(1000).fadeIn(1000);

	$('#search_button').click(function() {

		// This can take a few seconds so display progress text
		$('#ajax_results').html('Searching Twitter...');

		// Get the value of the input field
		// Encode it for use in a URL
		var search_value = encodeURIComponent($('input[name=search_terms]').val());

		// Send the search terms to the server in an AJAX request
		$.ajax({
			
			// Create URL
			url: 'search_response.php?q=' + search_value, 
			
			succcess: function(data) {
				
				// Display the results
				$('#ajax_results').html(data)
			},

			error: function(data) {
				$('#ajax_results').html('Ajax request failed');
			}
		});
	});
});