Ext.define('PBI.view.UserList' ,{
	extend: 'Ext.form.ComboBox',
	alias : 'widget.userlist',
	id: 'userlist',
	editable: false,
	fieldLabel: 'User',
	queryMode: 'local',
	displayField: 'USER_NAME',
	valueField: 'USER_ID',
	store: 'Users',

	initComponent: function() {
		this.callParent(arguments);
	}
});