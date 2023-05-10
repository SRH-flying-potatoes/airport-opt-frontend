import { useState } from 'react';
import './App.css';
import DisplayRoutes from './components/flights/DisplayRoutes';
import SearchFlight from './components/flights/SearchFlight';

function App() {
  const [routes, setRoutes] = useState([])
  const [airData, setAirData] = useState({})

  const getRoutes = (routeData) => {
    setRoutes(routeData.routes)
    setAirData({ source: routeData.source, destination: routeData.destination })
  }
  return (
    <div className="App">
      <div className='air-header'>Header</div>
      <SearchFlight sendRoutes={getRoutes} />
      <DisplayRoutes routes={routes} airData={airData} />
    </div>
  );
}

export default App;
