/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"day8/day8/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});