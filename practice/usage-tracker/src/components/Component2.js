import React from 'react';

export default class Component2 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      started: 0,
      time: 0,
    }
  }

  componentDidMount() {
    this.setState({ started: Date.now() })
  }

  componentWillUnmount() {
    this.setState({ time: (Date.now() - this.state.started) })
  }

  render() {
    return (
      <div>Component2</div>
    )
  }
}