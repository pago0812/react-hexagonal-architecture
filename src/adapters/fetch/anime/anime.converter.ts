import { IAnime } from "../../../domain/anime/anime.type";
import { IAnimeDto } from "./anime-dto.type";

const convertAnime = (animeDto: IAnimeDto): IAnime => {
  return {
    id: animeDto.mal_id,
    name: animeDto.title,
    imageUrl: animeDto.images.jpg.image_url,
    genres: animeDto.genres.map((genre) => genre.name),
    synopsis: animeDto.synopsis,
    episodes: animeDto.episodes,
    status: animeDto.status,
  };
};

export { convertAnime };
