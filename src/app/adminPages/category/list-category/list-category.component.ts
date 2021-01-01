import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import {MaterialModule}  from '../../../modules/material.module'
@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css'],
})
export class ListCategoryComponent implements OnInit {
  displayedColumns: string[] = [
    'name', //sutun isimleri vt deki
  'action'
  ];
  dataSource: any;
  categories!: Category[];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  //viewchild html kısmında componenetleri kullanmamızı sağlar nesne üretip
  //static true dedik çünkü sayfalam değiştikçe değişecek
  //(MatPaginator ) değişken tipi
  //paginator değişkenimiz

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
      this.dataSource = new MatTableDataSource<Category>(data);

       this.dataSource.paginator=this.paginator;
    });
  }

  deleteCategory(id:number){

    this.categoryService.deleteCategory(id).subscribe(data=>{

      //categoryi bul
      let category=this.categories.filter((x)=>x.id==id)[0];
      let index=this.categories.indexOf(category);

      this.categories.splice(index,1);//index i belli olan categori splice ile siliyoruz

      //sildikten sonra sayfayı güncelle
      this.dataSource=new MatTableDataSource<Category>(this.categories);
       this.dataSource.paginator=this.paginator;

    })


  }
}
