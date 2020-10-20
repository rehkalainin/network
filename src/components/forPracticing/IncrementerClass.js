import React from 'react'

class IncrementerClass extends React.Component {
  state = {
    counter: 0,
    sumCounter: 0,
  }
  increment = () => {
    this.setState({ counter: this.state.counter + 1 }, () => {
      this.setState({ sumCounter: this.state.counter + this.props.newConter })
    })
  }
  increment3Times = () => {
    this.setState((state) => ({ counter: state.counter + 1 }))
    this.setState((state) => ({ counter: state.counter + 1 }))
    this.setState((state) => ({ counter: state.counter + 1 }))
  } // передав функцию это будет работать
  dicrement = () => {
    this.setState({ counter: this.state.counter - 1 })
    this.setState({ counter: this.state.counter - 1 })
    this.setState({ counter: this.state.counter - 1 })
  } // передав объект не будет работать

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <h1>{this.state.sumCounter}</h1>
        <span>
          <button onClick={this.increment3Times}>increment3Times</button>
          <button onClick={this.dicrement}>dicrement</button>
          <button onClick={this.increment}>increment</button>
        </span>
      </div>
    )
  }
}

export default IncrementerClass
