import { ListMoviesInput } from '@/movies/application';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class SearchMoviesDto implements ListMoviesInput {
  @ApiPropertyOptional()
  page?: number;

  @ApiPropertyOptional()
  perPage?: number;

  @ApiPropertyOptional()
  filter?: string;
}
