import { IPagination } from "@domain/common/pagination.type";
import { IAnime } from "@domain/anime/anime.type";

interface IFindAllRequest {
  query: string;
  page: number;
  limit: number;
}

interface IFindAllResponse {
  data: IAnime[];
  pagination: IPagination;
}

interface IAnimeRepository {
  findAll(request: IFindAllRequest): Promise<IFindAllResponse>;
}

export type { IAnimeRepository, IFindAllRequest, IFindAllResponse };
