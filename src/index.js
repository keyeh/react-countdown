import React from "react";
import ReactDOM from "react-dom";
import Countdown from "./Countdown";

import "./styles.scss";

function App() {
  const date1 = new Date("12/31/2018");
  const date2 = new Date("1/1/2018");

  return (
    <div className="App">
      <h1>Countdown</h1>
      A configurable and accessible React component for countdown
      <h2>Usage</h2>
      <pre>
        {`<Countdown endAt={new Date("12/31/2018")} aria-live="polite" aria-label="count down 1" />`}
      </pre>
      <h2>Props</h2>
      <pre>
        endAt: instanceOf(Date).isRequired,<br />
        allowPast: bool, // True: allow negative numbers, False: stop at zero<br />
        "aria-live": string, // If a screenreader is installed, it will announce
        the remaining time every 10 seconds
        <br />"aria-label": string
      </pre>
      {/***************************************************/}
      <h2>Demo</h2>
      <h3>{date1.toString()}</h3>
      stopping at 0, with screenreader announcements every 10s (if installed)
      <Countdown endAt={date1} aria-live="polite" aria-label="count down 1" />
      <br />
      <h3>{date2.toString()}</h3>
      continuing past 0
      <Countdown endAt={date2} allowPast aria-label="count down 2" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
