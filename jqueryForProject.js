jQuery(document).ready(function($) {

	// Make an AJAX request
	$.ajax({

		// Define the URL being called by AJAX
		// The '140dev' URL here is merely a placeholder 
		// When I'm ready, I must change it to call my server
		url: 'http://tdbts.github.io/Project2_Twitter_API/ajax_response.php'

		// Put the results into the display element
		success: function(data) {
			$('#ajax_results').html(data);
		},

		// Display an error message if the request fails
		error: function(data) {
			$('#ajax_results').html('Ajax request failed');
		}
	})

});