import { IUseCase } from '@/shared/application';
import { MovieOutput, MovieOutputMapper } from '../common';
import { IMovieRepository, Movie } from '@/movies/domain';
import { NotFoundError } from '@/shared/domain';

export interface GetMovieInput {
  id: string;
}

export class GetMovieUseCase
  implements IUseCase<GetMovieInput, GetMovieOuptut>
{
  constructor(private movieRepository: IMovieRepository) {}

  async execute(input: GetMovieInput): Promise<GetMovieOuptut> {
    const movie = await this.movieRepository.findById(input.id);

    if (!movie) {
      throw new NotFoundError(input.id, Movie);
    }

    return MovieOutputMapper.toOutput(movie);
  }
}

export type GetMovieOuptut = MovieOutput;
