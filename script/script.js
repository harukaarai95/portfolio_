$(document).ready(function() {
    // circle1, circle2, circle3 の表示アニメーションを順番に実行
    $('.circle-1').delay(10).fadeTo(800, 1).css('transform', 'scale(1)');
    $('.circle-3').delay(1000).fadeTo(800, 1).css('transform', 'scale(1)');
    $('.circle-2').delay(1200).fadeTo(1000, 1).css('transform', 'scale(1)');
  });

    $(document).ready(function() {
        $('.card').hover(
          function() {
            // 現在の要素以外にクラスを追加
            $('.card').not(this).addClass('blur');
          },
          function() {
            // クラスを削除
            $('.card').removeClass('blur');
          }
        );
      });

      $(document).ready(function () {
        const $nav = $('.nav');
        const navTop = $nav.offset().top;
      
        $(window).on('scroll', function () {
          if ($(window).scrollTop() >= navTop) {
            $nav.addClass('sticky');
          } else {
            $nav.removeClass('sticky');
          }
        });
      });
      