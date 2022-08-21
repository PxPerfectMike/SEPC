class bgColorClass {
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

class marginAndPaddingClass {
    constructor(element, margin, padding) {
        this.element = element;
        this.margin = margin;
        this.padding = padding;
        const elements = document.getElementsByClassName(element);
        for (const element of elements) {
            element.style.margin = margin;
            element.style.padding = padding;
        }
    }
}

class radiusClass {
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

new bgColorClass("div1", "purple");
new colorClass("div1", "orange");
new dimensionClass("div1", "300px", "200px");
new marginAndPaddingClass("div1", "10px", "5px");
new radiusClass("div1", "10px");
new borderClass("div1", "10px", "solid", "black");
new textAlignClass("div1", "right");