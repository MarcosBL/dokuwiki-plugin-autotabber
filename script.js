/**
 * Script for AutoTabber
 *
 * Handles Tab Keypress
 *
 * @author MarcosBL <soy@marcosbl.com>
 */
jQuery(window).load(function(){
        jQuery("textarea").keydown(function(e) {
                if(e.keyCode === 9) {
                        var start = this.selectionStart;
                        var end = this.selectionEnd;
                        var $this = jQuery(this);
                        var value = $this.val();
                        $this.val(value.substring(0, start)
                                                + "\t"
                                                + value.substring(end));
                        this.selectionStart = this.selectionEnd = start + 1;
                        e.preventDefault();
                }
        });
});
