document.addEventListener("DOMContentLoaded", () => {
  const appLinks = {
    'Small App' : "./app.html",
    'Small Blog' : "./blog.html",
    'Small Shop' : "./shop.html",
    'Small Note' : "./note.html",
    'Small Game' : "./game.html",
  };
  
  const appKeys = Object.keys(appLinks);

  const carouselButtons = document.querySelectorAll(".carouselButton");
  const leftButton = carouselButtons[0];
  const rightButton = carouselButtons[1];
  
  let carouselPointer = 0
  const carouselContent = document.querySelector(".carouselContent");  
  
  carouselContent.innerText = appKeys[carouselPointer];
  carouselContent.setAttribute("href", appLinks[appKeys[carouselPointer]]);
  rightButton.addEventListener("click", () => {
    if(carouselPointer < appKeys.length - 1) {
      carouselPointer += 1;
      carouselContent.innerText = appKeys[carouselPointer];
      carouselContent.setAttribute("href", appLinks[appKeys[carouselPointer]]);
    };
  });
  leftButton.addEventListener("click", () => {
    if (carouselPointer > 0) {
      carouselPointer -= 1
      carouselContent.innerText = appKeys[carouselPointer];
      carouselContent.setAttribute("href", appLinks[appKeys[carouselPointer]]);
    }
  });
});