import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  validateSync,
} from 'class-validator';

export type CreateMovieInputConstructorProps = {
  title: string;
  description?: string | null;
  director: string;
  releaseYear: number;
  rating: number;
};

export class CreateMovieInput {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsOptional()
  @IsString()
  description?: string | null;

  @IsString()
  @IsNotEmpty()
  director: string;

  @IsNumber()
  @IsNotEmpty()
  releaseYear: number;

  @IsNumber()
  @IsNotEmpty()
  rating: number;

  constructor(props: CreateMovieInputConstructorProps) {
    if (!props) return;
    Object.assign(this, props);
  }
}

export class ValidateCreateMovieInput {
  static validate(input: CreateMovieInput) {
    return validateSync(input);
  }
}
