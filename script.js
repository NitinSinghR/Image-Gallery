var fullImgBox=document.getElementById("fullImgBox");
var fullImg=document.getElementById("fullImg");

let openImg = (pic)=>{
    fullImgBox.style.display = "flex";
    fullImg.src=pic;
}

let closeImg=()=>{
    fullImgBox.style.display = "none";
}