sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("day8.day8.controller.View1", {
		onInit: function () {
			this.getNorthwindData();

		},

		getNorthwindData: function () {
			var ofilter = [ new sap.ui.model.Filter("ObjectId", sap.ui.model.FilterOperator.EQ,"000200002652") ];
			
			var t = this;
			var wind = this.getOwnerComponent().getModel("Model1");
			wind.read("/Attachment", {
				filters: ofilter,
				success: function (odata) {
					var cm = t.getOwnerComponent().getModel("CustomerModel");
					cm.setData(odata);
					t.getView().setModel(cm);
				},
				error: function (odata) {

				}

			});

		}
		// onSubmit : function(){
		// 	var popup = sap.ui.xmlfragment("day8/day8/fragment/fragment1",this);
		// 	this .getView().addDependent(popup);
		// 	popup.open();
		// }
			
		
	});
});