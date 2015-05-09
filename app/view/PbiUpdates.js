Ext.define('PBI.view.PbiUpdates', {
	extend: 'Ext.window.Window',
	alias: 'widget.pbiUpdates',
	id: 'pbiUpdates',
	title: 'Edit History',
	height : 150,
	width: 250,
	resizable: false,
	items: [
	{
		xtype: 'pbiUpdatesGrid'
	}
	],

	initComponent: function() {
		// Add listeners to dim toolbar and grid
		var mainApp = Ext.getCmp('mainApplication');
		this.addListener('destroy', function() {
			mainApp.unmask();
		});
		this.addListener('activate', function() {
			mainApp.mask();
		});
		this.callParent();
	},

	displayWindow: function(myId) {
		this.setTitle('Request Details :: #' + myId);
		thisGrid = Ext.getCmp('pbiUpdatesGrid');
		thisGrid.reloadAll(myId);
		this.show();
	}
});