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

window.addEventListener('mouseup', function(e) {
    var x = document.querySelector('#profMenu');
    if (event.target != document.querySelector(".profile")) {
        x.style.transform = "scale(0)";
        x.style.opacity = "0";
    }
});

$(document).ready(function() {
$("#searchField").on('keydown', function (e) {
    if((e.keyCode==9)&&(!e.shiftKey)) {
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