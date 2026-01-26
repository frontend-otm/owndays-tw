$(function () {
  onClickFaqQuestion();
  onClickFaqLink();
});

/**
 * FAQ Question Toggle
 * Toggle open/close FAQ answers when clicking on questions
 */
function onClickFaqQuestion() {
  var $questions = $('.l-guide-faq__list--question');

  $questions.on('click', function () {
    var $this = $(this);
    var $answer = $this.next('.l-guide-faq__list--answer');

    // Toggle current question
    $this.toggleClass('opened');
    $answer.slideToggle(300);
  });
}

/**
 * FAQ Link Smooth Scroll
 * Smooth scroll to FAQ category sections without changing URL hash
 */
function onClickFaqLink() {
  var $links = $('.l-guide-faq__link a[href^="#"]');

  $links.on('click', function (e) {
    e.preventDefault();

    var target = $(this).attr('href');
    var $target = $(target);

    if ($target.length) {
    var offset = window.innerWidth < 768 ? 20 : 40;

      $('html, body').animate(
        {
          scrollTop: $target.offset().top - offset
        },
        500
      );
    }
  });
}

