import { ApiProperty } from '@nestjs/swagger';

export class SignInDto {
  @ApiProperty({
    example: 'herlanderbento',
  })
  username: string;
  @ApiProperty({
    example: 'somePassword',
  })
  password: string;
}
