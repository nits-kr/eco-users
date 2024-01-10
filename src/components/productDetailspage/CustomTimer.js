import React, { useState, useEffect } from "react";

const CustomTimer = ({ days, hours, minutes, seconds }) => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      let totalSeconds =
        days * 24 * 3600 + hours * 3600 + minutes * 60 + seconds;
      const interval = setInterval(() => {
        const days = Math.floor(totalSeconds / (3600 * 24));
        const remainingSeconds = totalSeconds % (3600 * 24);
        const hours = Math.floor(remainingSeconds / 3600);
        const remainingSecondsAfterHours = remainingSeconds % 3600;
        const minutes = Math.floor(remainingSecondsAfterHours / 60);
        const seconds = remainingSecondsAfterHours % 60;

        setTime((prevTime) => ({
          ...prevTime,
          days,
          hours,
          minutes,
          seconds,
        }));

        if (totalSeconds === 0) {
          clearInterval(interval);
        } else {
          totalSeconds--;
        }
      }, 1000);

      return () => clearInterval(interval);
    };

    calculateTime();
  }, [days, hours, minutes, seconds]);

  return (
    <div className="time deal-timer product-deal-timer mx-md-0 mx-auto">
      <div className="product-title">
        <h4>Hurry up! Sales Ends In</h4>
      </div>
      <ul>
        <li>
          <div className="counter d-block">
            <div className="days d-block">
              <h5>{time.days}</h5>
            </div>
            <h6>Days</h6>
          </div>
        </li>
        <li>
          <div className="counter d-block">
            <div className="hours d-block">
              <h5>{time.hours}</h5>
            </div>
            <h6>Hours</h6>
          </div>
        </li>
        <li>
          <div className="counter d-block">
            <div className="minutes d-block">
              <h5>{time.minutes}</h5>
            </div>
            <h6>Min</h6>
          </div>
        </li>
        <li>
          <div className="counter d-block">
            <div className="seconds d-block">
              <h5>{time.seconds}</h5>
            </div>
            <h6>Sec</h6>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CustomTimer;
