import type { Anime } from "./anime.entity";

interface IAnimeRepository {
  findAll(): Promise<Anime[]>;
}

export type { IAnimeRepository };
