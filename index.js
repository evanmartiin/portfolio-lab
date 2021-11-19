var creations = ['lines', 'laser', 'lifecounter', 'wools'];

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
    if (document.readyState === "complete") {
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
}

function info(status) {
    if (status === 'on') {
        var infoDOM = document.getElementsByClassName('info-blob')[0];
        var buttonDOM = document.getElementsByClassName('info')[0];
        buttonDOM.style.display = 'none';
        infoDOM.style.transition = '4s';
        infoDOM.style.width = '1000vw';
        infoDOM.style.height = '1000vh';
        infoDOM.style.top = '-400vh';
        infoDOM.style.right = '-400vw';
        var infoContent = document.getElementsByClassName('info-content')[0];
        infoContent.style.opacity = '1';
        infoContent.style.pointerEvents = 'all';
    } else if (status === 'off') {
        var infoDOM = document.getElementsByClassName('info-blob')[0];
        var buttonDOM = document.getElementsByClassName('info')[0];
        buttonDOM.style.display = 'flex';
        infoDOM.style.transition = '1s';
        infoDOM.style.width = '0vw';
        infoDOM.style.height = '0vh';
        infoDOM.style.top = '35px';
        infoDOM.style.right = '45px';
        var infoContent = document.getElementsByClassName('info-content')[0];
        infoContent.style.opacity = '0';
        infoContent.style.pointerEvents = 'none';
    }
}