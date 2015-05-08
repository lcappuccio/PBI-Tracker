Ext.define('PBI.controller.Controller', {
	extend: 'Ext.app.Controller',
	stores: [
		'Pbis'
	],
	views: [
		'PbiToolbar',
		'CreatePbi',
		'EditPbi'
	],

	init: function() {
		this.control({
			'pbiToolbar > button[id="createBtn"]': {
				click: this.createPbi
			},
			'pbiToolbar > button[id="editBtn"]': {
				click: this.debugConsole
			},
			'pbiToolbar > button[id="histBtn"]': {
				click: this.debugConsole
			},
			'pbiToolbar > button[id="refreshBtn"]': {
				click: this.refreshList
			},
			'createPbi > toolbar[id="createPbiToolbar"] > button[id="confirmBtn"]': {
				click: this.insertPbi
			},
			'createPbi > toolbar[id="createPbiToolbar"] > button[id="resetBtn"]': {
				click: this.resetPbi
			},
			'pbiList': {
				rowdblclick: this.editPbi
			},
			'editPbi > toolbar[id="editPbiToolbar"] > button[id="confirmEditBtn"]': {
				click: this.debugConsole
			},
			'editPbi > toolbar[id="editPbiToolbar"] > button[id="resetEditBtn"]': {
				click: this.debugConsole
			}
		});
	},

	debugConsole: function() {
		console.log('control working');
	},

	createPbi: function () {
		createWindow = Ext.widget('createPbi');
		createWindow.displayWindow();
	},

	insertPbi: function() {
		if (Ext.getCmp('pbiId').isValid() && Ext.getCmp('pbiDescr').isValid()) {
			var pbiId = Ext.getCmp('pbiId').getValue();
			var pbiDescr = Ext.getCmp('pbiDescr').getValue();
			Ext.Ajax.request({
			    url: 'data/pbi_insert.php',
			    method: 'POST',
			    waitTitle: 'Connecting',
			    waitMsg: 'Sending data...',
			    params: {
			        pbiId: pbiId,
			        pbiDescr: pbiDescr
			    },
		    	success: function(error){
                    var postResponse = Ext.decode(error.responseText);
                    if (postResponse.success == "true") { 
                        createWindow.close();
                    } else {
                        Ext.Msg.alert('Error', postResponse.error_code);
                        Ext.getCmp('pbiId').reset();
						Ext.getCmp('pbiDescr').reset();
                    }
                }
			});
			Ext.getCmp('pbiList').reloadAll();
		}
	},

	resetPbi: function() {
		Ext.getCmp('pbiId').reset();
		Ext.getCmp('pbiDescr').reset();
	},

	refreshList: function() {
		Ext.getCmp('pbiList').reloadAll();
	},

	editPbi: function() {
		var pbiGrid = Ext.getCmp('pbiList');
		if (pbiGrid.getSelectionModel().hasSelection()) {
		   var row = pbiGrid.getSelectionModel().getSelection()[0];
		   var pbiId = row.get('pbi_id');
		   var pbiDescr = row.get('pbi_descr');
		   var pbiDocumentation = row.get('pbi_done_documentation');
		   var pbiDoneMerge = row.get('pbi_done_merge');
		   var pbiDoneValidationPO = row.get('pbi_done_validation_po');
		   var pbiDeployable = row.get('pbi_deployable');
		   var pbiDeployed = row.get('pbi_deployed');
		   var editPbiWindow = Ext.widget('editPbi');
		   editPbiWindow.displayWindow(pbiId, pbiDescr, pbiDocumentation, pbiDoneMerge, pbiDoneValidationPO, pbiDeployable, pbiDeployed);
		}
	}
});