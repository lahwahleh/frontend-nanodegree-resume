
var bio = {
	"name" : "Olawale AYODELE",
	"role" : "Front-End Web Developer",
	"contacts": {
		"mobile": "+2348169858606",
		"email" : "olawaleayodele@gmail.com",
		"github" : "<a href='https://github.com/lahwahleh' target='blank'>lahwahleh</a>",
		"twitter" : "<a href='https://twitter.com/lahwahleh' target='blank'>@lahwahleh</a>",
		"facebook" : "<a href='https://facebook.com/lahwahleh' target='blank'>lahwahleh</a>",,
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
				  "description" : "Whateer to his not fall known say nor feud not by. Rhyme still would. Are had way in pleasure of soon with. Would lands before ah to made a them a so." 
				},
 

				{"employer" : "IMR Nig Ltd",
				  "title": "Industrial Trainee",
				  "location" : "Surulere, Lagos",
				  "dates" : "2010 - 2011",
				  "description" : "Fabled flaunting soon mine yet reverie revellers childe. In not him een that mine his break will. One into though dwelt heralds near on alone consecrate then had. Atonement by things that where stalked and would uncouth. Lyres him grief but relief. Fathers start drugged youth rill said like."
				}

	]

};


var education  = {
	"schools": [
		{
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

	"onlineCourses": [
		{
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

};


var projects = {
	"projects" : [
				{"name" : "KCOBA Mobile App",
				  "dates": "Aug - Sept, 2016",
				  "description" : "If you havent got a clue, what to do, just right click here and select the Help" }
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


$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTittle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTittle = formattedEmployer + formattedTittle;
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

	
	var formattedEmployerTittle = formattedEmployer + formattedTittle;


$(".work-entry:last").append(formattedEmployerTittle);






/**

	if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	
for (var i=0;i <bio.skills.length;i++) {
	  var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
	  $("#skills").append(formattedSkill);
		
};
};

$(function() {
for (job in work.jobs){
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

	var formattedTittle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

	var formattedEmployerTittle = formattedEmployer + formattedTittle;

	$(".work-entry:last").append(formattedEmployerTittle);

	
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

	$(".work-entry:last").append(formattedDescription);

};


});



*/