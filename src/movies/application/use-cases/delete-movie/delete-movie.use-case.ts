import { IUseCase } from '@/shared/application';
import { IMovieRepository, Movie } from '@/movies/domain';
import { NotFoundError } from '@/shared/domain';

export interface DeleteMovieInput {
  id: string;
}

export class DeleteMovieUseCase
  implements IUseCase<DeleteMovieInput, DeleteMovieOuptut>
{
  constructor(private movieRepository: IMovieRepository) {}

  async execute(input: DeleteMovieInput): Promise<DeleteMovieOuptut> {
    const movie = await this.movieRepository.findById(input.id);

    if (!movie) {
      throw new NotFoundError(input.id, Movie);
    }

    await this.movieRepository.delete(input.id);
  }
}

export type DeleteMovieOuptut = void;
