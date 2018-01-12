import { Injectable } from '@angular/core';
import mockPreuves from './mock-preuves';

@Injectable()
export class PreuvesService {
  private preuves;

  public constructor() {
    this.preuves = mockPreuves; // TODO get preuves from DB
  }

  public getPreuves() {
    return this.preuves;
  }

  public getPreuvesByTag(searchedTags: string[]) {
    const searchedPreuves = [];
    return searchedPreuves;
  }
}
