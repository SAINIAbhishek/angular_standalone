import { Injectable } from '@angular/core';

@Injectable()
export class AnalyticsService {

  constructor() { }

  public registerClick() {
    console.log('Clicked!');
  }

}
