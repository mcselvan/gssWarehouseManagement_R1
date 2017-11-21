sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function() {
			var oModel = new JSONModel(Device);
<<<<<<< HEAD
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		}

	};
});
=======
<<<<<<< HEAD
			oModel.setDefaultBindingMode("OneWay");
=======
			oModel.setDefaultBindingMode("twoWay");
>>>>>>> de250bfa8b58e2a9b7195b60a5423efb846a64c3
			return oModel;
		}

	};
});
>>>>>>> 72c8c8c0a7f415fd41d6a12f28ce10c9424cf480
