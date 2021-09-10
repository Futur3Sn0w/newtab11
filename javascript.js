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
const settingsCloseBtn = document.getElementById("spCloseBtn");
const settingsWindow = document.getElementById("spWindow");

const newTileBtn = document.getElementById("newTileBtn");
const newTileWindow = document.getElementById("spWindowNT");
const newTileUpdBtn = document.getElementById("ntUpdPrev");
const newTileWindowClose = document.getElementById("ntWindowClose");
const newTileCancelBtn = document.getElementById("ntCancelAdd");

const piSubt = document.getElementById("spwcsSubtitle");

const spotlight = document.getElementById("csImage");

var unsplashTags = "water landscape"

// Scrolling buttons

btnRight.onclick = function () {
    document.getElementById('boardwalk').scrollLeft += 230;
};

btnLeft.onclick = function () {
    document.getElementById('boardwalk').scrollLeft -= 230;
};

// Profile menu functions

profBtn.onclick = function () {
    if (profMenu.style.transform = "scale(0)") {
        profMenu.style.transform = "scale(1)";
        profMenu.style.opacity = "1";
    } else {
        profMenu.style.transform = "scale(0)";
        profMenu.style.opacity = "0";
    }
}

function showHideProfMenu() {
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

// Profile Menu Buttons

settingsBtn.onclick = function () {
    settingsPane.style.zIndex = 50;
    settingsWindow.style.transform = "scale(1)";
    settingsWindow.style.opacity = "1";
    settingsWindow.style.zIndex = "51";
    settingsBackdrop.style.opacity = "1";

    newTileWindow.style.transform = "scale(.8)";
    newTileWindow.style.opacity = "0";
    newTileWindow.style.zIndex = "50";

    showHideProfMenu();
}

settingsBtn2.onclick = function () {
    settingsPane.style.zIndex = 50;
    settingsWindow.style.transform = "scale(1)";
    settingsWindow.style.opacity = "1";
    settingsWindow.style.zIndex = "51";
    settingsBackdrop.style.opacity = "1";

    newTileWindow.style.transform = "scale(.8)";
    newTileWindow.style.opacity = "0";
    newTileWindow.style.zIndex = "50";

    showHideProfMenu();
}

newTileBtn.onclick = function () {
    settingsPane.style.zIndex = 50;
    newTileWindow.style.transform = "scale(1)";
    newTileWindow.style.opacity = "1";
    newTileWindow.style.zIndex = "51";

    settingsWindow.style.zIndex = "50";
    settingsBackdrop.style.opacity = "1";
    settingsWindow.style.transform = "scale(.8)";
    settingsWindow.style.opacity = "0"

    showHideProfMenu();
}

// Closing things

function closeSettings() {
    settingsWindow.style.transform = "scale(.8)";
    settingsWindow.style.opacity = "0"
    settingsBackdrop.style.opacity = "0";
    settingsPane.style.zIndex = -50;

    newTileWindow.style.transform = "scale(.8)";
    newTileWindow.style.opacity = "0";

    prevIcon.src = "https://besticon-demo.herokuapp.com/icon?url=google.com&size=80..120..200";
    prevIconBlur.src = "https://besticon-demo.herokuapp.com/icon?url=google.com&size=80..120..200";
    ntNameBox.value = "";
    ntURLBox.value = "";

    piSubt.style.opacity = "0";

    menuName.innerHTML = localStorage['piName'];
    menuEmail.innerHTML = localStorage['piEmail'];
}

settingsCloseBtn.onclick = function () {
    closeSettings();
}

settingsBackdrop.onclick = function () {
    closeSettings();
}

newTileWindowClose.onclick = function () {
    closeSettings();
}

newTileCancelBtn.onclick = function () {
    closeSettings();
}

// Searchbar Functions

searchField.onkeydown = function () {
if (event.keyCode == 13 || event.which == 13) { 
    location='http://www.google.com/search?q=' + encodeURIComponent(document.getElementById('searchField').value);
}
}

searchField.onfocus = function () {
    typeof globalThis;
    this.placeholder = '';
}

searchField.onblur = function () {
    typeof globalThis;
    this.placeholder = 'Search the web';
}

// Tile Preview Functions

const newTileURLBox = document.getElementById("ntURL");

newTileURLBox.onkeydown = function () {
    if (event.keyCode == 13 || event.which == 13) {
        updateNewTilePrev();
    }
}

newTileUpdBtn.onclick = function () {
    updateNewTilePrev();
}

// checkRadios functions

const siUnsplash = document.getElementById("siUnsplash");
const siWindows = document.getElementById("siWindows");
const siCustom = document.getElementById("siCustom");

siUnsplash.onchange = function () {
    siCheckRadios();
}

siWindows.onchange = function () {
    siCheckRadios();
}

siCustom.onchange = function () {
    siCheckRadios();
}

// Accent colors (this is gonna suck a$$)

const ac7 = document.getElementById("acCheckbox7");
const ac6 = document.getElementById("acCheckbox6");
const ac5 = document.getElementById("acCheckbox5");
const ac4 = document.getElementById("acCheckbox4");
const ac3 = document.getElementById("acCheckbox3");
const ac2 = document.getElementById("acCheckbox2");
const ac1 = document.getElementById("acCheckbox1");

ac1.onclick = function () {
    typeof globalThis;
    getColor(this);
}

ac2.onclick = function () {
    typeof globalThis;
    getColor(this);
}

ac3.onclick = function () {
    typeof globalThis;
    getColor(this);
}

ac4.onclick = function () {
    typeof globalThis;
    getColor(this);
}

ac5.onclick = function () {
    typeof globalThis;
    getColor(this);
}

ac6.onclick = function () {
    typeof globalThis;
    getColor(this);
}

ac7.onclick = function () {
    typeof globalThis;
    getColor(this);
}

// Upload+Save User Image

const navProfIcon = document.getElementById("profIconBtn");
const menuProfIcon = document.getElementById("pmamProfIcon");

document.getElementById('avatarUpload').addEventListener('change', (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      // convert file to base64 String
      const base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
      // store file
      localStorage.setItem('userImage', base64String);
      // display image
      navProfIcon.style.backgroundImage = `url(data:image/png;base64,${base64String})`;
      menuProfIcon.style.backgroundImage = `url(data:image/png;base64,${base64String})`;
    };
    reader.readAsDataURL(file);
});

    navProfIcon.style.backgroundImage = `url(data:image/png;base64,${localStorage['userImage']})`;
    menuProfIcon.style.backgroundImage = `url(data:image/png;base64,${localStorage['userImage']})`;

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

root.style.setProperty('--accent-color-1', localStorage['accentColor']);

menuName.innerHTML = localStorage['piName'];
menuEmail.innerHTML = localStorage['piEmail'];

piTB1.value = localStorage['piName'];
piTB2.value = localStorage['piEmail'];

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

// New Tile .... stuff

const newTilePrev = document.getElementById("newTilePreview");
const ntNameBox = document.getElementById("ntName");
const ntURLBox = document.getElementById("ntURL");

const prevIcon = document.getElementById("chbPrevIcn");
const prevIconBlur = document.getElementById("chbPrevIcnBlur");

function updateNewTilePrev() {
    newTilePrev.setAttribute("data-chbtSiteName", ntNameBox.value);
    prevIcon.src = "https://besticon-demo.herokuapp.com/icon?url=" + ntURLBox.value + "&size=48..120..128";
    prevIconBlur.src = "https://besticon-demo.herokuapp.com/icon?url=" + ntURLBox.value + "&size=48..120..128";
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