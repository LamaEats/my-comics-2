
$('.l-item').on('click', function (event) {
    event.preventDefault();
    if (!$(this).hasClass('act')) {
        $('.l-item').removeClass('act');
        $(this).addClass('act');
    } else {
        $(this).removeClass('act');
    }
});