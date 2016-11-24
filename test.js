var should = require('should');
var debug = require('.');

describe('Debug', function() {
	describe('DebugFactory', function() {
		var debugOn = false;
		var toggle = function(val) { debugOn = val; };

		var debugHandler = debug.DebugFactory(toggle);
		debugHandler({
			request: {
				intent: {
					slots: {
						'state': {
							value: 'on'
						}
					}
				}
			}
		});

		debugOn.should.be.ok();
	});
	describe('samples', function() {
		it('should have samples', function() {
			debug.samples.length.should.be.above(0);
		});
	});
	describe('intents', function() {
		it('should have intents', function() {
			debug.intents.length.should.be.above(0);
		});
	});
	describe('slotTypes', function() {
		it('should have the OnOff slot type', function() {
			debug.slotTypes.OnOff.should.be.ok();
			debug.slotTypes.OnOff.values.length.should.be.above(0);
		});
	});
});