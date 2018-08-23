<?php
// Class to create a custom layout control for CSS editors
class Advanded_CSS_Layout_Picker_Custom_Control extends WP_Customize_Control {
	// Render the content on the theme customizer page
	public function render_content()  {
		?>
			<label>
				<span class="customize-control-title"><?php echo esc_html( $this->label ); ?></span>
				<?php foreach ( $this->choices as $value => $label ) : ?>
					<input type="radio" class="ti-layout" id="ti_layout_<?php echo esc_attr( $value ); ?>" value="<?php echo esc_attr( $value ); ?>" name="css-control" <?php $this->link(); checked( $this->value(), $value ); ?> /> <label for="ti_layout_<?php echo esc_attr( $value ); ?>"><?php echo $label; ?></label>
				<?php endforeach; ?>
			</label>
		<?php
	}
}
?>