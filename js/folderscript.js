folders = {
    "data":
    [
      {"name":"IT202","link":"https://Walden21.github.io/IT202/"},
      {"name":"362HC","link":"https://Walden21.github.io/CS362-Hovercraft/"},
      {"name":"MMSS","link":"https://Walden21.github.io/MMSS/"},
      {"name":"CS418","link":"https://ateamhasnoname03.github.io/data_science/"}
    ]
  }
  


function loadContent() {
    $.each(folders.data, function() {
        var node = $("#listitem").clone();
        node.removeClass("sample");
        node.attr('id', 'added');
        node.find("A").attr("href", this.link);
        node.find("STRONG").text(this.name);
        $("#list").append(node);
    });
}

function loadTimeline(data, card, list) {
    $.each(data.data, function() {
        var node = card.clone();
        node.removeClass('sample');
        node.attr('id', 'added');
        node.find('img').attr('src', this.link);
        node.find('H4').text(this.name);
        node.find('P').text(this.info);
        list.append(node);
    });
    var node = $('#timelineBubble').clone();
    node.removeClass("sample");
    node.attr('id', 'added');
    list.append(node);
}

function loadAboutme(data, card, list) {
  $.each(data.data, function() {
      var node = card.clone();
      node.removeClass('sample');
      node.attr('id', 'added');
      node.find('img').attr('src', this.link);
      node.find('H5').text(this.date);
      if (this.name.includes("<a")) {
        node.find('H4').html(this.name);
      } else {
        node.find('H4').text(this.name);
      }
      node.find('P').text(this.info);
      list.append(node);
  });
  var node = $('#timelineBubble').clone();
  node.removeClass("sample");
  node.attr('id', 'added');
  list.append(node);
}

aboutme = {
  "data": [
    {"name":"Stephen Walden","date":"","link":"./img/avatar.jpg","info":"Stephen, raised in the suburbs of Chicago, is a technologist. A problem solver at heart, he looked towards development as a career. Though he spent his early years gaining basic information technology experience and rudimentary software development skills, he has since shifted his career towards Robotic Process Automation. Currently, his latest ventures have been developing his skills as an RPA Developer or Modeler."},
    {"name":"RC Airplanes","date":"2007-2009","link":"./img/TMRCP.jpg","info":"Stephen was always interested in airplanes and flying. He got started after his father bought a few RC planes for him to fly. His first RC plane was a Telemaster. After joining a nearby field and an RC club, he found an instructor and eventually started flying on his own. His Telemaster only lasted a few months before being involved in a mid-air collision with another plane. Eventually, Stephen moved on to flying electric planes and slowly faded away from that hobby entirely. Occasionally, he still flies a small racing drone around his house."},
    {"name":"<a target=\"_blank\" class=\"subdue\" href=\"http://www.gocivilairpatrol.com\"><u>Civil Air Patrol</u></a>","date":"2009-2019","link":"./img/CAP.jpg","info":"One of the first ways Stephen gave back to his community was through volunteer work. He started volunteering at the Elgin chapter of the Civil Air Patrol as a flight member. At the Elgin Squadron, Stephen gained the foundations of his Search and Rescue training. Eventually, the Elgin Squadron shut down due to lack of participation, and Stephen transferred to a different squadron. The last few years of his volunteer service were carried out at the Fox Valley Composite Squadron as the Deputy Commander of Cadets. He has since moved on from this particular organization due to a shift in priorities in his life."},
    {"name":"Travels","date":"2010-2014","link":"./img/map.png","info":"Part of being in the Civil Air Patrol is attending encampments and training camps as a cadet. During that time as a cadet, Stephen visited multiple camps. His favorite was Cadet Officer School, where he learned what it meant to be a leader at Maxwell Air Force Base Gunter Annex."},
    {"name":"ECC","date":"Fall '11 - Fall '13","link":"./img/ECC.png","info":"After completing his high school curriculum, Stephen moved from doing school at his house to commuting to a college. He admitted himself into Elgin Community College to work on getting his Associate's Degree, making it a general degree so that he would have more freedom moving forward!"},
    {"name":"Army National Guard","date":"2014-2020","link":"./img/Army.png","info":"After graduating with an Associate's in Science, Stephen was not quite sure what he wanted to do. So without wasting any time, he visited the Army recruiters. After scoring a 90 on his ASVAB and doing his research, he settled on the Illinois Army National Guard as an Information Technology Specialist. He worked as support for tactical internet setups and equipment as part of the 406th Brigade Signal Company."},
    {"name":"Graduation Two","date":"Dec 9th, 2014","link":"./img/AITOriginal.jpg","info":"Advanced Individualized Training, the second part of training that typically comes after boot camp, is where an individual such as Stephen learns how to do his Military Occupational Specialty or job. Stephen obtained an Information Technology Specialist Diploma after attending about 20 weeks of studying."},
    {"name":"All or Nothing","date":"Spring '15","link":"./img/ECC.png","info":"Knowing that the calculus classes at ECC differed from other colleges and universities, Stephen opted to complete the series and transfer all three calculus classes instead of having to retake them at a different institution. A choice that would pay off in the end."},
    {"name":"Harvest","date":"Summer '15 - Present","link":"./img/HBC_Logomark-highrise.png","info":"Stephen started attending Harvest Bible Chapel in 2015. He started serving as a parking minister shortly after attending. He eventually led a small group for a number of years before moving on to being a Student Ministry Leader. He currently serves as a Student Ministry Leader and as the Head of the Parking Ministry. He also helps the Security Team and the Young Adults Ministry."},
    {"name":"University","date":"Fall '15 - Spring '19","link":"./img/UIC.png","info":"Stephen studied for a Bachelor's degree in Computer Science. During this time period, he learned about multiple different languages, gaining rudimentary training in SQL query creation, along with the fundamentals of how to program in both Functional and Object-Oriented languages, such as C and C++. You can learn more about this in the Educational Section. He graduated in May of 2019."},
    {"name":"CS-211 TA","date":"Fall '17","link":"./img/UIC.png","info":"During the Fall Semester of 2017, Stephen was a TA for the CS-211 class. He helped students learn about the fundamentals of programming in C++. He also helped with grading and answering questions that students had. Interestingly enough, he also met his now wife while working as a TA for that class."},
    {"name":"<a class=\"subdue\" href=\"http://www.nbotix.com\" target=\"_blank\"><u>nBotix</u></a>","date":"2017-2018","link":"./img/nbotix.png","info":"During Spring Break of 2017, Stephen studied software named Blue Prism. This gave him the opportunity to get hired as a part-time Junior Developer at nBotix. He quickly proved his worth and was promoted to Training Developer. His first major business trip involved training analysts with an nBotix partner."},
    {"name":"<a class=\"subdue\" href=\"https://www.youracclaim.com/users/stephen-walden/badges\" target=\"_blank\"><u>Blue Prism Certified Developer</u></a>","date":"June 1, 2018","link":"./img/Developer_Badge.png","info":"After working with nBotix for about a year, Stephen passed his first Blue Prism Certification Exam. He already had experience with several projects at nBotix and had completed multiple proof-of-concept implementations using the Blue Prism platform. This served as Stephen's way of demonstrating his knowledge of the Blue Prism software platform."},
    {"name":"<a class=\"subdue\" href=\"https://www.youracclaim.com/users/stephen-walden/badges\"target=\"_blank\"><u>Blue Prism Certified Solution Designer</u></a>","date":"June 7, 2018","link":"./img/Solution_Designer_Badge.png","info":"After successfully passing his Blue Prism Certified Developer Exam, Stephen immediately scheduled another exam for the following week, completing it with ease. Afterward, he took on another project for nBotix and became too busy to schedule another exam."},
    {"name":"<a class=\"subdue\" href=\"https://www.cs.uic.edu/bin/view/CS362/Spring2019\" target=\"_blank\"><u>CS362-TA</u></a>","date":"Spring '19","link":"./img/UIC.png","info":"After dealing with an nBotix project and schooling at the same time, Stephen opted out of attempting to do the same thing for his final semester at UIC. Instead, he chose to TA for CS362-Computer Design. At some point during the semester, realizing he was the TA with the most experience working with circuits and microcomputers, he stepped up and played a major role in the administration of the weekly labs."},
    {"name":"Graduation 4","date":"May 12, 2019","link":"./img/UIC.png","info":"Stephen graduated, choosing not to participate in the ceremonial process this time, primarily due to his final Annual Training with the National Guard. The Bachelor's degree took some time to arrive, and as such, Stephen did not know for certain that it had arrived until late June 2019, while on military duty."},
    {"name":"FTE","date":"August 12, 2019","link":"","info":"Stephen was hired as a full-time employee at his current place of employement, following several successful interviews. He was hired as a Blue Prism Developer, and has been involved in several different projects, including the rollout of the Microsoft Power Platform to his current organization."},
    {"name":"<a class=\"subdue\" href=\"https://www.youracclaim.com/users/stephen-walden/badges\" target=\"_blank\"><u>Blue Prism Certified Professional Developer</u></a>","date":"September 28, 2019","link":"./img/Professional_Developer_Badge.png","info":"Although he could have taken this exam earlier, Stephen opted to wait until he had a few more projects under his belt. He passed the exam with ease, and was able to demonstrate his knowledge of the Blue Prism platform."},
    {"name":"Married","date":"May, 29th 2021","link":"./img/rings.JPG","info":"Stephen and his wife chose to get married with a small ceremony at Harvest Bible Chapel. They had their reception at the church, and then went on a short honeymoon to the Wisconsin Dells."},
    {"name":"Family Growth","date":"April 12th, 2025","link":"./img/Reginald.jpg","info":"Stephen and his wife rescued Reginald from a local shelter. He was seven months old at the time. He is a Schnauzer-Poodle mix and is very affectionate."},
    {"name":"","date":"","link":"./img/awf.png","info":""}
  ] 
}

education = {
    "data": [
      { "name": "lua", "link": "./img/Lua-Logo.svg", "info": "Starting with Lua in early 2009, Stephen started to modify programs within the bounds of games. It was at this point that he realized his interest in computer science, and began seeking to advance his career in that field."},
      { "name": "c", "link": "./img/c.jpg", "info": "Stephen started using C during the beginning of 2014. At this point he understands the principles behind pointers and why passing by reference is so powerful." },
      { "name": "c++", "link": "./img/CPP.jpg", "info": "Stephen started using C++ in early 2013. He first learned how to use C++ as a functional language, and eventually learned the basic principles of Classes and Object creation wihtin C++ in 2015." },
      { "name": "c#", "link": "./img/CSharp.jpg", "info": "Stephen started using C# early in 2017. He is familiar with SQL injections and parsing utilizing C#. He also has modified multiple production and demo applications. He became more familiar and comfortable utilizing C# when he began using Unity for Introduction to Game Development." },
      { "name": "f#", "link": "./img/Fsharp.JPG", "info": "Stephen wasn't as familiar with F# as he was with some of the previously mentioned languages. However, after dealing with some other languages he did eventually come to better understand this language." },
      { "name": "java", "link": "./img/java.jpg", "info": "Stephen Started using Java in late 2014, he enjoys java mostly for it's portability and has created several applications that are being utilized for demonstration and training purposes in conjuction with other platforms." },
      { "name": "webdev", "link": "./img/html.jpg", "info": "Javascript/CSS/HTML, Stephen originally intended to learn these languages in order to write his own website (hello world), and has since learned about other styles of web development, some of which makes his day job a little more difficult." },
      { "name": "Blue Prism", "link": "https://community.appian.com/cfs-file/__key/communityserver-blogs-components-weblogfiles/00-00-00-00-50/BluePrism_5F00_AppIcon_5F00_Final_5F00_RGB.png","info":"BluePrism is a software suite and a Robotic Process Automation platform. It requires both a basic knowledge of how to program in an object-oriented fashion, along with some working knowledge of how applications work. Stephen has been utilizing and learning more about this platform since 2017, and has since achieved certain accreditations from Blue Prism."},
      { "name": "Microsoft Power Platform", "link": "./img/Microsoft_Power_Platform_logo.svg","info":"The Microsoft Power Platform is a suite of applications that allows users to create applications and automate processes. Stephen has been utilizing and learning more about this platform since 2024, and has since had the oppurtunity to attend a few training sessions alongside his coworkers."},
      { "name": "Python", "link": "./img/Python.png", "info": "Python was a programming language that Stephen was introduced to in 2017 while at school. He learned about the basics of Python, and how to use it for data analysis. He has since used it for a few projects, but has not used it as much as he would like. The latest use for Python he has dealt with is debugging his wife's knitting programs." },
    ]
  }

hobbies = {
    "data":
    [
      {"name":"Gaming","link":"img/factorio.jpg","info":"Gaming was probably one of Stephen’s biggest hobbies when he was younger. Although today he doesn’t really play as many video games as he used to, he still plays video games that require less of his attention. MineCraft with the Computer Craft mod is a good example, as he is able to program the computers to mine resources and wood. Another good example would be factorio. Currently he will play MineCraft with his wife on a regular basis."},
      {"name":"Leadership","link":"img/CAP.jpg","info":"Stephen started attending Civil Air Patrol meetings fall 2009. He had made his way through the cadet ranks of that para-military organization and eventually transferred to the Senior member side of that organization. He stopped attending meetings in mid 2019, however he has picked up being a student ministry leader at his church. Essentially he thrives on growing and developing the next generation on how to advance themselves, either with leadership, or spiritually."},
      {"name":"Legos","link":"img/lego.jpg","info":"Because of his enjoyment of building from an idea that he either found, or thought up by himself. He got into the joy of building with legos. After learning about Object Oriented Coding styles he often refers back to the building blocks made from legos idea. He has built several different lego models from scratch. Either directly from his imagination, or based upon an image of something he thought was cool. He does currently have a small sub-page in the works to show off some of these creations."},
      {"name":"Writing","link":"img/writerscorner.jpg","info":"Since 2011 Stephen has been working on a Science Fantasy universe. On and off he has been working on this setting. He has written several small short stories, but has no plans on publishing the setting or the stories."},
      {"name":"Motorcycles","link":"img/bike.jpg","info":"Stephen's first season was in 2011. His longest ride was from Chicago to Newaygo Michigan. He still occasionally rides, but not quite as often as he once did. He used to have a 2008 Kawasaki Ninja 650R. He currently owns a 2008 Kawasaki Vulcan 900 Classic."}
    ]
  }

function loadModal() {
    loadAboutme(aboutme,$('#aboutCard'),$('#aboutMe'));
    loadTimeline(education,$('#educationCard'),$('#education'));
    loadTimeline(hobbies,$('#hobbyCard'),$('#hobbies'));
}
