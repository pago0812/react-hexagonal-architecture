import { useQuery } from "@tanstack/react-query";
import { AnimeRepository } from "../../domain/anime/anime.respository";

const useFindAllAnimes = (respository: AnimeRepository) => {
  const { data: animeList, isFetching: isFetchingAnimeList } = useQuery({
    queryKey: ["findAllAnimes"],
    queryFn: async () => await respository.findAll(),
  });

  return { animeList, isFetchingAnimeList };
};

export { useFindAllAnimes };
