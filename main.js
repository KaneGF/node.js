var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener = function listener(){
    console.log("listener");
}

eventEmitter.on('connection',listener);

eventEmitter.emit('connection');