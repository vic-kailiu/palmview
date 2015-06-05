function initCheckList() {
    $('.list-group.checked-list-box .list-group-item').each(function () {
        
        // Settings
        var $widget = $(this),
            $checkbox = $('<input type="checkbox" class="hidden" />'),
            color = ($widget.data('color') ? $widget.data('color') : "primary"),
            style = ($widget.data('style') == "button" ? "btn-" : "list-group-item-"),
            settings = {
                on: {
                    icon: 'glyphicon glyphicon-check'
                },
                off: {
                    icon: 'glyphicon glyphicon-unchecked'
                }
            };
            
        $widget.css('cursor', 'pointer')
        $widget.append($checkbox);

        // Event Handlers
        $widget.unbind('click');
        $widget.on('click', function () {
            if ($checkbox.is(':checked')) return; // disable the uncheck function for user
            $checkbox.prop('checked', !$checkbox.is(':checked'));
            $checkbox.triggerHandler('change');
            updateDisplay();
        });
        $checkbox.unbind('change');
        $checkbox.on('change', function (event) {
            var child = event.target.parentNode;
            var parent = child.parentNode;
            fireBack(Array.prototype.indexOf.call(parent.children, child),
                    event.target.checked)
            updateDisplay();
        });

        // Actions
        function updateDisplay() {
            var isChecked = $checkbox.is(':checked');

            // Set the button's state
            $widget.data('state', (isChecked) ? "on" : "off");

            // Set the button's icon
            $widget.find('.state-icon')
                .removeClass()
                .addClass('state-icon ' + settings[$widget.data('state')].icon);

            // Update the button's color
            if (isChecked) {
                $widget.addClass(style + color + ' active');
            } else {
                $widget.removeClass(style + color + ' active');
            }
        }

        // Initialization
        function init() {
            
            if ($widget.data('checked') == true) {
                $checkbox.prop('checked', !$checkbox.is(':checked'));
            }
            
            updateDisplay();

            // Inject the icon if applicable
            if ($widget.find('.state-icon').length == 0) {
                $widget.prepend('<span class="state-icon ' + settings[$widget.data('state')].icon + '"></span>');
            }
        }
        init();
    });
    
    $('#get-checked-data').on('click', function(event) {
        event.preventDefault(); 
        var checkedItems = {}, counter = 0;
        $("#check-list-box li.active").each(function(idx, li) {
            checkedItems[counter] = $(li).text();
            counter++;
        });
        $('#display-json').html(JSON.stringify(checkedItems, null, '\t'));
    });
}

function getCheckedItems() {
    var checkedItems = {}, counter = 0;
    $("#check-list-box li.active").each(function(idx, li) {
        checkedItems[counter] = $(li).text();
        counter++;
    });

    return checkedItems;
}

function checkItem(index, checked) {
    var items = $("#check-list-box")[0].children;
    var item;
    if (items && items.length > index)
        item = items[index];
    else
        return;

    var checkbox = item.children[1];
    if ( checkbox && $(checkbox).is(':checked') != checked) {
        $(checkbox).prop( "checked", checked );
        $(checkbox).triggerHandler('change');
    }
}