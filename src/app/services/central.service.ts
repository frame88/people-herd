import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGroups } from '../models/IGroups';
import { IUsers } from '../models/IUsers';
import { IRoles } from '../models/IRoles';

@Injectable({
  providedIn: 'root'
})
export class CentralService {
  //tables labels
  groups_labels: string[] = ['id', 'nome', 'ruolo', 'descrizione'];
  users_labels: string[] = ['id', 'nome', 'cognome', 'nickname', 'mail', 'gruppo'];
  roles_labels: string[] = ['id', 'titolo', 'descrizione', 'default'];
  
  groups: IGroups[] | any;
  users: IUsers[] | any;
  roles: IRoles[] | any;

  constructor(
    public http: HttpClient
  ) { }

  getGroups() {
    this.http.get<IGroups>('http://localhost:3000/groups')
    .subscribe((result: IGroups) => {
        console.log('gruppi: ', result);
        this.groups = result;
    });
  }
  getUsers() {
    this.http.get<IUsers>('http://localhost:3000/users')
    .subscribe((result: IUsers) => {
        console.log('users', result);
        this.users = result;
    });
  }
  getRoles() {
    this.http.get<IRoles>('http://localhost:3000/roles')
    .subscribe((result: IRoles) => {
        console.log('ruoli', result);
        this.roles = result;
    });
  }

}
