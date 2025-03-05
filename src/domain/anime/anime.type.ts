interface IAnime {
  id: number;
  name: string;
  imageUrl: string;
  genres: string[];
  synopsis: string;
  episodes: number;
  status: string;
}

export type { IAnime };
