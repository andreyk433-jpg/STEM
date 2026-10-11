
import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { addGame } from '../data/games';

export default function AddGamePage() {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [genre, setGenre] = useState('');
  const [releaseYear, setReleaseYear] = useState('2026');
  const [rating, setRating] = useState('0');
  const [playtime, setPlaytime] = useState('0');
  const [status, setStatus] = useState('Не начата');
  const [favorite, setFavorite] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    addGame({
      title: title.trim(),
      description,
      genre: genre.trim(),
      releaseYear: Number(releaseYear),
      rating: Number(rating),
      playtime: Number(playtime),
      status,
      favorite,
    });

    navigate('/games');
  }

  return (
    <div>
      <h1>Добавить игру</h1>

      <form onSubmit={handleSubmit}>
        <p>
          <label>
            Название игры
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
            Статус прохождения
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
            {' '}Добавить в избранное
          </label>
        </p>

        <button type="submit">Сохранить игру</button>
      </form>

      <p>
        <Link to="/games">Вернуться в библиотеку</Link>
      </p>
    </div>
  );
}
