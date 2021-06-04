/**
 * Script for AutoTabber
 * Handles Tab Keypress
 * @author MarcosBL <soy@marcosbl.com>
*/

/* DOKUWIKI:include taboverride.js */
/* DOKUWIKI:include taboverride.escape.js */

jQuery(window).on('load', function(){
        var textareas = document.getElementsByTagName('textarea');
        tabOverride.set(textareas).tabSize(0).autoIndent(true).escape(true);
});
