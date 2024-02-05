function roots() {
    
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
  
    var num = (b * b) - (4 * a * c);
    if(num>0){
        document.getElementById("output").innerHTML = "this equation has 2 real roots"; 
    }
    else if(num == 0){
        document.getElementById("output").innerHTML = "this equation has 1 real root"; 
    }
    else{
        document.getElementById("output").innerHTML = "this equation has no real roots";
    }
   
    /* //in Ex 4, uncomment this block
    switch (a){
      case (1): 
        answer = "January";
        break;
      case (2): 
        answer = "February";
        break;
        // in Ex4, you need to add cases for other months
        // as well as a case for an invalid month
    }
    */  
  }
  