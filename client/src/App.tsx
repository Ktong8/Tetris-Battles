import React from 'react';
import bodyParser from 'body-parser';

interface AppProp {

}

interface AppState {
  renderedComponent: string;
}

class App extends React.Component<AppProp, AppState> {
  
  constructor(props: AppProp) {
    super(props);
    this.state = {
      renderedComponent: "",
    };
  }

  getResponse = async () => {
    const resp = await fetch('/api/hello');
    const reply = await resp.json();
    if(resp.status !== 200) throw Error(reply.message);

    return reply
  }

  componentDidMount() {
    this.getResponse().then((res) => {
      const someData = res;
      this.setState({
        renderedComponent: someData.express,
      });
    })
  }

  render() {
    return (
      <div>
        <p>Response: {this.state.renderedComponent}</p>
      </div>
    )
  }

}

export default App;
