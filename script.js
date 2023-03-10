let fullImgBox=document.getElementById("fullImgBox");
let fullImg=document.getElementById("fullImg");

let openImg = (pic)=>{
    fullImgBox.style.display = "flex";
    fullImg.src=pic;
}

let closeImg=()=>{
    fullImgBox.style.display = "none";
}