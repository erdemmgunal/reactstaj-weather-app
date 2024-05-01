"use client";
import { useEffect, useState } from "react";

function Clock({ initial, timezone }) {
  const [time, setTime] = useState(calculateLocalTime(initial, timezone));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateLocalTime(new Date(), timezone));
    }, 1000);

    return () => clearInterval(timer);
  }, [timezone]);

  function calculateLocalTime(initialTime, offsetSeconds) {
    const localTime = new Date(initialTime.getTime() + offsetSeconds * 1000);
    return localTime;
  }

  return (
    <div className="tabular-nums text-[#FAFAFA]">
      {time.toLocaleTimeString("en-US", {
        timeZone: "UTC",
        hour12: true,
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
      })}
    </div>
  );
}

export default Clock;