import { MovieOutput } from '@/movies/application/use-cases/common';
import { Transform } from 'class-transformer';

export class MoviePresenter {
  id: string;
  title: string;
  description?: string | null;
  director: string;
  releaseYear: number;
  rating: number;
  @Transform(({ value }: { value: Date }) => {
    return value.toISOString().slice(0, 19) + '.000z';
  })
  createdAt: Date;
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
