import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  categoryForm!:FormGroup;
  success!:boolean;
  loading!:boolean;
  info!:string;

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {

    this.categoryForm=new FormGroup({


      name:new FormControl("",Validators.required)
    })
  }

  onSubmit(){

    if(this.categoryForm.valid){
      this.loading=true;

      this.categoryService.addCategory(this.categoryForm.value).subscribe(data=>{

this.success=true;
this.info="Kategori Ekleme İşlemi Başarılı";
      },error=>{

        this.success=false;
        this.info="İşlem başarısız tekrar deneyin..";
        console.log(error);
      })
    }
  }

}
