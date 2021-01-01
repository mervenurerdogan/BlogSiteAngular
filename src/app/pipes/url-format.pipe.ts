import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlFormat'
})
export class UrlFormatPipe implements PipeTransform {

  transform(value: any, arg?:any): any {


    value = value.toLowerCase();//bütün karakterler küçük
    value = value.replace(/[",.*+?^${}()|[\]\\]/g, "-");//karakterler gelirse tire yap
    value = value.replace(/\s/g, "-");//boş karakter varsa tire yap
    value = value.replace(/[ç]/g, "c");//ç karakterini c yap
    value = value.replace(/[ğ]/g, "g");//
    value = value.replace(/[ı]/g, "i");
    value = value.replace(/[ö]/g, "o");
    value = value.replace(/[ş]/g, "s");
    value = value.replace(/[ü]/g, "u");

    return value;

  }

}
