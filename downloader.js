/* github.com/v4r1able */
var image = document.querySelector("img[crossorigin=anonymous]");
var video = document.querySelector("video");

var image = Array.isArray(image) && image[image.length - 1];
var video = Array.isArray(video) && video[video.length - 1];

let href, download;
if (image != undefined) {
  href = image.src, download = "wadownload.png";
} else if (video != undefined) {
  href = video.src, download = "wadownload.mp4";
}

if (href != null) {
  var a = document.createElement("a");
  a.href = href;
  a.download = download;
  a.click();
  document.body.removeChild(a);
} else {
  alert("No video or image found to download");
}
