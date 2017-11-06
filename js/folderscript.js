function loadContent() {
    $.get("folders.JSON", function(data) {
        $.each(data.data, function() {
            var node = $("#listitem").clone();
            node.removeClass("sample");
            node.attr('id', 'added');
            node.find("A").attr("href", this.link);
            node.find("STRONG").text(this.name);
            $("#list").append(node);
        });
    });
}

function loadTimeline(json, card, list) {
    $.get(json, function(data) {
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
    });
}

function loadModal() {
    loadTimeline("education.JSON",$('#educationCard'),$('#education'));
    loadTimeline("hobbies.JSON",$('#hobbyCard'),$('#hobbies'));
}
