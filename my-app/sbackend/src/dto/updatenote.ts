import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class updatenote {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  content?: string;

  @IsNotEmpty()
  @IsString()
  owner?: string;
}
