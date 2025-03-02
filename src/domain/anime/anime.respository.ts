import type { Anime } from "./anime.entity";

interface AnimeRepository {
  findAll(): Promise<Anime[]>;
}

export type { AnimeRepository };
