Ext.define('PBI.view.PBIToolbar' ,{
	extend: 'Ext.toolbar.Toolbar',
	alias: 'widget.pbitoolbar',
	id: 'pbitoolbar',

	initComponent: function() {
		
		var months = Ext.create('Ext.data.Store', {
	    fields: ['monthnum','monthdesc'],
	    data : [
	    		{"monthnum":"0","monthdesc":"ALL"},
	    		{"monthnum":"1","monthdesc":"1 - January"},
	    		{"monthnum":"2","monthdesc":"2 - February"},
	    		{"monthnum":"3","monthdesc":"3 - March"},
	    		{"monthnum":"4","monthdesc":"4 - April"},
	    		{"monthnum":"5","monthdesc":"5 - May"},
	    		{"monthnum":"6","monthdesc":"6 - June"},
	    		{"monthnum":"7","monthdesc":"7 - July"},
	    		{"monthnum":"8","monthdesc":"8 - August"},
	    		{"monthnum":"9","monthdesc":"9 - September"},
	    		{"monthnum":"10","monthdesc":"10 - October"},
	    		{"monthnum":"11","monthdesc":"11 - November"},
	    		{"monthnum":"12","monthdesc":"12 - December"},
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
		    displayField: 'monthdesc',
		    valueField: 'monthnum',
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