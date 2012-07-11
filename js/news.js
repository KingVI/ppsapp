//Laden der aktuellsten SG-News
function loadNews() {
	$news = $("#news-items");
	// Nette Nachricht anzeigen...
	$news.html('<p>Lade neuste Nachrichten...</p>');
	// Feed-JSON-URL via JSONP lesen
	var url = 'http://sg.piratenpartei.ch/?json=1&callback=?';

	$.getJSON(url, function(postings) {
		// div-Tag mit id 'news-items' leeren
		$news.empty();
		postings.posts.forEach(function(post) {
			var linkMore = '<a target="_blank" href="' + post.url
					+ '">[...]</a>';
			var shortText = post.excerpt.replace(/.{5}$/, linkMore);
			$news.append('<h1>' + post.title + '</h1>');
			$news.append('<b>' + post.date.match(/.{10}/) + '</b>: '
					+ shortText);
		});
	});
}