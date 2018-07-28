const assert = require('assert');
const { EventHub } = require('../lib/eventhub');
const eventhub = new EventHub();

const tests = {
    on: function () {
        function test () {}
        eventhub.on('test.on', test);
        assert.strictEqual(eventhub.handler['test.on'], test);
    },
    emit: function () {
        let called = false;
        function test (p) {
            called = p;
        }
        eventhub.on('test.emit', test);
        const param = true;
        eventhub.emit('test.emit', param);
        assert.strictEqual(called, param);
    },
    off: function () {
        function test () {}
        eventhub.on('test.off', test);
        eventhub.off('test.off');
        assert.strictEqual(eventhub.handler['test.off'], undefined);
    }
}

describe('EventHub', function() {
    describe('on()', function() {
        it('should attach the function given to the key given', tests.on);
    });
    
    describe('emit()', function() {
        it('should call the event handler of the key given', tests.emit);
    });

    describe('off()', function() {
        it('should dettach the event handler from the key given', tests.off);
    });
    
    describe('$on()', function() {
        it('should be an alias of "on()"', tests.on);
    });
    describe('listen()', function() {
        it('should be an alias of "on()"', tests.on);
    });
    
    describe('$emit()', function() {
        it('should be an alias of "emit()"', tests.emit);
    });
    describe('fire()', function() {
        it('should be an alias of "emit()"', tests.emit);
    });

    describe('$off()', function() {
        it('should be an alias of "off()"', tests.off);
    });
    describe('remove()', function() {
        it('should be an alias of "off()"', tests.off);
    });
});