$("html").niceScroll({
    styler: "fb",
    cursorcolor: "#4ECDC4",
    cursorwidth: '6',
    cursorborderradius: '10px',
    background: '#404040',
    spacebarenabled: false,
    cursorborder: '',
    zindex: '1000'
});

// widget tools
jQuery('.panel .tools .fa-chevron-down').click(function() {
    var el = jQuery(this).parents(".panel").children(".panel-body");
    if (jQuery(this).hasClass("fa-chevron-down")) {
        jQuery(this).removeClass("fa-chevron-down").addClass("fa-chevron-up");
        el.slideUp(200);
    } else {
        jQuery(this).removeClass("fa-chevron-up").addClass("fa-chevron-down");
        el.slideDown(200);
    }
});

jQuery('.panel .tools .fa-times').click(function() {
    jQuery(this).parents(".panel").parent().remove();
});


//    tool tips
( $('.tooltips').length > 0 ) && $('.tooltips').tooltip();

//    popovers
( $('.popovers').length > 0 ) && $('.popovers').popover();