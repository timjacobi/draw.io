/**
 * Copyright (c) 2006-2016, JGraph Ltd
 * Copyright (c) 2006-2016, Gaudenz Alder
 */
/**
 * Constructs a new point for the optional x and y coordinates. If no
 * coordinates are given, then the default values for <x> and <y> are used.
 * @constructor
 * @class Implements a basic 2D point. Known subclassers = {@link mxRectangle}.
 * @param {number} x X-coordinate of the point.
 * @param {number} y Y-coordinate of the point.
 */
BoxClient = function(editorUi)
{
	mxEventSource.call(this);
	
	/**
	 * Holds a reference to the UI. Needed for the sharing client.
	 */
	this.ui = editorUi;
};

// Extends mxEventSource
mxUtils.extend(BoxClient, mxEventSource);

// BOXTODO: add missing implementation

BoxClient.prototype.getUser = function(){
	console.log("BOXTODO: Implement getUser");
}

BoxClient.prototype.pickFile = function(){
	console.log("BOXTODO: Implement pickFile");
	

	var options = {
		clientId: 'v4igy81pd6vexpn4ps0mnn5n4gog4wmk',
		linkType: 'direct',
		multiselect: false
	};
	
	var boxSelect = new BoxSelect(options);

	// Register a success callback handler
	boxSelect.success(function(response) {
		console.log(response);
	});
	// Register a cancel callback handler
	boxSelect.cancel(function() {
		console.log("The user clicked cancel or closed the popup");
	});

	// Opens up the file picker window
	// Could use it to trigger a launch of the popup from your own button
	// NOTE: Should be triggered on a user action
	boxSelect.launchPopup();
}