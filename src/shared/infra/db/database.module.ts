import { Module, Global } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CONFIG_SCHEMA_TYPE } from '../config/config.module';
import { MovieModel } from '@/movies/infra/db/movie.model';

const entities = [MovieModel];

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService<CONFIG_SCHEMA_TYPE>) => {
        return {
          type: 'postgres',
          host: configService.get<string>('DB_HOST'),
          port: configService.get<number>('DB_PORT'),
          database: configService.get<string>('DB_DATABASE'),
          username: configService.get<string>('DB_USERNAME'),
          password: configService.get<string>('DB_PASSWORD'),
          entities,
          synchronize: configService.get<boolean>('DB_AUTO_LOAD_MODELS'),
          logging: configService.get<boolean>('DB_LOGGING'),
        };
      },
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature(entities),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
