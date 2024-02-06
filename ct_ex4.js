function month() {
    
  var a = document.getElementById("a").value;
  a = parseInt(a);

  var answer = "temp";
  switch (a){
    case (1): 
      answer = "January";
      break;
    case (2): 
      answer = "February";
      break;
    case (3):
      answer = "March";
      break;
    case (4):
      answer = "April";
      break;
    case (5):
      answer = "May";
      break;
    case (6):
      answer = "June";
      break;
    case (7):
      answer = "July";
      break;
    case (8):
      answer = "Augest";
      break;
    case (9):
      answer = "September";
      break;
    case (10):
      answer = "October";
      break;
    case (11):
      answer = "November";
      break;
    case (12):
      answer = "December";
      break;
    default:
      answer = "Invalid";
      break;
  }
  document.getElementById("output").innerHTML = "Month: " + answer;
}
  