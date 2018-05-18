(function($) {

  function getStatistics($url) {
    var $url = "https://" + $url + "/json/statistics";
    $.getJSON($url).done(function(data) {
      $.each(data.items, function(i, item) {
        console.log(item);
      });
    });
  };

  getStatistics("thessaloniki.psak.3x3.gr");

})(jQuery);


