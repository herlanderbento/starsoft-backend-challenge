import {
  IUseCase,
  PaginationOutput,
  PaginationOutputMapper,
} from '@/shared/application';
import { MovieOutput, MovieOutputMapper } from '../common';
import {
  IMovieRepository,
  MovieFilter,
  MovieSearchParams,
  MovieSearchResult,
} from '@/movies/domain';
import { SortDirection } from '@/shared/domain';

export class ListMoviesUseCase
  implements IUseCase<ListMoviesInput, ListMoviesOutput>
{
  constructor(private movieRepository: IMovieRepository) {}

  async execute(input: ListMoviesInput): Promise<ListMoviesOutput> {
    const params = new MovieSearchParams(input);
    const searchResult = await this.movieRepository.search(params);
    return this.toOutput(searchResult);
  }

  private toOutput(searchResult: MovieSearchResult) {
    const { items: _items } = searchResult;
    const items = _items.map((movie) => {
      return MovieOutputMapper.toOutput(movie);
    });
    return PaginationOutputMapper.toOutput(items, searchResult);
  }
}

export class ListMoviesInput {
  page?: number;
  perPage?: number;
  sort?: string | null;
  sortDir?: SortDirection | null;
  filter?: MovieFilter | null;
}

export type ListMoviesOutput = PaginationOutput<MovieOutput>;
