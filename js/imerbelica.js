jQuery(document).ready(function($){
    // Toggle nav menu on button click
    var $root = $('html, body'),
        menu_toggle = $('.menu-toggle');

    menu_toggle.on('click', function(){
        var $this = $(this);

        $this.toggleClass('close');
        $('.menu,.menu-nav,.menu-nav-item').toggleClass('show');
    });

    // Toggle nav menu on menu item click and smooth scrolling
    $('.menu-nav-item a').on('click', function(){
        var $this = $(this),
            href = $this.attr('href');

        // Toggle nav menu
        menu_toggle.removeClass('close');
        $this.parents('.menu-nav-item, .menu-nav, .menu').removeClass('show');

        // Smooth scrolling
        $root.animate({
            scrollTop: $(href).offset().top - 100
        }, 500, function() {
            window.location.hash = href;
        });

        return false;
    });


    // Attach a submit handler to the form
    $(".contact-form" ).submit(function(event) {

        // Stop form from submitting normally
        event.preventDefault();

        // Serialize submitted form data and get action
        var $form = $(this),
            url = $form.attr("action");

        // Send the data using post
        var posting = $.post(url, $form.serialize());

        // Put the results in a div
        posting.done(function(data) {
            // Parse response
            var response = $.parseJSON(data),
                target = $('#status-messages');

            // Add error/success classes
            if (response.status == 1) {
                target.removeClass('error');
                target.addClass('success');
            } else if (response.status == 0) {
                target.removeClass('success');
                target.addClass('error');
            }

            // Append message
            target.empty().append(response.message).hide().fadeIn(400);
        });
    });
});

function toggleTheme() {
    // Obtains an array of all <link>
    // elements.
    // Select your element using indexing.
    var theme = document.getElementsByTagName('link')[9];
    var menu = document.getElementsByTagName('link')[8];

    // Change the value of href attribute
    // to change the css sheet.
    if (theme.getAttribute('href') == 'css/imerbelica.css') {
        theme.setAttribute('href', 'css/imerbelica_light.css');
    } else {
        theme.setAttribute('href', 'css/imerbelica.css');
    }

    if (menu.getAttribute('href') == 'css/menu.css') {
        menu.setAttribute('href', 'css/menu-light.css');
    } else {
        menu.setAttribute('href', 'css/menu.css');
    }
}