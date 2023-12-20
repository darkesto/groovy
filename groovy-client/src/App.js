import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import SongList from './components/SongList';
import SongDetails from './components/SongDetails';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Link to="/" className="header-link">
            <h1 className="header-title">Your Groovy Music App</h1>
            <p className="header-subtitle">Explore, Listen, Enjoy!</p>
          </Link>
        </header>
        <Routes>
          <Route path="/" element={<SongList />} />
          <Route path="/songs/:id" element={<SongDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

