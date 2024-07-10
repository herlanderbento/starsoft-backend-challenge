import { Movie } from '@/movies/domain';
import { MovieModel } from './movie.model';
import { EntityID } from '@/shared/domain';

export class MovieTypeOrmMapper {
  static toModel(entity: Movie) {
    return {
      id: entity.id.toString(),
      title: entity.title,
      description: entity.description,
      director: entity.director,
      releaseYear: entity.releaseYear,
      rating: entity.rating,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }

  static toEntity(model: MovieModel) {
    return new Movie(
      {
        title: model.title,
        description: model.description,
        director: model.director,
        releaseYear: model.releaseYear,
        rating: model.rating,
        createdAt: model.createdAt,
        updatedAt: model.updatedAt,
      },
      new EntityID(model.id),
    );
  }
}
