/*
	Model contains reasoncodes descriptions, used in View Discounts combo box
*/

Ext.define('PBI.model.User', {
    extend: 'Ext.data.Model',
    fields: [
    {name: 'USER_ID', type: 'int'},
    {name: 'USER_NAME', type: 'string'},
    {name: 'USER_ACTIVE', type: 'int'}
    ]
});