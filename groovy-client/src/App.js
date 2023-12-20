import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SongList from './components/SongList';
import SongDetails from './components/SongDetails';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <h1 className="header-title">Your Groovy Music App</h1>
          <p className="header-subtitle">Explore, Listen, Enjoy!</p>
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

