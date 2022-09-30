function randompickerbtn() {
    let hexColor="";
    let store= "ABCDEF0123456789"
    for (let index = 0; index < 6; index++) {
        hexColor= hexColor+ store[Math.floor(Math.random()*store.length)];
    }
    document.getElementById("randomValuePara").textContent= `#${hexColor}`;
}


function hexFindbtn() {
    let hexInput = document.getElementById("hexInput").value;
    document.getElementById("color-box").style.backgroundColor = `${hexInput}`;
}

function RGBFindbtn() {
 let red= document.getElementById("RInput").value;
 let green= document.getElementById("GInput").value;
 let blue= document.getElementById("BInput").value;

 document.getElementById("rgb-color-box").style.backgroundColor= `rgb(${red},${green},${blue})`;
}

function RangeSelector() {

    let redColor = document.getElementById("RrInput").value;
    let greenColor = document.getElementById("GrInput").value;
    let blueColor = document.getElementById("BrInput").value;

    document.getElementById("range-color-box").textContent = `rgb(${redColor},${greenColor},${blueColor})`;
}

// hex to rgb converter

String.prototype.convertToRGB = function () {
    if (this.length == 6) {
        let red = this.slice(0, 2);
        let green = this.slice(2, 4);
        let blue = this.slice(4, 6);

        let rgb = [
            parseInt(red, 16),
            parseInt(green, 16),
            parseInt(blue, 16),
        ];
        return rgb;
    } else {
        return "Only 6 digits hex colors are allowed";
    }

};

function hexConvbtn() {
    document.getElementById("hexCOut").textContent = `rgb(${document.getElementById("hexCInp").value.convertToRGB()})`;
}

function rgbConvbtn() {
    let red = Number(document.getElementById("RCInput").value);
    let green = Number(document.getElementById("GCInput").value);
    let blue = Number(document.getElementById("BCInput").value);
    let hexRed = red.toString(16);
    let hexGreen = green.toString(16);
    let hexBlue = blue.toString(16);

    hexRed.length < 2 ? hexRed = "0" + hexRed : hexRed;
    hexGreen.length < 2 ? hexGreen = "0" + hexGreen : hexGreen;
    hexBlue.length < 2 ? hexBlue = "0" + hexBlue : hexBlue;

    if ((hexRed + hexGreen + hexBlue).length == 6) {
        return document.getElementById("rgbCOut").textContent = `#${hexRed}${hexGreen}${hexBlue}`
    }
}
