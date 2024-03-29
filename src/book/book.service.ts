import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import {PrismaService} from '../prisma/prisma.service'
import { Prisma } from '@prisma/client';

@Injectable()
export class BookService {

  constructor(private prisma: PrismaService){}

  async create(data: Prisma.BookCreateInput) {
    // if(!data) throw new NotFoundException("user not found");
    return this.prisma.book.create({data});
  }

  async findAll() {
    return await this.prisma.book.findMany();
    // return "say";
  }

  async findOne(id: number) {
    if(!id) throw new NotFoundException("id not found")
    return await this.prisma.book.findFirst();
    // return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
