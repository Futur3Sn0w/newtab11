const btnLeft = document.getElementById('bwLeft');
const btnRight = document.getElementById('bwRight');

const searchField = document.getElementById("searchField");

const profBtn = document.getElementById("profButton");
const profMenu = document.getElementById("profMenu");
const profIcn = document.getElementById("profIconBtn");

const settingsBtn = document.getElementById("settingsBtn");
const settingsPane = document.getElementById("settingsPanel");
const settingsBackdrop = document.getElementById("spBackdrop");
const settingsWindow = document.getElementById("spWindow");

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

function closeSettings() {
    settingsWindow.style.transform = "scale(.8)";
    settingsWindow.style.opacity = "0"
    settingsBackdrop.style.opacity = "0";
    settingsPane.style.zIndex = -50;
}

//#region spotlight green

function siCheckRadios() {
    if (document.getElementById("siUnsplash").checked == true) {
        document.getElementById("siUnsplashTags").classList.remove("hidden");
        localStorage.setItem('spotlight', 'unsplash');
        updateSpotlight("unsplash");
    } else {
        document.getElementById("siUnsplashTags").classList.add("hidden");
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
}

function setBackgroundImage(url) {
    document.getElementById("csImage").style =
        `background: linear-gradient(146deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 36%), url("` + url + `") center/cover no-repeat white`;
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

    else {
        document.getElementById("siCustom").checked = true;
        siCheckRadios();
        updateSpotlight();
    }

    siCheckRadios();
}

//#endregion