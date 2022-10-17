const imgList = [
  "01.jpg", 
  "02.jpg", 
  "03.jpg", 
  "04.jpg", 
  "05.jpg", 
];

//E' inutile lo so
for(i=0;i<imgList.length;i++){
  document.querySelector('#main_img img').src = "../img/" + imgList[i];
};