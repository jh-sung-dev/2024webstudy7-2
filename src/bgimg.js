const myBodyImageStyle = document.body.style;

const url = [
  "https://wallpapers.com/images/high/blank-and-white-boba-fett-darth-vader-suits-ziji7ygpfu5qw93c.webp",
  "https://wallpapers.com/downloads/high/star-wars-characters-urbokjpr43u74afv.webp",
  "https://wallpapers.com/downloads/high/star-wars-landscape-2400-x-1350-w2egd3et23c7muxx.webp",
  "https://wallpapers.com/downloads/high/dark-gray-darth-vader-mu6ziy6mbes0jl95.webp",
  "https://wallpapers.com/downloads/high/star-wars-3440x1440-2uf5to0h0yrjwcdy.webp"
];

function updateBGImage() {
  myBodyImageStyle.backgroundImage = `url('${url[Math.floor(Math.random() * url.length)]}')`;
  myBodyImageStyle.backgroundSize = "cover";
  myBodyImageStyle.backgroundRepeat = "no-repeat";
  myBodyImageStyle.backgroundPosition = "center";
}

updateBGImage();

setInterval(updateBGImage, 10000);