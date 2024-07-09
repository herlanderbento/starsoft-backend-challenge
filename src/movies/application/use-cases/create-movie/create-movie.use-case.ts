import { IUseCase } from '@/shared/application';
import {
  MovieAlreadyExistsError,
  MovieOutput,
  MovieOutputMapper,
} from '../common';
import { CreateMovieInput } from './create-movie.input';
import { IMovieRepository, Movie } from '@/movies/domain';

export class CreateMovieUseCase
  implements IUseCase<CreateMovieInput, CreateMovieOutput>
{
  constructor(private movieRepository: IMovieRepository) {}
  async execute(input: CreateMovieInput): Promise<CreateMovieOutput> {
    const movieWithSameTitle = await this.movieRepository.findByTitle(
      input.title,
    );

    if (movieWithSameTitle) {
      throw new MovieAlreadyExistsError();
    }

    const entity = Movie.create(input);

    await this.movieRepository.insert(entity);

    return MovieOutputMapper.toOutput(entity);
  }
}

export type CreateMovieOutput = MovieOutput;
