import React from "react";
import PropTypes from "prop-types";
import NumberBox from "./NumberBox";
import moment from "moment";
import humanize from "humanize-duration";

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.tick = this.tick.bind(this);
    this.state = {
      duration: moment.duration(),
      ariaLiveString: "" // for screenreaders since they don't read the live countdown correctly
    };
  }
  static propTypes = {
    endAt: PropTypes.instanceOf(Date).isRequired,
    allowPast: PropTypes.bool,
    "aria-live": PropTypes.string,
    "aria-label": PropTypes.string
  };

  componentWillMount() {
    this.tick();
    this.intervalId = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  tick() {
    // Recalculate the duration.
    const diff = moment(this.props.endAt).diff(moment());
    let duration = moment.duration(diff);
    // Set to 0 if the date is in the past and allowPast prop is false
    if (diff < 0 && !this.props.allowPast) {
      duration = moment.duration(0);
    }
    this.setState({ duration });

    // Update string for screenreaders every 10s
    if (Math.round(duration.asSeconds()) % 10 === 0) {
      let ariaLiveString = diff < 0 ? "-" : ""; // negative sign if needed
      ariaLiveString += humanize(
        Math.round(duration.asSeconds()) * 1000, // round to nearest second
        {
          units: ["d", "h", "m", "s"],
          conjunction: " "
        }
      );
      this.setState({ ariaLiveString });
    }
  }

  render() {
    const { duration } = this.state;
    const days = parseInt(duration.asDays(), 10);

    return (
      <div>
        <div className="countdown" aria-hidden="true">
          <NumberBox number={days} label={"Days"} />
          <NumberBox number={duration.hours()} label={"Hours"} />
          <NumberBox number={duration.minutes()} label={"Minutes"} />
          <NumberBox number={duration.seconds()} label={"Seconds"} />
        </div>
        {/* Support aria-live countdown for screenreaders*/}
        <span
          className="screenreader-only"
          aria-live={this.props["aria-live"]}
          aria-label={this.props["aria-label"]}
        >
          {this.state.ariaLiveString}
        </span>
      </div>
    );
  }
}

export default Countdown;
