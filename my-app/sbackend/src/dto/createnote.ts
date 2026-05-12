import { IsNotEmpty, IsString } from 'class-validator';

export class createnote {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsNotEmpty()
  @IsString()
  owner: string;
}
