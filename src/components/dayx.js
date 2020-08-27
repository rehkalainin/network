import React from 'react'

class Example extends React.Component {
  state = {
    count: 0,
  }

  increment = () => {
    // this.setState({ count: this.state.count + 1 })
    this.setState((state) => ({ count: state.count + 1 }))
  }

  render() {
    return <button onClick={this.increment}>tick</button>
  }
}

const Example = () => {
  const [state, setState] = React.useState({ count: 0 })
  return <button onClick={() => setState({ count: state.count + 1 })}>tick</button>
}

class Service {
  static getCount = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10)
    }, 10000)
  })
}

class Example extends React.Component {
  isMounted = false

  componentDidMount() {
    this.isMounted = true
    this.loadCount()
  }

  componentWillMount() {
    this.isMounted = false
  }

  async loadCount() {
    const res = await Service.getCount()
    if (this.isMounted) this.setState({ count: res })
  }

  increment = () => {
    // this.setState({ count: this.state.count + 1 })
    this.setState((state) => ({ count: state.count + 1 }))
  }

  render() {
    return (
      <button id onClick={this.increment}>
        tick
      </button>
    )
  }
}

function render() {
  const component = new Example()

  component.render()

  component.componentDidMount()
}
