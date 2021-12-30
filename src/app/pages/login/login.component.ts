import { Component, OnInit } from '@angular/core';
import { BackendApiService } from 'src/app/services/backend-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public backend: BackendApiService) { }
  model:any={};


  ngOnInit(): void {
  }
  formSubmit(){
    console.log(this.model,"model")
    this.backend.login(this.model).subscribe( data => {
      console.log(data,"data");
      console.log("Login Succesfull");

     }
    )
  }

}
