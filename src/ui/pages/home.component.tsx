import { useDebounce } from "use-debounce";
import { Fragment, useState } from "react";
import { IAnime } from "@domain/anime/anime.type";
import { FindAllAnimesUseCase } from "@use-cases/anime/find-all-animes/find-all-animes.case";
import { AnimeFetchRepository } from "@adapters/fetch/anime/anime-fetch.repository";
import { AnimeCard } from "@components/anime-card/anime-card.component";
import styles from "./home.module.css";

const Home = () => {
  const [query, setQuery] = useState("");
  const [queryValue] = useDebounce(query, 1000);
  const [page, setPage] = useState(1);

  const { animeList, animeListPagination, isFetchingAnimeList } =
    FindAllAnimesUseCase().useFindAllAnimes({
      respository: AnimeFetchRepository(),
      query: queryValue,
      page,
      limit: 10,
    });

  return (
    <div className={styles.mainContainer}>
      <input
        className={styles.searchInput}
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setPage(1);
        }}
        placeholder="Search anime..."
      />
      {isFetchingAnimeList ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.animeContainer}>
          {animeList?.map((anime: IAnime) => (
            <Fragment key={anime.id}>
              <AnimeCard anime={anime}></AnimeCard>
            </Fragment>
          ))}
        </div>
      )}
      {animeListPagination && (
        <div className={styles.pagination}>
          <button
            disabled={page <= 1}
            onClick={() => setPage((p) => p - 1)}
            className={styles.button}
          >
            {"<"}
          </button>
          <span>
            {page} / {animeListPagination.totalPages}
          </span>
          <button
            disabled={page >= animeListPagination.totalPages}
            onClick={() => setPage((p) => p + 1)}
            className={styles.button}
          >
            {">"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
