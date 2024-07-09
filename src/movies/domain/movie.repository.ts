import {
  ISearchableRepository,
  SearchParams,
  SearchResult,
} from '@/shared/domain';
import { Movie } from './movie.entity';

export type MovieFilter = string;

export class MovieSearchParams extends SearchParams<MovieFilter> {}

export class MovieSearchResult extends SearchResult<Movie> {}

export interface IMovieRepository
  extends ISearchableRepository<
    Movie,
    MovieFilter,
    MovieSearchParams,
    MovieSearchResult
  > {
  findByTitle(title: string): Promise<Movie | null>;
}
