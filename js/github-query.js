jQuery.githubUser = function(username, callback) {
   jQuery.getJSON('https://api.github.com/users/'+username+'/repos?callback=?',callback)
}

 
jQuery.fn.loadRepositories = function(username) {
    

    $.githubUser(username, function(data) {
        var repos = data.data; // JSON Parsing
        sortByName(repos);    
     

        $(repos).each(function() {
            if (this.name != (username.toLowerCase()+'.github.com') && this.name != "Walden1995.github.io"  && this.description != null) {
                
		var node = document.createElement("LI");
		node.setAttribute("class","list-inline-item col-lg-3");
		
		var link = document.createElement("A");
		link.setAttribute("href","https://Walden1995.github.io/"+(this.name));
		
		var span = document.createElement("SPAN");
		span.setAttribute("class","fa-stack fa-4x");
		
		var icon = document.createElement("I");
		icon.setAttribute("class","fa fa-circle fa-stack-2x text-primary");
		
		var strg = document.createElement("STRONG");
		strg.setAttribute("class","fa-stack-1x calendar-text text-secondary");
		strg.setAttribute("style","font-size: 35%");
		
		strg.appendChild(document.createTextNode((this.name).substring(0,8)));
		
		var desc = document.createElement("P");
		desc.setAttribute("class","text-muted");
		desc.setAttribute("style","word-wrap:break-word;");
		
		desc.appendChild(document.createTextNode((this.description)));


		
		
		span.appendChild(icon);
		span.appendChild(strg);
		link.appendChild(span);
		link.appendChild(desc);
		node.appendChild(link);

		document.getElementById("repo-listing").appendChild(node);
		
            }
        });      
      });
      
    function sortByName(repos) {
        repos.sort(function(a,b) {
        return a.name - b.name;
       });
    }
};