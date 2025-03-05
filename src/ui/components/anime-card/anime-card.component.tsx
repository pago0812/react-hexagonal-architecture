import { IAnime } from "@domain/anime/anime.type";
import styles from "./anime-card.module.css";

const AnimeCard = ({ anime }: { anime: IAnime }) => {
  return (
    <div className={styles.card}>
      <div>
        <img src={anime.imageUrl} alt={anime.name} className={styles.image} />
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.titleContainer}>
          <h3 className={styles.title}>{anime.name}</h3>
          <div className={styles.genres}>
            {anime.genres.map((genre) => (
              <span key={genre} className={styles.genreBadge}>
                {genre}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.metadataContainer}>
          <p className={styles.metadata}>
            <span className={styles.subTitle}>Episodes:</span> {anime.episodes}
          </p>
          <p className={styles.metadata}>
            {" "}
            <span className={styles.subTitle}>Status:</span> {anime.status}
          </p>
        </div>
        <div>
          <p className={styles.synopsis}>
            <span className={styles.subTitle}>Synopsis:</span> {anime.synopsis}
          </p>
        </div>
      </div>
    </div>
  );
};

export { AnimeCard };
