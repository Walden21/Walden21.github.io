jQuery.githubContent = function(username, repo, callback) {
   jQuery.getJSON('https://api.github.com/repos/'+username+'/'+repo+'/contents?callback=?',callback)
}

function loadContent() {
    $.get("folders.JSON",function(data){
        $.each(data.data, function() {
            var node = $(".sample").clone();
            node.removeClass("sample");
            node.find("A").attr("href",this.link);
            node.find("STRONG").text(this.name);
            $("#list").append(node); 
        });
    });
}
    
        