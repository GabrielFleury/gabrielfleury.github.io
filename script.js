$(function() {
	
	$( ".showcase" ).each(function( index ) {
		$url=$(this).attr("src");
		$(this).after('<a href='+$url+' target="_blank" class="expand"><img src="../img/expand.png" /></a>');
	});
	
	$width=( $("#content").width() )/2 -25;
	$( ".expand" ).css( "left", $width+"px" );
	
	$(window).resize(function () {
		$width=( $("#content").width() )/2 -25;
		$( ".expand" ).css( "left", $width+"px" );
	}).resize();
	
});