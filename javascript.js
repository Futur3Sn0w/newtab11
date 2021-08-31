const btnLeft = document.getElementById('bwLeft');
const btnRight = document.getElementById('bwRight');

const searchField = document.getElementById("searchField");

const profBtn = document.getElementById("profButton");
const profMenu = document.getElementById("profMenu");
const profIcn = document.getElementById("profIconBtn");

const settingsBtn = document.getElementById("settingsBtn");
const settingsBtn2 = document.getElementById("settingsBtn2");
const settingsPane = document.getElementById("settingsPanel");
const settingsBackdrop = document.getElementById("spBackdrop");
const settingsWindow = document.getElementById("spWindow");

const piSubt = document.getElementById("spwcsSubtitle");

const spotlight = document.getElementById("csImage");

var unsplashTags = "water landscape"

btnRight.onclick = function () {
    document.getElementById('boardwalk').scrollLeft += 230;
};

btnLeft.onclick = function () {
    document.getElementById('boardwalk').scrollLeft -= 230;
};

profBtn.onclick = function showHideProfMenu() {
    if (profMenu.style.transform = "scale(0)") {
        profMenu.style.transform = "scale(1)";
        profMenu.style.opacity = "1";
    } else {
        profMenu.style.transform = "scale(0)";
        profMenu.style.opacity = "0";
    }
}

profBtn.onmousedown = function () {
    profIcn.style.transform = "scale(.9)";
}

profBtn.onmouseup = function () {
    profIcn.style.transform = "scale(1)";
}

window.addEventListener('mouseup', function (e) {
    var x = document.querySelector('#profMenu');
    if (event.target != document.querySelector(".profile")) {
        x.style.transform = "scale(0)";
        x.style.opacity = "0";
    }
});

$(document).ready(function () {
    $("#searchField").on('keydown', function (e) {
        if ((e.keyCode == 9) && (!e.shiftKey)) {
            $(":tabbable").last().focus();
        }
    });
});

settingsBtn.onclick = function () {
    settingsPane.style.zIndex = 50;
    settingsWindow.style.transform = "scale(1)";
    settingsWindow.style.opacity = "1";
    settingsBackdrop.style.opacity = "1";
}

settingsBtn2.onclick = function () {
    settingsPane.style.zIndex = 50;
    settingsWindow.style.transform = "scale(1)";
    settingsWindow.style.opacity = "1";
    settingsBackdrop.style.opacity = "1";
}

function closeSettings() {
    settingsWindow.style.transform = "scale(.8)";
    settingsWindow.style.opacity = "0"
    settingsBackdrop.style.opacity = "0";
    settingsPane.style.zIndex = -50;

    piSubt.style.opacity = "0";

    menuName.innerHTML = localStorage['piName'];
    menuEmail.innerHTML = localStorage['piEmail'];
}

// Reveal Effect Area Control

const circle = document.getElementById("reArea");

const onMouseMove = (e) =>{
    circle.style.left = e.pageX + 'px';
    circle.style.top = e.pageY + 'px';
  }

document.addEventListener('mousemove', onMouseMove);

spotlight.onmouseleave = function () {
    circle.style.opacity = "0";
}

spotlight.onmouseenter = function () {
    circle.style.opacity = "1";
}

// Settings control
let root = document.documentElement;
const piTB1 = document.getElementById("piTBName");
const piTB2 = document.getElementById("piTBEmail");
const menuName = document.getElementById("ptName");
const menuEmail = document.getElementById("ptEmail");

function getColor(element) {
    var bgColor = $(element).css('background-color');
    root.style.setProperty('--accent-color-1', bgColor);
    localStorage['accentColor'] = bgColor;
}

function OnLoad(){
    root.style.setProperty('--accent-color-1', localStorage['accentColor']);

    menuName.innerHTML = localStorage['piName'];
    menuEmail.innerHTML = localStorage['piEmail'];

    piTB1.value = localStorage['piName'];
    piTB2.value = localStorage['piEmail'];
}

piTB1.onkeyup = function () {
    piSubt.style.opacity = "1";
    localStorage['piName'] = piTB1.value;

    menuName.innerHTML = localStorage['piName'];
}

piTB2.onkeyup = function () {
    piSubt.style.opacity = "1";
    localStorage['piEmail'] = piTB2.value;

    menuEmail.innerHTML = localStorage['piEmail'];
}

//#region spotlight orange

function siCheckRadios() {
    if (document.getElementById("siUnsplash").checked == true) {
        document.getElementById("siUnsplashTags").classList.remove("hidden");
        localStorage.setItem('spotlight', 'unsplash');
        updateSpotlight("unsplash");
    } else {
        document.getElementById("siUnsplashTags").classList.add("hidden");
    }

    if (document.getElementById("siWindows").checked == true) {
        localStorage.setItem('spotlight', 'windows');
        updateSpotlight("windows");
    }

    if (document.getElementById("siCustom").checked == true) {
        localStorage.setItem('spotlight', 'custom');
        updateSpotlight("custom");
    }
}

function updateSpotlight(type = "unsplash") {
    if (type == "unsplash") {
        var daily = "https://source.unsplash.com/1280x720/daily/?" + unsplashTags;
        setBackgroundImage(daily);
    }
    if (type == "custom") {
        setBackgroundImage("https://i1.sndcdn.com/visuals-000068454168-UmsdHM-original.jpg");
    }
    if (type == "windows") {
        rightnow = Date.now();

        apiUrl = "https://hubza.co.uk/pub/apis/windows_spotlight.php";
        $.getJSON(apiUrl, function (data) {
            setBackgroundImage(data['ad']['image_fullscreen_001_landscape']['u'])
        });
    }
}

function setBackgroundImage(url) {
    document.getElementById("csImage").style =
        `background: linear-gradient(146deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 36%), url("` + url + `") center/cover no-repeat var(--page-background)`;
}

$('#siUnsplashTags').on('blur', function () {
    unsplashTags = document.getElementById("siUnsplashTags").value;
    localStorage.setItem('unsplashTags', unsplashTags);
    updateSpotlight("unsplash");
});

//#endregion



//#region loadLocalStorage yellow

{
    if (localStorage.getItem("spotlight") == "unsplash") {
        document.getElementById("siUnsplash").checked = true;
        document.getElementById("siUnsplashTags").classList.remove("hidden");
        document.getElementById("siUnsplashTags").value = localStorage.getItem("unsplashTags");
        unsplashTags = localStorage.getItem("unsplashTags");
        updateSpotlight("unsplash");
    }

    else if (localStorage.getItem("spotlight") == "custom") {
        document.getElementById("siCustom").checked = true;
        updateSpotlight("custom");
    }

    else if (localStorage.getItem("spotlight") == "windows") {
        document.getElementById("siWindows").checked = true;
        updateSpotlight("windows");
    }

    else {
        document.getElementById("siCustom").checked = true;
        siCheckRadios();
        updateSpotlight();
    }
}

//#endregion