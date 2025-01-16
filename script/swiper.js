
const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 3000, // 3秒ごとにスライド
    disableOnInteraction: false, // ユーザー操作でオートプレイを無効化しない
  },
  speed: 2000,
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ユーザーがスライドをクリックしたらオートプレイを停止
document.querySelector(".swiper-wrapper").addEventListener("click", () => {
  swiper.autoplay.stop(); // オートプレイを停止
  console.log("Autoplay stopped by user interaction");
});

swiper.on('slideChange', function() {
  if (swiper.isEnd) {
    swiper.autoplay.stop(); // 最後のスライドに到達したら自動再生停止
  }
});