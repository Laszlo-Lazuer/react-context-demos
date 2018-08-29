import React, { Component } from 'react';
import './App.css';

const AppContext = React.createContext()
class AppProvider extends Component {
  state = {
    number : 10,
    inc: () => {
      this.setState({number: this.state.number + 1})
    }
  }
render() {
    return <AppContext.Provider value={this.state}>
      {this.props.children}
    </AppContext.Provider>
  }
}
const Green = () => (
  <div className="green">
      <AppContext.Consumer>
        {(context) => context.number}
      </AppContext.Consumer>
  </div>
)
const Blue = () => (
  <div className="blue">
    <AppContext.Consumer>
      {(context) => <button onClick={context.inc}>+1</button>}
    </AppContext.Consumer>
    <Green />
  </div>
)
 
class App extends Component {
  render() {
    return  <AppProvider> 
      <h2>This is an example App for React Context:</h2>
      <h5>This App passes down the value from the Red component, without nececitating prop drilling through the Blue component.</h5>
      <span>Followed example from: <a href='https://hackernoon.com/how-to-use-the-new-react-context-api-fce011e7d87'>Hackernoon: How to use the new React context API</a></span>
        <div className="red">
          <AppContext.Consumer>
            {(context) => context.number}
          </AppContext.Consumer>
          <Blue />
        </div>
    </AppProvider>
  }
}

export default App;
