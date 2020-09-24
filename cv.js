function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
  }




//side panel
function openNav() {
  document.getElementById("mySidepanel").style.width = "30%";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}