import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);

const render = (Component: React.ReactType) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(App);

// registerServiceWorker();

if ((module as any).hot) {
  (module as any).hot.accept('./components/App', () => { render(App); });
} 