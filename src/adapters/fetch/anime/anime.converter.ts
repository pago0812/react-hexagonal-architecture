import { Anime } from "../../../domain/anime/anime.entity";
import { AnimeDto } from "./anime-dto.entity";

const convertAnime = (animeDto: AnimeDto): Anime => {
  return {
    id: animeDto.mal_id,
    name: animeDto.title,
    imageUrl: animeDto.images.jpg.image_url,
  };
};

export { convertAnime };
