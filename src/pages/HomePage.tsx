
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import type { Game } from '../data/games';
import { getGamesMock } from '../mocks/gamesMock';
import GameList from '../components/GameList';

export default function HomePage() {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getGamesMock().then((data) => {
      setGames(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="home-page">
      <h1>STEM</h1>

      <p>Твоя личная библиотека видеоигр</p>

      <h2>Добро пожаловать!</h2>

      <p>
        Собирай коллекцию игр, оценивай их
        и отслеживай свой прогресс.
      </p>

      <div>
        <Link to="/games">Открыть библиотеку</Link>
        {' | '}
        <Link to="/games/new">Добавить игру</Link>
      </div>

      <section>
        <h2>Игры в твоей библиотеке</h2>

        {isLoading ? (
          <p>Загрузка...</p>
        ) : (
          <GameList games={games} />
        )}
      </section>
    </div>
  );
}
