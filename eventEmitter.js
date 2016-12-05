var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function listener1(){
    console.log('listener1 run');
}

var listener2 = function listener2(){
    console.log('listener2 run');
}

eventEmitter.addListener('connection',listener1);
eventEmitter.on('connection',listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log('connection event listeners:'+eventListeners);

eventEmitter.emit('connection');

eventEmitter.removeListener('connection',listener1);
console.log('do not listen listener1');

eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log('connection event listeners:'+eventListeners);

console.log('program finished.');