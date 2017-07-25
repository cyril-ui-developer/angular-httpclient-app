import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';

  constructor(private http: HttpClient ){ }

ngOnInit(){
    this.http.get('https://api.github.com/users').subscribe(data => {
    console.log(data)
    },
    (err:HttpErrorResponse) =>{
      if(err.error instanceof Error){
    console.log("Client Error has occured")
      }else{
    console.log("Server Error has occured")
      console.log(err.status)
      }

    })

this.http.post('http://jsonplaceholder.typicode.com/posts', {
title:"HttpClient App",
body:"Welcome to HttpClient App "
}).subscribe(
 res =>{
console.log(res);
 },
 err =>{
   console.log("an error occured");
 }
)
  }



}
