import { useQuery } from "@tanstack/react-query";

import { IAnimeRepository } from "@domain/anime/anime.respository.interface";
import { IFindAllAnimesCase } from "./find-all-animes.case.interface";

const FindAllAnimesUseCase = (): IFindAllAnimesCase => {
  const useFindAllAnimes = (respository: IAnimeRepository) => {
    const { data: animeList, isFetching: isFetchingAnimeList } = useQuery({
      queryKey: ["findAllAnimes"],
      queryFn: async () => await respository.findAll(),
    });

    return { animeList, isFetchingAnimeList };
  };

  return { useFindAllAnimes };
};

export { FindAllAnimesUseCase };
