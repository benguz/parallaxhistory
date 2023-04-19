$(function() {
    $(window).on('scroll', function() {
        $('#content').css('margin-top', $(window).scrollTop() * -.3);
    });
});

console.log($('body'));
///
$(function() {
    $(window).on('scroll', function() {
      $('.text').each(function() {
        var scrollTop = $(window).scrollTop();
        var elementOffset = $(this).offset().top;
        var distance = (elementOffset - scrollTop) + (windowHeight / 2);
        var windowHeight = $(window).height() * 0.8; // 80% of the viewport height
        var visible = (distance < windowHeight);
        console.log("test")
        if (visible) {
            console.log("visible")
          $(this).css('opacity', 1);
        }
      });
    });
  });
  ///
