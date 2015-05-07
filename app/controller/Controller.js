Ext.define('PBI.controller.Controller', {
	extend: 'Ext.app.Controller',
	stores: [
	],
	views: [
		'PBI.view.PbiToolbar',
		'PBI.view.CreatePbi'
	],

	init: function() {
		this.control({
			'pbiToolbar > button[id="createBtn"]': {
				click: this.createPbi
			},
			'pbiToolbar > button[id="editBtn"]': {
				click: this.debugConsole
			},
			'pbiToolbar > button[id="histBtn"]': {
				click: this.debugConsole
			},
			'pbiToolbar > button[id="refreshBtn"]': {
				click: this.debugConsole
			},
			'createPbi > toolbar[id="createPbiToolbar"] > button[id="confirmBtn"]': {
				click: this.debugConsole
			},
			'createPbi > toolbar[id="createPbiToolbar"] > button[id="resetBtn"]': {
				click: this.debugConsole
			},
		});
	},

	debugConsole: function() {
		console.log('control working');
	},

	createPbi: function () {
		createWindow = Ext.widget('createPbi');
		createWindow.displayWindow();
	}
});