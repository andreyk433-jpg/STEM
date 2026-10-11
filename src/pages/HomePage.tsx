
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <h1>STEM</h1>
      <p>Твоя личная библиотека видеоигр</p>

      <h2>Добро пожаловать!</h2>
      <p>
        Собирай коллекцию игр, оценивай их
        и отслеживай свой прогресс.
      </p>

      <Link to="/games">Открыть библиотеку</Link>
      {' | '}
      <Link to="/games/new">Добавить игру</Link>
    </div>
  );
}
