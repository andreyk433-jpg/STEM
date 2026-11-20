
import type { Game } from '../data/games';

type GameListProps = {
  games: Game[];
};

export default function GameList({ games }: GameListProps) {
  if (games.length === 0) {
    return <p>В библиотеке пока нет игр.</p>;
  }

  return (
    <div className="game-list">
      {games.map((game) => (
        <article className="game-card" key={game.id}>
          <div className="game-card-header">
            <h3>{game.title}</h3>

            {game.favorite && (
              <span className="favorite-label">★ Избранное</span>
            )}
          </div>

          <p>{game.description}</p>

          <div className="game-info">
            <span>Жанр: {game.genre}</span>
            <span>Год: {game.releaseYear}</span>
            <span>Оценка: {game.rating}/10</span>
            <span>Время: {game.playtime} ч.</span>
          </div>

          <div className="game-card-footer">
            <span className="game-status">{game.status}</span>
          </div>
        </article>
      ))}
    </div>
  );
}
