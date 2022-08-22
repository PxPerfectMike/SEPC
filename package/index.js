class backgroundColorClass {
    constructor(element, color) {
        this.element = element;
        this.color = color;
        const elements = document.getElementsByClassName(element);
        for (const element of elements) {
            element.style.backgroundColor = color;
        }
    }
}

class colorClass {
    constructor(element, color) {
        this.element = element;
        this.color = color;
        const elements = document.getElementsByClassName(element);
        for (const element of elements) {
            element.style.color = color;

        }
    }
}

class dimensionClass {
    constructor(element, width, height) {
        this.element = element;
        this.width = width;
        this.height = height;
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
        const elements = document.getElementsByClassName(element);
        //negative margin will revert to 0px
        if (mrgn < 0 + "px") {
            mrgn = 0;
        }
        if (side == "top") {
            for (const element of elements) {
                element.style.marginTop = mrgn;
            }
        } else if (side == "bottom") {
            for (const element of elements) {
                element.style.marginBottom = mrgn;
            }
        } else if (side == "left") {
            for (const element of elements) {
                element.style.marginLeft = mrgn;
            }
        } else if (side == "right") {
            for (const element of elements) {
                element.style.marginRight = mrgn;
            }
        } else if (side === undefined || side === null) {
            for (const element of elements) {
                element.style.margin = mrgn;
            }
        }
    }
}

class paddingClass {
    constructor(element, padding, side) {
        this.element = element;
        this.padding = padding;
        this.side = side;
        const elements = document.getElementsByClassName(element);
        //negative padding will revert to 0px
        if (padding < 0 + "px") {
            padding = 0;
        }
        if (side == "top") {
            for (const element of elements) {
                element.style.paddingTop = padding;
            }
        } else if (side == "bottom") {
            for (const element of elements) {
                element.style.paddingBottom = padding;
            }
        } else if (side == "left") {
            for (const element of elements) {
                element.style.paddingLeft = padding;
            }
        } else if (side == "right") {
            for (const element of elements) {
                element.style.paddingRight = padding;
            }
        } else if (side === undefined || side === null) {
            for (const element of elements) {
                element.style.padding = padding;
            }
        }
    }
}
class borderRadiusClass {
    constructor(element, radius) {
        this.element = element;
        this.radius = radius;
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
new colorClass("test-divs", "orange");
new dimensionClass("test-divs", "300px", "200px");
new marginClass("test-divs", "5px", "top");
new borderRadiusClass("test-divs", "10px");
new borderClass("test-divs", "10px", "solid", "black");
new textAlignClass("test-divs", "right");
new backgroundImageClass("test-divs", "https://image.shutterstock.com/image-photo/digital-technology-on-display-php-600w-547572904.jpg");
new backgroundRepeatClass("test-divs");
new backgroundAttachmentClass("test-divs");
new backgroundPositionClass("test-divs", "bottomLeft");
new marginClass("outdiv", "100px", "left");

