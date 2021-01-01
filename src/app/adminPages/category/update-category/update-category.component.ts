import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ValidateServiceService } from 'src/app/services/validate-service.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {
  categoryForm!:FormGroup;
  success!:boolean;
  loading!:boolean;
  info!:string;
  categoryId!:number;


  constructor(private categoryService:CategoryService,

    private route:ActivatedRoute,
    private router:Router,
    private validateService:ValidateServiceService

    ) { }

  ngOnInit(): void {

    this.categoryId=Number(this.route.snapshot.paramMap.get("id"));

    this.categoryService.getCategorybyId(this.categoryId).subscribe(data=>{

      this.getControls.name.setValue(data.name);
    })

    this.categoryForm=new FormGroup({
      name:new FormControl("",Validators.required)

    })
  }

  get getControls(){

    return this.categoryForm.controls;
  }

  onSubmit(){

if(this.categoryForm.valid){

  this.loading=true;
  this.categoryService.updateCategoroy(this.categoryId,this.categoryForm.value).subscribe(

    data=>{

      this.success=true;
      this.info="Kategori Adı Güncellendi";
      this.router.navigateByUrl('/admin/kategori/liste');
    },error=>{
      this.success=false;
      this.info="Bir hata oluştu sonra tekrar deneyiniz..";
      console.log(error);
    }
  )
}


  }

}
