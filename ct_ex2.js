 function discount() {
    
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    a = parseFloat(a);
    b = parseFloat(b);
  
    var discountedPrice = a * (b/100);
    discountedPrice = a - discountedPrice;
    discountedPrice = discountedPrice.toFixed(2);
   
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
     document.getElementById("output").innerHTML = "Discounted Price: " + discountedPrice; 
  
  }
  