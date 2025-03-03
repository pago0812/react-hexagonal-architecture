import { Anime } from "@domain/anime/anime.entity";
import { IAnimeRepository } from "@domain/anime/anime.respository.interface";

interface IFindAllAnimes {
  animeList: Anime[] | undefined;
  isFetchingAnimeList: boolean;
}

interface IFindAllAnimesCase {
  useFindAllAnimes(respository: IAnimeRepository): IFindAllAnimes;
}

export type { IFindAllAnimesCase };
