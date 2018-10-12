# react-countdown
A configurable and accessible React component for countdown
## Usage
``` <Countdown endAt={new Date("12/31/2018")} aria-live="polite" aria-label="count down 1" />```
## Props
```
endAt: instanceOf(Date).isRequired,
allowPast: bool, // True: allow negative numbers, False: stop at zero
"aria-live": string, // If a screenreader is installed, it will announce the remaining time every 10 seconds
"aria-label": string
```

