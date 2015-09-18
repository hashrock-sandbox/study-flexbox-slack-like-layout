function getRandomText(){
	var prefix = [
		"これから",
		"そういえば",
		"先ほど",
		"圧倒的に",
		"圧倒的",
		"ただちに",
		"みんなで",
		"恐縮ですが",
		"個人的には",
		"私見ですが",
		"俺は",
		"非常に",
		"","","","","","","","","",
		"","","","","","","","",""
	]
	
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
		"焼き肉",
	]
	
	var gobi = [
		"ですね",
		"かと",
		"ですかね",
		"していきます",
		"しました",
		"ということです",
		"していきましょう",
		"しようぜ",
		"","","","","","","","","",
		"","","","","","","","",""
	]
	return rand(prefix) + rand(samples) + rand(gobi);
}

function rand(arr){
	return arr[Math.floor(Math.random() * arr.length)]
}

function getRandomUser(){
	var prefix = [
		"yama", "taka", "suzu", "usa", "miz", "toku", "nao", "kazu", "kimu", "sa", "yu", "kei", "kao", "tori", "hoge", "piyo", "nan"
	]
	var postfix = [
		"chi", "maru", "chan", "san", "da", "ya", "yan", "kyun", "cha", "zoi", "cho", "yama", "pon", "to", "po", "run", "yan", "zono"
	]
	return rand(prefix) + rand(postfix);
}


function appendItem(parent, text){
	
	
	var element = $('<div class="item"><div class="avatar"></div><div class="item__body"><div class="item__user">'
		+ getRandomUser() +'</div><div class="item__text">' + text + "</div></div></div>");
	element.appendTo(parent).hide().fadeIn(1000);
}

function appendUser(parent, name){
	var element = $('<li>' + name + "</li>");
	element.appendTo(parent);
}

$(function(){
	var $container = $('section');
	$container.perfectScrollbar();
	for(i = 0; i < 100; i++){
		appendItem("section", getRandomText());
	}
	
	for(i = 0; i < 100; i++){
		appendUser(".userlist", getRandomUser());
	}	
	
	setInterval(function(){
		appendItem("section", getRandomText());
		$container.scrollTop($container.prop( "scrollHeight" ) );
		$container.perfectScrollbar('update');
	}, 2000);
	
	$('aside').perfectScrollbar();
});
