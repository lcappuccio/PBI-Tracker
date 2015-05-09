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
			{header: 'Username',  dataIndex: 'user_name', flex: 1},
			{header: 'Date', dataIndex: 'pbi_update_date', flex: 1, renderer: showTimestamp}
		];		
		this.callParent(arguments);
	},
	
	reloadAll: function(pbiId) {
		myStore = this.getStore();
		console.log(myStore);
		myStore.load({
			params: {
				pbiId : pbiId
			}
		});	
	},
});