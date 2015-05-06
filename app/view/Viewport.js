Ext.define('PBI.view.Viewport',{
	extend: 'Ext.container.Viewport',
	requires: [
		'PBI.view.PBIToolbar'
	/*
	add all views here
	*/
	],
	layout:'fit',

	initComponent: function() {

		this.items = {
		layout: 'border',
		items: [
		{
			region: 'north',
			height: 30,
			collapsible: false,
			bodyStyle: 'background-color: #224477;',
			html: '<div class="mainTitle">&nbsp&nbspPBI Tracker Tool</div>'
		},
		{
			region: 'center',
			xtype: 'panel'
		},
		{
			region: 'south',
			xtype: 'pbitoolbar'
		}]
	};
	this.callParent(arguments);
	}
});
