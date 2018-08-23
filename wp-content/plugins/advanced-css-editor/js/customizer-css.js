/**
 * Theme Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */

( function( $ ) {

	wp.customize( 'advanced_css_global_css', function( value ) {
		$('body').append("<style type='text/css' id='globalcss'></style>");
		value.bind( function( newval ) {
			$('#globalcss').html("@media all { " + newval + " }");
			$("#csseditorglobal").remove(); 
		} );
	} );

	wp.customize( 'advanced_css_desktop_css', function( value ) {
		$('body').append("<style type='text/css'  id='desktopcss'></style>");
		value.bind( function( newval ) {
			$('#desktopcss').html("@media only screen and (min-width: 1024px) { " + newval + " }");
			$("#csseditordesktop").remove(); 
		} );
	} );

	wp.customize( 'advanced_css_tablet_css', function( value ) {
		$('body').append("<style type='text/css' id='tabletcss'></style>");
		value.bind( function( newval ) {
			$('#tabletcss').html("@media only screen and (min-width: 667px) and (max-width: 1024px) { " + newval + " }");
			$("#csseditortablet").remove(); 
		} );
	} );

	wp.customize( 'advanced_css_phone_css', function( value ) {
		$('body').append("<style type='text/css' id='phonecss'></style>");
		value.bind( function( newval ) {
			$('#phonecss').html("@media only screen  and (min-width: 320px)  and (max-width: 667px) { " + newval + " }");
			$("#csseditorphone").remove(); 
		} );
	} );

} )( jQuery );
