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

		function showLogin() {
			Ext.create('Ext.window.Window', {
				title: 'Login',
				id: 'loginWindow',
				height: 150,
				width: 280,
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
					width: 80,
					text: 'Login',
					formBind: true,
				}],
				items: [
				{
					xtype: 'textfield',
					labelWidth: 80,
					allowBlank: false,
					fieldLabel: 'Username',
					id: 'loginUsername'
				},
				{
					xtype: 'textfield',
					labelWidth: 80,
					allowBlank: false,
					inputType:'password',
					fieldLabel: 'Password',
					id: 'loginPasswd'
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
	Ext.getCmp('loginUsername').isValid();
	Ext.getCmp('loginPasswd').isValid();
	}
});
