sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function (JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function () {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		getNorthwindData: function () {
			var ofilter = [ new sap.ui.model.Filter("ContactName",sap.ui.model.FilterOperator.EQ,"Maria Anders") ];
			
			var t = this;
			var wind = this.getOwnerComponent().getModel("Model1");
			wind.read("/Customers", {
				// filters: ofilter,
				success: function (odata) {
					var cm = t.getOwnerComponent().getModel("CustomerModel");
					cm.setData(odata);
					t.getView().setModel(cm);
				},
				error: function (odata) {

				}

			});

		}
	

	};
});