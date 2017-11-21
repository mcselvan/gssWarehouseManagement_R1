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
<<<<<<< HEAD

		_menuLoadFunction: function() {
			//Fetch Menu Configuration Data
			this.afilters = [];
			this._oApplication = this.getApplication();
			var oWhenCallReadIsDone = this._oApplication._oGlobalWarehouseManage.menuConfigurationLoad(this, this._oApplication, this.afilters);
			//Load Menu Fragment in view
			oWhenCallReadIsDone.done(function() {
				this._menuBinding("", "");
			}.bind(this));
		},

		_menuBinding: function(oSelectedItem, createBC) {
			this._rfMenu = [];
			if (!this._oDialog) {
				var MenuModel = this.getFragmentControllerModel();
				var Menu = MenuModel.getProperty("/mainMenu");
				this._oDialog = sap.ui.xmlfragment(Menu, this);
			}
			var oSubMenu = sap.ui.getCore().getModel("mainJsonModel").getData().rfMenu;
			//To Get the menuBindings
			this._rfMenu = this._oApplication._omenuBinding.oMenu(this, oSubMenu, oSelectedItem, createBC, this._oApplication);
			this.bindFilteredMenu(this._rfMenu);
		},

		bindFilteredMenu: function(_rfMenu) {
			var rfModel = this._oApplication._omenuBinding.bindMenuModel(_rfMenu);
			this._oDialog.setModel(rfModel, "rfMenuModel");
			var oView = this.getView();
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
		},

		// Description: Handle cancel button in Menu dialog
		// ***********************************				
		_prevMenu: function() {
			var aLink = this.getView().byId("breadCrumbs").getLinks(); //Get the number of links
			var plinkIndex = aLink.length - 2; //length -2 gives the index of the previous breadcrumb index
			if (plinkIndex === -1) {
				this.Exit(); //Call the exit function
				return;
			}
			var pMmenu = aLink[plinkIndex].getTarget(); //Get the target of the previous link using index
			var pText = aLink[plinkIndex].getText(); //Get the text of the previous link using index
			if (pText === "Main menu") { //If the text is Main menu, insert the link
				this.getView().byId("breadCrumbs").insertLink(aLink[plinkIndex], plinkIndex);
			}
			//Remove the link from the breadcrumb, once the user click on the cancel button in the menu 
			var removeLinkId = aLink.length - 1; //Get the last breadcrumb link
			this.getView().byId("breadCrumbs").removeLink(removeLinkId); //Remove the link
			var mData = {
				MenTrans: pMmenu,
				ProTyp: "1",
				Text: pText
			};
			var createBC = "";
			//Filter the dialog menu with selected item and don't create the breadcrumbs 
			this._menuBinding(mData, createBC);
		},
		// Exit: function() {
		// 	// alert("exit triggred");
		// 	var dialog = new sap.m.Dialog({ // To display dialog on button click
		// 		title: 'Alert', // Title for the dialog
		// 		type: 'Message', // Dialog type
		// 		content: new sap.m.Text({
		// 			text: 'Are you sure you want to logoff?' // Text to be displayed in the dialog
		// 		}),
		// 		beginButton: new sap.m.Button({ // To display confirm button inside the dialog
		// 			text: 'Confirm', // Text for the button
		// 			press: function() { // Press function invoke
		// 				// window.open("about:blank", "_self"); // functionality on button click
		// 				$.ajax({
		// 					type: "GET",
		// 					url: "/sap/public/bc/icf/logoff", //Clear SSO cookies: SAP Provided service to do that  
		// 				}).done(function(data) { //Now clear the authentication header stored in the browser  
		// 					if (!document.execCommand("ClearAuthenticationCache")) {
		// 						//"ClearAuthenticationCache" will work only for IE. Below code for other browsers  
		// 						$.ajax({
		// 							type: "GET",
		// 							url: "/sap/public/bc/icf/logoff", //any URL to a Gateway service  
		// 							username: '', //dummy credentials: when request fails, will clear the authentication header  
		// 							password: '',
		// 							statusCode: {
		// 								401: function() {
		// 									//This empty handler function will prevent authentication pop-up in chrome/firefox  
		// 								}
		// 							},
		// 							error: function() {
		// 								//alert('reached error of wrong username password')  
		// 							}
		// 						});
		// 					}
		// 				});
		// 				var myVar = setInterval(function(oEvent) {
		// 					window.open("/sap/bc/ui5_ui5/ui2/ushell/shells/abap/FioriLaunchpad.html", "_self");
		// 				}, 100);
		// 			}
		// 		}),
		// 		endButton: new sap.m.Button({ // To display cancel button inside the dialog
		// 			text: 'Cancel', // Text for the button
		// 			press: function() { // Press function invoke
		// 				dialog.close(); // To close the dialog 
		// 			}
		// 		}),
		// 		afterClose: function() {
		// 			dialog.destroy(); //To destroy dialog
		// 		}
		// 	});
		// 	dialog.open(); // To open dialog on function invoke
		// },
		onHandleMenu: function(oEvent) {
			var oSelectedData = oEvent.getSource().getBindingContext("rfMenuModel").getObject();
			if (oSelectedData.ProTyp === "1") {
				this._oDialog.close();
				var createBC = "X";
				this._menuBinding(oSelectedData, createBC); //Call function menu binding
			}
		}
	});
});
=======
<<<<<<< HEAD

		_menuLoadFunction: function() {
			//Fetch Menu Configuration Data
			this.afilters = [];
			this._oApplication = this.getApplication();
			var oWhenCallReadIsDone = this._oApplication._oGlobalWarehouseManage.menuConfigurationLoad(this, this._oApplication, this.afilters);
			//Load Menu Fragment in view
			oWhenCallReadIsDone.done(function() {
				this._menuBinding("", "");
			}.bind(this));
		},

		_menuBinding: function(oSelectedItem, createBC) {
			this._rfMenu = [];
			if (!this._oDialog) {
				var MenuModel = this.getFragmentControllerModel();
				var Menu = MenuModel.getProperty("/mainMenu");
				this._oDialog = sap.ui.xmlfragment(Menu, this);
			}
			var oSubMenu = sap.ui.getCore().getModel("mainJsonModel").getData().rfMenu;
			//To Get the menuBindings
			this._rfMenu = this._oApplication._omenuBinding.oMenu(this, oSubMenu, oSelectedItem, createBC, this._oApplication);
			this.bindFilteredMenu(this._rfMenu);
		},

		bindFilteredMenu: function(_rfMenu) {
			var rfModel = this._oApplication._omenuBinding.bindMenuModel(_rfMenu);
			this._oDialog.setModel(rfModel, "rfMenuModel");
			var oView = this.getView();
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
		},

		// Description: Handle cancel button in Menu dialog
		// ***********************************				
		_prevMenu: function() {
			var aLink = this.getView().byId("breadCrumbs").getLinks(); //Get the number of links
			var plinkIndex = aLink.length - 2; //length -2 gives the index of the previous breadcrumb index
			if (plinkIndex === -1) {
				this.Exit(); //Call the exit function
				return;
			}
			var pMmenu = aLink[plinkIndex].getTarget(); //Get the target of the previous link using index
			var pText = aLink[plinkIndex].getText(); //Get the text of the previous link using index
			if (pText === "Main menu") { //If the text is Main menu, insert the link
				this.getView().byId("breadCrumbs").insertLink(aLink[plinkIndex], plinkIndex);
			}
			//Remove the link from the breadcrumb, once the user click on the cancel button in the menu 
			var removeLinkId = aLink.length - 1; //Get the last breadcrumb link
			this.getView().byId("breadCrumbs").removeLink(removeLinkId); //Remove the link
			var mData = {
				MenTrans: pMmenu,
				ProTyp: "1",
				Text: pText
			};
			var createBC = "";
			//Filter the dialog menu with selected item and don't create the breadcrumbs 
			this._menuBinding(mData, createBC);
		},
		onHandleMenu: function(oEvent) {
			var oSelectedData = oEvent.getSource().getBindingContext("rfMenuModel").getObject();
			if (oSelectedData.ProTyp === "1") {
				this._oDialog.close();
				var createBC = "X";
				this._menuBinding(oSelectedData, createBC); //Call function menu binding
			}
			// ************** Srini code to display Putaway by TO begins **********************
			else if (oSelectedData.ProTyp === "2" && oSelectedData.MenTrans === "LM03") {
				this._oDialog.close();
				// this._fragmentFalse();
				// this.getView().byId("inputValue").setEnabled(true);
				// this.getView().byId("scanButton").setEnabled(true);
				// this.getView().byId("putAwayVL").setVisible(true);
				// this.getView().byId("newBin").setVisible(true);
				// this.getView().byId("inputValue").setPlaceholder("Enter Transfer Order");
				// this.getView().byId("inputValue").setMaxLength(10);
				// // this.getView().byId("breadCrumbs").setCurrentLocationText(oSelectedData.Text);
				// this.getView().byId("rfScreen").setText(oSelectedData.Text);
				// this.getView().byId("footerbar").setVisible(true);
				// this.getView().byId("accept").setVisible(true);
				// this.getView().byId("difference").setVisible(true);
				// this.getView().byId("message-popup").setVisible(true);
				// this.getView().byId("toolbarheader").setVisible(true);
				// this.getView().byId("inputValue").setVisible(true);
				// this.getView().byId("scanButton").setVisible(true);
				var oGlobalModel = this.getView().getModel("globalProperties");
				oGlobalModel.setProperty("/currentScreen", "LM03");
				this._oDialog.close();
				var loadPutaway = this.getRouter();
				loadPutaway.navTo("putaway");
			}
			// ************** Srini code to display Putaway by TO begins **********************
		}
=======
		
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

>>>>>>> de250bfa8b58e2a9b7195b60a5423efb846a64c3
	});
});
>>>>>>> 72c8c8c0a7f415fd41d6a12f28ce10c9424cf480
