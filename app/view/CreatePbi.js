Ext.define('PBI.view.CreatePbi', {
	extend: 'Ext.window.Window',
	alias: 'widget.createPbi',
	id: 'createPbi',
	title: 'Create new PBI',
	autoScroll:true,
	resizable: false,
	bodyPadding: '5px 5px 0',
	dockedItems: {
		xtype: 'toolbar',
		dock: 'bottom',
		id: 'createPbiToolbar',
		items: [
		'->', // Fill
		{
			text: 'Confirm',
			iconCls: 'confirm',
			id: 'confirmBtn'
		},
		{ xtype: 'tbseparator' },
		{
			text: 'Reset All',
			iconCls: 'reset',
			id: 'resetBtn'
		}]
	},
	items: [
	{
		xtype: 'textfield',
		fieldLabel: 'PBI Id',
		id: 'pbiId',
		allowBlank: false,
		regex: /^[0-9]*$/
	},
	{
		xtype: 'textfield',
		fieldLabel: 'PBI Description',
		id: 'pbiDescr',
		allowBlank: false
	}],

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
		Ext.getCmp('pbiId').isValid();
		Ext.getCmp('pbiDescr').isValid();
	},

	displayWindow: function() {
		this.show();
	}
});