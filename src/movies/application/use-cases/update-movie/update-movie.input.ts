import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  validateSync,
} from 'class-validator';

export type UpdateMovieInputConstructorProps = {
  id: string;
  title: string;
  description?: string | null;
  director: string;
  releaseYear: number;
  rating: number;
};

export class UpdateMovieInput {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsOptional()
  title: string;

  @IsOptional()
  @IsString()
  description?: string | null;

  @IsString()
  @IsOptional()
  director: string;

  @IsNumber()
  @IsOptional()
  releaseYear: number;

  @IsNumber()
  @IsNotEmpty()
  rating: number;

  constructor(props: UpdateMovieInputConstructorProps) {
    if (!props) return;
    Object.assign(this, props);
  }
}

export class ValidateUpdateMovieInput {
  static validate(input: UpdateMovieInput) {
    return validateSync(input);
  }
}
