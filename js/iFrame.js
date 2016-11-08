  //Iframe open and close control
  $(document).ready(function() {
      $(".popup").hide();
      $(".openpop").click(function(e) {
          e.preventDefault();
          $("iframe").attr("src", $(this).attr('href'));
          $(".popup").fadeIn('slow');
      });

      $(".iframeClose").click(function() {

          $(".popup").parent().fadeOut("slow");
          $("#port").fadeIn("slow");


      });
      $(".iframeClose").click(function(e) {
          doSomething();
          return false;
      });
  });
