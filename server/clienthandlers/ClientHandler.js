var events = require('events'),
	util = require('util'),
	Constants = require('../../shared/Constants'),
	AppModel = require('../model/AppModel');

function ClientHandler(role, socket) {
	events.EventEmitter.call(this);
	this.role = role;
	this.socket = socket;
	this.appModel = AppModel.getInstance();

	this.socket.on('disconnect', this.forwardEventHandler.bind(this, 'disconnect'));
	this.socket.on(Constants.UPDATE_MAXIMUM_MOTION, this.forwardEventHandler.bind(this, Constants.UPDATE_MAXIMUM_MOTION));

	this._currentSlideIndexChangedHandler = this.currentSlideIndexChangedHandler.bind(this);
	this.appModel.on(AppModel.CURRENT_SLIDE_INDEX_CHANGED, this._currentSlideIndexChangedHandler);

	this.currentSlideIndexChangedHandler(this.appModel.getCurrentSlideIndex(), this.appModel.slides[this.appModel.getCurrentSlideIndex()]);
}

util.inherits(ClientHandler, events.EventEmitter);

ClientHandler.prototype.dispose = function() {
	this.socket.removeAllListeners();
	this.appModel.removeListener(AppModel.CURRENT_SLIDE_INDEX_CHANGED, this._currentSlideIndexChangedHandler);
};

ClientHandler.prototype.send = function() {
	this.socket.emit.apply(this.socket, arguments);
};

ClientHandler.prototype.currentSlideIndexChangedHandler = function(currentSlideIndex, currentSlide) {
	this.send(AppModel.CURRENT_SLIDE_INDEX_CHANGED, currentSlideIndex, currentSlide);
};

ClientHandler.prototype.forwardEventHandler = function(event) {
	var args = Array.prototype.slice.call(arguments);
	this.emit.apply(this, [event, this].concat(args.slice(1)));
};

module.exports = ClientHandler;