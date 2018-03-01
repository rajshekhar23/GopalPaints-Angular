import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-paint-category-items',
  templateUrl: './list-paint-category-items.component.html',
  styleUrls: ['./list-paint-category-items.component.css']
})
export class ListPaintCategoryItemsComponent implements OnInit {
  public gridSelected: boolean;
  constructor() {
    this.gridSelected = true;
  }

  ngOnInit() {

  }

  showListView() {
    this.gridSelected = true;
  }

  showGridView() {
    this.gridSelected = false;
  }
}
