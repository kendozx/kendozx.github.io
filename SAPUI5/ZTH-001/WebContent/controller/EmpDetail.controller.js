sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function(Controller, History) {
	"use strict";
	
	return Controller.extend("zem.sapui5.training.controller.EmpDetail", {
		
		onInit : function() {
			var oRouter;
			
			oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("employee").attachPatternMatched(this._onPatternMatched, this);
		},
		
		onPressBack : function(oEvent) {
			var oHistory, sPreviousHash, oRouter;
			
			oHistory = History.getInstance();
			sPreviousHash = oHistory.getPreviousHash();
			
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("main", true);
			}
		},
		
		_onPatternMatched : function(oEvent, oTest) {
			this.getView().bindElement({
				path : "/results/" + oEvent.getParameter("arguments").recordNo,
				model : "employee"
			});
		}
		
	});
});