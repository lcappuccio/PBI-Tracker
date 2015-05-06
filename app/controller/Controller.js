Ext.define('PBI.controller.Controller', {
	extend: 'Ext.app.Controller',
	stores: [
	],
	views: [
		'PBI.view.PbiToolbar'
	],

	init: function() {
		this.control({
			'pbitoolbar > button[id="createBtn"]': {
				click: this.debugConsole
			},
			'pbitoolbar > button[id="editBtn"]': {
				click: this.debugConsole
			},
			'pbitoolbar > button[id="histBtn"]': {
				click: this.debugConsole
			},
			'pbitoolbar > button[id="refreshBtn"]': {
				click: this.debugConsole
			}
		});
	},

	debugConsole: function() {
		console.log('control working');
	}
});