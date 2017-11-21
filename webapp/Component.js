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
<<<<<<< HEAD
					// call the base component's init function
			var oApplication = new Application(this);
			oApplication.init();
			
					UIComponent.prototype.init.apply(this, arguments);

			
	
		
		
		}
	});
});
=======
<<<<<<< HEAD
			// call the base component's init function
			var oApplication = new Application(this);
			oApplication.init();
			UIComponent.prototype.init.apply(this, arguments);
			// create the views based on the url/hash
			this.getRouter().initialize();
=======
			//call application init function		
			var oApplication = new Application(this);
			oApplication.init();
			
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
			
			// set the device model
			this.setModel(models.createDeviceModel(), "device");
>>>>>>> de250bfa8b58e2a9b7195b60a5423efb846a64c3
		}
	});
});
>>>>>>> 72c8c8c0a7f415fd41d6a12f28ce10c9424cf480
