
export type Game = {
  id: string;
  title: string;
  description: string;
  genre: string;
  releaseYear: number;
  rating: number;
  playtime: number;
  status: string;
  favorite: boolean;
  createdAt: string;
};

const STORAGE_KEY = 'stem-games';

export function getGames(): Game[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) as Game[] : [];
  } catch {
    return [];
  }
}

export function saveGames(games: Game[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(games));
}

export function addGame(
  game: Omit<Game, 'id' | 'createdAt'>
): Game {
  const games = getGames();

  const newGame: Game = {
    ...game,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };

  saveGames([...games, newGame]);

  return newGame;
}

export function updateGame(updatedGame: Game): void {
  const games = getGames().map((game) =>
    game.id === updatedGame.id ? updatedGame : game
  );

  saveGames(games);
}

export function deleteGame(id: string): void {
  const games = getGames().filter((game) => game.id !== id);
  saveGames(games);
}
