Ext.define('PBI.view.PbiToolbar' ,{
	extend: 'Ext.toolbar.Toolbar',
	alias: 'widget.pbiToolbar',
	id: 'pbiToolbar',

	initComponent: function() {
		
		var months = Ext.create('Ext.data.Store', {
	    fields: ['monthNum','monthDesc'],
	    data : [
	    		{"monthNum":"0","monthDesc":"ALL"},
	    		{"monthNum":"1","monthDesc":"1 - January"},
	    		{"monthNum":"2","monthDesc":"2 - February"},
	    		{"monthNum":"3","monthDesc":"3 - March"},
	    		{"monthNum":"4","monthDesc":"4 - April"},
	    		{"monthNum":"5","monthDesc":"5 - May"},
	    		{"monthNum":"6","monthDesc":"6 - June"},
	    		{"monthNum":"7","monthDesc":"7 - July"},
	    		{"monthNum":"8","monthDesc":"8 - August"},
	    		{"monthNum":"9","monthDesc":"9 - September"},
	    		{"monthNum":"10","monthDesc":"10 - October"},
	    		{"monthNum":"11","monthDesc":"11 - November"},
	    		{"monthNum":"12","monthDesc":"12 - December"},
	    ]
		});
		
		var monthsBox =	Ext.create('Ext.form.ComboBox', {
		    fieldLabel: 'Month',
		    store: months,
		    editable: false,
		    width: 170,
		    labelWidth: 50,
		    id: 'monthCombo',
		    queryMode: 'local',
		    displayField: 'monthDesc',
		    valueField: 'monthNum',
		    value: '0'
		});
		
		var years = Ext.create('Ext.data.Store', {
	    fields: ['year'],
	    data : [
	    		{"year":"2015"},
	    		{"year":"2016"}
	    ]
		});
		
		var yearsBox =	Ext.create('Ext.form.ComboBox', {
		    fieldLabel: 'Year',
		    store: years,
		    editable: false,
		    width: 170,
		    labelWidth: 50,
		    id: 'yearCombo',
		    queryMode: 'local',
		    displayField: 'year',
		    valueField: 'year',
		    value: '2015'
		});
		
		this.items = [
		{
			xtype: 'button', // default for Toolbars
			iconCls: 'create',
			tooltip: '<b>Quick Tip</b><br/>Create new PBI',
			text: 'Create',
			id: 'createBtn'
		},
		{ xtype: 'tbseparator' },
		{
			xtype: 'button', // default for Toolbars
			iconCls: 'edit',
			tooltip: '<b>Quick Tip</b><br/>Modify PBI',
			text: 'Edit',
			id: 'editBtn'
		},
		{ xtype: 'tbseparator' },
		{
			xtype: 'button', // default for Toolbars
			iconCls: 'edit_history',
			tooltip: '<b>Quick Tip</b><br/>View PBI history',
			text: 'History',
			id: 'histBtn'
		},
		{ xtype: 'tbseparator' },
		// Month Filter
		monthsBox,
		// Year Filter
		yearsBox,
		'->', // Fill
		{
			xtype: 'button', // default for Toolbars
			iconCls: 'refresh',
			tooltip: '<b>Quick Tip</b><br/>Refresh list',
			text: 'Refresh',
			id: 'refreshBtn'
		}
		];
		this.callParent();
	}
});
