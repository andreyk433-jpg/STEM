
import { getGames } from '../data/games';

export default function StatisticsPage() {
  const games = getGames();

  const completed = games.filter(
    (game) => game.status === 'Пройдена'
  ).length;

  const totalPlaytime = games.reduce(
    (sum, game) => sum + game.playtime,
    0
  );

  const ratedGames = games.filter((game) => game.rating > 0);

  const averageRating = ratedGames.length
    ? ratedGames.reduce((sum, game) => sum + game.rating, 0)
      / ratedGames.length
    : 0;

  return (
    <div>
      <h1>Статистика STEM</h1>

      <p>Всего игр: {games.length}</p>
      <p>Пройдено игр: {completed}</p>
      <p>Время игры: {totalPlaytime} ч.</p>
      <p>Средняя оценка: {averageRating.toFixed(1)}</p>
    </div>
  );
}
