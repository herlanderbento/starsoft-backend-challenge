import { CreateMovieInput } from '@/movies/application';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateMovieDto implements CreateMovieInput {
  @ApiProperty({
    example: 'The Godfather',
    description: 'Title of the movie',
  })
  title: string;

  @ApiPropertyOptional({
    example: 'A crime drama film',
    description: 'Description of the movie',
  })
  description?: string;

  @ApiProperty({
    example: 'Francis Ford Coppola',
    description: 'Director of the movie',
  })
  director: string;

  @ApiProperty({
    example: 1972,
    description: 'Release year of the movie',
  })
  releaseYear: number;

  @ApiProperty({
    example: 9.2,
    description: 'Rating of the movie',
  })
  rating: number;
}
