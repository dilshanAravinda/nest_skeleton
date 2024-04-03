import { Controller, Post, Param, Res, Get, Body, Query } from '@nestjs/common';
import {TemplatesService} from './templates.service';

@Controller('templates')
export class TemplatesController {

    constructor(private templatesService : TemplatesService){}

    @Post()
    exampleRoute(
        @Query('user_id') user_id: string, 
        @Query('template_id') template_id: string, 
        @Body() data: any
    ) {
        const data_ = {
            user_id,
            name: data.name,
            amount: data.amount,
            transaction_id: data.transaction_id
        }
        this.templatesService.generatePdfFromTemplate(data_, template_id)
    }
}
