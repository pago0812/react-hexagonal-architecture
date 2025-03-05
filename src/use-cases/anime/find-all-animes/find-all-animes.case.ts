import { useQuery } from "@tanstack/react-query";

import type {
  IFindAllAnimesCase,
  IFindAllAnimesCaseRequest,
  IFindAllAnimesCaseResponse,
} from "@use-cases/anime/find-all-animes/find-all-animes.type";

const FindAllAnimesUseCase = (): IFindAllAnimesCase => {
  const useFindAllAnimes = (
    request: IFindAllAnimesCaseRequest
  ): IFindAllAnimesCaseResponse => {
    const { data, isFetching: isFetchingAnimeList } = useQuery({
      queryKey: ["findAllAnimes", request.query, request.page],
      queryFn: async () =>
        await request.respository.findAll({
          query: request.query,
          page: request.page,
          limit: request.limit,
        }),
      staleTime: Infinity,
    });

    return {
      animeList: data?.data,
      animeListPagination: data?.pagination,
      isFetchingAnimeList,
    };
  };

  return { useFindAllAnimes };
};

export { FindAllAnimesUseCase };
