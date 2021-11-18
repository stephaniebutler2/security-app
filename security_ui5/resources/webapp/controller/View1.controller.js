sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ui5_ns.security_ui5.controller.View1", {
		onInit: function () {
			var oModel = new sap.ui.model.odata.v2.ODataModel({
				serviceUrl: "/xsodata/odata.xsodata/",
				defaultUpdateMethod: "sap.ui.model.odata.UpdateMethod.Put"
					// synchronizationMode : "None"
					// "useBatch" : false
			});
			this.getView().setModel(oModel, "airportModel");

			var oTable = this.getView().byId("sTable");
			oTable.setModel(this.getView().getModel("airportModel"));

		},
		onBeforeRendering: function () {
			var iconBar = this.getView().byId("iconBar");
			var adminFragment = sap.ui.xmlfragment("ui5_ns.security_ui5.view.AdminTab", this);
			$.ajax({
				url: '/api/scopes/edit',
				timeout: 360000,
				headers: {
					'Accept': 'application/json'
				},
				'Accept': 'application/json',
				type: 'get',
				contentType: false,
				processData: false,
				success: (res) => {
					// console.log(res);
					let body = res.responseJSON;
					console.log(body);
					// iconBar.destroyItems();
					iconBar.addItem(adminFragment);
				},
				error: (res) => {
					// console.log(res);
					let body = res.responseJSON;
					console.log(body);
					// iconBar.destroyItems();
				}
			});
		},
		buttonRead: function () {
			$.ajax({
				url: '/api/scopes/read',
				timeout: 360000,
				headers: {
					'Accept': 'application/json'
				},
				'Accept': 'application/json',
				type: 'get',
				contentType: false,
				processData: false,
				success: (res) => {
					let body = res.responseJSON;
					console.log(body);
					this.showToast('VALID');
				},
				error: (res) => {
					let body = res.responseJSON;
					console.log(body);
					this.showToast('INVALID');
				}
			});
		},
		buttonEdit: function () {
			$.ajax({
				url: '/api/scopes/edit',
				timeout: 360000,
				headers: {
					'Accept': 'application/json'
				},
				'Accept': 'application/json',
				type: 'get',
				contentType: false,
				processData: false,
				success: (res) => {
					let body = res.responseJSON;
					console.log(body);
					this.showToast('VALID');
				},
				error: (res) => {
					let body = res.responseJSON;
					console.log(body);
					this.showToast('INVALID');
				}
			});
		},
		showToast: function (message, duration = 3000) {
			sap.m.MessageToast.show(message, {
				duration: duration, // default
				width: "15em", // default
				my: "center bottom", // default
				at: "center bottom", // default
				of: window, // default
				offset: "0 0", // default
				collision: "fit fit", // default
				onClose: null, // default
				autoClose: true, // default
				animationTimingFunction: "ease", // default
				animationDuration: 1000, // default
				closeOnBrowserNavigation: true // default
			});
		}
	});
});