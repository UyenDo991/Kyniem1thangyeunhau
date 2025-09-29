document.addEventListener('DOMContentLoaded', function() {
  
  var days = document.querySelector('.days span');
  var hour = document.querySelector('.hour');
  var min = document.querySelector('.min');
  var second = document.querySelector('.second');

  var startDate = new Date(2025, 7, 28); // 28 August 2025

  function countTime() {
    let now = new Date(); // Lấy thời gian hiện tại liên tục
    let diff = now - startDate;

    if (diff < 0) {
      // Nếu ngày hiện tại trước startDate, hiển thị 0
      days.innerText = 0;
      hour.innerText = 0;
      min.innerText = 0;
      second.innerText = 0;
      return;
    }

    days.innerText = Math.floor(diff / 86400000);

    let ms = diff % 86400000;
    hour.innerText = Math.floor(ms / 3600000);
    min.innerText = Math.floor((ms % 3600000) / 60000);
    second.innerText = Math.floor((ms % 60000) / 1000);
  }

  countTime();
  setInterval(countTime, 1000);

}, false);
