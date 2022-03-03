import { registerBlockType } from '@wordpress/block';

registerBlockType( 'blocks-course/firstblock', {
	edit: function () {
		//return "Edit";
		return <p className="FirstBlock"> Edit JSX</p>;
	},
	save: function () {
		return <p className="FirstBlock"> save JSX</p>;
	},
} );
