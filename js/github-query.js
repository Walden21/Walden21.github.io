jQuery.githubUser = function(username, callback) {
   jQuery.getJSON('https://api.github.com/users/'+username+'/repos?callback=?',callback)
}

jQuery.fn.loadRepositories = function(username) {
    

    $.githubUser(username, function(data) {
        var repos = data.data; // JSON Parsing
         

        $(repos).each(function() {
            if (this.name != (username.toLowerCase()+'.github.com') && this.name != "Walden1995.github.io"  && this.description != null) {
                
							var node = $("#sample").clone();
							node.find("A").attr("href","https://Walden1995.github.io/"+(this.name) + "/");
							node.find("STRONG").text((this.name).substring(0,8));
							node.find("P").text(this.description);
							$("#repo-listing").append(node);
            }
        });      
     });
};

jQuery.githubContent = function(username, repo, callback) {
   jQuery.getJSON('https://api.github.com/repos/'+username+'/'+repo+'/contents?callback=?',callback)
}

 
jQuery.fn.loadRepoContent = function(username, repo) {
    $.githubContent(username, repo, function(data) {
        var repos = data.data; // JSON Parsing

        $(repos).each(function() {
            if (this.type == "dir") {
                
							var node = $("#listitem").clone();
							
							node.find("A").attr("href",(this.name) + "/");
							node.find("STRONG").text(this.name.substring(0,8));

							$("#list").append(node);
		
            }
        });      
      });
};