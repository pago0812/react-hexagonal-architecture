import {
  IAnimeRepository,
  IFindAllRequest,
  IFindAllResponse,
} from "@domain/anime/anime.respository";
import { IAnimeFindAllResponseDto } from "./anime-dto.type";
import { convertAnime } from "./anime.converter";
import { convertPagination } from "../common/pagination.converter";

const AnimeFetchRepository = (): IAnimeRepository => {
  const findAll = async (
    request: IFindAllRequest
  ): Promise<IFindAllResponse> => {
    const response = await fetch(
      `https://api.jikan.moe/v4/anime?sfw=true&q=${request.query}&page=${request.page}&limit=${request.limit}`
    );
    if (!response.ok) {
      throw new Error("Error fetching data");
    }
    const data = (await response.json()) as IAnimeFindAllResponseDto;
    return {
      data: data.data.map(convertAnime),
      pagination: convertPagination(data.pagination),
    };
  };

  return {
    findAll,
  } as IAnimeRepository;
};

export { AnimeFetchRepository };
