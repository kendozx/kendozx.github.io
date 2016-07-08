sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel"
], function(UIComponent, JSONModel, ResourceModel) {
	"use strict";
   
	return UIComponent.extend("zem.sapui5.training.Component", {
		metadata : {
			manifest: "json"
		},
		
		init : function () {
			var oData, oModel, oi18n;
	   
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);
			
			oData = {
				employee : {
					name : "Kin"
				}
			};

			oModel = new JSONModel(oData);
			this.setModel(oModel);
	
			/* Resource bundle model */
/*			oi18n = new ResourceModel({
				bundleName : "zem.sapui5.training.i18n.i18n"
			});
			this.setModel(oi18n, "i18n");	*/
			/* Create the views based on the url/hash */
			this.getRouter().initialize();
		}
	});
});