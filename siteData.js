siteData = {

Name: "David Masad",
About: [
		"I am a Ph.D. student at George Mason University's <a href=''>Department of Computational Social Science</a>.", 
		"I'm interested in applying rigorous quantitative techniques to complex social science questions. I use computational models, network analysis, statistics, and natural language processing to facilitate rapid analysis, with an eye towards policy.",
		"My research interests tend to focus on international relations, with an emphasis on national security.",
		"Outside of academia I'm into cooking, road-tripping, rock climbing, and reading and writing fiction."
	],

Sidebar: [
/* Links for the sidebar.
Structure is {text, url}
*/
	{text: "About", url: 'index.html'},
	{text: "Research", url: 'research.html'},
	{text: 'R&eacute;sum&eacute;', url: "resume.html"}

],

PeerReviewed: [
/* 
Peer-Reviewed or refereed publications

Project entry structure is:
{name, authors, date, source, image, description, links: [...]}
*/

	{
		name: "Towards Arms and Influence Networks",
		authors: "David Masad and <a href='http://www.css.gmu.edu/andrew/'>Andrew Crooks</a>",
		source: ' <a href="http://www.rhsmith.umd.edu/ccb/conference/2012/">Complexity in Business 2012, Washington DC</a>',
		date: "2012",
		image: 'ArmsInfluence.png',
		description: 'We present preliminary results of applying the tools of network analysis to the international system, with a focus on the transfer of major arms.',
		links: [
			{text: "Abstract", url: "files/Masad, Crooks - Arms Networks.pdf"},
	        {text: "Presentation",url: "files/CIB_Presentation.pdf"}
		]
	},

	{
		name: "Herd Privacy: Modeling the Spillover Effects of Privacy Settings on Social Networking Sites",
		authors: "David Masad",
		source: '<a href="http://computationalsocialscience.org/conferences/17-2">CSSSA 2011, Santa Fe</a>',
		date: "2011",
		image: 'HerdPrivacy.png',
		description: "The discussion of privacy on Facebook and other social networking sites generally focuses on the privacy settings users can apply to their own content. However, many users have private information controlled by other users too: tagged photos, wall comments, even the friendship itself. This paper used a simple computational model to estimate the way individual users' exposure is affected by the privacy settings of their friends network -- the herd privacy effect.",
		links: [
			{text: "Paper", url: "files/Masad - Herd Privacy.pdf"},
	        {text: "Presentation",url: "files/Herd Privacy - Santa Fe.pdf"}
		]
	}
],

OtherProjects: [
	/*
	Informal projects.
	Project entry structure:
	{Name, link, image, description}
	*/
	{
		name: 'TributeWorld',
		link: 'https://github.com/dmasad/tributeworld',
		image: 'TributeWorld.png',
		description: "As a final project in <a href='http://css.gmu.edu/node/8?q=node/16'>Professor Claudio Cioffi-Revilla</a>'s class on the origins of social complexity, I replicated and expanded Robert Axelrod's Tribute Model in the <a href='http://cs.gmu.edu/~eclab/projects/mason/'>MASON</a> framework. The repository also inclues Python code used to analyze the model outputs."
	},

	{
		name: 'SEC Document Clustering',
		link: 'http://www.davidmasad.com/sandbox/FirmClusters.html',
		image: 'SECDocs.png',
		description: "An interactive visualization showing clusters of S&P 1,500 corporations from 1995-2010, based on the textual distance of their SEC filings. <p>The data is derived from an analysis of ~20,000 SEC 10-K filings using big data tools, including <a href='http://aws.amazon.com/'>Amazon Web Services</a>, <a href='http://mahout.apache.org/''>Apache Mahout</a>, and <a href='http://www.picloud.com/'>PiCloud</a>. Presented as part of a final project for CSS 739, Spring 2012 at George Mason University's <a href='http://css.gmu.edu/'>Department of Computational Social Science</a>."
	},

	{
		name: 'Introduction to GDELT',
		link: 'https://github.com/dmasad/GDELT_Intro',
		image: 'GDELT.png',
		description: 'Two quick introductions to working with the <a href="http://eventdata.psu.edu/data.dir/GDELT.html">Global Data on Events, Location and Tone</a> dataset, which contains 200+ million geolocated political events from 1979 to 2012. The <a href="http://nbviewer.ipython.org/urls/raw.github.com/dmasad/GDELT_Intro/master/Getting_Started_with_GDELT.ipynb">first tutorial</a> covers event counts, and the <a href="http://nbviewer.ipython.org/urls/raw.github.com/dmasad/GDELT_Intro/master/GDELT_Mapping.ipynb">second tutorial</a> covers basic mapping.'
	},

	{
		name: 'How (Not) to Forecast a Papal Conclave',
		link: 'http://nbviewer.ipython.org/urls/raw.github.com/dmasad/Pope_Forecasting/master/Conclave_Modeling_Tutorial.ipynb',
		image: 'Popecasting.png',
		description: "A quick tutorial on a few computational social science concepts applied to a simple example of complex forecasting. Scrape text from Wikipedia, cluster it, and use that as an input into an agent-based model. I wrote this in the week leading up the the most recent papal conclave. I didn't get the prediction right (but neither did anybody else)."
	}
],

Education: [
	{
		name: "Department of Computational Social Science",
		subtitle: 'Ph.D. Student',
		location: "George Mason University, Fairfax, VA",
		timeframe: "2012 - Present",
		descriptions: [
			"Recipient of Presidential Scholarship",
			"Courses toward Graduate Certificate, January 2011 - May 2012",
			"<b>Research areas:</b> Network analysis, agent-based modeling, international relations, national security policy"]
	},

	{
		name: "The University of Chicago",
		subtitle: 'BA - Economics; Minor - Near Eastern Languages and Civilizations',
		location: "Chicago, IL",
		timeframe: "2005 - 2009",
		descriptions: ["GPA: 3.64; Dean's List 2005-2009"]
	}
],

Employment: [
	{
		name: "Department of Computational Social Science",
		subtitle: "Graduate Research Assistant",
		location: "George Mason University, Fairfax, VA",
		timeframe: "2012 - Present",
		descriptions: [
			"Collaborate with faculty to develop agent-based models, acquire and analyze data, and write results for publication.",
			"Analyzed large-scale Twitter data relating to Syrian conflict, using novel country- level aggregation in conjunction with geopolitical network analysis.",
			"Presented methodologies and results to special interest course given to NGA analysts."]

	},

	{
		name: "Institute for Defense Analyses, Cost Analysis and Research Division",
		subtitle: "Research Assistant",
		location: "Alexandria, VA",
		timeframe: "2009 - 2012",
		descriptions: [
			"Worked on teams conducting policy studies to collect and analyze quantitative and qualitative data, and brief results and recommendations to Department of Defense.",
			"Designed, implemented and evaluated econometric models for trend analysis and forecasting.",
			"Refined and executed microsimulation model using million-plus record database.",
			"Introduced computational techniques for rapid data acquisition from online databases."
		]

	}
],

Skills: {
	Methods: [
		"Network analysis",
		"Agent-based modeling",
		"Econometrics",
		"Natural language processing",
		"Machine learning",
		"Web scraping",
		"Data visualization"
	],

	Technical: [
	"Python",
	"Java",
	"R",
	"JavaScript",
	"C/C++/C#",
	"Stata / SPSS",
	],

	Languages: ["Hebrew (fluent)", "Arabic (beginner)"]

}


}