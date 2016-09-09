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


var name = "Olawale AYODELE";
var role = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

*/


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
	"welcomeMessage" : "The end determines the means!",
	"skills" : [" HTML", " CSS", " Javascript", " Wordpress", " Java", " Python", " Git", " Android App Development", " Microsoft Office Suites"]

}



var education  = {
	"schools": [{
			"name": "Sanngo Sec Sch",
			"city": "Agege, Lagos",
			"major": "Sciences",
			"yearOfGraduation": 2005
		},

		{
			"name": "OAU, Ile-Ife",
			"city": "Osun State, Nigeria",
			"major": "Computer Engineering",
			"yearOfGraduation": 2012
		}
	],

	"onlineCourses": [{
			"name": "Udacity",
			"city": "Silicon Valley",
			"major": "Frontend Web Development",
			"yearOfGraduation": 2016
		},

		{
			"name": "Indian Inst of Tech",
			"city": "bangalore",
			"major": "Innovation and IT Mgt",
			"yearOfGraduation": 2016
		}

	]

}

var work = {
	"jobs" : [
				{"employer" : "Chams Plc",
				  "title": "Software Development Intern",
				  "dates" : "2016 - present" },

				{"employer" : "IMR Nig Ltd",
				  "title": "Industrial Trainee",
				  "dates" : "2010 - 2011" }

	]



}

var projects = {
	"projects" : [
				{"name" : "KCOBA Mobile App",
				  "dates": "Aug - Sept, 2016",
				  "description" : "If you havent got a clue, what to do, just right click here and select the Help" }

		]



}







