var render = function(page, data){ 
	getJsonLength(data)
	console.log(data);
	console.log(typeof data);
	console.log(jsonLength);
	var img = "";
	$.each(data,function(name,value) {
		img += '<li><div class="img-box">' + '<a class="img-bg " rel="external" data-fancybox="images" href="http://oquhznm5y.bkt.clouddn.com/' + value + '" target="_blank"></a>' + '<img lazy-src="http://oquhznm5y.bkt.clouddn.com/' + value + '">'  + '</div></li>';
			//img += '<img src="http://yourqiniu.url.com/' + data[i] + '">';
	});

	
	$(".img-box-ul").append(img);
	$(".img-box-ul").lazyload();
	$("a[rel=example_group]").fancybox();
}
function getJsonLength(jsonData){  
	  
	    var jsonLength = 0;  
	  
	    for(var item in jsonData){  
	  
	        jsonLength++;  
	  
	    }  
	  
	    return jsonLength;  
	  
	} 