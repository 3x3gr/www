(function($) {

  function getStatistics($url) {
    var result = "";
    $.ajax({
      url: $url,
      async: false,
      success:function(data) {
result = "<hr><div class='json-players'>" + data.players + " Players</div><div class='json-teams'>" + data.teams + " Teams</div>";
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


