sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"gss/newWarehouseManage_R1/controller/BaseController",
	"sap/ui/model/json/JSONModel"
], function(Controller, BaseController, JSONModel) {
	"use strict";

	return BaseController.extend("gss.newWarehouseManage_R1.controller.MainView", {

		onInit: function() {
			this.component = this.getComponent();
			this.model = this.component.getModel();
			this.model.metadataLoaded().then(this._menuLoadFunction.bind(this));
		},
		
		_menuLoadFunction: function(){
			//Fetch Menu Configuration Data
			this._oApplication = this.getApplication();
			var oWhenCallReadIsDone = this._oApplication._oGlobalWarehouseManage.menuConfigurationLoad(this, this._oApplication);
			//Load Menu Fragment in view
			oWhenCallReadIsDone.done(function() {
				this._menuBinding("", "");
			}.bind(this));
		},

		_menuBinding: function(oSelectedItem, createBC) {
			this._rfMenu = [];
			if (!this._oDialog) {
				this._oDialog = sap.ui.xmlfragment("gss.newWarehouseManage_R1.view.fragments.rfMenu", this);
			}
			var oSubMenu = this.getView().getModel("mainJsonModel").getData().rfMenu;
			oSubMenu.forEach(function(mItem) {
				if (mItem.Qmenu && !oSelectedItem) {
					//Main menu itself a transaction
					if (mItem.Qmenu && mItem.ProTyp === "2") {
						this.getView().byId("breadCrumbs").setCurrentLocationText(mItem.Text);
						this.getView().byId("inputValue").setPlaceholder("Enter" + " " + mItem.Text);
						this._oDialog.close();
						return;
					} else {
						//Get the main menu
						this._qMenu = mItem.Qmenu;
						this.sUser = mItem.SyUname;
						this.Queue = mItem.Queue;
						this.Lgnum = mItem.Lgnum;
						this.getView().byId("syuser").setText(this.sUser);
						this._oDialog.setTitle("Main Menu");
						//Create Breadcrumb link
						/////	this._createBreadCrumbs(mItem);
					}
				}
				//Bind Main Menu
				else if (mItem.Mmenu === this._qMenu && mItem.ProTyp === "1" && !oSelectedItem) {
					this._rfMenu.push(mItem);
				}
				//Bind Sub Menus
				else if (oSelectedItem) {
					if (oSelectedItem.ProTyp === "1" && mItem.Mmenu === oSelectedItem.MenTrans) {
						this._rfMenu.push(mItem);
					}
				}
			}.bind(this));
			if (oSelectedItem && createBC === "X") {
				this._oDialog.setTitle(" ");
				this._oDialog.setTitle(oSelectedItem.Text);
				this._createBreadCrumbs(oSelectedItem);
			} else if (oSelectedItem && createBC === "") {
				this._oDialog.setTitle(" ");
				this._oDialog.setTitle(oSelectedItem.Text);
			}
			this.bindMenuModel();
		},
		bindMenuModel: function() {
			var rfModel = new JSONModel();
			var rfData = {
				rfMenu: this._rfMenu
			};
			this._rfMenu = [];
			rfModel.setData(rfData);
			var oView = this.getView();
			this._oDialog.setModel(rfModel, "rfMenuModel");
			oView.addDependent(this._oDialog);
			this._oDialog.setEndButton(new sap.m.Button({
				text: "Cancel",
				press: function() {
					this._prevMenu();
				}.bind(this)
			}));
			this._oDialog.open();
			//*********************************Code by Sabari To Hide the Value on Main Menu Popup Open******************************//
			this.getView().byId("rfScreen").setText("WareHouse Management"); //To Set the Title of the Page//
			this.getView().byId("toolbarheader").setVisible(false); //To hide the Header Bar//
			this.getView().byId("inputValue").setVisible(false); //To Hide the Input Field //
			this.getView().byId("footerbar").setVisible(false); //To Hide the Footer Bar //
			this.getView().byId("message-popup").setVisible(false); //To Hide the Popup message //
			//	this._fragmentFalse();
		}

	});
});