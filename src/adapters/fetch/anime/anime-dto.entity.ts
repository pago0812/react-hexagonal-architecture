interface AnimeDto {
  mal_id: number;
  title: string;
  images: {
    jpg: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
}

interface AnimeFindAllDto {
  data: AnimeDto[];
}

export type { AnimeDto, AnimeFindAllDto };
