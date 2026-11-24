
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';

import HomePage from './pages/HomePage';
import GamesPage from './pages/GamesPage';
import AddGamePage from './pages/AddGamePage';
import GameDetailsPage from './pages/GameDetailsPage';
import StatisticsPage from './pages/StatisticsPage';
import TopGamesPage from './pages/TopGamesPage';
import EditGamePage from './pages/EditGamePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="games" element={<GamesPage />} />
          <Route path="games/new" element={<AddGamePage />} />
          <Route path="games/:id" element={<GameDetailsPage />} />
          <Route path="games/:id/edit" element={<EditGamePage />} />
          <Route path="statistics" element={<StatisticsPage />} />
          <Route path="top-games" element={<TopGamesPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
