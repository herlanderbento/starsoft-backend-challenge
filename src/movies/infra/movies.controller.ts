import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
  Query,
  ParseUUIDPipe,
  HttpCode,
} from '@nestjs/common';
import {
  CreateMovieUseCase,
  DeleteMovieUseCase,
  GetMovieUseCase,
  ListMoviesUseCase,
  UpdateMovieUseCase,
} from '../application';
import { MovieOutput } from '../application';
import { MovieCollectionPresenter, MoviePresenter } from './movie.presenter';
import { CreateMovieDto, SearchMoviesDto, UpdateMovieDto } from './dtos';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { MOVIE_DOCUMENTATION } from './movie.documentation';

@ApiTags('movies')
@Controller('movies')
export class MoviesController {
  @Inject(CreateMovieUseCase)
  private createUseCase: CreateMovieUseCase;

  @Inject(UpdateMovieUseCase)
  private updateUseCase: UpdateMovieUseCase;

  @Inject(GetMovieUseCase)
  private getUseCase: GetMovieUseCase;

  @Inject(ListMoviesUseCase)
  private listUseCase: ListMoviesUseCase;

  @Inject(DeleteMovieUseCase)
  private deleteUseCase: DeleteMovieUseCase;

  @ApiResponse(MOVIE_DOCUMENTATION.RESPONSE.CREATE_MOVIE[409])
  @ApiResponse(MOVIE_DOCUMENTATION.RESPONSE.CREATE_MOVIE[201])
  @Post()
  async create(@Body() createMovieDto: CreateMovieDto) {
    const output = await this.createUseCase.execute(createMovieDto);
    return MoviesController.serialize(output);
  }

  @ApiResponse(MOVIE_DOCUMENTATION.RESPONSE.LIST_MOVIES)
  @Get()
  async search(@Query() searchParamsDto: SearchMoviesDto) {
    const output = await this.listUseCase.execute(searchParamsDto);
    return new MovieCollectionPresenter(output);
  }

  @ApiResponse(MOVIE_DOCUMENTATION.RESPONSE.GET_MOVIE)
  @ApiResponse(MOVIE_DOCUMENTATION.RESPONSE.NOT_FOUND)
  @Get(':id')
  async findOne(
    @Param('id', new ParseUUIDPipe({ errorHttpStatusCode: 422 })) id: string,
  ) {
    const output = await this.getUseCase.execute({ id });
    return MoviesController.serialize(output);
  }

  @ApiResponse(MOVIE_DOCUMENTATION.RESPONSE.UPDATE_MOVIE)
  @ApiResponse(MOVIE_DOCUMENTATION.RESPONSE.NOT_FOUND)
  @Patch(':id')
  async update(
    @Param('id', new ParseUUIDPipe({ errorHttpStatusCode: 422 })) id: string,
    @Body() updateMovieDto: UpdateMovieDto,
  ) {
    const output = await this.updateUseCase.execute({
      ...updateMovieDto,
      id,
    });

    return MoviesController.serialize(output);
  }

  @ApiResponse(MOVIE_DOCUMENTATION.RESPONSE.NOT_FOUND)
  @HttpCode(204)
  @Delete(':id')
  async remove(
    @Param('id', new ParseUUIDPipe({ errorHttpStatusCode: 422 })) id: string,
  ) {
    return await this.deleteUseCase.execute({ id });
  }

  static serialize(output: MovieOutput) {
    return new MoviePresenter(output);
  }
}
