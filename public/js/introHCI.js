'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// register click handler
	$('.likeBtn').click(likeClick);
}

function likeClick(e) {
	// prevent the page from reloading
	e.preventDefault();

	// send an Analytics event
	ga('send', 'event', 'like', 'click');
}
