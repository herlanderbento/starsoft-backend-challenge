import {
  CreateMovieUseCase,
  DeleteMovieUseCase,
  GetMovieUseCase,
  ListMoviesUseCase,
  UpdateMovieUseCase,
} from '../application';
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
  GET_MOVIE_USE_CASE: {
    provide: GetMovieUseCase,
    useFactory: (movieRepository: IMovieRepository) => {
      return new GetMovieUseCase(movieRepository);
    },
    inject: [REPOSITORIES.MOVIE_REPOSITORY.provide],
  },
  UPDATE_MOVIE_USE_CASE: {
    provide: UpdateMovieUseCase,
    useFactory: (movieRepository: IMovieRepository) => {
      return new UpdateMovieUseCase(movieRepository);
    },
    inject: [REPOSITORIES.MOVIE_REPOSITORY.provide],
  },
  LIST_MOVIES_USE_CASE: {
    provide: ListMoviesUseCase,
    useFactory: (movieRepository: IMovieRepository) => {
      return new ListMoviesUseCase(movieRepository);
    },
    inject: [REPOSITORIES.MOVIE_REPOSITORY.provide],
  },
  DELETE_MOVIE_USE_CASE: {
    provide: DeleteMovieUseCase,
    useFactory: (movieRepository: IMovieRepository) => {
      return new DeleteMovieUseCase(movieRepository);
    },
    inject: [REPOSITORIES.MOVIE_REPOSITORY.provide],
  },
};

export const MOVIES_PROVIDERS = {
  REPOSITORIES,
  USE_CASES,
};
