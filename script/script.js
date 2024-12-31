const imageArray =["../img/GOODNESS AWARD.png","../img/joe.png","../img/chioma2.png","../img/gold.png","../img/pro2.jpeg", "../img/pro1.jpeg",]
img_slide = document.querySelector("#img_slide")
let imgIndex=0;
function slideShow() {
    img_slide.setAttribute("src", imageArray[imgIndex]);
    imgIndex++
    if (imgIndex >= imageArray.length) {
         imgIndex=0;
    }
}
setInterval(slideShow, 3000)

let colorArrays =["cycan","blue","green","red","pink","rgb(196, 60, 11)"]
function disColour() {
    let randColor= colorArrays[Math.floor(Math.random()*colorArrays.length)]
    document.getElementById("pick").style.color = randColor
    document.getElementById("delight").style.color = randColor
}
setInterval(disColour, 300)


let queStore =[]
function appendToDisplay(input) {
    queStore.push(input.value)
}