var bio = {
	"name" : "Olawale AYODELE",
	"role" : "Web Developer",
	"contacts": {
		"mobile": "08169858606",
		"email" : "olawaleayodele@gmail.com",
		"github" : "lahwahleh",
		"twitter" : "@lahwahleh",
		"blog": "http://litmusdigital.com.ng/blog"
		"location": "Matogun, Ogun State, Nigeria"
		},
	"biopic" : "images/olawale.jpg",
	"welcomeMessage" : "The end determines the means!",
	"skills" : [" HTML", " CSS", " Javascript", " Wordpress", " Java", " Python", " Git", " Android App Development", " Microsoft Office Suites"]

};

if (bio.skills.length > 0) {
	$("#header").append(HTMLSkillsStart);

	var formattedSkill = HTMLSkills.replace("%data%", bio.skills[0];)
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLSkills.replace("%data%", bio.skills[1];)
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLSkills.replace("%data%", bio.skills[2];)
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLSkills.replace("%data%", bio.skills[3];)
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLSkills.replace("%data%", bio.skills[4];)
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLSkills.replace("%data%", bio.skills[5];)
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLSkills.replace("%data%", bio.skills[6];)
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLSkills.replace("%data%", bio.skills[7];)
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLSkills.replace("%data%", bio.skills[8];)
	$("#skills").append(formattedSkill);


};

/*
var skillCount = 0;
	while (bio.skills.length > 0){
		$("#header").append(HTMLSkillsStart);
		var skillCount = skillCount + 1;

	if (skillCount === bio.skills.length)

}

*/


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

function displayWork () {
for (jobs in work.jobs){
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

	var formattedTittle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

	var formattedEmployerTittle = formattedEmployer + formattedTittle;

	$(".work-entry:last").append(formattedEmployerTittle);

	
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

	$(".work-entry:last").append(formattedDescription);

}
};

displayWork();

function locationizer (work_obj){
	var locationArray = [];

	for (job in work_obj.jobs){
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}
return locationArray;

}


var projects = {
	"projects" : [
				{"name" : "KCOBA Mobile App",
				  "dates": "Aug - Sept, 2016",
				  "description" : "If you havent got a clue, what to do, just right click here and select the Help" }

		]



};





