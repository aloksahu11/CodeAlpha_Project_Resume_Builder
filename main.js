function printpage(){

    var don=document.getElementById('don').innerHTML;
    var kon=document.getElementById('kon').innerHTML;
    document.getElementById('don').innerHTML=kon;
    window.print();
    document.getElementById('don').innerHTML=don;
    }
  
  
    function generateResume() {
      // Get form values
      var fullName = document.getElementById('fullName').value;
      var email = document.getElementById('email').value;
      var phone = document.getElementById('phone').value;
      var address = document.getElementById('address').value;
      var objective = document.getElementById('objective:').value;
      var degree = document.getElementById('degree').value; 
      var university = document.getElementById('university').value; 
      var company = document.getElementById('company').value; 
      var year = document.getElementById('year').value; 
      var position = document.getElementById('position').value; 
      var duration = document.getElementById('duration').value; 
      var hobbies = document.getElementById('hobbies').value; 
          
  var a=fullName;
  document.getElementsByClassName('a4')[0].innerHTML=a;
  
  
  var b="Email :"+ email;
  document.getElementsByClassName('a5')[0].innerHTML=b;
  
  var c="Phone :" + phone;
  
  document.getElementsByClassName('a6')[0].innerHTML=c;
  
  var d="Address:"+address;
  document.getElementsByClassName('a7')[0].innerHTML=d;
  
  var e="Objective: "+ objective;
  document.getElementsByClassName('a9')[0].innerHTML=e;
  
  
  
  var f="Degree: " + degree;
  document.getElementsByClassName('b2')[0].innerHTML=f;
  
  
  var g="University: " +university;
  document.getElementsByClassName('b3')[0].innerHTML=g;
  
  
  var aa="Year of Graduation: " +year;
  document.getElementsByClassName('b4')[0].innerHTML=aa;
  
  
  var aa1="Company: " +company;
  document.getElementsByClassName('c2')[0].innerHTML=aa1;
  
  
  var aa2="Position: " +position;
  document.getElementsByClassName('c3')[0].innerHTML=aa2;
  
  
  var aa3="Duration: " +duration;
  document.getElementsByClassName('c4')[0].innerHTML=aa3;
  
  
  var aa4="Hobbies: " +hobbies;
  document.getElementsByClassName('c5')[0].innerHTML=aa4;
  
  
  
  
    }
    