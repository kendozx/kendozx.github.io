sap.ui.define([
    "sap/m/Button",
    "sap/m/Dialog",
    "sap/m/Text",
	"sap/ui/core/mvc/Controller",
	"zem/sapui5/training/util/formatter"
], function(Button, Dialog, Text, Controller, formatter) {
	"use strict";
	
	return Controller.extend("zem.sapui5.training.controller.EmpList", {
		formatter : formatter,
		
		onPressToEmployee : function(oEvent) {
						
			var oRouter, sRecNo, aTmp;
			
			sRecNo = oEvent.getSource().getBindingContextPath("employee");
			aTmp = sRecNo.split("/");
			sRecNo = aTmp[aTmp.length - 1];
			oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			
			
			var dialog = new Dialog({
				title: 'Confirm',
				type: 'Message',
				content: new Text({ text: "Show information of " }),
				
				beginButton: new Button({
					text: 'Yes',
					press: function () {
						oRouter.navTo("employee", {
							recordNo : sRecNo
						});
						dialog.close();
					}
				}),
				endButton: new Button({
					text: 'No',
					press: function () {
						dialog.close();
					}
				}),
				afterClose: function() {
					dialog.destroy();
				}
			});

			dialog.open();
			
		}
	});
});