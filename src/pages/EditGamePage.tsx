
import { useState, type FormEvent } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getGames, updateGame } from '../data/games';

export default function EditGamePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const game = getGames().find((item) => item.id === id);

  const [title, setTitle] = useState(game?.title ?? '');
  const [description, setDescription] = useState(game?.description ?? '');
  const [genre, setGenre] = useState(game?.genre ?? '');
  const [releaseYear, setReleaseYear] = useState(String(game?.releaseYear ?? 2026));
  const [rating, setRating] = useState(String(game?.rating ?? 0));
  const [playtime, setPlaytime] = useState(String(game?.playtime ?? 0));
  const [status, setStatus] = useState(game?.status ?? 'Не начата');
  const [favorite, setFavorite] = useState(game?.favorite ?? false);

  if (!game) {
    return (
      <div>
        <h1>Игра не найдена</h1>
        <Link to="/games">Вернуться в библиотеку</Link>
      </div>
    );
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  if (!game) {
    return;
  }

  updateGame({
  id: game.id,
  title: title.trim(),
  description,
  genre: genre.trim(),
  releaseYear: Number(releaseYear),
  rating: Number(rating),
  playtime: Number(playtime),
  status,
  favorite,
  createdAt: game.createdAt || new Date().toISOString(),
});

  navigate(`/games/${game.id}`);
}

  return (
    <div>
      <h1>Редактирование: {game.title}</h1>

      <form onSubmit={handleSubmit}>
        <p>
          <label>
            Название
            <br />
            <input
              required
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </label>
        </p>

        <p>
          <label>
            Жанр
            <br />
            <input
              required
              value={genre}
              onChange={(event) => setGenre(event.target.value)}
            />
          </label>
        </p>

        <p>
          <label>
            Описание
            <br />
            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </label>
        </p>

        <p>
          <label>
            Год выхода
            <br />
            <input
              type="number"
              min="1950"
              max="2100"
              required
              value={releaseYear}
              onChange={(event) => setReleaseYear(event.target.value)}
            />
          </label>
        </p>

        <p>
          <label>
            Оценка от 0 до 10
            <br />
            <input
              type="number"
              min="0"
              max="10"
              step="0.1"
              value={rating}
              onChange={(event) => setRating(event.target.value)}
            />
          </label>
        </p>

        <p>
          <label>
            Время игры (часы)
            <br />
            <input
              type="number"
              min="0"
              value={playtime}
              onChange={(event) => setPlaytime(event.target.value)}
            />
          </label>
        </p>

        <p>
          <label>
            Статус
            <br />
            <select
              value={status}
              onChange={(event) => setStatus(event.target.value)}
            >
              <option>Не начата</option>
              <option>В процессе</option>
              <option>Пройдена</option>
              <option>Заброшена</option>
            </select>
          </label>
        </p>

        <p>
          <label>
            <input
              type="checkbox"
              checked={favorite}
              onChange={(event) => setFavorite(event.target.checked)}
            />
            {' '}В избранном
          </label>
        </p>

        <button type="submit">Сохранить изменения</button>
      </form>

      <p><Link to={`/games/${game.id}`}>Отмена</Link></p>
    </div>
  );
}
