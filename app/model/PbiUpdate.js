Ext.define('PBI.model.PbiUpdate', {
    extend: 'Ext.data.Model',
    fields: [
	    {name: 'pbi_id', type: 'int'},
	    {name: 'user_name', type: 'string'},
	    {name: 'pbi_update_date', type: 'date', dateFormat: 'd/m/Y H:i'}
    ]
});