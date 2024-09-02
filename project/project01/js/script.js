document.getElementById("Tab1").style.display = "block";

function openTab(event, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    document.getElementById(tabName).style.display = "block";
}
function searchAddress() {

    var address = document.getElementById("addressInput").value;

    console.log("입력된 주소:", address);
}


