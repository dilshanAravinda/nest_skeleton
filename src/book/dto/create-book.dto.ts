import { ApiProperty } from "@nestjs/swagger"
import { IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class CreateBookDto {

  @ApiProperty({
    example: true,
    description: "is Booked: Borrowed or Not ??"
  })
  @IsBoolean()
  isBorrowed : boolean


  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'Name Property is required' })
  name : string


  @ApiProperty({
    example: 144,
    description: "Book's No of pages",
    required: true
  })
  @IsNumber()
  @IsNotEmpty({ message: 'Pages is required' })
  pages : number


  @ApiProperty({
    example: "2024-03-28T08:23:24.976Z",
    description: "date when book is borrowed",
    required: true
  })
  @IsDateString()
  @IsOptional()
  createdAt?: string
}
