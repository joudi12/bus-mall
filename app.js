'use strict';
var Products = [];
var firstImageElement = document.getElementById('imag1');
var secoundImageElement = document.getElementById('imag2');
var thirdImageElement = document.getElementById('imag3');
var imagesSection = document.getElementById('imagsection');

var currentfirstImage;
var currentsecoundImage;
var currentthirsImage;

var totalClicks = 0;
var numberOfRounds = 25;
var currentArry =[0,0,0];

var result = document.getElementById('finalResult');
function Product(proudactName, link) {
  this. proudactName = proudactName;
  this.link = link;
  this.vote = 0;
  this.timedisplay = 0;
  Products.push(this);
}

new Product('bag', 'img/bag.jpg');
new Product('banana', 'img/banana.jpg');
new Product('bathrom', 'img/bathroom.jpg');
new Product('boots', 'img/boots.jpg');
new Product('breakfast', 'img/breakfast.jpg');
new Product('bubblegum', 'img/bubblegum.jpg');
new Product('chair', 'img/chair.jpg');
new Product('cthulhu', 'img/cthulhu.jpg');
new Product('dog-duck', 'img/dog-duck.jpg');
new Product('dragon', 'img/dragon.jpg');
new Product('pen', 'img/pen.jpg');
new Product('pet-sweep', 'img/pet-sweep.jpg');
new Product('scissors', 'img/scissors.jpg');
new Product('shark', 'img/shark.jpg');
new Product('sweep', 'img/sweep.png');
new Product('tauntaun', 'img/tauntaun.jpg');
new Product('unicorn', 'img/unicorn.jpg');
new Product('usb', 'img/usb.gif');
new Product('water-can', 'img/water-can.jpg');
new Product('wine-glass', 'img/wine-glass.jpg');

var fistImage= Math.floor((Math.random() * Products.length));
var secoundImage= generateRandom( -1, -1,fistImage,-1,-1);
var thirdImage= generateRandom(-1 , fistImage,secoundImage,-1,-1);

currentArry[0] = fistImage;
currentArry[1] = secoundImage;
currentArry[2] = thirdImage;
displayImages(fistImage, secoundImage, thirdImage);


function generateRandom(FirstImage,SeconedImage,thirdImage,newimage,new2image) {
  var num = Math.floor(Math.random()*(Products.length-0))+0;
  return (num === FirstImage || num === SeconedImage || num === thirdImage|| num === newimage|| num === new2image)? generateRandom(FirstImage, SeconedImage,thirdImage,newimage,new2image):num;
}

function displayRandomImages() {

console.log(currentArry);
  fistImage = generateRandom(currentArry[0], currentArry[1],currentArry[2],-1,-1);
  secoundImage = generateRandom(currentArry[0], currentArry[1],currentArry[2],fistImage,-1);
  thirdImage = generateRandom(currentArry[0], currentArry[1],currentArry[2],secoundImage,fistImage);
  currentArry[2] = thirdImage;
  currentArry[1] = secoundImage;
  currentArry[0] = fistImage;
  //  secoundImage = Math.floor((Math.random() * Products.length));
  //  thirdImage = Math.floor((Math.random() * Products.length));
  //  while (fistImage === thirdImage && secoundImage === thirdImage) {
  //    thirdImage = Math.floor((Math.random() * Products.length));
  //  }
  
  displayImages(fistImage, secoundImage, thirdImage);
 
}



function displayImages(firstIndex, secoundIndex, thirdIndex) {
  currentfirstImage = Products[firstIndex];
  currentsecoundImage = Products[secoundIndex];
  currentthirsImage = Products[thirdIndex];

  
  currentfirstImage.timedisplay++;
  currentsecoundImage.timedisplay++;
  currentthirsImage.timedisplay++;

  firstImageElement.setAttribute('src', currentfirstImage.link);
  secoundImageElement.setAttribute('src', currentsecoundImage.link);
  thirdImageElement.setAttribute('src', currentthirsImage.link);
}
displayRandomImages();



imagesSection.addEventListener('click', generateNewImage);

function generateNewImage(event) {
  var clickImage;
  if (event.target.id === 'imag1') {
    clickImage = currentfirstImage;
    
  } else if (event.target.id === 'imag2') {
    clickImage = currentsecoundImage;
    
  } else if(event.target.id === 'imag3') {
    clickImage =currentthirsImage;
   
  }

  if (clickImage) {
    clickImage.vote++;
    displayRandomImages();
    totalClicks++;
  }

  if(totalClicks>=25){
    imagesSection.removeEventListener('click', generateNewImage);
    theResult();
  }

}
function theResult(){
  var listItem;
  for( var i = 0; i< Products.length; i++){
    listItem = document.createElement('li');
    listItem.textContent = Products[i].proudactName + ' had ' + Products[i].vote + ' votes and was shown ' + Products[i].timedisplay + ' tiems';
    result.appendChild(listItem);
  }
}


