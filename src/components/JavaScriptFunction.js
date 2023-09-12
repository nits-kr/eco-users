import React, { useEffect } from "react";
import $ from "jquery";

export function UseCountdownTimer(deadline) {
  useEffect(() => {
    initializeClock("clockdiv-1", deadline);
  }, []);

  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    if (!clock) {
      console.error("Element with ID " + id + " not found.");
      return;
    }
    var daysSpan = clock.querySelector(".days");
    var hoursSpan = clock.querySelector(".hours");
    var minutesSpan = clock.querySelector(".minutes");
    var secondsSpan = clock.querySelector(".seconds");

    function updateClock() {
      var t = getTimeRemaining(endtime);

      daysSpan.textContent = t.days;
      hoursSpan.textContent = ("0" + t.hours).slice(-2);
      minutesSpan.textContent = ("0" + t.minutes).slice(-2);
      secondsSpan.textContent = ("0" + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
}

export function StickyCartScroll() {
  window.addEventListener("scroll", function () {
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const widthContent =
      window.innerWidth || document.documentElement.clientWidth;

    if (widthContent > 300) {
      if (scroll >= 800) {
        document.body.classList.add("stickyCart");
      } else {
        document.body.classList.remove("stickyCart");
      }
    }
  });
}
export function InitializeColorPicker() {
  const darkButton = document.querySelector("#darkButton");
  const lightButton = document.querySelector("#lightButton");
  const colorLink = document.querySelector("#color-link");

  darkButton.addEventListener("click", function () {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    colorLink.setAttribute("href", "../assets/css/dark.css");
  });

  lightButton.addEventListener("click", function () {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    colorLink.setAttribute("href", "../assets/css/style.css");
  });

  // RTL Setting
  const rtlElements = document.querySelectorAll(".rtl");
  const htmlElement = document.querySelector("html");
  const rtlLink = document.querySelector("#rtl-link");

  rtlElements.forEach((rtlElement) => {
    rtlElement.addEventListener("click", function () {
      if (document.body.classList.contains("ltr")) {
        htmlElement.setAttribute("dir", "rtl");
        document.body.classList.remove("ltr");
        document.body.classList.add("rtl");
        rtlLink.setAttribute("href", "../assets/css/vendors/bootstrap.rtl.css");
      } else {
        htmlElement.setAttribute("dir", "");
        document.body.classList.remove("rtl");
        document.body.classList.add("ltr");
        rtlLink.setAttribute("href", "../assets/css/vendors/bootstrap.css");
      }
    });
  });
}

export const HandleOkButtonClick = () => {
  const cookieBarBox = document.querySelector(".cookie-bar-box");
  if (cookieBarBox) {
    cookieBarBox.style.display = "none";
  }
};
