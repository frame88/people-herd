import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IGroups } from '../models/IGroups';
import { IUsers } from '../models/IUsers';
import { IRoles } from '../models/IRoles';
@Injectable({
  providedIn: 'root'
})
export class CentralService {
  //tables labels
  groups_labels: string[] = ['id', 'nome', 'descrizione', 'ruolo'];
  users_labels: string[] = ['id', 'nome', 'cognome', 'nickname', 'mail', 'gruppo'];
  roles_labels: string[] = ['id', 'titolo', 'descrizione', 'default'];

  groups: IGroups[] | any;
  users: IUsers[] | any;
  roles: IRoles[] | any;

  error: any;

  url = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  //_______GET
  getGroups() {
    this.http.get<IGroups[]>(`${this.url}/groups`)
    .subscribe((result: IGroups[]) => {
      console.log('gruppi: ', result);
      this.groups = result;
    });
  }

  getUsers() {
    this.http.get<IUsers[]>(`${this.url}/users`)
    .subscribe((result: IUsers[]) => {
        console.log('users: ', result);
        this.users = result;
    });
  }

  getRoles() {
    this.http.get<IRoles[]>(`${this.url}/roles`)
    .subscribe((result: IRoles[]) => {
        console.log('ruoli: ', result);
        this.roles = result;
    });
  }

  //_______POST
  addUsers(form: NgForm) {
    this.http.post<IUsers>(`${this.url}/users`, form.value)
    .subscribe((result: IUsers) => {
      this.users.push(result);
      form.reset();
    });
  }

  addRole(form: NgForm) {
    this.http.post<IUsers>(`${this.url}/roles`, form.value)
    .subscribe(result => {
      this.roles.push(result);
      form.reset();
    });
  }


  addGroup(form: NgForm) {
    this.http.post<IUsers>(`${this.url}/groups`, form.value)
    .subscribe(result => {
      this.groups.push(result);
      form.reset();
    });
  }

  //_______DELETE
  deleteGroups(users: IGroups) {
    this.http.delete(`${this.url}/groups/${users.id}`)
      .subscribe(() => {
        const index = this.groups.findIndex((d: { id: number; }) => d.id === users.id);
        this.groups.splice(users.id, 1);
      });
    }

    deleteRole(users: IRoles) {
      this.http.delete(`${this.url}/roles/${users.id}`)
      .subscribe(() => {
        const index = this.roles.findIndex((d: { id: number; }) => d.id === users.id);
        this.roles.splice(index, 1);
      });
    }

    deleteUsers(user: IUsers) {
      this.http.delete(`${this.url}/usersssss/${user.id}`)
        .subscribe(() => {
          const index = this.users.indexOf(user);
          this.users.splice(index, 1);
        },
        err => this.error = err
        );
    }

  }