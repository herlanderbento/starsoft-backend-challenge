import { ApplicationError } from './application.error';

export class InvalidUuidError extends ApplicationError {
  constructor() {
    super('Id must be a valid UUID');
    this.name = 'InvalidUuidError';
    this.statusCode = 400;
  }
}
