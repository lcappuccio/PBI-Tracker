function showToolTip(value, metadata) {
	metadata.tdAttr = 'data-qtip="' + value + '"';
	return value.substring(0,50) + '...';
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
	tableImg = '<center><img src="images/icons/na.png"></center>';
	if (value == null || value == 0) {
		tableImg =  '<center><img src="images/icons/reset.png"></center>';
	}
	if (value >= 1) {
		tableImg =  '<center><img src="images/icons/confirm.png"></center>';
	}
	return tableImg;
};

Ext.define('PBI.view.PbiList' ,{
	extend: 'Ext.grid.Panel',
	alias : 'widget.pbiList',
	id: 'pbiList',
	multiSelect: false,
	title : 'PBI List (double click to edit)',
	store: 'Pbis',
	
	initComponent: function() {
		this.columns = [
			{header: 'ID',  dataIndex: 'pbi_id', width: 100, resizable: false},
			{header: 'Description', dataIndex: 'pbi_descr', flex: 1},
			//{header: 'Documentation', dataIndex: 'pbi_done_doc', width: 100, renderer: showTimestamp},
			{header: 'Documentation', dataIndex: 'pbi_done_documentation', width: 120, renderer: showIcon},
			{header: 'Merged', dataIndex: 'pbi_done_merge', width: 100, renderer: showIcon},
			{header: 'PO Validated', dataIndex: 'pbi_done_validation_po', width: 100, renderer: showIcon},
			{header: 'Deployable', dataIndex: 'pbi_deployable', width: 100, renderer: showIcon},
			{header: 'Deployed', dataIndex: 'pbi_deployed', width: 100, renderer: showIcon},
			{header: 'Added', dataIndex: 'pbi_insert_timestamp', width: 150}
		];		
		this.callParent(arguments);
		this.getStore().sort('pbi_id', 'DESC');
	},
	
	reloadAll: function() {
		this.getStore().load();
		this.getStore().sort('pbi_id', 'DESC');
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
		myStore.sort('pbi_id', 'DESC');
	}
});