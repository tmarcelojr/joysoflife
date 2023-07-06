// imports
import { Routes, Route } from 'react-router-dom'
// components
import Nav from './components/Nav'
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="trips" element={<Trips />} />
      </Routes>
    </div>
  );
}

export default App;
