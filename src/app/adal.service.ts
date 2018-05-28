import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import 'expose-loader?AuthenticationContext!../../../node_modules/adal-angular/lib/adal.js'; 

@Injectable({
  providedIn: 'root'
})
export class AdalService {

  constructor() { }
}
