exports.samples = [
	"turn debug mode {state}",
	"turn debug {state}",
	"set debug to {state}",
	"set debug mode to {state}"
];

exports.intents = [
	{
		"intent": "Debug",
		slots: [{
			name: "state",
			type: "OnOff"
		}]
    }
];

exports.slotTypes = {
	OnOff: {
		values: [
			"on",
			"off"
		]
	}
};

exports.DebugFactory = function(toggleDebug) {
	return function(request) {
		var newValue = request.request.intent.slots.state.value == 'on';
		toggleDebug(newValue);
		return 'Debug is now ' + (newValue ? 'on' : 'off');
	};
};