(function($) {

  function getStatistics($url) {
    $.ajax({
      type: 'GET',
      url: $url,
      success: function (data) {
        var $players = data.players,
            $teams = data.teams,
            $games = data.games;

        return "<div class='json-players'><label>Players: </label>" + $players + "</div><div class='json-teams'><label>Teams: </label>" + $teams + "</div>";

      }
    });
  };

  // Show statistics after register button
  $(".card-body").each(function(){
    var el = $(this),
        button = el.find(".ready-json"),
        $url = button.attr("href"),
        $results = getStatistics($url + "/json/statistics");

    el.append($results);

  });

})(jQuery);


