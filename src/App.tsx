
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import HomePage from './pages/HomePage';
import GamesPage from './pages/GamesPage';
import AddGamePage from './pages/AddGamePage';
import GameDetailsPage from './pages/GameDetailsPage';
import StatisticsPage from './pages/StatisticsPage';
import TopGamesPage from './pages/TopGamesPage';
import EditGamePage from './pages/EditGamePage';

function App() {
  return (
    <BrowserRouter>
      <header>
        <h2>STEM</h2>

        <nav>
          <Link to="/">Главная</Link>{' | '}
          <Link to="/games">Библиотека</Link>{' | '}
          <Link to="/games/new">Добавить игру</Link>{' | '}
          <Link to="/statistics">Статистика</Link>{' | '}
          <Link to="/top-games">Топ игр</Link>
        </nav>
      </header>

      <hr />

      <main>
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/games" element={<GamesPage />} />
  <Route path="/games/new" element={<AddGamePage />} />
  <Route path="/games/:id/edit" element={<EditGamePage />} />
  <Route path="/games/:id" element={<GameDetailsPage />} />
  <Route path="/statistics" element={<StatisticsPage />} />
  <Route path="/top-games" element={<TopGamesPage />} />
</Routes>

      </main>
    </BrowserRouter>
  );
}

export default App;
