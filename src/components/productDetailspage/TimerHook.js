import React from "react";
import { useTimer } from "react-timer-hook";

export function MyTimer({ dataDays, dataHours, dataMinutes, dataSeconds }) {
  const totalSeconds =
    dataDays * 24 * 3600 + dataHours * 3600 + dataMinutes * 60 + dataSeconds;

  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp: totalSeconds
      ? new Date(Date.now() + totalSeconds * 1000)
      : null,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div className="time deal-timer product-deal-timer mx-md-0 mx-auto">
      <div className="product-title">
        <h4>Hurry up! Sales Ends In</h4>
      </div>
      <ul>
        <li>
          <div className="counter d-block">
            <div className="days d-block">
              <h5>{days}</h5>
            </div>
            <h6>Days</h6>
          </div>
        </li>
        <li>
          <div className="counter d-block">
            <div className="hours d-block">
              <h5>{hours}</h5>
            </div>
            <h6>Hours</h6>
          </div>
        </li>
        <li>
          <div className="counter d-block">
            <div className="minutes d-block">
              <h5>{minutes}</h5>
            </div>
            <h6>Min</h6>
          </div>
        </li>
        <li>
          <div className="counter d-block">
            <div className="seconds d-block">
              <h5>{seconds}</h5>
            </div>
            <h6>Sec</h6>
          </div>
        </li>
      </ul>
    </div>
  );
}

// import React from "react";
// import { useTimer } from "react-timer-hook";

// export function MyTimer() {
//   const startDate = new Date("2024-07-01T00:00:00");
//   const endDate = new Date("2024-10-01T00:00:00");

//   const totalSeconds = Math.floor((endDate - startDate) / 1000);

//   const { seconds, minutes, hours, days } = useTimer({
//     expiryTimestamp: totalSeconds
//       ? new Date(Date.now() + totalSeconds * 1000)
//       : null,
//     onExpire: () => console.warn("onExpire called"),
//   });

//   return (
//     <div className="time deal-timer product-deal-timer mx-md-0 mx-auto">
//       <div className="product-title">
//         <h4>Hurry up! Sales Ends In</h4>
//       </div>
//       <ul>
//         <li>
//           <div className="counter d-block">
//             <div className="days d-block">
//               <h5>{days}</h5>
//             </div>
//             <h6>Days</h6>
//           </div>
//         </li>
//         <li>
//           <div className="counter d-block">
//             <div className="hours d-block">
//               <h5>{hours}</h5>
//             </div>
//             <h6>Hours</h6>
//           </div>
//         </li>
//         <li>
//           <div className="counter d-block">
//             <div className="minutes d-block">
//               <h5>{minutes}</h5>
//             </div>
//             <h6>Min</h6>
//           </div>
//         </li>
//         <li>
//           <div className="counter d-block">
//             <div className="seconds d-block">
//               <h5>{seconds}</h5>
//             </div>
//             <h6>Sec</h6>
//           </div>
//         </li>
//       </ul>
//     </div>
//   );
// }
