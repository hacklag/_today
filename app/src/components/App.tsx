import * as React from 'react';
import { IStore } from '../types';

export interface Props {
  store: IStore;
}

class App extends React.Component<Props> {
  componentDidMount() {
   this.props.store.eventStore.fetch() 
  }

  render() {
    const {store} = this.props;

    return (
      <div className="App">
        <h1>Events</h1>

        <div className="EventList">{store.eventStore.items.map(item => (
          <div>
            <h2>{item.name}</h2>
          </div>
        ))}</div>

        <style jsx>{`
          div {
            font-family: Arial, sans-serif;
          }
        `}</style>
      </div>
    );
  }
}

export default App;
