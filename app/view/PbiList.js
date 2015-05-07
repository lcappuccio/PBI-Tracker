function showToolTip(value, metadata) {
	metadata.tdAttr = 'data-qtip="' + value + '"';
	return value.substring(0,23) + '...';
};

function showDate(value, metadata) {
	return(Ext.Date.format(value, "d/m/Y"));
};

function showTimestamp(value, metadata) {
	if (value != null) {
		return(Ext.Date.format(value, "d/m/Y H:i"));
	}
};

function showIcon(value, metadata) {
	tableImg = '<center><img src="images/request_states/na.png"></centerZ';
	if (value == 'APP') {
		tableImg =  '<center><img src="images/request_states/app.png"></center>';
	}
	if (value == 'REJ') {
		tableImg =  '<center><img src="images/request_states/rej.png"></center>';
	}
	return tableImg;
};

Ext.define('PBI.view.PbiList' ,{
	extend: 'Ext.grid.Panel',
	alias : 'widget.pbiList',
	id: 'pbiList',
	multiSelect: false,
	title : 'PBI List',
	store: 'Pbis',
	
	initComponent: function() {
		this.columns = [
			{header: 'ID',  dataIndex: 'pbi_id', width: 100, resizable: false},
			{header: 'Description', dataIndex: 'pbi_descr', flex: 1, renderer: showToolTip},
			//{header: 'Documentation', dataIndex: 'pbi_done_doc', width: 100, renderer: showTimestamp},
			{header: 'Documentation', dataIndex: 'pbi_done_documentation', width: 120},
			{header: 'Merged', dataIndex: 'pbi_done_merge', width: 100},
			{header: 'PO Validated', dataIndex: 'pbi_done_validation_po', width: 100},
			{header: 'Deployable', dataIndex: 'pbi_deployable', width: 100},
			{header: 'Deployed', dataIndex: 'pbi_deployed', width: 100}
		];		
		this.callParent(arguments);
		this.getStore().sort('ID', 'Description');
	},
	
	reloadAll: function() {
		this.getStore().load();
		this.getStore().sort('ID', 'Description');
	},
	
	reloadByFilter: function(comp,month,year,salestype) {
		myStore = this.getStore();
		myStore.load({
			params: {
				p_company: comp,
				p_month: month,
				p_year: year,
				p_salestype: salestype
			}
		});
		myStore.sort('ID', 'Description');
	}
});