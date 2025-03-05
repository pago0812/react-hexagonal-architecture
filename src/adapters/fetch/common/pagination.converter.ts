import { IPagination } from "@domain/common/pagination.type";
import { IPaginationDto } from "./pagination-dto.type";

const convertPagination = (paginationDTO: IPaginationDto): IPagination => {
  return {
    currentPage: paginationDTO.current_page,
    totalPages: paginationDTO.last_visible_page,
  };
};

export { convertPagination };
