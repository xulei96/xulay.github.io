var render = function(page, data){ 
	console.log(data);
	console.log(typeof data);
	var img = "";
	$.each(data,function(name,value) {
		img += '<li><div class="img-box">' + '<a class="img-bg " rel="external" data-fancybox="images" href="http://oquhznm5y.bkt.clouddn.com/' + value + '" target="_blank"></a>' + '<img lazy-src="http://oquhznm5y.bkt.clouddn.com/' + value + '">'  + '</div></li>';
		alert(1)
			//img += '<img src="http://yourqiniu.url.com/' + data[i] + '">';
	});
	img = '<li><div class="img-box">' + '<a class="img-bg " rel="external" data-fancybox="images" href="http://oquhznm5y.bkt.clouddn.com/' + '0001.jpg' + '" target="_blank"></a>' + '<img lazy-src="http://oquhznm5y.bkt.clouddn.com/' + '0001.jpg' + '">'  + '</div></li>';

	
	$(".img-box-ul").append(img);
	$(".img-box-ul").lazyload();
	$("a[rel=example_group]").fancybox();
}

