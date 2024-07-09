import { Injectable } from '@nestjs/common';
import {
  IMovieRepository,
  Movie,
  MovieSearchParams,
  MovieSearchResult,
} from '@/movies/domain';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { MovieModel } from './movie.model';
import { MovieTypeOrmMapper } from './movie-typeorm.mapper';
import { NotFoundError } from '@/shared/domain/errors';

@Injectable()
export class MovieTypeOrmRepository implements IMovieRepository {
  constructor(
    @InjectRepository(MovieModel)
    private readonly repository: Repository<MovieModel>,
  ) {}

  async insert(entity: Movie): Promise<void> {
    const modelProps = MovieTypeOrmMapper.toModel(entity);
    await this.repository.insert(modelProps);
  }

  async findById(id: string): Promise<Movie | null> {
    const model = await this.repository.findOne({ where: { id } });

    return model ? MovieTypeOrmMapper.toEntity(model) : null;
  }

  async findByTitle(title: string): Promise<Movie | null> {
    const model = await this.repository.findOne({ where: { title } });

    return model ? MovieTypeOrmMapper.toEntity(model) : null;
  }

  async findAll(): Promise<Movie[]> {
    const models = await this.repository.find();
    return models.map(MovieTypeOrmMapper.toEntity);
  }

  async search(props: MovieSearchParams): Promise<MovieSearchResult> {
    const [models, total] = await this.repository.findAndCount({
      ...(props.filter && {
        where: {
          title: Like(`%${props.filter}%`),
        },
      }),
      order: {
        createdAt: 'DESC',
      },
      skip: (props.page - 1) * props.perPage,
      take: props.perPage,
    });

    return new MovieSearchResult({
      items: models.map((model) => MovieTypeOrmMapper.toEntity(model)),
      total,
      currentPage: props.page,
      perPage: props.perPage,
    });
  }

  async update(entity: Movie): Promise<void> {
    const modelProps = MovieTypeOrmMapper.toModel(entity);

    const affectedRows = await this.repository.update(
      { id: entity.id.toString() },
      modelProps,
    );

    if (!affectedRows) {
      throw new NotFoundError(entity.id.toString(), this.getEntity());
    }
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  getEntity(): new (...args: any[]) => Movie {
    return Movie;
  }
}
