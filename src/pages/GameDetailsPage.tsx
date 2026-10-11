
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getGames, updateGame } from '../data/games';

export default function GameDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const game = getGames().find((item) => item.id === id);
  const [status, setStatus] = useState(game?.status ?? 'Не начата');

  if (!game) {
    return (
      <div>
        <h1>Игра не найдена</h1>
        <Link to="/games">Вернуться в библиотеку</Link>
      </div>
    );
  }

  function handleStatusChange() {
  if (!game) {
    return;
  }

  updateGame({ ...game, status });
  navigate('/games');
}

  return (
    <div>
      <h1>{game.title}</h1>

      <p><strong>Жанр:</strong> {game.genre}</p>
      <p><strong>Год выхода:</strong> {game.releaseYear}</p>
      <p><strong>Описание:</strong> {game.description || 'Нет описания'}</p>
      <p><strong>Оценка:</strong> {game.rating}/10</p>
      <p><strong>Время игры:</strong> {game.playtime} ч.</p>
      <p><strong>Избранное:</strong> {game.favorite ? 'Да' : 'Нет'}</p>
      <p>
  Дата добавления: {new Date(game.createdAt).toLocaleDateString('ru-RU')}
</p>

      <p>
        <label>
          Статус прохождения:{' '}
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

      <button onClick={handleStatusChange}>Сохранить статус</button>
      {' '}
      <Link to={`/games/${game.id}/edit`}>Редактировать игру</Link>

      <p><Link to="/games">Назад в библиотеку</Link></p>
    </div>
  );
}
