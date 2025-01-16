$(document).ready(function() {
    // circle1, circle2, circle3 の表示アニメーションを順番に実行
    $('.circle-1').delay(10).fadeTo(800, 1).css('transform', 'scale(1)');
    $('.circle-3').delay(1000).fadeTo(800, 1).css('transform', 'scale(1)');
    $('.circle-2').delay(1200).fadeTo(1000, 1).css('transform', 'scale(1)');
  });
  

  $(function () {
    var cursor = $("#cursor");
  
    // カーソル移動
    $(document).on("mousemove", function (e) {
      var x = e.clientX;
      var y = e.clientY;
      cursor.css({
        "opacity": "1",
        "top": y + "px",
        "left": x + "px"
      });
    });
  
    // 特定の範囲内にカーソルが入ったときにカーソル変更
    $(".cursor-area").on("mouseenter", function () {
      cursor.css({
        "cursor":"none",
        "background": "radial-gradient(circle at center, rgba(142, 222, 253, 0.8) 0%, white 70%)",
        "width": "100px", // カーソルを大きくする
        "height": "100px", // カーソルを大きくする
        "border-radius": "50%",
      });
    });
  
    // 範囲外に出たときにカーソルを元に戻す
    $(".cursor-area").on("mouseleave", function () {
      cursor.css({
        "background": "transparent", // 元の色に戻す
        "width": "20px", // 元のサイズに戻す
        "height": "20px" // 元のサイズに戻す
      });
    });
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
      