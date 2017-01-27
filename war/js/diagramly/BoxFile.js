// $Id = DropboxFile.js,v 1.12 2010-01-02 09 =45 =14 gaudenz Exp $
// Copyright (c) 2006-2014, JGraph Ltd
/**
 * Constructs a new point for the optional x and y coordinates. If no
 * coordinates are given, then the default values for <x> and <y> are used.
 * @constructor
 * @class Implements a basic 2D point. Known subclassers = {@link mxRectangle}.
 * @param {number} x X-coordinate of the point.
 * @param {number} y Y-coordinate of the point.
 */
// TODO: Dropbox uses stat, OneDrive uses meta, what does Box need?
BoxFile = function(ui, data, meta)
{
	DrawioFile.call(this, ui, data);
	// TODO: Dropbox uses stat, OneDrive uses meta, what does Box need?
	this.meta = meta;
};

//Extends mxEventSource
mxUtils.extend(BoxFile, DrawioFile);

/**
 * Translates this point by the given vector.
 * 
 * @param {number} dx X-coordinate of the translation.
 * @param {number} dy Y-coordinate of the translation.
 */
BoxFile.prototype.getHash = function()
{
    // TODO: is this.meta.id what we need here?
	return 'B' + encodeURIComponent(this.meta.id);
};

/**
 * Translates this point by the given vector.
 * 
 * @param {number} dx X-coordinate of the translation.
 * @param {number} dy Y-coordinate of the translation.
 */
BoxFile.prototype.getMode = function()
{
	return App.MODE_BOX;
};

/**
 * Overridden to enable the autosave option in the document properties dialog.
 */
BoxFile.prototype.isAutosaveOptional = function()
{
	return true;
};

/**
 * Translates this point by the given vector.
 * 
 * @param {number} dx X-coordinate of the translation.
 * @param {number} dy Y-coordinate of the translation.
 */
BoxFile.prototype.getTitle = function()
{
	// TODO: what do we need to return here?
    return this.meta.name;
};

/**
 * Translates this point by the given vector.
 * 
 * @param {number} dx X-coordinate of the translation.
 * @param {number} dy Y-coordinate of the translation.
 */
BoxFile.prototype.isRenamable = function()
{
	return true;
};

/**
 * Translates this point by the given vector.
 * 
 * @param {number} dx X-coordinate of the translation.
 * @param {number} dy Y-coordinate of the translation.
 */
BoxFile.prototype.save = function(revision, success, error)
{
	this.doSave(this.getTitle(), success, error);
};

/**
 * Translates this point by the given vector.
 * 
 * @param {number} dx X-coordinate of the translation.
 * @param {number} dy Y-coordinate of the translation.
 */
BoxFile.prototype.saveAs = function(title, success, error)
{
	this.doSave(title, success, error);
};

/**
 * Translates this point by the given vector.
 * 
 * @param {number} dx X-coordinate of the translation.
 * @param {number} dy Y-coordinate of the translation.
 */
BoxFile.prototype.doSave = function(title, success, error)
{
	DrawioFile.prototype.save.apply(this, arguments);
	
	this.saveFile(title, false, success, error);
};

/**
 * Translates this point by the given vector.
 * 
 * @param {number} dx X-coordinate of the translation.
 * @param {number} dy Y-coordinate of the translation.
 */
BoxFile.prototype.saveFile = function(title, revision, success, error)
{
	// TODO: implement this, seems like every service handles this differently, what is needed for box?
};

/**
 * Translates this point by the given vector.
 * 
 * @param {number} dx X-coordinate of the translation.
 * @param {number} dy Y-coordinate of the translation.
 */
BoxFile.prototype.rename = function(title, success, error)
{
    // TODO is meta what we need?
	this.ui.box.renameFile(this, title, mxUtils.bind(this, function(meta)
	{
		if (!this.hasSameExtension(title, this.getTitle()))
		{
			// TODO is meta what we need?
            this.meta = meta;
			this.save(true, success, error);
		}
		else
		{
			// TODO is meta what we need?
            this.meta = meta;
			this.descriptorChanged();
			
			if (success != null)
			{
				success();
			}
		}
	}), error);
};
