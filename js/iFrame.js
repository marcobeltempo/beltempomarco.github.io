  //Iframe open and close control
  $(document).ready(function () {
    $(".popup").hide();
    $(".openpop").click(function (e) {
        e.preventDefault();
        $("iframe").attr("src", $(this).attr('href'));
        $(".links").fadeOut('slow');
        $(".popup").fadeIn('slow');
    });

    $(".iframeClose").click(function () {
	
        $(this).parent().fadeOut("slow");
        $(".links").fadeIn("slow");
	
		
    });
	$(".iframeClose").click(function(e) {
     doSomething();
     return false;
});
});
