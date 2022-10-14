// Error message handler
// Object key value pairs

// A tag to append to dynamic warning messages
const sepcWarnTag = 'S.E.P.C. - ';

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

class backgroundColorClass {
	// backgroundColor sets the background color of an element
	//  if clr is not defined then it is set to transparent
	// Format: sepcBackgroundColor(element, color)
	// Example: sepcBackgroundColor('exampleDiv', 'red')
	// Example: sepcBackgroundColor('exampleDiv', '#ff0000')
	// Example: sepcBackgroundColor('exampleDiv', 'rgb(255, 0, 0)')
	// Example: sepcBackgroundColor('exampleDiv', 'rgba(255, 0, 0, 0.5)')
	// Example: sepcBackgroundColor('exampleDiv', 'hsl(0, 100%, 50%)')
	// Example: sepcBackgroundColor('exampleDiv', 'hsla(0, 100%, 50%, 0.5)')
	// Example: sepcBackgroundColor('exampleDiv', 'transparent')
	constructor(element, clr = 'null') {
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
