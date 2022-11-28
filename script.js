const imgElem = document.getElementById("slideshow");
let slideCalls = 0;

function imageSlideshow() {
    const images = ["devScreens-0.png", "devScreens-1.png","devScreens-2.png","devScreens-3.png"];
    const newSrc = "";

    if (slideCalls > 13) {
        clearInterval(slideTimer);
    } else {
        imgElem.src = getNextImgSrc(imgElem);
    }

    slideCalls += 1;
}

function getNextImgSrc(imgElem) {
    const slideNum = parseInt(imgElem.src.match(/(\d)\.png/)[1]);
    let newSrc = "./images/devScreens-";

    if (slideNum < 3) {
        newSrc += `${slideNum + 1}.png`;
    }

    if (slideNum === 3) {
        newSrc = "./images/devScreens-0.png";
    }

    return newSrc;
}

const slideTimer = setInterval(imageSlideshow, 4000);