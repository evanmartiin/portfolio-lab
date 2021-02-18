var creations = ['lines', 'laser'];

function randomCreation() {
    window.open('/' + creations[Math.floor(Math.random() * creations.length)], '_blank');
}





var backgroundDOM;
var testBox;
var testBoxArray = [];
var testBoxArrayCounter = 1;
var power = 5;

function start() {
    backgroundDOM = document.getElementsByClassName('background')[0]
    testBox = document.getElementsByClassName('test')[0];
    testBox.style.left = Math.floor(Math.random() * 100) + 'vw';
    testBoxArray[0] = testBox;
    createBox();
}

function createBox() {
    if (document.visibilityState == "visible") {
        testBoxArray[testBoxArrayCounter] = backgroundDOM.appendChild(testBox.cloneNode());
        testBoxArray[testBoxArrayCounter].style.left = Math.floor(Math.random() * 100) + 'vw';
        window.setTimeout(function() {
            if((testBoxArrayCounter - power * 10) >= 0)
                testBoxArray[testBoxArrayCounter - power * 10].remove();
        }, 9000);
        testBoxArrayCounter++;
    } else {
        for (var i = 0; i < testBoxArrayCounter; i++) {
            testBoxArray[i].remove();
        }
    }

    window.setTimeout(function() {
        createBox();
    }, 1000/power);
}

onmousemove = e => {
    for (var i = 0; i < testBoxArrayCounter; i+=4) {
        testBoxArray[i].style.marginLeft = -(e.clientX - (window.innerWidth/2))/20 + 'px';
        testBoxArray[i].style.marginTop = -(e.clientY - (window.innerHeight/2))/20 + 'px';
    }
    for (var i = 1; i < testBoxArrayCounter; i+=4) {
        testBoxArray[i].style.marginLeft = -(e.clientX - (window.innerWidth/2))/40 + 'px';
        testBoxArray[i].style.marginTop = -(e.clientY - (window.innerHeight/2))/40 + 'px';
    }
    for (var i = 2; i < testBoxArrayCounter; i+=4) {
        testBoxArray[i].style.marginLeft = -(e.clientX - (window.innerWidth/2))/50 + 'px';
        testBoxArray[i].style.marginTop = -(e.clientY - (window.innerHeight/2))/50 + 'px';
    }
    for (var i = 3; i < testBoxArrayCounter; i+=4) {
        testBoxArray[i].style.marginLeft = -(e.clientX - (window.innerWidth/2))/70 + 'px';
        testBoxArray[i].style.marginTop = -(e.clientY - (window.innerHeight/2))/70 + 'px';
    }
}