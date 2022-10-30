/* github.com/v4r1able */
var image = document.querySelector("img[crossorigin=anonymous]");
var video = document.querySelector("video");
if(image!=undefined) {
var href = image.src;
var download = "wadownload.png";
} else if(video!=undefined) {
var href = video.src;
var download = "wadownload.mp4";
}

if(href!=null) {
var a = document.createElement("a");
a.href = href;
a.download = download;
a.click();
document.body.removeChild(a);
} else {
alert("No video or image found to download");
}