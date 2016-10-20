sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("zunit.converter.controller.MainView", {
		
		onKeyValue: function(oevt){
			
//			var oData = this.getView().getModel("screen").getData();
//			oData.byte = [1234,null];
//			
//			this.getView().getModel("screen").refresh();
//			debugger;
			var oSource = oevt.getSource();
//			var dEvtValue = oSource.getValue();
			this.calculateByte(oSource.getValue(), oSource.data("key"));
		},
	
		onInit: function(){
			var a = 1000121;
//			var b = this.getReadableFileSizeString(a);

		},
		
//		getReadableFileSizeString: function(bytes) {
//
//			var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
//		   if (bytes == 0) return '0 Byte';
//		   var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
//		   return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
//		},
		
		calculateByte: function(dByte, sType){
			var sizes = ['byte', 'kbyte', 'mbyte', 'gbyte']; //, 'tbyte'];
			var oByte = {};
			var nSeq = sizes.indexOf(sType);
			var oModel = this.getView().getModel("screen");
			var oData = oModel.getData();
			
			/* Calculate Bytes */
			var myfunc = function(sItem, nIndex){
				if(nIndex === nSeq) return;
				var nPow = nSeq - nIndex;
				var dResult = dByte * Math.pow(1024, nPow);
				oData[sItem] = [dResult,null];
			}
			sizes.forEach(myfunc);
			
			/* Refresh Model */
			oModel.refresh();
		},
		
		decreaseByte: function(dNum){
			
		},
		
		handleUploadPress: function (oEvent) {
		    var url = "";
		    var oFileUploader = this.getView().byId("fileUploader1");
		    oFileUploader.addHeaderParameter(new sap.ui.unified.FileUploaderParameter({
		        name: "slug",
		        value: oFileUploader.getValue()
		    }));

		    oFileUploader.addHeaderParameter(new sap.ui.unified.FileUploaderParameter({
		        name: "x-csrf-token",
		        value: oController.oModel.getSecurityToken()
		    }));

		    oFileUploader.addHeaderParameter(new sap.ui.unified.FileUploaderParameter({
		        name: "sendXHR",
		        value: true
		    }));
		    oFileUploader.setUploadUrl(url);
		}
		
	});
});