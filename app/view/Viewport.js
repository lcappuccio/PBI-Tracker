Ext.define('PBI.view.Viewport',{
	extend: 'Ext.container.Viewport',
	requires: [
		'PBI.view.PBIToolbar',
		'PBI.view.UserList'
	/*
	add all views here
	*/
	],
	layout:'fit',

	initComponent: function() {

		function showLogin() {
			Ext.create('Ext.window.Window', {
				title: 'Login',
				id: 'loginWindow',
				resizable: false,
				closable: false,
				bodyPadding: '5px 5px 0',
				buttonAlign: 'center',
				iconCls: 'login',
				listeners: {
					destroy: {
						fn: function() {
							Ext.getCmp('mainApplication').setVisible(true);
							Ext.getCmp('pbitoolbar').setVisible(true);
						}
					},
					show: {
						fn: function() {
							Ext.getCmp('mainApplication').setVisible(false);							
							Ext.getCmp('pbitoolbar').setVisible(false);
						}
					}
				},
				buttons: [
				{
					iconCls: 'confirm',
					text: 'Login',
					formBind: true,
				}],
				items: [
				{
					xtype: 'userlist',
					allowBlank: false,
					id: 'userlist'
				}]
			}).show();
		};

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
			id: 'mainApplication',
			xtype: 'panel'
		},
		{
			region: 'south',
			xtype: 'pbitoolbar'
		}]
	};
	this.callParent(arguments);
	showLogin();
	Ext.getCmp('userlist').isValid();
	}
});
