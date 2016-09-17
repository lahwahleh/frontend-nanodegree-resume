
var bio = {
	"name" : "Olawale AYODELE",
	"role" : "Front-End Web Developer",
	"contacts": {
		"mobile": "+2348169858606",
		"email" : "olawaleayodele@gmail.com",
		"github" : "<a href='https://github.com/lahwahleh' target='blank'>lahwahleh</a>",
		"twitter" : "<a href='https://twitter.com/lahwahleh' target='blank'>@lahwahleh</a>",
		"facebook" : "<a href='https://facebook.com/lahwahleh' target='blank'>lahwahleh</a>",
		"linkedIn" : "<a href='https://www.linkedin.com/in/lahwahleh' target='blank'>Olawale Ayodele</a>",
		"blog": "<a href='http://litmusdigital.com.ng/blog' target='blank'>http://litmusdigital.com.ng/blog</a>",
		"location": "Matogun, Ogun State, Nigeria"
		},
	"biopic" : "images/olawale.jpg",
	"welcomeMessage" : "I think win-win and I go the extra-mile in getting things done!",
	"skills" : ["HTML", "CSS", "Bootstrap", "Javascript", "jQuery","Wordpress", "Git Version Control System", "Android App Development"]

};

var work = {
	"jobs" : [
				{"employer" : "Chams Plc",
				  "title": "Software Development Intern",
				  "location" : "Victoria Island, Lagos",
				  "dates" : "2016 - present",
				  "description" : "I am part of a team of Software Developers that specialize in Web and Mobile Applications Development" 
				},
 

				{"employer" : "IMR Nig Ltd",
				  "title": "Industrial Trainee",
				  "location" : "Surulere, Lagos",
				  "dates" : "2010 - 2011",
				  "description" : "Gained hands-on experience in computer systems maintenance and repair."
				}

	]

};


var education  = {
	"schools": [
		{
			"name": "Sanngo Sec Sch",
			"location": "Agege, Lagos",
			"major": "Sciences",
			"yearOfGraduation": 2005
		},

		{
			"name": "OAU, Ile-Ife",
			"location": "Osun State, Nigeria",
			"major": "Computer Engineering",
			"yearOfGraduation": 2012
		}
	],

	"onlineCourses": [
		{
			"name": "Free Code Camp",
			"title": "Frontend Web Development",
			"url": "freecodecamp.com",
			"completed": 2016
		},

		{
			"name": "Indian Institute of Technology",
			"title": "Innovation and Information Technology Management",
			"url": "edx.org",
			"completed": 2016
		}

	]

};


var projects = {
	"projects" : [
				{"title" : "KCOBA Mobile App",
				  "dates": "Aug - Sept, 2016",
				  "description" : "The App allows the alumni of King's College Old Boys' Association (KCOBA) to connect and share information" },

				  {"title" : "Free Code Camp projects",
				  "dates": "July,2016 - Date",
				  "description" : "Visit <a href='https://facebook.com/lahwahleh' target='blank'>http://freecodecamp.com/lahwahleh</a> to view my projects and solutions" }
		]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);


var formattedContactInfo = [];
formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push( HTMLfacebook.replace("%data%", bio.contacts.facebook));
formattedContactInfo.push(HTMLlinkedIn.replace("%data%", bio.contacts.linkedIn));
formattedContactInfo.push(HTMLblog.replace("%data%", bio.contacts.blog));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));



$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);


if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	
	for (i in bio.skills){
	$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}


for (i in formattedContactInfo){
	//$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}

function displayWork() {

	if (work.jobs.length > 0) {

		$("#workExperience").append(HTMLworkStart);

			for (job in work.jobs) {

			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTittle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

	
			var formattedEmployerTittle = formattedEmployer + formattedTittle;


			$(".work-entry:last").append(formattedEmployerTittle);
			$(".work-entry:last").append(formattedLocation);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedDescription);


			}

	}
}

displayWork(); 

projects.display = function (){
	if (projects.projects.length > 0) {
		for (i in projects.projects){
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTittle = HTMLprojectTitle.replace("%data", projects.projects[i].title);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTittle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);
		
		}
	}
}

