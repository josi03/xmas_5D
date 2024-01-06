import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  primo:{nome:string, cognome:string}[] = [];
  secondo:{nome:string, eta:number}[] = [];
  terzo:{esito:string, codice:number}[] = [];

  constructor(private http:HttpClient) {
    this.http.get<any[]>("http://localhost:3000/api").subscribe(
      res => {
        res.forEach(x => {
          this.primo.push({nome:x["nome"], cognome:x["cognome"]})
        });
      },
      err => {
        console.log(err);
      }
    );
    this.http.get<any[]>("http://localhost:3000/catch").subscribe(
      res => {
        res.forEach(x => {
          this.secondo.push({nome:x["nome"], eta:x["eta"]})
        });
      },
      err => {
        console.log(err);
      }
    );
    this.http.get<any[]>("http://localhost:3000/nope").subscribe(
      res => {
        res.forEach(x => {
          this.terzo.push({esito:x["esito"], codice:x["codice"]})
        });
      },
      err => {
        console.log(err);
      }
    );
  }
}
