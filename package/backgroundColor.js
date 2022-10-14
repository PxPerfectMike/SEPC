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

export default function backgroundColor(element, clr) {
	return new backgroundColorClass(element, clr);
}
