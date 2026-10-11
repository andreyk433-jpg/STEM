
import { Link } from 'react-router-dom';
import { getGames } from '../data/games';

export default function TopGamesPage() {
  const games = getGames()
    .filter((game) => game.rating > 0)
    .sort((a, b) => b.rating - a.rating);

  return (
    <div>
      <h1>Топ игр</h1>
      <p>Игры отсортированы по пользовательской оценке.</p>

      {games.length === 0 ? (
        <p>Пока нет игр с оценками. Добавь игру в библиотеку.</p>
      ) : (
        <ol>
          {games.map((game) => (
            <li key={game.id}>
              <Link to={`/games/${game.id}`}>{game.title}</Link>
              {' — '}
              {game.rating}/10
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
