import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  sortableList = [];

  errors = [];

  senddata(value, i): void {
    var a = value;
    if (a === null || a === '') {
      this.errors.push({
        id: i,
        error: 'Category name is required'
      });
      return;
    } else if (a.length >= 25) {
      this.errors.push({
        id: i,
        error: 'Category must be less than 25 characters long'
      });
      return;
    } else {
      this.errors = null;
    }
    var current = this.sortableList.length;
    console.log('Value ' + a);
    console.log('Current ' + current);
    this.sortableList.splice(i, 1, {
      id: current,
      title: a,
      editing: false
    });
  }

  addCatagory(): void {
    var current = this.sortableList.length;
    this.sortableList.push({
      id: current + 1,
      title: 'Catagory ' + (current + 1),
      editing: true
    });
  }

  delCatagory(a): void {
    var pos = this.sortableList
      .map(function(e) {
        return e.id;
      })
      .indexOf(a);
    this.sortableList.splice(pos, 1);
  }

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {}
}
