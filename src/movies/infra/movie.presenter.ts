import { Transform } from 'class-transformer';
import { MovieOutput } from '@/movies/application/use-cases/common';
import { CollectionPresenter } from '@/shared/infra/presenters';
import { ListMoviesOutput } from '../application';
import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

@ApiExtraModels(MoviePresenter)
export class MoviePresenter {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description?: string | null;

  @ApiProperty()
  director: string;

  @ApiProperty()
  releaseYear: number;

  @ApiProperty()
  rating: number;

  @ApiProperty()
  @Transform(({ value }: { value: Date }) => {
    return value.toISOString().slice(0, 19) + '.000z';
  })
  createdAt: Date;

  @ApiProperty()
  @Transform(({ value }: { value: Date }) => {
    return value.toISOString().slice(0, 19) + '.000z';
  })
  updatedAt: Date;

  constructor(output: MovieOutput) {
    this.id = output.id;
    this.title = output.title;
    this.description = output.description;
    this.director = output.director;
    this.releaseYear = output.releaseYear;
    this.rating = output.rating;
    this.createdAt = output.createdAt;
    this.updatedAt = output.updatedAt;
  }
}

export class MovieCollectionPresenter extends CollectionPresenter<MoviePresenter> {
  data: MoviePresenter[];

  constructor(output: ListMoviesOutput) {
    const { items, ...paginationProps } = output;
    super(paginationProps);
    this.data = items.map((movie) => new MoviePresenter(movie));
  }
}
