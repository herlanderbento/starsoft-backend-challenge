import { ApplicationError } from '@/shared/domain';

export class MovieAlreadyExistsError extends ApplicationError {
  constructor() {
    super('Movie already exists');
    this.name = 'MovieAlreadyExists';
    this.statusCode = 409;
  }
}
