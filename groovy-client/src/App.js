import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SongList from './components/SongList';
import SongDetails from './components/SongDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Groovy</h1>
        <Routes>
          <Route path="/" element={<SongList />} />
          <Route path="/songs/:id" render={(props) => <SongDetails {...props} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

