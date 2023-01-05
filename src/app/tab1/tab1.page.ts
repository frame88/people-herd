import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { PeriodicElement } from '../models/IPeriodic';

import { IGroups } from '../models/IGroups';
import { HttpClient } from '@angular/common/http';
let ELEMENT_DATA: IGroups[] | any = [];
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  displayedColumns: string[] = ['id', 'name', 'description', 'roule'];
  groups: IGroups[] | any;
  dataSource = ELEMENT_DATA;

  constructor(private http: HttpClient) {
    this.getGroups();
  }


  getGroups() {
    this.http.get<IGroups>('http://localhost:3000/groups')
    .subscribe((result: IGroups) => {
        ELEMENT_DATA = result;
        console.log(result);
        console.log('element data', ELEMENT_DATA);
    });
  }


}






// import { IGroups } from './../models/IGroups';
// import {AfterViewInit, Component, ViewChild} from '@angular/core';
// import {MatPaginator} from '@angular/material/paginator';
// import {MatTableDataSource} from '@angular/material/table';
// import { PeriodicElement } from '../models/IPeriodic';

// @Component({
//   selector: 'app-tab1',
//   templateUrl: 'tab1.page.html',
//   styleUrls: ['tab1.page.scss']
// })
// export class Tab1Page implements AfterViewInit {


//   displayedColumns: string[] = ['id', 'name', 'desciption', 'roule'];


//   constructor() {}

//   ngAfterViewInit() {
//   }

//   ELEMENT_DATA: IGroups[];
//   dataSource = new MatTableDataSource<IGroups>(this.ELEMENT_DATA);

// }


