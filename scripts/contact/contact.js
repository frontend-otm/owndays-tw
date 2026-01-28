$(function () {
  onClickContactLink();
});

function onClickContactLink() {
  $('.l-contact__navigation a').on('click', function (e) {
    e.preventDefault();

    var targetId = $(this).attr('href');
    var $target = $(targetId);

    if ($target.length) {
      var scrollPosition = $target.offset().top;

      $('html, body').animate(
        {
          scrollTop: scrollPosition,
        },
        500
      );
    }
  });
}
