//Laden der News

function loadNews() {
	//div-Tag mit id 'news-items' leeren
	document.getElementById("news-items").innerHTML = "";

	//Feed-XML lesen
	xdr = new XDomainRequest();
	
	xdr.onload=function() {
		
		var items = xdr.responseXML.getElementsByTagName('item');		
		
		for (var i = 0; i <= 5; ++i) {
			
			var entryDate = new Date(items[i].getElementsByTagName('pubDate')[0].firstChild.nodeValue)
			var pubDate = entryDate.toLocaleDateString() + ', ' + entryDate.toLocaleTimeString();
			
			document.getElementById("news-items").innerHTML = document.getElementById("news-items").innerHTML + 
				"<h1>" + items[i].getElementsByTagName('title')[0].firstChild.nodeValue + "</h1>" +
				"<div class='news-item-date'>" + pubDate + "</div>" + 
				"<p>" + items[i].getElementsByTagName('content:encoded')[0].firstChild.nodeValue + "</p>"
		}		
	}
	
	xdr.open("GET", "http://sg.piratenpartei.ch/feed");
	xdr.contentType = "text/plain";
	xdr.send();
	
	return(true);
}


function loadNews_old() {
	//div-Tag mit id 'news-items' leeren
	document.getElementById("news-items").innerHTML = "";

	//Feed-XML lesen
	if (window.XMLHttpRequest) {
		xhttp = new XMLHttpRequest();
	} else { // IE 5/6
		xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  
	xhttp.open("GET", "http://sg.piratenpartei.ch/feed", false);
	xhttp.send();
	
	xmlDoc = xhttp.responseXML;
	echo(xmlDoc);
	var items = xmlDoc.getElementsByTagName('item');
	
	for (var i = 0; i <= 5; ++i) {
		
		var entryDate = new Date(items[i].getElementsByTagName('pubDate')[0].firstChild.nodeValue)
		var pubDate = entryDate.toLocaleDateString() + ', ' + entryDate.toLocaleTimeString();
		
		document.getElementById("news-items").innerHTML = document.getElementById("news-items").innerHTML + 
			"<h1>" + items[i].getElementsByTagName('title')[0].firstChild.nodeValue + "</h1>" +
			"<div class='news-item-date'>" + pubDate + "</div>" + 
			"<p>" + items[i].getElementsByTagName('content:encoded')[0].firstChild.nodeValue + "</p>"
	}
	
	return(true);
}