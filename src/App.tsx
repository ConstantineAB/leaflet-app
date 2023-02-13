import React from 'react';
import RouteSheet from './components/RouteSheet';
import MapComponent from './MapComponent';
import './styles/App.css';

const App: React.FC = () => {
  const [route, setRoute] = React.useState(0);

  return (
    <>
      <RouteSheet setRoute={setRoute} />
      <MapComponent route={route} />
    </>
  );
};

export default App;
