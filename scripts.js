
function light(sw) {
  var pic;
  if (sw == 0) {
    pic = "img/pic_bulboff1.gif"
  } else {
    pic = "img/pic_bulbon.gif"
  }
  document.getElementById('myImage').src = pic;
}