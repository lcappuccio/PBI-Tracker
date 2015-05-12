Ext.define('PBI.store.Users', {
	extend: 'Ext.data.Store',
	model: 'PBI.model.User',
	autoLoad: true,

	proxy: {
		type: 'ajax',
		url: 'data/user_list.php',
		reader: {
			type: 'json',
			root: 'records',
			successProperty: 'success'
		}
	}
});