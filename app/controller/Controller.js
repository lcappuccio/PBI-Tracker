Ext.define('PBI.controller.Controller', {
	extend: 'Ext.app.Controller',
	stores: [
	],
	views: [
		'PBI.view.PBIToolbar'
	],

	init: function() {
		this.control(
		{
		});
	},

	debugConsole: function() {
		console.log('control working');
	}
});