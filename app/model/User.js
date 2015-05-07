Ext.define('PBI.model.User', {
    extend: 'Ext.data.Model',
    fields: [
    {name: 'user_id', type: 'int'},
    {name: 'user_name', type: 'string'},
    {name: 'user_active', type: 'int'}
    ]
});