'use strict';

module.exports = (function(){

	var bot,
        conf;

	return function init (_bot){
		bot = _bot;
        conf = bot.conf;
		bot.on( 'message#', function( from, to, text ){

			if ( from.toLowerCase() === bot.conf.get('botName').toLowerCase() ){
				return;
			}

			if (text.indexOf('box install ') === 0) {
				bot.action(to, 'giggles');
			} else if (text.slice(-5) === ' over' ){
				bot.say(to, 'KSHHHK');
			} else if (text.toLowerCase().indexOf(bot.conf.get('botName').toLowerCase()) !== -1 && from !== conf.get('botName') && from !== 'zoidbox') {
				bot.say(to, randomZoidism(from));
			}

		});
	};

	function randomZoidism(from){
		var zoidisms = [
			'Woohoo!'
			,'This is crap people will use every freaking day'
			,'Really?!'
			,'Hi!'
			,'People are freaking ridiculous'
			,'awwww'
			,'suck it'
			,'idiots... they\'re all idiots...'
			,'tough shit!'
			,'let\'s do it {from}'
			,'ok I\'m done'
			,'He\'s a Wizard'
			,'the giants'
			,'occupy me {from}'
			,'this is some podman-level nonsense'
		];

		return zoidisms[Math.floor(Math.random() * zoidisms.length)].split('{from}').join(from);
	}

})();
