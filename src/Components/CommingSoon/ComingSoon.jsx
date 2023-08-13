import { useState, useEffect, useRef } from "react";
import dayjs from "dayjs";
import drone from '../../assets/drone.jpg'

// const launchTimestamp = 1692489600000; // 20 Aug 2023
const launchTimestamp = 1693152000000; // 26 Aug 2023
const ComingSoon = () => {
    const [countdown, setCountdown] = useState(
        dayjs(launchTimestamp).diff(dayjs(), "millisecond")
      );
      const minuteCircle = useRef();
      const secondCircle = useRef();
      const hourCircle = useRef();
      const daysCircle = useRef();
      const changeCircleoffset = (seconds, minutes, hours, days) => {
        if (daysCircle.current) {
          daysCircle.current.style.strokeDashoffset = `${
            days > 0 ? 440 - (days * 440) / 365 : 440
          }px`;
          hourCircle.current.style.strokeDashoffset = `${
            hours > 0 ? 451 - (hours * 451) / 24 : 451
          }px`;
          minuteCircle.current.style.strokeDashoffset = `${
            minutes > 0 ? 451 - (minutes * 451) / 60 : 451
          }px`;
          secondCircle.current.style.strokeDashoffset = `${
            seconds > 0 ? 451 - (seconds * 451) / 60 : 451
          }px`;
        }
      };
      useEffect(() => {
        const interval = setInterval(() => {
          const newCountdown = dayjs(launchTimestamp).diff(dayjs(), "millisecond");
          setCountdown(newCountdown);
        }, 1000);
    
        return () => {
          clearInterval(interval);
        };
      }, []);
    
      const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((countdown % (1000 * 60)) / 1000);
      changeCircleoffset(seconds, minutes, hours, days);
    
    return (

        <div className="relative   min-h-screen h-max md:h-screen flex-col  justify-center items-center  bg-cover ">
            <img src={drone} alt="Background Image" className="w-full h-full object-cover blur-sm"></img>
            <div className="absolute top-24 w-full  "
       
       >
          <div className=" text-white text-center flex  flex-col justify-center items-center ">
             <h1  className="text-6xl font-bold my-2">The Captain Taxi</h1>
          <p className="text-3xl font-bold">Comming Soon</p>
          </div>
               <div className="flex  flex-col md:flex-row  justify-center items-center  bg-cover" >
        <div className="relative">
     
          <svg className="-rotate-90 h-48 w-48">
            <circle
              r="70"
              cx="90"
              cy="90"
              className="fill-transparent stroke-[#88adf1] stroke-[8px]"
            ></circle>
            <circle
              r="70"
              ref={daysCircle}
              cx="90"
              cy="90"
              style={{
                strokeDasharray: "440px",
              }}
              className="fill-transparent stroke-white  stroke-[8px]"
            ></circle>
          </svg>
          <div className="text-white absolute top-16 left-11 text-2xl font-semibold flex flex-col items-center w-24 h-20">
            <span className="text-center">{days}</span>
            <span className="text-center">
              {days == 1 ? "Day" : "Days"}
            </span>
          </div>
        </div>
        <div className="relative">
          <svg className="-rotate-90 h-48 w-48">
            <circle
              r="70"
              cx="90"
              cy="90"
              className="fill-transparent stroke-[#88adf1] stroke-[8px]"
            ></circle>
            <circle
              r="70"
              ref={hourCircle}
              cx="90"
              cy="90"
              style={{
                strokeDasharray: "451px",
              }}
              className="fill-transparent stroke-white  stroke-[8px]"
            ></circle>
          </svg>
          <div className="text-white absolute top-16 left-11 text-2xl font-semibold flex flex-col items-center w-24 h-20">
            <span className="text-center">{hours}</span>
            <span className="text-center">
              {hours == 1 ? "Hour" : "Hours"}
            </span>
          </div>
        </div>
        <div className="relative">
          <svg className="-rotate-90 h-48 w-48">
            <circle
              r="70"
              cx="90"
              cy="90"
              className="fill-transparent stroke-[#88adf1] stroke-[8px]"
            ></circle>
            <circle
              r="70"
              ref={minuteCircle}
              cx="90"
              cy="90"
              style={{
                strokeDasharray: "451px",
              }}
              className="fill-transparent stroke-white stroke-[8px]"
            ></circle>
          </svg>
          <div className="text-white absolute top-16 left-11 text-2xl font-semibold flex flex-col items-center w-24 h-20">
            <span className="text-center">{minutes}</span>
            <span className="text-center">
              {minutes== 1 ? "Minute" : "Minutes"}
            </span>
          </div>
        </div>
        <div className="relative">
          <svg className="-rotate-90 h-48 w-48">
            <circle
              r="70"
              cx="90"
              cy="90"
              className="fill-transparent stroke-[#88adf1] stroke-[8px]"
            ></circle>
            <circle
              r="70"
              cx="90"
              cy="90"
              className=" fill-transparent stroke-white  stroke-[8px]"
              ref={secondCircle}
              style={{
                strokeDasharray: "451px",
              }}
            ></circle>
          </svg>
          <div className="text-white absolute top-16 left-11 text-2xl font-semibold flex flex-col items-center w-24 h-20">
            <span className="text-center">{seconds}</span>
            <span className="text-center">
              {seconds == 1 ? "Second" : "Seconds"}
            </span>
          </div>
        </div>
        </div>
      </div>
      </div>
      );
}
 
export default ComingSoon;