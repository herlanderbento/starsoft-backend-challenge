import { Movie } from '@/movies/domain';

export type MovieOutput = {
  id: string;
  title: string;
  description?: string | null;
  director: string;
  releaseYear: number;
  rating: number;
  createdAt?: Date;
  updatedAt?: Date;
};

export class MovieOutputMapper {
  static toOutput(entity: Movie): MovieOutput {
    return entity.toJSON();
  }
}
