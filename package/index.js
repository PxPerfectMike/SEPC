const errorMessageHandler = {
	noMarginSize: 'S.E.P.C. - sepcMargin: margin size is undefined',
	noPaddingSize: 'S.E.P.C. - sepcPadding: padding size is undefined',
	noBgColorDefined: 'S.E.P.C. - sepcBackgroundColor: no color defined',
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

const sepcWarnTag = 'S.E.P.C. - ';

//  create function that sets the class name for all elements so its not necessary to do it manually in every css call
//  or have it do something like import [name of class] as x and then it can be sepcBackgroundColor(x, "red") or something

class backgroundColorClass {
	constructor(element, clr) {
		this.element = element;
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
				radius = '7px';
				break;
			case 'rounded-md':
				radius = '10px';
				break;
			case 'rounded-lg':
				radius = '13px';
				break;
			case 'rounded-xl':
				radius = '16px';
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
class outlineClass {
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
				sepcWarnTag + errorMessageHandler.warningMessages.noOutlineStyleDefined // add to handler *
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
			sepcWarnTag +
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
				sepcWarnTag +
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
	// can call without rpt argument to set to no-repeat
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
			'inherit',
			'initial',
		];
		const invalidOptionsMessage =
			sepcWarnTag +
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
				sepcWarnTag +
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
	// can call without att argument to set to fixed but will warn in console
	constructor(element, att = 'default') {
		this.element = element;
		this.att = att;
		const elements = document.getElementsByClassName(element);
		const attOptions = ['fixed', 'scroll', 'local', 'initial', 'inherit'];
		const invalidOptionsMessage =
			sepcWarnTag +
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
				sepcWarnTag +
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
	// can call without pos argument to set to center
	constructor(element, pos = 'default') {
		this.element = element;
		this.pos = pos;
		const elements = document.getElementsByClassName(element);
		if (pos === 'default') {
			console.warn(
				sepcWarnTag +
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
					sepcWarnTag +
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
	constructor(element, minOrMax = 'min', widthOrHeight = 'width', size) {
		this.element = element;
		this.minOrMax = minOrMax;
		this.widthOrHeight = widthOrHeight;
		this.size = size;
		const elements = document.getElementsByClassName(element);
		const minOrMaxOptions = ['min', 'max'];
		const widthOrHeightOptions = ['width', 'height'];
		const invalidOptionsMessage =
			sepcWarnTag +
			// " widthheight property '" +
			widthOrHeight +
			"' is invalid. Please use one of the following options: " +
			widthOrHeightOptions[0] +
			' or ' +
			widthOrHeightOptions[1] +
			". Default set to 'width' until defined.";
		if (size === undefined || size === null) {
			console.warn(
				sepcWarnTag + errorMessageHandler.warningMessages.noSizeDefined
			);
		}
		if (!widthOrHeightOptions.includes(widthOrHeight)) {
			console.error(invalidOptionsMessage);
			widthOrHeight = 'width';
		} else if (!minOrMaxOptions.includes(minOrMax)) {
			console.error(
				sepcWarnTag +
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
	constructor(element, widthOrHeight = 'width', size) {
		this.element = element;
		this.widthOrHeight = widthOrHeight;
		this.size = size;
		const elements = document.getElementsByClassName(element);
		const widthOrHeightOptions = ['width', 'height'];
		const invalidOptionsMessage =
			sepcWarnTag +
			// " widthheight property '" +
			widthOrHeight +
			"' is invalid. Please use one of the following options: " +
			widthOrHeightOptions[0] +
			' or ' +
			widthOrHeightOptions[1] +
			". Default set to 'width' until defined.";
		if (size === undefined || size === null) {
			console.warn(
				sepcWarnTag + errorMessageHandler.warningMessages.noSizeDefined
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
color('test-divs', 'white');
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
