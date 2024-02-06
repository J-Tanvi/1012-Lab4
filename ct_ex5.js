function convert() {
    
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    a = parseInt(a);
  
    var temp = 0;
    if (b === "F" || b === "f"){
        temp = (a - 32)/1.8;
        document.getElementById("output").innerHTML = "Conversion: " + temp + " degrees Celcius";
    }
    else if(b === "C" || b === "c"){
        temp = (a * 1.8) +32;
        document.getElementById("output").innerHTML = "Conversion: " + temp + " degrees Fahrenheit";
    }
    else{
        document.getElementById("output").innerHTML = "Invalid";
    }
}
    