import { UpdateMovieInput } from '@/movies/application';
import { OmitType } from '@nestjs/mapped-types';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateMovieInputWithoutId extends OmitType(UpdateMovieInput, [
  'id',
] as const) {}

export class UpdateMovieDto implements UpdateMovieInputWithoutId {
  @ApiPropertyOptional({
    example: 'The Godfather',
    description: 'Title of the movie',
  })
  title: string;

  @ApiPropertyOptional({
    example: 'A crime drama film',
    description: 'Description of the movie',
  })
  description?: string;

  @ApiPropertyOptional({
    example: 'Francis Ford Coppola',
    description: 'Director of the movie',
  })
  director: string;

  @ApiPropertyOptional({
    example: 1972,
    description: 'Release year of the movie',
  })
  releaseYear: number;

  @ApiPropertyOptional({
    example: 9.2,
    description: 'Rating of the movie',
  })
  rating: number;
}
