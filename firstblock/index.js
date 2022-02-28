var registerBlockType = wp.blocks.registerBlockType; // register a block type in this case in ES5 JS version
var createElement = wp.element.createElement; // create an element in simple react version


registerBlockType("blocks-course/firstblock", {
    edit: function() {
        return "Edit";
    },
    save: function() {
        return "Save";
    }
});