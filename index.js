document.addEventListener("DOMContentLoaded", () => {
  const appLinks = {
    'app' : "./app.html",
    'blog' : "./blog.html",
    'shop' : "./shop.html",
    'note' : "./note.html",
    'game' : "./game.html",
    'recycle bin' : "./dumpster.html"
  };
  
  const appKeys = Object.keys(appLinks);

  const carouselButtons = document.querySelectorAll(".carouselButton");
  const leftButton = carouselButtons[0];
  const rightButton = carouselButtons[1];  

  const body = document.querySelector('body');
  const carouselContent = document.querySelector(".carouselContent");  

  const toggleDarkMode = (key) => {
    if (key === 'recycle bin') {
      body.classList.add("dark");
      carouselContent.classList.add("dark");
    } else {
      body.classList.remove("dark");
      carouselContent.classList.remove("dark");
    }
  }

  const rotateRight = () => {
    appKeys.push(appKeys.shift());
    toggleDarkMode(appKeys[0]);    
    carouselContent.innerText = appKeys[0];
    carouselContent.setAttribute("href", appLinks[appKeys[0]]);
  };

  const rotateLeft = () => {
    appKeys.unshift(appKeys.pop());
    toggleDarkMode(appKeys[0]); 
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