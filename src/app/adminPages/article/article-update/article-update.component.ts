import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validator,
  FormControl,
  AbstractControl,
  Validators,
} from '@angular/forms';
import {  ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { ArticleService } from 'src/app/services/article.service';
import { CategoryService } from 'src/app/services/category.service';
import { ValidateServiceService } from 'src/app/services/validate-service.service';
import * as DeCoupleEditorBuild from '@ckeditor/ckeditor5-build-decoupled-document';


@Component({
  selector: 'app-article-update',
  templateUrl: './article-update.component.html',
  styleUrls: ['./article-update.component.css']
})
export class ArticleUpdateComponent implements OnInit {
  public Editor=DeCoupleEditorBuild;
  public onReady( editor:any ) {
    editor.ui.getEditableElement().parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
    );
}


  fileData: File = null as any;
  picture: string = null as any;
  articleForm!: FormGroup;
  success!: boolean;
  loading!: boolean;
  info!: string;
  categories!: Category[];
  articleId!:number;
  constructor(
    private articleService: ArticleService,
    private categoryService: CategoryService,
public validateService:ValidateServiceService,
    private router: Router,
    private route:ActivatedRoute



  ) { }

  ngOnInit(): void {

    this.getCategory();
    this.articleId=Number(this.route.snapshot.paramMap.get("id"));

    this.articleService.getArticleById(this.articleId).subscribe(data=>{
      this.picture=data.picture;

      this.getControls.title.setValue(data.title);
      this.getControls.contentSumary.setValue(data.contentSumary);
      this.getControls.contentMain.setValue(data.contentMain);
      this.getControls.category.setValue(data.category);


    })


    this.articleForm = new FormGroup({
      title: new FormControl('', Validators.required),
      contentSumary: new FormControl('', Validators.required),
      contentMain: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      picture: new FormControl(''),
    });
  }
  get getControls() {
    return this.articleForm.controls;
    //dropdown da sadece nameler gösteriliyor
  }
  //kategpriler için
  getCategory() {
    this.categoryService.getCategories().subscribe((result) => {
      this.categories = result;
    });
  }
  displayCategoryName(category: any) {
    return category.name;
  }


  upload(files: any) {
    //ilk seçtiği resmi almasını sağlıycaz
    this.fileData = files.target.files[0]; //birden fazla files gelebilir target ile hedefe git ve 0.cıyı al
    let formData = new FormData(); //formdata nesnesi oluşturduk
    formData.append('picture', this.fileData); //backende yazdığımız parametre adı da picture
    //append ile değişken ismi picture dosya da fileData olacak

    this.articleService.saveArticlePicture(formData).subscribe((result) => {
      //backende yazdığımız path i elde edicez

      console.log(result.path);
      this.picture = result.path;
      //burda resim yüklendi ise form a gidecek
      this.articleForm.controls.picture.setValue(this.picture);
    });
  }


  onSubmit() {
    if (this.articleForm.valid) {
      this.loading = true;
      this.articleService.updateArticle(this.articleId,this.articleForm.value).subscribe(
        (data) => {
          this.success = true;

          this.info = 'Makale Eklendi';
          this.router.navigateByUrl('/admin/makale/liste');
        },
        (error) => {
          this.success = false;
          this.info = 'Bir hata meydana geldi:';
          console.log(error);
        }
      );
    }
  }

}
