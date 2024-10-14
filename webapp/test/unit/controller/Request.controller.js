/*global QUnit*/

sap.ui.define([
	"request_view_ui5/controller/Request.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Request Controller");

	QUnit.test("I should test the Request controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
