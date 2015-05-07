Ext.define('PBI.store.Pbis', {
	extend: 'Ext.data.Store',
	model: 'PBI.model.Pbi',
	autoLoad: true,

	proxy: {
		type: 'ajax',
		url: 'data/pbilist.php',
		reader: {
			type: 'json',
			root: 'records',
			successProperty: 'success'
		}
	}
});