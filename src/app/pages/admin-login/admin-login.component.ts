import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  hide=true;

  constructor(private authService:AuthService,
    private router:Router


    ) { }

  ngOnInit(): void {
  }

  login(email:string,password:string){


    this.authService.isAuthendicated(email,password).subscribe(data=>{

   if(data.status==true){
    //true ise doğru demek
    //gelen bilgileri localstorage ye kaydediyoruz

localStorage.setItem("email",email);
localStorage.setItem("password",password);
this.router.navigate(["/admin"])
//sadece comp ismi yazılıyor burada



   }

   else{

    alert("Email veya şifre yanlış");
   }
    })
  }

}
