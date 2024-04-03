import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class PlaceHoldersService {
  private readonly placeHolders: any; 

  constructor() {
    this.placeHolders = this.loadPlaceHolders(); 
  }

  private loadPlaceHolders(): any {
    const rawData = fs.readFileSync('path/to/placeholders.json', 'utf-8'); 
    return JSON.parse(rawData); 
  }

  getPlaceholderByKey(key: string): any {
    return this.placeHolders[key];
  }
}
