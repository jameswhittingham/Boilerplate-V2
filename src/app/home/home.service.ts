import { Injectable } from '@angular/core';
import { Tool } from './tool';
import { Tools } from './mock-tools';

@Injectable()
export class HomeService {
  getTools() {
    return Promise.resolve(Tools);
  }
}
