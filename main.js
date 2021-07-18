var obj = document.querySelector("div.img")
var tmp = document.getElementById('seg')

var i = 1

var img = []
img[0] = new Image()

setInterval(function() {
  i += 1
  if(i > 3) {
    i = 1
  }
   load()
},10000)

function load() {
img[0].src = "assets/res/img"+i+".jpeg"
img[0].setAttribute("id", "img")
obj.appendChild(img[0])
}
load()

var seg = 10

setInterval(function() {
  seg--
   if(seg <= 0) {
     seg = 10
   }
   tmp.innerHTML = seg
},1000)