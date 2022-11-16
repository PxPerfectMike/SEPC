/**
 * @file index.js is the root file for S.E.P.C. (Super Easy Programmed CSS)
 * @author Michael Baker
 * {@link https://www.michaelbakerportfolio.com (Personal Portfolio)}
 * @copyright 2022
 * @version 1.0.0
 */

/**
 * Error Message Handler
 * @name errorMessageHandler
 * @type {object}
 * @description Contains all error handler Messages
 * @property {error} noMarginSize - margin size is undefined
 * @property {error} noPaddingSize - padding size is undefined
 * @property {error} noBgColorDefined - No background color defined, defaulting to transparent
 * @property {error} noColorDefined - No color defined
 * @property {error} noDimWidthDefined - No width defined
 * @property {error} noDimHeightDefined - No height defined
 * @property {error} noDimensionsDefined - no width or height defined
 * @property {error} noPositionDefined - no position value defined
 * @property {error} noBorderSizeDefined - no border size defined, defaulting to 1px
 * @property {error} noOutlineSizeDefined - no outline size defined, defaulting to 1px
 * @property {error} noBorderTypeDefined - no border type defined, defaulting to solid
 * @property {error} invalidBorderSize - invalid border size: cannot be less than 0
 * @property {error} noBackgroundImageDefined - no image value defined
 * @property {warning} noSizeDefined - no size value defined for minmax size
 * @property {warning} noRadiusDefined - radius is set to 0px or is not defined. To get rid of this message define a radius
 * @property {warning} radiusLessThan0 - radius is less than 0px. To get rid of this message define a radius greater than 0px
 * @property {warning} noLineStyleDefined - no lineStyle defined. To get rid of this message define a lineStyle
 * @property {warning} noTextAlignPlacementDefined - textAlign placement not defined, defaulting to 'left'. To get rid of this message, define placement parameter
 * @property {warning} noBackgroundAttachmentDefined - no attachment value defined, defaulting to 'scroll'. To get rid of this message, define attachment parameter
 * @property {warning} noBackgroundPositionDefined - no position value defined, defaulting to center. To get rid of this message, define position parameter
 * @property {warning} invalidBackgroundPosition - invalid position value, defaulting to center. To get rid of this message, define valid position parameter
 * @property {console} noBackgroundRepeatDefined - no repeat value defined, defaulting to 'no-repeat'
 */
const errorMessageHandler = {
	noMarginSize: 'S.E.P.C. - sepcMargin: margin size is undefined',
	noPaddingSize: 'S.E.P.C. - sepcPadding: padding size is undefined',
	noBgColorDefined:
		'S.E.P.C. - sepcBackgroundColor: no color defined - defaulting to transparent',
	noColorDefined: 'S.E.P.C. - sepcColor: no color defined',
	noDimWidthDefined: 'S.E.P.C. - sepcDimension: no width defined',
	noDimHeightDefined: 'S.E.P.C. - sepcDimension: no height defined',
	noDimensionsDefined: 'S.E.P.C. - sepcDimension: no width or height defined',
	noPositionDefined:
		'S.E.P.C. - sepcBackgroundPosition: no position value defined',
	noBorderSizeDefined:
		'S.E.P.C. - sepcBorder: no border size defined, defaulting to 1px',
	noOutlineSizeDefined:
		'S.E.P.C. - sepcOutline: no outline size defined, defaulting to 1px',
	noBorderTypeDefined: 'S.E.P.C. - sepcBorder: no border type defined',
	invalidBorderSize:
		'S.E.P.C. - sepcBorder: invalid border size: Cannot be less than 0',
	noBackgroundImageDefined:
		'S.E.P.C. - sepcBackgroundImage: no image value defined',
	warningMessages: {
		noSizeDefined: 'sepcMinMaxSize: no size value defined for minmax size',
		noRadiusDefined:
			'sepcBorderRadius: radius is set to 0px or is not defined. To get rid of this message define a radius',
		radiusLessThan0:
			'sepcBorderRadius: radius is less than 0px. To get rid of this message define a radius greater than 0px',
		noLineStyleDefined:
			'sepcBorder: no lineStyle defined. To get rid of this message define a lineStyle',
		noTextAlignPlacementDefined:
			"sepcTextAlign placement not defined, defaulting to 'left'. To get rid of this message, define placement parameter",
		noBackgroundAttachmentDefined:
			"sepcBackgroundAttachment: no attachment value defined, defaulting to 'scroll'. To get rid of this message, define attachment parameter",
		noBackgroundPositionDefined:
			'sepcBackgroundPosition not defined, defaulting to center. To get rid of this message, define position parameter',
		invalidBackgroundPosition:
			'sepcBackgroundPosition: invalid position value, defaulting to center. To get rid of this message, define valid position parameter',
	},
	consoleMessages: {
		noBackgroundRepeatDefined:
			"sepcBackgroundRepeat: no repeat value defined, defaulting to 'no-repeat'",
	},
};
/**
 * @name errorPrefixTag
 * @type {string}
 * @description A tag that is appended to errors and warnings
 * @example S.E.P.C. - [error message]
 * @example S.E.P.C. - [warning message]
 * @const errorPrefixTag
 * @default 'S.E.P.C. - '
 */
const errorPrefixTag = 'S.E.P.C. - ';

//  create function that sets the class name for all elements so its not necessary to do it manually in every css call
//  or have it do something like import [name of class] as x and then it can be sepcBackgroundColor(x, "red") or something

/**
 * @type {class}
 * @class The class that creates a background color object
 * @description constructs the background color object for the designated element's HTML class and sets the background color
 * @exception {error} noBgColorDefined - No background color defined, defaulting to transparent
 */
class backgroundColorClass {
	/**
	 * Class to create a background color object
	 * @param {string} element - The HTML element className
	 * @param {string} color - The color to set the background to
	 * @constructor
	 */
	constructor(element, clr) {
		this.clr = clr;
		//  if clr is not defined then it is set to transparent
		if (clr === undefined || clr === null) {
			clr = 'transparent';
			console.error(new Error(errorMessageHandler.noBgColorDefined));
		}
		//  if the body of the document is targeted then it will set the background color of that element
		if (element === 'body') {
			document.body.style.backgroundColor = clr;
		}
		const elements = document.getElementsByClassName(element);
		for (const element of elements) {
			element.style.backgroundColor = clr;
		}
	}
}

class colorClass {
	constructor(element, clr) {
		this.element = element;
		this.clr = clr;
		//  if no color is input then it will be transparent
		if (clr === undefined || clr === null) {
			clr = 'transparent';
			console.error(new Error(errorMessageHandler.noBgColorDefined));
		}
		//  if the body of the document is targeted then it will set the color of that element
		if (element === 'body') {
			document.body.style.color = clr;
		} else {
			const elements = document.getElementsByClassName(element);
			for (const element of elements) {
				element.style.color = clr;
			}
		}
	}
}

class dimensionClass {
	//  dimensionClass is used to set basic size parameters for the element
	// the parameters passed in have to be element class name, width, and height
	constructor(element, width, height) {
		this.element = element;
		this.width = width;
		this.height = height;
		if (width === undefined && height === undefined) {
			console.error(
				new Error(errorMessageHandler.noDimensionsDefined) +
					' for sepcDimension width'
			);
		} else if (height === undefined) {
			console.error(
				new Error(errorMessageHandler.noDimHeightDefined) +
					' for sepcDimension height'
			);
		} else if (width === undefined) {
			console.error(
				new Error(errorMessageHandler.noDimWidthDefined) + ' for sepcDimension'
			);
		}
		const elements = document.getElementsByClassName(element);
		for (const element of elements) {
			element.style.width = width;
			element.style.height = height;
		}
	}
}

class marginClass {
	//  marginClass is used to set basic margin parameters for the element
	// the parameters passed in have to be element class name, size, and which side to apply it to
	constructor(element, mrgn, side) {
		this.element = element;
		this.mrgn = mrgn;
		this.side = side;
		const sideOptions = {
			top: 'marginTop',
			bottom: 'marginBottom',
			left: 'marginLeft',
			right: 'marginRight',
		};
		if (mrgn === undefined || mrgn === null) {
			console.log(new Error(errorMessageHandler.noMarginSize));
		}
		const elements = document.getElementsByClassName(element);
		if (side === undefined || side === null) {
			for (const element of elements) {
				element.style.margin = mrgn;
			}
		} else {
			for (const element of elements) {
				element.style[sideOptions[side]] = mrgn;
			}
		}
	}
}

class paddingClass {
	//  paddingClass is used to set basic margin parameters for the element
	// the parameters passed in have to be element class name, size, and which side to apply it to
	constructor(element, pdng, side) {
		this.element = element;
		this.pdng = pdng;
		this.side = side;
		const sideOptions = {
			top: 'paddingTop',
			bottom: 'paddingBottom',
			left: 'paddingLeft',
			right: 'paddingRight',
		};
		if (pdng === undefined || pdng === null) {
			console.log(new Error(errorMessageHandler.noPaddingSize));
		}
		const elements = document.getElementsByClassName(element);
		// negative padding will revert to 0px
		if (side === undefined || side === null) {
			for (const element of elements) {
				element.style.padding = pdng;
			}
		} else {
			for (const element of elements) {
				element.style[sideOptions[side]] = pdng;
			}
		}
	}
}

class borderRadiusClass {
	//  borderRadiusClass is used to set basic border radius parameters for the element
	// the parameters passed in have to be element class name, and radius size represented in px, rem, em, etc.
	// if no radius is defined then it will default to 0px smd will output a warning to the console
	// is also accepts a named shapes that are defined SEPC
	// circle adds a 50% border radius. if the element is a square using this setting will result in the element being styled as a circle
	// rounded adds a 5px border radius
	// pill adds a 9999px border radius resulting in a pill shape for a rectangle shaped element
	// rounded-sm adds a 2px border radius
	//rounded-md adds a 7px border radius
	//rounded-lg adds a 10px border radius
	//rounded-xl adds a 15px border radius
	//rounded-2xl adds a 19px border radius
	constructor(element, radius = '0px') {
		this.element = element;
		this.radius = radius;
		switch (radius) {
			case '0px':
				console.warn(
					errorPrefixTag + errorMessageHandler.warningMessages.noRadiusDefined
				);
				radius = '0px';
				break;
			case radius < 0 + 'px':
				console.warn(
					errorPrefixTag + errorMessageHandler.warningMessages.radiusLessThan0
				);
				radius = '0px';
				break;
			case 'circle':
				radius = '50%';
				break;
			case 'pill':
				radius = '999px';
				break;
			case 'rounded':
				radius = '8.5px';
				break;
			case 'rounded-sm':
				radius = '2px';
				break;
			case 'rounded-md':
				radius = '7px';
				break;
			case 'rounded-lg':
				radius = '10px';
				break;
			case 'rounded-xl':
				radius = '15px';
				break;
			case 'rounded-2xl':
				radius = '19px';
				break;
			default:
				radius = '0px';
				break;
		}
		const elements = document.getElementsByClassName(element);
		for (const element of elements) {
			element.style.borderRadius = radius;
		}
	}
}

class borderClass {
	//  borderClass is used to set basic border parameters for the element
	// the parameters passed in have to be element class name, and border size represented in px, rem, em, etc.
	// if no border size is defined then it will default to 1px and will output an error to the console
	// If no line style is defined then it will default to solid and will output an error to the console
	constructor(element, size, color, lineStyle = 'default') {
		this.element = element;
		this.size = size;
		this.color = color;
		this.lineStyle = lineStyle;
		if (size === undefined || size === null) {
			console.error(new Error(errorMessageHandler.noBorderSizeDefined));
			size = '1px';
		}
		//  border size cannot be less than 0
		if (size < 0 + 'px') {
			console.error(new Error(errorMessageHandler.invalidBorderSize));
		}
		//  border cannot be withour a color
		if (color === undefined || color === null) {
			console.error(new Error(errorMessageHandler.noBorderColorDefined));
		}
		//  issue a warning that the linestyle has defaulted to solid and set to solid
		if (lineStyle === 'default') {
			console.warn(
				errorPrefixTag + errorMessageHandler.warningMessages.noLineStyleDefined
			);
			lineStyle = 'solid';
		}
		const elements = document.getElementsByClassName(element);
		for (const element of elements) {
			element.style.border = `${size} ${lineStyle} ${color}`;
		}
	}
}
class outlineClass {
	//  outlineClass is used to set basic outline parameters for the element
	// the parameters passed in have to be element class name, and outline size represented in px, rem, em, etc., then color, and then line style
	// if no outline size is defined then it will default to 1px and will output an error to the console
	// if no linestyle is defined then it will default to solid
	constructor(element, size, color, lineStyle = 'default') {
		this.element = element;
		this.size = size;
		this.color = color;
		this.lineStyle = lineStyle;
		if (size === undefined || size === null) {
			console.error(new Error(errorMessageHandler.noOutlineSizeDefined));
			size = '1px';
		}
		//  border size cannot be less than 0
		if (size < 0 + 'px') {
			console.error(new Error(errorMessageHandler.invalidOutlineSize)); // add to handler *
		}
		//  border cannot be withour a color
		if (color === undefined || color === null) {
			console.error(new Error(errorMessageHandler.noOutlineColorDefined)); // add to handler *
		}
		//  issue a warning that the linestyle has defaulted to solid and set to solid
		if (lineStyle === 'default') {
			console.warn(
				errorPrefixTag +
					errorMessageHandler.warningMessages.noOutlineStyleDefined // add to handler *
			);
			lineStyle = 'solid';
		}
		const elements = document.getElementsByClassName(element);
		for (const element of elements) {
			element.style.outline = `${size} ${lineStyle} ${color}`;
		}
	}
}

class textAlignClass {
	//  textAlignClass is used to set the text alignment for the element
	// the parameters passed in have to be element class name, and text alignment
	// if no text alignment is defined then it will default to left and will output an error to the console
	// text alignment can be left, right, center, justify, initial, and inherit
	constructor(element, placement = 'default') {
		this.element = element;
		this.placement = placement;
		const elements = document.getElementsByClassName(element);
		const alignOptions = [
			'left',
			'right',
			'center',
			'justify',
			'initial',
			'inherit',
		];
		const invalidOptionsMessage =
			errorPrefixTag +
			" sepcTextAlign property '" +
			placement +
			"' is invalid. Please use one of the following options: " +
			alignOptions[0] +
			', ' +
			alignOptions[1] +
			', ' +
			alignOptions[2] +
			', ' +
			alignOptions[3] +
			', ' +
			alignOptions[4] +
			', or ' +
			alignOptions[5] +
			". Default set to 'left' until defined.";
		//  if no placement is defined then it will default to left
		if (placement === 'default') {
			console.warn(
				errorPrefixTag +
					errorMessageHandler.warningMessages.noTextAlignPlacementDefined
			);
			placement = 'left';
		} else if (!alignOptions.includes(placement)) {
			console.error(invalidOptionsMessage);
			placement = 'left';
		}
		for (const element of elements) {
			element.style.textAlign = placement;
		}
	}
}

class backgroundImageClass {
	//  take care of gradient and image distinction in functional function code later... manual url() distinction or designate type in constructor?
	constructor(element, image) {
		this.element = element;
		this.image = image;
		//  if no image is defined then it will default throw error and break the site... maybe default to a placeholder image?
		if (image === undefined || image === null) {
			throw new Error(errorMessageHandler.noBackgroundImageDefined);
		}
		const elements = document.getElementsByClassName(element);
		for (const element of elements) {
			element.style.backgroundImage = `url(${image})`;
		}
	}
}

class backgroundRepeatClass {
	//  backgroundRepeatClass is used to set the background repeat for the element
	// the parameters passed in have to be element class name, and background repeat option
	// if no background repeat option is defined then it will default to no-repeat and will output an error to the console
	// background repeat options can be repeat, repeat-x, repeat-y, no-repeat, space, round, initial, and inherit
	constructor(element, rpt) {
		this.element = element;
		this.rpt = rpt;
		const elements = document.getElementsByClassName(element);
		const repeatOptions = [
			'repeat',
			'repeat-x',
			'repeat-y',
			'no-repeat',
			'space',
			'round',
			'initial',
			'inherit',
		];
		const invalidOptionsMessage =
			errorPrefixTag +
			" sepcBackgroundRepeat property '" +
			rpt +
			"' is invalid. Please use one of the following options: " +
			repeatOptions[0] +
			', ' +
			repeatOptions[1] +
			', ' +
			repeatOptions[2] +
			', ' +
			repeatOptions[3] +
			', ' +
			repeatOptions[4] +
			', ' +
			repeatOptions[5] +
			', ' +
			repeatOptions[6] +
			', or ' +
			repeatOptions[7] +
			". Default set to 'no-repeat' until defined.";
		if (rpt === undefined || rpt === null) {
			rpt = 'no-repeat';
			console.log(
				errorPrefixTag +
					errorMessageHandler.consoleMessages.noBackgroundRepeatDefined
			);
		} else if (!repeatOptions.includes(rpt)) {
			console.error(invalidOptionsMessage);
		}
		for (const element of elements) {
			element.style.backgroundRepeat = rpt;
		}
	}
}

class backgroundAttachmentClass {
	// The backgroundAttachmentClass sets whether a background image scrolls with the rest of the page, or is fixed.
	// can be called without attachment argument to set to default - fixed, but it will throw an error in the console
	constructor(element, att = 'default') {
		this.element = element;
		this.att = att;
		const elements = document.getElementsByClassName(element);
		const attOptions = ['fixed', 'scroll', 'local', 'initial', 'inherit'];
		const invalidOptionsMessage =
			errorPrefixTag +
			" backgroundAttachment property '" +
			att +
			"' is invalid. Please use one of the following options: " +
			attOptions[0] +
			', ' +
			attOptions[1] +
			', ' +
			attOptions[2] +
			', ' +
			attOptions[3] +
			', or ' +
			attOptions[4] +
			'. Default set to scroll until defined.';
		if (att === 'default') {
			att = 'scroll';
			console.warn(
				errorPrefixTag +
					errorMessageHandler.warningMessages.noBackgroundAttachmentDefined
			);
		} else if (!attOptions.includes(att)) {
			console.error(invalidOptionsMessage);
			att = 'scroll';
		}
		for (const element of elements) {
			element.style.backgroundAttachment = att;
		}
	}
}

class backgroundPositionClass {
	// The backgroundPositionClass sets the starting position of a background image.
	// can call without pos argument to set to center
	// the position argument can be center, topLeft, topCenter, topRight, centerLeft, centerRight, bottomLeft, bottomCenter, or bottomRight
	// it also accepts custom positions in the form of 'x y' where x and y are numbers or percentages in the same format
	constructor(element, pos = 'default') {
		this.element = element;
		this.pos = pos;
		const elements = document.getElementsByClassName(element);
		if (pos === 'default') {
			console.warn(
				errorPrefixTag +
					errorMessageHandler.warningMessages.noBackgroundPositionDefined
			);
		}
		//  syntax for background-position is Y X
		// default is center center
		switch (pos) {
			case 'default':
				pos = 'center';
				break;
			case 'topLeft':
				pos = 'top left';
				break;
			case 'topCenter':
				pos = 'top center';
				break;
			case 'topRight':
				pos = 'top right';
				break;
			case 'centerLeft':
				pos = 'center left';
				break;
			case 'centerRight':
				pos = 'center right';
				break;
			case 'bottomLeft':
				pos = 'bottom left';
				break;
			case 'bottomCenter':
				pos = 'bottom center';
				break;
			case 'bottomRight':
				pos = 'bottom right';
				break;
			default:
				const invalidPosition = "position property '" + pos + "' is invalid. ";
				pos = 'center center';
				console.warn(
					errorPrefixTag +
						invalidPosition +
						errorMessageHandler.warningMessages.invalidBackgroundPosition
				);
				break;
		}
		for (const element of elements) {
			element.style.backgroundPosition = pos;
		}
	}
}

class minMaxSizeClass {
	// the minMaxSizeClass sets the minimum or maximum width or height of an element
	// if there is no min or max distinction for the minmax argument it defaults to min
	// if no size argument is given is defaults to null and will throw a warning in the console
	// Format: minMaxSize(element, min or max, size)
	// Example: minMaxSize('myElement', 'min', '100px')
	constructor(
		element,
		minOrMax = 'min',
		widthOrHeight = 'width',
		size = 'null'
	) {
		// need to add error to handler for no size argument
		this.element = element;
		this.minOrMax = minOrMax;
		this.widthOrHeight = widthOrHeight;
		this.size = size;
		const elements = document.getElementsByClassName(element);
		const minOrMaxOptions = ['min', 'max'];
		const widthOrHeightOptions = ['width', 'height'];
		const invalidOptionsMessage =
			errorPrefixTag +
			// " widthheight property '" +
			widthOrHeight +
			"' is invalid. Please use one of the following options: " +
			widthOrHeightOptions[0] +
			' or ' +
			widthOrHeightOptions[1] +
			". Default set to 'width' until defined.";
		if (size === undefined || size === null) {
			console.warn(
				errorPrefixTag + errorMessageHandler.warningMessages.noSizeDefined
			);
		}
		if (!widthOrHeightOptions.includes(widthOrHeight)) {
			console.error(invalidOptionsMessage);
			widthOrHeight = 'width';
		} else if (!minOrMaxOptions.includes(minOrMax)) {
			console.error(
				errorPrefixTag +
					// " minmax property '" +
					minOrMax +
					"' is invalid. Please use one of the following options: " +
					minOrMaxOptions[0] +
					' or ' +
					minOrMaxOptions[1] +
					". Default set to 'min' until defined."
			);
			minOrMax = 'min';
		} else if (widthOrHeight === 'width' && minOrMax === 'min') {
			for (const element of elements) {
				element.style.minWidth = size;
			}
		} else if (widthOrHeight === 'width' && minOrMax === 'max') {
			for (const element of elements) {
				element.style.maxWidth = size;
			}
		} else if (widthOrHeight === 'height' && minOrMax === 'min') {
			for (const element of elements) {
				element.style.minHeight = size;
			}
		} else if (widthOrHeight === 'height' && minOrMax === 'max') {
			for (const element of elements) {
				element.style.maxHeight = size;
			}
		}
	}
}

class widthHeightClass {
	// the widthHeightClass sets the width or height of an element
	// if no width or height argument is given is defaults to width
	// if no size argument is given is defaults to null and will throw a warning in the console
	constructor(element, widthOrHeight = 'width', size = 'null') {
		this.element = element;
		this.widthOrHeight = widthOrHeight;
		this.size = size;
		const elements = document.getElementsByClassName(element);
		const widthOrHeightOptions = ['width', 'height'];
		const invalidOptionsMessage =
			errorPrefixTag +
			// " widthheight property '" +
			widthOrHeight +
			"' is invalid. Please use one of the following options: " +
			widthOrHeightOptions[0] +
			' or ' +
			widthOrHeightOptions[1] +
			". Default set to 'width' until defined.";
		if (size === null) {
			console.warn(
				errorPrefixTag + errorMessageHandler.warningMessages.noSizeDefined
			);
		}
		if (!widthOrHeightOptions.includes(widthOrHeight)) {
			console.error(invalidOptionsMessage);
			widthOrHeight = 'width';
		} else if (widthOrHeight === 'width') {
			for (const element of elements) {
				element.style.width = size;
			}
		} else if (widthOrHeight === 'height') {
			for (const element of elements) {
				element.style.height = size;
			}
		}
	}
}

// new backgroundColorClass('test-divs', 'purple');
// new colorClass('test-divs', 'white');
// new dimensionClass('test-divs', '400px', '400px');
// new borderClass('test-divs', '4px', 'black', 'dashed');
// new textAlignClass('test-divs', 'right');
// new backgroundImageClass(
// 	'test-divs',
// 	'https://www.hubspot.com/hubfs/how-to-learn-coding.jpg'
// );
// new backgroundRepeatClass('test-divs', 'no-repeat');
// new backgroundAttachmentClass('test-divs', 'fixed');
// new backgroundPositionClass('test-divs', 'topLeft');
// // new backgroundColorClass('body', 'pink');
// new borderRadiusClass('test-divs', 'rounded');
// new marginClass('test-divs', '100px');
// new minMaxSizeClass('test-divs', 'min', 'width', '600px');
// new widthHeightClass('test-divs', 'height', '600px');
// new paddingClass('test-divs', '100px');
// new outlineClass('test-divs', '4px', 'black', 'dashed');
// document.body.appendChild(document.createElement('script').text = );

function backgroundColor(element, clr) {
	return new backgroundColorClass(element, clr);
}

function color(element, clr) {
	return new colorClass(element, clr);
}

function dimension(element, width, height) {
	return new dimensionClass(element, width, height);
}

function border(element, width, color, style) {
	return new borderClass(element, width, color, style);
}

function textAlign(element, align) {
	return new textAlignClass(element, align);
}

function backgroundImage(element, url) {
	return new backgroundImageClass(element, url);
}

function backgroundRepeat(element, repeat) {
	return new backgroundRepeatClass(element, repeat);
}

function backgroundAttachment(element, attachment) {
	return new backgroundAttachmentClass(element, attachment);
}

function backgroundPosition(element, position) {
	return new backgroundPositionClass(element, position);
}

function borderRadius(element, radius) {
	return new borderRadiusClass(element, radius);
}

function margin(element, margin) {
	return new marginClass(element, margin);
}

function minMaxSize(element, minOrMax, widthOrHeight, size) {
	return new minMaxSizeClass(element, minOrMax, widthOrHeight, size);
}

function widthHeight(element, widthOrHeight, size) {
	return new widthHeightClass(element, widthOrHeight, size);
}

function padding(element, padding) {
	return new paddingClass(element, padding);
}

function outline(element, width, color, style) {
	return new outlineClass(element, width, color, style);
}

backgroundColor('test-divs', 'purple');
color('test-divs', 'red');
dimension('test-divs', '400px', '400px');
border('test-divs', '4px', 'black', 'dashed');
textAlign('test-divs', 'right');
backgroundImage(
	'test-divs',
	'https://www.hubspot.com/hubfs/how-to-learn-coding.jpg'
);
backgroundRepeat('test-divs', 'no-repeat');
backgroundAttachment('test-divs', 'fixed');
backgroundPosition('test-divs', 'topLeft');
backgroundColor('body', 'pink');
borderRadius('test-divs', 'rounded');
margin('test-divs', '100px');
minMaxSize('test-divs', 'min', 'width', '600px');
widthHeight('test-divs', 'height', '600px');
padding('test-divs', '100px');
outline('test-divs', '4px', 'black', 'dashed');
