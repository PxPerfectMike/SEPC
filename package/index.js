const errorMessageHandler = {
    noMarginSize: "S.E.P.C. - sepcMargin: margin size is undefined",
    noPaddingSize: "S.E.P.C. - sepcPadding: padding size is undefined",
    noBgColorDefined: `S.E.P.C. - sepcBackgroundColor: no color defined`,
    noColorDefined: `S.E.P.C. - sepcColor: no color defined`,
    noDimWidthDefined: `S.E.P.C. - sepcDimension: no width defined`,
    noDimHeightDefined: `S.E.P.C. - sepcDimension: no height defined`,
    noDimensionsDefined: `S.E.P.C. - sepcDimension: no width or height defined`,
    noRadiusDefined: `S.E.P.C. - sepcBorderRadius: no radius size defined`,
}

class backgroundColorClass {
    constructor(element, clr) {
        this.element = element;
        this.clr = clr;
        // if clr is not defined then it is set to transparent
        if (clr === undefined || clr === null) {
            clr = "transparent";
            console.error(new Error(errorMessageHandler.noBgColorDefined));
        }
        // if the body of the document is targeted then it will set the background color of that element
        if (element === "body") {
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
        // if no color is input then it will be transparent
        if (clr === undefined || clr === null) {
            clr = "transparent";
            console.error(new Error(errorMessageHandler.noBgColorDefined));
        }
        // if the body of the document is targeted then it will set the color of that element
        if (element === "body") {
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
    // dimensionClass is used to set basic size parameters for the element
    constructor(element, width, height) {
        this.element = element;
        this.width = width;
        this.height = height;
        if (width === undefined && height === undefined) {
            console.error(new Error(errorMessageHandler.noDimensionsDefined) + " for sepcDimension width");
        } else if (height === undefined) {
            console.error(new Error(errorMessageHandler.noDimHeightDefined) + " for sepcDimension height");
        } else if (width === undefined) {
            console.error(new Error(errorMessageHandler.noDimWidthDefined) + " for sepcDimension");
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
            top: "marginTop",
            bottom: "marginBottom",
            left: "marginLeft",
            right: "marginRight"
        }
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
            top: "paddingTop",
            bottom: "paddingBottom",
            left: "paddingLeft",
            right: "paddingRight"
        }
        if (pdng === undefined || pdng === null) {
            console.log(new Error(errorMessageHandler.noPaddingSize));
        }
        const elements = document.getElementsByClassName(element);
        //negative padding will revert to 0px
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
    constructor(element, radius) {
        this.element = element;
        this.radius = radius;
        switch (radius) {
            case undefined:
                console.error(new Error(errorMessageHandler.noRadiusDefined));
                radius = "0px";
                break;
            case radius < 0 + "px":
                radius = "0px";
                break;
            case "circle":
                radius = "50%";
                break;
            case "pill":
                radius = "999px";
                break;
            case "rounded":
                radius = "8.5px";
                break;
            case "rounded-sm":
                radius = "7px";
                break;
            case "rounded-md":
                radius = "10px";
                break;
            case "rounded-lg":
                radius = "13px";
                break;
            case "rounded-xl":
                radius = "16px";
                break;
            case "rounded-2xl":
                radius = "19px";
                break;
            default:
                radius = "0px";
                break;
        }
        const elements = document.getElementsByClassName(element);
        for (const element of elements) {
            element.style.borderRadius = radius;
        }

    }
}

class borderClass {
    constructor(element, size, lineStyle, color) {
        this.element = element;
        this.size = size;
        this.lineStyle = lineStyle;
        this.color = color;
        const elements = document.getElementsByClassName(element);
        for (const element of elements) {
            element.style.border = `${size} ${lineStyle} ${color}`;
        }
    }
}

class textAlignClass {
    constructor(element, placement) {
        this.element = element;
        this.placement = placement;
        const elements = document.getElementsByClassName(element);
        for (const element of elements) {
            element.style.textAlign = placement;
        }
    }
}

class backgroundImageClass {
    constructor(element, image) {
        this.element = element;
        this.image = image;
        const elements = document.getElementsByClassName(element);
        for (const element of elements) {
            element.style.backgroundImage = `url(${image})`;
        }
    }
}

class backgroundRepeatClass {
    //can call without rpt argument to set to no-repeat
    constructor(element, rpt) {
        this.element = element;
        this.rpt = rpt;
        const elements = document.getElementsByClassName(element);
        if (rpt === undefined || rpt === null) {
            rpt = "no-repeat";
        }
        for (const element of elements) {
            element.style.backgroundRepeat = rpt;
        }
    }
}

class backgroundAttachmentClass {
    //can call without att argument to set to fixed
    constructor(element, att) {
        this.element = element;
        this.att = att;
        const elements = document.getElementsByClassName(element);
        if (att === undefined || att === null) {
            att = "fixed";
        }
        for (const element of elements) {
            element.style.backgroundAttachment = att;
        }
    }
}

class backgroundPositionClass {
    //can call without pos argument to set to center
    constructor(element, pos) {
        this.element = element;
        this.pos = pos;
        const elements = document.getElementsByClassName(element);
        if (pos === undefined || pos === null) {
            pos = "center";
        }
        // syntax for background-position is Y X
        //default is center center
        switch (pos) {
            case "topLeft":
                pos = "top left";
                break;
            case "topCenter":
                pos = "top center";
                break;
            case "topRight":
                pos = "top right";
                break;
            case "centerLeft":
                pos = "center left";
                break;
            case "center":
                pos = "center";
                break;
            case "centerRight":
                pos = "center right";
                break;
            case "bottomLeft":
                pos = "bottom left";
                break;
            case "bottomCenter":
                pos = "bottom center";
                break;
            case "bottomRight":
                pos = "bottom right";
                break;
            default:
                pos = "center";
                break;
        }
        for (const element of elements) {
            element.style.backgroundPosition = pos;
        }
    }
}

new backgroundColorClass("test-divs", "purple");
new colorClass("test-divs", "white");
new dimensionClass("test-divs", "100px", "100px");
new borderClass("test-divs", "10px", "solid", "black");
new textAlignClass("test-divs", "right");
new backgroundImageClass("test-divs", "https://image.shutterstock.com/image-photo/digital-technology-on-display-php-600w-547572904.jpg");
new backgroundRepeatClass("test-divs");
new backgroundAttachmentClass("test-divs");
new backgroundPositionClass("test-divs", "bottomLeft");
new paddingClass("outdiv", "100px", "left");
new backgroundColorClass("body", "pink");
new borderRadiusClass("test-divs", "pill");
new marginClass("test-divs", "100px");
new marginClass("outdiv", "400px", "left");