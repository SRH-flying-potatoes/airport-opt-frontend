import { useState } from 'react';
import './App.css';
import DisplayRoutes from './components/flights/DisplayRoutes';
import SearchFlight from './components/flights/SearchFlight';

function App() {
  const [routes, setRoutes] = useState([])

  const getRoutes = (routeData) => {
    setRoutes(routeData)
  }
  return (
    <div className="App">
      <div className='air-header'>Header</div>
      <SearchFlight sendRoutes={getRoutes} />
      <DisplayRoutes routes={routes} />
    </div>
  );
}

export default App;
