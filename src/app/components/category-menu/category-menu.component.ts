import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import {CategoryService} from '../../services/category.service'

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.css']
})
export class CategoryMenuComponent implements OnInit {

  categories: Category[] = [];
  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }
}
