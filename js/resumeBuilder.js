/*
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
*/

var name = "Olawale AYODELE";
var role = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);




var bio = {
	"name" : "Olawale AYODELE",
	"role" : "Web Developer",
	"contacts": {
		"mobile": "08169858606",
		"email" : "olawaleayodele@gmail.com",
		"github" : "lahwahleh",
		"twitter" : "@lahwahleh",
		"location": "Matogun, Ogun State, Nigeria"
		},
	"biopic" : "images/olawale.jpg",
	"skills" : [" HTML", " CSS", " Javascript", " Wordpress", " Java", " Python", " Git", " Android App Development", " Microsoft Office Suites"]

}


var work = {};
work.position = "Web Developer";
work.employer = "Chams Plc";
work.city = "Victoria Island, Lagos";

var education  = {};
education["school"] = "OAU, Ile-Ife";
education["city"] = "Osun State, Nigeria";
education["years"] = "2006 - 2011";




$("#main").append(work.position);
$("#main").append(education["school"]);


