<?php
class Destroythissite {
    public function __construct(){
		add_shortcode('destroy-this-site', array($this, 'showbutton'));	
    }
	
	public function showbutton(){
		echo "<button id='destroythissite'>".__('DO NOT PRESS THIS BUTTON!','do-not-press-this-button')."</button>";
	}
}
?>