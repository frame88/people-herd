import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { map, tap } from 'rxjs/operators';
import { Subscription, interval } from 'rxjs';
import { NavController } from '@ionic/angular';

import { IAuth } from '../models/IAuth';
import { IToken } from '../models/IToken';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  data: IAuth | undefined;
  token!: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    //private navCtrl: NavController
  ) { }
}
