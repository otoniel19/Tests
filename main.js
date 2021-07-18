var obj = document.querySelector("div.img")
var tmp = document.querySelector('p#seg')

//numeraçao da img
var i = 1

//slider
var volta1 = document.getElementsByClassName("btn")[0].addEventListener('click', function() {
  setTimeout(function() {
    i--
   load()
  },)
})
var ir1 = document.getElementsByClassName("btn")[1].addEventListener('click', function() {
 setTimeout(function() {
     i++
      load()
 },) 
})

//serve pra não bugar
var adjust = setInterval(function() {
  if(i > 3) {
    i = 1
     load()
  } else if(i <= 0) {
    i = 1
     load()
  }
},)

//imagem
var img = []
img[0] = new Image()

setInterval(function() {
  i++
  load()
},10000)

function load() {
img[0].src = "assets/res/img"+i+".jpeg"
img[0].setAttribute("id", "img")
obj.appendChild(img[0])
}

//conta o tempo que falta pra trocar
var seg = 10

setInterval(function() {
  seg--
   if(seg <= 0) {
     seg = 10
   }
   tmp.innerHTML = seg
},1000)

//carrega a imagem pela primeira vez
window.addEventListener('load', load)