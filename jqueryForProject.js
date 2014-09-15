jQuery(document).ready(function($) {

	$('h1').fadeOut(1000).fadeIn(1000);

	// Make an AJAX request
	$.ajax({

		// Define the URL being called by AJAX
		// The '140dev' URL here is merely a placeholder 
		// When I'm ready, I must change it to call my server
		url: 'ajax_response.php',

		// Put the results into the display element
		success: function(data) {
			$('#ajax_results').html(data);
		},

		// Display an error message if the request fails
		error: function(data) {
			$('#ajax_results').html('Ajax request failed');
		}
	});

});