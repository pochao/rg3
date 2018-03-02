const rg3 = require('../lib/rg3');

var bot = new rg3();

bot.listen(function(msg){
	console.log(msg);
})