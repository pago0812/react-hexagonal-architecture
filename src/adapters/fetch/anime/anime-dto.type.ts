import { IPaginationDto } from "../common/pagination-dto.type";

interface IAnimeDto {
  mal_id: number;
  title: string;
  images: {
    jpg: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
  genres: {
    name: string;
  }[];
  synopsis: string;
  episodes: number;
  status: string;
}

interface IAnimeFindAllResponseDto {
  data: IAnimeDto[];
  pagination: IPaginationDto;
}

export type { IAnimeDto, IAnimeFindAllResponseDto };
