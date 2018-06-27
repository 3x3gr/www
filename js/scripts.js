(function($) {

  function getStatistics($url) {
    var result = "";
    $.ajax({
      url: $url,
      async: false,
      success:function(data) {
        if (data.players != 0) {
          $players = "<div class='json-players'>" + data.players + " Players</div>";
        } else {
          $players = "";
        }

        if (data.teams != 0) {
          $teams = "<div class='json-teams'>" + data.teams + " Teams</div>";
        } else {
          $teams = "";
        }

        result = "<hr>" + $players + $teams;
      }
   });
   return result;
  };

  // Show statistics after register button
  $(".ready-json").each(function(){
    var el = $(this),
        $url = el.attr("href"),
        $results = getStatistics($url + "/json/statistics");

    el.after($($results));

  });

})(jQuery);


