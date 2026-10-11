
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteGame, getGames, type Game } from '../data/games';

export default function GamesPage() {
  const [games, setGames] = useState<Game[]>(getGames);
  const [search, setSearch] = useState('');
  const [genreFilter, setGenreFilter] = useState('Все');
  const [statusFilter, setStatusFilter] = useState('Все');
  const [sortBy, setSortBy] = useState('title');

  const genres = Array.from(
    new Set(games.map((game) => game.genre))
  );

  const filteredGames = games
    .filter((game) =>
      game.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((game) =>
      genreFilter === 'Все' || game.genre === genreFilter
    )
    .filter((game) =>
      statusFilter === 'Все' || game.status === statusFilter
    )
    .sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'playtime') return b.playtime - a.playtime;
      return a.title.localeCompare(b.title);
    });

  function handleDelete(id: string) {
    if (!window.confirm('Удалить эту игру из библиотеки?')) return;

    deleteGame(id);
    setGames(getGames());
  }

  return (
    <div>
      <h1>Библиотека игр</h1>
      <p>Всего игр: {games.length}</p>

      <p>
        <Link to="/games/new">+ Добавить игру</Link>
      </p>

      <p>
        <input
          placeholder="Поиск по названию"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </p>

      <p>
        <label>
          Жанр:{' '}
          <select
            value={genreFilter}
            onChange={(event) => setGenreFilter(event.target.value)}
          >
            <option value="Все">Все жанры</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>{genre}</option>
            ))}
          </select>
        </label>
      </p>

      <p>
        <label>
          Статус:{' '}
          <select
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value)}
          >
            <option value="Все">Все статусы</option>
            <option>Не начата</option>
            <option>В процессе</option>
            <option>Пройдена</option>
            <option>Заброшена</option>
          </select>
        </label>
      </p>

      <p>
        <label>
          Сортировка:{' '}
          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
          >
            <option value="title">По названию</option>
            <option value="rating">По оценке</option>
            <option value="playtime">По времени игры</option>
          </select>
        </label>
      </p>

      {filteredGames.length === 0 ? (
        <p>Игры не найдены. Попробуй изменить фильтры или добавь игру.</p>
      ) : (
        <div>
          {filteredGames.map((game) => (
            <article
              key={game.id}
              style={{
                border: '1px solid #888',
                borderRadius: '8px',
                padding: '16px',
                marginBottom: '12px',
              }}
            >
              <h2>
                {game.title} {game.favorite ? '★' : ''}
              </h2>

              <p>Жанр: {game.genre}</p>
              <p>Год выхода: {game.releaseYear}</p>
              <p>Оценка: {game.rating}/10</p>
              <p>Время игры: {game.playtime} ч.</p>
              <p>Статус: {game.status}</p>

              <Link to={`/games/${game.id}`}>Подробнее</Link>
              {' | '}
              <button onClick={() => handleDelete(game.id)}>
                Удалить
              </button>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
