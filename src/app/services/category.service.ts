import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category} from '../models/category';
import { environment } from '../../../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl: string = `${environment.baseUrl}/categories`;
  constructor(private httpCleint: HttpClient) {}

  public getCategories() {
    return this.httpCleint.get<Category[]>(this.apiUrl);
  }


  public getCategorybyId(id: number) {

    let url = `${this.apiUrl}/${id}`;
    return this.httpCleint.get<Category>(url);
  }

  public addCategory(category:Category){



    return this.httpCleint.post<any>(this.apiUrl,category);
  }

  deleteCategory(id:number){
    return  this.httpCleint.delete(`${this.apiUrl}/${id}`);

  }

  updateCategoroy(id:number,category:Category){


    return this.httpCleint.put(`${this.apiUrl}/${id}`,category);
  }



}
