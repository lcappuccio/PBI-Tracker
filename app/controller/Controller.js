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
			'pbitoolbar > button[id="createBtn"]': {
				click: this.createPbi
			},
			'pbitoolbar > button[id="editBtn"]': {
				click: this.debugConsole
			},
			'pbitoolbar > button[id="histBtn"]': {
				click: this.debugConsole
			},
			'pbitoolbar > button[id="refreshBtn"]': {
				click: this.debugConsole
			},
			'createpbi > toolbar[id="createpbitb"] > button[id="confirmBtn"]': {
				click: this.debugConsole
			},
			'createpbi > toolbar[id="createpbitb"] > button[id="resetBtn"]': {
				click: this.debugConsole
			},
		});
	},

	debugConsole: function() {
		console.log('control working');
	},

	createPbi: function () {
		createWindow = Ext.widget('createpbi');
		createWindow.displayWindow();
	}
});