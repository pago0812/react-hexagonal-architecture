import { Anime } from "@domain/anime/anime.entity";
import styles from "./anime-card.module.css";

const AnimeCard = ({ anime }: { anime: Anime }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{anime.name}</h3>
      <img src={anime.imageUrl} alt={anime.name} className={styles.image} />
      <div className={styles.genres}>
        {anime.genres.map((genre) => (
          <span key={genre} className={styles.genreBadge}>
            {genre}
          </span>
        ))}
      </div>
    </div>
  );
};

export { AnimeCard };
