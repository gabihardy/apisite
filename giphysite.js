
$('button').on('click', function() {
    var topic = $(this).data('topic');
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=dc6zaTOxFJmzC&limit=10";
    $.ajax({
            url: queryURL,
            method: 'GET'
        })
        .done(function(response) {
        
            var results = response.data;
          
            for (var i = 0; i < results.length; i++)
                var topicDiv = $('<div>');
                var p = $('<p>').text("Rating: " + results[i].rating);
                var topicImage = $('<img>');
                topicImage.attr('src', results[i].images.fixed_height.url);
                topicDiv.append(p);
                topicDiv.append(topicImage);
                $('#gifsAppearHere').prepend(topicDiv);
            }
        });
});