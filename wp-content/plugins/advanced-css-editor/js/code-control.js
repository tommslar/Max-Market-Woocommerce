jQuery(document).ready(function($) {

	$( '#render_advanced_css_desktop_css' ).css('display', 'none');
	$( '#render_advanced_css_tablet_css' ).css('display', 'none');
	$( '#render_advanced_css_phone_css' ).css('display', 'none');

	$('.advanced-code-control').each(function() {
		var id = $(this).find('textarea').attr('id');
		var id = document.getElementById(id);

		if ( ace.editor === 0 ) {
			var editor = CodeMirror.fromTextArea(id, {
				lineNumbers: true,
				mode: 'css',
				matchBrackets: true,
			});
		} else {
			var editor = wp.CodeMirror.fromTextArea(id, {
				lineNumbers: true,
				mode: 'css',
				matchBrackets: true,
			});
		}

		editor.on('change', function(){
			editor.save(); 
			$(id).trigger('change');
		});

		$('.accordion-section').on( 'click', function() {
			editor.refresh();
		});
	});

	wp.customize( 'advanced_css_layout_picker_setting', function( value ) {
		value.bind( function( newval ) {
			if ( newval == 'global'  ) {
				$( '#customize-preview' ).css('width', '100%');
				$( '#render_advanced_css_global_css' ).css('display', 'list-item');
				$( '#render_advanced_css_desktop_css' ).css('display', 'none');
				$( '#render_advanced_css_tablet_css' ).css('display', 'none');
				$( '#render_advanced_css_phone_css' ).css('display', 'none');
				$( '#render_advanced_css_global_css .CodeMirror textarea' ).trigger( "click" );
			} else if ( newval == 'desktop'  ) {
				$( '#customize-preview' ).css('width', '100%');
				$( '#render_advanced_css_global_css' ).css('display', 'none');
				$( '#render_advanced_css_desktop_css' ).css('display', 'list-item');
				$( '#render_advanced_css_tablet_css' ).css('display', 'none');
				$( '#render_advanced_css_phone_css' ).css('display', 'none');
				$( '#render_advanced_css_desktop_css .CodeMirror textarea' ).trigger( "click" );
			} else if ( newval == 'tablet' ) {
				$( '#customize-preview' ).css('width', '768px');
				$( '#render_advanced_css_global_css' ).css('display', 'none');
				$( '#render_advanced_css_desktop_css' ).css('display', 'none');
				$( '#render_advanced_css_tablet_css' ).css('display', 'list-item');
				$( '#render_advanced_css_phone_css' ).css('display', 'none');
				$( '#render_advanced_css_tablet_css .CodeMirror textarea' ).trigger( "click" );
			} else if ( newval == 'phone' ) {
				$( '#customize-preview' ).css('width', '320px');
				$( '#render_advanced_css_global_css' ).css('display', 'none');
				$( '#render_advanced_css_desktop_css' ).css('display', 'none');
				$( '#render_advanced_css_tablet_css' ).css('display', 'none');
				$( '#render_advanced_css_phone_css' ).css('display', 'list-item');
				$( '#render_advanced_css_phone_css .CodeMirror textarea' ).trigger( "click" );
			}
		});
	});

});