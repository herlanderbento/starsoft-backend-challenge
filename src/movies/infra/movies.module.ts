import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MOVIES_PROVIDERS } from './movies.providers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieModel } from './db/movie.model';

@Module({
  imports: [TypeOrmModule.forFeature([MovieModel])],
  controllers: [MoviesController],
  providers: [
    ...Object.values(MOVIES_PROVIDERS.REPOSITORIES),
    ...Object.values(MOVIES_PROVIDERS.USE_CASES),
  ],
  exports: [MOVIES_PROVIDERS.REPOSITORIES.MOVIE_REPOSITORY.provide],
})
export class MoviesModule {}
