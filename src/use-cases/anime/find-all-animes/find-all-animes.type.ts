import { IAnime } from "@domain/anime/anime.type";
import { IAnimeRepository } from "@domain/anime/anime.respository";
import { IPagination } from "@domain/common/pagination.type";

interface IFindAllAnimesCaseResponse {
  animeList?: IAnime[];
  animeListPagination?: IPagination;
  isFetchingAnimeList: boolean;
}

interface IFindAllAnimesCaseRequest {
  respository: IAnimeRepository;
  query: string;
  page: number;
  limit: number;
}

interface IFindAllAnimesCase {
  useFindAllAnimes(
    request: IFindAllAnimesCaseRequest
  ): IFindAllAnimesCaseResponse;
}

export type {
  IFindAllAnimesCase,
  IFindAllAnimesCaseRequest,
  IFindAllAnimesCaseResponse,
};
