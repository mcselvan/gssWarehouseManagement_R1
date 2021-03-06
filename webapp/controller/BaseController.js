sap.ui.define([
		"sap/ui/core/mvc/Controller"
	], function (Controller) {
		"use strict";

		return Controller.extend("gss.newWarehouseManage_R1.controller.BaseController", {
			/**
			 * Convenience method for accessing the router.
			 * @public
			 * @returns {sap.ui.core.routing.Router} the router for this component
			 */
			// onInit: function(){
			// 	this.setModel(models.toList(), "rfModel");		
			// },						 
			getRouter : function () {
				return sap.ui.core.UIComponent.getRouterFor(this);
			},

			/**
			 * Convenience method for getting the view model by name.
			 * @public
			 * @param {string} [sName] the model name
			 * @returns {sap.ui.model.Model} the model instance
			 */
			getModel : function (sName) {
				return this.getView().getModel(sName);
			},

			/**
			 * Convenience method for setting the view model.
			 * @public
			 * @param {sap.ui.model.Model} oModel the model instance
			 * @param {string} sName the model name
			 * @returns {sap.ui.mvc.View} the view instance
			 */
			setModel : function (oModel, sName) {
				return this.getView().setModel(oModel, sName);
			},

			/**
			 * Getter for the resource bundle.
			 * @public
			 * @returns {sap.ui.model.resource.ResourceModel} the resourceModel of the component
			 */
			getResourceBundle : function () {
				return this.getOwnerComponent().getModel("i18n").getResourceBundle();
			},
	
		/**
		 * Convenience method to get the global model containing the global state of the app.
		 * @returns {object} the global Propery model
		 */
		getGlobalModel: function() {
			return this.getOwnerComponent().getModel("globalProperties");
		},
		
		getEntitySetModel: function(){
			return this.getOwnerComponent().getModel("entitySetProperties");
		},
<<<<<<< HEAD
		
		getFragmentControllerModel: function(){
			return this.getOwnerComponent().getModel("fragmentControllerProperties");	
		},
		/**
		 * Convenience method
		 * @returns {object} the application controller
		 */
		getApplication: function() {

		return this.getGlobalModel().getProperty("/application");
		},
		
		getComponent: function() {
			return this.getOwnerComponent();
		},
			/**
			 * Event handler when the share by E-Mail button has been clicked
			 * @public
			 */
			onShareEmailPress : function () {
				var oViewModel = (this.getModel("objectView") || this.getModel("worklistView"));
				sap.m.URLHelper.triggerEmail(
					null,
					oViewModel.getProperty("/shareSendEmailSubject"),
					oViewModel.getProperty("/shareSendEmailMessage")
				);
			}

		});

	}
);
=======
<<<<<<< HEAD
		
		getFragmentControllerModel: function(){
			return this.getOwnerComponent().getModel("fragmentControllerProperties");	
		},
=======

>>>>>>> de250bfa8b58e2a9b7195b60a5423efb846a64c3
		/**
		 * Convenience method
		 * @returns {object} the application controller
		 */
		getApplication: function() {

		return this.getGlobalModel().getProperty("/application");
		},
		
		getComponent: function() {
			return this.getOwnerComponent();
		},
			/**
			 * Event handler when the share by E-Mail button has been clicked
			 * @public
			 */
			onShareEmailPress : function () {
				var oViewModel = (this.getModel("objectView") || this.getModel("worklistView"));
				sap.m.URLHelper.triggerEmail(
					null,
					oViewModel.getProperty("/shareSendEmailSubject"),
					oViewModel.getProperty("/shareSendEmailMessage")
				);
			}

		});

	}
);
>>>>>>> 72c8c8c0a7f415fd41d6a12f28ce10c9424cf480
