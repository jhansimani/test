import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  categories = [];
  term = '';
  duplicateData = [
    {
      name: 'asfd',
      class: 3,
      section: 'D',
      sub1: 23,
      sub2: 54,
      sub3: 65,
    },
    {
      name: 'asdf',
      class: 3,
      section: 'E',
      sub1: 23,
      sub2: 45,
      sub3: 67,
    },
    {
      name: 'asdf',
      class: 3,
      section: 'F',
      sub1: 26,
      sub2: 34,
      sub3: 45,
    },
    {
      name: 'asfd',
      class: 3,
      section: 'A',
      sub1: 34,
      sub2: 34,
      sub3: 71,
    },
  ];
  studentList: any[] = [];
  constructor() {}
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
        if (a[key] === b[key]) {
          return a['section'] < b['section'] ? -1 : 1;
        }
        return a[key] - b[key];
      } else {
        console.log('string', key);
        var nameA = a[key].toUpperCase(); // ignore upper and lowercase
        var nameB = b[key].toUpperCase(); // ignore upper and lowercase
        console.log(nameA, nameB);
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        if (a[key] === b[key]) {
          return a['section'] < b['section'] ? -1 : 1;
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
