function autoPlayYouTubeModal() {
  var trigger = $("body").find('[data-toggle="modal"]');
  trigger.click(function () {
    var theModal = $(this).data("target"),
      videoSRC = $(this).attr("data-video");
    $(theModal + ' iframe').attr('src', videoSRC);
    $(theModal + ' button.close').click(function () {
      $(theModal + ' iframe').attr('src', videoSRC);
    });
  });
}

$(function () {
  function centerModals($element) {
    var $modals;
    if ($element.length) {
      $modals = $element;
    } else {
      $modals = $(".modal" + ':visible');
    }
    $modals.each(function (i) {
      var $clone = $(this).clone().css('display', 'block').appendTo('body');
      var top = Math.round(($clone.height() - $clone.find('.modal-content').height()) / 2);
      top = top > 0 ? top : 0;
      $clone.remove();
      $(this).find('.modal-content').css("margin-top", top);
    });
  }

  // modal表示時
  $(".modal").on('show.bs.modal', function (e) {
    centerModals($(this));
  });
  // windowリサイズ時
  $(window).on('resize', centerModals);

  autoPlayYouTubeModal();
});