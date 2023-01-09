import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGroups } from '../models/IGroups';
import { IUsers } from '../models/IUsers';
import { IRoles } from '../models/IRoles';

import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CentralService {
  //tables labels
  groups_labels: string[] = ['id', 'nome', 'descrizione'];
  users_labels: string[] = ['id', 'nome', 'cognome', 'nickname', 'mail', 'gruppo'];
  roles_labels: string[] = ['id', 'titolo', 'descrizione', 'default'];

  groups: IGroups[] | any;
  users: IUsers[] | any;
  roles: IRoles[] | any;

  active: IUsers | null = null;
  constructor(
    private http: HttpClient
  ) { }

  //_______GET
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
        console.log('users: ', result);
        this.users = result;
    });
  }

  getRoles() {
    this.http.get<IRoles>('http://localhost:3000/roles')
    .subscribe((result: IRoles) => {
        console.log('ruoli: ', result);
        this.roles = result;
    });
  }

  //_______POST
  addUsers(form: NgForm) {
    this.http.post<IUsers>(`http://localhost:3000/users`, form.value)
    .subscribe(result => {
      this.users.push(result);
      this.active = null;
      form.reset();
    });
  }

  addRole(form: NgForm) {
    this.http.post<IUsers>(`http://localhost:3000/roles`, form.value)
    .subscribe(result => {
      this.users.push(result);
      this.active = null;
      form.reset();
    });
  }


  addGroup(form: NgForm) {
    this.http.post<IUsers>(`http://localhost:3000/groups`, form.value)
    .subscribe(result => {
      this.users.push(result);
      this.active = null;
      form.reset();
    });
  }

  //_______DELETE
  deleteGroups(users: IGroups) {
    this.http.delete(`http://localhost:3000/groups/${users.id}`)
      .subscribe(() => {
        this.users.splice(users.id, 1);
      });
    }

    deleteRole(users: IRoles) {
      this.http.delete(`http://localhost:3000/roles/${users.id}`)
      .subscribe(() => {
        const index = this.users.findIndex((d: { id: number; }) => d.id === users.id);
        this.users.splice(index, 1);
      });
    }

    deleteUsers(users: IUsers) {
      this.http.delete(`http://localhost:3000/users/${users.id}`)
        .subscribe(() => {
          const index = this.users.findIndex((d: { id: number; }) => d.id === users.id);
          this.users.splice(index, 1);
        });
    }
  }
