import { Injectable } from '@nestjs/common';
import * as fs from 'fs'
import * as puppeteer from 'puppeteer';
import * as Handlebars from 'handlebars';
import * as path from 'path';

@Injectable()
export class TemplatesService {
  async generatePdfFromTemplate(data: any, template_id: string) {

    const {user_id, name, amount, transaction_id} = data;

    const templateSource = fs.readFileSync(
        path.resolve( process.cwd(), 'src', 'templates', "htmlTemplates", "template_"+template_id, 'index.html'),
        'utf8'
    );

    const template = Handlebars.compile(templateSource);

    const filledHTML = template({
        name,
        amount,
        transaction_id
    });

    fs.writeFileSync(
        path.resolve( process.cwd(), 'src', 'templates', "htmlTemplates", "template_"+template_id, user_id+'.html'), 
        filledHTML,
        'utf8'
    );
    await this.convertHtmlToPdf(
        path.resolve( process.cwd(), 'src', 'templates', "htmlTemplates", "template_"+template_id, user_id+'.html'),
        path.join(process.cwd(), 'src', 'templates', 'pdf', user_id+'.pdf')
    );
  }

  private async convertHtmlToPdf(htmlFilePath: string, pdfFilePath: string) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`file://${htmlFilePath}`, { waitUntil: 'networkidle0' });
    await page.pdf({ path: pdfFilePath, format: 'A4' });
    await browser.close();
  }

}

