//Show all images
document.querySelectorAll(".viewAll").forEach(function(c){c.click()});
// Start all videos playing
document.querySelectorAll(".vjs-poster").forEach(function(c){c.click()});
// Immediatly pause them all
document.querySelectorAll(".vjs-tech").forEach(function(c){c.click()});

// Download all videos (wip)
/*document.querySelectorAll("source").forEach(function(c,n){
	console.log(c.src);
	
	var pom = document.createElement('a');
	    pom.setAttribute('href', c.src);
pom.setAttribute('target', "_blank");
	    pom.setAttribute('download', c.src.split("/").slice(-1));

pom.id = n;




    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    }
    else {
        pom.click();
    }


});

/*
  $('<a/>',{
     "href":c.src,
    "download":c.src.split("/").slice(-1),
    id:c.src.split("/").slice(-1),
"target":"_blank"
  }).appendTo(document.body);
document.getElementById(c.src.split("/").slice(-1)).click();


*/
