import React, { useEffect, useState } from "react";

const CountdownTimer = () => {
  const initialTime = getTimeRemaining();
  const [time, setTime] = useState(
    JSON.parse(localStorage.getItem("countdownTimer")) || initialTime
  );

  function getTimeRemaining() {
    // Calculate the time remaining until the end of the day two days from now
    const now = new Date();
    const endOfDay = new Date(now);
    endOfDay.setDate(now.getDate() + 2); // Set the end day to 2 days from now
    endOfDay.setHours(23, 59, 59, 999); // Set time to 23:59:59.999 for the end day

    const timeRemaining = endOfDay.getTime() - now.getTime();
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24)); // Calculate remaining days
    const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
    const seconds = Math.floor((timeRemaining / 1000) % 60);

    return {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (
        time.days === 0 &&
        time.hours === 0 &&
        time.minutes === 0 &&
        time.seconds === 0
      ) {
        clearInterval(timer);
      } else {
        if (time.seconds === 0) {
          if (time.minutes === 0) {
            const newTime = getTimeRemaining();
            setTime(newTime);
            localStorage.setItem("countdownTimer", JSON.stringify(newTime));
          } else {
            setTime({
              ...time,
              minutes: time.minutes - 1,
              seconds: 59,
            });
          }
        } else {
          setTime({
            ...time,
            seconds: time.seconds - 1,
          });
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  return (
    <div className="time deal-timer product-deal-timer mx-md-0 mx-auto">
      <div className="product-title">
        <h4>Hurry up! Sales Ends In</h4>
      </div>
      <ul>
        <li>
          <div className="counter d-block">
            <div className="days d-block">{time.days}</div>
            <h6>Days</h6>
          </div>
        </li>
        <li>
          <div className="counter d-block">
            <div className="hours d-block">{time.hours}</div>
            <h6>Hours</h6>
          </div>
        </li>
        <li>
          <div className="counter d-block">
            <div className="minutes d-block">{time.minutes}</div>
            <h6>Min</h6>
          </div>
        </li>
        <li>
          <div className="counter d-block">
            <div className="seconds d-block">{time.seconds}</div>
            <h6>Sec</h6>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CountdownTimer;
