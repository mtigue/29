<script>
	
	// make collapsible items scroll to top on open
	
	$("div.ui-collapsible-set").live("expand", function(e) {
    var top = $(e.target).offset().top;
        if ($(window).scrollTop() > top)
            $(window).scrollTop(top);
});
		
		
		$(document).on("expand", 'div.ui-collapsible-set', function(e) {
var top = $(e.target).offset().top;
if ($(window).scrollTop() > top)
$(window).scrollTop(top);
});
		
	</script>-->

