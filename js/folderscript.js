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
    node.attr('id', 'added');
    list.append(node);
}

education = {
    "data": [
      { "name": "lua", "link": "./img/cplaceholder.png", "info": "Starting with Lua in early 2009, Stephen started to modify programs within the bounds of games. It was at this point that he realized his interest in computer science, and began seeking to advance his career in that field."},
      { "name": "c", "link": "./img/c.jpg", "info": "Stephen started using C during the beginning of 2014. At this point he understands the principles behind pointers and why passing by reference is so powerful." },
      { "name": "c++", "link": "./img/CPP.jpg", "info": "Stephen started using C++ in early 2013. He first learned how to use C++ as a functional language, and eventually learned the basic principles of Classes and Object creation wihtin C++ in 2015." },
      { "name": "c#", "link": "./img/CSharp.jpg", "info": "Stephen started using C# early in 2017. He is familiar with SQL injections and parsing utilizing C#. He also has modified multiple production and demo applications. He became more familiar and comfortable utilizing C# when he began using Unity for Introduction to Game Development." },
      { "name": "f#", "link": "./img/Fsharp.JPG", "info": "Stephen isn't as familiar with F# as he is with some of the previously mentioned languages. However, he does plan on eventually learning more about this language." },
      { "name": "java", "link": "./img/java.jpg", "info": "Stephen Started using Java in late 2014, he enjoys java mostly for it's portability and has created several applications that are being utilized for demonstration and training purposes in conjuction with other platforms." },
      { "name": "webdev", "link": "./img/html.jpg", "info": "Javascript/CSS/HTML5, Stephen originally intended to learn these languages in order to write his own website (hello world), and has since learned about other styles of web development, some of which makes his job a little more difficult." },
      { "name": "Blue Prism", "link": "https://community.appian.com/cfs-file/__key/communityserver-blogs-components-weblogfiles/00-00-00-00-50/BluePrism_5F00_AppIcon_5F00_Final_5F00_RGB.png","info":"BluePrism is a software suite and a Robotic Process Automation platform. It requires both a basic knowledge of how to program in an object-oriented fashion, along with some working knowledge of how applications work. Stephen has been utilizing and learning more about this platform since 2017, and has since achieved certain accreditations from Blue Prism."}
    ]
  }

hobbies = {
    "data":
    [
      {"name":"Gaming","link":"img/factorio.jpg","info":"Gaming was probably one of Stephen’s biggest hobbies when he was younger. Although today he doesn’t really play as many video games as he used to, he still plays video games that require less of his attention. MineCraft with the Computer Craft mod is a good example, as he is able to program the computers to mine resources and wood. Another good example would be factorio."},
      {"name":"Leadership","link":"img/CAP.jpg","info":"Stephen started attending Civil Air Patrol meetings fall 2009. He had made his way through the cadet ranks of that para-military organization and eventually transferred to the Senior member side of that organization. He stopped attending meetings in mid 2019, however he has picked up being a student ministry leader at his church. Essentially he thrives on growing and developing the next generation on how to advance themselves, either with leadership, or spiritually."},
      {"name":"Legos","link":"img/lego.jpg","info":"Because of his enjoyment of building from an idea that he either found, or thought up by himself. He got into the joy of building with legos. After learning about Object Oriented Coding styles he often refers back to the building blocks made from legos idea. He has built several different lego models from scratch. Either directly from his imagination, or based upon an image of something he thought was cool. He does currently have a small sub-page in the works to show off some of these creations."}
    ]
  }

function loadModal() {
    loadTimeline(education,$('#educationCard'),$('#education'));
    loadTimeline(hobbies,$('#hobbyCard'),$('#hobbies'));
}
