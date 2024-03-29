import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, HttpException, HttpStatus } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('books')
@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: CreateBookDto,
  })

  create(@Body(ValidationPipe) createBookDto: CreateBookDto) {
    if (!createBookDto.name || !createBookDto.pages || !createBookDto.isBorrowed) {
      throw new HttpException('Missing required fields in request body', HttpStatus.BAD_REQUEST);
    }
    const now = new Date();
    return this.bookService.create({...createBookDto, createdAt:now.toISOString()});
  }

  @Get()
  async findAll() {
    return this.bookService.findAll();
  }

  @Post(':id')
  findOne(@Param('id') id: string) {
    return this.bookService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.update(+id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookService.remove(+id);
  }
}
