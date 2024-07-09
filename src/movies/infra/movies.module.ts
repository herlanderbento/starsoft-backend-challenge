import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MOVIES_PROVIDERS } from './movies.providers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieModel } from './db/movie.model';
// import { CreateMovieUseCase } from '../application';
// import { IMovieRepository } from '../domain';
// import { MovieTypeOrmRepository } from './db/movie-typeorm.repository';

@Module({
  imports: [TypeOrmModule.forFeature([MovieModel])],
  controllers: [MoviesController],
  providers: [
    ...Object.values(MOVIES_PROVIDERS.REPOSITORIES),
    ...Object.values(MOVIES_PROVIDERS.USE_CASES),
  ],
  exports: [MOVIES_PROVIDERS.REPOSITORIES.MOVIE_REPOSITORY.provide],
})

// @Module({
//   imports: [TypeOrmModule.forFeature([MovieModel])],
//   controllers: [MoviesController],
//   providers: [
//     {
//       provide: 'MovieRepository',
//       useClass: MovieTypeOrmRepository,
//     },
//     {
//       provide: CreateMovieUseCase,
//       useFactory: (MovieRepo: IMovieRepository) =>
//         new CreateMovieUseCase(MovieRepo),
//       inject: ['MovieRepository'],
//     },
//   ],
//   exports: ['MovieRepository', CreateMovieUseCase],
// })
export class MoviesModule {}
