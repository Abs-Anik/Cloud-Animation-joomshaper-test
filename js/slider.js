  //Slider one
  var i = 0;
  var images1 = [];
  var time = 3000;
  images1[0] = 'images/person1.png';
  images1[1] = 'images/person2.png';
  images1[2] = 'images/person3.png';
  function changeImage1()
  {
     document.slide1.src = images1[i];

     if(i<images1.length -1){
      i++;
     }else{
       i = 0;
     }

     setTimeout("changeImage1()",time);

  }
  
//Slider Two


  var j = 0;
  var images2 = [];

  var time2 = 3000;

  
  images2[0] = 'images/person2.png';
  images2[1] = 'images/person3.png';
  images2[2] = 'images/person1.png';
  function changeImage2()
  {
     document.slide2.src = images2[j];

     if(j<images2.length -1){
      j++;
     }else{
       j = 0;
     }

     setTimeout("changeImage2()",time2);

  }

//Slider three

var k = 0;
  var images3 = [];

  var time3 = 3000;
  
  images3[0] = 'images/person3.png';
  images3[1] = 'images/person1.png';
  images3[2] = 'images/person2.png';
  function changeImage3()
  {
     document.slide3.src = images3[k];

     if(k<images3.length -1){
      k++;
     }else{
       k = 0;
     }

     setTimeout("changeImage3()",time3);

  }

//Creat a function 

function start() {
 
    changeImage1();
    changeImage2();
    changeImage3();        
  
}
//Here call the start() function
 window.onload = start;


