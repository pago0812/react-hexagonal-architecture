import { Fragment } from "react";
import { Anime } from "@domain/anime/anime.entity";
import { FindAllAnimesUseCase } from "@use-cases/anime/find-all-animes/find-all-animes.case";
import { AnimeFetchRepository } from "@adapters/fetch/anime/anime-fetch.repository";
import { AnimeCard } from "@components/anime-card/anime-card";
import styles from "./home.module.css";

const Home = () => {
  const { animeList, isFetchingAnimeList } =
    FindAllAnimesUseCase().useFindAllAnimes(AnimeFetchRepository());

  if (isFetchingAnimeList) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles["anime-container"]}>
      {animeList?.map((anime: Anime) => (
        <Fragment key={anime.id}>
          <AnimeCard anime={anime}></AnimeCard>
        </Fragment>
      ))}
    </div>
  );
};

export default Home;
