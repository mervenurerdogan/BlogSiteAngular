import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';
import { ValidateServiceService } from 'src/app/services/validate-service.service';

@Component({
  selector: 'app-add-comments',
  templateUrl: './add-comments.component.html',
  styleUrls: ['./add-comments.component.css']
})
export class AddCommentsComponent implements OnInit {
  commentForm!: FormGroup;
  success!: boolean;
  info!: string;
  @Output() Reload: EventEmitter<string> = new EventEmitter();
  constructor(
    public commentService: CommentService,
    private route: ActivatedRoute,
    public myvalidationService: ValidateServiceService
  ) {}

  ngOnInit() {
    this.commentForm = new FormGroup({
      name: new FormControl('', Validators.required),
      contentMain: new FormControl('', Validators.required),
      articleId: new FormControl('')
    });
  }

  get getControls() {
    return this.commentForm.controls;
  }

  onSubmit() {

    if (this.commentForm.valid) {
      let id = Number(this.route.snapshot.paramMap.get('id'));

      this.commentForm.controls.articleId.setValue(id);

      this.commentService.addComment(this.commentForm.value).subscribe(
        data => {
          this.success = true;
          this.info = 'Yorumunuz başarıyla eklenmiştir.';
            this.Reload.emit();
        },
        error => {
          this.success = false;
          this.info =
            'Bir hata meydana geldi. Lütfen daha sonra tekrar deneyiniz..';
        }
      );
    }
  }


}
