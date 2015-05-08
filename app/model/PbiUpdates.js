Ext.define('PBI.model.PbiUpdates', {
    extend: 'Ext.data.Model',
    fields: [
	    {name: 'pbi_id', type: 'int'},
	    {name: 'user_name', type: 'string'},
	    {name: 'pbi_update_date', type: 'date'}
    ]
});