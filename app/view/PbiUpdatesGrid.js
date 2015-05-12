function showTimestamp(value, metadata) {
	if (value != null) {
		return(Ext.Date.format(value, "d/m/Y H:i"));
	}
};

Ext.define('PBI.view.PbiUpdatesGrid' ,{
	extend: 'Ext.grid.Panel',
	alias : 'widget.pbiUpdatesGrid',
	id: 'pbiUpdatesGrid',
	multiSelect: true,
	border: false,
	store: 'PbiUpdates',

	initComponent: function() {
		this.columns = [
			{header: 'Username',  dataIndex: 'user_name'},
			{header: 'Date', dataIndex: 'pbi_update_date', width: 150}
		];		
		this.callParent(arguments);
	},
	
	reloadAll: function(pbiId) {
		myStore = this.getStore();
		myStore.load({
			params: {
				pbiId : pbiId
			}
		});	
	},
});