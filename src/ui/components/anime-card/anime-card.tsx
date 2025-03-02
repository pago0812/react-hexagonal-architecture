import { Anime } from "../../../domain/anime/anime.entity";

const AnimeCard = ({ anime }: { anime: Anime }) => {
  return (
    <div>
      <h3>{anime.name}</h3>
      <img src={anime.imageUrl} alt={anime.name} />
    </div>
  );
};

export { AnimeCard };
