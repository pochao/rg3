function rg3() {
	this.name = '雅智三號';
	console.log('RG3機器人已建立');
}

rg3.prototype.listen = function(callback) {
	callback('ok');
}

rg3.prototype.speak = function (message) {
	console.log('機器人說: ' + message)
}

rg3.prototype.play = function (soundFile) {
	console.log('機器人播放: ' + soundFile)
}

module.exports = rg3;