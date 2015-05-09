Ext.define('PBI.store.PbiUpdates', {
	extend: 'Ext.data.Store',
	model: 'PBI.model.PbiUpdate',
	autoLoad: false,

	proxy: {
		type: 'ajax',
		url: 'data/pbi_updates.php',
		reader: {
			type: 'json',
			root: 'records',
			successProperty: 'success'
		}
	}
});