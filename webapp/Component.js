sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"gss/newWarehouseManage_R1/controller/Application",
	"gss/newWarehouseManage_R1/model/models"
], function(UIComponent, Device, Application, models) {
	"use strict";

	return UIComponent.extend("gss.newWarehouseManage_R1.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			//call application init function		
			var oApplication = new Application(this);
			oApplication.init();
			
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
			
			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});