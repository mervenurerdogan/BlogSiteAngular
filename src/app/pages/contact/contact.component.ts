import { formatNumber } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  Validators,
  Validator,
  FormGroup,
  AbstractControl
} from '@angular/forms';

import {MatFormFieldModule} from '@angular/material/form-field';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactform!: FormGroup;
  loading!: boolean;
  success!: boolean;
  info!: string;

  constructor(private helperService: HelperService) {}

  ngOnInit(): void {
    this.contactform = new FormGroup({
      //html kısmında karşılık geleck nesneleriz burada yazıyoruz

      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      subject: new FormControl('', Validators.required),
      message: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }
  GetValidationMessages(f: AbstractControl, name: string) {
    if (f.errors) {
      for (let errroName in f.errors) {
        if (errroName == "required") return `${name} alanı boş bırakılamaz`;
        else if (errroName == "email") return `email formatı yanlış`;
        else if (errroName == "minlength")
          return `${name} alanız en az 10 karakter olmalıdır.`;
      }
    }
    return ;
  }

  get getControls() {
    return this.contactform.controls;
  }

  onsubmit() {
    if (this.contactform.valid) {
      //form dolu mu kontrol ediyoruz
      this.helperService.sendContactEmail(this.contactform.value).subscribe(
        (data) => {
          this.loading = false;
          this.success = true;
          this.contactform.reset();
          this.info = 'Mesajınız iletildi en kısa zamanda dönüş yapılacaktır.';
        },
        (error) => {
          this.success = false;
          this.loading = false;
          this.info = 'Bir hata oluştu.';
        }
      );
    }

    else{
      return ;
    }
  }
}
