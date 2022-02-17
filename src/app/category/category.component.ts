import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [DataService],
})
export class CategoryComponent implements OnInit {
  categories = [];
  term = '';
  duplicateData = [
    {
      name: 'Jhansi',
      class: 3,
      section: 'B',
      sub1: 35,
      sub2: 29,
      sub3: 20,
      sub4: 64,
    },
    {
      name: 'Zubedha',
      class: 3,
      section: 'C',
      sub1: 45,
      sub2: 75,
      sub3: 90,
      sub4: 80,
    },
    {
      name: 'kajal',
      class: 2,
      section: 'A',
      sub1: 52,
      sub2: 10,
      sub3: 20,
      sub4: 91,
    },
    {
      name: 'Anitha',
      class: 3,
      section: 'E',
      sub1: 35,
      sub2: 75,
      sub3: 69,
      sub4: 95,
    },
    {
      name: 'dhanya',
      class: 1,
      section: 'D',
      sub1: 20,
      sub2: 75,
      sub3: 50,
      sub4: 100,
    },
    {
      name: 'indraja',
      class: 3,
      section: 'B',
      sub1: 83,
      sub2: 60,
      sub3: 20,
      sub4: 80,
    },
  ];
  studentList: any[] = [];
  constructor(private dataService: DataService) {}
  keys: any[] = [];
  clikedKeys: any[] = [];
  ngOnInit(): void {
    // this.dataService.fetchData();
    // this.duplicateData = this.studentList;
    this.studentList = this.duplicateData.slice();
    for (let key in this.studentList) {
      let value = this.studentList[key];
      for (const key2 of Object.keys(this.studentList[key])) {
        if (!this.keys.includes(key2)) {
          this.keys.push(key2);
          this.clikedKeys.push({ [key2]: 0 });
        }
      }
      // console.log(value);
      // Use `key` and `value`
    }
    console.log(this.keys);
  }
  click = 0;
  operation(key: any) {
    this.click = this.click + 1;
    console.log(this.click);
    console.log(this.clikedKeys);
    this.clikedKeys.map((element) => {
      for (const key2 of Object.keys(element)) {
        if (key2 === key) {
          element[key] = element[key] + 1;

          if (element[key] === 1) {
            this.ascendingOrder(key);
          } else if (element[key] === 2) {
            this.descendingOrder(key);
          } else if (element[key] === 3) {
            this.studentList = this.duplicateData.slice();
            element[key] = 0;
          }
        }
      }
    });
  }
  ascendingOrder(key: string) {
    console.log(key);
    this.studentList.sort((a: any, b: any) => {
      if (typeof a[key] === 'number') {
        if(a[key] === b[key]){
          return a['section'] < b['section'] ? -1 : 1;
        }
        return a[key] - b[key];
        // return a[key] > b[key]? -1 : 1;
      } else {
        console.log('string', key);
        var nameA = a[key].toUpperCase(); // ignore upper and lowercase
        var nameB = b[key].toUpperCase(); // ignore upper and lowercase
        console.log(nameA,nameB);
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      }
    });
  }
  descendingOrder(key: string) {
    this.studentList.sort((a: any, b: any) => {
      if (typeof a[key] === 'number') {
        return b[key] - a[key];
      } else {
        var nameA = a[key].toUpperCase(); // ignore upper and lowercase
        var nameB = b[key].toUpperCase(); // ignore upper and lowercase
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        } else {
          return 0;
        }
        // names must be equal
      }
    });
  }
  resetData() {
    this.studentList = this.duplicateData;
  }
}
