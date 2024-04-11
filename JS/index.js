

function age(){
   var a= document.getElementById("drive").value
   if(a <18){
    
      document.getElementById("eligible").innerHTML="You are not eligible to get a Driving Licence"
   }
   else{
    
      document.getElementById("eligible").innerHTML="WELCOME!"
   } 
}

