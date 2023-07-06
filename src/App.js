// imports
import { Routes, Route, Outlet } from 'react-router-dom'
import './App.scss';
// components
import Nav from './components/Nav'
import Sequoia from './components/Destinations/Sequoia'
import KingsCanyon from './components/Destinations/KingsCanyon'
// pages
import Trips from './pages/Trips'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="sequoia" element={<Sequoia />} />
        <Route path="kingscanyon" element={<KingsCanyon />} />
      </Routes>
    </div>
  );
}

export default App;
