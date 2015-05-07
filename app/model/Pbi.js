Ext.define('PBI.model.Pbi', {
    extend: 'Ext.data.Model',
    fields: [
	    {name: 'pbi_id', type: 'int'},
	    {name: 'pbi_descr', type: 'string'},
	    {name: 'pbi_done_documentation', type: 'int'},
	    {name: 'pbi_done_merge', type: 'int'},
	    {name: 'pbi_done_validation_po', type: 'int'},
	    {name: 'pbi_deployable', type: 'int'},
	    {name: 'pbi_deployed', type: 'int'}
    ]
});