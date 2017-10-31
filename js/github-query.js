jQuery.githubContent = function(username, repo, callback) {
   jQuery.getJSON('https://api.github.com/repos/'+username+'/'+repo+'/contents?callback=?',callback)
}

function loadContent() {
    $.get("folders.JSON",function(data){
        $.each(data.data, function() {
            var node = $("#listitem").clone();
            node.removeClass("sample");
            node.attr('id','added');
            node.find("A").attr("href",this.link);
            node.find("STRONG").text(this.name);
            $("#list").append(node); 
        });
    });
}

function loadModal(){
    $.get("education.JSON",function(data){
       $.each(data.data, function(){
           var node = $('#educationCard').clone();
           node.removeClass('sample');
           node.attr('id','added');
           node.find('img').attr('src',this.link);
           node.find('H1').text(this.name);
           node.find('P').text(this.info);
           $('#education').prepend(node);
       }) ;
    });
}
    
        