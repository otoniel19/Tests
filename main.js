var obj = document.querySelector("div.img")

var i = 1

var imagens = []

imagens[0] = new Image()
imagens[0].src = "assets/res/img"+i+".jpeg"
imagens[0].setAttribute("id", "img")

obj.appendChild(imagens[0])

