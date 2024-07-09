import { Module } from '@nestjs/common';
import { DatabaseModule } from './shared/infra/db/database.module';
import { ConfigModule } from './shared/infra/config/config.module';
import { MoviesModule } from './movies/infra/movies.module';

@Module({
  imports: [ConfigModule.forRoot(), MoviesModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
