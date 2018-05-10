folders = {
    "data":
    [
      {"name":"IT202","link":"https://walden1995.github.io/IT202/"},
      {"name":"362HC","link":"https://walden1995.github.io/CS362-Hovercraft/"},
      {"name":"MMSS","link":"https://walden1995.github.io/MMSS/"}
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
      { "name": "lua", "link": "./img/cplaceholder.png", "info": "Starting with Lua in early 2009, Stephen started to modify programs within the bounds of games. It was at this point that He realized his interest in computer science, and began seeking to advance his career in that field."},
      { "name": "c", "link": "./img/c.jpg", "info": "Stephen Started using C during the beginning of 2014. At this point he understands the principles behind pointers and why passing by reference is so powerful." },
      { "name": "c++", "link": "./img/CPP.jpg", "info": "Stephen Started using C++ in early 2013, He still considers the first time he utilized C++ as the spark that created his ambition to become a computer scientist and developer." },
      { "name": "c#", "link": "./img/CSharp.jpg", "info": "Stephen Started using C# early in 2017. He is familiar with SQL injections and parsing utilizing C#. He also has modified multiple production and demo applications." },
      { "name": "f#", "link": "./img/Fsharp.JPG", "info": "Stephen Started using F# early in 2017. Although not as familiar with F#, He has a basic familiarity with syntax and symantics. He plans on studying this language more." },
      { "name": "java", "link": "./img/java.jpg", "info": "Stephen Started using Java in late 2014, he enjoys java mostly for it's portability and has created several applications that are being utilized for demonstrations." },
      { "name": "webdev", "link": "./img/html.jpg", "info": "Javascript/CSS/HTML5, Stephen is currently learning about different ways to create and maintain different styles of websites, using that knowledge he developed this website." }
    ]
  }

hobbies = {
    "data":
    [
      {"name":"Gaming","link":"img/factorio.jpg","info":"Gaming was probably one of Stephen’s biggest hobbies when he was younger. Although today he doesn’t really play as many video games as he used to, he still plays video games that require less of his attention. MineCraft with the Computer Craft mod is a good example, as he is able to program the computers to mine resources and wood. Another good example would be factorio."},
      {"name":"Civil Air Patrol","link":"img/CAP.jpg","info":"Stephen started attending C.A.P. meetings fall 2009. He had made his way through the cadet ranks of that para-military organization and eventually transferred to the Senior member side of that organization. Currently he is a Ground Team Leader, although he has not been active on missions as of late. He enjoys the C.A.P. because it allows him to train the new generation on how to be a leader, and it also allows him to stretch his leadership skills by participating in Emergency Services."},
      {"name":"Web Development","link":"img/html.JPG","info":"Most of Stephen’s time, as of recently, has been going towards web development. He is currently working on multiple different sites and web applications trying to learn as much as he can about the internet and web development as a whole. All while studying the subject in school for his IT202 class."}
    ]
  }

function loadModal() {
    loadTimeline(education,$('#educationCard'),$('#education'));
    loadTimeline(hobbies,$('#hobbyCard'),$('#hobbies'));
}
