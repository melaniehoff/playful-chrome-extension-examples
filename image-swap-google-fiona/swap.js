var images = [
    "https://media.giphy.com/media/l41YgOPSjVe47TTRm/giphy.gif",
    "https://media.giphy.com/media/3o7buctjKD8g5r4544/giphy.gif",
    "https://media.giphy.com/media/xUA7b2takylWgFwJYQ/giphy.gif",
    "https://media.giphy.com/media/3og0IAWqxqQ1aSwrde/giphy.gif",
    "https://media.giphy.com/media/VCma6o7KQ4H4Y/giphy.gif",
    "https://media.giphy.com/media/xT0BKEbS571e53UIDe/giphy.gif",
    "https://media.giphy.com/media/qV4Ioi4eUpvaw/giphy.gif",
    "https://media.giphy.com/media/hbB8efOHAezRK/giphy.gif",
    "https://media.giphy.com/media/26BRQjZejh2vgXPJ6/giphy.gif",
    "https://media.giphy.com/media/3o7TKxv46QYGO9ZhQY/giphy.gif",
    "https://media.giphy.com/media/l2YOlSrNnoKC15RmM/giphy.gif",
    "https://media.giphy.com/media/l3978y5HqiEtqupiM/giphy.gif",
    "https://media.giphy.com/media/5xtDarvMK3GwzmY6CVa/giphy.gif",
    "https://media.giphy.com/media/OdScEhtNTQEko/giphy.gif",
    "https://media.giphy.com/media/uvCS7HUFIUGVG/giphy.gif",
    "https://media.giphy.com/media/2bBVx7AAR9drW/giphy.gif"
];

window.onload = replaceImages;

function replaceImages() {
    for (var i in document.images) {
        var targetImage = document.images[i];
        var randomImage = images[Math.floor(Math.random() * images.length)];
        var height = targetImage.height;
        var width = targetImage.width;

        targetImage.src = randomImage;
        targetImage.height = height;
        targetImage.width = width;
    }
}
