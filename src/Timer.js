class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { secondsElapsed: 0 };
  }

  tick() {
    this.setState(prevState => ({
      secondsElapsed: prevState.secondsElapsed + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return React.createElement(
      "div",
      null,
      "Seconds Elapsed: ",
      this.state.secondsElapsed
    );
  }
}

ReactDOM.render(React.createElement(Timer, null), mountNode);
