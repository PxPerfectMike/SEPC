const errorMessageHandler = {
    noMarginSize: "S.E.P.C. - sepcMargin: margin size is undefined",
    noPaddingSize: "S.E.P.C. - sepcPadding: padding size is undefined",
    noBgColorDefined: "S.E.P.C. - sepcBackgroundColor: no color defined",
    noColorDefined: "S.E.P.C. - sepcColor: no color defined",
    noDimWidthDefined: "S.E.P.C. - sepcDimension: no width defined",
    noDimHeightDefined: "S.E.P.C. - sepcDimension: no height defined",
    noDimensionsDefined: "S.E.P.C. - sepcDimension: no width or height defined",
    noPositionDefined: "S.E.P.C. - sepcBackgroundPosition: no position value defined",
    noBorderSizeDefined: "S.E.P.C. - sepcBorder: no border size defined, defaulting to 1px",
    noBorderTypeDefined: "S.E.P.C. - sepcBorder: no border type defined",
    invalidBorderSize: "S.E.P.C. - sepcBorder: invalid border size: Cannot be less than 0",
    noBackgroundImageDefined: "S.E.P.C. - sepcBackgroundImage: no image value defined",
    warningMessages: {
        noRadiusDefined: "sepcBorderRadius: radius is set to 0px or is not defined. To get rid of this message define a radius",
        radiusLessThan0: "sepcBorderRadius: radius is less than 0px. To get rid of this message define a radius greater than 0px",
        noLineStyleDefined: "sepcBorder: no lineStyle defined. To get rid of this message define a lineStyle",
        noTextAlignPlacementDefined: "sepcTextAlign placement not defined, defaulting to 'left'. To get rid of this message, define placement parameter",
        noBackgroundAttachmentDefined: "sepcBackgroundAttachment: no attachment value defined, defaulting to 'fixed'. To get rid of this message, define attachment parameter",
        noBackgroundPositionDefined: "sepcBackgroundPosition not defined, defaulting to center. To get rid of this message, define position as 'default' in arguments"
    },
    consoleMessages: {
        noBackgroundRepeatDefined: "sepcBackgroundRepeat: no repeat value defined, defaulting to 'no-repeat'",
    }
}

const sepcWarnTag = "S.E.P.C. - "

// create function that sets the class name for all elements so its not necessary to do it manually in every css call
// or have it do something like import [name of class] as x and then it can be sepcBackgroundColor(x, "red") or something

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
    constructor(element, radius = "0px") {
        this.element = element;
        this.radius = radius;
        switch (radius) {
            case "0px":
                console.warn(sepcWarnTag + errorMessageHandler.warningMessages.noRadiusDefined);
                radius = "0px";
                break;
            case radius < 0 + "px":
                console.warn(sepcWarnTag + errorMessageHandler.warningMessages.radiusLessThan0);
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
    constructor(element, size, color, lineStyle = "default") {
        this.element = element;
        this.size = size;
        this.color = color;
        this.lineStyle = lineStyle;
        if (size === undefined || size === null) {
            console.error(new Error(errorMessageHandler.noBorderSizeDefined));
            size = "1px";
        }
        // border size cannot be less than 0
        if (size < 0 + "px") {
            console.error(new Error(errorMessageHandler.invalidBorderSize));
        }
        // border cannot be withour a color
        if (color === undefined || color === null) {
            console.error(new Error(errorMessageHandler.noBorderColorDefined));
        }
        // issue a warning that the linestyle has defaulted to solid and set to solid
        if (lineStyle === "default") {
            console.warn(sepcWarnTag + errorMessageHandler.warningMessages.noLineStyleDefined);
            lineStyle = "solid";
        }
        const elements = document.getElementsByClassName(element);
        for (const element of elements) {
            element.style.border = `${size} ${lineStyle} ${color}`;
        }
    }
}

class textAlignClass {
    constructor(element, placement = "default") {
        this.element = element;
        this.placement = placement;
        // if no placement is defined then it will default to left
        if (placement === "default") {
            console.warn(sepcWarnTag + errorMessageHandler.warningMessages.noTextAlignPlacementDefined);
            placement = "left";
        }
        const elements = document.getElementsByClassName(element);
        for (const element of elements) {
            element.style.textAlign = placement;
        }
    }
}

class backgroundImageClass {
    // take care of gradient and image distinction in functional function code later... manual url() distinction or designate type in constructor?
    constructor(element, image) {
        this.element = element;
        this.image = image;
        // if no image is defined then it will default throw error and break the site... maybe default to a placeholder image?
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
    //can call without rpt argument to set to no-repeat
    constructor(element, rpt) {
        this.element = element;
        this.rpt = rpt;
        const elements = document.getElementsByClassName(element);
        if (rpt === undefined || rpt === null) {
            rpt = "no-repeat";
            console.log(sepcWarnTag + errorMessageHandler.consoleMessages.noBackgroundRepeatDefined);
        }
        for (const element of elements) {
            element.style.backgroundRepeat = rpt;
        }
    }
}

class backgroundAttachmentClass {
    //can call without att argument to set to fixed but will warn in console
    constructor(element, att) {
        this.element = element;
        this.att = att;
        const elements = document.getElementsByClassName(element);
        if (att === undefined || att === null) {
            att = "fixed";
            console.warn(sepcWarnTag + errorMessageHandler.warningMessages.noBackgroundAttachmentDefined);
        }
        for (const element of elements) {
            element.style.backgroundAttachment = att;
        }
    }
}

class backgroundPositionClass {
    //can call without pos argument to set to center
    constructor(element, pos = "center") {
        this.element = element;
        this.pos = pos;
        const elements = document.getElementsByClassName(element);
        if (pos === undefined || pos === null) {
            pos = "center";
            console.warn(sepcWarnTag + errorMessageHandler.warningMessages.noBackgroundPositionDefined);
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
            case "default":
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
                pos = "center center";
                break;
        }
        for (const element of elements) {
            element.style.backgroundPosition = pos;
        }
    }
}

new backgroundColorClass("test-divs", "purple");
new colorClass("test-divs", "white");
new dimensionClass("test-divs", "400px", "400px");
new borderClass("test-divs", "4px", "black", "dashed");
new textAlignClass("test-divs", "left");
new backgroundImageClass("test-divs", "https://image.shutterstock.com/image-photo/digital-technology-on-display-php-600w-547572904.jpg");
new backgroundRepeatClass("test-divs", "no-repeat");
new backgroundAttachmentClass("test-divs");
new backgroundPositionClass("test-divs", "topCenter");
new backgroundColorClass("body", "pink");
new borderRadiusClass("test-divs", "rounded");
new marginClass("test-divs", "100px");