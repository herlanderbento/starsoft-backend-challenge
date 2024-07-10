import { IUseCase } from '@/shared/application';
import { MovieOutput, MovieOutputMapper } from '../common';
import { UpdateMovieInput } from './update-movie.input';
import { IMovieRepository, Movie } from '@/movies/domain';
import { NotFoundError } from '@/shared/domain';

export class UpdateMovieUseCase
  implements IUseCase<UpdateMovieInput, UpdateMovieOutput>
{
  constructor(private movieRepository: IMovieRepository) {}

  async execute(input: UpdateMovieInput): Promise<MovieOutput> {
    const movie = await this.movieRepository.findById(input.id);

    if (!movie) {
      throw new NotFoundError(input.id, Movie);
    }

    movie.update(input);

    await this.movieRepository.update(movie);

    return MovieOutputMapper.toOutput(movie);
  }
}

export type UpdateMovieOutput = MovieOutput;
