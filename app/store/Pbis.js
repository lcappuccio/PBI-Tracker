Ext.define('PBI.store.Pbis', {
	extend: 'Ext.data.Store',
	model: 'PBI.model.Pbi',
	autoLoad: true,

	proxy: {
		type: 'ajax',
		url: 'data/pbi_list.php',
		reader: {
			type: 'json',
			root: 'records',
			successProperty: 'success'
		}
	}
});