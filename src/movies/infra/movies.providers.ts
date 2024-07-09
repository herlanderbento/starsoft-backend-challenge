import { CreateMovieUseCase } from '../application';
import { MovieTypeOrmRepository } from './db/movie-typeorm.repository';
import { IMovieRepository } from '../domain';

export const REPOSITORIES = {
  MOVIE_REPOSITORY: {
    provide: 'MovieRepository',
    useClass: MovieTypeOrmRepository,
  },
};

export const USE_CASES = {
  CREATE_MOVIE_USE_CASE: {
    provide: CreateMovieUseCase,
    useFactory: (movieRepository: IMovieRepository) => {
      return new CreateMovieUseCase(movieRepository);
    },
    inject: [REPOSITORIES.MOVIE_REPOSITORY.provide],
  },
};

export const MOVIES_PROVIDERS = {
  REPOSITORIES,
  USE_CASES,
};
