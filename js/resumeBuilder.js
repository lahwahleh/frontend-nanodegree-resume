$("#main").append("Olawale AYODELE");

var email = " \n olawaleayodele@gmail.com"
var newEmail = email.replace("olawaleayodele@gmail.com"," oayodele@chams.com")
var awesomeThoughts = " \n I am Olawale and I am awesome";
var funThoughts = awesomeThoughts.replace("awesome", "fun");

console.log(awesomeThoughts);
console.log(funThoughts);
console.log(email);
console.log(newEmail);

$("#main").append(email);
$("#main").append(newEmail);
$("#main").append(awesomeThoughts);
