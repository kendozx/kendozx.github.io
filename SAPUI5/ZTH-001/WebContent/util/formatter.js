sap.ui.define([
], function() {
	"use strict";
	
	return {
		
		removeLeadingZero : function(sNumber) {
			var sString;
			
			sString = sNumber;
			if (typeof sString === "string") {
				sString = sString.replace(/^0+/, "")
			}
			return sString;
		},

	setState : function(sActive) {
		return sActive?"Success":"Error";
	},
	
	setIcon : function(sActive) {
		return sActive?"sap-icon://status-positive":"sap-icon://status-negative";
	}

	};
});