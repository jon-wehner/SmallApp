document.addEventListener("DOMContentLoaded", () => {
  const appLinks = {
    'App' : "./app.html",
    'Blog' : "./blog.html",
    'Shop' : "./shop.html",
    'Note' : "./note.html",
    'Game' : "./game.html",
  };
  
  const appKeys = Object.keys(appLinks);

  const carouselButtons = document.querySelectorAll(".carouselButton");
  const leftButton = carouselButtons[0];
  const rightButton = carouselButtons[1];
  
  let carouselPointer = 0
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
  
  carouselContent.innerText = appKeys[carouselPointer];
  carouselContent.setAttribute("href", appLinks[appKeys[carouselPointer]]);
  rightButton.addEventListener("click", () => {
    rotateRight();
  });
  leftButton.addEventListener("click", () => {
    rotateLeft();
  });
});