sap.ui.define(["sap/ui/base/Object",
	"sap/ui/Device",
	"sap/ui/model/json/JSONModel"

<<<<<<< HEAD
], function(Object, Device, JSONModel) {
	"use strict";

	return Object.extend("gss.newWarehouseManage_R1.model.GlobalWarehouseManage", {
		// This class provides the service of sending approve/reject requests to the backend. Moreover, it deals with concurrency handling and success dialogs.
		// For this purpose, a singleton instance is created and attached to the application controller as public property oApprover.
		// This is used by the instances of SubControllerForApproval and by the S2-controller (for swipe approve).
		// Note that approvals that are caused by SubControllerForApproval make the app busy while approvals done by swiping do not.
		// This cla"ss has the following properties:
		// - _oList"Selector: helper class to interact with the master list (fixed)
		// - iOpenCallsCount: number of running approve/reject calls. This attribute is needed because swipe approvals may cause parallel calls.
		// - _mRunni"ngSwipes: maps the IDs of those POs for which a swipe approve is still in process onto true
		// - _bOneWaitingSuccess: true, if at least one approve/reject operation was successfully performed since the last refresh of the master list 
		constructor: function(oApplication) {
			this._iOpenCallsCount = 0;
			this._mRunningSwipes = {};
			this._bOneWaitingSuccess = false;
		},

		menuConfigurationLoad: function(oView, oApplication, afilters) {
			//Call oDATA Read with entity set name
			var oRfModel = new JSONModel(),
				promise = jQuery.Deferred(),
				oOdataService = oApplication.oODATAService,
				oEntitySetModel = oView.getModel("entitySetProperties"),
				bEntityName = oEntitySetModel.getProperty("/MenuConfiguration"),
				oWhenCallReadIsDone = oOdataService.oCallReadDeferred(bEntityName, oView, afilters);

			var oGlobalModel = oView.getModel("globalProperties");
			oGlobalModel.setProperty("/isOdataLoading", true);
			//Handle response from oData Call	
			oWhenCallReadIsDone.done(function(oResult, oFailed) {
				var oRfData;
				oRfData = oResult.results;
				oRfData = {
					rfMenu: oRfData
				};
				oRfModel.setData(oRfData);
				//Create New Model for Menu Configuration Item
				sap.ui.getCore().setModel(oRfModel, "mainJsonModel");

				oGlobalModel.setProperty("/isOdataLoading", false);
				promise.resolve();
				
			}.bind(this));

			return promise;
		}

	});
});
=======
<<<<<<< HEAD
], function(Object, Device, JSONModel) {
	"use strict";

	return Object.extend("gss.newWarehouseManage_R1.model.GlobalWarehouseManage", {
		// This class provides the service of sending approve/reject requests to the backend. Moreover, it deals with concurrency handling and success dialogs.
		// For this purpose, a singleton instance is created and attached to the application controller as public property oApprover.
		// This is used by the instances of SubControllerForApproval and by the S2-controller (for swipe approve).
		// Note that approvals that are caused by SubControllerForApproval make the app busy while approvals done by swiping do not.
		// This cla"ss has the following properties:
		// - _oList"Selector: helper class to interact with the master list (fixed)
		// - iOpenCallsCount: number of running approve/reject calls. This attribute is needed because swipe approvals may cause parallel calls.
		// - _mRunni"ngSwipes: maps the IDs of those POs for which a swipe approve is still in process onto true
		// - _bOneWaitingSuccess: true, if at least one approve/reject operation was successfully performed since the last refresh of the master list 
		constructor: function(oApplication) {
			this._iOpenCallsCount = 0;
			this._mRunningSwipes = {};
			this._bOneWaitingSuccess = false;
		},

		menuConfigurationLoad: function(oView, oApplication, afilters) {
			//Call oDATA Read with entity set name
			var oRfModel = new JSONModel(),
				promise = jQuery.Deferred(),
				oOdataService = oApplication.oODATAService,
				oEntitySetModel = oView.getModel("entitySetProperties"),
				bEntityName = oEntitySetModel.getProperty("/MenuConfiguration"),
				oWhenCallReadIsDone = oOdataService.oCallReadDeferred(bEntityName, oView, afilters);

			var oGlobalModel = oView.getModel("globalProperties");
			oGlobalModel.setProperty("/isOdataLoading", true);
			//Handle response from oData Call	
			oWhenCallReadIsDone.done(function(oResult, oFailed) {
				var oRfData;
				oRfData = oResult.results;
				oRfData = {
					rfMenu: oRfData
				};
				oRfModel.setData(oRfData);
				//Create New Model for Menu Configuration Item
				sap.ui.getCore().setModel(oRfModel, "mainJsonModel");

				oGlobalModel.setProperty("/isOdataLoading", false);
				promise.resolve();
				
			}.bind(this));

			return promise;
		},
		
		putAwayLoad: function(oView, oApplication, afilters) {
			//Call oDATA Read with entity set name
			var oRfModel = new JSONModel(),
				promise = jQuery.Deferred(),
				oOdataService = oApplication.oODATAService,
				oEntitySetModel = oView.getModel("entitySetProperties"),
				bEntityName = oEntitySetModel.getProperty("/Putaway"),
				oWhenCallReadIsDone = oOdataService.oCallReadDeferred(bEntityName, oView, afilters);

			var oGlobalModel = oView.getModel("globalProperties");
			oGlobalModel.setProperty("/isOdataLoading", true);
			//Handle response from oData Call	
			oWhenCallReadIsDone.done(function(oResult, oFailed) {
				var oRfData;
				oRfData = oResult.results;
				oRfData = {
					aItems: oRfData
				};
				oRfModel.setData(oRfData);
				//Create New Model for Menu Configuration Item
				oView.setModel(oRfModel, "itemList");

				oGlobalModel.setProperty("/isOdataLoading", false);
				promise.resolve();
				
			}.bind(this));

			return promise;
		}

=======

], function(Object, Device, JSONModel) {
	"use strict";

	return Object.extend("gss.newWarehouseManage_R1.model.GlobalWarehouseManage", {
		// This class provides the service of sending approve/reject requests to the backend. Moreover, it deals with concurrency handling and success dialogs.
		// For this purpose, a singleton instance is created and attached to the application controller as public property oApprover.
		// This is used by the instances of SubControllerForApproval and by the S2-controller (for swipe approve).
		// Note that approvals that are caused by SubControllerForApproval make the app busy while approvals done by swiping do not.
		// This cla"ss has the following properties:
		// - _oList"Selector: helper class to interact with the master list (fixed)
		// - iOpenCallsCount: number of running approve/reject calls. This attribute is needed because swipe approvals may cause parallel calls.
		// - _mRunni"ngSwipes: maps the IDs of those POs for which a swipe approve is still in process onto true
		// - _bOneWaitingSuccess: true, if at least one approve/reject operation was successfully performed since the last refresh of the master list 
		constructor: function(oApplication) {
			this._iOpenCallsCount = 0;
			this._mRunningSwipes = {};
			this._bOneWaitingSuccess = false;
		},

		menuConfigurationLoad: function(oView,oApplication) {
			//Call oDATA Read with entity set name
			var oRfModel = new JSONModel(),
				promise = jQuery.Deferred(),
				oOdataService = oApplication.oODATAService,
				oWhenCallReadIsDone = oOdataService.oCallReadDeferred("/MenuConfiguration", oView);
			var oGlobalModel = oView.getModel("globalProperties");	
			oGlobalModel.setProperty("/isOdataLoading", true);	
			//Handle response from oData Call	
			oWhenCallReadIsDone.done(function(oResult) {
				var oRfData;
				oRfData = oResult.results;
				oRfData = {
					rfMenu: oRfData
				};
				oRfModel.setData(oRfData);
				//Create New Model for Menu Configuration Item
				oView.setModel(oRfModel, "mainJsonModel");
				
				oGlobalModel.setProperty("/isOdataLoading", false);
				promise.resolve();
			
			}.bind(this));
			
			return promise;
		}
	
>>>>>>> de250bfa8b58e2a9b7195b60a5423efb846a64c3
	});
});
>>>>>>> 72c8c8c0a7f415fd41d6a12f28ce10c9424cf480
