Ext.define('PBI.view.Viewport',{
	extend: 'Ext.container.Viewport',
	requires: [
		'PBI.view.PbiToolbar',
		'PBI.view.PbiList',
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
							Ext.getCmp('logoutToolbar').setVisible(true);
						}
					},
					show: {
						fn: function() {
							Ext.getCmp('mainApplication').setVisible(false);				
							Ext.getCmp('logoutToolbar').setVisible(false);
						}
					}
				},
				buttons: [
				{
					iconCls: 'confirm',
					text: 'Login',
					formBind: true,
					handler: function() {
						if (Ext.getCmp('userList').isValid()) {
							Ext.getCmp('loginWindow').destroy();
						}
					}
				}],
				items: [
				{
					xtype: 'userList',
					allowBlank: false,
					id: 'userList'
				}]
			}).show();
		};

		// Center panel
		var centerPanel = Ext.create('Ext.panel.Panel', {
			header: false,
			items: [
			{
				xtype: 'pbiToolbar'
			},
			{
				xtype: 'pbiList'
			}]
		});

		this.items = {
		layout: 'fit',
		title: 'PBI Tracker Tool',
		border: false,
		dockedItems: [
			{
				xtype: 'toolbar',
				id: 'logoutToolbar',
				dock: 'bottom',
				border: false,
				items: [
				'->', // Fill
				{
					text: 'Logout',
					iconCls: 'login',
					id: 'logoutBtn',
					handler: function() {
						showLogin();
						Ext.getCmp('userList').isValid();
					}
				}]
			}],
		items: [
		{
			id: 'mainApplication',
			items: [
				centerPanel
			]
		}]
	};
	this.callParent(arguments);
	showLogin();
	Ext.getCmp('userList').isValid();
	}
});
