jQuery(document).ready(function() {
  var btn = $("#button");
  /*  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  }); */
  btn.on("click", function(e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });

  /*  A recursive function that fades the logo to 10% visibility and back to 100% */
  function pulse() {
    $("#logo")
      .fadeTo(2000, 0.1)
      .fadeTo(2000, 1, pulse);
  }
  pulse();

  // Changing product background color
  $('[data-type="mineralwater"]').css("background", "green");

  //Make first word of person cards bold
  $(".person-card p").each(function() {
    var html = $(this).html();
    var word = html.substr(0, html.indexOf(" "));
    var rest = html.substr(html.indexOf(" "));
    $(this)
      .html(rest)
      .prepend($("<strong/>").html(word));
  });

  //Move Michael Lewiston to the top of personal cards
  $(".person-card:contains(Lewiston)").prependTo(".people-cards");

  //Change 'People' to 'Personnel' in navbar and topic
  $(".navbar li a:contains(people)").text("Personnel");
  $("#people .headline").text("Personnel");
});
