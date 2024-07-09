import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
import { CreateMovieDto } from './dtos/create-movie.dto';
import { CreateMovieUseCase } from '../application';
import { MovieOutput } from '../application';
import { MoviePresenter } from './movie.presenter';

@Controller('movies')
export class MoviesController {
  @Inject(CreateMovieUseCase)
  private createUseCase: CreateMovieUseCase;

  @Post()
  async create(@Body() createMovieDto: CreateMovieDto) {
    const output = await this.createUseCase.execute(createMovieDto);
    return MoviesController.serialize(output);
  }

  @Get()
  findAll() {
    return '';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return '';
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMovieDto: any) {
    return '';
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return '';
  }

  static serialize(output: MovieOutput) {
    return new MoviePresenter(output);
  }
}
