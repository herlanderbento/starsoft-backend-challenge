import { Module } from '@nestjs/common';
import { DatabaseModule } from './shared/infra/db/database.module';
import { ConfigModule } from './shared/infra/config/config.module';
import { MoviesModule } from './movies/infra/movies.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot(), MoviesModule, DatabaseModule, AuthModule],
})
export class AppModule {}
