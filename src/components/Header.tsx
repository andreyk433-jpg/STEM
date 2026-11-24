
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="app-header">
      <div className="header-inner">
        <Link to="/" className="logo">
          <span className="logo-icon">S</span>
          <span>STEM</span>
        </Link>

        <nav className="main-nav">
          <NavLink to="/" end>Главная</NavLink>
          <NavLink to="/games">Библиотека</NavLink>
          <NavLink to="/games/new">Добавить игру</NavLink>
          <NavLink to="/statistics">Статистика</NavLink>
          <NavLink to="/top-games">Топ игр</NavLink>
        </nav>
      </div>
    </header>
  );
}
