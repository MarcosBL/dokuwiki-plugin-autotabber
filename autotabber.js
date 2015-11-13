/**
 * Script for AutoTabber
 * Handles Tab Keypress
 * @author MarcosBL <soy@marcosbl.com>
*/


jQuery(window).load(function(){
        var textareas = document.getElementsByTagName('textarea');
        tabOverride.set(textareas).tabSize(0).autoIndent(true).escape(true);
});
