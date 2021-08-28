const btnLeft = document.getElementById('bwLeft');
const btnRight = document.getElementById('bwRight');
const searchField = document.getElementById("searchField");

btnRight.onclick = function () {
    document.getElementById('boardwalk').scrollLeft += 230;
};

btnLeft.onclick = function () {
    document.getElementById('boardwalk').scrollLeft -= 230;
};

searchField.onclick = function () {
    $("#MyLastElement").on('keydown', function (e) {
        if((e.keyCode==9)&&(!e.shiftKey)) {
           $(":tabbable").last().focus();
        }
      });
}