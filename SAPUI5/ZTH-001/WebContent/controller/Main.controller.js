sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller, MessageToast) {
	"use strict";
	
	return Controller.extend("zem.sapui5.training.controller.Main", {
		
		_oDialog : null,
		
		onPressButton : function(oEvent) {
			var oBundle, sName, sText;
			
			oBundle = this.getView().getModel("i18n").getResourceBundle();
			sName = this.getView().getModel().getProperty("/employee/name");
			
			sText = oBundle.getText("messageToastText", [ sName ]);
			MessageToast.show(sText);
		},
		
		onPressOpenDialog : function(oEvent) {
			if (!this._oDialog) {
				this._oDialog = sap.ui.xmlfragment("zem.sapui5.training.view.Dialog", this);
				this.getView().addDependent(this._oDialog);
			}
			this._oDialog.open();
		},
		
		onPressCloseDialog : function(oEvent) {
			this._oDialog.close();
		}

	});
});