
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div>
      <h1>Страница не найдена</h1>

      <p>
        К сожалению, такой страницы не существует.
      </p>

      <Link to="/">Вернуться на главную</Link>
    </div>
  );
}
