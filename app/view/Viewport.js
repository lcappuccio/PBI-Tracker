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
							userName = Ext.getCmp('userList').getRawValue();
							Ext.Ajax.request({
							    url: 'data/user_list_update_last_login.php',
							    method: 'POST',
							    waitTitle: 'Connecting',
							    waitMsg: 'Sending data...',
							    params: {
							    	userName: userName
							    },
						    	success: function(error){
				                    var postResponse = Ext.decode(error.responseText);
				                    if (postResponse.success == "true") { 
				                        Ext.getCmp('userLabel').setText(userName);
										Ext.getCmp('loginWindow').destroy();
				                    } else {
				                        Ext.Msg.alert('Error', postResponse.error_code);
				                    }
				                }
							});
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
		dockedItems: [
			{
				xtype: 'toolbar',
				id: 'logoutToolbar',
				dock: 'bottom',
				items: [
				'->', // Fill
				{
					xtype: 'label',
					text: 'Logged as:'
				},
				{
					xtype: 'label',
					id: 'userLabel',
					text: 'user_undefined'
				},
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
