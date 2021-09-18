document.addEventListener("DOMContentLoaded", () => {
  const appLinks = {
    'app' : "./app.html",
    'blog' : "./blog.html",
    'shop' : "./shop.html",
    'note' : "./note.html",
    'game' : "./game.html",
  };
  
  const appKeys = Object.keys(appLinks);

  const carouselButtons = document.querySelectorAll(".carouselButton");
  const leftButton = carouselButtons[0];
  const rightButton = carouselButtons[1];  

  const carouselContent = document.querySelector(".carouselContent");
  
  const rotateRight = () => {
    appKeys.push(appKeys.shift());
    carouselContent.innerText = appKeys[0];
    carouselContent.setAttribute("href", appLinks[appKeys[0]]);
  };

  const rotateLeft = () => {
    appKeys.unshift(appKeys.pop());
    carouselContent.innerText = appKeys[0];
    carouselContent.setAttribute("href", appLinks[appKeys[0]]);
  }
  
  carouselContent.innerText = appKeys[0];
  carouselContent.setAttribute("href", appLinks[appKeys[0]]);
  rightButton.addEventListener("click", () => {
    rotateRight();
  });
  leftButton.addEventListener("click", () => {
    rotateLeft();
  });
});