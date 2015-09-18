function getRandomText(){
	var samples = [
		"学びがある",
		"尊い",
		"徳が高い",
		"LGTM",
		"鮨",
		"DDD",
		"イカやりたい",
		"出社",
		"出社した",
		"Vim",
		"なるほど",
		"なるほどなるほど",
		"リリースした",
		"圧倒的"
	]
	return samples[Math.floor(Math.random() * samples.length)];
}

function appendItem(parent, text){
	var element = $('<div class="item"><div class="avatar"></div><div class="item__text">' + text + "</div></div>");
	element.appendTo(parent).hide().fadeIn(1000);
}
$(function(){
	var $container = $('section');
	$container.perfectScrollbar();
	for(i = 0; i < 100; i++){
		appendItem("section", getRandomText());
	}
	
	setInterval(function(){
		appendItem("section", getRandomText());
		$container.scrollTop($container.prop( "scrollHeight" ) );
		$container.perfectScrollbar('update');
	}, 2000);
	
	$('aside').perfectScrollbar();
});
