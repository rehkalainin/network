import React from 'react'

class IncrementerClass extends React.Component {
  state = {
    counter: 0,
  }
  increment = () => {
    this.setState({ counter: this.state.counter + 1 })
  }
  dicrement = () => {
    this.setState((state) => ({ counter: state.counter - 1 }))
  }

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <span>
          <button onClick={this.increment}>increment</button>
          <button onClick={this.dicrement}>dicrement</button>
        </span>
      </div>
    )
  }
}

export default IncrementerClass
