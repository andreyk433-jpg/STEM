
import type { Game } from '../data/games';

const mockGames: Game[] = [
  {
    id: '1',
    title: 'The Witcher 3: Wild Hunt',
    description: 'Большое приключение в фэнтезийном мире с Геральтом из Ривии.',
    genre: 'RPG',
    releaseYear: 2015,
    rating: 9.5,
    playtime: 85,
    status: 'Пройдено',
    favorite: true,
    createdAt: '2026-11-01T10:00:00.000Z',
  },
  {
    id: '2',
    title: 'Resident Evil Village',
    description: 'Атмосферный survival horror с исследованием загадочной деревни.',
    genre: 'Horror',
    releaseYear: 2021,
    rating: 9.0,
    playtime: 18,
    status: 'В процессе',
    favorite: true,
    createdAt: '2026-11-02T10:00:00.000Z',
  },
  {
    id: '3',
    title: 'Subnautica',
    description: 'Исследование загадочной подводной планеты и выживание в океане.',
    genre: 'Survival',
    releaseYear: 2018,
    rating: 9.2,
    playtime: 32,
    status: 'В процессе',
    favorite: false,
    createdAt: '2026-11-03T10:00:00.000Z',
  },
  {
    id: '4',
    title: 'Red Dead Redemption 2',
    description: 'История банды Датча ван дер Линде на Диком Западе.',
    genre: 'Action',
    releaseYear: 2018,
    rating: 9.8,
    playtime: 120,
    status: 'Не начато',
    favorite: true,
    createdAt: '2026-11-04T10:00:00.000Z',
  },
];

export function getGamesMock(): Promise<Game[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockGames);
    }, 800);
  });
}
