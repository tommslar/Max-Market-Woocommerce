/**
 * Theme Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */

( function( $ ) {
	wp.customize( 'advanced_css_layout_picker_setting', function( value ) {
		value.bind( function( newval ) {
			if ( newval == 'global'  ) {
				$( '#customize-preview' ).css('width', '100%');
				$( '#customize-control-advanced_css_global_css' ).css('display', 'block');
				$( '#customize-control-advanced_css_desktop_css' ).css('display', 'none');
				$( '#customize-control-advanced_css_tablet_css' ).css('display', 'none');
				$( '#customize-control-advanced_css_phone_css' ).css('display', 'none');
			} else if ( newval == 'desktop'  ) {
				$( '#customize-preview' ).css('width', '100%');
				$( '#customize-control-advanced_css_global_css' ).css('display', 'none');
				$( '#customize-control-advanced_css_desktop_css' ).css('display', 'block');
				$( '#customize-control-advanced_css_desktop_css label' ).css('display', 'block');
				$( '#customize-control-advanced_css_tablet_css' ).css('display', 'none');
				$( '#customize-control-advanced_css_phone_css' ).css('display', 'none');
			} else if ( newval == 'tablet' ) {
				$( '#customize-preview' ).css('width', '768px');
				$( '#customize-control-advanced_css_global_css' ).css('display', 'none');
				$( '#customize-control-advanced_css_desktop_css' ).css('display', 'none');
				$( '#customize-control-advanced_css_tablet_css' ).css('display', 'block');
				$( '#customize-control-advanced_css_tablet_css label' ).css('display', 'block');
				$( '#customize-control-advanced_css_phone_css' ).css('display', 'none');
			} else if ( newval == 'phone' ) {
				$( '#customize-preview' ).css('width', '320px');
				$( '#customize-control-advanced_css_global_css' ).css('display', 'none');
				$( '#customize-control-advanced_css_desktop_css' ).css('display', 'none');
				$( '#customize-control-advanced_css_tablet_css' ).css('display', 'none');
				$( '#customize-control-advanced_css_phone_css' ).css('display', 'block');
				$( '#customize-control-advanced_css_phone_css label' ).css('display', 'block');
			}
		} );		
	} );
} )( jQuery );