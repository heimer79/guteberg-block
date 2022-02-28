<?php
/**
 * Plugin Name: First Block
 * Plugin URI: http://heimer.com 
 * Description: My first block
 * Author: Heimer 
 * Author URI: http://heimer.com
 * 
 */ 



function blocks_course_firstblock_init() {

    register_block_type_from_metadata( __DIR__ );

}

add_action( "init", "blocks_course_firstblock_init" );