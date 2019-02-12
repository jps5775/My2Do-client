import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'My2Do-client';

  constructor(private httpClient: HttpClient){

  }

  ngOnInit(){
    // this.httpClient.get("http://localhost:8080/users")
    // .subscribe((data: String) => this.={

    // })

  }


}
