Ext.define('PBI.view.EditPbi', {
	extend: 'Ext.window.Window',
	alias: 'widget.editPbi',
	id: 'editPbi',
	title: 'Edit PBI',
	autoScroll:true,
	resizable: false,
	bodyPadding: '5px 5px 0',
	dockedItems: {
		xtype: 'toolbar',
		dock: 'bottom',
		id: 'editPbiToolbar',
		items: [
		'->', // Fill
		{
			text: 'Confirm',
			iconCls: 'confirm',
			id: 'confirmEditBtn'
		}]
	},
	items: [
	{
		xtype: 'textfield',
		fieldLabel: 'PBI Description',
		id: 'pbiEditDescr',
		maxLength: 99,
		allowBlank: false
	},
	{
		xtype: 'panel',
		layout: 'vbox',
		items: [
		{
			xtype: 'checkboxfield',
	        boxLabel  : 'Documentation',
	        id        : 'doneDocumentation'
    	},
    	{
			xtype: 'checkboxfield',
	        boxLabel  : 'Merged',
	        id        : 'doneMerge'
    	},
    	{
			xtype: 'checkboxfield',
	        boxLabel  : 'PO Validated',
	        id        : 'donePOValidation'
    	},
    	{
			xtype: 'checkboxfield',
	        boxLabel  : 'Deployable',
	        id        : 'doneDeployable'
    	},
    	{
			xtype: 'checkboxfield',
	        boxLabel  : 'Deployed',
	        id        : 'doneDeployed'
    	}]
	}],

	initComponent: function() {
		// Add listeners to dim toolbar and grid
		var mainApp = Ext.getCmp('mainApplication');
		this.addListener('destroy', function() {
			mainApp.unmask();
		});
		this.addListener('activate', function() {
			mainApp.mask();
		});
		
		this.callParent();
	},

	displayWindow: function(pbiId, pbiDescr, pbiDocumentation, pbiDoneMerge, pbiDoneValidationPO, pbiDeployable, pbiDeployed) {
		this.title = "Edit PBI :: " + pbiId;
		Ext.getCmp('pbiEditDescr').setValue(pbiDescr);
		Ext.getCmp('doneDocumentation').setValue(pbiDocumentation);
		Ext.getCmp('doneMerge').setValue(pbiDoneMerge);
		Ext.getCmp('donePOValidation').setValue(pbiDoneValidationPO);
		Ext.getCmp('doneDeployable').setValue(pbiDeployable);
		Ext.getCmp('doneDeployed').setValue(pbiDeployed);
		this.show();
	}
});