// Error message handler
// Object key value pairs

// A tag to append to dynamic warning messages
const sepcWarnTag = 'S.E.P.C. - ';

const errorMessageHandler = {
	negativeMarginSize:
		sepcWarnTag +
		'Negative margin size detected. Margin size must be a positive number.',
	noNegativePadding: sepcWarnTag + 'Negative padding values are not allowed.',
	noMarginSize:
		sepcWarnTag +
		'No margin size detected. Margin size must be a positive number.',
	noPaddingSize:
		sepcWarnTag +
		'No padding size detected. Padding size must be a positive number.',
	noBgColorDefined:
		sepcWarnTag +
		'No background color defined. Background color has been set to transparent.',
	noColorDefined:
		sepcWarnTag + 'No color defined. Color has been set to black.',
	noDimWidthDefined:
		sepcWarnTag + 'No width defined. Width has been set to "auto".',
	noDimHeightDefined:
		sepcWarnTag + 'No height defined. Height has been set to "auto".',
	noDimensionsDefined: sepcWarnTag + 'No dimensions defined.',
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
		// noSizeDefined: 'sepcMinMaxSize: no size value defined for minmax size',
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

class backgroundColorClass {
	// backgroundColor sets the background color of an element
	//  if clr is not defined then it is set to transparent and an error message will be displayed in the console
	// Format: sepcBgColor(element, color)
	// Example: sepcBgColor('exampleDiv', 'red')
	// Example: sepcBgColor('exampleDiv', '#ff0000')
	// Example: sepcBgColor('exampleDiv', 'rgb(255, 0, 0)')
	// Example: sepcBgColor('exampleDiv', 'rgba(255, 0, 0, 0.5)')
	// Example: sepcBgColor('exampleDiv', 'hsl(0, 100%, 50%)')
	// Example: sepcBgColor('exampleDiv', 'hsla(0, 100%, 50%, 0.5)')
	// Example: sepcBgColor('exampleDiv', 'transparent')
	constructor(element, clr = null) {
		this.element = element;
		this.clr = clr;
		//  if clr is not defined then it is set to transparent
		if (clr === null) {
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
	// The color property specifies the color of text within an element
	// Format: sepcColor(element, color)
	// If the color is not defined then it is set to black(#000000) and an error message will be displayed in the console
	// Example: sepcColor('exampleDiv', 'red')
	// Example: sepcColor('exampleDiv', '#ff0000')
	constructor(element, clr = null) {
		this.element = element;
		this.clr = clr;
		//  if no color is input then it will be transparent
		if (clr === null) {
			clr = '#000000';
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
	//  dimensionClass is used to set basic height and width size parameters for the element
	// the parameters passed in have to be element class name, width, and height parameters respectively
	// if there it no paramete passed into the width or height then it will be set to auto and an error message will be displayed in the console
	// The width and height of sepcDimension does not include padding, borders, or margins
	// Format: sepcDimension(element, width, height)
	// Example: sepcDimension('exampleDiv', '100px', '100px')
	// Example: sepcDimension('exampleDiv', '100%', '100%')
	constructor(element, width = null, height = null) {
		this.element = element;
		this.width = width;
		this.height = height;
		if (width === null && height === null) {
			console.error(
				new Error(errorMessageHandler.noDimensionsDefined) +
					' for sepcDimension width'
			);
		} else if (height === null) {
			height = 'auto';
			console.error(
				new Error(errorMessageHandler.noDimHeightDefined) +
					' for sepcDimension height'
			);
		} else if (width === null) {
			width = 'auto';
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
	// the parameters passed in have to be element class name, size, and which side to apply it to respectively
	// is no side parameter is passed in it the size will be applied to all sides
	// Format: sepcMargin(element, size, side)
	// Example: sepcMargin('exampleDiv', '10px', 'top')
	// Example: sepcMargin('exampleDiv', '10px', 'bottom')
	// Example: sepcMargin('exampleDiv', '10px') - applies to all sides

	constructor(element, mrgn = undefined, side = null) {
		this.element = element;
		this.mrgn = mrgn;
		this.side = side;
		const sideOptions = {
			top: 'marginTop',
			bottom: 'marginBottom',
			left: 'marginLeft',
			right: 'marginRight',
		};
		if (mrgn === undefined) {
			console.log(new Error(errorMessageHandler.noMarginSize));
		}
		if (mrgn < 0) {
			console.log(new Error(errorMessageHandler.negativeMarginSize));
			mrgn = 0;
		}
		const elements = document.getElementsByClassName(element);
		if (side === null) {
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
	//  paddingClass is used to set basic padding parameters for the element
	// the parameters passed in have to be element class name, size, and which side to apply it to respectively
	// is no side parameter is passed in it the size will be applied to all sides
	// Format: sepcPadding(element, size, side)
	// Example: sepcPadding('exampleDiv', '10px', 'top')
	// Example: sepcPadding('exampleDiv', '10px', 'bottom')
	// Example: sepcPadding('exampleDiv', '10px') - applies to all sides
	constructor(element, pdng = undefined, side = null) {
		this.element = element;
		this.pdng = pdng;
		this.side = side;
		const sideOptions = {
			top: 'paddingTop',
			bottom: 'paddingBottom',
			left: 'paddingLeft',
			right: 'paddingRight',
		};
		if (pdng === undefined) {
			console.log(new Error(errorMessageHandler.noPaddingSize));
		}
		if (pdng < 0) {
			console.log(new Error(errorMessageHandler.noNegativePadding));
			pdng = 0;
		}
		const elements = document.getElementsByClassName(element);
		// negative padding will revert to 0px
		if (side === null) {
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
	// rounded-md adds a 7px border radius
	// rounded-lg adds a 10px border radius
	// rounded-xl adds a 15px border radius
	// rounded-2xl adds a 19px border radius
	// Format: sepcBorderRadius(element, radius)
	// Example: sepcBorderRadius('exampleDiv', '10px')
	// Example: sepcBorderRadius('exampleDiv', 'circle')
	// Example: sepcBorderRadius('exampleDiv', 'rounded')
	// Example: sepcBorderRadius('exampleDiv', 'pill')
	// Example: sepcBorderRadius('exampleDiv', '2rem')
	constructor(element, radius = '0px') {
		this.element = element;
		this.radius = radius;
		switch (radius) {
			case '0px':
				console.warn(
					sepcWarnTag + errorMessageHandler.warningMessages.noRadiusDefined
				);
				radius = '0px';
				break;
			case radius < 0 + 'px':
				console.warn(
					sepcWarnTag + errorMessageHandler.warningMessages.radiusLessThan0
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
	// If no color is defined then it will default to black and will output an error to the console
	// Format: sepcBorder(element, size, style)
	// Example: sepcBorder('exampleDiv', '2px', 'solid')
	// Example: sepcBorder('exampleDiv', '3px', 'dashed')
	// Example: sepcBorder('exampleDiv', '5px', 'dotted')
	// Example: sepcBorder('exampleDiv', '1px', 'double')

	constructor(element, size = undefined, color = null, lineStyle = null) {
		this.element = element;
		this.size = size;
		this.color = color;
		this.lineStyle = lineStyle;
		if (size === undefined) {
			console.error(new Error(errorMessageHandler.noBorderSizeDefined));
			size = '1px';
		}
		//  border size cannot be less than 0
		if (size < 0 + 'px') {
			console.error(new Error(errorMessageHandler.invalidBorderSize));
		}
		//  border cannot be withour a color
		if (color === null) {
			console.error(new Error(errorMessageHandler.noBorderColorDefined));
			color = '#000000';
		}
		//  border cannot be withour a line style
		if (lineStyle === null) {
			console.warn(
				sepcWarnTag + errorMessageHandler.warningMessages.noLineStyleDefined
			);
			lineStyle = 'solid';
		}
		const elements = document.getElementsByClassName(element);
		for (const element of elements) {
			element.style.border = `${size} ${lineStyle} ${color}`;
		}
	}
}
