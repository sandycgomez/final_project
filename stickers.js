var namespace = "http://www.w3.org/2000/svg"
var Stampcanvas = document.getElementById("StampcanvasID")
var Stampblackclick = "false"
var Stampredclick = "true"
var Stampimage = "http://cdn.visitlongbeach.com/CMS/1592/credit_long_beach_convention__visitors_bureau-queenmary__hero.jpg"
var mousedown = false
var Stampheight = 100
var Stampwidth = 100
function Stampdownclick(){
  mousedown = true
}
function Stampupclick(){
  mousedown = false
}
function StampshowCoords(event) {
  if (mousedown == true){
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
   var img = makeImage("StampcanvasID", Stampimage, x, y, Stampwidth, Stampheight, 1)
  }
}

function  mary(){
Stampimage = "http://cdn.visitlongbeach.com/CMS/1592/credit_long_beach_convention__visitors_bureau-queenmary__hero.jpg"
}
function  view(){
Stampimage = "https://homesmart.com/u/hs0051/headerimages/hd_68_1457724867.jpg"
}





function makeImage(canvasID, url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)

  var canvas = document.getElementById(canvasID)
  canvas.appendChild(image)
  return image
}
