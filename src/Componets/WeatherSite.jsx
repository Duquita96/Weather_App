import React, { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  return (

<div>
      <div>
      <h2>Local Time: {time.toLocaleTimeString()}.</h2>
    </div>
</div>



  );
}

export default Timer;