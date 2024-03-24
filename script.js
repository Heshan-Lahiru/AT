let hamburIcon = document.getElementById("hamburIcon");
let asideMenu = document.getElementById("navbarSupportedContent");

let menuClicked = false;

hamburIcon?.addEventListener("click", () => {
  menuClicked = !menuClicked;

  if (!menuClicked) {
    asideMenu.style.display = "none";
  } else {
    asideMenu.style.display = "flex";
    asideMenu.style.alignItems = "center";
    asideMenu.style.justifyContent = "center";
  }
});
//=============================================================================================
window.addEventListener("resize", function() {
  const com = document.querySelector("com");
  const element = document.querySelector(".col-12.col-lg-6");
  const isSmallScreen = window.innerWidth <= 770;

  if (isSmallScreen) {
    element.style.textAlign = "center"; 
    com.style.textAlign = "center"; 
  } else {
    element.style.textAlign = ""; 
  }
});

window.addEventListener("load", function() {
  window.dispatchEvent(new Event("resize"));
});
//=======================================================================================searchbar
function swapPositions() {
  const screenWidth = window.innerWidth;
  const searchbar = document.getElementById('searchbar');
  const digitalStrategyText = document.getElementById('digitalStrategyText');
  const parentContainer = digitalStrategyText.closest('.row');

  if (screenWidth <= 770) {
    
    parentContainer.insertBefore(searchbar, digitalStrategyText);
    digitalStrategyText.style.textAlign = "center"; 
    searchbar.style.textAlign = "center"; 
  } else {
    
    parentContainer.insertBefore(searchbar, digitalStrategyText.nextSibling);
    digitalStrategyText.style.textAlign = ""; 
  }
}


window.addEventListener('resize', function() {
  swapPositions();
});

window.addEventListener('load', function() {
  swapPositions();
});

     //==========================================================================================head image and text down and hide
     window.addEventListener('resize', function() {
  swapPositions();
  adjustTextContainers();
});

window.addEventListener('load', function() {
  swapPositions();
  adjustTextContainers();
});

function adjustTextContainers() {
  const screenWidth = window.innerWidth;
  const textContainer = document.querySelector('.text-container');
  const textContainerTwo = document.querySelector('.text-container-two');

  if (screenWidth <= 800) {
    textContainer.style.display = 'none';
    textContainerTwo.style.display = 'block';
  } else {
    textContainer.style.display = 'block';
    textContainerTwo.style.display = 'none';
  }
}

 //==========================================================================================footer
 

 window.addEventListener('resize', function() {
  adjustDivPositions();
});

window.addEventListener('load', function() {
  adjustDivPositions();
});

function adjustDivPositions() {
  const screenWidth = window.innerWidth;
  const container = document.querySelector('.footer .row'); // Adjust selector if needed
  const ourTechnologiesDiv = container.querySelector('.col-md-4.row.align-items-right:nth-child(1)'); // Adjust selector if needed
  const ourServicesDiv = container.querySelector('.col-md-4.row.align-items-right:nth-child(2)'); // Adjust selector if needed

  if (screenWidth <= 725) {
    container.classList.add('horizontal-layout'); // Add a class for horizontal layout
    ourTechnologiesDiv.style.display = 'inline-block'; // Use inline-block for horizontal layout
    ourServicesDiv.style.display = 'inline-block';
    ourTechnologiesDiv.style.width = '25%'; // Adjust width as needed
    ourServicesDiv.style.width = '15%'; // Adjust width as needed
  } else {
    container.classList.remove('horizontal-layout'); // Remove class for normal layout
    ourTechnologiesDiv.style.display = '';
    ourServicesDiv.style.display = '';
    ourTechnologiesDiv.style.width = '';
    ourServicesDiv.style.width = '';
  }
}
//=============================================================================================================


