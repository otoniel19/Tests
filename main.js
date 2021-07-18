var obj = document.querySelector("div.img")

var px = 100

var pc = 10

//numeraçao da img
var i = 1

//slider
var volta1 = document.getElementsByClassName("btn")[0].addEventListener('click', function() {
  setTimeout(function() {
    i--
   load()
    px = 100
     pc = 10
  },)
})
var ir1 = document.getElementsByClassName("btn")[1].addEventListener('click', function() {
 setTimeout(function() {
     i++
      load()
       px = 100
        pc = 10
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
  px += 30
  pc += 9
   if(seg <= 0) {
     seg = 10
   }
   
  setTimeout(function () {
    if(seg === 10) {
      px = 100
    }
  },300)
  
 setTimeout(function() {
  if(pc === 100) {
    pc = 10
  }
 },100)
 
},1000)

//carrega a imagem pela primeira vez
window.addEventListener('load', load)

let loadBar = document.getElementById("load")

executeLoad()
function executeLoad() {
  loadBar.style.width = px+"px"
    loadBar.innerHTML = pc+"%"
    requestAnimationFrame(executeLoad)
    
}