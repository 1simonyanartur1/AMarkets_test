export function stock() {
  const countdownTimers = document.querySelectorAll('.js-countdown');

  initialiseCountdownTimers({
    timers: countdownTimers
  });

  function getRemainingTime(endtime) {
    if (typeof endtime !== 'object') {
      throw new Error('getRemainingTime expects a Date object');
    }

    const total = Date.parse(endtime) - Date.parse(new Date());

    return {
      total: total,
      days: Math.floor(total / (1000 * 60 * 60 * 24)),
      hours: Math.floor((total / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((total / 1000 / 60) % 60),
      // seconds: Math.floor((total / 1000) % 60)
    };
  }

  function initialiseTimer({
    timer,
    endtime
  }) {
    let timeInterval;
    const dayElem = timer.querySelector('.js-countdown-days');
    const hourElem = timer.querySelector('.js-countdown-hours');
    const minuteElem = timer.querySelector('.js-countdown-minutes');
    // const secondElem = timer.querySelector('.js-countdown-seconds');

    function updateTimer() {
      const t = getRemainingTime(endtime);

      if (t.total >= 0) {
        dayElem.innerHTML = (`0${t.days}`).slice(-2);
        hourElem.innerHTML = (`0${t.hours}`).slice(-2);
        minuteElem.innerHTML = (`0${t.minutes}`).slice(-2);
        // secondElem.innerHTML = (`0${t.seconds}`).slice(-2);
      }

      if (t.total <= 0) clearInterval(timeInterval);
    }

    updateTimer();
    timeInterval = setInterval(updateTimer, 60000);
  }

  function initialiseCountdownTimers({
    timers
  }) {
    // if (!timers || !Array.isArray(timers)) return;

    timers.forEach((timer) => {
      const countdownEnd = timer.getAttribute('data-countdown-end');

      if (countdownEnd) {
        const endtime = new Date(Date.parse(countdownEnd));
        initialiseTimer({
          timer,
          endtime
        });
      }
    });


  }

  // Set cookie.
  function setCookie(name, value, expires, path, domain, secure) {
    document.cookie = name + "=" + escape(value) +
      ((expires) ? "; expires=" + expires : "") +
      ((path) ? "; path=" + path : "") +
      ((domain) ? "; domain=" + domain : "") +
      ((secure) ? "; secure" : "");
  }
  // Get cookie.
  function getCookie(name) {
    var cookie = " " + document.cookie;
    var search = " " + name + "=";
    var setStr = null;
    var offset = 0;
    var end = 0;
    if (cookie.length > 0) {
      offset = cookie.indexOf(search);
      if (offset != -1) {
        offset += search.length;
        end = cookie.indexOf(";", offset)
        if (end == -1) {
          end = cookie.length;
        }
        setStr = unescape(cookie.substring(offset, end));
      }
    }
    return (setStr);
  }
  // Delete cookie.
  function delCookie(name) {
    document.cookie = name + "=" + "; expires=Thu, 01 Jan 1970 00:00:01 GMT";
  }

  const stock = document.querySelector('.js-stock');
  const stockBtn = document.querySelector('.js-stock-close');

  if (getCookie('stockWindow')) {
    stock.style.display = 'none';
  } else { }
  
  stockBtn.addEventListener('click', function (e) {
    setCookie('stockWindow', '1');
    stock.style.display = 'none';
  });
}