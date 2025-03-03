import { IAnimeRepository } from "@domain/anime/anime.respository.interface";
import { AnimeFindAllDto } from "./anime-dto.entity";
import { convertAnime } from "./anime.converter";

const AnimeFetchRepository = () => {
  const findAll = async () => {
    const response = await fetch(`https://api.jikan.moe/v4/anime`);
    if (!response.ok) {
      throw new Error("Error fetching data");
    }
    const data = (await response.json()) as AnimeFindAllDto;
    return data.data.map(convertAnime);
  };

  return {
    findAll,
  } as IAnimeRepository;
};

export { AnimeFetchRepository };
